// https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_basic_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKongConsumerBasicAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_basic_auth#consumer_id DataKongConsumerBasicAuth#consumer_id}
  */
  readonly consumerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_basic_auth#consumer_username DataKongConsumerBasicAuth#consumer_username}
  */
  readonly consumerUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_basic_auth#id DataKongConsumerBasicAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_basic_auth#username DataKongConsumerBasicAuth#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_basic_auth kong_consumer_basic_auth}
*/
export class DataKongConsumerBasicAuth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kong_consumer_basic_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKongConsumerBasicAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKongConsumerBasicAuth to import
  * @param importFromId The id of the existing DataKongConsumerBasicAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_basic_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKongConsumerBasicAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kong_consumer_basic_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_basic_auth kong_consumer_basic_auth} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKongConsumerBasicAuthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKongConsumerBasicAuthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kong_consumer_basic_auth',
      terraformGeneratorMetadata: {
        providerName: 'kong',
        providerVersion: '8.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consumerId = config.consumerId;
    this._consumerUsername = config.consumerUsername;
    this._id = config.id;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_id - computed: true, optional: true, required: false
  private _consumerId?: string; 
  public get consumerId() {
    return this.getStringAttribute('consumer_id');
  }
  public set consumerId(value: string) {
    this._consumerId = value;
  }
  public resetConsumerId() {
    this._consumerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdInput() {
    return this._consumerId;
  }

  // consumer_username - computed: false, optional: true, required: false
  private _consumerUsername?: string; 
  public get consumerUsername() {
    return this.getStringAttribute('consumer_username');
  }
  public set consumerUsername(value: string) {
    this._consumerUsername = value;
  }
  public resetConsumerUsername() {
    this._consumerUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerUsernameInput() {
    return this._consumerUsername;
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_id: cdktf.stringToTerraform(this._consumerId),
      consumer_username: cdktf.stringToTerraform(this._consumerUsername),
      id: cdktf.stringToTerraform(this._id),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_id: {
        value: cdktf.stringToHclTerraform(this._consumerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_username: {
        value: cdktf.stringToHclTerraform(this._consumerUsername),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
