// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZecEipAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the instance to associate with the EIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip_association#associated_id ZecEipAssociation#associated_id}
  */
  readonly associatedId: string;
  /**
  * Type of the associated instance. Valid values: LB(Load balancer.), NIC(vNic), NAT(NAT gateway).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip_association#associated_type ZecEipAssociation#associated_type}
  */
  readonly associatedType: string;
  /**
  * Elastic IP bind type. Effective when the elastic IP is assigned to a vNIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip_association#bind_type ZecEipAssociation#bind_type}
  */
  readonly bindType?: string;
  /**
  * ID of the elastic IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip_association#eip_id ZecEipAssociation#eip_id}
  */
  readonly eipId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip_association#id ZecEipAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Private IP address of the instance. Required if associated_type is `Nic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip_association#private_ip_address ZecEipAssociation#private_ip_address}
  */
  readonly privateIpAddress?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip_association zenlayercloud_zec_eip_association}
*/
export class ZecEipAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_eip_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZecEipAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZecEipAssociation to import
  * @param importFromId The id of the existing ZecEipAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZecEipAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_eip_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip_association zenlayercloud_zec_eip_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZecEipAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ZecEipAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_eip_association',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.11',
        providerVersionConstraint: '0.2.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedId = config.associatedId;
    this._associatedType = config.associatedType;
    this._bindType = config.bindType;
    this._eipId = config.eipId;
    this._id = config.id;
    this._privateIpAddress = config.privateIpAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_id - computed: false, optional: false, required: true
  private _associatedId?: string; 
  public get associatedId() {
    return this.getStringAttribute('associated_id');
  }
  public set associatedId(value: string) {
    this._associatedId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedIdInput() {
    return this._associatedId;
  }

  // associated_type - computed: false, optional: false, required: true
  private _associatedType?: string; 
  public get associatedType() {
    return this.getStringAttribute('associated_type');
  }
  public set associatedType(value: string) {
    this._associatedType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedTypeInput() {
    return this._associatedType;
  }

  // bind_type - computed: true, optional: true, required: false
  private _bindType?: string; 
  public get bindType() {
    return this.getStringAttribute('bind_type');
  }
  public set bindType(value: string) {
    this._bindType = value;
  }
  public resetBindType() {
    this._bindType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTypeInput() {
    return this._bindType;
  }

  // eip_id - computed: false, optional: false, required: true
  private _eipId?: string; 
  public get eipId() {
    return this.getStringAttribute('eip_id');
  }
  public set eipId(value: string) {
    this._eipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipIdInput() {
    return this._eipId;
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

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_id: cdktf.stringToTerraform(this._associatedId),
      associated_type: cdktf.stringToTerraform(this._associatedType),
      bind_type: cdktf.stringToTerraform(this._bindType),
      eip_id: cdktf.stringToTerraform(this._eipId),
      id: cdktf.stringToTerraform(this._id),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_id: {
        value: cdktf.stringToHclTerraform(this._associatedId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_type: {
        value: cdktf.stringToHclTerraform(this._associatedType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_type: {
        value: cdktf.stringToHclTerraform(this._bindType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip_id: {
        value: cdktf.stringToHclTerraform(this._eipId),
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
      private_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
