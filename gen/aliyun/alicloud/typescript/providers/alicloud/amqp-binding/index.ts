// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmqpBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding#argument AmqpBinding#argument}
  */
  readonly argument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding#binding_key AmqpBinding#binding_key}
  */
  readonly bindingKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding#binding_type AmqpBinding#binding_type}
  */
  readonly bindingType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding#destination_name AmqpBinding#destination_name}
  */
  readonly destinationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding#id AmqpBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding#instance_id AmqpBinding#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding#source_exchange AmqpBinding#source_exchange}
  */
  readonly sourceExchange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding#virtual_host_name AmqpBinding#virtual_host_name}
  */
  readonly virtualHostName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding alicloud_amqp_binding}
*/
export class AmqpBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_amqp_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AmqpBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AmqpBinding to import
  * @param importFromId The id of the existing AmqpBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AmqpBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_amqp_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_binding alicloud_amqp_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmqpBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AmqpBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_amqp_binding',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._argument = config.argument;
    this._bindingKey = config.bindingKey;
    this._bindingType = config.bindingType;
    this._destinationName = config.destinationName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._sourceExchange = config.sourceExchange;
    this._virtualHostName = config.virtualHostName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // argument - computed: true, optional: true, required: false
  private _argument?: string; 
  public get argument() {
    return this.getStringAttribute('argument');
  }
  public set argument(value: string) {
    this._argument = value;
  }
  public resetArgument() {
    this._argument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentInput() {
    return this._argument;
  }

  // binding_key - computed: false, optional: false, required: true
  private _bindingKey?: string; 
  public get bindingKey() {
    return this.getStringAttribute('binding_key');
  }
  public set bindingKey(value: string) {
    this._bindingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingKeyInput() {
    return this._bindingKey;
  }

  // binding_type - computed: false, optional: false, required: true
  private _bindingType?: string; 
  public get bindingType() {
    return this.getStringAttribute('binding_type');
  }
  public set bindingType(value: string) {
    this._bindingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingTypeInput() {
    return this._bindingType;
  }

  // destination_name - computed: false, optional: false, required: true
  private _destinationName?: string; 
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }
  public set destinationName(value: string) {
    this._destinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNameInput() {
    return this._destinationName;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // source_exchange - computed: false, optional: false, required: true
  private _sourceExchange?: string; 
  public get sourceExchange() {
    return this.getStringAttribute('source_exchange');
  }
  public set sourceExchange(value: string) {
    this._sourceExchange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceExchangeInput() {
    return this._sourceExchange;
  }

  // virtual_host_name - computed: false, optional: false, required: true
  private _virtualHostName?: string; 
  public get virtualHostName() {
    return this.getStringAttribute('virtual_host_name');
  }
  public set virtualHostName(value: string) {
    this._virtualHostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostNameInput() {
    return this._virtualHostName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      argument: cdktf.stringToTerraform(this._argument),
      binding_key: cdktf.stringToTerraform(this._bindingKey),
      binding_type: cdktf.stringToTerraform(this._bindingType),
      destination_name: cdktf.stringToTerraform(this._destinationName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      source_exchange: cdktf.stringToTerraform(this._sourceExchange),
      virtual_host_name: cdktf.stringToTerraform(this._virtualHostName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      argument: {
        value: cdktf.stringToHclTerraform(this._argument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binding_key: {
        value: cdktf.stringToHclTerraform(this._bindingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binding_type: {
        value: cdktf.stringToHclTerraform(this._bindingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_name: {
        value: cdktf.stringToHclTerraform(this._destinationName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_exchange: {
        value: cdktf.stringToHclTerraform(this._sourceExchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_host_name: {
        value: cdktf.stringToHclTerraform(this._virtualHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
