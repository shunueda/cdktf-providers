// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcrVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable public domain dns. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment#enable_public_domain_dns TcrVpcAttachment#enable_public_domain_dns}
  */
  readonly enablePublicDomainDns?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable vpc domain dns. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment#enable_vpc_domain_dns TcrVpcAttachment#enable_vpc_domain_dns}
  */
  readonly enableVpcDomainDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment#id TcrVpcAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the TCR instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment#instance_id TcrVpcAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * ID of region. Conflict with region_name, can not be set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment#region_id TcrVpcAttachment#region_id}
  */
  readonly regionId?: number;
  /**
  * Name of region. Conflict with region_id, can not be set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment#region_name TcrVpcAttachment#region_name}
  */
  readonly regionName?: string;
  /**
  * ID of subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment#subnet_id TcrVpcAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * ID of VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment#vpc_id TcrVpcAttachment#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment tencentcloud_tcr_vpc_attachment}
*/
export class TcrVpcAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_vpc_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcrVpcAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcrVpcAttachment to import
  * @param importFromId The id of the existing TcrVpcAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcrVpcAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_vpc_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_vpc_attachment tencentcloud_tcr_vpc_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcrVpcAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: TcrVpcAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_vpc_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enablePublicDomainDns = config.enablePublicDomainDns;
    this._enableVpcDomainDns = config.enableVpcDomainDns;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_ip - computed: true, optional: false, required: false
  public get accessIp() {
    return this.getStringAttribute('access_ip');
  }

  // enable_public_domain_dns - computed: false, optional: true, required: false
  private _enablePublicDomainDns?: boolean | cdktf.IResolvable; 
  public get enablePublicDomainDns() {
    return this.getBooleanAttribute('enable_public_domain_dns');
  }
  public set enablePublicDomainDns(value: boolean | cdktf.IResolvable) {
    this._enablePublicDomainDns = value;
  }
  public resetEnablePublicDomainDns() {
    this._enablePublicDomainDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicDomainDnsInput() {
    return this._enablePublicDomainDns;
  }

  // enable_vpc_domain_dns - computed: false, optional: true, required: false
  private _enableVpcDomainDns?: boolean | cdktf.IResolvable; 
  public get enableVpcDomainDns() {
    return this.getBooleanAttribute('enable_vpc_domain_dns');
  }
  public set enableVpcDomainDns(value: boolean | cdktf.IResolvable) {
    this._enableVpcDomainDns = value;
  }
  public resetEnableVpcDomainDns() {
    this._enableVpcDomainDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVpcDomainDnsInput() {
    return this._enableVpcDomainDns;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
      enable_public_domain_dns: cdktf.booleanToTerraform(this._enablePublicDomainDns),
      enable_vpc_domain_dns: cdktf.booleanToTerraform(this._enableVpcDomainDns),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_public_domain_dns: {
        value: cdktf.booleanToHclTerraform(this._enablePublicDomainDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_vpc_domain_dns: {
        value: cdktf.booleanToHclTerraform(this._enableVpcDomainDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
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
