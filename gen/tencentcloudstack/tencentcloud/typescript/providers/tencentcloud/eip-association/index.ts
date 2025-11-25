// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/eip_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EipAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of EIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/eip_association#eip_id EipAssociation#eip_id}
  */
  readonly eipId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/eip_association#id EipAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The CVM, SaaS WAF or CLB instance id going to bind with the EIP. This field is conflict with `network_interface_id` and `private_ip fields`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/eip_association#instance_id EipAssociation#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Indicates the network interface id like `eni-xxxxxx`. This field is conflict with `instance_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/eip_association#network_interface_id EipAssociation#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Indicates an IP belongs to the `network_interface_id`. This field is conflict with `instance_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/eip_association#private_ip EipAssociation#private_ip}
  */
  readonly privateIp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/eip_association tencentcloud_eip_association}
*/
export class EipAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_eip_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EipAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EipAssociation to import
  * @param importFromId The id of the existing EipAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/eip_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EipAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_eip_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/eip_association tencentcloud_eip_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EipAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: EipAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_eip_association',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eipId = config.eipId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._networkInterfaceId = config.networkInterfaceId;
    this._privateIp = config.privateIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_id - computed: true, optional: false, required: false
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
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

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eip_id: cdktf.stringToTerraform(this._eipId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      private_ip: cdktf.stringToTerraform(this._privateIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_id: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
