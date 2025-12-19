// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BhResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto-renewal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#auto_renew_flag BhResource#auto_renew_flag}
  */
  readonly autoRenewFlag: number;
  /**
  * CIDR block of the bastion host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#cidr_block BhResource#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * 0 - Disable client access to the bastion host; 1 - Enable client access to the bastion host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#client_access BhResource#client_access}
  */
  readonly clientAccess?: number;
  /**
  * Deployment region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#deploy_region BhResource#deploy_region}
  */
  readonly deployRegion: string;
  /**
  * Deployment zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#deploy_zone BhResource#deploy_zone}
  */
  readonly deployZone: string;
  /**
  * 0 - Disable public network access to the bastion host; 1 - Enable public network access to the bastion host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#external_access BhResource#external_access}
  */
  readonly externalAccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#id BhResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 0 - Disable internal network access bastion host; 1 - Enable internal network access bastion host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#intranet_access BhResource#intranet_access}
  */
  readonly intranetAccess?: number;
  /**
  * Billing mode, 1 for prepaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#pay_mode BhResource#pay_mode}
  */
  readonly payMode: number;
  /**
  * Resource type. Values: standard/pro.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#resource_edition BhResource#resource_edition}
  */
  readonly resourceEdition: string;
  /**
  * Number of resource nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#resource_node BhResource#resource_node}
  */
  readonly resourceNode: number;
  /**
  * Whether to share CLB, 0: not shared, 1: shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#share_clb BhResource#share_clb}
  */
  readonly shareClb?: number;
  /**
  * Subnet ID for deploying the bastion host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#subnet_id BhResource#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Billing duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#time_span BhResource#time_span}
  */
  readonly timeSpan: number;
  /**
  * Billing cycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#time_unit BhResource#time_unit}
  */
  readonly timeUnit: string;
  /**
  * 0 for non-trial version, 1 for trial version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#trial BhResource#trial}
  */
  readonly trial?: number;
  /**
  * The network segment corresponding to the VPC that needs to activate the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#vpc_cidr_block BhResource#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC ID for deploying the bastion host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#vpc_id BhResource#vpc_id}
  */
  readonly vpcId: string;
  /**
  * 0 - Disable web access bastion host; 1 - Enable web access bastion host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#web_access BhResource#web_access}
  */
  readonly webAccess?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource tencentcloud_bh_resource}
*/
export class BhResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bh_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BhResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BhResource to import
  * @param importFromId The id of the existing BhResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BhResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bh_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/bh_resource tencentcloud_bh_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BhResourceConfig
  */
  public constructor(scope: Construct, id: string, config: BhResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bh_resource',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._clientAccess = config.clientAccess;
    this._deployRegion = config.deployRegion;
    this._deployZone = config.deployZone;
    this._externalAccess = config.externalAccess;
    this._id = config.id;
    this._intranetAccess = config.intranetAccess;
    this._payMode = config.payMode;
    this._resourceEdition = config.resourceEdition;
    this._resourceNode = config.resourceNode;
    this._shareClb = config.shareClb;
    this._subnetId = config.subnetId;
    this._timeSpan = config.timeSpan;
    this._timeUnit = config.timeUnit;
    this._trial = config.trial;
    this._vpcCidrBlock = config.vpcCidrBlock;
    this._vpcId = config.vpcId;
    this._webAccess = config.webAccess;
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

  // client_access - computed: true, optional: true, required: false
  private _clientAccess?: number; 
  public get clientAccess() {
    return this.getNumberAttribute('client_access');
  }
  public set clientAccess(value: number) {
    this._clientAccess = value;
  }
  public resetClientAccess() {
    this._clientAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAccessInput() {
    return this._clientAccess;
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

  // external_access - computed: true, optional: true, required: false
  private _externalAccess?: number; 
  public get externalAccess() {
    return this.getNumberAttribute('external_access');
  }
  public set externalAccess(value: number) {
    this._externalAccess = value;
  }
  public resetExternalAccess() {
    this._externalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccessInput() {
    return this._externalAccess;
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

  // intranet_access - computed: true, optional: true, required: false
  private _intranetAccess?: number; 
  public get intranetAccess() {
    return this.getNumberAttribute('intranet_access');
  }
  public set intranetAccess(value: number) {
    this._intranetAccess = value;
  }
  public resetIntranetAccess() {
    this._intranetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetAccessInput() {
    return this._intranetAccess;
  }

  // pay_mode - computed: false, optional: false, required: true
  private _payMode?: number; 
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }
  public set payMode(value: number) {
    this._payMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
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

  // share_clb - computed: true, optional: true, required: false
  private _shareClb?: number; 
  public get shareClb() {
    return this.getNumberAttribute('share_clb');
  }
  public set shareClb(value: number) {
    this._shareClb = value;
  }
  public resetShareClb() {
    this._shareClb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareClbInput() {
    return this._shareClb;
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

  // time_span - computed: false, optional: false, required: true
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // trial - computed: true, optional: true, required: false
  private _trial?: number; 
  public get trial() {
    return this.getNumberAttribute('trial');
  }
  public set trial(value: number) {
    this._trial = value;
  }
  public resetTrial() {
    this._trial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialInput() {
    return this._trial;
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

  // web_access - computed: true, optional: true, required: false
  private _webAccess?: number; 
  public get webAccess() {
    return this.getNumberAttribute('web_access');
  }
  public set webAccess(value: number) {
    this._webAccess = value;
  }
  public resetWebAccess() {
    this._webAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAccessInput() {
    return this._webAccess;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      client_access: cdktf.numberToTerraform(this._clientAccess),
      deploy_region: cdktf.stringToTerraform(this._deployRegion),
      deploy_zone: cdktf.stringToTerraform(this._deployZone),
      external_access: cdktf.numberToTerraform(this._externalAccess),
      id: cdktf.stringToTerraform(this._id),
      intranet_access: cdktf.numberToTerraform(this._intranetAccess),
      pay_mode: cdktf.numberToTerraform(this._payMode),
      resource_edition: cdktf.stringToTerraform(this._resourceEdition),
      resource_node: cdktf.numberToTerraform(this._resourceNode),
      share_clb: cdktf.numberToTerraform(this._shareClb),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
      trial: cdktf.numberToTerraform(this._trial),
      vpc_cidr_block: cdktf.stringToTerraform(this._vpcCidrBlock),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      web_access: cdktf.numberToTerraform(this._webAccess),
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
      client_access: {
        value: cdktf.numberToHclTerraform(this._clientAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      external_access: {
        value: cdktf.numberToHclTerraform(this._externalAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intranet_access: {
        value: cdktf.numberToHclTerraform(this._intranetAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pay_mode: {
        value: cdktf.numberToHclTerraform(this._payMode),
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
      share_clb: {
        value: cdktf.numberToHclTerraform(this._shareClb),
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
      trial: {
        value: cdktf.numberToHclTerraform(this._trial),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      web_access: {
        value: cdktf.numberToHclTerraform(this._webAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
