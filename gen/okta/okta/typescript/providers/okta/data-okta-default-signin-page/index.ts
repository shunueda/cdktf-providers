// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/default_signin_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaDefaultSigninPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * brand id of the preview signin page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/default_signin_page#brand_id DataOktaDefaultSigninPage#brand_id}
  */
  readonly brandId: string;
}
export interface DataOktaDefaultSigninPageContentSecurityPolicySetting {
}

export function dataOktaDefaultSigninPageContentSecurityPolicySettingToTerraform(struct?: DataOktaDefaultSigninPageContentSecurityPolicySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaDefaultSigninPageContentSecurityPolicySettingToHclTerraform(struct?: DataOktaDefaultSigninPageContentSecurityPolicySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDefaultSigninPageContentSecurityPolicySetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDefaultSigninPageContentSecurityPolicySetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // report_uri - computed: true, optional: false, required: false
  public get reportUri() {
    return this.getStringAttribute('report_uri');
  }

  // src_list - computed: true, optional: false, required: false
  public get srcList() {
    return this.getListAttribute('src_list');
  }
}
export interface DataOktaDefaultSigninPageWidgetCustomizations {
}

export function dataOktaDefaultSigninPageWidgetCustomizationsToTerraform(struct?: DataOktaDefaultSigninPageWidgetCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaDefaultSigninPageWidgetCustomizationsToHclTerraform(struct?: DataOktaDefaultSigninPageWidgetCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaDefaultSigninPageWidgetCustomizationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDefaultSigninPageWidgetCustomizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDefaultSigninPageWidgetCustomizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // authenticator_page_custom_link_label - computed: true, optional: false, required: false
  public get authenticatorPageCustomLinkLabel() {
    return this.getStringAttribute('authenticator_page_custom_link_label');
  }

  // authenticator_page_custom_link_url - computed: true, optional: false, required: false
  public get authenticatorPageCustomLinkUrl() {
    return this.getStringAttribute('authenticator_page_custom_link_url');
  }

  // classic_recovery_flow_email_or_username_label - computed: true, optional: false, required: false
  public get classicRecoveryFlowEmailOrUsernameLabel() {
    return this.getStringAttribute('classic_recovery_flow_email_or_username_label');
  }

  // custom_link_1_label - computed: true, optional: false, required: false
  public get customLink1Label() {
    return this.getStringAttribute('custom_link_1_label');
  }

  // custom_link_1_url - computed: true, optional: false, required: false
  public get customLink1Url() {
    return this.getStringAttribute('custom_link_1_url');
  }

  // custom_link_2_label - computed: true, optional: false, required: false
  public get customLink2Label() {
    return this.getStringAttribute('custom_link_2_label');
  }

  // custom_link_2_url - computed: true, optional: false, required: false
  public get customLink2Url() {
    return this.getStringAttribute('custom_link_2_url');
  }

  // forgot_password_label - computed: true, optional: false, required: false
  public get forgotPasswordLabel() {
    return this.getStringAttribute('forgot_password_label');
  }

  // forgot_password_url - computed: true, optional: false, required: false
  public get forgotPasswordUrl() {
    return this.getStringAttribute('forgot_password_url');
  }

  // help_label - computed: true, optional: false, required: false
  public get helpLabel() {
    return this.getStringAttribute('help_label');
  }

  // help_url - computed: true, optional: false, required: false
  public get helpUrl() {
    return this.getStringAttribute('help_url');
  }

  // password_info_tip - computed: true, optional: false, required: false
  public get passwordInfoTip() {
    return this.getStringAttribute('password_info_tip');
  }

  // password_label - computed: true, optional: false, required: false
  public get passwordLabel() {
    return this.getStringAttribute('password_label');
  }

  // show_password_visibility_toggle - computed: true, optional: false, required: false
  public get showPasswordVisibilityToggle() {
    return this.getBooleanAttribute('show_password_visibility_toggle');
  }

  // show_user_identifier - computed: true, optional: false, required: false
  public get showUserIdentifier() {
    return this.getBooleanAttribute('show_user_identifier');
  }

  // sign_in_label - computed: true, optional: false, required: false
  public get signInLabel() {
    return this.getStringAttribute('sign_in_label');
  }

  // unlock_account_label - computed: true, optional: false, required: false
  public get unlockAccountLabel() {
    return this.getStringAttribute('unlock_account_label');
  }

  // unlock_account_url - computed: true, optional: false, required: false
  public get unlockAccountUrl() {
    return this.getStringAttribute('unlock_account_url');
  }

  // username_info_tip - computed: true, optional: false, required: false
  public get usernameInfoTip() {
    return this.getStringAttribute('username_info_tip');
  }

  // username_label - computed: true, optional: false, required: false
  public get usernameLabel() {
    return this.getStringAttribute('username_label');
  }

  // widget_generation - computed: true, optional: false, required: false
  public get widgetGeneration() {
    return this.getStringAttribute('widget_generation');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/default_signin_page okta_default_signin_page}
*/
export class DataOktaDefaultSigninPage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_default_signin_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaDefaultSigninPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaDefaultSigninPage to import
  * @param importFromId The id of the existing DataOktaDefaultSigninPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/default_signin_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaDefaultSigninPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_default_signin_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/default_signin_page okta_default_signin_page} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaDefaultSigninPageConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaDefaultSigninPageConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_default_signin_page',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._brandId = config.brandId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // brand_id - computed: false, optional: false, required: true
  private _brandId?: string; 
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }
  public set brandId(value: string) {
    this._brandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brandIdInput() {
    return this._brandId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // page_content - computed: true, optional: false, required: false
  public get pageContent() {
    return this.getStringAttribute('page_content');
  }

  // widget_version - computed: true, optional: false, required: false
  public get widgetVersion() {
    return this.getStringAttribute('widget_version');
  }

  // content_security_policy_setting - computed: false, optional: false, required: false
  private _contentSecurityPolicySetting = new DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference(this, "content_security_policy_setting");
  public get contentSecurityPolicySetting() {
    return this._contentSecurityPolicySetting;
  }

  // widget_customizations - computed: false, optional: false, required: false
  private _widgetCustomizations = new DataOktaDefaultSigninPageWidgetCustomizationsOutputReference(this, "widget_customizations");
  public get widgetCustomizations() {
    return this._widgetCustomizations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brand_id: cdktf.stringToTerraform(this._brandId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      brand_id: {
        value: cdktf.stringToHclTerraform(this._brandId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
