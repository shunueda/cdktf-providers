// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/key_chain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrKeyChainConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/key_chain#device DataIosxrKeyChain#device}
  */
  readonly device?: string;
  /**
  * Name of the key chain - maximum 32 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/key_chain#name DataIosxrKeyChain#name}
  */
  readonly name: string;
}
export interface DataIosxrKeyChainKeys {
}

export function dataIosxrKeyChainKeysToTerraform(struct?: DataIosxrKeyChainKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrKeyChainKeysToHclTerraform(struct?: DataIosxrKeyChainKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrKeyChainKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrKeyChainKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrKeyChainKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_lifetime_infinite - computed: true, optional: false, required: false
  public get acceptLifetimeInfinite() {
    return this.getBooleanAttribute('accept_lifetime_infinite');
  }

  // accept_lifetime_start_time_day_of_month - computed: true, optional: false, required: false
  public get acceptLifetimeStartTimeDayOfMonth() {
    return this.getNumberAttribute('accept_lifetime_start_time_day_of_month');
  }

  // accept_lifetime_start_time_hour - computed: true, optional: false, required: false
  public get acceptLifetimeStartTimeHour() {
    return this.getNumberAttribute('accept_lifetime_start_time_hour');
  }

  // accept_lifetime_start_time_minute - computed: true, optional: false, required: false
  public get acceptLifetimeStartTimeMinute() {
    return this.getNumberAttribute('accept_lifetime_start_time_minute');
  }

  // accept_lifetime_start_time_month - computed: true, optional: false, required: false
  public get acceptLifetimeStartTimeMonth() {
    return this.getStringAttribute('accept_lifetime_start_time_month');
  }

  // accept_lifetime_start_time_second - computed: true, optional: false, required: false
  public get acceptLifetimeStartTimeSecond() {
    return this.getNumberAttribute('accept_lifetime_start_time_second');
  }

  // accept_lifetime_start_time_year - computed: true, optional: false, required: false
  public get acceptLifetimeStartTimeYear() {
    return this.getNumberAttribute('accept_lifetime_start_time_year');
  }

  // cryptographic_algorithm - computed: true, optional: false, required: false
  public get cryptographicAlgorithm() {
    return this.getStringAttribute('cryptographic_algorithm');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // key_string_password - computed: true, optional: false, required: false
  public get keyStringPassword() {
    return this.getStringAttribute('key_string_password');
  }

  // send_lifetime_infinite - computed: true, optional: false, required: false
  public get sendLifetimeInfinite() {
    return this.getBooleanAttribute('send_lifetime_infinite');
  }

  // send_lifetime_start_time_day_of_month - computed: true, optional: false, required: false
  public get sendLifetimeStartTimeDayOfMonth() {
    return this.getNumberAttribute('send_lifetime_start_time_day_of_month');
  }

  // send_lifetime_start_time_hour - computed: true, optional: false, required: false
  public get sendLifetimeStartTimeHour() {
    return this.getNumberAttribute('send_lifetime_start_time_hour');
  }

  // send_lifetime_start_time_minute - computed: true, optional: false, required: false
  public get sendLifetimeStartTimeMinute() {
    return this.getNumberAttribute('send_lifetime_start_time_minute');
  }

  // send_lifetime_start_time_month - computed: true, optional: false, required: false
  public get sendLifetimeStartTimeMonth() {
    return this.getStringAttribute('send_lifetime_start_time_month');
  }

  // send_lifetime_start_time_second - computed: true, optional: false, required: false
  public get sendLifetimeStartTimeSecond() {
    return this.getNumberAttribute('send_lifetime_start_time_second');
  }

  // send_lifetime_start_time_year - computed: true, optional: false, required: false
  public get sendLifetimeStartTimeYear() {
    return this.getNumberAttribute('send_lifetime_start_time_year');
  }
}

export class DataIosxrKeyChainKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrKeyChainKeysOutputReference {
    return new DataIosxrKeyChainKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/key_chain iosxr_key_chain}
*/
export class DataIosxrKeyChain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_key_chain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrKeyChain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrKeyChain to import
  * @param importFromId The id of the existing DataIosxrKeyChain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/key_chain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrKeyChain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_key_chain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/key_chain iosxr_key_chain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrKeyChainConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrKeyChainConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_key_chain',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataIosxrKeyChainKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
