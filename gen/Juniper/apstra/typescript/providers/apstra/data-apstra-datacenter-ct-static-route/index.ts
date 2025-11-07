// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_static_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterCtStaticRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Primitive name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_static_route#name DataApstraDatacenterCtStaticRoute#name}
  */
  readonly name?: string;
  /**
  * IPv4 or IPv6 prefix in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_static_route#network DataApstraDatacenterCtStaticRoute#network}
  */
  readonly network: string;
  /**
  * Indicates whether the next-hop IP address is shared across multiple remote systems. Default:  Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_static_route#share_ip_endpoint DataApstraDatacenterCtStaticRoute#share_ip_endpoint}
  */
  readonly shareIpEndpoint?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_static_route apstra_datacenter_ct_static_route}
*/
export class DataApstraDatacenterCtStaticRoute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ct_static_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterCtStaticRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterCtStaticRoute to import
  * @param importFromId The id of the existing DataApstraDatacenterCtStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_static_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterCtStaticRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ct_static_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_static_route apstra_datacenter_ct_static_route} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterCtStaticRouteConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterCtStaticRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ct_static_route',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
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
    this._network = config.network;
    this._shareIpEndpoint = config.shareIpEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // primitive - computed: true, optional: false, required: false
  public get primitive() {
    return this.getStringAttribute('primitive');
  }

  // share_ip_endpoint - computed: false, optional: true, required: false
  private _shareIpEndpoint?: boolean | cdktf.IResolvable; 
  public get shareIpEndpoint() {
    return this.getBooleanAttribute('share_ip_endpoint');
  }
  public set shareIpEndpoint(value: boolean | cdktf.IResolvable) {
    this._shareIpEndpoint = value;
  }
  public resetShareIpEndpoint() {
    this._shareIpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIpEndpointInput() {
    return this._shareIpEndpoint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      share_ip_endpoint: cdktf.booleanToTerraform(this._shareIpEndpoint),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_ip_endpoint: {
        value: cdktf.booleanToHclTerraform(this._shareIpEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
