// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TicketTrackingSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#annotations TicketTrackingSystem#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#description TicketTrackingSystem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#disable TicketTrackingSystem#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#id TicketTrackingSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#labels TicketTrackingSystem#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#name TicketTrackingSystem#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#namespace TicketTrackingSystem#namespace}
  */
  readonly namespace: string;
  /**
  * jira_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#jira_config TicketTrackingSystem#jira_config}
  */
  readonly jiraConfig?: TicketTrackingSystemJiraConfig;
}
export interface TicketTrackingSystemJiraConfigAdhocRestApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#account_email TicketTrackingSystem#account_email}
  */
  readonly accountEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#api_token TicketTrackingSystem#api_token}
  */
  readonly apiToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#organization_domain TicketTrackingSystem#organization_domain}
  */
  readonly organizationDomain: string;
}

export function ticketTrackingSystemJiraConfigAdhocRestApiToTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiOutputReference | TicketTrackingSystemJiraConfigAdhocRestApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_email: cdktf.stringToTerraform(struct!.accountEmail),
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    organization_domain: cdktf.stringToTerraform(struct!.organizationDomain),
  }
}


export function ticketTrackingSystemJiraConfigAdhocRestApiToHclTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiOutputReference | TicketTrackingSystemJiraConfigAdhocRestApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_email: {
      value: cdktf.stringToHclTerraform(struct!.accountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_domain: {
      value: cdktf.stringToHclTerraform(struct!.organizationDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TicketTrackingSystemJiraConfigAdhocRestApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TicketTrackingSystemJiraConfigAdhocRestApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountEmail = this._accountEmail;
    }
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._organizationDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationDomain = this._organizationDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TicketTrackingSystemJiraConfigAdhocRestApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountEmail = undefined;
      this._apiToken = undefined;
      this._organizationDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountEmail = value.accountEmail;
      this._apiToken = value.apiToken;
      this._organizationDomain = value.organizationDomain;
    }
  }

  // account_email - computed: false, optional: false, required: true
  private _accountEmail?: string; 
  public get accountEmail() {
    return this.getStringAttribute('account_email');
  }
  public set accountEmail(value: string) {
    this._accountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountEmailInput() {
    return this._accountEmail;
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // organization_domain - computed: false, optional: false, required: true
  private _organizationDomain?: string; 
  public get organizationDomain() {
    return this.getStringAttribute('organization_domain');
  }
  public set organizationDomain(value: string) {
    this._organizationDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationDomainInput() {
    return this._organizationDomain;
  }
}
export interface TicketTrackingSystemJiraConfig {
  /**
  * adhoc_rest_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#adhoc_rest_api TicketTrackingSystem#adhoc_rest_api}
  */
  readonly adhocRestApi?: TicketTrackingSystemJiraConfigAdhocRestApi;
}

export function ticketTrackingSystemJiraConfigToTerraform(struct?: TicketTrackingSystemJiraConfigOutputReference | TicketTrackingSystemJiraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adhoc_rest_api: ticketTrackingSystemJiraConfigAdhocRestApiToTerraform(struct!.adhocRestApi),
  }
}


export function ticketTrackingSystemJiraConfigToHclTerraform(struct?: TicketTrackingSystemJiraConfigOutputReference | TicketTrackingSystemJiraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adhoc_rest_api: {
      value: ticketTrackingSystemJiraConfigAdhocRestApiToHclTerraform(struct!.adhocRestApi),
      isBlock: true,
      type: "list",
      storageClassType: "TicketTrackingSystemJiraConfigAdhocRestApiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TicketTrackingSystemJiraConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TicketTrackingSystemJiraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adhocRestApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adhocRestApi = this._adhocRestApi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TicketTrackingSystemJiraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adhocRestApi.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adhocRestApi.internalValue = value.adhocRestApi;
    }
  }

  // adhoc_rest_api - computed: false, optional: true, required: false
  private _adhocRestApi = new TicketTrackingSystemJiraConfigAdhocRestApiOutputReference(this, "adhoc_rest_api");
  public get adhocRestApi() {
    return this._adhocRestApi;
  }
  public putAdhocRestApi(value: TicketTrackingSystemJiraConfigAdhocRestApi) {
    this._adhocRestApi.internalValue = value;
  }
  public resetAdhocRestApi() {
    this._adhocRestApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adhocRestApiInput() {
    return this._adhocRestApi.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system volterra_ticket_tracking_system}
*/
export class TicketTrackingSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_ticket_tracking_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TicketTrackingSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TicketTrackingSystem to import
  * @param importFromId The id of the existing TicketTrackingSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TicketTrackingSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_ticket_tracking_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ticket_tracking_system volterra_ticket_tracking_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TicketTrackingSystemConfig
  */
  public constructor(scope: Construct, id: string, config: TicketTrackingSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_ticket_tracking_system',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._jiraConfig.internalValue = config.jiraConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // jira_config - computed: false, optional: true, required: false
  private _jiraConfig = new TicketTrackingSystemJiraConfigOutputReference(this, "jira_config");
  public get jiraConfig() {
    return this._jiraConfig;
  }
  public putJiraConfig(value: TicketTrackingSystemJiraConfig) {
    this._jiraConfig.internalValue = value;
  }
  public resetJiraConfig() {
    this._jiraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraConfigInput() {
    return this._jiraConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      jira_config: ticketTrackingSystemJiraConfigToTerraform(this._jiraConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_config: {
        value: ticketTrackingSystemJiraConfigToHclTerraform(this._jiraConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TicketTrackingSystemJiraConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
