// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTgwConfig extends cdktf.TerraformMetaArguments {
  /**
  * This parameter represents the name of a Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw#account_name AwsTgw#account_name}
  */
  readonly accountName: string;
  /**
  * BGP Local ASN (Autonomous System Number), Integer between 1-4294967294.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw#aws_side_as_number AwsTgw#aws_side_as_number}
  */
  readonly awsSideAsNumber: string;
  /**
  * TGW CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw#cidrs AwsTgw#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * Type of cloud service provider, requires an integer value. Supported for AWS (1) and AWS GOV (256). Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw#cloud_type AwsTgw#cloud_type}
  */
  readonly cloudType?: number;
  /**
  * Enable Multicast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw#enable_multicast AwsTgw#enable_multicast}
  */
  readonly enableMulticast?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw#id AwsTgw#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inspection mode. Valid values: 'Domain-based' and 'Connection-based'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw#inspection_mode AwsTgw#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Region of cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw#region AwsTgw#region}
  */
  readonly region: string;
  /**
  * Name of the AWS TGW which is going to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw#tgw_name AwsTgw#tgw_name}
  */
  readonly tgwName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw aviatrix_aws_tgw}
*/
export class AwsTgw extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_aws_tgw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTgw resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTgw to import
  * @param importFromId The id of the existing AwsTgw that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTgw to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_aws_tgw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw aviatrix_aws_tgw} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTgwConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTgwConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_aws_tgw',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._awsSideAsNumber = config.awsSideAsNumber;
    this._cidrs = config.cidrs;
    this._cloudType = config.cloudType;
    this._enableMulticast = config.enableMulticast;
    this._id = config.id;
    this._inspectionMode = config.inspectionMode;
    this._region = config.region;
    this._tgwName = config.tgwName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // aws_side_as_number - computed: false, optional: false, required: true
  private _awsSideAsNumber?: string; 
  public get awsSideAsNumber() {
    return this.getStringAttribute('aws_side_as_number');
  }
  public set awsSideAsNumber(value: string) {
    this._awsSideAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSideAsNumberInput() {
    return this._awsSideAsNumber;
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: number; 
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }
  public set cloudType(value: number) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // enable_multicast - computed: false, optional: true, required: false
  private _enableMulticast?: boolean | cdktf.IResolvable; 
  public get enableMulticast() {
    return this.getBooleanAttribute('enable_multicast');
  }
  public set enableMulticast(value: boolean | cdktf.IResolvable) {
    this._enableMulticast = value;
  }
  public resetEnableMulticast() {
    this._enableMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMulticastInput() {
    return this._enableMulticast;
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

  // inspection_mode - computed: false, optional: true, required: false
  private _inspectionMode?: string; 
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
  public set inspectionMode(value: string) {
    this._inspectionMode = value;
  }
  public resetInspectionMode() {
    this._inspectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionModeInput() {
    return this._inspectionMode;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tgw_id - computed: true, optional: false, required: false
  public get tgwId() {
    return this.getStringAttribute('tgw_id');
  }

  // tgw_name - computed: false, optional: false, required: true
  private _tgwName?: string; 
  public get tgwName() {
    return this.getStringAttribute('tgw_name');
  }
  public set tgwName(value: string) {
    this._tgwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwNameInput() {
    return this._tgwName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      aws_side_as_number: cdktf.stringToTerraform(this._awsSideAsNumber),
      cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cidrs),
      cloud_type: cdktf.numberToTerraform(this._cloudType),
      enable_multicast: cdktf.booleanToTerraform(this._enableMulticast),
      id: cdktf.stringToTerraform(this._id),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      region: cdktf.stringToTerraform(this._region),
      tgw_name: cdktf.stringToTerraform(this._tgwName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_side_as_number: {
        value: cdktf.stringToHclTerraform(this._awsSideAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cloud_type: {
        value: cdktf.numberToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_multicast: {
        value: cdktf.booleanToHclTerraform(this._enableMulticast),
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
      inspection_mode: {
        value: cdktf.stringToHclTerraform(this._inspectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_name: {
        value: cdktf.stringToHclTerraform(this._tgwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
