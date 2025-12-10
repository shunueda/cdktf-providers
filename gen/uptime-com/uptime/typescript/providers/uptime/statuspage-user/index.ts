// https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/statuspage_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatuspageUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/statuspage_user#email StatuspageUser#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/statuspage_user#first_name StatuspageUser#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/statuspage_user#is_active StatuspageUser#is_active}
  */
  readonly isActive: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/statuspage_user#last_name StatuspageUser#last_name}
  */
  readonly lastName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/statuspage_user#statuspage_id StatuspageUser#statuspage_id}
  */
  readonly statuspageId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/statuspage_user uptime_statuspage_user}
*/
export class StatuspageUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_statuspage_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatuspageUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatuspageUser to import
  * @param importFromId The id of the existing StatuspageUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/statuspage_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatuspageUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_statuspage_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/statuspage_user uptime_statuspage_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatuspageUserConfig
  */
  public constructor(scope: Construct, id: string, config: StatuspageUserConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_statuspage_user',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.21.0',
        providerVersionConstraint: '2.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._firstName = config.firstName;
    this._isActive = config.isActive;
    this._lastName = config.lastName;
    this._statuspageId = config.statuspageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_active - computed: false, optional: false, required: true
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // statuspage_id - computed: false, optional: false, required: true
  private _statuspageId?: number; 
  public get statuspageId() {
    return this.getNumberAttribute('statuspage_id');
  }
  public set statuspageId(value: number) {
    this._statuspageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statuspageIdInput() {
    return this._statuspageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      is_active: cdktf.booleanToTerraform(this._isActive),
      last_name: cdktf.stringToTerraform(this._lastName),
      statuspage_id: cdktf.numberToTerraform(this._statuspageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statuspage_id: {
        value: cdktf.numberToHclTerraform(this._statuspageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
