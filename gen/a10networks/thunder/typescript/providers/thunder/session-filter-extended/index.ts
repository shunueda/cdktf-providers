// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SessionFilterExtendedConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'AND': both forward and reverse tuple-filter match; 'OR': either forward or reverse tuple-filter match;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended#filter_rel SessionFilterExtended#filter_rel}
  */
  readonly filterRel?: string;
  /**
  * Specify forward tuple-filter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended#fwd_filter SessionFilterExtended#fwd_filter}
  */
  readonly fwdFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended#id SessionFilterExtended#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Session filter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended#name SessionFilterExtended#name}
  */
  readonly name: string;
  /**
  * Specify reverse tuple-filter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended#rev_filter SessionFilterExtended#rev_filter}
  */
  readonly revFilter?: string;
  /**
  * 'sip': SIP sessions;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended#session_type SessionFilterExtended#session_type}
  */
  readonly sessionType?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended#user_tag SessionFilterExtended#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended#uuid SessionFilterExtended#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended thunder_session_filter_extended}
*/
export class SessionFilterExtended extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_session_filter_extended";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SessionFilterExtended resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SessionFilterExtended to import
  * @param importFromId The id of the existing SessionFilterExtended that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SessionFilterExtended to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_session_filter_extended", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/session_filter_extended thunder_session_filter_extended} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SessionFilterExtendedConfig
  */
  public constructor(scope: Construct, id: string, config: SessionFilterExtendedConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_session_filter_extended',
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
    this._filterRel = config.filterRel;
    this._fwdFilter = config.fwdFilter;
    this._id = config.id;
    this._name = config.name;
    this._revFilter = config.revFilter;
    this._sessionType = config.sessionType;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_rel - computed: false, optional: true, required: false
  private _filterRel?: string; 
  public get filterRel() {
    return this.getStringAttribute('filter_rel');
  }
  public set filterRel(value: string) {
    this._filterRel = value;
  }
  public resetFilterRel() {
    this._filterRel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRelInput() {
    return this._filterRel;
  }

  // fwd_filter - computed: false, optional: true, required: false
  private _fwdFilter?: string; 
  public get fwdFilter() {
    return this.getStringAttribute('fwd_filter');
  }
  public set fwdFilter(value: string) {
    this._fwdFilter = value;
  }
  public resetFwdFilter() {
    this._fwdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdFilterInput() {
    return this._fwdFilter;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rev_filter - computed: false, optional: true, required: false
  private _revFilter?: string; 
  public get revFilter() {
    return this.getStringAttribute('rev_filter');
  }
  public set revFilter(value: string) {
    this._revFilter = value;
  }
  public resetRevFilter() {
    this._revFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revFilterInput() {
    return this._revFilter;
  }

  // session_type - computed: false, optional: true, required: false
  private _sessionType?: string; 
  public get sessionType() {
    return this.getStringAttribute('session_type');
  }
  public set sessionType(value: string) {
    this._sessionType = value;
  }
  public resetSessionType() {
    this._sessionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTypeInput() {
    return this._sessionType;
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
      filter_rel: cdktf.stringToTerraform(this._filterRel),
      fwd_filter: cdktf.stringToTerraform(this._fwdFilter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rev_filter: cdktf.stringToTerraform(this._revFilter),
      session_type: cdktf.stringToTerraform(this._sessionType),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_rel: {
        value: cdktf.stringToHclTerraform(this._filterRel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_filter: {
        value: cdktf.stringToHclTerraform(this._fwdFilter),
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
      rev_filter: {
        value: cdktf.stringToHclTerraform(this._revFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_type: {
        value: cdktf.stringToHclTerraform(this._sessionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
