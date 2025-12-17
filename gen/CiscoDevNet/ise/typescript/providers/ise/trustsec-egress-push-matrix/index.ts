// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/trustsec_egress_push_matrix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustsecEgressPushMatrixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true to re-trigger push on update. Will automatically reset to false after execution.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/trustsec_egress_push_matrix#force TrustsecEgressPushMatrix#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/trustsec_egress_push_matrix ise_trustsec_egress_push_matrix}
*/
export class TrustsecEgressPushMatrix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_trustsec_egress_push_matrix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrustsecEgressPushMatrix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrustsecEgressPushMatrix to import
  * @param importFromId The id of the existing TrustsecEgressPushMatrix that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/trustsec_egress_push_matrix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrustsecEgressPushMatrix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_trustsec_egress_push_matrix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/trustsec_egress_push_matrix ise_trustsec_egress_push_matrix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustsecEgressPushMatrixConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TrustsecEgressPushMatrixConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ise_trustsec_egress_push_matrix',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.14',
        providerVersionConstraint: '0.2.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._force = config.force;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force - computed: true, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force: cdktf.booleanToTerraform(this._force),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
