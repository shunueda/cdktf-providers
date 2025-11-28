// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/clickhouse_keyval_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseKeyvalConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/clickhouse_keyval_config#id ClickhouseKeyvalConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/clickhouse_keyval_config#instance_id ClickhouseKeyvalConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/clickhouse_keyval_config#items ClickhouseKeyvalConfig#items}
  */
  readonly items: ClickhouseKeyvalConfigItems;
}
export interface ClickhouseKeyvalConfigItems {
  /**
  * Instance config key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/clickhouse_keyval_config#conf_key ClickhouseKeyvalConfig#conf_key}
  */
  readonly confKey: string;
  /**
  * Instance config value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/clickhouse_keyval_config#conf_value ClickhouseKeyvalConfig#conf_value}
  */
  readonly confValue: string;
}

export function clickhouseKeyvalConfigItemsToTerraform(struct?: ClickhouseKeyvalConfigItemsOutputReference | ClickhouseKeyvalConfigItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf_key: cdktf.stringToTerraform(struct!.confKey),
    conf_value: cdktf.stringToTerraform(struct!.confValue),
  }
}


export function clickhouseKeyvalConfigItemsToHclTerraform(struct?: ClickhouseKeyvalConfigItemsOutputReference | ClickhouseKeyvalConfigItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf_key: {
      value: cdktf.stringToHclTerraform(struct!.confKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conf_value: {
      value: cdktf.stringToHclTerraform(struct!.confValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseKeyvalConfigItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseKeyvalConfigItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.confKey = this._confKey;
    }
    if (this._confValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confValue = this._confValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseKeyvalConfigItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confKey = undefined;
      this._confValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confKey = value.confKey;
      this._confValue = value.confValue;
    }
  }

  // conf_key - computed: false, optional: false, required: true
  private _confKey?: string; 
  public get confKey() {
    return this.getStringAttribute('conf_key');
  }
  public set confKey(value: string) {
    this._confKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confKeyInput() {
    return this._confKey;
  }

  // conf_value - computed: false, optional: false, required: true
  private _confValue?: string; 
  public get confValue() {
    return this.getStringAttribute('conf_value');
  }
  public set confValue(value: string) {
    this._confValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confValueInput() {
    return this._confValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/clickhouse_keyval_config tencentcloud_clickhouse_keyval_config}
*/
export class ClickhouseKeyvalConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clickhouse_keyval_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhouseKeyvalConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhouseKeyvalConfig to import
  * @param importFromId The id of the existing ClickhouseKeyvalConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/clickhouse_keyval_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhouseKeyvalConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clickhouse_keyval_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/clickhouse_keyval_config tencentcloud_clickhouse_keyval_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseKeyvalConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ClickhouseKeyvalConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clickhouse_keyval_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._instanceId = config.instanceId;
    this._items.internalValue = config.items;
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

  // items - computed: false, optional: false, required: true
  private _items = new ClickhouseKeyvalConfigItemsOutputReference(this, "items");
  public get items() {
    return this._items;
  }
  public putItems(value: ClickhouseKeyvalConfigItems) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      items: clickhouseKeyvalConfigItemsToTerraform(this._items.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      items: {
        value: clickhouseKeyvalConfigItemsToHclTerraform(this._items.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseKeyvalConfigItemsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
