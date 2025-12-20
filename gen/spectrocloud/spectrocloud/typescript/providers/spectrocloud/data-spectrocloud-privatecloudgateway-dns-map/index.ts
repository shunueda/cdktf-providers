// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/privatecloudgateway_dns_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpectrocloudPrivatecloudgatewayDnsMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/privatecloudgateway_dns_map#id DataSpectrocloudPrivatecloudgatewayDnsMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The network to which the private cloud gateway is mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/privatecloudgateway_dns_map#network DataSpectrocloudPrivatecloudgatewayDnsMap#network}
  */
  readonly network?: string;
  /**
  * The ID of the private cloud gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/privatecloudgateway_dns_map#private_cloud_gateway_id DataSpectrocloudPrivatecloudgatewayDnsMap#private_cloud_gateway_id}
  */
  readonly privateCloudGatewayId: string;
  /**
  * The domain name used for DNS search queries within the private cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/privatecloudgateway_dns_map#search_domain_name DataSpectrocloudPrivatecloudgatewayDnsMap#search_domain_name}
  */
  readonly searchDomainName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/privatecloudgateway_dns_map spectrocloud_privatecloudgateway_dns_map}
*/
export class DataSpectrocloudPrivatecloudgatewayDnsMap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_privatecloudgateway_dns_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpectrocloudPrivatecloudgatewayDnsMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpectrocloudPrivatecloudgatewayDnsMap to import
  * @param importFromId The id of the existing DataSpectrocloudPrivatecloudgatewayDnsMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/privatecloudgateway_dns_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpectrocloudPrivatecloudgatewayDnsMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_privatecloudgateway_dns_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/privatecloudgateway_dns_map spectrocloud_privatecloudgateway_dns_map} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpectrocloudPrivatecloudgatewayDnsMapConfig
  */
  public constructor(scope: Construct, id: string, config: DataSpectrocloudPrivatecloudgatewayDnsMapConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_privatecloudgateway_dns_map',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.2',
        providerVersionConstraint: '0.26.2'
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
    this._network = config.network;
    this._privateCloudGatewayId = config.privateCloudGatewayId;
    this._searchDomainName = config.searchDomainName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_center - computed: true, optional: false, required: false
  public get dataCenter() {
    return this.getStringAttribute('data_center');
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

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // private_cloud_gateway_id - computed: false, optional: false, required: true
  private _privateCloudGatewayId?: string; 
  public get privateCloudGatewayId() {
    return this.getStringAttribute('private_cloud_gateway_id');
  }
  public set privateCloudGatewayId(value: string) {
    this._privateCloudGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCloudGatewayIdInput() {
    return this._privateCloudGatewayId;
  }

  // search_domain_name - computed: false, optional: false, required: true
  private _searchDomainName?: string; 
  public get searchDomainName() {
    return this.getStringAttribute('search_domain_name');
  }
  public set searchDomainName(value: string) {
    this._searchDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainNameInput() {
    return this._searchDomainName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network: cdktf.stringToTerraform(this._network),
      private_cloud_gateway_id: cdktf.stringToTerraform(this._privateCloudGatewayId),
      search_domain_name: cdktf.stringToTerraform(this._searchDomainName),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_cloud_gateway_id: {
        value: cdktf.stringToHclTerraform(this._privateCloudGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_domain_name: {
        value: cdktf.stringToHclTerraform(this._searchDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
