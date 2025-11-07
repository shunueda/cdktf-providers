// https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/data-sources/exchange
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRabbitmqExchangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/data-sources/exchange#name DataRabbitmqExchange#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/data-sources/exchange#vhost DataRabbitmqExchange#vhost}
  */
  readonly vhost?: string;
}
export interface DataRabbitmqExchangeSettings {
}

export function dataRabbitmqExchangeSettingsToTerraform(struct?: DataRabbitmqExchangeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRabbitmqExchangeSettingsToHclTerraform(struct?: DataRabbitmqExchangeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRabbitmqExchangeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRabbitmqExchangeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRabbitmqExchangeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arguments - computed: true, optional: false, required: false
  private _arguments = new cdktf.StringMap(this, "arguments");
  public get arguments() {
    return this._arguments;
  }

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }

  // durable - computed: true, optional: false, required: false
  public get durable() {
    return this.getBooleanAttribute('durable');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataRabbitmqExchangeSettingsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataRabbitmqExchangeSettingsOutputReference {
    return new DataRabbitmqExchangeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/data-sources/exchange rabbitmq_exchange}
*/
export class DataRabbitmqExchange extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rabbitmq_exchange";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRabbitmqExchange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRabbitmqExchange to import
  * @param importFromId The id of the existing DataRabbitmqExchange that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/data-sources/exchange#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRabbitmqExchange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rabbitmq_exchange", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/data-sources/exchange rabbitmq_exchange} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRabbitmqExchangeConfig
  */
  public constructor(scope: Construct, id: string, config: DataRabbitmqExchangeConfig) {
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
    this._name = config.name;
    this._vhost = config.vhost;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // settings - computed: true, optional: false, required: false
  private _settings = new DataRabbitmqExchangeSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      vhost: cdktf.stringToTerraform(this._vhost),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
