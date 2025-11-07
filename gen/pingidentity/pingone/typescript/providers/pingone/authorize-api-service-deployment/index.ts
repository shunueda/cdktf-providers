// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizeApiServiceDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the API service to deploy.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_deployment#api_service_id AuthorizeApiServiceDeployment#api_service_id}
  */
  readonly apiServiceId: string;
  /**
  * The ID of the environment to deploy the API Service in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_deployment#environment_id AuthorizeApiServiceDeployment#environment_id}
  */
  readonly environmentId: string;
  /**
  * A meta-argument map of values that, if any values are changed, will force redeployment.  Adding values to and removing values from the map will not trigger a deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_deployment#redeployment_trigger_values AuthorizeApiServiceDeployment#redeployment_trigger_values}
  */
  readonly redeploymentTriggerValues?: { [key: string]: string };
}
export interface AuthorizeApiServiceDeploymentAuthorizationVersion {
}

export function authorizeApiServiceDeploymentAuthorizationVersionToTerraform(struct?: AuthorizeApiServiceDeploymentAuthorizationVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authorizeApiServiceDeploymentAuthorizationVersionToHclTerraform(struct?: AuthorizeApiServiceDeploymentAuthorizationVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthorizeApiServiceDeploymentAuthorizationVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceDeploymentAuthorizationVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceDeploymentAuthorizationVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface AuthorizeApiServiceDeploymentDecisionEndpoint {
}

export function authorizeApiServiceDeploymentDecisionEndpointToTerraform(struct?: AuthorizeApiServiceDeploymentDecisionEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authorizeApiServiceDeploymentDecisionEndpointToHclTerraform(struct?: AuthorizeApiServiceDeploymentDecisionEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthorizeApiServiceDeploymentDecisionEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceDeploymentDecisionEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceDeploymentDecisionEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface AuthorizeApiServiceDeploymentPolicy {
}

export function authorizeApiServiceDeploymentPolicyToTerraform(struct?: AuthorizeApiServiceDeploymentPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authorizeApiServiceDeploymentPolicyToHclTerraform(struct?: AuthorizeApiServiceDeploymentPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthorizeApiServiceDeploymentPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceDeploymentPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceDeploymentPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface AuthorizeApiServiceDeploymentStatusError {
}

export function authorizeApiServiceDeploymentStatusErrorToTerraform(struct?: AuthorizeApiServiceDeploymentStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authorizeApiServiceDeploymentStatusErrorToHclTerraform(struct?: AuthorizeApiServiceDeploymentStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthorizeApiServiceDeploymentStatusErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceDeploymentStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceDeploymentStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}
export interface AuthorizeApiServiceDeploymentStatus {
}

export function authorizeApiServiceDeploymentStatusToTerraform(struct?: AuthorizeApiServiceDeploymentStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authorizeApiServiceDeploymentStatusToHclTerraform(struct?: AuthorizeApiServiceDeploymentStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthorizeApiServiceDeploymentStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceDeploymentStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceDeploymentStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // error - computed: true, optional: false, required: false
  private _error = new AuthorizeApiServiceDeploymentStatusErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_deployment pingone_authorize_api_service_deployment}
*/
export class AuthorizeApiServiceDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_authorize_api_service_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthorizeApiServiceDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthorizeApiServiceDeployment to import
  * @param importFromId The id of the existing AuthorizeApiServiceDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthorizeApiServiceDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_authorize_api_service_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service_deployment pingone_authorize_api_service_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizeApiServiceDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: AuthorizeApiServiceDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_authorize_api_service_deployment',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiServiceId = config.apiServiceId;
    this._environmentId = config.environmentId;
    this._redeploymentTriggerValues = config.redeploymentTriggerValues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_service_id - computed: false, optional: false, required: true
  private _apiServiceId?: string; 
  public get apiServiceId() {
    return this.getStringAttribute('api_service_id');
  }
  public set apiServiceId(value: string) {
    this._apiServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServiceIdInput() {
    return this._apiServiceId;
  }

  // authorization_version - computed: true, optional: false, required: false
  private _authorizationVersion = new AuthorizeApiServiceDeploymentAuthorizationVersionOutputReference(this, "authorization_version");
  public get authorizationVersion() {
    return this._authorizationVersion;
  }

  // decision_endpoint - computed: true, optional: false, required: false
  private _decisionEndpoint = new AuthorizeApiServiceDeploymentDecisionEndpointOutputReference(this, "decision_endpoint");
  public get decisionEndpoint() {
    return this._decisionEndpoint;
  }

  // deployed_at - computed: true, optional: false, required: false
  public get deployedAt() {
    return this.getStringAttribute('deployed_at');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new AuthorizeApiServiceDeploymentPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }

  // redeployment_trigger_values - computed: false, optional: true, required: false
  private _redeploymentTriggerValues?: { [key: string]: string }; 
  public get redeploymentTriggerValues() {
    return this.getStringMapAttribute('redeployment_trigger_values');
  }
  public set redeploymentTriggerValues(value: { [key: string]: string }) {
    this._redeploymentTriggerValues = value;
  }
  public resetRedeploymentTriggerValues() {
    this._redeploymentTriggerValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeploymentTriggerValuesInput() {
    return this._redeploymentTriggerValues;
  }

  // status - computed: true, optional: false, required: false
  private _status = new AuthorizeApiServiceDeploymentStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_service_id: cdktf.stringToTerraform(this._apiServiceId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      redeployment_trigger_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._redeploymentTriggerValues),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_service_id: {
        value: cdktf.stringToHclTerraform(this._apiServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redeployment_trigger_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._redeploymentTriggerValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
