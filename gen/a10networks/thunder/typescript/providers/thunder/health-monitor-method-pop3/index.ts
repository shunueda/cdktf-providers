// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodPop3AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3#id HealthMonitorMethodPop3A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3#name HealthMonitorMethodPop3A#name}
  */
  readonly name: string;
  /**
  * POP3 type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3#pop3 HealthMonitorMethodPop3A#pop3}
  */
  readonly pop3?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3#pop3_password HealthMonitorMethodPop3A#pop3_password}
  */
  readonly pop3Password?: number;
  /**
  * Specify the user password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3#pop3_password_string HealthMonitorMethodPop3A#pop3_password_string}
  */
  readonly pop3PasswordString?: string;
  /**
  * Specify the POP3 port, default is 110 (Port Number (default 110))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3#pop3_port HealthMonitorMethodPop3A#pop3_port}
  */
  readonly pop3Port?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3#pop3_username HealthMonitorMethodPop3A#pop3_username}
  */
  readonly pop3Username?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3#uuid HealthMonitorMethodPop3A#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3 thunder_health_monitor_method_pop3}
*/
export class HealthMonitorMethodPop3A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_pop3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodPop3A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodPop3A to import
  * @param importFromId The id of the existing HealthMonitorMethodPop3A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodPop3A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_pop3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_pop3 thunder_health_monitor_method_pop3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodPop3AConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodPop3AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_pop3',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._pop3 = config.pop3;
    this._pop3Password = config.pop3Password;
    this._pop3PasswordString = config.pop3PasswordString;
    this._pop3Port = config.pop3Port;
    this._pop3Username = config.pop3Username;
    this._uuid = config.uuid;
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

  // pop3 - computed: false, optional: true, required: false
  private _pop3?: number; 
  public get pop3() {
    return this.getNumberAttribute('pop3');
  }
  public set pop3(value: number) {
    this._pop3 = value;
  }
  public resetPop3() {
    this._pop3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3Input() {
    return this._pop3;
  }

  // pop3_password - computed: false, optional: true, required: false
  private _pop3Password?: number; 
  public get pop3Password() {
    return this.getNumberAttribute('pop3_password');
  }
  public set pop3Password(value: number) {
    this._pop3Password = value;
  }
  public resetPop3Password() {
    this._pop3Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3PasswordInput() {
    return this._pop3Password;
  }

  // pop3_password_string - computed: false, optional: true, required: false
  private _pop3PasswordString?: string; 
  public get pop3PasswordString() {
    return this.getStringAttribute('pop3_password_string');
  }
  public set pop3PasswordString(value: string) {
    this._pop3PasswordString = value;
  }
  public resetPop3PasswordString() {
    this._pop3PasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3PasswordStringInput() {
    return this._pop3PasswordString;
  }

  // pop3_port - computed: false, optional: true, required: false
  private _pop3Port?: number; 
  public get pop3Port() {
    return this.getNumberAttribute('pop3_port');
  }
  public set pop3Port(value: number) {
    this._pop3Port = value;
  }
  public resetPop3Port() {
    this._pop3Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3PortInput() {
    return this._pop3Port;
  }

  // pop3_username - computed: false, optional: true, required: false
  private _pop3Username?: string; 
  public get pop3Username() {
    return this.getStringAttribute('pop3_username');
  }
  public set pop3Username(value: string) {
    this._pop3Username = value;
  }
  public resetPop3Username() {
    this._pop3Username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3UsernameInput() {
    return this._pop3Username;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pop3: cdktf.numberToTerraform(this._pop3),
      pop3_password: cdktf.numberToTerraform(this._pop3Password),
      pop3_password_string: cdktf.stringToTerraform(this._pop3PasswordString),
      pop3_port: cdktf.numberToTerraform(this._pop3Port),
      pop3_username: cdktf.stringToTerraform(this._pop3Username),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop3: {
        value: cdktf.numberToHclTerraform(this._pop3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pop3_password: {
        value: cdktf.numberToHclTerraform(this._pop3Password),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pop3_password_string: {
        value: cdktf.stringToHclTerraform(this._pop3PasswordString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop3_port: {
        value: cdktf.numberToHclTerraform(this._pop3Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pop3_username: {
        value: cdktf.stringToHclTerraform(this._pop3Username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
