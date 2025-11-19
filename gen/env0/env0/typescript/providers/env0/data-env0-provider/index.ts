// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnv0ProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * id of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/provider#id DataEnv0Provider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the type/name of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/provider#type DataEnv0Provider#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/provider env0_provider}
*/
export class DataEnv0Provider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnv0Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnv0Provider to import
  * @param importFromId The id of the existing DataEnv0Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnv0Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/provider env0_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnv0ProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEnv0ProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'env0_provider',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
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
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
