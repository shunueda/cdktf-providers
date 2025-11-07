// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/vwan_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBigipVwanConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name azure_vwan_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/vwan_config#azure_vwan_name DataBigipVwanConfig#azure_vwan_name}
  */
  readonly azureVwanName: string;
  /**
  * Name azure_vwan_resourcegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/vwan_config#azure_vwan_resourcegroup DataBigipVwanConfig#azure_vwan_resourcegroup}
  */
  readonly azureVwanResourcegroup: string;
  /**
  * Name azure_vwan_vpnsite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/vwan_config#azure_vwan_vpnsite DataBigipVwanConfig#azure_vwan_vpnsite}
  */
  readonly azureVwanVpnsite: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/vwan_config#id DataBigipVwanConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/vwan_config bigip_vwan_config}
*/
export class DataBigipVwanConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_vwan_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBigipVwanConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBigipVwanConfig to import
  * @param importFromId The id of the existing DataBigipVwanConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/vwan_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBigipVwanConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_vwan_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/vwan_config bigip_vwan_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBigipVwanConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataBigipVwanConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_vwan_config',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureVwanName = config.azureVwanName;
    this._azureVwanResourcegroup = config.azureVwanResourcegroup;
    this._azureVwanVpnsite = config.azureVwanVpnsite;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_vwan_name - computed: false, optional: false, required: true
  private _azureVwanName?: string; 
  public get azureVwanName() {
    return this.getStringAttribute('azure_vwan_name');
  }
  public set azureVwanName(value: string) {
    this._azureVwanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVwanNameInput() {
    return this._azureVwanName;
  }

  // azure_vwan_resourcegroup - computed: false, optional: false, required: true
  private _azureVwanResourcegroup?: string; 
  public get azureVwanResourcegroup() {
    return this.getStringAttribute('azure_vwan_resourcegroup');
  }
  public set azureVwanResourcegroup(value: string) {
    this._azureVwanResourcegroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVwanResourcegroupInput() {
    return this._azureVwanResourcegroup;
  }

  // azure_vwan_vpnsite - computed: false, optional: false, required: true
  private _azureVwanVpnsite?: string; 
  public get azureVwanVpnsite() {
    return this.getStringAttribute('azure_vwan_vpnsite');
  }
  public set azureVwanVpnsite(value: string) {
    this._azureVwanVpnsite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVwanVpnsiteInput() {
    return this._azureVwanVpnsite;
  }

  // bigip_gw_ip - computed: true, optional: false, required: false
  public get bigipGwIp() {
    return this.getStringAttribute('bigip_gw_ip');
  }

  // hub_address_space - computed: true, optional: false, required: false
  public get hubAddressSpace() {
    return this.getStringAttribute('hub_address_space');
  }

  // hub_connected_subnets - computed: true, optional: false, required: false
  public get hubConnectedSubnets() {
    return this.getListAttribute('hub_connected_subnets');
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

  // preshared_key - computed: true, optional: false, required: false
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }

  // vwan_gw_address - computed: true, optional: false, required: false
  public get vwanGwAddress() {
    return this.getListAttribute('vwan_gw_address');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_vwan_name: cdktf.stringToTerraform(this._azureVwanName),
      azure_vwan_resourcegroup: cdktf.stringToTerraform(this._azureVwanResourcegroup),
      azure_vwan_vpnsite: cdktf.stringToTerraform(this._azureVwanVpnsite),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_vwan_name: {
        value: cdktf.stringToHclTerraform(this._azureVwanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_vwan_resourcegroup: {
        value: cdktf.stringToHclTerraform(this._azureVwanResourcegroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_vwan_vpnsite: {
        value: cdktf.stringToHclTerraform(this._azureVwanVpnsite),
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
