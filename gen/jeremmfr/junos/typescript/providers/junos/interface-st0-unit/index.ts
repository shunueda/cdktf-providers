// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_st0_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceSt0UnitConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_st0_unit junos_interface_st0_unit}
*/
export class InterfaceSt0Unit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_interface_st0_unit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceSt0Unit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceSt0Unit to import
  * @param importFromId The id of the existing InterfaceSt0Unit that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_st0_unit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceSt0Unit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_interface_st0_unit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_st0_unit junos_interface_st0_unit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceSt0UnitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceSt0UnitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_interface_st0_unit',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
