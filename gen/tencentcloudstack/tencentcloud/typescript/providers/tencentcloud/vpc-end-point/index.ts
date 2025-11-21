// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point#end_point_name VpcEndPoint#end_point_name}
  */
  readonly endPointName: string;
  /**
  * ID of endpoint service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point#end_point_service_id VpcEndPoint#end_point_service_id}
  */
  readonly endPointServiceId: string;
  /**
  * VIP of endpoint ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point#end_point_vip VpcEndPoint#end_point_vip}
  */
  readonly endPointVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point#id VpcEndPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ordered security groups associated with the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point#security_groups_ids VpcEndPoint#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * ID of subnet instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point#subnet_id VpcEndPoint#subnet_id}
  */
  readonly subnetId: string;
  /**
  * ID of vpc instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point#vpc_id VpcEndPoint#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point tencentcloud_vpc_end_point}
*/
export class VpcEndPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_end_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcEndPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcEndPoint to import
  * @param importFromId The id of the existing VpcEndPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcEndPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_end_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/vpc_end_point tencentcloud_vpc_end_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndPointConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEndPointConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_end_point',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endPointName = config.endPointName;
    this._endPointServiceId = config.endPointServiceId;
    this._endPointVip = config.endPointVip;
    this._id = config.id;
    this._securityGroupsIds = config.securityGroupsIds;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_id - computed: true, optional: false, required: false
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // end_point_name - computed: false, optional: false, required: true
  private _endPointName?: string; 
  public get endPointName() {
    return this.getStringAttribute('end_point_name');
  }
  public set endPointName(value: string) {
    this._endPointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointNameInput() {
    return this._endPointName;
  }

  // end_point_owner - computed: true, optional: false, required: false
  public get endPointOwner() {
    return this.getStringAttribute('end_point_owner');
  }

  // end_point_service_id - computed: false, optional: false, required: true
  private _endPointServiceId?: string; 
  public get endPointServiceId() {
    return this.getStringAttribute('end_point_service_id');
  }
  public set endPointServiceId(value: string) {
    this._endPointServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceIdInput() {
    return this._endPointServiceId;
  }

  // end_point_vip - computed: true, optional: true, required: false
  private _endPointVip?: string; 
  public get endPointVip() {
    return this.getStringAttribute('end_point_vip');
  }
  public set endPointVip(value: string) {
    this._endPointVip = value;
  }
  public resetEndPointVip() {
    this._endPointVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointVipInput() {
    return this._endPointVip;
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

  // security_groups_ids - computed: true, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return this.getListAttribute('security_groups_ids');
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      end_point_name: cdktf.stringToTerraform(this._endPointName),
      end_point_service_id: cdktf.stringToTerraform(this._endPointServiceId),
      end_point_vip: cdktf.stringToTerraform(this._endPointVip),
      id: cdktf.stringToTerraform(this._id),
      security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupsIds),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_point_name: {
        value: cdktf.stringToHclTerraform(this._endPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_point_service_id: {
        value: cdktf.stringToHclTerraform(this._endPointServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_point_vip: {
        value: cdktf.stringToHclTerraform(this._endPointVip),
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
      security_groups_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupsIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
