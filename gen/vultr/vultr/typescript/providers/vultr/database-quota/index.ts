// https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota#client_id DatabaseQuota#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota#consumer_byte_rate DatabaseQuota#consumer_byte_rate}
  */
  readonly consumerByteRate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota#database_id DatabaseQuota#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota#id DatabaseQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota#producer_byte_rate DatabaseQuota#producer_byte_rate}
  */
  readonly producerByteRate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota#request_percentage DatabaseQuota#request_percentage}
  */
  readonly requestPercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota#user DatabaseQuota#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota vultr_database_quota}
*/
export class DatabaseQuota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_database_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseQuota to import
  * @param importFromId The id of the existing DatabaseQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_database_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_quota vultr_database_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr_database_quota',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.28.0',
        providerVersionConstraint: '2.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._consumerByteRate = config.consumerByteRate;
    this._databaseId = config.databaseId;
    this._id = config.id;
    this._producerByteRate = config.producerByteRate;
    this._requestPercentage = config.requestPercentage;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // consumer_byte_rate - computed: false, optional: false, required: true
  private _consumerByteRate?: number; 
  public get consumerByteRate() {
    return this.getNumberAttribute('consumer_byte_rate');
  }
  public set consumerByteRate(value: number) {
    this._consumerByteRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerByteRateInput() {
    return this._consumerByteRate;
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
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

  // producer_byte_rate - computed: false, optional: false, required: true
  private _producerByteRate?: number; 
  public get producerByteRate() {
    return this.getNumberAttribute('producer_byte_rate');
  }
  public set producerByteRate(value: number) {
    this._producerByteRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get producerByteRateInput() {
    return this._producerByteRate;
  }

  // request_percentage - computed: false, optional: false, required: true
  private _requestPercentage?: number; 
  public get requestPercentage() {
    return this.getNumberAttribute('request_percentage');
  }
  public set requestPercentage(value: number) {
    this._requestPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPercentageInput() {
    return this._requestPercentage;
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
      client_id: cdktf.stringToTerraform(this._clientId),
      consumer_byte_rate: cdktf.numberToTerraform(this._consumerByteRate),
      database_id: cdktf.stringToTerraform(this._databaseId),
      id: cdktf.stringToTerraform(this._id),
      producer_byte_rate: cdktf.numberToTerraform(this._producerByteRate),
      request_percentage: cdktf.numberToTerraform(this._requestPercentage),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_byte_rate: {
        value: cdktf.numberToHclTerraform(this._consumerByteRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
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
      producer_byte_rate: {
        value: cdktf.numberToHclTerraform(this._producerByteRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_percentage: {
        value: cdktf.numberToHclTerraform(this._requestPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
