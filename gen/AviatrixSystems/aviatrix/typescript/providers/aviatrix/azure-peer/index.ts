// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzurePeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * This parameter represents the name of an Azure Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer#account_name1 AzurePeer#account_name1}
  */
  readonly accountName1: string;
  /**
  * This parameter represents the name of an Azure Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer#account_name2 AzurePeer#account_name2}
  */
  readonly accountName2: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer#id AzurePeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VNet-Name of Azure cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer#vnet_name_resource_group1 AzurePeer#vnet_name_resource_group1}
  */
  readonly vnetNameResourceGroup1: string;
  /**
  * VNet-Name of Azure cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer#vnet_name_resource_group2 AzurePeer#vnet_name_resource_group2}
  */
  readonly vnetNameResourceGroup2: string;
  /**
  * Region of Azure cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer#vnet_reg1 AzurePeer#vnet_reg1}
  */
  readonly vnetReg1: string;
  /**
  * Region of Azure cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer#vnet_reg2 AzurePeer#vnet_reg2}
  */
  readonly vnetReg2: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer aviatrix_azure_peer}
*/
export class AzurePeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_azure_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzurePeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzurePeer to import
  * @param importFromId The id of the existing AzurePeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzurePeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_azure_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_peer aviatrix_azure_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzurePeerConfig
  */
  public constructor(scope: Construct, id: string, config: AzurePeerConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_azure_peer',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName1 = config.accountName1;
    this._accountName2 = config.accountName2;
    this._id = config.id;
    this._vnetNameResourceGroup1 = config.vnetNameResourceGroup1;
    this._vnetNameResourceGroup2 = config.vnetNameResourceGroup2;
    this._vnetReg1 = config.vnetReg1;
    this._vnetReg2 = config.vnetReg2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name1 - computed: false, optional: false, required: true
  private _accountName1?: string; 
  public get accountName1() {
    return this.getStringAttribute('account_name1');
  }
  public set accountName1(value: string) {
    this._accountName1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountName1Input() {
    return this._accountName1;
  }

  // account_name2 - computed: false, optional: false, required: true
  private _accountName2?: string; 
  public get accountName2() {
    return this.getStringAttribute('account_name2');
  }
  public set accountName2(value: string) {
    this._accountName2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountName2Input() {
    return this._accountName2;
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

  // vnet_cidr1 - computed: true, optional: false, required: false
  public get vnetCidr1() {
    return this.getListAttribute('vnet_cidr1');
  }

  // vnet_cidr2 - computed: true, optional: false, required: false
  public get vnetCidr2() {
    return this.getListAttribute('vnet_cidr2');
  }

  // vnet_name_resource_group1 - computed: false, optional: false, required: true
  private _vnetNameResourceGroup1?: string; 
  public get vnetNameResourceGroup1() {
    return this.getStringAttribute('vnet_name_resource_group1');
  }
  public set vnetNameResourceGroup1(value: string) {
    this._vnetNameResourceGroup1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameResourceGroup1Input() {
    return this._vnetNameResourceGroup1;
  }

  // vnet_name_resource_group2 - computed: false, optional: false, required: true
  private _vnetNameResourceGroup2?: string; 
  public get vnetNameResourceGroup2() {
    return this.getStringAttribute('vnet_name_resource_group2');
  }
  public set vnetNameResourceGroup2(value: string) {
    this._vnetNameResourceGroup2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameResourceGroup2Input() {
    return this._vnetNameResourceGroup2;
  }

  // vnet_reg1 - computed: false, optional: false, required: true
  private _vnetReg1?: string; 
  public get vnetReg1() {
    return this.getStringAttribute('vnet_reg1');
  }
  public set vnetReg1(value: string) {
    this._vnetReg1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetReg1Input() {
    return this._vnetReg1;
  }

  // vnet_reg2 - computed: false, optional: false, required: true
  private _vnetReg2?: string; 
  public get vnetReg2() {
    return this.getStringAttribute('vnet_reg2');
  }
  public set vnetReg2(value: string) {
    this._vnetReg2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetReg2Input() {
    return this._vnetReg2;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name1: cdktf.stringToTerraform(this._accountName1),
      account_name2: cdktf.stringToTerraform(this._accountName2),
      id: cdktf.stringToTerraform(this._id),
      vnet_name_resource_group1: cdktf.stringToTerraform(this._vnetNameResourceGroup1),
      vnet_name_resource_group2: cdktf.stringToTerraform(this._vnetNameResourceGroup2),
      vnet_reg1: cdktf.stringToTerraform(this._vnetReg1),
      vnet_reg2: cdktf.stringToTerraform(this._vnetReg2),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name1: {
        value: cdktf.stringToHclTerraform(this._accountName1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name2: {
        value: cdktf.stringToHclTerraform(this._accountName2),
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
      vnet_name_resource_group1: {
        value: cdktf.stringToHclTerraform(this._vnetNameResourceGroup1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_name_resource_group2: {
        value: cdktf.stringToHclTerraform(this._vnetNameResourceGroup2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_reg1: {
        value: cdktf.stringToHclTerraform(this._vnetReg1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_reg2: {
        value: cdktf.stringToHclTerraform(this._vnetReg2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
