// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectUnifiedUrlFilteringConfig extends cdktf.TerraformMetaArguments {
  /**
  * , Attribute conditional on `enable_alerts` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#alerts PolicyObjectUnifiedUrlFiltering#alerts}
  */
  readonly alerts?: string[];
  /**
  * 
  *   - Choices: `text`, `redirect-url`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#block_page_action PolicyObjectUnifiedUrlFiltering#block_page_action}
  */
  readonly blockPageAction: string;
  /**
  * , Attribute conditional on `block_page_action` being equal to `text`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#block_page_contents PolicyObjectUnifiedUrlFiltering#block_page_contents}
  */
  readonly blockPageContents?: string;
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#description PolicyObjectUnifiedUrlFiltering#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#enable_alerts PolicyObjectUnifiedUrlFiltering#enable_alerts}
  */
  readonly enableAlerts: boolean | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#feature_profile_id PolicyObjectUnifiedUrlFiltering#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#name PolicyObjectUnifiedUrlFiltering#name}
  */
  readonly name: string;
  /**
  * , Attribute conditional on `block_page_action` being equal to `redirect-url`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#redirect_url PolicyObjectUnifiedUrlFiltering#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#url_allow_list_id PolicyObjectUnifiedUrlFiltering#url_allow_list_id}
  */
  readonly urlAllowListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#url_block_list_id PolicyObjectUnifiedUrlFiltering#url_block_list_id}
  */
  readonly urlBlockListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#web_categories PolicyObjectUnifiedUrlFiltering#web_categories}
  */
  readonly webCategories: string[];
  /**
  * 
  *   - Choices: `block`, `allow`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#web_categories_action PolicyObjectUnifiedUrlFiltering#web_categories_action}
  */
  readonly webCategoriesAction: string;
  /**
  * 
  *   - Choices: `high-risk`, `low-risk`, `moderate-risk`, `suspicious`, `trustworthy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#web_reputation PolicyObjectUnifiedUrlFiltering#web_reputation}
  */
  readonly webReputation: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering sdwan_policy_object_unified_url_filtering}
*/
export class PolicyObjectUnifiedUrlFiltering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_unified_url_filtering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectUnifiedUrlFiltering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectUnifiedUrlFiltering to import
  * @param importFromId The id of the existing PolicyObjectUnifiedUrlFiltering that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectUnifiedUrlFiltering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_unified_url_filtering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_url_filtering sdwan_policy_object_unified_url_filtering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectUnifiedUrlFilteringConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectUnifiedUrlFilteringConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_unified_url_filtering',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alerts = config.alerts;
    this._blockPageAction = config.blockPageAction;
    this._blockPageContents = config.blockPageContents;
    this._description = config.description;
    this._enableAlerts = config.enableAlerts;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._redirectUrl = config.redirectUrl;
    this._urlAllowListId = config.urlAllowListId;
    this._urlBlockListId = config.urlBlockListId;
    this._webCategories = config.webCategories;
    this._webCategoriesAction = config.webCategoriesAction;
    this._webReputation = config.webReputation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts - computed: false, optional: true, required: false
  private _alerts?: string[]; 
  public get alerts() {
    return cdktf.Fn.tolist(this.getListAttribute('alerts'));
  }
  public set alerts(value: string[]) {
    this._alerts = value;
  }
  public resetAlerts() {
    this._alerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts;
  }

  // block_page_action - computed: false, optional: false, required: true
  private _blockPageAction?: string; 
  public get blockPageAction() {
    return this.getStringAttribute('block_page_action');
  }
  public set blockPageAction(value: string) {
    this._blockPageAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageActionInput() {
    return this._blockPageAction;
  }

  // block_page_contents - computed: false, optional: true, required: false
  private _blockPageContents?: string; 
  public get blockPageContents() {
    return this.getStringAttribute('block_page_contents');
  }
  public set blockPageContents(value: string) {
    this._blockPageContents = value;
  }
  public resetBlockPageContents() {
    this._blockPageContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageContentsInput() {
    return this._blockPageContents;
  }

  // description - computed: false, optional: true, required: false
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

  // enable_alerts - computed: false, optional: false, required: true
  private _enableAlerts?: boolean | cdktf.IResolvable; 
  public get enableAlerts() {
    return this.getBooleanAttribute('enable_alerts');
  }
  public set enableAlerts(value: boolean | cdktf.IResolvable) {
    this._enableAlerts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAlertsInput() {
    return this._enableAlerts;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // url_allow_list_id - computed: false, optional: true, required: false
  private _urlAllowListId?: string; 
  public get urlAllowListId() {
    return this.getStringAttribute('url_allow_list_id');
  }
  public set urlAllowListId(value: string) {
    this._urlAllowListId = value;
  }
  public resetUrlAllowListId() {
    this._urlAllowListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlAllowListIdInput() {
    return this._urlAllowListId;
  }

  // url_block_list_id - computed: false, optional: true, required: false
  private _urlBlockListId?: string; 
  public get urlBlockListId() {
    return this.getStringAttribute('url_block_list_id');
  }
  public set urlBlockListId(value: string) {
    this._urlBlockListId = value;
  }
  public resetUrlBlockListId() {
    this._urlBlockListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBlockListIdInput() {
    return this._urlBlockListId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // web_categories - computed: false, optional: false, required: true
  private _webCategories?: string[]; 
  public get webCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('web_categories'));
  }
  public set webCategories(value: string[]) {
    this._webCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoriesInput() {
    return this._webCategories;
  }

  // web_categories_action - computed: false, optional: false, required: true
  private _webCategoriesAction?: string; 
  public get webCategoriesAction() {
    return this.getStringAttribute('web_categories_action');
  }
  public set webCategoriesAction(value: string) {
    this._webCategoriesAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoriesActionInput() {
    return this._webCategoriesAction;
  }

  // web_reputation - computed: false, optional: false, required: true
  private _webReputation?: string; 
  public get webReputation() {
    return this.getStringAttribute('web_reputation');
  }
  public set webReputation(value: string) {
    this._webReputation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webReputationInput() {
    return this._webReputation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alerts),
      block_page_action: cdktf.stringToTerraform(this._blockPageAction),
      block_page_contents: cdktf.stringToTerraform(this._blockPageContents),
      description: cdktf.stringToTerraform(this._description),
      enable_alerts: cdktf.booleanToTerraform(this._enableAlerts),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      url_allow_list_id: cdktf.stringToTerraform(this._urlAllowListId),
      url_block_list_id: cdktf.stringToTerraform(this._urlBlockListId),
      web_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webCategories),
      web_categories_action: cdktf.stringToTerraform(this._webCategoriesAction),
      web_reputation: cdktf.stringToTerraform(this._webReputation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alerts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      block_page_action: {
        value: cdktf.stringToHclTerraform(this._blockPageAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_page_contents: {
        value: cdktf.stringToHclTerraform(this._blockPageContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_alerts: {
        value: cdktf.booleanToHclTerraform(this._enableAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      redirect_url: {
        value: cdktf.stringToHclTerraform(this._redirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_allow_list_id: {
        value: cdktf.stringToHclTerraform(this._urlAllowListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_block_list_id: {
        value: cdktf.stringToHclTerraform(this._urlBlockListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      web_categories_action: {
        value: cdktf.stringToHclTerraform(this._webCategoriesAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_reputation: {
        value: cdktf.stringToHclTerraform(this._webReputation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
