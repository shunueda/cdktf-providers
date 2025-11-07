// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciMcpInstancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#admin_st DataAciMcpInstancePolicy#admin_st}
  */
  readonly adminSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#annotation DataAciMcpInstancePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#ctrl DataAciMcpInstancePolicy#ctrl}
  */
  readonly ctrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#description DataAciMcpInstancePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#id DataAciMcpInstancePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#init_delay_time DataAciMcpInstancePolicy#init_delay_time}
  */
  readonly initDelayTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#key DataAciMcpInstancePolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#loop_detect_mult DataAciMcpInstancePolicy#loop_detect_mult}
  */
  readonly loopDetectMult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#loop_protect_act DataAciMcpInstancePolicy#loop_protect_act}
  */
  readonly loopProtectAct?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#name_alias DataAciMcpInstancePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#tx_freq DataAciMcpInstancePolicy#tx_freq}
  */
  readonly txFreq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#tx_freq_msec DataAciMcpInstancePolicy#tx_freq_msec}
  */
  readonly txFreqMsec?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy aci_mcp_instance_policy}
*/
export class DataAciMcpInstancePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_mcp_instance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciMcpInstancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciMcpInstancePolicy to import
  * @param importFromId The id of the existing DataAciMcpInstancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciMcpInstancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_mcp_instance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/mcp_instance_policy aci_mcp_instance_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciMcpInstancePolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAciMcpInstancePolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_mcp_instance_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminSt = config.adminSt;
    this._annotation = config.annotation;
    this._ctrl = config.ctrl;
    this._description = config.description;
    this._id = config.id;
    this._initDelayTime = config.initDelayTime;
    this._key = config.key;
    this._loopDetectMult = config.loopDetectMult;
    this._loopProtectAct = config.loopProtectAct;
    this._nameAlias = config.nameAlias;
    this._txFreq = config.txFreq;
    this._txFreqMsec = config.txFreqMsec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_st - computed: true, optional: true, required: false
  private _adminSt?: string; 
  public get adminSt() {
    return this.getStringAttribute('admin_st');
  }
  public set adminSt(value: string) {
    this._adminSt = value;
  }
  public resetAdminSt() {
    this._adminSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStInput() {
    return this._adminSt;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // ctrl - computed: true, optional: true, required: false
  private _ctrl?: string[]; 
  public get ctrl() {
    return this.getListAttribute('ctrl');
  }
  public set ctrl(value: string[]) {
    this._ctrl = value;
  }
  public resetCtrl() {
    this._ctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlInput() {
    return this._ctrl;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // init_delay_time - computed: true, optional: true, required: false
  private _initDelayTime?: string; 
  public get initDelayTime() {
    return this.getStringAttribute('init_delay_time');
  }
  public set initDelayTime(value: string) {
    this._initDelayTime = value;
  }
  public resetInitDelayTime() {
    this._initDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initDelayTimeInput() {
    return this._initDelayTime;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // loop_detect_mult - computed: true, optional: true, required: false
  private _loopDetectMult?: string; 
  public get loopDetectMult() {
    return this.getStringAttribute('loop_detect_mult');
  }
  public set loopDetectMult(value: string) {
    this._loopDetectMult = value;
  }
  public resetLoopDetectMult() {
    this._loopDetectMult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopDetectMultInput() {
    return this._loopDetectMult;
  }

  // loop_protect_act - computed: true, optional: true, required: false
  private _loopProtectAct?: string; 
  public get loopProtectAct() {
    return this.getStringAttribute('loop_protect_act');
  }
  public set loopProtectAct(value: string) {
    this._loopProtectAct = value;
  }
  public resetLoopProtectAct() {
    this._loopProtectAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectActInput() {
    return this._loopProtectAct;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // tx_freq - computed: true, optional: true, required: false
  private _txFreq?: string; 
  public get txFreq() {
    return this.getStringAttribute('tx_freq');
  }
  public set txFreq(value: string) {
    this._txFreq = value;
  }
  public resetTxFreq() {
    this._txFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txFreqInput() {
    return this._txFreq;
  }

  // tx_freq_msec - computed: true, optional: true, required: false
  private _txFreqMsec?: string; 
  public get txFreqMsec() {
    return this.getStringAttribute('tx_freq_msec');
  }
  public set txFreqMsec(value: string) {
    this._txFreqMsec = value;
  }
  public resetTxFreqMsec() {
    this._txFreqMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txFreqMsecInput() {
    return this._txFreqMsec;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_st: cdktf.stringToTerraform(this._adminSt),
      annotation: cdktf.stringToTerraform(this._annotation),
      ctrl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ctrl),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      init_delay_time: cdktf.stringToTerraform(this._initDelayTime),
      key: cdktf.stringToTerraform(this._key),
      loop_detect_mult: cdktf.stringToTerraform(this._loopDetectMult),
      loop_protect_act: cdktf.stringToTerraform(this._loopProtectAct),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      tx_freq: cdktf.stringToTerraform(this._txFreq),
      tx_freq_msec: cdktf.stringToTerraform(this._txFreqMsec),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_st: {
        value: cdktf.stringToHclTerraform(this._adminSt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ctrl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ctrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      init_delay_time: {
        value: cdktf.stringToHclTerraform(this._initDelayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_detect_mult: {
        value: cdktf.stringToHclTerraform(this._loopDetectMult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_protect_act: {
        value: cdktf.stringToHclTerraform(this._loopProtectAct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tx_freq: {
        value: cdktf.stringToHclTerraform(this._txFreq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tx_freq_msec: {
        value: cdktf.stringToHclTerraform(this._txFreqMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
