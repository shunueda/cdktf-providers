// https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/schema_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Environment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/schema_registry#environment_id SchemaRegistry#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/schema_registry#id SchemaRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * where
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/schema_registry#region SchemaRegistry#region}
  */
  readonly region: string;
  /**
  * Cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/schema_registry#service_provider SchemaRegistry#service_provider}
  */
  readonly serviceProvider: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/schema_registry confluentcloud_schema_registry}
*/
export class SchemaRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluentcloud_schema_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaRegistry to import
  * @param importFromId The id of the existing SchemaRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/schema_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluentcloud_schema_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/schema_registry confluentcloud_schema_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'confluentcloud_schema_registry',
      terraformGeneratorMetadata: {
        providerName: 'confluentcloud',
        providerVersion: '0.0.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._region = config.region;
    this._serviceProvider = config.serviceProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_provider - computed: false, optional: false, required: true
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_provider: {
        value: cdktf.stringToHclTerraform(this._serviceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
