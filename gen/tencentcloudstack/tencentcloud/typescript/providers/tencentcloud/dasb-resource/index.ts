// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DasbResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatic renewal. 1 is auto renew flag, 0 is not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#auto_renew_flag DasbResource#auto_renew_flag}
  */
  readonly autoRenewFlag: number;
  /**
  * Subnet segments that require service activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#cidr_block DasbResource#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Deploy region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#deploy_region DasbResource#deploy_region}
  */
  readonly deployRegion: string;
  /**
  * Deploy zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#deploy_zone DasbResource#deploy_zone}
  */
  readonly deployZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#id DasbResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of bandwidth expansion packets (4M), The set value is an integer multiple of 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#package_bandwidth DasbResource#package_bandwidth}
  */
  readonly packageBandwidth?: number;
  /**
  * Resource type.Value:standard/pro.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#resource_edition DasbResource#resource_edition}
  */
  readonly resourceEdition: string;
  /**
  * Number of resource nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#resource_node DasbResource#resource_node}
  */
  readonly resourceNode: number;
  /**
  * Deploy resource subnetId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#subnet_id DasbResource#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Billing time. This field is mandatory, with a minimum value of 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#time_span DasbResource#time_span}
  */
  readonly timeSpan?: number;
  /**
  * Billing cycle, only support m: month. This field is mandatory, fill in m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#time_unit DasbResource#time_unit}
  */
  readonly timeUnit?: string;
  /**
  * The network segment corresponding to the VPC that requires service activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#vpc_cidr_block DasbResource#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * Deploy resource vpcId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#vpc_id DasbResource#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource tencentcloud_dasb_resource}
*/
export class DasbResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dasb_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DasbResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DasbResource to import
  * @param importFromId The id of the existing DasbResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DasbResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dasb_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dasb_resource tencentcloud_dasb_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DasbResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DasbResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dasb_resource',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewFlag = config.autoRenewFlag;
    this._cidrBlock = config.cidrBlock;
    this._deployRegion = config.deployRegion;
    this._deployZone = config.deployZone;
    this._id = config.id;
    this._packageBandwidth = config.packageBandwidth;
    this._resourceEdition = config.resourceEdition;
    this._resourceNode = config.resourceNode;
    this._subnetId = config.subnetId;
    this._timeSpan = config.timeSpan;
    this._timeUnit = config.timeUnit;
    this._vpcCidrBlock = config.vpcCidrBlock;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_flag - computed: false, optional: false, required: true
  private _autoRenewFlag?: number; 
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: number) {
    this._autoRenewFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // deploy_region - computed: false, optional: false, required: true
  private _deployRegion?: string; 
  public get deployRegion() {
    return this.getStringAttribute('deploy_region');
  }
  public set deployRegion(value: string) {
    this._deployRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployRegionInput() {
    return this._deployRegion;
  }

  // deploy_zone - computed: false, optional: false, required: true
  private _deployZone?: string; 
  public get deployZone() {
    return this.getStringAttribute('deploy_zone');
  }
  public set deployZone(value: string) {
    this._deployZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployZoneInput() {
    return this._deployZone;
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

  // package_bandwidth - computed: true, optional: true, required: false
  private _packageBandwidth?: number; 
  public get packageBandwidth() {
    return this.getNumberAttribute('package_bandwidth');
  }
  public set packageBandwidth(value: number) {
    this._packageBandwidth = value;
  }
  public resetPackageBandwidth() {
    this._packageBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageBandwidthInput() {
    return this._packageBandwidth;
  }

  // resource_edition - computed: false, optional: false, required: true
  private _resourceEdition?: string; 
  public get resourceEdition() {
    return this.getStringAttribute('resource_edition');
  }
  public set resourceEdition(value: string) {
    this._resourceEdition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceEditionInput() {
    return this._resourceEdition;
  }

  // resource_node - computed: false, optional: false, required: true
  private _resourceNode?: number; 
  public get resourceNode() {
    return this.getNumberAttribute('resource_node');
  }
  public set resourceNode(value: number) {
    this._resourceNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNodeInput() {
    return this._resourceNode;
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

  // time_span - computed: false, optional: true, required: false
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  public resetTimeSpan() {
    this._timeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
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
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      deploy_region: cdktf.stringToTerraform(this._deployRegion),
      deploy_zone: cdktf.stringToTerraform(this._deployZone),
      id: cdktf.stringToTerraform(this._id),
      package_bandwidth: cdktf.numberToTerraform(this._packageBandwidth),
      resource_edition: cdktf.stringToTerraform(this._resourceEdition),
      resource_node: cdktf.numberToTerraform(this._resourceNode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
      vpc_cidr_block: cdktf.stringToTerraform(this._vpcCidrBlock),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_flag: {
        value: cdktf.numberToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_region: {
        value: cdktf.stringToHclTerraform(this._deployRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_zone: {
        value: cdktf.stringToHclTerraform(this._deployZone),
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
      package_bandwidth: {
        value: cdktf.numberToHclTerraform(this._packageBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_edition: {
        value: cdktf.stringToHclTerraform(this._resourceEdition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_node: {
        value: cdktf.numberToHclTerraform(this._resourceNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_unit: {
        value: cdktf.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_cidr_block: {
        value: cdktf.stringToHclTerraform(this._vpcCidrBlock),
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
