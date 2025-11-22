// https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Selector for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/integration#integration_key Integration#integration_key}
  */
  readonly integrationKey: string;
  /**
  * Parameters required by the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/integration#parameters Integration#parameters}
  */
  readonly parameters: { [key: string]: any };
  /**
  * The integration version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/integration#version Integration#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/integration coralogix_integration}
*/
export class Integration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Integration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Integration to import
  * @param importFromId The id of the existing Integration that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Integration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/integration coralogix_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_integration',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._integrationKey = config.integrationKey;
    this._parameters = config.parameters;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters?: { [key: string]: any }; 
  public get parameters() {
    return this.getAnyMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: any }) {
    this._parameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
