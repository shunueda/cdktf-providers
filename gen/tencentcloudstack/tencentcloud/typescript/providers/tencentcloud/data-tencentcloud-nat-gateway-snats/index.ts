// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudNatGatewaySnatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats#description DataTencentcloudNatGatewaySnats#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats#id DataTencentcloudNatGatewaySnats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats#instance_id DataTencentcloudNatGatewaySnats#instance_id}
  */
  readonly instanceId?: string;
  /**
  * NAT gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats#nat_gateway_id DataTencentcloudNatGatewaySnats#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Elastic IP address pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats#public_ip_addr DataTencentcloudNatGatewaySnats#public_ip_addr}
  */
  readonly publicIpAddr?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats#result_output_file DataTencentcloudNatGatewaySnats#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Subnet instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats#subnet_id DataTencentcloudNatGatewaySnats#subnet_id}
  */
  readonly subnetId?: string;
}
export interface DataTencentcloudNatGatewaySnatsSnatListStruct {
}

export function dataTencentcloudNatGatewaySnatsSnatListStructToTerraform(struct?: DataTencentcloudNatGatewaySnatsSnatListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudNatGatewaySnatsSnatListStructToHclTerraform(struct?: DataTencentcloudNatGatewaySnatsSnatListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudNatGatewaySnatsSnatListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudNatGatewaySnatsSnatListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudNatGatewaySnatsSnatListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_private_ip_addr - computed: true, optional: false, required: false
  public get instancePrivateIpAddr() {
    return this.getStringAttribute('instance_private_ip_addr');
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // public_ip_addr - computed: true, optional: false, required: false
  public get publicIpAddr() {
    return this.getListAttribute('public_ip_addr');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // snat_id - computed: true, optional: false, required: false
  public get snatId() {
    return this.getStringAttribute('snat_id');
  }

  // subnet_cidr_block - computed: true, optional: false, required: false
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataTencentcloudNatGatewaySnatsSnatListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudNatGatewaySnatsSnatListStructOutputReference {
    return new DataTencentcloudNatGatewaySnatsSnatListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats tencentcloud_nat_gateway_snats}
*/
export class DataTencentcloudNatGatewaySnats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_nat_gateway_snats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudNatGatewaySnats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudNatGatewaySnats to import
  * @param importFromId The id of the existing DataTencentcloudNatGatewaySnats that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudNatGatewaySnats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_nat_gateway_snats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/nat_gateway_snats tencentcloud_nat_gateway_snats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudNatGatewaySnatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudNatGatewaySnatsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_nat_gateway_snats',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._natGatewayId = config.natGatewayId;
    this._publicIpAddr = config.publicIpAddr;
    this._resultOutputFile = config.resultOutputFile;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // instance_id - computed: false, optional: true, required: false
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

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // public_ip_addr - computed: false, optional: true, required: false
  private _publicIpAddr?: string[]; 
  public get publicIpAddr() {
    return this.getListAttribute('public_ip_addr');
  }
  public set publicIpAddr(value: string[]) {
    this._publicIpAddr = value;
  }
  public resetPublicIpAddr() {
    this._publicIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddrInput() {
    return this._publicIpAddr;
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

  // snat_list - computed: true, optional: false, required: false
  private _snatList = new DataTencentcloudNatGatewaySnatsSnatListStructList(this, "snat_list", false);
  public get snatList() {
    return this._snatList;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      public_ip_addr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicIpAddr),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_addr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicIpAddr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
