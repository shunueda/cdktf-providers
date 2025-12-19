// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_validate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Lw4O6BindingTableValidateConfig extends cdktf.TerraformMetaArguments {
  /**
  * LW-4over6 Binding Table Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_validate#binding_name Cgnv6Lw4O6BindingTableValidate#binding_name}
  */
  readonly bindingName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_validate#id Cgnv6Lw4O6BindingTableValidate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_validate thunder_cgnv6_lw_4o6_binding_table_validate}
*/
export class Cgnv6Lw4O6BindingTableValidate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lw_4o6_binding_table_validate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Lw4O6BindingTableValidate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Lw4O6BindingTableValidate to import
  * @param importFromId The id of the existing Cgnv6Lw4O6BindingTableValidate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_validate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Lw4O6BindingTableValidate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lw_4o6_binding_table_validate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lw_4o6_binding_table_validate thunder_cgnv6_lw_4o6_binding_table_validate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Lw4O6BindingTableValidateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Lw4O6BindingTableValidateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lw_4o6_binding_table_validate',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindingName = config.bindingName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binding_name - computed: false, optional: true, required: false
  private _bindingName?: string; 
  public get bindingName() {
    return this.getStringAttribute('binding_name');
  }
  public set bindingName(value: string) {
    this._bindingName = value;
  }
  public resetBindingName() {
    this._bindingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingNameInput() {
    return this._bindingName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binding_name: cdktf.stringToTerraform(this._bindingName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binding_name: {
        value: cdktf.stringToHclTerraform(this._bindingName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
