// https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbaasParametersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameters#name DbaasParameters#name}
  */
  readonly name: string;
  /**
  * ID of the parameter group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameters#parameter_group_id DbaasParameters#parameter_group_id}
  */
  readonly parameterGroupId: string;
  /**
  * Value of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameters#value DbaasParameters#value}
  */
  readonly value: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameters mgc_dbaas_parameters}
*/
export class DbaasParameters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_dbaas_parameters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbaasParameters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbaasParameters to import
  * @param importFromId The id of the existing DbaasParameters that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbaasParameters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_dbaas_parameters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/dbaas_parameters mgc_dbaas_parameters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbaasParametersConfig
  */
  public constructor(scope: Construct, id: string, config: DbaasParametersConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_dbaas_parameters',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.1',
        providerVersionConstraint: '0.41.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._parameterGroupId = config.parameterGroupId;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // parameter_group_id - computed: false, optional: false, required: true
  private _parameterGroupId?: string; 
  public get parameterGroupId() {
    return this.getStringAttribute('parameter_group_id');
  }
  public set parameterGroupId(value: string) {
    this._parameterGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupIdInput() {
    return this._parameterGroupId;
  }

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: any }; 
  public get value() {
    return this.getAnyMapAttribute('value');
  }
  public set value(value: { [key: string]: any }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parameter_group_id: cdktf.stringToTerraform(this._parameterGroupId),
      value: cdktf.hashMapper(cdktf.anyToTerraform)(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_group_id: {
        value: cdktf.stringToHclTerraform(this._parameterGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._value),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
