// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/privatelink_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudPrivatelinkEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Given descriptive name for the PrivateLink Endpoint (name and/or private_link_endpoint_url need to be provided to return data for the datasource)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/privatelink_endpoint#name DataDbtcloudPrivatelinkEndpoint#name}
  */
  readonly name?: string;
  /**
  * URL of the PrivateLink Endpoint (name and/or private_link_endpoint_url need to be provided to return data for the datasource)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/privatelink_endpoint#private_link_endpoint_url DataDbtcloudPrivatelinkEndpoint#private_link_endpoint_url}
  */
  readonly privateLinkEndpointUrl?: string;
  /**
  * Type of the PrivateLink Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/privatelink_endpoint#type DataDbtcloudPrivatelinkEndpoint#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/privatelink_endpoint dbtcloud_privatelink_endpoint}
*/
export class DataDbtcloudPrivatelinkEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_privatelink_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudPrivatelinkEndpoint to import
  * @param importFromId The id of the existing DataDbtcloudPrivatelinkEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/privatelink_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudPrivatelinkEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_privatelink_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/privatelink_endpoint dbtcloud_privatelink_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudPrivatelinkEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudPrivatelinkEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_privatelink_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._privateLinkEndpointUrl = config.privateLinkEndpointUrl;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_range - computed: true, optional: false, required: false
  public get cidrRange() {
    return this.getStringAttribute('cidr_range');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // private_link_endpoint_url - computed: false, optional: true, required: false
  private _privateLinkEndpointUrl?: string; 
  public get privateLinkEndpointUrl() {
    return this.getStringAttribute('private_link_endpoint_url');
  }
  public set privateLinkEndpointUrl(value: string) {
    this._privateLinkEndpointUrl = value;
  }
  public resetPrivateLinkEndpointUrl() {
    this._privateLinkEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEndpointUrlInput() {
    return this._privateLinkEndpointUrl;
  }

  // type - computed: true, optional: true, required: false
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
      name: cdktf.stringToTerraform(this._name),
      private_link_endpoint_url: cdktf.stringToTerraform(this._privateLinkEndpointUrl),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_link_endpoint_url: {
        value: cdktf.stringToHclTerraform(this._privateLinkEndpointUrl),
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
