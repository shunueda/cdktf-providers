// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationmanagerIdpApplicationOauthApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the OAuth application to return.
  *  To get the OAuth application ID, make a [ApplicationService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#application_id OrganizationmanagerIdpApplicationOauthApplication#application_id}
  */
  readonly applicationId?: string;
  /**
  * Represents current connection to the OAuth client with specified scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#client_grant OrganizationmanagerIdpApplicationOauthApplication#client_grant}
  */
  readonly clientGrant?: OrganizationmanagerIdpApplicationOauthApplicationClientGrant;
  /**
  * Description of the application. 0-256 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#description OrganizationmanagerIdpApplicationOauthApplication#description}
  */
  readonly description?: string;
  /**
  * Settings of the group claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#group_claims_settings OrganizationmanagerIdpApplicationOauthApplication#group_claims_settings}
  */
  readonly groupClaimsSettings?: OrganizationmanagerIdpApplicationOauthApplicationGroupClaimsSettings;
  /**
  * ID of the OAuth application to return.
  *  To get the OAuth application ID, make a [ApplicationService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#id OrganizationmanagerIdpApplicationOauthApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels as `` key:value `` pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#labels OrganizationmanagerIdpApplicationOauthApplication#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the application.
  *  The name is unique within the organization. 3-63 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#name OrganizationmanagerIdpApplicationOauthApplication#name}
  */
  readonly name: string;
  /**
  * ID of the organization that the application belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#organization_id OrganizationmanagerIdpApplicationOauthApplication#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#timeouts OrganizationmanagerIdpApplicationOauthApplication#timeouts}
  */
  readonly timeouts?: OrganizationmanagerIdpApplicationOauthApplicationTimeouts;
}
export interface OrganizationmanagerIdpApplicationOauthApplicationClientGrant {
  /**
  * List of authorized client scopes by the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#authorized_scopes OrganizationmanagerIdpApplicationOauthApplication#authorized_scopes}
  */
  readonly authorizedScopes?: string[];
  /**
  * OAuth client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#client_id OrganizationmanagerIdpApplicationOauthApplication#client_id}
  */
  readonly clientId: string;
}

export function organizationmanagerIdpApplicationOauthApplicationClientGrantToTerraform(struct?: OrganizationmanagerIdpApplicationOauthApplicationClientGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedScopes),
    client_id: cdktf.stringToTerraform(struct!.clientId),
  }
}


export function organizationmanagerIdpApplicationOauthApplicationClientGrantToHclTerraform(struct?: OrganizationmanagerIdpApplicationOauthApplicationClientGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpApplicationOauthApplicationClientGrantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpApplicationOauthApplicationClientGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedScopes = this._authorizedScopes;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationOauthApplicationClientGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedScopes = undefined;
      this._clientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizedScopes = value.authorizedScopes;
      this._clientId = value.clientId;
    }
  }

  // authorized_scopes - computed: true, optional: true, required: false
  private _authorizedScopes?: string[]; 
  public get authorizedScopes() {
    return this.getListAttribute('authorized_scopes');
  }
  public set authorizedScopes(value: string[]) {
    this._authorizedScopes = value;
  }
  public resetAuthorizedScopes() {
    this._authorizedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedScopesInput() {
    return this._authorizedScopes;
  }

  // client_id - computed: true, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }
}
export interface OrganizationmanagerIdpApplicationOauthApplicationGroupClaimsSettings {
  /**
  * Represents current distribution type of the groups. I.e. which groups are visible for the application users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#group_distribution_type OrganizationmanagerIdpApplicationOauthApplication#group_distribution_type}
  */
  readonly groupDistributionType?: string;
}

export function organizationmanagerIdpApplicationOauthApplicationGroupClaimsSettingsToTerraform(struct?: OrganizationmanagerIdpApplicationOauthApplicationGroupClaimsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_distribution_type: cdktf.stringToTerraform(struct!.groupDistributionType),
  }
}


export function organizationmanagerIdpApplicationOauthApplicationGroupClaimsSettingsToHclTerraform(struct?: OrganizationmanagerIdpApplicationOauthApplicationGroupClaimsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_distribution_type: {
      value: cdktf.stringToHclTerraform(struct!.groupDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpApplicationOauthApplicationGroupClaimsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpApplicationOauthApplicationGroupClaimsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDistributionType = this._groupDistributionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationOauthApplicationGroupClaimsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupDistributionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupDistributionType = value.groupDistributionType;
    }
  }

  // group_distribution_type - computed: true, optional: true, required: false
  private _groupDistributionType?: string; 
  public get groupDistributionType() {
    return this.getStringAttribute('group_distribution_type');
  }
  public set groupDistributionType(value: string) {
    this._groupDistributionType = value;
  }
  public resetGroupDistributionType() {
    this._groupDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDistributionTypeInput() {
    return this._groupDistributionType;
  }
}
export interface OrganizationmanagerIdpApplicationOauthApplicationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#create OrganizationmanagerIdpApplicationOauthApplication#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#delete OrganizationmanagerIdpApplicationOauthApplication#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#read OrganizationmanagerIdpApplicationOauthApplication#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#update OrganizationmanagerIdpApplicationOauthApplication#update}
  */
  readonly update?: string;
}

export function organizationmanagerIdpApplicationOauthApplicationTimeoutsToTerraform(struct?: OrganizationmanagerIdpApplicationOauthApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function organizationmanagerIdpApplicationOauthApplicationTimeoutsToHclTerraform(struct?: OrganizationmanagerIdpApplicationOauthApplicationTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class OrganizationmanagerIdpApplicationOauthApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpApplicationOauthApplicationTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpApplicationOauthApplicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application yandex_organizationmanager_idp_application_oauth_application}
*/
export class OrganizationmanagerIdpApplicationOauthApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_idp_application_oauth_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationmanagerIdpApplicationOauthApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationmanagerIdpApplicationOauthApplication to import
  * @param importFromId The id of the existing OrganizationmanagerIdpApplicationOauthApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationmanagerIdpApplicationOauthApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_organizationmanager_idp_application_oauth_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_idp_application_oauth_application yandex_organizationmanager_idp_application_oauth_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationmanagerIdpApplicationOauthApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationmanagerIdpApplicationOauthApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_idp_application_oauth_application',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._clientGrant.internalValue = config.clientGrant;
    this._description = config.description;
    this._groupClaimsSettings.internalValue = config.groupClaimsSettings;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // client_grant - computed: true, optional: true, required: false
  private _clientGrant = new OrganizationmanagerIdpApplicationOauthApplicationClientGrantOutputReference(this, "client_grant");
  public get clientGrant() {
    return this._clientGrant;
  }
  public putClientGrant(value: OrganizationmanagerIdpApplicationOauthApplicationClientGrant) {
    this._clientGrant.internalValue = value;
  }
  public resetClientGrant() {
    this._clientGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientGrantInput() {
    return this._clientGrant.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // group_claims_settings - computed: true, optional: true, required: false
  private _groupClaimsSettings = new OrganizationmanagerIdpApplicationOauthApplicationGroupClaimsSettingsOutputReference(this, "group_claims_settings");
  public get groupClaimsSettings() {
    return this._groupClaimsSettings;
  }
  public putGroupClaimsSettings(value: OrganizationmanagerIdpApplicationOauthApplicationGroupClaimsSettings) {
    this._groupClaimsSettings.internalValue = value;
  }
  public resetGroupClaimsSettings() {
    this._groupClaimsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupClaimsSettingsInput() {
    return this._groupClaimsSettings.internalValue;
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

  // labels - computed: true, optional: true, required: false
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationmanagerIdpApplicationOauthApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationmanagerIdpApplicationOauthApplicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      client_grant: organizationmanagerIdpApplicationOauthApplicationClientGrantToTerraform(this._clientGrant.internalValue),
      description: cdktf.stringToTerraform(this._description),
      group_claims_settings: organizationmanagerIdpApplicationOauthApplicationGroupClaimsSettingsToTerraform(this._groupClaimsSettings.internalValue),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      timeouts: organizationmanagerIdpApplicationOauthApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_grant: {
        value: organizationmanagerIdpApplicationOauthApplicationClientGrantToHclTerraform(this._clientGrant.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpApplicationOauthApplicationClientGrant",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_claims_settings: {
        value: organizationmanagerIdpApplicationOauthApplicationGroupClaimsSettingsToHclTerraform(this._groupClaimsSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpApplicationOauthApplicationGroupClaimsSettings",
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: organizationmanagerIdpApplicationOauthApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpApplicationOauthApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
