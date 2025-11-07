// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VgwConnConfig extends cdktf.TerraformMetaArguments {
  /**
  * BGP local ASN (Autonomous System Number). Integer between 1-4294967294.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#bgp_local_as_num VgwConn#bgp_local_as_num}
  */
  readonly bgpLocalAsNum: string;
  /**
  * Account of AWS's VGW that is used for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#bgp_vgw_account VgwConn#bgp_vgw_account}
  */
  readonly bgpVgwAccount: string;
  /**
  * Id of AWS's VGW that is used for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#bgp_vgw_id VgwConn#bgp_vgw_id}
  */
  readonly bgpVgwId: string;
  /**
  * Region of AWS's VGW that is used for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#bgp_vgw_region VgwConn#bgp_vgw_region}
  */
  readonly bgpVgwRegion: string;
  /**
  * The name of the VGW connection which is going to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#conn_name VgwConn#conn_name}
  */
  readonly connName: string;
  /**
  * Enable Event Triggered HA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#enable_event_triggered_ha VgwConn#enable_event_triggered_ha}
  */
  readonly enableEventTriggeredHa?: boolean | cdktf.IResolvable;
  /**
  * Enable learned CIDR approval for the connection. Requires the transit_gateway's 'learned_cidrs_approval_mode' attribute be set to 'connection'. Valid values: true, false. Default value: false. Available as of provider version R2.18+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#enable_learned_cidrs_approval VgwConn#enable_learned_cidrs_approval}
  */
  readonly enableLearnedCidrsApproval?: boolean | cdktf.IResolvable;
  /**
  * Name of the Transit Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#gw_name VgwConn#gw_name}
  */
  readonly gwName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#id VgwConn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure manual BGP advertised CIDRs for this connection. Available as of provider version R2.18+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#manual_bgp_advertised_cidrs VgwConn#manual_bgp_advertised_cidrs}
  */
  readonly manualBgpAdvertisedCidrs?: string[];
  /**
  * Connection AS Path Prepend customized by specifying AS PATH for a BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#prepend_as_path VgwConn#prepend_as_path}
  */
  readonly prependAsPath?: string[];
  /**
  * VPC-ID where the Transit Gateway is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#vpc_id VgwConn#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn aviatrix_vgw_conn}
*/
export class VgwConn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_vgw_conn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VgwConn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VgwConn to import
  * @param importFromId The id of the existing VgwConn that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VgwConn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_vgw_conn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vgw_conn aviatrix_vgw_conn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VgwConnConfig
  */
  public constructor(scope: Construct, id: string, config: VgwConnConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_vgw_conn',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpLocalAsNum = config.bgpLocalAsNum;
    this._bgpVgwAccount = config.bgpVgwAccount;
    this._bgpVgwId = config.bgpVgwId;
    this._bgpVgwRegion = config.bgpVgwRegion;
    this._connName = config.connName;
    this._enableEventTriggeredHa = config.enableEventTriggeredHa;
    this._enableLearnedCidrsApproval = config.enableLearnedCidrsApproval;
    this._gwName = config.gwName;
    this._id = config.id;
    this._manualBgpAdvertisedCidrs = config.manualBgpAdvertisedCidrs;
    this._prependAsPath = config.prependAsPath;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_local_as_num - computed: false, optional: false, required: true
  private _bgpLocalAsNum?: string; 
  public get bgpLocalAsNum() {
    return this.getStringAttribute('bgp_local_as_num');
  }
  public set bgpLocalAsNum(value: string) {
    this._bgpLocalAsNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLocalAsNumInput() {
    return this._bgpLocalAsNum;
  }

  // bgp_vgw_account - computed: false, optional: false, required: true
  private _bgpVgwAccount?: string; 
  public get bgpVgwAccount() {
    return this.getStringAttribute('bgp_vgw_account');
  }
  public set bgpVgwAccount(value: string) {
    this._bgpVgwAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpVgwAccountInput() {
    return this._bgpVgwAccount;
  }

  // bgp_vgw_id - computed: false, optional: false, required: true
  private _bgpVgwId?: string; 
  public get bgpVgwId() {
    return this.getStringAttribute('bgp_vgw_id');
  }
  public set bgpVgwId(value: string) {
    this._bgpVgwId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpVgwIdInput() {
    return this._bgpVgwId;
  }

  // bgp_vgw_region - computed: false, optional: false, required: true
  private _bgpVgwRegion?: string; 
  public get bgpVgwRegion() {
    return this.getStringAttribute('bgp_vgw_region');
  }
  public set bgpVgwRegion(value: string) {
    this._bgpVgwRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpVgwRegionInput() {
    return this._bgpVgwRegion;
  }

  // conn_name - computed: false, optional: false, required: true
  private _connName?: string; 
  public get connName() {
    return this.getStringAttribute('conn_name');
  }
  public set connName(value: string) {
    this._connName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connNameInput() {
    return this._connName;
  }

  // enable_event_triggered_ha - computed: false, optional: true, required: false
  private _enableEventTriggeredHa?: boolean | cdktf.IResolvable; 
  public get enableEventTriggeredHa() {
    return this.getBooleanAttribute('enable_event_triggered_ha');
  }
  public set enableEventTriggeredHa(value: boolean | cdktf.IResolvable) {
    this._enableEventTriggeredHa = value;
  }
  public resetEnableEventTriggeredHa() {
    this._enableEventTriggeredHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventTriggeredHaInput() {
    return this._enableEventTriggeredHa;
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

  // gw_name - computed: false, optional: false, required: true
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
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

  // manual_bgp_advertised_cidrs - computed: false, optional: true, required: false
  private _manualBgpAdvertisedCidrs?: string[]; 
  public get manualBgpAdvertisedCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('manual_bgp_advertised_cidrs'));
  }
  public set manualBgpAdvertisedCidrs(value: string[]) {
    this._manualBgpAdvertisedCidrs = value;
  }
  public resetManualBgpAdvertisedCidrs() {
    this._manualBgpAdvertisedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualBgpAdvertisedCidrsInput() {
    return this._manualBgpAdvertisedCidrs;
  }

  // prepend_as_path - computed: false, optional: true, required: false
  private _prependAsPath?: string[]; 
  public get prependAsPath() {
    return this.getListAttribute('prepend_as_path');
  }
  public set prependAsPath(value: string[]) {
    this._prependAsPath = value;
  }
  public resetPrependAsPath() {
    this._prependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependAsPathInput() {
    return this._prependAsPath;
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
      bgp_local_as_num: cdktf.stringToTerraform(this._bgpLocalAsNum),
      bgp_vgw_account: cdktf.stringToTerraform(this._bgpVgwAccount),
      bgp_vgw_id: cdktf.stringToTerraform(this._bgpVgwId),
      bgp_vgw_region: cdktf.stringToTerraform(this._bgpVgwRegion),
      conn_name: cdktf.stringToTerraform(this._connName),
      enable_event_triggered_ha: cdktf.booleanToTerraform(this._enableEventTriggeredHa),
      enable_learned_cidrs_approval: cdktf.booleanToTerraform(this._enableLearnedCidrsApproval),
      gw_name: cdktf.stringToTerraform(this._gwName),
      id: cdktf.stringToTerraform(this._id),
      manual_bgp_advertised_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manualBgpAdvertisedCidrs),
      prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prependAsPath),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_local_as_num: {
        value: cdktf.stringToHclTerraform(this._bgpLocalAsNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_vgw_account: {
        value: cdktf.stringToHclTerraform(this._bgpVgwAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_vgw_id: {
        value: cdktf.stringToHclTerraform(this._bgpVgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_vgw_region: {
        value: cdktf.stringToHclTerraform(this._bgpVgwRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_name: {
        value: cdktf.stringToHclTerraform(this._connName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_event_triggered_ha: {
        value: cdktf.booleanToHclTerraform(this._enableEventTriggeredHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_learned_cidrs_approval: {
        value: cdktf.booleanToHclTerraform(this._enableLearnedCidrsApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
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
      manual_bgp_advertised_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._manualBgpAdvertisedCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prependAsPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
