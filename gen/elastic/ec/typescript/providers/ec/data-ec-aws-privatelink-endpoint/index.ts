// https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/data-sources/aws_privatelink_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEcAwsPrivatelinkEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region to retrieve the Private Link configuration for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/data-sources/aws_privatelink_endpoint#region DataEcAwsPrivatelinkEndpoint#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/data-sources/aws_privatelink_endpoint ec_aws_privatelink_endpoint}
*/
export class DataEcAwsPrivatelinkEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_aws_privatelink_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEcAwsPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEcAwsPrivatelinkEndpoint to import
  * @param importFromId The id of the existing DataEcAwsPrivatelinkEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/data-sources/aws_privatelink_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEcAwsPrivatelinkEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_aws_privatelink_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/data-sources/aws_privatelink_endpoint ec_aws_privatelink_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEcAwsPrivatelinkEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataEcAwsPrivatelinkEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_aws_privatelink_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.3',
        providerVersionConstraint: '0.12.3'
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

  // vpc_service_name - computed: true, optional: false, required: false
  public get vpcServiceName() {
    return this.getStringAttribute('vpc_service_name');
  }

  // zone_ids - computed: true, optional: false, required: false
  public get zoneIds() {
    return this.getListAttribute('zone_ids');
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
