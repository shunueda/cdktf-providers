// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetRabbitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit#description TargetRabbit#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit#id TargetRabbit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit#key TargetRabbit#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit#name TargetRabbit#name}
  */
  readonly name: string;
  /**
  * RabbitMQ server password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit#rabbitmq_server_password TargetRabbit#rabbitmq_server_password}
  */
  readonly rabbitmqServerPassword?: string;
  /**
  * RabbitMQ server URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit#rabbitmq_server_uri TargetRabbit#rabbitmq_server_uri}
  */
  readonly rabbitmqServerUri: string;
  /**
  * RabbitMQ server user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit#rabbitmq_server_user TargetRabbit#rabbitmq_server_user}
  */
  readonly rabbitmqServerUser: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit akeyless_target_rabbit}
*/
export class TargetRabbit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_rabbit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetRabbit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetRabbit to import
  * @param importFromId The id of the existing TargetRabbit that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetRabbit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_rabbit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_rabbit akeyless_target_rabbit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetRabbitConfig
  */
  public constructor(scope: Construct, id: string, config: TargetRabbitConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_rabbit',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._rabbitmqServerPassword = config.rabbitmqServerPassword;
    this._rabbitmqServerUri = config.rabbitmqServerUri;
    this._rabbitmqServerUser = config.rabbitmqServerUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // rabbitmq_server_password - computed: false, optional: true, required: false
  private _rabbitmqServerPassword?: string; 
  public get rabbitmqServerPassword() {
    return this.getStringAttribute('rabbitmq_server_password');
  }
  public set rabbitmqServerPassword(value: string) {
    this._rabbitmqServerPassword = value;
  }
  public resetRabbitmqServerPassword() {
    this._rabbitmqServerPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitmqServerPasswordInput() {
    return this._rabbitmqServerPassword;
  }

  // rabbitmq_server_uri - computed: false, optional: false, required: true
  private _rabbitmqServerUri?: string; 
  public get rabbitmqServerUri() {
    return this.getStringAttribute('rabbitmq_server_uri');
  }
  public set rabbitmqServerUri(value: string) {
    this._rabbitmqServerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitmqServerUriInput() {
    return this._rabbitmqServerUri;
  }

  // rabbitmq_server_user - computed: false, optional: false, required: true
  private _rabbitmqServerUser?: string; 
  public get rabbitmqServerUser() {
    return this.getStringAttribute('rabbitmq_server_user');
  }
  public set rabbitmqServerUser(value: string) {
    this._rabbitmqServerUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitmqServerUserInput() {
    return this._rabbitmqServerUser;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      rabbitmq_server_password: cdktf.stringToTerraform(this._rabbitmqServerPassword),
      rabbitmq_server_uri: cdktf.stringToTerraform(this._rabbitmqServerUri),
      rabbitmq_server_user: cdktf.stringToTerraform(this._rabbitmqServerUser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      rabbitmq_server_password: {
        value: cdktf.stringToHclTerraform(this._rabbitmqServerPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rabbitmq_server_uri: {
        value: cdktf.stringToHclTerraform(this._rabbitmqServerUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rabbitmq_server_user: {
        value: cdktf.stringToHclTerraform(this._rabbitmqServerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
