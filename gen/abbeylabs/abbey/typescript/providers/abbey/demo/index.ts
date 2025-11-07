// https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/demo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DemoConfig extends cdktf.TerraformMetaArguments {
  /**
  * created_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/demo#created_at Demo#created_at}
  */
  readonly createdAt?: string;
  /**
  * The email of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/demo#email Demo#email}
  */
  readonly email: string;
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/demo#id Demo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/demo#permission Demo#permission}
  */
  readonly permission: string;
  /**
  * updated_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/demo#updated_at Demo#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * user_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/demo#user_id Demo#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/demo abbey_demo}
*/
export class Demo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "abbey_demo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Demo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Demo to import
  * @param importFromId The id of the existing Demo that should be imported. Refer to the {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/demo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Demo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "abbey_demo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/demo abbey_demo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DemoConfig
  */
  public constructor(scope: Construct, id: string, config: DemoConfig) {
    super(scope, id, {
      terraformResourceType: 'abbey_demo',
      terraformGeneratorMetadata: {
        providerName: 'abbey',
        providerVersion: '0.2.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._email = config.email;
    this._id = config.id;
    this._permission = config.permission;
    this._updatedAt = config.updatedAt;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.numberToTerraform(this._id),
      permission: cdktf.stringToTerraform(this._permission),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
