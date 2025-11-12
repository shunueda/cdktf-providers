// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_org_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdVappOrgNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_org_network#id DataVcdVappOrgNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_org_network#org DataVcdVappOrgNetwork#org}
  */
  readonly org?: string;
  /**
  * Organization network name to which vApp network is connected to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_org_network#org_network_name DataVcdVappOrgNetwork#org_network_name}
  */
  readonly orgNetworkName: string;
  /**
  * vApp name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_org_network#vapp_name DataVcdVappOrgNetwork#vapp_name}
  */
  readonly vappName: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_org_network#vdc DataVcdVappOrgNetwork#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_org_network vcd_vapp_org_network}
*/
export class DataVcdVappOrgNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vapp_org_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdVappOrgNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdVappOrgNetwork to import
  * @param importFromId The id of the existing DataVcdVappOrgNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_org_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdVappOrgNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vapp_org_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_org_network vcd_vapp_org_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdVappOrgNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdVappOrgNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vapp_org_network',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
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
    this._org = config.org;
    this._orgNetworkName = config.orgNetworkName;
    this._vappName = config.vappName;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_fenced - computed: true, optional: false, required: false
  public get isFenced() {
    return this.getBooleanAttribute('is_fenced');
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // org_network_name - computed: false, optional: false, required: true
  private _orgNetworkName?: string; 
  public get orgNetworkName() {
    return this.getStringAttribute('org_network_name');
  }
  public set orgNetworkName(value: string) {
    this._orgNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNetworkNameInput() {
    return this._orgNetworkName;
  }

  // retain_ip_mac_enabled - computed: true, optional: false, required: false
  public get retainIpMacEnabled() {
    return this.getBooleanAttribute('retain_ip_mac_enabled');
  }

  // vapp_name - computed: false, optional: false, required: true
  private _vappName?: string; 
  public get vappName() {
    return this.getStringAttribute('vapp_name');
  }
  public set vappName(value: string) {
    this._vappName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vappNameInput() {
    return this._vappName;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org: cdktf.stringToTerraform(this._org),
      org_network_name: cdktf.stringToTerraform(this._orgNetworkName),
      vapp_name: cdktf.stringToTerraform(this._vappName),
      vdc: cdktf.stringToTerraform(this._vdc),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_network_name: {
        value: cdktf.stringToHclTerraform(this._orgNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vapp_name: {
        value: cdktf.stringToHclTerraform(this._vappName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
