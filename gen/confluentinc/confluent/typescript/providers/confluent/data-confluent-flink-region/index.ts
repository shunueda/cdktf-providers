// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/flink_region
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluentFlinkRegionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/flink_region#cloud DataConfluentFlinkRegion#cloud}
  */
  readonly cloud: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/flink_region#region DataConfluentFlinkRegion#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/flink_region confluent_flink_region}
*/
export class DataConfluentFlinkRegion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_flink_region";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluentFlinkRegion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluentFlinkRegion to import
  * @param importFromId The id of the existing DataConfluentFlinkRegion that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/flink_region#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluentFlinkRegion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_flink_region", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/flink_region confluent_flink_region} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluentFlinkRegionConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfluentFlinkRegionConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_flink_region',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.57.0',
        providerVersionConstraint: '2.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloud = config.cloud;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // cloud - computed: false, optional: false, required: true
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // private_rest_endpoint - computed: true, optional: false, required: false
  public get privateRestEndpoint() {
    return this.getStringAttribute('private_rest_endpoint');
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

  // rest_endpoint - computed: true, optional: false, required: false
  public get restEndpoint() {
    return this.getStringAttribute('rest_endpoint');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: cdktf.stringToTerraform(this._cloud),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
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
