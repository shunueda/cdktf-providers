// https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/kv
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KvConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/kv#id Kv#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key of the pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/kv#key Kv#key}
  */
  readonly key: string;
  /**
  * The namespace of the Key-Value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/kv#namespace Kv#namespace}
  */
  readonly namespace: string;
  /**
  * The type of the value. If not provided, we will try to deduce the type based on the value. Useful in case you provide numbers, booleans, dates or json that you want to be stored as string. Accepted values are: STRING, NUMBER, BOOLEAN, DATETIME, DATE, DURATION, JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/kv#type Kv#type}
  */
  readonly type?: string;
  /**
  * The fetched value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/kv#value Kv#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/kv kestra_kv}
*/
export class Kv extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kestra_kv";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Kv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Kv to import
  * @param importFromId The id of the existing Kv that should be imported. Refer to the {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/kv#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Kv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kestra_kv", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/kv kestra_kv} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KvConfig
  */
  public constructor(scope: Construct, id: string, config: KvConfig) {
    super(scope, id, {
      terraformResourceType: 'kestra_kv',
      terraformGeneratorMetadata: {
        providerName: 'kestra',
        providerVersion: '1.0.2'
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
    this._key = config.key;
    this._namespace = config.namespace;
    this._type = config.type;
    this._value = config.value;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      namespace: cdktf.stringToTerraform(this._namespace),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
