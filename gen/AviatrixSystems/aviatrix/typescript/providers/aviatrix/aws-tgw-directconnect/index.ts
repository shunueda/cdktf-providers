// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTgwDirectconnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Public IP address. Example: '40.0.0.0'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect#allowed_prefix AwsTgwDirectconnect#allowed_prefix}
  */
  readonly allowedPrefix: string;
  /**
  * This parameter represents the name of an Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect#directconnect_account_name AwsTgwDirectconnect#directconnect_account_name}
  */
  readonly directconnectAccountName: string;
  /**
  * This parameter represents the name of a Direct Connect Gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect#dx_gateway_id AwsTgwDirectconnect#dx_gateway_id}
  */
  readonly dxGatewayId: string;
  /**
  * Switch to enable/disable encrypted transit approval for direct connection. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect#enable_learned_cidrs_approval AwsTgwDirectconnect#enable_learned_cidrs_approval}
  */
  readonly enableLearnedCidrsApproval?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect#id AwsTgwDirectconnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of an Aviatrix network domain, to which the direct connect gateway will be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect#network_domain_name AwsTgwDirectconnect#network_domain_name}
  */
  readonly networkDomainName: string;
  /**
  * This parameter represents the name of an AWS TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect#tgw_name AwsTgwDirectconnect#tgw_name}
  */
  readonly tgwName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect aviatrix_aws_tgw_directconnect}
*/
export class AwsTgwDirectconnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_aws_tgw_directconnect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTgwDirectconnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTgwDirectconnect to import
  * @param importFromId The id of the existing AwsTgwDirectconnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTgwDirectconnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_aws_tgw_directconnect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_directconnect aviatrix_aws_tgw_directconnect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTgwDirectconnectConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTgwDirectconnectConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_aws_tgw_directconnect',
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
    this._allowedPrefix = config.allowedPrefix;
    this._directconnectAccountName = config.directconnectAccountName;
    this._dxGatewayId = config.dxGatewayId;
    this._enableLearnedCidrsApproval = config.enableLearnedCidrsApproval;
    this._id = config.id;
    this._networkDomainName = config.networkDomainName;
    this._tgwName = config.tgwName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_prefix - computed: false, optional: false, required: true
  private _allowedPrefix?: string; 
  public get allowedPrefix() {
    return this.getStringAttribute('allowed_prefix');
  }
  public set allowedPrefix(value: string) {
    this._allowedPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrefixInput() {
    return this._allowedPrefix;
  }

  // directconnect_account_name - computed: false, optional: false, required: true
  private _directconnectAccountName?: string; 
  public get directconnectAccountName() {
    return this.getStringAttribute('directconnect_account_name');
  }
  public set directconnectAccountName(value: string) {
    this._directconnectAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directconnectAccountNameInput() {
    return this._directconnectAccountName;
  }

  // dx_gateway_id - computed: false, optional: false, required: true
  private _dxGatewayId?: string; 
  public get dxGatewayId() {
    return this.getStringAttribute('dx_gateway_id');
  }
  public set dxGatewayId(value: string) {
    this._dxGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayIdInput() {
    return this._dxGatewayId;
  }

  // enable_learned_cidrs_approval - computed: false, optional: true, required: false
  private _enableLearnedCidrsApproval?: boolean | cdktf.IResolvable; 
  public get enableLearnedCidrsApproval() {
    return this.getBooleanAttribute('enable_learned_cidrs_approval');
  }
  public set enableLearnedCidrsApproval(value: boolean | cdktf.IResolvable) {
    this._enableLearnedCidrsApproval = value;
  }
  public resetEnableLearnedCidrsApproval() {
    this._enableLearnedCidrsApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnedCidrsApprovalInput() {
    return this._enableLearnedCidrsApproval;
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

  // network_domain_name - computed: false, optional: false, required: true
  private _networkDomainName?: string; 
  public get networkDomainName() {
    return this.getStringAttribute('network_domain_name');
  }
  public set networkDomainName(value: string) {
    this._networkDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDomainNameInput() {
    return this._networkDomainName;
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
      allowed_prefix: cdktf.stringToTerraform(this._allowedPrefix),
      directconnect_account_name: cdktf.stringToTerraform(this._directconnectAccountName),
      dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
      enable_learned_cidrs_approval: cdktf.booleanToTerraform(this._enableLearnedCidrsApproval),
      id: cdktf.stringToTerraform(this._id),
      network_domain_name: cdktf.stringToTerraform(this._networkDomainName),
      tgw_name: cdktf.stringToTerraform(this._tgwName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_prefix: {
        value: cdktf.stringToHclTerraform(this._allowedPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directconnect_account_name: {
        value: cdktf.stringToHclTerraform(this._directconnectAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dx_gateway_id: {
        value: cdktf.stringToHclTerraform(this._dxGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_learned_cidrs_approval: {
        value: cdktf.booleanToHclTerraform(this._enableLearnedCidrsApproval),
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
      network_domain_name: {
        value: cdktf.stringToHclTerraform(this._networkDomainName),
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
