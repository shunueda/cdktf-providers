// https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/alter_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlterRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/alter_role#id AlterRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the parameter to alter on the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/alter_role#parameter_key AlterRole#parameter_key}
  */
  readonly parameterKey: string;
  /**
  * The value of the parameter which is being set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/alter_role#parameter_value AlterRole#parameter_value}
  */
  readonly parameterValue: string;
  /**
  * The name of the role to alter the attributes of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/alter_role#role_name AlterRole#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/alter_role postgresql_alter_role}
*/
export class AlterRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "postgresql_alter_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlterRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlterRole to import
  * @param importFromId The id of the existing AlterRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/alter_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlterRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "postgresql_alter_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/alter_role postgresql_alter_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlterRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AlterRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_alter_role',
      terraformGeneratorMetadata: {
        providerName: 'postgresql',
        providerVersion: '2.26.2',
        providerVersionConstraint: '2.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameterKey = config.parameterKey;
    this._parameterValue = config.parameterValue;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parameter_key - computed: false, optional: false, required: true
  private _parameterKey?: string; 
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }
  public set parameterKey(value: string) {
    this._parameterKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterKeyInput() {
    return this._parameterKey;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameter_key: cdktf.stringToTerraform(this._parameterKey),
      parameter_value: cdktf.stringToTerraform(this._parameterValue),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_key: {
        value: cdktf.stringToHclTerraform(this._parameterKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_value: {
        value: cdktf.stringToHclTerraform(this._parameterValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
