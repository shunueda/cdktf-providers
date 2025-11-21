// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_nat_ip_cidr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcNatIpCidrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_nat_ip_cidr#dry_run VpcNatIpCidr#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_nat_ip_cidr#id VpcNatIpCidr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_nat_ip_cidr#nat_gateway_id VpcNatIpCidr#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_nat_ip_cidr#nat_ip_cidr VpcNatIpCidr#nat_ip_cidr}
  */
  readonly natIpCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_nat_ip_cidr#nat_ip_cidr_description VpcNatIpCidr#nat_ip_cidr_description}
  */
  readonly natIpCidrDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_nat_ip_cidr#nat_ip_cidr_name VpcNatIpCidr#nat_ip_cidr_name}
  */
  readonly natIpCidrName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_nat_ip_cidr alicloud_vpc_nat_ip_cidr}
*/
export class VpcNatIpCidr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_nat_ip_cidr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcNatIpCidr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcNatIpCidr to import
  * @param importFromId The id of the existing VpcNatIpCidr that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_nat_ip_cidr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcNatIpCidr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_nat_ip_cidr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_nat_ip_cidr alicloud_vpc_nat_ip_cidr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcNatIpCidrConfig
  */
  public constructor(scope: Construct, id: string, config: VpcNatIpCidrConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_nat_ip_cidr',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._natGatewayId = config.natGatewayId;
    this._natIpCidr = config.natIpCidr;
    this._natIpCidrDescription = config.natIpCidrDescription;
    this._natIpCidrName = config.natIpCidrName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dry_run - computed: true, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // nat_ip_cidr - computed: false, optional: true, required: false
  private _natIpCidr?: string; 
  public get natIpCidr() {
    return this.getStringAttribute('nat_ip_cidr');
  }
  public set natIpCidr(value: string) {
    this._natIpCidr = value;
  }
  public resetNatIpCidr() {
    this._natIpCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpCidrInput() {
    return this._natIpCidr;
  }

  // nat_ip_cidr_description - computed: false, optional: true, required: false
  private _natIpCidrDescription?: string; 
  public get natIpCidrDescription() {
    return this.getStringAttribute('nat_ip_cidr_description');
  }
  public set natIpCidrDescription(value: string) {
    this._natIpCidrDescription = value;
  }
  public resetNatIpCidrDescription() {
    this._natIpCidrDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpCidrDescriptionInput() {
    return this._natIpCidrDescription;
  }

  // nat_ip_cidr_name - computed: false, optional: true, required: false
  private _natIpCidrName?: string; 
  public get natIpCidrName() {
    return this.getStringAttribute('nat_ip_cidr_name');
  }
  public set natIpCidrName(value: string) {
    this._natIpCidrName = value;
  }
  public resetNatIpCidrName() {
    this._natIpCidrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpCidrNameInput() {
    return this._natIpCidrName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      nat_ip_cidr: cdktf.stringToTerraform(this._natIpCidr),
      nat_ip_cidr_description: cdktf.stringToTerraform(this._natIpCidrDescription),
      nat_ip_cidr_name: cdktf.stringToTerraform(this._natIpCidrName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
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
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip_cidr: {
        value: cdktf.stringToHclTerraform(this._natIpCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip_cidr_description: {
        value: cdktf.stringToHclTerraform(this._natIpCidrDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip_cidr_name: {
        value: cdktf.stringToHclTerraform(this._natIpCidrName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
