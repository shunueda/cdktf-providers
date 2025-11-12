// https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/azure_privatelink_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEcAzurePrivatelinkEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region to retrieve the Private Link configuration for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/azure_privatelink_endpoint#region DataEcAzurePrivatelinkEndpoint#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/azure_privatelink_endpoint ec_azure_privatelink_endpoint}
*/
export class DataEcAzurePrivatelinkEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_azure_privatelink_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEcAzurePrivatelinkEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEcAzurePrivatelinkEndpoint to import
  * @param importFromId The id of the existing DataEcAzurePrivatelinkEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/azure_privatelink_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEcAzurePrivatelinkEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_azure_privatelink_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/azure_privatelink_endpoint ec_azure_privatelink_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEcAzurePrivatelinkEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataEcAzurePrivatelinkEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_azure_privatelink_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // service_alias - computed: true, optional: false, required: false
  public get serviceAlias() {
    return this.getStringAttribute('service_alias');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
