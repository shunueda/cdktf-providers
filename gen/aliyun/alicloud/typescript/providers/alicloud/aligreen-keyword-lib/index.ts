// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AligreenKeywordLibConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#biz_types AligreenKeywordLib#biz_types}
  */
  readonly bizTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#category AligreenKeywordLib#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#enable AligreenKeywordLib#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#id AligreenKeywordLib#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#keyword_lib_name AligreenKeywordLib#keyword_lib_name}
  */
  readonly keywordLibName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#lang AligreenKeywordLib#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#language AligreenKeywordLib#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#lib_type AligreenKeywordLib#lib_type}
  */
  readonly libType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#match_mode AligreenKeywordLib#match_mode}
  */
  readonly matchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#resource_type AligreenKeywordLib#resource_type}
  */
  readonly resourceType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#timeouts AligreenKeywordLib#timeouts}
  */
  readonly timeouts?: AligreenKeywordLibTimeouts;
}
export interface AligreenKeywordLibTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#create AligreenKeywordLib#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#delete AligreenKeywordLib#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#update AligreenKeywordLib#update}
  */
  readonly update?: string;
}

export function aligreenKeywordLibTimeoutsToTerraform(struct?: AligreenKeywordLibTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function aligreenKeywordLibTimeoutsToHclTerraform(struct?: AligreenKeywordLibTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AligreenKeywordLibTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AligreenKeywordLibTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AligreenKeywordLibTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib alicloud_aligreen_keyword_lib}
*/
export class AligreenKeywordLib extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_aligreen_keyword_lib";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AligreenKeywordLib resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AligreenKeywordLib to import
  * @param importFromId The id of the existing AligreenKeywordLib that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AligreenKeywordLib to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_aligreen_keyword_lib", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_keyword_lib alicloud_aligreen_keyword_lib} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AligreenKeywordLibConfig
  */
  public constructor(scope: Construct, id: string, config: AligreenKeywordLibConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_aligreen_keyword_lib',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bizTypes = config.bizTypes;
    this._category = config.category;
    this._enable = config.enable;
    this._id = config.id;
    this._keywordLibName = config.keywordLibName;
    this._lang = config.lang;
    this._language = config.language;
    this._libType = config.libType;
    this._matchMode = config.matchMode;
    this._resourceType = config.resourceType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // biz_types - computed: false, optional: true, required: false
  private _bizTypes?: string[]; 
  public get bizTypes() {
    return this.getListAttribute('biz_types');
  }
  public set bizTypes(value: string[]) {
    this._bizTypes = value;
  }
  public resetBizTypes() {
    this._bizTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bizTypesInput() {
    return this._bizTypes;
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

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // keyword_lib_name - computed: false, optional: false, required: true
  private _keywordLibName?: string; 
  public get keywordLibName() {
    return this.getStringAttribute('keyword_lib_name');
  }
  public set keywordLibName(value: string) {
    this._keywordLibName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordLibNameInput() {
    return this._keywordLibName;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // lib_type - computed: true, optional: true, required: false
  private _libType?: string; 
  public get libType() {
    return this.getStringAttribute('lib_type');
  }
  public set libType(value: string) {
    this._libType = value;
  }
  public resetLibType() {
    this._libType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libTypeInput() {
    return this._libType;
  }

  // match_mode - computed: true, optional: true, required: false
  private _matchMode?: string; 
  public get matchMode() {
    return this.getStringAttribute('match_mode');
  }
  public set matchMode(value: string) {
    this._matchMode = value;
  }
  public resetMatchMode() {
    this._matchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchModeInput() {
    return this._matchMode;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AligreenKeywordLibTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AligreenKeywordLibTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      biz_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bizTypes),
      category: cdktf.stringToTerraform(this._category),
      enable: cdktf.booleanToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      keyword_lib_name: cdktf.stringToTerraform(this._keywordLibName),
      lang: cdktf.stringToTerraform(this._lang),
      language: cdktf.stringToTerraform(this._language),
      lib_type: cdktf.stringToTerraform(this._libType),
      match_mode: cdktf.stringToTerraform(this._matchMode),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      timeouts: aligreenKeywordLibTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      biz_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bizTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyword_lib_name: {
        value: cdktf.stringToHclTerraform(this._keywordLibName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lib_type: {
        value: cdktf.stringToHclTerraform(this._libType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_mode: {
        value: cdktf.stringToHclTerraform(this._matchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: aligreenKeywordLibTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AligreenKeywordLibTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
