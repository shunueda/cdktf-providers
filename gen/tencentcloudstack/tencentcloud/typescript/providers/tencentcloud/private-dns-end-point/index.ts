// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/private_dns_end_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsEndPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Endpoint name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/private_dns_end_point#end_point_name PrivateDnsEndPoint#end_point_name}
  */
  readonly endPointName: string;
  /**
  * Endpoint region, which should be consistent with the region of the endpoint service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/private_dns_end_point#end_point_region PrivateDnsEndPoint#end_point_region}
  */
  readonly endPointRegion: string;
  /**
  * Endpoint service ID (namely, VPC endpoint service ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/private_dns_end_point#end_point_service_id PrivateDnsEndPoint#end_point_service_id}
  */
  readonly endPointServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/private_dns_end_point#id PrivateDnsEndPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of endpoint IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/private_dns_end_point#ip_num PrivateDnsEndPoint#ip_num}
  */
  readonly ipNum?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/private_dns_end_point tencentcloud_private_dns_end_point}
*/
export class PrivateDnsEndPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_private_dns_end_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateDnsEndPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateDnsEndPoint to import
  * @param importFromId The id of the existing PrivateDnsEndPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/private_dns_end_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateDnsEndPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_private_dns_end_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/private_dns_end_point tencentcloud_private_dns_end_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateDnsEndPointConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateDnsEndPointConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_private_dns_end_point',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._endPointRegion = config.endPointRegion;
    this._endPointServiceId = config.endPointServiceId;
    this._id = config.id;
    this._ipNum = config.ipNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // end_point_region - computed: false, optional: false, required: true
  private _endPointRegion?: string; 
  public get endPointRegion() {
    return this.getStringAttribute('end_point_region');
  }
  public set endPointRegion(value: string) {
    this._endPointRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointRegionInput() {
    return this._endPointRegion;
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

  // end_point_vip_set - computed: true, optional: false, required: false
  public get endPointVipSet() {
    return cdktf.Fn.tolist(this.getListAttribute('end_point_vip_set'));
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

  // ip_num - computed: true, optional: true, required: false
  private _ipNum?: number; 
  public get ipNum() {
    return this.getNumberAttribute('ip_num');
  }
  public set ipNum(value: number) {
    this._ipNum = value;
  }
  public resetIpNum() {
    this._ipNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNumInput() {
    return this._ipNum;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_point_name: cdktf.stringToTerraform(this._endPointName),
      end_point_region: cdktf.stringToTerraform(this._endPointRegion),
      end_point_service_id: cdktf.stringToTerraform(this._endPointServiceId),
      id: cdktf.stringToTerraform(this._id),
      ip_num: cdktf.numberToTerraform(this._ipNum),
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
      end_point_region: {
        value: cdktf.stringToHclTerraform(this._endPointRegion),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_num: {
        value: cdktf.numberToHclTerraform(this._ipNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
