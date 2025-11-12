// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/virtual_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * False during create and updateable to delete indicating virtual key to be deletable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/virtual_key#deletable VirtualKey#deletable}
  */
  readonly deletable?: boolean | cdktf.IResolvable;
  /**
  * HSM key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/virtual_key#source_key_id VirtualKey#source_key_id}
  */
  readonly sourceKeyId?: string;
  /**
  * Source key tier for virtual key - hsm-luna or local.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/virtual_key#source_key_tier VirtualKey#source_key_tier}
  */
  readonly sourceKeyTier?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/virtual_key ciphertrust_virtual_key}
*/
export class VirtualKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_virtual_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualKey to import
  * @param importFromId The id of the existing VirtualKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/virtual_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_virtual_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/virtual_key ciphertrust_virtual_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VirtualKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_virtual_key',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletable = config.deletable;
    this._sourceKeyId = config.sourceKeyId;
    this._sourceKeyTier = config.sourceKeyTier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletable - computed: false, optional: true, required: false
  private _deletable?: boolean | cdktf.IResolvable; 
  public get deletable() {
    return this.getBooleanAttribute('deletable');
  }
  public set deletable(value: boolean | cdktf.IResolvable) {
    this._deletable = value;
  }
  public resetDeletable() {
    this._deletable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletableInput() {
    return this._deletable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // partition_id - computed: true, optional: false, required: false
  public get partitionId() {
    return this.getStringAttribute('partition_id');
  }

  // partition_label - computed: true, optional: false, required: false
  public get partitionLabel() {
    return this.getStringAttribute('partition_label');
  }

  // source_key_id - computed: false, optional: true, required: false
  private _sourceKeyId?: string; 
  public get sourceKeyId() {
    return this.getStringAttribute('source_key_id');
  }
  public set sourceKeyId(value: string) {
    this._sourceKeyId = value;
  }
  public resetSourceKeyId() {
    this._sourceKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyIdInput() {
    return this._sourceKeyId;
  }

  // source_key_tier - computed: false, optional: true, required: false
  private _sourceKeyTier?: string; 
  public get sourceKeyTier() {
    return this.getStringAttribute('source_key_tier');
  }
  public set sourceKeyTier(value: string) {
    this._sourceKeyTier = value;
  }
  public resetSourceKeyTier() {
    this._sourceKeyTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyTierInput() {
    return this._sourceKeyTier;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
      deletable: cdktf.booleanToTerraform(this._deletable),
      source_key_id: cdktf.stringToTerraform(this._sourceKeyId),
      source_key_tier: cdktf.stringToTerraform(this._sourceKeyTier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletable: {
        value: cdktf.booleanToHclTerraform(this._deletable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_key_id: {
        value: cdktf.stringToHclTerraform(this._sourceKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_key_tier: {
        value: cdktf.stringToHclTerraform(this._sourceKeyTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
