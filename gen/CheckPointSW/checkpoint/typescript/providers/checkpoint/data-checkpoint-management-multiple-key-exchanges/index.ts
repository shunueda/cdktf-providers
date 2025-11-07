// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_multiple_key_exchanges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementMultipleKeyExchangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_multiple_key_exchanges#id DataCheckpointManagementMultipleKeyExchanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_multiple_key_exchanges#name DataCheckpointManagementMultipleKeyExchanges#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_multiple_key_exchanges#uid DataCheckpointManagementMultipleKeyExchanges#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_multiple_key_exchanges checkpoint_management_multiple_key_exchanges}
*/
export class DataCheckpointManagementMultipleKeyExchanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_multiple_key_exchanges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementMultipleKeyExchanges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementMultipleKeyExchanges to import
  * @param importFromId The id of the existing DataCheckpointManagementMultipleKeyExchanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_multiple_key_exchanges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementMultipleKeyExchanges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_multiple_key_exchanges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_multiple_key_exchanges checkpoint_management_multiple_key_exchanges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementMultipleKeyExchangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementMultipleKeyExchangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_multiple_key_exchanges',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_key_exchange_1_methods - computed: true, optional: false, required: false
  public get additionalKeyExchange1Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_1_methods'));
  }

  // additional_key_exchange_2_methods - computed: true, optional: false, required: false
  public get additionalKeyExchange2Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_2_methods'));
  }

  // additional_key_exchange_3_methods - computed: true, optional: false, required: false
  public get additionalKeyExchange3Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_3_methods'));
  }

  // additional_key_exchange_4_methods - computed: true, optional: false, required: false
  public get additionalKeyExchange4Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_4_methods'));
  }

  // additional_key_exchange_5_methods - computed: true, optional: false, required: false
  public get additionalKeyExchange5Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_5_methods'));
  }

  // additional_key_exchange_6_methods - computed: true, optional: false, required: false
  public get additionalKeyExchange6Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_6_methods'));
  }

  // additional_key_exchange_7_methods - computed: true, optional: false, required: false
  public get additionalKeyExchange7Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_7_methods'));
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
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

  // key_exchange_methods - computed: true, optional: false, required: false
  public get keyExchangeMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('key_exchange_methods'));
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
