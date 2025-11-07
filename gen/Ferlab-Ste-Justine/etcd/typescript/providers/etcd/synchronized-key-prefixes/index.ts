// https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_key_prefixes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynchronizedKeyPrefixesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination key prefix to synchronize to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_key_prefixes#destination_prefix SynchronizedKeyPrefixes#destination_prefix}
  */
  readonly destinationPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_key_prefixes#id SynchronizedKeyPrefixes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines when the resource should be recreated to trigger a resync. Can be set to once, onchange or always. Note that onchange looks for change during the plan phase only so consider setting it to always if another terraform resource in your script changes the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_key_prefixes#recurrence SynchronizedKeyPrefixes#recurrence}
  */
  readonly recurrence?: string;
  /**
  * Source key prefix to synchronize from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_key_prefixes#source_prefix SynchronizedKeyPrefixes#source_prefix}
  */
  readonly sourcePrefix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_key_prefixes etcd_synchronized_key_prefixes}
*/
export class SynchronizedKeyPrefixes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "etcd_synchronized_key_prefixes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SynchronizedKeyPrefixes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SynchronizedKeyPrefixes to import
  * @param importFromId The id of the existing SynchronizedKeyPrefixes that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_key_prefixes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SynchronizedKeyPrefixes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "etcd_synchronized_key_prefixes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_key_prefixes etcd_synchronized_key_prefixes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynchronizedKeyPrefixesConfig
  */
  public constructor(scope: Construct, id: string, config: SynchronizedKeyPrefixesConfig) {
    super(scope, id, {
      terraformResourceType: 'etcd_synchronized_key_prefixes',
      terraformGeneratorMetadata: {
        providerName: 'etcd',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationPrefix = config.destinationPrefix;
    this._id = config.id;
    this._recurrence = config.recurrence;
    this._sourcePrefix = config.sourcePrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_prefix - computed: false, optional: false, required: true
  private _destinationPrefix?: string; 
  public get destinationPrefix() {
    return this.getStringAttribute('destination_prefix');
  }
  public set destinationPrefix(value: string) {
    this._destinationPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixInput() {
    return this._destinationPrefix;
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

  // recurrence - computed: false, optional: true, required: false
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // source_prefix - computed: false, optional: false, required: true
  private _sourcePrefix?: string; 
  public get sourcePrefix() {
    return this.getStringAttribute('source_prefix');
  }
  public set sourcePrefix(value: string) {
    this._sourcePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixInput() {
    return this._sourcePrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_prefix: cdktf.stringToTerraform(this._destinationPrefix),
      id: cdktf.stringToTerraform(this._id),
      recurrence: cdktf.stringToTerraform(this._recurrence),
      source_prefix: cdktf.stringToTerraform(this._sourcePrefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_prefix: {
        value: cdktf.stringToHclTerraform(this._destinationPrefix),
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
      recurrence: {
        value: cdktf.stringToHclTerraform(this._recurrence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_prefix: {
        value: cdktf.stringToHclTerraform(this._sourcePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
