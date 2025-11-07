// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodTacplusAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#id HealthMonitorMethodTacplusA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#name HealthMonitorMethodTacplusA#name}
  */
  readonly name: string;
  /**
  * TACACS+ type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#tacplus HealthMonitorMethodTacplusA#tacplus}
  */
  readonly tacplus?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#tacplus_password HealthMonitorMethodTacplusA#tacplus_password}
  */
  readonly tacplusPassword?: number;
  /**
  * Configure password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#tacplus_password_string HealthMonitorMethodTacplusA#tacplus_password_string}
  */
  readonly tacplusPasswordString?: string;
  /**
  * Specify the TACACS+ port, default 49 (Port number (default 49))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#tacplus_port HealthMonitorMethodTacplusA#tacplus_port}
  */
  readonly tacplusPort?: number;
  /**
  * Specify the shared secret of TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#tacplus_secret HealthMonitorMethodTacplusA#tacplus_secret}
  */
  readonly tacplusSecret?: number;
  /**
  * Shared Crypto Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#tacplus_secret_string HealthMonitorMethodTacplusA#tacplus_secret_string}
  */
  readonly tacplusSecretString?: string;
  /**
  * 'inbound-ascii-login': Specify Inbound ASCII Login type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#tacplus_type HealthMonitorMethodTacplusA#tacplus_type}
  */
  readonly tacplusType?: string;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#tacplus_username HealthMonitorMethodTacplusA#tacplus_username}
  */
  readonly tacplusUsername?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#uuid HealthMonitorMethodTacplusA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus thunder_health_monitor_method_tacplus}
*/
export class HealthMonitorMethodTacplusA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_tacplus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodTacplusA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodTacplusA to import
  * @param importFromId The id of the existing HealthMonitorMethodTacplusA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodTacplusA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_tacplus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_tacplus thunder_health_monitor_method_tacplus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodTacplusAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodTacplusAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_tacplus',
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
    this._tacplus = config.tacplus;
    this._tacplusPassword = config.tacplusPassword;
    this._tacplusPasswordString = config.tacplusPasswordString;
    this._tacplusPort = config.tacplusPort;
    this._tacplusSecret = config.tacplusSecret;
    this._tacplusSecretString = config.tacplusSecretString;
    this._tacplusType = config.tacplusType;
    this._tacplusUsername = config.tacplusUsername;
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

  // tacplus - computed: false, optional: true, required: false
  private _tacplus?: number; 
  public get tacplus() {
    return this.getNumberAttribute('tacplus');
  }
  public set tacplus(value: number) {
    this._tacplus = value;
  }
  public resetTacplus() {
    this._tacplus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusInput() {
    return this._tacplus;
  }

  // tacplus_password - computed: false, optional: true, required: false
  private _tacplusPassword?: number; 
  public get tacplusPassword() {
    return this.getNumberAttribute('tacplus_password');
  }
  public set tacplusPassword(value: number) {
    this._tacplusPassword = value;
  }
  public resetTacplusPassword() {
    this._tacplusPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusPasswordInput() {
    return this._tacplusPassword;
  }

  // tacplus_password_string - computed: false, optional: true, required: false
  private _tacplusPasswordString?: string; 
  public get tacplusPasswordString() {
    return this.getStringAttribute('tacplus_password_string');
  }
  public set tacplusPasswordString(value: string) {
    this._tacplusPasswordString = value;
  }
  public resetTacplusPasswordString() {
    this._tacplusPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusPasswordStringInput() {
    return this._tacplusPasswordString;
  }

  // tacplus_port - computed: false, optional: true, required: false
  private _tacplusPort?: number; 
  public get tacplusPort() {
    return this.getNumberAttribute('tacplus_port');
  }
  public set tacplusPort(value: number) {
    this._tacplusPort = value;
  }
  public resetTacplusPort() {
    this._tacplusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusPortInput() {
    return this._tacplusPort;
  }

  // tacplus_secret - computed: false, optional: true, required: false
  private _tacplusSecret?: number; 
  public get tacplusSecret() {
    return this.getNumberAttribute('tacplus_secret');
  }
  public set tacplusSecret(value: number) {
    this._tacplusSecret = value;
  }
  public resetTacplusSecret() {
    this._tacplusSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusSecretInput() {
    return this._tacplusSecret;
  }

  // tacplus_secret_string - computed: false, optional: true, required: false
  private _tacplusSecretString?: string; 
  public get tacplusSecretString() {
    return this.getStringAttribute('tacplus_secret_string');
  }
  public set tacplusSecretString(value: string) {
    this._tacplusSecretString = value;
  }
  public resetTacplusSecretString() {
    this._tacplusSecretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusSecretStringInput() {
    return this._tacplusSecretString;
  }

  // tacplus_type - computed: false, optional: true, required: false
  private _tacplusType?: string; 
  public get tacplusType() {
    return this.getStringAttribute('tacplus_type');
  }
  public set tacplusType(value: string) {
    this._tacplusType = value;
  }
  public resetTacplusType() {
    this._tacplusType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusTypeInput() {
    return this._tacplusType;
  }

  // tacplus_username - computed: false, optional: true, required: false
  private _tacplusUsername?: string; 
  public get tacplusUsername() {
    return this.getStringAttribute('tacplus_username');
  }
  public set tacplusUsername(value: string) {
    this._tacplusUsername = value;
  }
  public resetTacplusUsername() {
    this._tacplusUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusUsernameInput() {
    return this._tacplusUsername;
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
      tacplus: cdktf.numberToTerraform(this._tacplus),
      tacplus_password: cdktf.numberToTerraform(this._tacplusPassword),
      tacplus_password_string: cdktf.stringToTerraform(this._tacplusPasswordString),
      tacplus_port: cdktf.numberToTerraform(this._tacplusPort),
      tacplus_secret: cdktf.numberToTerraform(this._tacplusSecret),
      tacplus_secret_string: cdktf.stringToTerraform(this._tacplusSecretString),
      tacplus_type: cdktf.stringToTerraform(this._tacplusType),
      tacplus_username: cdktf.stringToTerraform(this._tacplusUsername),
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
      tacplus: {
        value: cdktf.numberToHclTerraform(this._tacplus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tacplus_password: {
        value: cdktf.numberToHclTerraform(this._tacplusPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tacplus_password_string: {
        value: cdktf.stringToHclTerraform(this._tacplusPasswordString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacplus_port: {
        value: cdktf.numberToHclTerraform(this._tacplusPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tacplus_secret: {
        value: cdktf.numberToHclTerraform(this._tacplusSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tacplus_secret_string: {
        value: cdktf.stringToHclTerraform(this._tacplusSecretString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacplus_type: {
        value: cdktf.stringToHclTerraform(this._tacplusType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacplus_username: {
        value: cdktf.stringToHclTerraform(this._tacplusUsername),
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
