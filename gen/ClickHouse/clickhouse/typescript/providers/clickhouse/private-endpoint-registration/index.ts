// https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/private_endpoint_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateEndpointRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider of the private endpoint ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/private_endpoint_registration#cloud_provider PrivateEndpointRegistration#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Description of the private endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/private_endpoint_registration#description PrivateEndpointRegistration#description}
  */
  readonly description?: string;
  /**
  * ID of the private endpoint (replaces deprecated attribute `id`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/private_endpoint_registration#private_endpoint_id PrivateEndpointRegistration#private_endpoint_id}
  */
  readonly privateEndpointId: string;
  /**
  * Region of the private endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/private_endpoint_registration#region PrivateEndpointRegistration#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/private_endpoint_registration clickhouse_private_endpoint_registration}
*/
export class PrivateEndpointRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhouse_private_endpoint_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateEndpointRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateEndpointRegistration to import
  * @param importFromId The id of the existing PrivateEndpointRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/private_endpoint_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateEndpointRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhouse_private_endpoint_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/private_endpoint_registration clickhouse_private_endpoint_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateEndpointRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateEndpointRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhouse_private_endpoint_registration',
      terraformGeneratorMetadata: {
        providerName: 'clickhouse',
        providerVersion: '3.5.4',
        providerVersionConstraint: '3.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._description = config.description;
    this._privateEndpointId = config.privateEndpointId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // private_endpoint_id - computed: false, optional: false, required: true
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      description: cdktf.stringToTerraform(this._description),
      private_endpoint_id: cdktf.stringToTerraform(this._privateEndpointId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._privateEndpointId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
