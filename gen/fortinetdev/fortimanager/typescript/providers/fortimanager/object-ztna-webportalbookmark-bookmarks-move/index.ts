// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectZtnaWebportalbookmarkBookmarksMoveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move#adom ObjectZtnaWebportalbookmarkBookmarksMove#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move#bookmarks ObjectZtnaWebportalbookmarkBookmarksMove#bookmarks}
  */
  readonly bookmarks: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move#id ObjectZtnaWebportalbookmarkBookmarksMove#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move#option ObjectZtnaWebportalbookmarkBookmarksMove#option}
  */
  readonly option: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move#scopetype ObjectZtnaWebportalbookmarkBookmarksMove#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move#state_pos ObjectZtnaWebportalbookmarkBookmarksMove#state_pos}
  */
  readonly statePos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move#target ObjectZtnaWebportalbookmarkBookmarksMove#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move#web_portal_bookmark ObjectZtnaWebportalbookmarkBookmarksMove#web_portal_bookmark}
  */
  readonly webPortalBookmark: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move fortimanager_object_ztna_webportalbookmark_bookmarks_move}
*/
export class ObjectZtnaWebportalbookmarkBookmarksMove extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_ztna_webportalbookmark_bookmarks_move";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectZtnaWebportalbookmarkBookmarksMove resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectZtnaWebportalbookmarkBookmarksMove to import
  * @param importFromId The id of the existing ObjectZtnaWebportalbookmarkBookmarksMove that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectZtnaWebportalbookmarkBookmarksMove to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_ztna_webportalbookmark_bookmarks_move", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_ztna_webportalbookmark_bookmarks_move fortimanager_object_ztna_webportalbookmark_bookmarks_move} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectZtnaWebportalbookmarkBookmarksMoveConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectZtnaWebportalbookmarkBookmarksMoveConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_ztna_webportalbookmark_bookmarks_move',
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
    this._bookmarks = config.bookmarks;
    this._id = config.id;
    this._option = config.option;
    this._scopetype = config.scopetype;
    this._statePos = config.statePos;
    this._target = config.target;
    this._webPortalBookmark = config.webPortalBookmark;
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

  // bookmarks - computed: false, optional: false, required: true
  private _bookmarks?: string; 
  public get bookmarks() {
    return this.getStringAttribute('bookmarks');
  }
  public set bookmarks(value: string) {
    this._bookmarks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bookmarksInput() {
    return this._bookmarks;
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

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
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

  // state_pos - computed: true, optional: true, required: false
  private _statePos?: string; 
  public get statePos() {
    return this.getStringAttribute('state_pos');
  }
  public set statePos(value: string) {
    this._statePos = value;
  }
  public resetStatePos() {
    this._statePos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statePosInput() {
    return this._statePos;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // web_portal_bookmark - computed: false, optional: false, required: true
  private _webPortalBookmark?: string; 
  public get webPortalBookmark() {
    return this.getStringAttribute('web_portal_bookmark');
  }
  public set webPortalBookmark(value: string) {
    this._webPortalBookmark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webPortalBookmarkInput() {
    return this._webPortalBookmark;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      bookmarks: cdktf.stringToTerraform(this._bookmarks),
      id: cdktf.stringToTerraform(this._id),
      option: cdktf.stringToTerraform(this._option),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      state_pos: cdktf.stringToTerraform(this._statePos),
      target: cdktf.stringToTerraform(this._target),
      web_portal_bookmark: cdktf.stringToTerraform(this._webPortalBookmark),
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
      bookmarks: {
        value: cdktf.stringToHclTerraform(this._bookmarks),
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
      option: {
        value: cdktf.stringToHclTerraform(this._option),
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
      state_pos: {
        value: cdktf.stringToHclTerraform(this._statePos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_portal_bookmark: {
        value: cdktf.stringToHclTerraform(this._webPortalBookmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
