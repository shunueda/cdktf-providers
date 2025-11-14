// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWebfilterProfileFtgdwfFiltersAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#action ObjectWebfilterProfileFtgdwfFiltersA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#adom ObjectWebfilterProfileFtgdwfFiltersA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#auth_usr_grp ObjectWebfilterProfileFtgdwfFiltersA#auth_usr_grp}
  */
  readonly authUsrGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#category ObjectWebfilterProfileFtgdwfFiltersA#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#fosid ObjectWebfilterProfileFtgdwfFiltersA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#id ObjectWebfilterProfileFtgdwfFiltersA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#log ObjectWebfilterProfileFtgdwfFiltersA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#override_replacemsg ObjectWebfilterProfileFtgdwfFiltersA#override_replacemsg}
  */
  readonly overrideReplacemsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#profile ObjectWebfilterProfileFtgdwfFiltersA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#scopetype ObjectWebfilterProfileFtgdwfFiltersA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#warn_duration ObjectWebfilterProfileFtgdwfFiltersA#warn_duration}
  */
  readonly warnDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#warning_duration_type ObjectWebfilterProfileFtgdwfFiltersA#warning_duration_type}
  */
  readonly warningDurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#warning_prompt ObjectWebfilterProfileFtgdwfFiltersA#warning_prompt}
  */
  readonly warningPrompt?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters fortimanager_object_webfilter_profile_ftgdwf_filters}
*/
export class ObjectWebfilterProfileFtgdwfFiltersA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_webfilter_profile_ftgdwf_filters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWebfilterProfileFtgdwfFiltersA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWebfilterProfileFtgdwfFiltersA to import
  * @param importFromId The id of the existing ObjectWebfilterProfileFtgdwfFiltersA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWebfilterProfileFtgdwfFiltersA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_webfilter_profile_ftgdwf_filters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf_filters fortimanager_object_webfilter_profile_ftgdwf_filters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWebfilterProfileFtgdwfFiltersAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWebfilterProfileFtgdwfFiltersAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_webfilter_profile_ftgdwf_filters',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._adom = config.adom;
    this._authUsrGrp = config.authUsrGrp;
    this._category = config.category;
    this._fosid = config.fosid;
    this._id = config.id;
    this._log = config.log;
    this._overrideReplacemsg = config.overrideReplacemsg;
    this._profile = config.profile;
    this._scopetype = config.scopetype;
    this._warnDuration = config.warnDuration;
    this._warningDurationType = config.warningDurationType;
    this._warningPrompt = config.warningPrompt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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

  // auth_usr_grp - computed: false, optional: true, required: false
  private _authUsrGrp?: string; 
  public get authUsrGrp() {
    return this.getStringAttribute('auth_usr_grp');
  }
  public set authUsrGrp(value: string) {
    this._authUsrGrp = value;
  }
  public resetAuthUsrGrp() {
    this._authUsrGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsrGrpInput() {
    return this._authUsrGrp;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // override_replacemsg - computed: false, optional: true, required: false
  private _overrideReplacemsg?: string; 
  public get overrideReplacemsg() {
    return this.getStringAttribute('override_replacemsg');
  }
  public set overrideReplacemsg(value: string) {
    this._overrideReplacemsg = value;
  }
  public resetOverrideReplacemsg() {
    this._overrideReplacemsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideReplacemsgInput() {
    return this._overrideReplacemsg;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
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

  // warn_duration - computed: false, optional: true, required: false
  private _warnDuration?: string; 
  public get warnDuration() {
    return this.getStringAttribute('warn_duration');
  }
  public set warnDuration(value: string) {
    this._warnDuration = value;
  }
  public resetWarnDuration() {
    this._warnDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnDurationInput() {
    return this._warnDuration;
  }

  // warning_duration_type - computed: false, optional: true, required: false
  private _warningDurationType?: string; 
  public get warningDurationType() {
    return this.getStringAttribute('warning_duration_type');
  }
  public set warningDurationType(value: string) {
    this._warningDurationType = value;
  }
  public resetWarningDurationType() {
    this._warningDurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationTypeInput() {
    return this._warningDurationType;
  }

  // warning_prompt - computed: false, optional: true, required: false
  private _warningPrompt?: string; 
  public get warningPrompt() {
    return this.getStringAttribute('warning_prompt');
  }
  public set warningPrompt(value: string) {
    this._warningPrompt = value;
  }
  public resetWarningPrompt() {
    this._warningPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningPromptInput() {
    return this._warningPrompt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      auth_usr_grp: cdktf.stringToTerraform(this._authUsrGrp),
      category: cdktf.stringToTerraform(this._category),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      log: cdktf.stringToTerraform(this._log),
      override_replacemsg: cdktf.stringToTerraform(this._overrideReplacemsg),
      profile: cdktf.stringToTerraform(this._profile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      warn_duration: cdktf.stringToTerraform(this._warnDuration),
      warning_duration_type: cdktf.stringToTerraform(this._warningDurationType),
      warning_prompt: cdktf.stringToTerraform(this._warningPrompt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_usr_grp: {
        value: cdktf.stringToHclTerraform(this._authUsrGrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      log: {
        value: cdktf.stringToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_replacemsg: {
        value: cdktf.stringToHclTerraform(this._overrideReplacemsg),
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
      warn_duration: {
        value: cdktf.stringToHclTerraform(this._warnDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warning_duration_type: {
        value: cdktf.stringToHclTerraform(this._warningDurationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warning_prompt: {
        value: cdktf.stringToHclTerraform(this._warningPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
