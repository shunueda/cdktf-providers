// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * This parameter represents the name of an AWS Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer#account_name1 AwsPeer#account_name1}
  */
  readonly accountName1: string;
  /**
  * This parameter represents the name of an AWS Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer#account_name2 AwsPeer#account_name2}
  */
  readonly accountName2: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer#id AwsPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of Route table IDs of VPC1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer#rtb_list1 AwsPeer#rtb_list1}
  */
  readonly rtbList1?: string[];
  /**
  * List of Route table IDs of VPC2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer#rtb_list2 AwsPeer#rtb_list2}
  */
  readonly rtbList2?: string[];
  /**
  * VPC-ID of AWS cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer#vpc_id1 AwsPeer#vpc_id1}
  */
  readonly vpcId1: string;
  /**
  * VPC-ID of AWS cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer#vpc_id2 AwsPeer#vpc_id2}
  */
  readonly vpcId2: string;
  /**
  * Region of AWS cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer#vpc_reg1 AwsPeer#vpc_reg1}
  */
  readonly vpcReg1: string;
  /**
  * Region of AWS cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer#vpc_reg2 AwsPeer#vpc_reg2}
  */
  readonly vpcReg2: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer aviatrix_aws_peer}
*/
export class AwsPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_aws_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsPeer to import
  * @param importFromId The id of the existing AwsPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_aws_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_peer aviatrix_aws_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsPeerConfig
  */
  public constructor(scope: Construct, id: string, config: AwsPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_aws_peer',
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
    this._accountName1 = config.accountName1;
    this._accountName2 = config.accountName2;
    this._id = config.id;
    this._rtbList1 = config.rtbList1;
    this._rtbList2 = config.rtbList2;
    this._vpcId1 = config.vpcId1;
    this._vpcId2 = config.vpcId2;
    this._vpcReg1 = config.vpcReg1;
    this._vpcReg2 = config.vpcReg2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name1 - computed: false, optional: false, required: true
  private _accountName1?: string; 
  public get accountName1() {
    return this.getStringAttribute('account_name1');
  }
  public set accountName1(value: string) {
    this._accountName1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountName1Input() {
    return this._accountName1;
  }

  // account_name2 - computed: false, optional: false, required: true
  private _accountName2?: string; 
  public get accountName2() {
    return this.getStringAttribute('account_name2');
  }
  public set accountName2(value: string) {
    this._accountName2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountName2Input() {
    return this._accountName2;
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

  // rtb_list1 - computed: true, optional: true, required: false
  private _rtbList1?: string[]; 
  public get rtbList1() {
    return this.getListAttribute('rtb_list1');
  }
  public set rtbList1(value: string[]) {
    this._rtbList1 = value;
  }
  public resetRtbList1() {
    this._rtbList1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtbList1Input() {
    return this._rtbList1;
  }

  // rtb_list2 - computed: true, optional: true, required: false
  private _rtbList2?: string[]; 
  public get rtbList2() {
    return this.getListAttribute('rtb_list2');
  }
  public set rtbList2(value: string[]) {
    this._rtbList2 = value;
  }
  public resetRtbList2() {
    this._rtbList2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtbList2Input() {
    return this._rtbList2;
  }

  // vpc_id1 - computed: false, optional: false, required: true
  private _vpcId1?: string; 
  public get vpcId1() {
    return this.getStringAttribute('vpc_id1');
  }
  public set vpcId1(value: string) {
    this._vpcId1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcId1Input() {
    return this._vpcId1;
  }

  // vpc_id2 - computed: false, optional: false, required: true
  private _vpcId2?: string; 
  public get vpcId2() {
    return this.getStringAttribute('vpc_id2');
  }
  public set vpcId2(value: string) {
    this._vpcId2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcId2Input() {
    return this._vpcId2;
  }

  // vpc_reg1 - computed: false, optional: false, required: true
  private _vpcReg1?: string; 
  public get vpcReg1() {
    return this.getStringAttribute('vpc_reg1');
  }
  public set vpcReg1(value: string) {
    this._vpcReg1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReg1Input() {
    return this._vpcReg1;
  }

  // vpc_reg2 - computed: false, optional: false, required: true
  private _vpcReg2?: string; 
  public get vpcReg2() {
    return this.getStringAttribute('vpc_reg2');
  }
  public set vpcReg2(value: string) {
    this._vpcReg2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReg2Input() {
    return this._vpcReg2;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name1: cdktf.stringToTerraform(this._accountName1),
      account_name2: cdktf.stringToTerraform(this._accountName2),
      id: cdktf.stringToTerraform(this._id),
      rtb_list1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rtbList1),
      rtb_list2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rtbList2),
      vpc_id1: cdktf.stringToTerraform(this._vpcId1),
      vpc_id2: cdktf.stringToTerraform(this._vpcId2),
      vpc_reg1: cdktf.stringToTerraform(this._vpcReg1),
      vpc_reg2: cdktf.stringToTerraform(this._vpcReg2),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name1: {
        value: cdktf.stringToHclTerraform(this._accountName1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name2: {
        value: cdktf.stringToHclTerraform(this._accountName2),
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
      rtb_list1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rtbList1),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rtb_list2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rtbList2),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_id1: {
        value: cdktf.stringToHclTerraform(this._vpcId1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id2: {
        value: cdktf.stringToHclTerraform(this._vpcId2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_reg1: {
        value: cdktf.stringToHclTerraform(this._vpcReg1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_reg2: {
        value: cdktf.stringToHclTerraform(this._vpcReg2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
