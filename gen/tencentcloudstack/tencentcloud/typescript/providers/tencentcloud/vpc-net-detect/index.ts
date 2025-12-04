// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcNetDetectConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of probe destination IPv4 addresses. Up to two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect#detect_destination_ip VpcNetDetect#detect_destination_ip}
  */
  readonly detectDestinationIp: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect#id VpcNetDetect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network probe description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect#net_detect_description VpcNetDetect#net_detect_description}
  */
  readonly netDetectDescription?: string;
  /**
  * Network probe name, the maximum length cannot exceed 60 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect#net_detect_name VpcNetDetect#net_detect_name}
  */
  readonly netDetectName: string;
  /**
  * The destination gateway of the next hop, the value is related to the next hop type. If the next hop type is VPN, and the value is the VPN gateway ID, such as: vpngw-12345678; If the next hop type is DIRECTCONNECT, and the value is the private line gateway ID, such as: dcg-12345678; If the next hop type is PEERCONNECTION, which takes the value of the peer connection ID, such as: pcx-12345678; If the next hop type is NAT, and the value is Nat gateway, such as: nat-12345678; If the next hop type is NORMAL_CVM, which takes the IPv4 address of the cloud server, such as: 10.0.0.12; If the next hop type is CCN, and the value is the cloud network ID, such as: ccn-12345678; If the next hop type is NONEXTHOP, and the specified network probe is a network probe without a next hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect#next_hop_destination VpcNetDetect#next_hop_destination}
  */
  readonly nextHopDestination?: string;
  /**
  * The next hop type, currently we support the following types: `VPN`: VPN gateway; `DIRECTCONNECT`: private line gateway; `PEERCONNECTION`: peer connection; `NAT`: NAT gateway; `NORMAL_CVM`: normal cloud server; `CCN`: cloud networking gateway; `NONEXTHOP`: no next hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect#next_hop_type VpcNetDetect#next_hop_type}
  */
  readonly nextHopType?: string;
  /**
  * Subnet instance ID. Such as:subnet-12345678.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect#subnet_id VpcNetDetect#subnet_id}
  */
  readonly subnetId: string;
  /**
  * `VPC` instance `ID`. Such as:`vpc-12345678`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect#vpc_id VpcNetDetect#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect tencentcloud_vpc_net_detect}
*/
export class VpcNetDetect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_net_detect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcNetDetect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcNetDetect to import
  * @param importFromId The id of the existing VpcNetDetect that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcNetDetect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_net_detect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/vpc_net_detect tencentcloud_vpc_net_detect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcNetDetectConfig
  */
  public constructor(scope: Construct, id: string, config: VpcNetDetectConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_net_detect',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._detectDestinationIp = config.detectDestinationIp;
    this._id = config.id;
    this._netDetectDescription = config.netDetectDescription;
    this._netDetectName = config.netDetectName;
    this._nextHopDestination = config.nextHopDestination;
    this._nextHopType = config.nextHopType;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detect_destination_ip - computed: false, optional: false, required: true
  private _detectDestinationIp?: string[]; 
  public get detectDestinationIp() {
    return cdktf.Fn.tolist(this.getListAttribute('detect_destination_ip'));
  }
  public set detectDestinationIp(value: string[]) {
    this._detectDestinationIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectDestinationIpInput() {
    return this._detectDestinationIp;
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

  // net_detect_description - computed: false, optional: true, required: false
  private _netDetectDescription?: string; 
  public get netDetectDescription() {
    return this.getStringAttribute('net_detect_description');
  }
  public set netDetectDescription(value: string) {
    this._netDetectDescription = value;
  }
  public resetNetDetectDescription() {
    this._netDetectDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netDetectDescriptionInput() {
    return this._netDetectDescription;
  }

  // net_detect_name - computed: false, optional: false, required: true
  private _netDetectName?: string; 
  public get netDetectName() {
    return this.getStringAttribute('net_detect_name');
  }
  public set netDetectName(value: string) {
    this._netDetectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netDetectNameInput() {
    return this._netDetectName;
  }

  // next_hop_destination - computed: false, optional: true, required: false
  private _nextHopDestination?: string; 
  public get nextHopDestination() {
    return this.getStringAttribute('next_hop_destination');
  }
  public set nextHopDestination(value: string) {
    this._nextHopDestination = value;
  }
  public resetNextHopDestination() {
    this._nextHopDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopDestinationInput() {
    return this._nextHopDestination;
  }

  // next_hop_type - computed: false, optional: true, required: false
  private _nextHopType?: string; 
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }
  public set nextHopType(value: string) {
    this._nextHopType = value;
  }
  public resetNextHopType() {
    this._nextHopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeInput() {
    return this._nextHopType;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detect_destination_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._detectDestinationIp),
      id: cdktf.stringToTerraform(this._id),
      net_detect_description: cdktf.stringToTerraform(this._netDetectDescription),
      net_detect_name: cdktf.stringToTerraform(this._netDetectName),
      next_hop_destination: cdktf.stringToTerraform(this._nextHopDestination),
      next_hop_type: cdktf.stringToTerraform(this._nextHopType),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detect_destination_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._detectDestinationIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_detect_description: {
        value: cdktf.stringToHclTerraform(this._netDetectDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_detect_name: {
        value: cdktf.stringToHclTerraform(this._netDetectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_destination: {
        value: cdktf.stringToHclTerraform(this._nextHopDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_type: {
        value: cdktf.stringToHclTerraform(this._nextHopType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
