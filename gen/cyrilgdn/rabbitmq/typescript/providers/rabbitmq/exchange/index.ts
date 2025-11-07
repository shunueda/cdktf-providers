// https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExchangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange#id Exchange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange#name Exchange#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange#vhost Exchange#vhost}
  */
  readonly vhost?: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange#settings Exchange#settings}
  */
  readonly settings: ExchangeSettings;
}
export interface ExchangeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange#arguments Exchange#arguments}
  */
  readonly arguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange#auto_delete Exchange#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange#durable Exchange#durable}
  */
  readonly durable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange#type Exchange#type}
  */
  readonly type: string;
}

export function exchangeSettingsToTerraform(struct?: ExchangeSettingsOutputReference | ExchangeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.arguments),
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    durable: cdktf.booleanToTerraform(struct!.durable),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function exchangeSettingsToHclTerraform(struct?: ExchangeSettingsOutputReference | ExchangeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.arguments),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    auto_delete: {
      value: cdktf.booleanToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    durable: {
      value: cdktf.booleanToHclTerraform(struct!.durable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExchangeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExchangeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._durable !== undefined) {
      hasAnyValues = true;
      internalValueResult.durable = this._durable;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExchangeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._autoDelete = undefined;
      this._durable = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._autoDelete = value.autoDelete;
      this._durable = value.durable;
      this._type = value.type;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: { [key: string]: string }; 
  public get arguments() {
    return this.getStringMapAttribute('arguments');
  }
  public set arguments(value: { [key: string]: string }) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // durable - computed: false, optional: true, required: false
  private _durable?: boolean | cdktf.IResolvable; 
  public get durable() {
    return this.getBooleanAttribute('durable');
  }
  public set durable(value: boolean | cdktf.IResolvable) {
    this._durable = value;
  }
  public resetDurable() {
    this._durable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durableInput() {
    return this._durable;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange rabbitmq_exchange}
*/
export class Exchange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rabbitmq_exchange";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Exchange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Exchange to import
  * @param importFromId The id of the existing Exchange that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Exchange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rabbitmq_exchange", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/exchange rabbitmq_exchange} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExchangeConfig
  */
  public constructor(scope: Construct, id: string, config: ExchangeConfig) {
    super(scope, id, {
      terraformResourceType: 'rabbitmq_exchange',
      terraformGeneratorMetadata: {
        providerName: 'rabbitmq',
        providerVersion: '1.10.1'
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
    this._vhost = config.vhost;
    this._settings.internalValue = config.settings;
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

  // vhost - computed: false, optional: true, required: false
  private _vhost?: string; 
  public get vhost() {
    return this.getStringAttribute('vhost');
  }
  public set vhost(value: string) {
    this._vhost = value;
  }
  public resetVhost() {
    this._vhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new ExchangeSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ExchangeSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vhost: cdktf.stringToTerraform(this._vhost),
      settings: exchangeSettingsToTerraform(this._settings.internalValue),
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
      vhost: {
        value: cdktf.stringToHclTerraform(this._vhost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: exchangeSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExchangeSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
