// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_subnet_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolidserverIp6SubnetQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_subnet_query#id DataSolidserverIp6SubnetQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The query used to find the first matching subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_subnet_query#orderby DataSolidserverIp6SubnetQuery#orderby}
  */
  readonly orderby?: string;
  /**
  * The query used to find the first matching subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_subnet_query#query DataSolidserverIp6SubnetQuery#query}
  */
  readonly query: string;
  /**
  * The tags to be used to find the first matching subnet in the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_subnet_query#tags DataSolidserverIp6SubnetQuery#tags}
  */
  readonly tags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_subnet_query solidserver_ip6_subnet_query}
*/
export class DataSolidserverIp6SubnetQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_ip6_subnet_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolidserverIp6SubnetQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolidserverIp6SubnetQuery to import
  * @param importFromId The id of the existing DataSolidserverIp6SubnetQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_subnet_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolidserverIp6SubnetQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_ip6_subnet_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_subnet_query solidserver_ip6_subnet_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolidserverIp6SubnetQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolidserverIp6SubnetQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_ip6_subnet_query',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25'
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
    this._orderby = config.orderby;
    this._query = config.query;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // class_parameters - computed: true, optional: false, required: false
  private _classParameters = new cdktf.StringMap(this, "class_parameters");
  public get classParameters() {
    return this._classParameters;
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // orderby - computed: false, optional: true, required: false
  private _orderby?: string; 
  public get orderby() {
    return this.getStringAttribute('orderby');
  }
  public set orderby(value: string) {
    this._orderby = value;
  }
  public resetOrderby() {
    this._orderby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderbyInput() {
    return this._orderby;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_size - computed: true, optional: false, required: false
  public get prefixSize() {
    return this.getNumberAttribute('prefix_size');
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // space - computed: true, optional: false, required: false
  public get space() {
    return this.getStringAttribute('space');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // terminal - computed: true, optional: false, required: false
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }

  // vlan_domain - computed: true, optional: false, required: false
  public get vlanDomain() {
    return this.getStringAttribute('vlan_domain');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vlan_name - computed: true, optional: false, required: false
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }

  // vlan_range - computed: true, optional: false, required: false
  public get vlanRange() {
    return this.getStringAttribute('vlan_range');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      orderby: cdktf.stringToTerraform(this._orderby),
      query: cdktf.stringToTerraform(this._query),
      tags: cdktf.stringToTerraform(this._tags),
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
      orderby: {
        value: cdktf.stringToHclTerraform(this._orderby),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
