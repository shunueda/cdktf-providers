// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorGcpKmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set this flag to set this secret manager as default secret manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#default PlatformConnectorGcpKms#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#description PlatformConnectorGcpKms#description}
  */
  readonly description?: string;
  /**
  * Enable this flag to execute on Delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#execute_on_delegate PlatformConnectorGcpKms#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * The project ID of the GCP KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#gcp_project_id PlatformConnectorGcpKms#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#id PlatformConnectorGcpKms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#identifier PlatformConnectorGcpKms#identifier}
  */
  readonly identifier: string;
  /**
  * The key name of the GCP KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#key_name PlatformConnectorGcpKms#key_name}
  */
  readonly keyName: string;
  /**
  * The key ring of the GCP KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#key_ring PlatformConnectorGcpKms#key_ring}
  */
  readonly keyRing: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#name PlatformConnectorGcpKms#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#org_id PlatformConnectorGcpKms#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#project_id PlatformConnectorGcpKms#project_id}
  */
  readonly projectId?: string;
  /**
  * The region of the GCP KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#region PlatformConnectorGcpKms#region}
  */
  readonly region: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#tags PlatformConnectorGcpKms#tags}
  */
  readonly tags?: string[];
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#manual PlatformConnectorGcpKms#manual}
  */
  readonly manual?: PlatformConnectorGcpKmsManual;
  /**
  * oidc_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#oidc_authentication PlatformConnectorGcpKms#oidc_authentication}
  */
  readonly oidcAuthentication?: PlatformConnectorGcpKmsOidcAuthentication[] | cdktf.IResolvable;
}
export interface PlatformConnectorGcpKmsManual {
  /**
  * Reference to the Harness secret containing the secret key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#credentials PlatformConnectorGcpKms#credentials}
  */
  readonly credentials: string;
  /**
  * The delegates to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#delegate_selectors PlatformConnectorGcpKms#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
}

export function platformConnectorGcpKmsManualToTerraform(struct?: PlatformConnectorGcpKmsManualOutputReference | PlatformConnectorGcpKmsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
  }
}


export function platformConnectorGcpKmsManualToHclTerraform(struct?: PlatformConnectorGcpKmsManualOutputReference | PlatformConnectorGcpKmsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegate_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegateSelectors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGcpKmsManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGcpKmsManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGcpKmsManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentials = undefined;
      this._delegateSelectors = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentials = value.credentials;
      this._delegateSelectors = value.delegateSelectors;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
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
}
export interface PlatformConnectorGcpKmsOidcAuthentication {
  /**
  * The delegates to inherit the credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#delegate_selectors PlatformConnectorGcpKms#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * The project number of the GCP project that is used to create the workload identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#gcp_project_id PlatformConnectorGcpKms#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * The OIDC provider ID value configured in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#provider_id PlatformConnectorGcpKms#provider_id}
  */
  readonly providerId: string;
  /**
  * The service account linked to workload identity pool while setting GCP workload identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#service_account_email PlatformConnectorGcpKms#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * The workload pool ID value created in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#workload_pool_id PlatformConnectorGcpKms#workload_pool_id}
  */
  readonly workloadPoolId: string;
}

export function platformConnectorGcpKmsOidcAuthenticationToTerraform(struct?: PlatformConnectorGcpKmsOidcAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
    gcp_project_id: cdktf.stringToTerraform(struct!.gcpProjectId),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    workload_pool_id: cdktf.stringToTerraform(struct!.workloadPoolId),
  }
}


export function platformConnectorGcpKmsOidcAuthenticationToHclTerraform(struct?: PlatformConnectorGcpKmsOidcAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegate_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegateSelectors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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

export class PlatformConnectorGcpKmsOidcAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformConnectorGcpKmsOidcAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
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

  public set internalValue(value: PlatformConnectorGcpKmsOidcAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegateSelectors = undefined;
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
      this._delegateSelectors = value.delegateSelectors;
      this._gcpProjectId = value.gcpProjectId;
      this._providerId = value.providerId;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._workloadPoolId = value.workloadPoolId;
    }
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

export class PlatformConnectorGcpKmsOidcAuthenticationList extends cdktf.ComplexList {
  public internalValue? : PlatformConnectorGcpKmsOidcAuthentication[] | cdktf.IResolvable

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
  public get(index: number): PlatformConnectorGcpKmsOidcAuthenticationOutputReference {
    return new PlatformConnectorGcpKmsOidcAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms harness_platform_connector_gcp_kms}
*/
export class PlatformConnectorGcpKms extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_gcp_kms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorGcpKms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorGcpKms to import
  * @param importFromId The id of the existing PlatformConnectorGcpKms that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorGcpKms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_gcp_kms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_gcp_kms harness_platform_connector_gcp_kms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorGcpKmsConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorGcpKmsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_gcp_kms',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._description = config.description;
    this._executeOnDelegate = config.executeOnDelegate;
    this._gcpProjectId = config.gcpProjectId;
    this._id = config.id;
    this._identifier = config.identifier;
    this._keyName = config.keyName;
    this._keyRing = config.keyRing;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._region = config.region;
    this._tags = config.tags;
    this._manual.internalValue = config.manual;
    this._oidcAuthentication.internalValue = config.oidcAuthentication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_ring - computed: false, optional: false, required: true
  private _keyRing?: string; 
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingInput() {
    return this._keyRing;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // manual - computed: false, optional: true, required: false
  private _manual = new PlatformConnectorGcpKmsManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: PlatformConnectorGcpKmsManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }

  // oidc_authentication - computed: false, optional: true, required: false
  private _oidcAuthentication = new PlatformConnectorGcpKmsOidcAuthenticationList(this, "oidc_authentication", false);
  public get oidcAuthentication() {
    return this._oidcAuthentication;
  }
  public putOidcAuthentication(value: PlatformConnectorGcpKmsOidcAuthentication[] | cdktf.IResolvable) {
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
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      execute_on_delegate: cdktf.booleanToTerraform(this._executeOnDelegate),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      key_name: cdktf.stringToTerraform(this._keyName),
      key_ring: cdktf.stringToTerraform(this._keyRing),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      manual: platformConnectorGcpKmsManualToTerraform(this._manual.internalValue),
      oidc_authentication: cdktf.listMapper(platformConnectorGcpKmsOidcAuthenticationToTerraform, true)(this._oidcAuthentication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_ring: {
        value: cdktf.stringToHclTerraform(this._keyRing),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      manual: {
        value: platformConnectorGcpKmsManualToHclTerraform(this._manual.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorGcpKmsManualList",
      },
      oidc_authentication: {
        value: cdktf.listMapperHcl(platformConnectorGcpKmsOidcAuthenticationToHclTerraform, true)(this._oidcAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorGcpKmsOidcAuthenticationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
