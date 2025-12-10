// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorGcpSecretManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reference to the secret containing credentials of IAM service account for Google Secret Manager. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#credentials_ref PlatformConnectorGcpSecretManager#credentials_ref}
  */
  readonly credentialsRef?: string;
  /**
  * The delegates to inherit the credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#delegate_selectors PlatformConnectorGcpSecretManager#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#description PlatformConnectorGcpSecretManager#description}
  */
  readonly description?: string;
  /**
  * Execute on delegate or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#execute_on_delegate PlatformConnectorGcpSecretManager#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#id PlatformConnectorGcpSecretManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#identifier PlatformConnectorGcpSecretManager#identifier}
  */
  readonly identifier: string;
  /**
  * Inherit configuration from delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#inherit_from_delegate PlatformConnectorGcpSecretManager#inherit_from_delegate}
  */
  readonly inheritFromDelegate?: boolean | cdktf.IResolvable;
  /**
  * Set this flag to set this secret manager as default secret manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#is_default PlatformConnectorGcpSecretManager#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#name PlatformConnectorGcpSecretManager#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#org_id PlatformConnectorGcpSecretManager#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#project_id PlatformConnectorGcpSecretManager#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#tags PlatformConnectorGcpSecretManager#tags}
  */
  readonly tags?: string[];
  /**
  * oidc_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#oidc_authentication PlatformConnectorGcpSecretManager#oidc_authentication}
  */
  readonly oidcAuthentication?: PlatformConnectorGcpSecretManagerOidcAuthentication[] | cdktf.IResolvable;
}
export interface PlatformConnectorGcpSecretManagerOidcAuthentication {
  /**
  * The project number of the GCP project that is used to create the workload identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#gcp_project_id PlatformConnectorGcpSecretManager#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * The OIDC provider ID value configured in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#provider_id PlatformConnectorGcpSecretManager#provider_id}
  */
  readonly providerId: string;
  /**
  * The service account linked to workload identity pool while setting GCP workload identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#service_account_email PlatformConnectorGcpSecretManager#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * The workload pool ID value created in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#workload_pool_id PlatformConnectorGcpSecretManager#workload_pool_id}
  */
  readonly workloadPoolId: string;
}

export function platformConnectorGcpSecretManagerOidcAuthenticationToTerraform(struct?: PlatformConnectorGcpSecretManagerOidcAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_project_id: cdktf.stringToTerraform(struct!.gcpProjectId),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    workload_pool_id: cdktf.stringToTerraform(struct!.workloadPoolId),
  }
}


export function platformConnectorGcpSecretManagerOidcAuthenticationToHclTerraform(struct?: PlatformConnectorGcpSecretManagerOidcAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_project_id: {
      value: cdktf.stringToHclTerraform(struct!.gcpProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.workloadPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGcpSecretManagerOidcAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformConnectorGcpSecretManagerOidcAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpProjectId = this._gcpProjectId;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._workloadPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadPoolId = this._workloadPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGcpSecretManagerOidcAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcpProjectId = undefined;
      this._providerId = undefined;
      this._serviceAccountEmail = undefined;
      this._workloadPoolId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcpProjectId = value.gcpProjectId;
      this._providerId = value.providerId;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._workloadPoolId = value.workloadPoolId;
    }
  }

  // gcp_project_id - computed: false, optional: false, required: true
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // workload_pool_id - computed: false, optional: false, required: true
  private _workloadPoolId?: string; 
  public get workloadPoolId() {
    return this.getStringAttribute('workload_pool_id');
  }
  public set workloadPoolId(value: string) {
    this._workloadPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadPoolIdInput() {
    return this._workloadPoolId;
  }
}

export class PlatformConnectorGcpSecretManagerOidcAuthenticationList extends cdktf.ComplexList {
  public internalValue? : PlatformConnectorGcpSecretManagerOidcAuthentication[] | cdktf.IResolvable

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
  public get(index: number): PlatformConnectorGcpSecretManagerOidcAuthenticationOutputReference {
    return new PlatformConnectorGcpSecretManagerOidcAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager harness_platform_connector_gcp_secret_manager}
*/
export class PlatformConnectorGcpSecretManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_gcp_secret_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorGcpSecretManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorGcpSecretManager to import
  * @param importFromId The id of the existing PlatformConnectorGcpSecretManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorGcpSecretManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_gcp_secret_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_gcp_secret_manager harness_platform_connector_gcp_secret_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorGcpSecretManagerConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorGcpSecretManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_gcp_secret_manager',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialsRef = config.credentialsRef;
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._executeOnDelegate = config.executeOnDelegate;
    this._id = config.id;
    this._identifier = config.identifier;
    this._inheritFromDelegate = config.inheritFromDelegate;
    this._isDefault = config.isDefault;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._oidcAuthentication.internalValue = config.oidcAuthentication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials_ref - computed: false, optional: true, required: false
  private _credentialsRef?: string; 
  public get credentialsRef() {
    return this.getStringAttribute('credentials_ref');
  }
  public set credentialsRef(value: string) {
    this._credentialsRef = value;
  }
  public resetCredentialsRef() {
    this._credentialsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsRefInput() {
    return this._credentialsRef;
  }

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
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

  // execute_on_delegate - computed: false, optional: true, required: false
  private _executeOnDelegate?: boolean | cdktf.IResolvable; 
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
  }
  public set executeOnDelegate(value: boolean | cdktf.IResolvable) {
    this._executeOnDelegate = value;
  }
  public resetExecuteOnDelegate() {
    this._executeOnDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnDelegateInput() {
    return this._executeOnDelegate;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // inherit_from_delegate - computed: false, optional: true, required: false
  private _inheritFromDelegate?: boolean | cdktf.IResolvable; 
  public get inheritFromDelegate() {
    return this.getBooleanAttribute('inherit_from_delegate');
  }
  public set inheritFromDelegate(value: boolean | cdktf.IResolvable) {
    this._inheritFromDelegate = value;
  }
  public resetInheritFromDelegate() {
    this._inheritFromDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFromDelegateInput() {
    return this._inheritFromDelegate;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // oidc_authentication - computed: false, optional: true, required: false
  private _oidcAuthentication = new PlatformConnectorGcpSecretManagerOidcAuthenticationList(this, "oidc_authentication", false);
  public get oidcAuthentication() {
    return this._oidcAuthentication;
  }
  public putOidcAuthentication(value: PlatformConnectorGcpSecretManagerOidcAuthentication[] | cdktf.IResolvable) {
    this._oidcAuthentication.internalValue = value;
  }
  public resetOidcAuthentication() {
    this._oidcAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAuthenticationInput() {
    return this._oidcAuthentication.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_ref: cdktf.stringToTerraform(this._credentialsRef),
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      execute_on_delegate: cdktf.booleanToTerraform(this._executeOnDelegate),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      inherit_from_delegate: cdktf.booleanToTerraform(this._inheritFromDelegate),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      oidc_authentication: cdktf.listMapper(platformConnectorGcpSecretManagerOidcAuthenticationToTerraform, true)(this._oidcAuthentication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_ref: {
        value: cdktf.stringToHclTerraform(this._credentialsRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_on_delegate: {
        value: cdktf.booleanToHclTerraform(this._executeOnDelegate),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inherit_from_delegate: {
        value: cdktf.booleanToHclTerraform(this._inheritFromDelegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      oidc_authentication: {
        value: cdktf.listMapperHcl(platformConnectorGcpSecretManagerOidcAuthenticationToHclTerraform, true)(this._oidcAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorGcpSecretManagerOidcAuthenticationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
