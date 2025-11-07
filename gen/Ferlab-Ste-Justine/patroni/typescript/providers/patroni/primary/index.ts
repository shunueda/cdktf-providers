// https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/primary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrimaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not the node should be primary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/primary#is_primary Primary#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Name of node whose primary status you want to impact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/primary#name Primary#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/primary patroni_primary}
*/
export class Primary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "patroni_primary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Primary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Primary to import
  * @param importFromId The id of the existing Primary that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/primary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Primary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "patroni_primary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/primary patroni_primary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrimaryConfig
  */
  public constructor(scope: Construct, id: string, config: PrimaryConfig) {
    super(scope, id, {
      terraformResourceType: 'patroni_primary',
      terraformGeneratorMetadata: {
        providerName: 'patroni',
        providerVersion: '0.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isPrimary = config.isPrimary;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // is_primary - computed: true, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_primary: cdktf.booleanToTerraform(this._isPrimary),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_primary: {
        value: cdktf.booleanToHclTerraform(this._isPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
