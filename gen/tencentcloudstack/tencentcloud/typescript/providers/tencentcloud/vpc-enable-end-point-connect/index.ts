// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_enable_end_point_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEnableEndPointConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to accept endpoint connection requests. `true`: Accept automatically. `false`: Do not automatically accept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_enable_end_point_connect#accept_flag VpcEnableEndPointConnect#accept_flag}
  */
  readonly acceptFlag: boolean | cdktf.IResolvable;
  /**
  * Endpoint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_enable_end_point_connect#end_point_id VpcEnableEndPointConnect#end_point_id}
  */
  readonly endPointId: string[];
  /**
  * Endpoint service ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_enable_end_point_connect#end_point_service_id VpcEnableEndPointConnect#end_point_service_id}
  */
  readonly endPointServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_enable_end_point_connect#id VpcEnableEndPointConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_enable_end_point_connect tencentcloud_vpc_enable_end_point_connect}
*/
export class VpcEnableEndPointConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_enable_end_point_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcEnableEndPointConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcEnableEndPointConnect to import
  * @param importFromId The id of the existing VpcEnableEndPointConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_enable_end_point_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcEnableEndPointConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_enable_end_point_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_enable_end_point_connect tencentcloud_vpc_enable_end_point_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEnableEndPointConnectConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEnableEndPointConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_enable_end_point_connect',
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
    this._acceptFlag = config.acceptFlag;
    this._endPointId = config.endPointId;
    this._endPointServiceId = config.endPointServiceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_flag - computed: false, optional: false, required: true
  private _acceptFlag?: boolean | cdktf.IResolvable; 
  public get acceptFlag() {
    return this.getBooleanAttribute('accept_flag');
  }
  public set acceptFlag(value: boolean | cdktf.IResolvable) {
    this._acceptFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptFlagInput() {
    return this._acceptFlag;
  }

  // end_point_id - computed: false, optional: false, required: true
  private _endPointId?: string[]; 
  public get endPointId() {
    return cdktf.Fn.tolist(this.getListAttribute('end_point_id'));
  }
  public set endPointId(value: string[]) {
    this._endPointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointIdInput() {
    return this._endPointId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_flag: cdktf.booleanToTerraform(this._acceptFlag),
      end_point_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endPointId),
      end_point_service_id: cdktf.stringToTerraform(this._endPointServiceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_flag: {
        value: cdktf.booleanToHclTerraform(this._acceptFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_point_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endPointId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      end_point_service_id: {
        value: cdktf.stringToHclTerraform(this._endPointServiceId),
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
