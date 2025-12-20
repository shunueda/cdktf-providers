// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/ipv6_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeIpv6RangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IPv6 range to retrieve information about.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/ipv6_range#range DataLinodeIpv6Range#range}
  */
  readonly range: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/ipv6_range linode_ipv6_range}
*/
export class DataLinodeIpv6Range extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_ipv6_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeIpv6Range resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeIpv6Range to import
  * @param importFromId The id of the existing DataLinodeIpv6Range that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/ipv6_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeIpv6Range to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_ipv6_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/ipv6_range linode_ipv6_range} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeIpv6RangeConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeIpv6RangeConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_ipv6_range',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._range = config.range;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_bgp - computed: true, optional: false, required: false
  public get isBgp() {
    return this.getBooleanAttribute('is_bgp');
  }

  // linodes - computed: true, optional: false, required: false
  public get linodes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('linodes')));
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }

  // range - computed: false, optional: false, required: true
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      range: cdktf.stringToTerraform(this._range),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      range: {
        value: cdktf.stringToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
