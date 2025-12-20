// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/lock
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LockConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the entity to lock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/lock#entity_id Lock#entity_id}
  */
  readonly entityId: number;
  /**
  * The type of the entity to lock. Currently only 'linode' is supported. Note: Linodes that are part of an LKE cluster cannot be locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/lock#entity_type Lock#entity_type}
  */
  readonly entityType: string;
  /**
  * The type of lock. Only one lock type can exist per resource at a time. Valid values are 'cannot_delete' (prevents deletion, rebuild, and transfer) and 'cannot_delete_with_subresources' (prevents deletion, rebuild, transfer, and deletion of subresources such as disks, configs, interfaces, and IP addresses).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/lock#lock_type Lock#lock_type}
  */
  readonly lockType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/lock linode_lock}
*/
export class Lock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_lock";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lock to import
  * @param importFromId The id of the existing Lock that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/lock#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_lock", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/lock linode_lock} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LockConfig
  */
  public constructor(scope: Construct, id: string, config: LockConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_lock',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entityId = config.entityId;
    this._entityType = config.entityType;
    this._lockType = config.lockType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: number; 
  public get entityId() {
    return this.getNumberAttribute('entity_id');
  }
  public set entityId(value: number) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_label - computed: true, optional: false, required: false
  public get entityLabel() {
    return this.getStringAttribute('entity_label');
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // entity_url - computed: true, optional: false, required: false
  public get entityUrl() {
    return this.getStringAttribute('entity_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_type - computed: false, optional: false, required: true
  private _lockType?: string; 
  public get lockType() {
    return this.getStringAttribute('lock_type');
  }
  public set lockType(value: string) {
    this._lockType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lockTypeInput() {
    return this._lockType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_id: cdktf.numberToTerraform(this._entityId),
      entity_type: cdktf.stringToTerraform(this._entityType),
      lock_type: cdktf.stringToTerraform(this._lockType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_id: {
        value: cdktf.numberToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_type: {
        value: cdktf.stringToHclTerraform(this._lockType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
