// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudVpcNetDetectStateCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * The array of detection destination IPv4 addresses, which contains at most two IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check#detect_destination_ip DataTencentcloudVpcNetDetectStateCheck#detect_destination_ip}
  */
  readonly detectDestinationIp: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check#id DataTencentcloudVpcNetDetectStateCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of a network inspector instance, e.g. netd-12345678. Enter at least one of this parameter, VpcId, SubnetId, and NetDetectName. Use NetDetectId if it is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check#net_detect_id DataTencentcloudVpcNetDetectStateCheck#net_detect_id}
  */
  readonly netDetectId?: string;
  /**
  * The name of a network inspector, up to 60 bytes in length. It is used together with VpcId and NetDetectName. You should enter either this parameter or NetDetectId, or both. Use NetDetectId if it is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check#net_detect_name DataTencentcloudVpcNetDetectStateCheck#net_detect_name}
  */
  readonly netDetectName?: string;
  /**
  * The next-hop destination gateway. The value is related to NextHopType.If NextHopType is set to VPN, the value of this parameter is the VPN gateway ID, such as vpngw-12345678.If NextHopType is set to DIRECTCONNECT, the value of this parameter is the direct connect gateway ID, such as dcg-12345678.If NextHopType is set to PEERCONNECTION, the value of this parameter is the peering connection ID, such as pcx-12345678.If NextHopType is set to NAT, the value of this parameter is the NAT gateway ID, such as nat-12345678.If NextHopType is set to NORMAL_CVM, the value of this parameter is the IPv4 address of the CVM, such as 10.0.0.12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check#next_hop_destination DataTencentcloudVpcNetDetectStateCheck#next_hop_destination}
  */
  readonly nextHopDestination: string;
  /**
  * The type of the next hop. Currently supported types are:VPN: VPN gateway;DIRECTCONNECT: direct connect gateway;PEERCONNECTION: peering connection;NAT: NAT gateway;NORMAL_CVM: normal CVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check#next_hop_type DataTencentcloudVpcNetDetectStateCheck#next_hop_type}
  */
  readonly nextHopType: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check#result_output_file DataTencentcloudVpcNetDetectStateCheck#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * ID of a subnet instance, e.g. `subnet-12345678`, which is used together with VpcId and NetDetectName. You should enter either this parameter or NetDetectId, or both. Use NetDetectId if it is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check#subnet_id DataTencentcloudVpcNetDetectStateCheck#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * ID of a `VPC` instance, e.g. `vpc-12345678`, which is used together with SubnetId and NetDetectName. You should enter either this parameter or NetDetectId, or both. Use NetDetectId if it is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check#vpc_id DataTencentcloudVpcNetDetectStateCheck#vpc_id}
  */
  readonly vpcId?: string;
}
export interface DataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSet {
}

export function dataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSetToTerraform(struct?: DataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSetToHclTerraform(struct?: DataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delay - computed: true, optional: false, required: false
  public get delay() {
    return this.getNumberAttribute('delay');
  }

  // detect_destination_ip - computed: true, optional: false, required: false
  public get detectDestinationIp() {
    return this.getStringAttribute('detect_destination_ip');
  }

  // packet_loss_rate - computed: true, optional: false, required: false
  public get packetLossRate() {
    return this.getNumberAttribute('packet_loss_rate');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getNumberAttribute('state');
  }
}

export class DataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSetOutputReference {
    return new DataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check tencentcloud_vpc_net_detect_state_check}
*/
export class DataTencentcloudVpcNetDetectStateCheck extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_net_detect_state_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudVpcNetDetectStateCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudVpcNetDetectStateCheck to import
  * @param importFromId The id of the existing DataTencentcloudVpcNetDetectStateCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudVpcNetDetectStateCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_net_detect_state_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/vpc_net_detect_state_check tencentcloud_vpc_net_detect_state_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudVpcNetDetectStateCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudVpcNetDetectStateCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_net_detect_state_check',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._netDetectId = config.netDetectId;
    this._netDetectName = config.netDetectName;
    this._nextHopDestination = config.nextHopDestination;
    this._nextHopType = config.nextHopType;
    this._resultOutputFile = config.resultOutputFile;
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

  // net_detect_id - computed: false, optional: true, required: false
  private _netDetectId?: string; 
  public get netDetectId() {
    return this.getStringAttribute('net_detect_id');
  }
  public set netDetectId(value: string) {
    this._netDetectId = value;
  }
  public resetNetDetectId() {
    this._netDetectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netDetectIdInput() {
    return this._netDetectId;
  }

  // net_detect_ip_state_set - computed: true, optional: false, required: false
  private _netDetectIpStateSet = new DataTencentcloudVpcNetDetectStateCheckNetDetectIpStateSetList(this, "net_detect_ip_state_set", false);
  public get netDetectIpStateSet() {
    return this._netDetectIpStateSet;
  }

  // net_detect_name - computed: false, optional: true, required: false
  private _netDetectName?: string; 
  public get netDetectName() {
    return this.getStringAttribute('net_detect_name');
  }
  public set netDetectName(value: string) {
    this._netDetectName = value;
  }
  public resetNetDetectName() {
    this._netDetectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netDetectNameInput() {
    return this._netDetectName;
  }

  // next_hop_destination - computed: false, optional: false, required: true
  private _nextHopDestination?: string; 
  public get nextHopDestination() {
    return this.getStringAttribute('next_hop_destination');
  }
  public set nextHopDestination(value: string) {
    this._nextHopDestination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopDestinationInput() {
    return this._nextHopDestination;
  }

  // next_hop_type - computed: false, optional: false, required: true
  private _nextHopType?: string; 
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }
  public set nextHopType(value: string) {
    this._nextHopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeInput() {
    return this._nextHopType;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
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
      net_detect_id: cdktf.stringToTerraform(this._netDetectId),
      net_detect_name: cdktf.stringToTerraform(this._netDetectName),
      next_hop_destination: cdktf.stringToTerraform(this._nextHopDestination),
      next_hop_type: cdktf.stringToTerraform(this._nextHopType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      net_detect_id: {
        value: cdktf.stringToHclTerraform(this._netDetectId),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
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
