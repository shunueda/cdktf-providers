// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalProductVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the application registration on this portal for the api product version is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version#application_registration_enabled PortalProductVersion#application_registration_enabled}
  */
  readonly applicationRegistrationEnabled: boolean | cdktf.IResolvable;
  /**
  * A list of authentication strategy IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version#auth_strategy_ids PortalProductVersion#auth_strategy_ids}
  */
  readonly authStrategyIds: string[];
  /**
  * Whether the application registration auto approval on this portal for the api product version is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version#auto_approve_registration PortalProductVersion#auto_approve_registration}
  */
  readonly autoApproveRegistration: boolean | cdktf.IResolvable;
  /**
  * Whether the api product version on the portal is deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version#deprecated PortalProductVersion#deprecated}
  */
  readonly deprecated: boolean | cdktf.IResolvable;
  /**
  * Whether to notify developers who are affected by this change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version#notify_developers PortalProductVersion#notify_developers}
  */
  readonly notifyDevelopers?: boolean | cdktf.IResolvable;
  /**
  * The Portal identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version#portal_id PortalProductVersion#portal_id}
  */
  readonly portalId: string;
  /**
  * API product version identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version#product_version_id PortalProductVersion#product_version_id}
  */
  readonly productVersionId: string;
  /**
  * Publication status of the API product version on the portal. must be one of ["published", "unpublished"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version#publish_status PortalProductVersion#publish_status}
  */
  readonly publishStatus: string;
}
export interface PortalProductVersionAuthStrategiesClientCredentials {
}

export function portalProductVersionAuthStrategiesClientCredentialsToTerraform(struct?: PortalProductVersionAuthStrategiesClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portalProductVersionAuthStrategiesClientCredentialsToHclTerraform(struct?: PortalProductVersionAuthStrategiesClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortalProductVersionAuthStrategiesClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalProductVersionAuthStrategiesClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalProductVersionAuthStrategiesClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_methods - computed: true, optional: false, required: false
  public get authMethods() {
    return this.getListAttribute('auth_methods');
  }

  // available_scopes - computed: true, optional: false, required: false
  public get availableScopes() {
    return this.getListAttribute('available_scopes');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface PortalProductVersionAuthStrategiesKeyAuth {
}

export function portalProductVersionAuthStrategiesKeyAuthToTerraform(struct?: PortalProductVersionAuthStrategiesKeyAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portalProductVersionAuthStrategiesKeyAuthToHclTerraform(struct?: PortalProductVersionAuthStrategiesKeyAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortalProductVersionAuthStrategiesKeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalProductVersionAuthStrategiesKeyAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalProductVersionAuthStrategiesKeyAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_names - computed: true, optional: false, required: false
  public get keyNames() {
    return this.getListAttribute('key_names');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface PortalProductVersionAuthStrategies {
}

export function portalProductVersionAuthStrategiesToTerraform(struct?: PortalProductVersionAuthStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portalProductVersionAuthStrategiesToHclTerraform(struct?: PortalProductVersionAuthStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortalProductVersionAuthStrategiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PortalProductVersionAuthStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalProductVersionAuthStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_credentials - computed: true, optional: false, required: false
  private _clientCredentials = new PortalProductVersionAuthStrategiesClientCredentialsOutputReference(this, "client_credentials");
  public get clientCredentials() {
    return this._clientCredentials;
  }

  // key_auth - computed: true, optional: false, required: false
  private _keyAuth = new PortalProductVersionAuthStrategiesKeyAuthOutputReference(this, "key_auth");
  public get keyAuth() {
    return this._keyAuth;
  }
}

export class PortalProductVersionAuthStrategiesList extends cdktf.ComplexList {

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
  public get(index: number): PortalProductVersionAuthStrategiesOutputReference {
    return new PortalProductVersionAuthStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version konnect_portal_product_version}
*/
export class PortalProductVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_portal_product_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortalProductVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortalProductVersion to import
  * @param importFromId The id of the existing PortalProductVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortalProductVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_portal_product_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_product_version konnect_portal_product_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalProductVersionConfig
  */
  public constructor(scope: Construct, id: string, config: PortalProductVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_portal_product_version',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationRegistrationEnabled = config.applicationRegistrationEnabled;
    this._authStrategyIds = config.authStrategyIds;
    this._autoApproveRegistration = config.autoApproveRegistration;
    this._deprecated = config.deprecated;
    this._notifyDevelopers = config.notifyDevelopers;
    this._portalId = config.portalId;
    this._productVersionId = config.productVersionId;
    this._publishStatus = config.publishStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_registration_enabled - computed: false, optional: false, required: true
  private _applicationRegistrationEnabled?: boolean | cdktf.IResolvable; 
  public get applicationRegistrationEnabled() {
    return this.getBooleanAttribute('application_registration_enabled');
  }
  public set applicationRegistrationEnabled(value: boolean | cdktf.IResolvable) {
    this._applicationRegistrationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRegistrationEnabledInput() {
    return this._applicationRegistrationEnabled;
  }

  // auth_strategies - computed: true, optional: false, required: false
  private _authStrategies = new PortalProductVersionAuthStrategiesList(this, "auth_strategies", false);
  public get authStrategies() {
    return this._authStrategies;
  }

  // auth_strategy_ids - computed: false, optional: false, required: true
  private _authStrategyIds?: string[]; 
  public get authStrategyIds() {
    return this.getListAttribute('auth_strategy_ids');
  }
  public set authStrategyIds(value: string[]) {
    this._authStrategyIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authStrategyIdsInput() {
    return this._authStrategyIds;
  }

  // auto_approve_registration - computed: false, optional: false, required: true
  private _autoApproveRegistration?: boolean | cdktf.IResolvable; 
  public get autoApproveRegistration() {
    return this.getBooleanAttribute('auto_approve_registration');
  }
  public set autoApproveRegistration(value: boolean | cdktf.IResolvable) {
    this._autoApproveRegistration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveRegistrationInput() {
    return this._autoApproveRegistration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deprecated - computed: false, optional: false, required: true
  private _deprecated?: boolean | cdktf.IResolvable; 
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }
  public set deprecated(value: boolean | cdktf.IResolvable) {
    this._deprecated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notify_developers - computed: false, optional: true, required: false
  private _notifyDevelopers?: boolean | cdktf.IResolvable; 
  public get notifyDevelopers() {
    return this.getBooleanAttribute('notify_developers');
  }
  public set notifyDevelopers(value: boolean | cdktf.IResolvable) {
    this._notifyDevelopers = value;
  }
  public resetNotifyDevelopers() {
    this._notifyDevelopers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDevelopersInput() {
    return this._notifyDevelopers;
  }

  // portal_id - computed: false, optional: false, required: true
  private _portalId?: string; 
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }
  public set portalId(value: string) {
    this._portalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalIdInput() {
    return this._portalId;
  }

  // product_version_id - computed: false, optional: false, required: true
  private _productVersionId?: string; 
  public get productVersionId() {
    return this.getStringAttribute('product_version_id');
  }
  public set productVersionId(value: string) {
    this._productVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionIdInput() {
    return this._productVersionId;
  }

  // publish_status - computed: false, optional: false, required: true
  private _publishStatus?: string; 
  public get publishStatus() {
    return this.getStringAttribute('publish_status');
  }
  public set publishStatus(value: string) {
    this._publishStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishStatusInput() {
    return this._publishStatus;
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
      application_registration_enabled: cdktf.booleanToTerraform(this._applicationRegistrationEnabled),
      auth_strategy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authStrategyIds),
      auto_approve_registration: cdktf.booleanToTerraform(this._autoApproveRegistration),
      deprecated: cdktf.booleanToTerraform(this._deprecated),
      notify_developers: cdktf.booleanToTerraform(this._notifyDevelopers),
      portal_id: cdktf.stringToTerraform(this._portalId),
      product_version_id: cdktf.stringToTerraform(this._productVersionId),
      publish_status: cdktf.stringToTerraform(this._publishStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_registration_enabled: {
        value: cdktf.booleanToHclTerraform(this._applicationRegistrationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_strategy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authStrategyIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_approve_registration: {
        value: cdktf.booleanToHclTerraform(this._autoApproveRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deprecated: {
        value: cdktf.booleanToHclTerraform(this._deprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_developers: {
        value: cdktf.booleanToHclTerraform(this._notifyDevelopers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      portal_id: {
        value: cdktf.stringToHclTerraform(this._portalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_version_id: {
        value: cdktf.stringToHclTerraform(this._productVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_status: {
        value: cdktf.stringToHclTerraform(this._publishStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
