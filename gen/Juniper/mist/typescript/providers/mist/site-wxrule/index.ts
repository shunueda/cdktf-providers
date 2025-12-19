// https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteWxruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * type of action, allow / block. enum: `allow`, `block`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#action SiteWxrule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#apply_tags SiteWxrule#apply_tags}
  */
  readonly applyTags?: string[];
  /**
  * Blocked apps (always blocking, ignoring action), the key of Get Application List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#blocked_apps SiteWxrule#blocked_apps}
  */
  readonly blockedApps?: string[];
  /**
  * List of WxTag UUID to indicate these tags are allowed access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#dst_allow_wxtags SiteWxrule#dst_allow_wxtags}
  */
  readonly dstAllowWxtags?: string[];
  /**
  * List of WxTag UUID to indicate these tags are blocked access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#dst_deny_wxtags SiteWxrule#dst_deny_wxtags}
  */
  readonly dstDenyWxtags?: string[];
  /**
  * List of WxTag UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#dst_wxtags SiteWxrule#dst_wxtags}
  */
  readonly dstWxtags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#enabled SiteWxrule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Order how rules would be looked up, > 0 and bigger order got matched first, -1 means LAST, uniqueness not checked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#order SiteWxrule#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#site_id SiteWxrule#site_id}
  */
  readonly siteId: string;
  /**
  * List of WxTag UUID to determine if this rule would match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#src_wxtags SiteWxrule#src_wxtags}
  */
  readonly srcWxtags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule mist_site_wxrule}
*/
export class SiteWxrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_site_wxrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteWxrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteWxrule to import
  * @param importFromId The id of the existing SiteWxrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteWxrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_site_wxrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/site_wxrule mist_site_wxrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteWxruleConfig
  */
  public constructor(scope: Construct, id: string, config: SiteWxruleConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_site_wxrule',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
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
    this._applyTags = config.applyTags;
    this._blockedApps = config.blockedApps;
    this._dstAllowWxtags = config.dstAllowWxtags;
    this._dstDenyWxtags = config.dstDenyWxtags;
    this._dstWxtags = config.dstWxtags;
    this._enabled = config.enabled;
    this._order = config.order;
    this._siteId = config.siteId;
    this._srcWxtags = config.srcWxtags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // apply_tags - computed: false, optional: true, required: false
  private _applyTags?: string[]; 
  public get applyTags() {
    return this.getListAttribute('apply_tags');
  }
  public set applyTags(value: string[]) {
    this._applyTags = value;
  }
  public resetApplyTags() {
    this._applyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyTagsInput() {
    return this._applyTags;
  }

  // blocked_apps - computed: false, optional: true, required: false
  private _blockedApps?: string[]; 
  public get blockedApps() {
    return this.getListAttribute('blocked_apps');
  }
  public set blockedApps(value: string[]) {
    this._blockedApps = value;
  }
  public resetBlockedApps() {
    this._blockedApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedAppsInput() {
    return this._blockedApps;
  }

  // dst_allow_wxtags - computed: true, optional: true, required: false
  private _dstAllowWxtags?: string[]; 
  public get dstAllowWxtags() {
    return this.getListAttribute('dst_allow_wxtags');
  }
  public set dstAllowWxtags(value: string[]) {
    this._dstAllowWxtags = value;
  }
  public resetDstAllowWxtags() {
    this._dstAllowWxtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAllowWxtagsInput() {
    return this._dstAllowWxtags;
  }

  // dst_deny_wxtags - computed: true, optional: true, required: false
  private _dstDenyWxtags?: string[]; 
  public get dstDenyWxtags() {
    return this.getListAttribute('dst_deny_wxtags');
  }
  public set dstDenyWxtags(value: string[]) {
    this._dstDenyWxtags = value;
  }
  public resetDstDenyWxtags() {
    this._dstDenyWxtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstDenyWxtagsInput() {
    return this._dstDenyWxtags;
  }

  // dst_wxtags - computed: true, optional: true, required: false
  private _dstWxtags?: string[]; 
  public get dstWxtags() {
    return this.getListAttribute('dst_wxtags');
  }
  public set dstWxtags(value: string[]) {
    this._dstWxtags = value;
  }
  public resetDstWxtags() {
    this._dstWxtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstWxtagsInput() {
    return this._dstWxtags;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // src_wxtags - computed: true, optional: true, required: false
  private _srcWxtags?: string[]; 
  public get srcWxtags() {
    return this.getListAttribute('src_wxtags');
  }
  public set srcWxtags(value: string[]) {
    this._srcWxtags = value;
  }
  public resetSrcWxtags() {
    this._srcWxtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcWxtagsInput() {
    return this._srcWxtags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      apply_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applyTags),
      blocked_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedApps),
      dst_allow_wxtags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstAllowWxtags),
      dst_deny_wxtags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstDenyWxtags),
      dst_wxtags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstWxtags),
      enabled: cdktf.booleanToTerraform(this._enabled),
      order: cdktf.numberToTerraform(this._order),
      site_id: cdktf.stringToTerraform(this._siteId),
      src_wxtags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcWxtags),
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
      apply_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applyTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocked_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedApps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dst_allow_wxtags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstAllowWxtags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dst_deny_wxtags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstDenyWxtags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dst_wxtags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstWxtags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_wxtags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcWxtags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
