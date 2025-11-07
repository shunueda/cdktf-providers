// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_circleci
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationCircleciConfig extends cdktf.TerraformMetaArguments {
  /**
  * A CircleCI API token. See https://docs.doppler.com/docs/circleci for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_circleci#api_token IntegrationCircleci#api_token}
  */
  readonly apiToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_circleci#id IntegrationCircleci#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_circleci#name IntegrationCircleci#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_circleci doppler_integration_circleci}
*/
export class IntegrationCircleci extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_integration_circleci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationCircleci resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationCircleci to import
  * @param importFromId The id of the existing IntegrationCircleci that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_circleci#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationCircleci to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_integration_circleci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_circleci doppler_integration_circleci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationCircleciConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationCircleciConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_integration_circleci',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiToken = config.apiToken;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
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
