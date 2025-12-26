// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_end_point_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndPointServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to automatically accept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_end_point_service#auto_accept_flag VpcEndPointService#auto_accept_flag}
  */
  readonly autoAcceptFlag: boolean | cdktf.IResolvable;
  /**
  * Name of end point service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_end_point_service#end_point_service_name VpcEndPointService#end_point_service_name}
  */
  readonly endPointServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_end_point_service#id VpcEndPointService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id of service instance, like lb-xxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_end_point_service#service_instance_id VpcEndPointService#service_instance_id}
  */
  readonly serviceInstanceId: string;
  /**
  * Type of service instance, like `CLB`, `CDB`, `CRS`, `GWLB`. default is `CLB`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_end_point_service#service_type VpcEndPointService#service_type}
  */
  readonly serviceType?: string;
  /**
  * ID of vpc instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_end_point_service#vpc_id VpcEndPointService#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_end_point_service tencentcloud_vpc_end_point_service}
*/
export class VpcEndPointService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_end_point_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcEndPointService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcEndPointService to import
  * @param importFromId The id of the existing VpcEndPointService that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_end_point_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcEndPointService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_end_point_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_end_point_service tencentcloud_vpc_end_point_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndPointServiceConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEndPointServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_end_point_service',
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
    this._autoAcceptFlag = config.autoAcceptFlag;
    this._endPointServiceName = config.endPointServiceName;
    this._id = config.id;
    this._serviceInstanceId = config.serviceInstanceId;
    this._serviceType = config.serviceType;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_accept_flag - computed: false, optional: false, required: true
  private _autoAcceptFlag?: boolean | cdktf.IResolvable; 
  public get autoAcceptFlag() {
    return this.getBooleanAttribute('auto_accept_flag');
  }
  public set autoAcceptFlag(value: boolean | cdktf.IResolvable) {
    this._autoAcceptFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptFlagInput() {
    return this._autoAcceptFlag;
  }

  // cdc_id - computed: true, optional: false, required: false
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // end_point_count - computed: true, optional: false, required: false
  public get endPointCount() {
    return this.getNumberAttribute('end_point_count');
  }

  // end_point_service_name - computed: false, optional: false, required: true
  private _endPointServiceName?: string; 
  public get endPointServiceName() {
    return this.getStringAttribute('end_point_service_name');
  }
  public set endPointServiceName(value: string) {
    this._endPointServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceNameInput() {
    return this._endPointServiceName;
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

  // service_instance_id - computed: false, optional: false, required: true
  private _serviceInstanceId?: string; 
  public get serviceInstanceId() {
    return this.getStringAttribute('service_instance_id');
  }
  public set serviceInstanceId(value: string) {
    this._serviceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceIdInput() {
    return this._serviceInstanceId;
  }

  // service_owner - computed: true, optional: false, required: false
  public get serviceOwner() {
    return this.getStringAttribute('service_owner');
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
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
      auto_accept_flag: cdktf.booleanToTerraform(this._autoAcceptFlag),
      end_point_service_name: cdktf.stringToTerraform(this._endPointServiceName),
      id: cdktf.stringToTerraform(this._id),
      service_instance_id: cdktf.stringToTerraform(this._serviceInstanceId),
      service_type: cdktf.stringToTerraform(this._serviceType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_accept_flag: {
        value: cdktf.booleanToHclTerraform(this._autoAcceptFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_point_service_name: {
        value: cdktf.stringToHclTerraform(this._endPointServiceName),
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
      service_instance_id: {
        value: cdktf.stringToHclTerraform(this._serviceInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
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
