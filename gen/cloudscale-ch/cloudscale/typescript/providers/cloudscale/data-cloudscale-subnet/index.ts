// https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudscaleSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/subnet#cidr DataCloudscaleSubnet#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/subnet#gateway_address DataCloudscaleSubnet#gateway_address}
  */
  readonly gatewayAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/subnet#id DataCloudscaleSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/subnet#network_name DataCloudscaleSubnet#network_name}
  */
  readonly networkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/subnet#network_uuid DataCloudscaleSubnet#network_uuid}
  */
  readonly networkUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/subnet#tags DataCloudscaleSubnet#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/subnet cloudscale_subnet}
*/
export class DataCloudscaleSubnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudscale_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudscaleSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudscaleSubnet to import
  * @param importFromId The id of the existing DataCloudscaleSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudscaleSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudscale_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/subnet cloudscale_subnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudscaleSubnetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudscaleSubnetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudscale_subnet',
      terraformGeneratorMetadata: {
        providerName: 'cloudscale',
        providerVersion: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._gatewayAddress = config.gatewayAddress;
    this._id = config.id;
    this._networkName = config.networkName;
    this._networkUuid = config.networkUuid;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // gateway_address - computed: true, optional: true, required: false
  private _gatewayAddress?: string; 
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }
  public set gatewayAddress(value: string) {
    this._gatewayAddress = value;
  }
  public resetGatewayAddress() {
    this._gatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressInput() {
    return this._gatewayAddress;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: false, optional: true, required: false
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

  // network_href - computed: true, optional: false, required: false
  public get networkHref() {
    return this.getStringAttribute('network_href');
  }

  // network_name - computed: true, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // network_uuid - computed: true, optional: true, required: false
  private _networkUuid?: string; 
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }
  public set networkUuid(value: string) {
    this._networkUuid = value;
  }
  public resetNetworkUuid() {
    this._networkUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUuidInput() {
    return this._networkUuid;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      gateway_address: cdktf.stringToTerraform(this._gatewayAddress),
      id: cdktf.stringToTerraform(this._id),
      network_name: cdktf.stringToTerraform(this._networkName),
      network_uuid: cdktf.stringToTerraform(this._networkUuid),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_address: {
        value: cdktf.stringToHclTerraform(this._gatewayAddress),
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
      network_name: {
        value: cdktf.stringToHclTerraform(this._networkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_uuid: {
        value: cdktf.stringToHclTerraform(this._networkUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
