// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/integrate_ise
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrateIseConfig extends cdktf.TerraformMetaArguments {
  /**
  * ISE instance UUID, obtained from the id of the catalystcenter_authentication_policy_server resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/integrate_ise#ise_instance_id IntegrateIse#ise_instance_id}
  */
  readonly iseInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/integrate_ise catalystcenter_integrate_ise}
*/
export class IntegrateIse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_integrate_ise";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrateIse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrateIse to import
  * @param importFromId The id of the existing IntegrateIse that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/integrate_ise#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrateIse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_integrate_ise", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/integrate_ise catalystcenter_integrate_ise} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrateIseConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrateIseConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_integrate_ise',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._iseInstanceId = config.iseInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ise_instance_id - computed: false, optional: false, required: true
  private _iseInstanceId?: string; 
  public get iseInstanceId() {
    return this.getStringAttribute('ise_instance_id');
  }
  public set iseInstanceId(value: string) {
    this._iseInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iseInstanceIdInput() {
    return this._iseInstanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ise_instance_id: cdktf.stringToTerraform(this._iseInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ise_instance_id: {
        value: cdktf.stringToHclTerraform(this._iseInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
