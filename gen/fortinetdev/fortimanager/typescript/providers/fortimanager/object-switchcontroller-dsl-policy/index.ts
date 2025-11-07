// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerDslPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#adom ObjectSwitchcontrollerDslPolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#append_padding ObjectSwitchcontrollerDslPolicy#append_padding}
  */
  readonly appendPadding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#cpe_aele ObjectSwitchcontrollerDslPolicy#cpe_aele}
  */
  readonly cpeAele?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#cpe_aele_mode ObjectSwitchcontrollerDslPolicy#cpe_aele_mode}
  */
  readonly cpeAeleMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#cs ObjectSwitchcontrollerDslPolicy#cs}
  */
  readonly cs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#ds_bitswap ObjectSwitchcontrollerDslPolicy#ds_bitswap}
  */
  readonly dsBitswap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#id ObjectSwitchcontrollerDslPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#name ObjectSwitchcontrollerDslPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#pause_frame ObjectSwitchcontrollerDslPolicy#pause_frame}
  */
  readonly pauseFrame?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#profile ObjectSwitchcontrollerDslPolicy#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#scopetype ObjectSwitchcontrollerDslPolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#type ObjectSwitchcontrollerDslPolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#us_bitswap ObjectSwitchcontrollerDslPolicy#us_bitswap}
  */
  readonly usBitswap?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy fortimanager_object_switchcontroller_dsl_policy}
*/
export class ObjectSwitchcontrollerDslPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_dsl_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerDslPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerDslPolicy to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerDslPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerDslPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_dsl_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dsl_policy fortimanager_object_switchcontroller_dsl_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerDslPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerDslPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_dsl_policy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._appendPadding = config.appendPadding;
    this._cpeAele = config.cpeAele;
    this._cpeAeleMode = config.cpeAeleMode;
    this._cs = config.cs;
    this._dsBitswap = config.dsBitswap;
    this._id = config.id;
    this._name = config.name;
    this._pauseFrame = config.pauseFrame;
    this._profile = config.profile;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._usBitswap = config.usBitswap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // append_padding - computed: true, optional: true, required: false
  private _appendPadding?: string; 
  public get appendPadding() {
    return this.getStringAttribute('append_padding');
  }
  public set appendPadding(value: string) {
    this._appendPadding = value;
  }
  public resetAppendPadding() {
    this._appendPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendPaddingInput() {
    return this._appendPadding;
  }

  // cpe_aele - computed: true, optional: true, required: false
  private _cpeAele?: string; 
  public get cpeAele() {
    return this.getStringAttribute('cpe_aele');
  }
  public set cpeAele(value: string) {
    this._cpeAele = value;
  }
  public resetCpeAele() {
    this._cpeAele = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpeAeleInput() {
    return this._cpeAele;
  }

  // cpe_aele_mode - computed: true, optional: true, required: false
  private _cpeAeleMode?: string; 
  public get cpeAeleMode() {
    return this.getStringAttribute('cpe_aele_mode');
  }
  public set cpeAeleMode(value: string) {
    this._cpeAeleMode = value;
  }
  public resetCpeAeleMode() {
    this._cpeAeleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpeAeleModeInput() {
    return this._cpeAeleMode;
  }

  // cs - computed: true, optional: true, required: false
  private _cs?: string[]; 
  public get cs() {
    return cdktf.Fn.tolist(this.getListAttribute('cs'));
  }
  public set cs(value: string[]) {
    this._cs = value;
  }
  public resetCs() {
    this._cs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csInput() {
    return this._cs;
  }

  // ds_bitswap - computed: true, optional: true, required: false
  private _dsBitswap?: string; 
  public get dsBitswap() {
    return this.getStringAttribute('ds_bitswap');
  }
  public set dsBitswap(value: string) {
    this._dsBitswap = value;
  }
  public resetDsBitswap() {
    this._dsBitswap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsBitswapInput() {
    return this._dsBitswap;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pause_frame - computed: true, optional: true, required: false
  private _pauseFrame?: string; 
  public get pauseFrame() {
    return this.getStringAttribute('pause_frame');
  }
  public set pauseFrame(value: string) {
    this._pauseFrame = value;
  }
  public resetPauseFrame() {
    this._pauseFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseFrameInput() {
    return this._pauseFrame;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // us_bitswap - computed: true, optional: true, required: false
  private _usBitswap?: string; 
  public get usBitswap() {
    return this.getStringAttribute('us_bitswap');
  }
  public set usBitswap(value: string) {
    this._usBitswap = value;
  }
  public resetUsBitswap() {
    this._usBitswap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usBitswapInput() {
    return this._usBitswap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      append_padding: cdktf.stringToTerraform(this._appendPadding),
      cpe_aele: cdktf.stringToTerraform(this._cpeAele),
      cpe_aele_mode: cdktf.stringToTerraform(this._cpeAeleMode),
      cs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cs),
      ds_bitswap: cdktf.stringToTerraform(this._dsBitswap),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pause_frame: cdktf.stringToTerraform(this._pauseFrame),
      profile: cdktf.stringToTerraform(this._profile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      us_bitswap: cdktf.stringToTerraform(this._usBitswap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      append_padding: {
        value: cdktf.stringToHclTerraform(this._appendPadding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpe_aele: {
        value: cdktf.stringToHclTerraform(this._cpeAele),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpe_aele_mode: {
        value: cdktf.stringToHclTerraform(this._cpeAeleMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ds_bitswap: {
        value: cdktf.stringToHclTerraform(this._dsBitswap),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pause_frame: {
        value: cdktf.stringToHclTerraform(this._pauseFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      us_bitswap: {
        value: cdktf.stringToHclTerraform(this._usBitswap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
