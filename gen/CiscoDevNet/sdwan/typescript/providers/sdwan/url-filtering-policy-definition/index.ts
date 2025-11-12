// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UrlFilteringPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of alerts options that will be exported as syslog messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#alerts UrlFilteringPolicyDefinition#alerts}
  */
  readonly alerts?: string[];
  /**
  * Allow URL list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#allow_url_list_id UrlFilteringPolicyDefinition#allow_url_list_id}
  */
  readonly allowUrlListId?: string;
  /**
  * Allow URL list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#allow_url_list_version UrlFilteringPolicyDefinition#allow_url_list_version}
  */
  readonly allowUrlListVersion?: number;
  /**
  * Redirect to a URL or display a message when a blocked page is accessed.
  *   - Choices: `text`, `redirectUrl`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#block_page_action UrlFilteringPolicyDefinition#block_page_action}
  */
  readonly blockPageAction?: string;
  /**
  * The message displayed or URL redirected to when a blocked page is accessed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#block_page_contents UrlFilteringPolicyDefinition#block_page_contents}
  */
  readonly blockPageContents?: string;
  /**
  * Block URL list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#block_url_list_id UrlFilteringPolicyDefinition#block_url_list_id}
  */
  readonly blockUrlListId?: string;
  /**
  * Block URL list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#block_url_list_version UrlFilteringPolicyDefinition#block_url_list_version}
  */
  readonly blockUrlListVersion?: number;
  /**
  * The description of the policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#description UrlFilteringPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#logging UrlFilteringPolicyDefinition#logging}
  */
  readonly logging?: UrlFilteringPolicyDefinitionLogging[] | cdktf.IResolvable;
  /**
  * The policy mode
  *   - Choices: `security`, `unified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#mode UrlFilteringPolicyDefinition#mode}
  */
  readonly mode?: string;
  /**
  * The name of the policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#name UrlFilteringPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of VPN IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#target_vpns UrlFilteringPolicyDefinition#target_vpns}
  */
  readonly targetVpns?: string[];
  /**
  * List of categories to block or allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#web_categories UrlFilteringPolicyDefinition#web_categories}
  */
  readonly webCategories?: string[];
  /**
  * whether the selected web categories should be blocked or allowed.
  *   - Choices: `block`, `allow`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#web_categories_action UrlFilteringPolicyDefinition#web_categories_action}
  */
  readonly webCategoriesAction?: string;
  /**
  * The web reputation of the policy definition
  *   - Choices: `high-risk`, `suspicious`, `moderate-risk`, `low-risk`, `trustworthy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#web_reputation UrlFilteringPolicyDefinition#web_reputation}
  */
  readonly webReputation?: string;
}
export interface UrlFilteringPolicyDefinitionLogging {
  /**
  * External Syslog Server IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#external_syslog_server_ip UrlFilteringPolicyDefinition#external_syslog_server_ip}
  */
  readonly externalSyslogServerIp?: string;
  /**
  * External Syslog Server VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#external_syslog_server_vpn UrlFilteringPolicyDefinition#external_syslog_server_vpn}
  */
  readonly externalSyslogServerVpn?: string;
}

export function urlFilteringPolicyDefinitionLoggingToTerraform(struct?: UrlFilteringPolicyDefinitionLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_syslog_server_ip: cdktf.stringToTerraform(struct!.externalSyslogServerIp),
    external_syslog_server_vpn: cdktf.stringToTerraform(struct!.externalSyslogServerVpn),
  }
}


export function urlFilteringPolicyDefinitionLoggingToHclTerraform(struct?: UrlFilteringPolicyDefinitionLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_syslog_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.externalSyslogServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_syslog_server_vpn: {
      value: cdktf.stringToHclTerraform(struct!.externalSyslogServerVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlFilteringPolicyDefinitionLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UrlFilteringPolicyDefinitionLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalSyslogServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSyslogServerIp = this._externalSyslogServerIp;
    }
    if (this._externalSyslogServerVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSyslogServerVpn = this._externalSyslogServerVpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlFilteringPolicyDefinitionLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalSyslogServerIp = undefined;
      this._externalSyslogServerVpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalSyslogServerIp = value.externalSyslogServerIp;
      this._externalSyslogServerVpn = value.externalSyslogServerVpn;
    }
  }

  // external_syslog_server_ip - computed: false, optional: true, required: false
  private _externalSyslogServerIp?: string; 
  public get externalSyslogServerIp() {
    return this.getStringAttribute('external_syslog_server_ip');
  }
  public set externalSyslogServerIp(value: string) {
    this._externalSyslogServerIp = value;
  }
  public resetExternalSyslogServerIp() {
    this._externalSyslogServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSyslogServerIpInput() {
    return this._externalSyslogServerIp;
  }

  // external_syslog_server_vpn - computed: false, optional: true, required: false
  private _externalSyslogServerVpn?: string; 
  public get externalSyslogServerVpn() {
    return this.getStringAttribute('external_syslog_server_vpn');
  }
  public set externalSyslogServerVpn(value: string) {
    this._externalSyslogServerVpn = value;
  }
  public resetExternalSyslogServerVpn() {
    this._externalSyslogServerVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSyslogServerVpnInput() {
    return this._externalSyslogServerVpn;
  }
}

export class UrlFilteringPolicyDefinitionLoggingList extends cdktf.ComplexList {
  public internalValue? : UrlFilteringPolicyDefinitionLogging[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): UrlFilteringPolicyDefinitionLoggingOutputReference {
    return new UrlFilteringPolicyDefinitionLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition sdwan_url_filtering_policy_definition}
*/
export class UrlFilteringPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_url_filtering_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UrlFilteringPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UrlFilteringPolicyDefinition to import
  * @param importFromId The id of the existing UrlFilteringPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UrlFilteringPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_url_filtering_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/url_filtering_policy_definition sdwan_url_filtering_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UrlFilteringPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: UrlFilteringPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_url_filtering_policy_definition',
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
    this._allowUrlListId = config.allowUrlListId;
    this._allowUrlListVersion = config.allowUrlListVersion;
    this._blockPageAction = config.blockPageAction;
    this._blockPageContents = config.blockPageContents;
    this._blockUrlListId = config.blockUrlListId;
    this._blockUrlListVersion = config.blockUrlListVersion;
    this._description = config.description;
    this._logging.internalValue = config.logging;
    this._mode = config.mode;
    this._name = config.name;
    this._targetVpns = config.targetVpns;
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

  // allow_url_list_id - computed: false, optional: true, required: false
  private _allowUrlListId?: string; 
  public get allowUrlListId() {
    return this.getStringAttribute('allow_url_list_id');
  }
  public set allowUrlListId(value: string) {
    this._allowUrlListId = value;
  }
  public resetAllowUrlListId() {
    this._allowUrlListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUrlListIdInput() {
    return this._allowUrlListId;
  }

  // allow_url_list_version - computed: false, optional: true, required: false
  private _allowUrlListVersion?: number; 
  public get allowUrlListVersion() {
    return this.getNumberAttribute('allow_url_list_version');
  }
  public set allowUrlListVersion(value: number) {
    this._allowUrlListVersion = value;
  }
  public resetAllowUrlListVersion() {
    this._allowUrlListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUrlListVersionInput() {
    return this._allowUrlListVersion;
  }

  // block_page_action - computed: false, optional: true, required: false
  private _blockPageAction?: string; 
  public get blockPageAction() {
    return this.getStringAttribute('block_page_action');
  }
  public set blockPageAction(value: string) {
    this._blockPageAction = value;
  }
  public resetBlockPageAction() {
    this._blockPageAction = undefined;
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

  // block_url_list_id - computed: false, optional: true, required: false
  private _blockUrlListId?: string; 
  public get blockUrlListId() {
    return this.getStringAttribute('block_url_list_id');
  }
  public set blockUrlListId(value: string) {
    this._blockUrlListId = value;
  }
  public resetBlockUrlListId() {
    this._blockUrlListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUrlListIdInput() {
    return this._blockUrlListId;
  }

  // block_url_list_version - computed: false, optional: true, required: false
  private _blockUrlListVersion?: number; 
  public get blockUrlListVersion() {
    return this.getNumberAttribute('block_url_list_version');
  }
  public set blockUrlListVersion(value: number) {
    this._blockUrlListVersion = value;
  }
  public resetBlockUrlListVersion() {
    this._blockUrlListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUrlListVersionInput() {
    return this._blockUrlListVersion;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new UrlFilteringPolicyDefinitionLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }
  public putLogging(value: UrlFilteringPolicyDefinitionLogging[] | cdktf.IResolvable) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // target_vpns - computed: false, optional: true, required: false
  private _targetVpns?: string[]; 
  public get targetVpns() {
    return cdktf.Fn.tolist(this.getListAttribute('target_vpns'));
  }
  public set targetVpns(value: string[]) {
    this._targetVpns = value;
  }
  public resetTargetVpns() {
    this._targetVpns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpnsInput() {
    return this._targetVpns;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // web_categories - computed: false, optional: true, required: false
  private _webCategories?: string[]; 
  public get webCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('web_categories'));
  }
  public set webCategories(value: string[]) {
    this._webCategories = value;
  }
  public resetWebCategories() {
    this._webCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoriesInput() {
    return this._webCategories;
  }

  // web_categories_action - computed: false, optional: true, required: false
  private _webCategoriesAction?: string; 
  public get webCategoriesAction() {
    return this.getStringAttribute('web_categories_action');
  }
  public set webCategoriesAction(value: string) {
    this._webCategoriesAction = value;
  }
  public resetWebCategoriesAction() {
    this._webCategoriesAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoriesActionInput() {
    return this._webCategoriesAction;
  }

  // web_reputation - computed: false, optional: true, required: false
  private _webReputation?: string; 
  public get webReputation() {
    return this.getStringAttribute('web_reputation');
  }
  public set webReputation(value: string) {
    this._webReputation = value;
  }
  public resetWebReputation() {
    this._webReputation = undefined;
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
      allow_url_list_id: cdktf.stringToTerraform(this._allowUrlListId),
      allow_url_list_version: cdktf.numberToTerraform(this._allowUrlListVersion),
      block_page_action: cdktf.stringToTerraform(this._blockPageAction),
      block_page_contents: cdktf.stringToTerraform(this._blockPageContents),
      block_url_list_id: cdktf.stringToTerraform(this._blockUrlListId),
      block_url_list_version: cdktf.numberToTerraform(this._blockUrlListVersion),
      description: cdktf.stringToTerraform(this._description),
      logging: cdktf.listMapper(urlFilteringPolicyDefinitionLoggingToTerraform, false)(this._logging.internalValue),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      target_vpns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetVpns),
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
      allow_url_list_id: {
        value: cdktf.stringToHclTerraform(this._allowUrlListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_url_list_version: {
        value: cdktf.numberToHclTerraform(this._allowUrlListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      block_url_list_id: {
        value: cdktf.stringToHclTerraform(this._blockUrlListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_url_list_version: {
        value: cdktf.numberToHclTerraform(this._blockUrlListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.listMapperHcl(urlFilteringPolicyDefinitionLoggingToHclTerraform, false)(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UrlFilteringPolicyDefinitionLoggingList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      target_vpns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetVpns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
