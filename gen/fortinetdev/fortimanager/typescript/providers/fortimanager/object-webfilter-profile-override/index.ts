// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWebfilterProfileOverrideAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#adom ObjectWebfilterProfileOverrideA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#id ObjectWebfilterProfileOverrideA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#ovrd_cookie ObjectWebfilterProfileOverrideA#ovrd_cookie}
  */
  readonly ovrdCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#ovrd_dur ObjectWebfilterProfileOverrideA#ovrd_dur}
  */
  readonly ovrdDur?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#ovrd_dur_mode ObjectWebfilterProfileOverrideA#ovrd_dur_mode}
  */
  readonly ovrdDurMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#ovrd_scope ObjectWebfilterProfileOverrideA#ovrd_scope}
  */
  readonly ovrdScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#ovrd_user_group ObjectWebfilterProfileOverrideA#ovrd_user_group}
  */
  readonly ovrdUserGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#profile ObjectWebfilterProfileOverrideA#profile}
  */
  readonly profile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#profile_attribute ObjectWebfilterProfileOverrideA#profile_attribute}
  */
  readonly profileAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#profile_type ObjectWebfilterProfileOverrideA#profile_type}
  */
  readonly profileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#scopetype ObjectWebfilterProfileOverrideA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#url_profile ObjectWebfilterProfileOverrideA#url_profile}
  */
  readonly urlProfile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override fortimanager_object_webfilter_profile_override}
*/
export class ObjectWebfilterProfileOverrideA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_webfilter_profile_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWebfilterProfileOverrideA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWebfilterProfileOverrideA to import
  * @param importFromId The id of the existing ObjectWebfilterProfileOverrideA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWebfilterProfileOverrideA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_webfilter_profile_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_override fortimanager_object_webfilter_profile_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWebfilterProfileOverrideAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWebfilterProfileOverrideAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_webfilter_profile_override',
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
    this._adom = config.adom;
    this._id = config.id;
    this._ovrdCookie = config.ovrdCookie;
    this._ovrdDur = config.ovrdDur;
    this._ovrdDurMode = config.ovrdDurMode;
    this._ovrdScope = config.ovrdScope;
    this._ovrdUserGroup = config.ovrdUserGroup;
    this._profile = config.profile;
    this._profileAttribute = config.profileAttribute;
    this._profileType = config.profileType;
    this._scopetype = config.scopetype;
    this._urlProfile = config.urlProfile;
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

  // ovrd_cookie - computed: true, optional: true, required: false
  private _ovrdCookie?: string; 
  public get ovrdCookie() {
    return this.getStringAttribute('ovrd_cookie');
  }
  public set ovrdCookie(value: string) {
    this._ovrdCookie = value;
  }
  public resetOvrdCookie() {
    this._ovrdCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdCookieInput() {
    return this._ovrdCookie;
  }

  // ovrd_dur - computed: true, optional: true, required: false
  private _ovrdDur?: string; 
  public get ovrdDur() {
    return this.getStringAttribute('ovrd_dur');
  }
  public set ovrdDur(value: string) {
    this._ovrdDur = value;
  }
  public resetOvrdDur() {
    this._ovrdDur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdDurInput() {
    return this._ovrdDur;
  }

  // ovrd_dur_mode - computed: true, optional: true, required: false
  private _ovrdDurMode?: string; 
  public get ovrdDurMode() {
    return this.getStringAttribute('ovrd_dur_mode');
  }
  public set ovrdDurMode(value: string) {
    this._ovrdDurMode = value;
  }
  public resetOvrdDurMode() {
    this._ovrdDurMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdDurModeInput() {
    return this._ovrdDurMode;
  }

  // ovrd_scope - computed: true, optional: true, required: false
  private _ovrdScope?: string; 
  public get ovrdScope() {
    return this.getStringAttribute('ovrd_scope');
  }
  public set ovrdScope(value: string) {
    this._ovrdScope = value;
  }
  public resetOvrdScope() {
    this._ovrdScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdScopeInput() {
    return this._ovrdScope;
  }

  // ovrd_user_group - computed: true, optional: true, required: false
  private _ovrdUserGroup?: string[]; 
  public get ovrdUserGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('ovrd_user_group'));
  }
  public set ovrdUserGroup(value: string[]) {
    this._ovrdUserGroup = value;
  }
  public resetOvrdUserGroup() {
    this._ovrdUserGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdUserGroupInput() {
    return this._ovrdUserGroup;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string[]; 
  public get profile() {
    return cdktf.Fn.tolist(this.getListAttribute('profile'));
  }
  public set profile(value: string[]) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // profile_attribute - computed: true, optional: true, required: false
  private _profileAttribute?: string; 
  public get profileAttribute() {
    return this.getStringAttribute('profile_attribute');
  }
  public set profileAttribute(value: string) {
    this._profileAttribute = value;
  }
  public resetProfileAttribute() {
    this._profileAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileAttributeInput() {
    return this._profileAttribute;
  }

  // profile_type - computed: true, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
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

  // url_profile - computed: false, optional: false, required: true
  private _urlProfile?: string; 
  public get urlProfile() {
    return this.getStringAttribute('url_profile');
  }
  public set urlProfile(value: string) {
    this._urlProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlProfileInput() {
    return this._urlProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      ovrd_cookie: cdktf.stringToTerraform(this._ovrdCookie),
      ovrd_dur: cdktf.stringToTerraform(this._ovrdDur),
      ovrd_dur_mode: cdktf.stringToTerraform(this._ovrdDurMode),
      ovrd_scope: cdktf.stringToTerraform(this._ovrdScope),
      ovrd_user_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ovrdUserGroup),
      profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profile),
      profile_attribute: cdktf.stringToTerraform(this._profileAttribute),
      profile_type: cdktf.stringToTerraform(this._profileType),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      url_profile: cdktf.stringToTerraform(this._urlProfile),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovrd_cookie: {
        value: cdktf.stringToHclTerraform(this._ovrdCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovrd_dur: {
        value: cdktf.stringToHclTerraform(this._ovrdDur),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovrd_dur_mode: {
        value: cdktf.stringToHclTerraform(this._ovrdDurMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovrd_scope: {
        value: cdktf.stringToHclTerraform(this._ovrdScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovrd_user_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ovrdUserGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      profile_attribute: {
        value: cdktf.stringToHclTerraform(this._profileAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
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
      url_profile: {
        value: cdktf.stringToHclTerraform(this._urlProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
