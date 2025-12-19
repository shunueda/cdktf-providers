// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#id SystemPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#ifpair_eth_end SystemPath#ifpair_eth_end}
  */
  readonly ifpairEthEnd?: number;
  /**
  * Ethernet port (Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#ifpair_eth_start SystemPath#ifpair_eth_start}
  */
  readonly ifpairEthStart?: number;
  /**
  * Trunk Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#ifpair_trunk_end SystemPath#ifpair_trunk_end}
  */
  readonly ifpairTrunkEnd?: number;
  /**
  * Trunk groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#ifpair_trunk_start SystemPath#ifpair_trunk_start}
  */
  readonly ifpairTrunkStart?: number;
  /**
  * Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#l2hm_attach SystemPath#l2hm_attach}
  */
  readonly l2HmAttach?: string;
  /**
  * Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#l2hm_path_name SystemPath#l2hm_path_name}
  */
  readonly l2HmPathName: string;
  /**
  * Test-API Interface (Ethernet Interface)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#l2hm_setup_test_api SystemPath#l2hm_setup_test_api}
  */
  readonly l2HmSetupTestApi?: number;
  /**
  * VLAN id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#l2hm_vlan SystemPath#l2hm_vlan}
  */
  readonly l2HmVlan?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#user_tag SystemPath#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#uuid SystemPath#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path thunder_system_path}
*/
export class SystemPath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPath to import
  * @param importFromId The id of the existing SystemPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_path thunder_system_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPathConfig
  */
  public constructor(scope: Construct, id: string, config: SystemPathConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_path',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ifpairEthEnd = config.ifpairEthEnd;
    this._ifpairEthStart = config.ifpairEthStart;
    this._ifpairTrunkEnd = config.ifpairTrunkEnd;
    this._ifpairTrunkStart = config.ifpairTrunkStart;
    this._l2HmAttach = config.l2HmAttach;
    this._l2HmPathName = config.l2HmPathName;
    this._l2HmSetupTestApi = config.l2HmSetupTestApi;
    this._l2HmVlan = config.l2HmVlan;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ifpair_eth_end - computed: false, optional: true, required: false
  private _ifpairEthEnd?: number; 
  public get ifpairEthEnd() {
    return this.getNumberAttribute('ifpair_eth_end');
  }
  public set ifpairEthEnd(value: number) {
    this._ifpairEthEnd = value;
  }
  public resetIfpairEthEnd() {
    this._ifpairEthEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifpairEthEndInput() {
    return this._ifpairEthEnd;
  }

  // ifpair_eth_start - computed: false, optional: true, required: false
  private _ifpairEthStart?: number; 
  public get ifpairEthStart() {
    return this.getNumberAttribute('ifpair_eth_start');
  }
  public set ifpairEthStart(value: number) {
    this._ifpairEthStart = value;
  }
  public resetIfpairEthStart() {
    this._ifpairEthStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifpairEthStartInput() {
    return this._ifpairEthStart;
  }

  // ifpair_trunk_end - computed: false, optional: true, required: false
  private _ifpairTrunkEnd?: number; 
  public get ifpairTrunkEnd() {
    return this.getNumberAttribute('ifpair_trunk_end');
  }
  public set ifpairTrunkEnd(value: number) {
    this._ifpairTrunkEnd = value;
  }
  public resetIfpairTrunkEnd() {
    this._ifpairTrunkEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifpairTrunkEndInput() {
    return this._ifpairTrunkEnd;
  }

  // ifpair_trunk_start - computed: false, optional: true, required: false
  private _ifpairTrunkStart?: number; 
  public get ifpairTrunkStart() {
    return this.getNumberAttribute('ifpair_trunk_start');
  }
  public set ifpairTrunkStart(value: number) {
    this._ifpairTrunkStart = value;
  }
  public resetIfpairTrunkStart() {
    this._ifpairTrunkStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifpairTrunkStartInput() {
    return this._ifpairTrunkStart;
  }

  // l2hm_attach - computed: false, optional: true, required: false
  private _l2HmAttach?: string; 
  public get l2HmAttach() {
    return this.getStringAttribute('l2hm_attach');
  }
  public set l2HmAttach(value: string) {
    this._l2HmAttach = value;
  }
  public resetL2HmAttach() {
    this._l2HmAttach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmAttachInput() {
    return this._l2HmAttach;
  }

  // l2hm_path_name - computed: false, optional: false, required: true
  private _l2HmPathName?: string; 
  public get l2HmPathName() {
    return this.getStringAttribute('l2hm_path_name');
  }
  public set l2HmPathName(value: string) {
    this._l2HmPathName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmPathNameInput() {
    return this._l2HmPathName;
  }

  // l2hm_setup_test_api - computed: false, optional: true, required: false
  private _l2HmSetupTestApi?: number; 
  public get l2HmSetupTestApi() {
    return this.getNumberAttribute('l2hm_setup_test_api');
  }
  public set l2HmSetupTestApi(value: number) {
    this._l2HmSetupTestApi = value;
  }
  public resetL2HmSetupTestApi() {
    this._l2HmSetupTestApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmSetupTestApiInput() {
    return this._l2HmSetupTestApi;
  }

  // l2hm_vlan - computed: false, optional: true, required: false
  private _l2HmVlan?: number; 
  public get l2HmVlan() {
    return this.getNumberAttribute('l2hm_vlan');
  }
  public set l2HmVlan(value: number) {
    this._l2HmVlan = value;
  }
  public resetL2HmVlan() {
    this._l2HmVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmVlanInput() {
    return this._l2HmVlan;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ifpair_eth_end: cdktf.numberToTerraform(this._ifpairEthEnd),
      ifpair_eth_start: cdktf.numberToTerraform(this._ifpairEthStart),
      ifpair_trunk_end: cdktf.numberToTerraform(this._ifpairTrunkEnd),
      ifpair_trunk_start: cdktf.numberToTerraform(this._ifpairTrunkStart),
      l2hm_attach: cdktf.stringToTerraform(this._l2HmAttach),
      l2hm_path_name: cdktf.stringToTerraform(this._l2HmPathName),
      l2hm_setup_test_api: cdktf.numberToTerraform(this._l2HmSetupTestApi),
      l2hm_vlan: cdktf.numberToTerraform(this._l2HmVlan),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifpair_eth_end: {
        value: cdktf.numberToHclTerraform(this._ifpairEthEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ifpair_eth_start: {
        value: cdktf.numberToHclTerraform(this._ifpairEthStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ifpair_trunk_end: {
        value: cdktf.numberToHclTerraform(this._ifpairTrunkEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ifpair_trunk_start: {
        value: cdktf.numberToHclTerraform(this._ifpairTrunkStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2hm_attach: {
        value: cdktf.stringToHclTerraform(this._l2HmAttach),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2hm_path_name: {
        value: cdktf.stringToHclTerraform(this._l2HmPathName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2hm_setup_test_api: {
        value: cdktf.numberToHclTerraform(this._l2HmSetupTestApi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2hm_vlan: {
        value: cdktf.numberToHclTerraform(this._l2HmVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
