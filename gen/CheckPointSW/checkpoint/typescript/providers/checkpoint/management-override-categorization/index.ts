// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementOverrideCategorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uid or name of the categories to override in the Application and URL Filtering or Threat Prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#additional_categories ManagementOverrideCategorization#additional_categories}
  */
  readonly additionalCategories?: string[];
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#color ManagementOverrideCategorization#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#comments ManagementOverrideCategorization#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#id ManagementOverrideCategorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#ignore_errors ManagementOverrideCategorization#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#ignore_warnings ManagementOverrideCategorization#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Uid or name of the primary category based on its most defining aspect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#new_primary_category ManagementOverrideCategorization#new_primary_category}
  */
  readonly newPrimaryCategory?: string;
  /**
  * States the override categorization risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#risk ManagementOverrideCategorization#risk}
  */
  readonly risk?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#tags ManagementOverrideCategorization#tags}
  */
  readonly tags?: string[];
  /**
  * The URL for which we want to update the category and risk definitions, the URL and the object name are the same for Override Categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#url ManagementOverrideCategorization#url}
  */
  readonly url: string;
  /**
  * States whether the URL is defined as a Regular Expression or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#url_defined_as_regular_expression ManagementOverrideCategorization#url_defined_as_regular_expression}
  */
  readonly urlDefinedAsRegularExpression?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization checkpoint_management_override_categorization}
*/
export class ManagementOverrideCategorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_override_categorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementOverrideCategorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementOverrideCategorization to import
  * @param importFromId The id of the existing ManagementOverrideCategorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementOverrideCategorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_override_categorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_override_categorization checkpoint_management_override_categorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementOverrideCategorizationConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementOverrideCategorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_override_categorization',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalCategories = config.additionalCategories;
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._newPrimaryCategory = config.newPrimaryCategory;
    this._risk = config.risk;
    this._tags = config.tags;
    this._url = config.url;
    this._urlDefinedAsRegularExpression = config.urlDefinedAsRegularExpression;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_categories - computed: false, optional: true, required: false
  private _additionalCategories?: string[]; 
  public get additionalCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_categories'));
  }
  public set additionalCategories(value: string[]) {
    this._additionalCategories = value;
  }
  public resetAdditionalCategories() {
    this._additionalCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCategoriesInput() {
    return this._additionalCategories;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // new_primary_category - computed: false, optional: true, required: false
  private _newPrimaryCategory?: string; 
  public get newPrimaryCategory() {
    return this.getStringAttribute('new_primary_category');
  }
  public set newPrimaryCategory(value: string) {
    this._newPrimaryCategory = value;
  }
  public resetNewPrimaryCategory() {
    this._newPrimaryCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPrimaryCategoryInput() {
    return this._newPrimaryCategory;
  }

  // risk - computed: false, optional: true, required: false
  private _risk?: string; 
  public get risk() {
    return this.getStringAttribute('risk');
  }
  public set risk(value: string) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_defined_as_regular_expression - computed: false, optional: true, required: false
  private _urlDefinedAsRegularExpression?: boolean | cdktf.IResolvable; 
  public get urlDefinedAsRegularExpression() {
    return this.getBooleanAttribute('url_defined_as_regular_expression');
  }
  public set urlDefinedAsRegularExpression(value: boolean | cdktf.IResolvable) {
    this._urlDefinedAsRegularExpression = value;
  }
  public resetUrlDefinedAsRegularExpression() {
    this._urlDefinedAsRegularExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlDefinedAsRegularExpressionInput() {
    return this._urlDefinedAsRegularExpression;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalCategories),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      new_primary_category: cdktf.stringToTerraform(this._newPrimaryCategory),
      risk: cdktf.stringToTerraform(this._risk),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      url: cdktf.stringToTerraform(this._url),
      url_defined_as_regular_expression: cdktf.booleanToTerraform(this._urlDefinedAsRegularExpression),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      new_primary_category: {
        value: cdktf.stringToHclTerraform(this._newPrimaryCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk: {
        value: cdktf.stringToHclTerraform(this._risk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_defined_as_regular_expression: {
        value: cdktf.booleanToHclTerraform(this._urlDefinedAsRegularExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
