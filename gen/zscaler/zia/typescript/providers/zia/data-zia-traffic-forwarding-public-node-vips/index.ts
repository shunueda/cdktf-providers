// https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/traffic_forwarding_public_node_vips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaTrafficForwardingPublicNodeVipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/traffic_forwarding_public_node_vips#datacenter DataZiaTrafficForwardingPublicNodeVips#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/traffic_forwarding_public_node_vips#id DataZiaTrafficForwardingPublicNodeVips#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/traffic_forwarding_public_node_vips zia_traffic_forwarding_public_node_vips}
*/
export class DataZiaTrafficForwardingPublicNodeVips extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_traffic_forwarding_public_node_vips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaTrafficForwardingPublicNodeVips resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaTrafficForwardingPublicNodeVips to import
  * @param importFromId The id of the existing DataZiaTrafficForwardingPublicNodeVips that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/traffic_forwarding_public_node_vips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaTrafficForwardingPublicNodeVips to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_traffic_forwarding_public_node_vips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/traffic_forwarding_public_node_vips zia_traffic_forwarding_public_node_vips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaTrafficForwardingPublicNodeVipsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaTrafficForwardingPublicNodeVipsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_traffic_forwarding_public_node_vips',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.2',
        providerVersionConstraint: '4.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datacenter = config.datacenter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // gre_domain_name - computed: true, optional: false, required: false
  public get greDomainName() {
    return this.getStringAttribute('gre_domain_name');
  }

  // gre_ips - computed: true, optional: false, required: false
  public get greIps() {
    return this.getListAttribute('gre_ips');
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // pac_domain_name - computed: true, optional: false, required: false
  public get pacDomainName() {
    return this.getStringAttribute('pac_domain_name');
  }

  // pac_ips - computed: true, optional: false, required: false
  public get pacIps() {
    return this.getListAttribute('pac_ips');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // vpn_domain_name - computed: true, optional: false, required: false
  public get vpnDomainName() {
    return this.getStringAttribute('vpn_domain_name');
  }

  // vpn_ips - computed: true, optional: false, required: false
  public get vpnIps() {
    return this.getListAttribute('vpn_ips');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
