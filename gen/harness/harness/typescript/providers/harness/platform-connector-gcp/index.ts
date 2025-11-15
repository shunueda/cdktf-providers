// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#description PlatformConnectorGcp#description}
  */
  readonly description?: string;
  /**
  * Enable this flag to execute on Delegate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#execute_on_delegate PlatformConnectorGcp#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Enable this flag for force deletion of connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#force_delete PlatformConnectorGcp#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#id PlatformConnectorGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#identifier PlatformConnectorGcp#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#name PlatformConnectorGcp#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#org_id PlatformConnectorGcp#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#project_id PlatformConnectorGcp#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#tags PlatformConnectorGcp#tags}
  */
  readonly tags?: string[];
  /**
  * inherit_from_delegate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#inherit_from_delegate PlatformConnectorGcp#inherit_from_delegate}
  */
  readonly inheritFromDelegate?: PlatformConnectorGcpInheritFromDelegate[] | cdktf.IResolvable;
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#manual PlatformConnectorGcp#manual}
  */
  readonly manual?: PlatformConnectorGcpManual;
  /**
  * oidc_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#oidc_authentication PlatformConnectorGcp#oidc_authentication}
  */
  readonly oidcAuthentication?: PlatformConnectorGcpOidcAuthentication[] | cdktf.IResolvable;
}
export interface PlatformConnectorGcpInheritFromDelegate {
  /**
  * The delegates to inherit the credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#delegate_selectors PlatformConnectorGcp#delegate_selectors}
  */
  readonly delegateSelectors: string[];
}

export function platformConnectorGcpInheritFromDelegateToTerraform(struct?: PlatformConnectorGcpInheritFromDelegate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
  }
}


export function platformConnectorGcpInheritFromDelegateToHclTerraform(struct?: PlatformConnectorGcpInheritFromDelegate | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGcpInheritFromDelegateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformConnectorGcpInheritFromDelegate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGcpInheritFromDelegate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegateSelectors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delegateSelectors = value.delegateSelectors;
    }
  }

  // delegate_selectors - computed: false, optional: false, required: true
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
  }
}

export class PlatformConnectorGcpInheritFromDelegateList extends cdktf.ComplexList {
  public internalValue? : PlatformConnectorGcpInheritFromDelegate[] | cdktf.IResolvable

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
  public get(index: number): PlatformConnectorGcpInheritFromDelegateOutputReference {
    return new PlatformConnectorGcpInheritFromDelegateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformConnectorGcpManual {
  /**
  * The delegates to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#delegate_selectors PlatformConnectorGcp#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Reference to the Harness secret containing the secret key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#secret_key_ref PlatformConnectorGcp#secret_key_ref}
  */
  readonly secretKeyRef: string;
}

export function platformConnectorGcpManualToTerraform(struct?: PlatformConnectorGcpManualOutputReference | PlatformConnectorGcpManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
    secret_key_ref: cdktf.stringToTerraform(struct!.secretKeyRef),
  }
}


export function platformConnectorGcpManualToHclTerraform(struct?: PlatformConnectorGcpManualOutputReference | PlatformConnectorGcpManual): any {
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
    secret_key_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGcpManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGcpManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    if (this._secretKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGcpManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delegateSelectors = undefined;
      this._secretKeyRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delegateSelectors = value.delegateSelectors;
      this._secretKeyRef = value.secretKeyRef;
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

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef?: string; 
  public get secretKeyRef() {
    return this.getStringAttribute('secret_key_ref');
  }
  public set secretKeyRef(value: string) {
    this._secretKeyRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef;
  }
}
export interface PlatformConnectorGcpOidcAuthentication {
  /**
  * The delegates to inherit the credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#delegate_selectors PlatformConnectorGcp#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * The project number of the GCP project that is used to create the workload identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#gcp_project_id PlatformConnectorGcp#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * The OIDC provider ID value configured in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#provider_id PlatformConnectorGcp#provider_id}
  */
  readonly providerId: string;
  /**
  * The service account linked to workload identity pool while setting GCP workload identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#service_account_email PlatformConnectorGcp#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * The workload pool ID value created in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#workload_pool_id PlatformConnectorGcp#workload_pool_id}
  */
  readonly workloadPoolId: string;
}

export function platformConnectorGcpOidcAuthenticationToTerraform(struct?: PlatformConnectorGcpOidcAuthentication | cdktf.IResolvable): any {
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


export function platformConnectorGcpOidcAuthenticationToHclTerraform(struct?: PlatformConnectorGcpOidcAuthentication | cdktf.IResolvable): any {
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

export class PlatformConnectorGcpOidcAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformConnectorGcpOidcAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformConnectorGcpOidcAuthentication | cdktf.IResolvable | undefined) {
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

export class PlatformConnectorGcpOidcAuthenticationList extends cdktf.ComplexList {
  public internalValue? : PlatformConnectorGcpOidcAuthentication[] | cdktf.IResolvable

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
  public get(index: number): PlatformConnectorGcpOidcAuthenticationOutputReference {
    return new PlatformConnectorGcpOidcAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp harness_platform_connector_gcp}
*/
export class PlatformConnectorGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorGcp to import
  * @param importFromId The id of the existing PlatformConnectorGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp harness_platform_connector_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorGcpConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_gcp',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._executeOnDelegate = config.executeOnDelegate;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._inheritFromDelegate.internalValue = config.inheritFromDelegate;
    this._manual.internalValue = config.manual;
    this._oidcAuthentication.internalValue = config.oidcAuthentication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // execute_on_delegate - computed: true, optional: true, required: false
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

  // force_delete - computed: true, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // inherit_from_delegate - computed: false, optional: true, required: false
  private _inheritFromDelegate = new PlatformConnectorGcpInheritFromDelegateList(this, "inherit_from_delegate", false);
  public get inheritFromDelegate() {
    return this._inheritFromDelegate;
  }
  public putInheritFromDelegate(value: PlatformConnectorGcpInheritFromDelegate[] | cdktf.IResolvable) {
    this._inheritFromDelegate.internalValue = value;
  }
  public resetInheritFromDelegate() {
    this._inheritFromDelegate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFromDelegateInput() {
    return this._inheritFromDelegate.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new PlatformConnectorGcpManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: PlatformConnectorGcpManual) {
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
  private _oidcAuthentication = new PlatformConnectorGcpOidcAuthenticationList(this, "oidc_authentication", false);
  public get oidcAuthentication() {
    return this._oidcAuthentication;
  }
  public putOidcAuthentication(value: PlatformConnectorGcpOidcAuthentication[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      execute_on_delegate: cdktf.booleanToTerraform(this._executeOnDelegate),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      inherit_from_delegate: cdktf.listMapper(platformConnectorGcpInheritFromDelegateToTerraform, true)(this._inheritFromDelegate.internalValue),
      manual: platformConnectorGcpManualToTerraform(this._manual.internalValue),
      oidc_authentication: cdktf.listMapper(platformConnectorGcpOidcAuthenticationToTerraform, true)(this._oidcAuthentication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      inherit_from_delegate: {
        value: cdktf.listMapperHcl(platformConnectorGcpInheritFromDelegateToHclTerraform, true)(this._inheritFromDelegate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorGcpInheritFromDelegateList",
      },
      manual: {
        value: platformConnectorGcpManualToHclTerraform(this._manual.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorGcpManualList",
      },
      oidc_authentication: {
        value: cdktf.listMapperHcl(platformConnectorGcpOidcAuthenticationToHclTerraform, true)(this._oidcAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorGcpOidcAuthenticationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
