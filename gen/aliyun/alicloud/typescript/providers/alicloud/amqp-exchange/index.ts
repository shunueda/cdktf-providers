// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmqpExchangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#alternate_exchange AmqpExchange#alternate_exchange}
  */
  readonly alternateExchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#auto_delete_state AmqpExchange#auto_delete_state}
  */
  readonly autoDeleteState: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#exchange_name AmqpExchange#exchange_name}
  */
  readonly exchangeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#exchange_type AmqpExchange#exchange_type}
  */
  readonly exchangeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#id AmqpExchange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#instance_id AmqpExchange#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#internal AmqpExchange#internal}
  */
  readonly internal: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#virtual_host_name AmqpExchange#virtual_host_name}
  */
  readonly virtualHostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#x_delayed_type AmqpExchange#x_delayed_type}
  */
  readonly xDelayedType?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#timeouts AmqpExchange#timeouts}
  */
  readonly timeouts?: AmqpExchangeTimeouts;
}
export interface AmqpExchangeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#create AmqpExchange#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#delete AmqpExchange#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#update AmqpExchange#update}
  */
  readonly update?: string;
}

export function amqpExchangeTimeoutsToTerraform(struct?: AmqpExchangeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function amqpExchangeTimeoutsToHclTerraform(struct?: AmqpExchangeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AmqpExchangeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AmqpExchangeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmqpExchangeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange alicloud_amqp_exchange}
*/
export class AmqpExchange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_amqp_exchange";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AmqpExchange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AmqpExchange to import
  * @param importFromId The id of the existing AmqpExchange that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AmqpExchange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_amqp_exchange", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_exchange alicloud_amqp_exchange} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmqpExchangeConfig
  */
  public constructor(scope: Construct, id: string, config: AmqpExchangeConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_amqp_exchange',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alternateExchange = config.alternateExchange;
    this._autoDeleteState = config.autoDeleteState;
    this._exchangeName = config.exchangeName;
    this._exchangeType = config.exchangeType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._internal = config.internal;
    this._virtualHostName = config.virtualHostName;
    this._xDelayedType = config.xDelayedType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_exchange - computed: false, optional: true, required: false
  private _alternateExchange?: string; 
  public get alternateExchange() {
    return this.getStringAttribute('alternate_exchange');
  }
  public set alternateExchange(value: string) {
    this._alternateExchange = value;
  }
  public resetAlternateExchange() {
    this._alternateExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateExchangeInput() {
    return this._alternateExchange;
  }

  // auto_delete_state - computed: false, optional: false, required: true
  private _autoDeleteState?: boolean | cdktf.IResolvable; 
  public get autoDeleteState() {
    return this.getBooleanAttribute('auto_delete_state');
  }
  public set autoDeleteState(value: boolean | cdktf.IResolvable) {
    this._autoDeleteState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteStateInput() {
    return this._autoDeleteState;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // exchange_name - computed: false, optional: false, required: true
  private _exchangeName?: string; 
  public get exchangeName() {
    return this.getStringAttribute('exchange_name');
  }
  public set exchangeName(value: string) {
    this._exchangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeNameInput() {
    return this._exchangeName;
  }

  // exchange_type - computed: false, optional: false, required: true
  private _exchangeType?: string; 
  public get exchangeType() {
    return this.getStringAttribute('exchange_type');
  }
  public set exchangeType(value: string) {
    this._exchangeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeTypeInput() {
    return this._exchangeType;
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

  // internal - computed: false, optional: false, required: true
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
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

  // x_delayed_type - computed: false, optional: true, required: false
  private _xDelayedType?: string; 
  public get xDelayedType() {
    return this.getStringAttribute('x_delayed_type');
  }
  public set xDelayedType(value: string) {
    this._xDelayedType = value;
  }
  public resetXDelayedType() {
    this._xDelayedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xDelayedTypeInput() {
    return this._xDelayedType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AmqpExchangeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AmqpExchangeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternate_exchange: cdktf.stringToTerraform(this._alternateExchange),
      auto_delete_state: cdktf.booleanToTerraform(this._autoDeleteState),
      exchange_name: cdktf.stringToTerraform(this._exchangeName),
      exchange_type: cdktf.stringToTerraform(this._exchangeType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      internal: cdktf.booleanToTerraform(this._internal),
      virtual_host_name: cdktf.stringToTerraform(this._virtualHostName),
      x_delayed_type: cdktf.stringToTerraform(this._xDelayedType),
      timeouts: amqpExchangeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternate_exchange: {
        value: cdktf.stringToHclTerraform(this._alternateExchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_delete_state: {
        value: cdktf.booleanToHclTerraform(this._autoDeleteState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exchange_name: {
        value: cdktf.stringToHclTerraform(this._exchangeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exchange_type: {
        value: cdktf.stringToHclTerraform(this._exchangeType),
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
      internal: {
        value: cdktf.booleanToHclTerraform(this._internal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_host_name: {
        value: cdktf.stringToHclTerraform(this._virtualHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_delayed_type: {
        value: cdktf.stringToHclTerraform(this._xDelayedType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: amqpExchangeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AmqpExchangeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
