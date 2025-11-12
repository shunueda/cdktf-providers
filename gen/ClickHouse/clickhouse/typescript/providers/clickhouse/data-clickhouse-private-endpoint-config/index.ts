// https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/private_endpoint_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataClickhousePrivateEndpointConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cloud provider for the private endpoint. Valid values are 'aws', 'gcp', or 'azure'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/private_endpoint_config#cloud_provider DataClickhousePrivateEndpointConfig#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * The region for the private endpoint. Valid values are specific to the cloud provider i.e. us-east-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/private_endpoint_config#region DataClickhousePrivateEndpointConfig#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/private_endpoint_config clickhouse_private_endpoint_config}
*/
export class DataClickhousePrivateEndpointConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhouse_private_endpoint_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataClickhousePrivateEndpointConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataClickhousePrivateEndpointConfig to import
  * @param importFromId The id of the existing DataClickhousePrivateEndpointConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/private_endpoint_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataClickhousePrivateEndpointConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhouse_private_endpoint_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/private_endpoint_config clickhouse_private_endpoint_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataClickhousePrivateEndpointConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataClickhousePrivateEndpointConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhouse_private_endpoint_config',
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

  // endpoint_service_id - computed: true, optional: false, required: false
  public get endpointServiceId() {
    return this.getStringAttribute('endpoint_service_id');
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
