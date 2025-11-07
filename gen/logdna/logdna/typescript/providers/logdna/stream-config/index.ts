// https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_config#brokers StreamConfig#brokers}
  */
  readonly brokers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_config#id StreamConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_config#password StreamConfig#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_config#topic StreamConfig#topic}
  */
  readonly topic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_config#user StreamConfig#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_config logdna_stream_config}
*/
export class StreamConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logdna_stream_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamConfig to import
  * @param importFromId The id of the existing StreamConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logdna_stream_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_config logdna_stream_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamConfigConfig
  */
  public constructor(scope: Construct, id: string, config: StreamConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'logdna_stream_config',
      terraformGeneratorMetadata: {
        providerName: 'logdna',
        providerVersion: '1.17.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._brokers = config.brokers;
    this._id = config.id;
    this._password = config.password;
    this._topic = config.topic;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // brokers - computed: false, optional: false, required: true
  private _brokers?: string[]; 
  public get brokers() {
    return this.getListAttribute('brokers');
  }
  public set brokers(value: string[]) {
    this._brokers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokersInput() {
    return this._brokers;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brokers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._brokers),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      topic: cdktf.stringToTerraform(this._topic),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      brokers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._brokers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
