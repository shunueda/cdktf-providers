// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformGitopsRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier of the GitOps repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#account_id PlatformGitopsRepository#account_id}
  */
  readonly accountId?: string;
  /**
  * Agent identifier of the GitOps repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#agent_id PlatformGitopsRepository#agent_id}
  */
  readonly agentId: string;
  /**
  * Indicates if to operate on credential set instead of repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#creds_only PlatformGitopsRepository#creds_only}
  */
  readonly credsOnly?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the repository should be deleted forcefully, regardless of existing applications using that repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#force_delete PlatformGitopsRepository#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Default: "UNSET"
  * Enum: "UNSET" "AWS_ECR" "GOOGLE_GCR"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#gen_type PlatformGitopsRepository#gen_type}
  */
  readonly genType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#id PlatformGitopsRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the GitOps repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#identifier PlatformGitopsRepository#identifier}
  */
  readonly identifier: string;
  /**
  * Organization identifier of the GitOps repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#org_id PlatformGitopsRepository#org_id}
  */
  readonly orgId?: string;
  /**
  * Project identifier of the GitOps repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#project_id PlatformGitopsRepository#project_id}
  */
  readonly projectId?: string;
  /**
  * For OCI repos, this is the interval to refresh the token to access the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#refresh_interval PlatformGitopsRepository#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * Indicates if the GitOps repository should be updated if existing and inserted if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#upsert PlatformGitopsRepository#upsert}
  */
  readonly upsert?: boolean | cdktf.IResolvable;
  /**
  * ecr_gen block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#ecr_gen PlatformGitopsRepository#ecr_gen}
  */
  readonly ecrGen?: PlatformGitopsRepositoryEcrGen;
  /**
  * gcr_gen block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#gcr_gen PlatformGitopsRepository#gcr_gen}
  */
  readonly gcrGen?: PlatformGitopsRepositoryGcrGen;
  /**
  * repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#repo PlatformGitopsRepository#repo}
  */
  readonly repo: PlatformGitopsRepositoryRepo;
  /**
  * update_mask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#update_mask PlatformGitopsRepository#update_mask}
  */
  readonly updateMask?: PlatformGitopsRepositoryUpdateMask[] | cdktf.IResolvable;
}
export interface PlatformGitopsRepositoryEcrGenJwtAuth {
  /**
  * Audience specifies the `aud` claim for the service account token If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity then this audiences will be appended to the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#audiences PlatformGitopsRepository#audiences}
  */
  readonly audiences?: string[];
  /**
  * The name of the ServiceAccount resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#name PlatformGitopsRepository#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#namespace PlatformGitopsRepository#namespace}
  */
  readonly namespace?: string;
}

export function platformGitopsRepositoryEcrGenJwtAuthToTerraform(struct?: PlatformGitopsRepositoryEcrGenJwtAuthOutputReference | PlatformGitopsRepositoryEcrGenJwtAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function platformGitopsRepositoryEcrGenJwtAuthToHclTerraform(struct?: PlatformGitopsRepositoryEcrGenJwtAuthOutputReference | PlatformGitopsRepositoryEcrGenJwtAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepositoryEcrGenJwtAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsRepositoryEcrGenJwtAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepositoryEcrGenJwtAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audiences = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audiences = value.audiences;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface PlatformGitopsRepositoryEcrGenSecretRef {
  /**
  * AWS access key id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#aws_access_key_id PlatformGitopsRepository#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * AWS secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#aws_secret_access_key PlatformGitopsRepository#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * AWS session token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#aws_session_token PlatformGitopsRepository#aws_session_token}
  */
  readonly awsSessionToken?: string;
}

export function platformGitopsRepositoryEcrGenSecretRefToTerraform(struct?: PlatformGitopsRepositoryEcrGenSecretRefOutputReference | PlatformGitopsRepositoryEcrGenSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
    aws_session_token: cdktf.stringToTerraform(struct!.awsSessionToken),
  }
}


export function platformGitopsRepositoryEcrGenSecretRefToHclTerraform(struct?: PlatformGitopsRepositoryEcrGenSecretRefOutputReference | PlatformGitopsRepositoryEcrGenSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_session_token: {
      value: cdktf.stringToHclTerraform(struct!.awsSessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepositoryEcrGenSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsRepositoryEcrGenSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    if (this._awsSessionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSessionToken = this._awsSessionToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepositoryEcrGenSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
      this._awsSessionToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
      this._awsSessionToken = value.awsSessionToken;
    }
  }

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // aws_session_token - computed: false, optional: true, required: false
  private _awsSessionToken?: string; 
  public get awsSessionToken() {
    return this.getStringAttribute('aws_session_token');
  }
  public set awsSessionToken(value: string) {
    this._awsSessionToken = value;
  }
  public resetAwsSessionToken() {
    this._awsSessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSessionTokenInput() {
    return this._awsSessionToken;
  }
}
export interface PlatformGitopsRepositoryEcrGen {
  /**
  * AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#region PlatformGitopsRepository#region}
  */
  readonly region?: string;
  /**
  * jwt_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#jwt_auth PlatformGitopsRepository#jwt_auth}
  */
  readonly jwtAuth?: PlatformGitopsRepositoryEcrGenJwtAuth;
  /**
  * secret_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#secret_ref PlatformGitopsRepository#secret_ref}
  */
  readonly secretRef?: PlatformGitopsRepositoryEcrGenSecretRef;
}

export function platformGitopsRepositoryEcrGenToTerraform(struct?: PlatformGitopsRepositoryEcrGenOutputReference | PlatformGitopsRepositoryEcrGen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    jwt_auth: platformGitopsRepositoryEcrGenJwtAuthToTerraform(struct!.jwtAuth),
    secret_ref: platformGitopsRepositoryEcrGenSecretRefToTerraform(struct!.secretRef),
  }
}


export function platformGitopsRepositoryEcrGenToHclTerraform(struct?: PlatformGitopsRepositoryEcrGenOutputReference | PlatformGitopsRepositoryEcrGen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_auth: {
      value: platformGitopsRepositoryEcrGenJwtAuthToHclTerraform(struct!.jwtAuth),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsRepositoryEcrGenJwtAuthList",
    },
    secret_ref: {
      value: platformGitopsRepositoryEcrGenSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsRepositoryEcrGenSecretRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepositoryEcrGenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsRepositoryEcrGen | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._jwtAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAuth = this._jwtAuth?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepositoryEcrGen | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._jwtAuth.internalValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._jwtAuth.internalValue = value.jwtAuth;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // jwt_auth - computed: false, optional: true, required: false
  private _jwtAuth = new PlatformGitopsRepositoryEcrGenJwtAuthOutputReference(this, "jwt_auth");
  public get jwtAuth() {
    return this._jwtAuth;
  }
  public putJwtAuth(value: PlatformGitopsRepositoryEcrGenJwtAuth) {
    this._jwtAuth.internalValue = value;
  }
  public resetJwtAuth() {
    this._jwtAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAuthInput() {
    return this._jwtAuth.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new PlatformGitopsRepositoryEcrGenSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: PlatformGitopsRepositoryEcrGenSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRef {
  /**
  * Audience specifies the `aud` claim for the service account token If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity then this audiences will be appended to the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#audiences PlatformGitopsRepository#audiences}
  */
  readonly audiences?: string[];
  /**
  * The name of the ServiceAccount resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#name PlatformGitopsRepository#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#namespace PlatformGitopsRepository#namespace}
  */
  readonly namespace?: string;
}

export function platformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRefToTerraform(struct?: PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRefOutputReference | PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function platformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRefToHclTerraform(struct?: PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRefOutputReference | PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audiences = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audiences = value.audiences;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface PlatformGitopsRepositoryGcrGenWorkloadIdentity {
  /**
  * Cluster location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#cluster_location PlatformGitopsRepository#cluster_location}
  */
  readonly clusterLocation?: string;
  /**
  * Cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#cluster_name PlatformGitopsRepository#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Cluster project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#cluster_project_id PlatformGitopsRepository#cluster_project_id}
  */
  readonly clusterProjectId?: string;
  /**
  * service_account_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#service_account_ref PlatformGitopsRepository#service_account_ref}
  */
  readonly serviceAccountRef?: PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRef;
}

export function platformGitopsRepositoryGcrGenWorkloadIdentityToTerraform(struct?: PlatformGitopsRepositoryGcrGenWorkloadIdentityOutputReference | PlatformGitopsRepositoryGcrGenWorkloadIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_location: cdktf.stringToTerraform(struct!.clusterLocation),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_project_id: cdktf.stringToTerraform(struct!.clusterProjectId),
    service_account_ref: platformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRefToTerraform(struct!.serviceAccountRef),
  }
}


export function platformGitopsRepositoryGcrGenWorkloadIdentityToHclTerraform(struct?: PlatformGitopsRepositoryGcrGenWorkloadIdentityOutputReference | PlatformGitopsRepositoryGcrGenWorkloadIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_location: {
      value: cdktf.stringToHclTerraform(struct!.clusterLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_project_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_ref: {
      value: platformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRefToHclTerraform(struct!.serviceAccountRef),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepositoryGcrGenWorkloadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsRepositoryGcrGenWorkloadIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLocation = this._clusterLocation;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterProjectId = this._clusterProjectId;
    }
    if (this._serviceAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRef = this._serviceAccountRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepositoryGcrGenWorkloadIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterLocation = undefined;
      this._clusterName = undefined;
      this._clusterProjectId = undefined;
      this._serviceAccountRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterLocation = value.clusterLocation;
      this._clusterName = value.clusterName;
      this._clusterProjectId = value.clusterProjectId;
      this._serviceAccountRef.internalValue = value.serviceAccountRef;
    }
  }

  // cluster_location - computed: false, optional: true, required: false
  private _clusterLocation?: string; 
  public get clusterLocation() {
    return this.getStringAttribute('cluster_location');
  }
  public set clusterLocation(value: string) {
    this._clusterLocation = value;
  }
  public resetClusterLocation() {
    this._clusterLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLocationInput() {
    return this._clusterLocation;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_project_id - computed: false, optional: true, required: false
  private _clusterProjectId?: string; 
  public get clusterProjectId() {
    return this.getStringAttribute('cluster_project_id');
  }
  public set clusterProjectId(value: string) {
    this._clusterProjectId = value;
  }
  public resetClusterProjectId() {
    this._clusterProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterProjectIdInput() {
    return this._clusterProjectId;
  }

  // service_account_ref - computed: false, optional: true, required: false
  private _serviceAccountRef = new PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRefOutputReference(this, "service_account_ref");
  public get serviceAccountRef() {
    return this._serviceAccountRef;
  }
  public putServiceAccountRef(value: PlatformGitopsRepositoryGcrGenWorkloadIdentityServiceAccountRef) {
    this._serviceAccountRef.internalValue = value;
  }
  public resetServiceAccountRef() {
    this._serviceAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRefInput() {
    return this._serviceAccountRef.internalValue;
  }
}
export interface PlatformGitopsRepositoryGcrGen {
  /**
  * GCP access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#access_key PlatformGitopsRepository#access_key}
  */
  readonly accessKey?: string;
  /**
  * GCP project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#project_id PlatformGitopsRepository#project_id}
  */
  readonly projectId?: string;
  /**
  * workload_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#workload_identity PlatformGitopsRepository#workload_identity}
  */
  readonly workloadIdentity?: PlatformGitopsRepositoryGcrGenWorkloadIdentity;
}

export function platformGitopsRepositoryGcrGenToTerraform(struct?: PlatformGitopsRepositoryGcrGenOutputReference | PlatformGitopsRepositoryGcrGen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    workload_identity: platformGitopsRepositoryGcrGenWorkloadIdentityToTerraform(struct!.workloadIdentity),
  }
}


export function platformGitopsRepositoryGcrGenToHclTerraform(struct?: PlatformGitopsRepositoryGcrGenOutputReference | PlatformGitopsRepositoryGcrGen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_identity: {
      value: platformGitopsRepositoryGcrGenWorkloadIdentityToHclTerraform(struct!.workloadIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsRepositoryGcrGenWorkloadIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepositoryGcrGenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsRepositoryGcrGen | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._workloadIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadIdentity = this._workloadIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepositoryGcrGen | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._projectId = undefined;
      this._workloadIdentity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._projectId = value.projectId;
      this._workloadIdentity.internalValue = value.workloadIdentity;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
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

  // workload_identity - computed: false, optional: true, required: false
  private _workloadIdentity = new PlatformGitopsRepositoryGcrGenWorkloadIdentityOutputReference(this, "workload_identity");
  public get workloadIdentity() {
    return this._workloadIdentity;
  }
  public putWorkloadIdentity(value: PlatformGitopsRepositoryGcrGenWorkloadIdentity) {
    this._workloadIdentity.internalValue = value;
  }
  public resetWorkloadIdentity() {
    this._workloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityInput() {
    return this._workloadIdentity.internalValue;
  }
}
export interface PlatformGitopsRepositoryRepo {
  /**
  * Identifies the authentication method used to connect to the repository. Possible values: "HTTPS" "SSH" "GITHUB" "HTTPS_ANONYMOUS", "GITHUB_ENTERPRISE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#connection_type PlatformGitopsRepository#connection_type}
  */
  readonly connectionType: string;
  /**
  * Indicates if git-lfs support must be enabled for this repo. This is valid only for Git repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#enable_lfs PlatformGitopsRepository#enable_lfs}
  */
  readonly enableLfs?: boolean | cdktf.IResolvable;
  /**
  * Indicates if helm-oci support must be enabled for this repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#enable_oci PlatformGitopsRepository#enable_oci}
  */
  readonly enableOci?: boolean | cdktf.IResolvable;
  /**
  * Base URL of GitHub Enterprise installation. If left empty, this defaults to https://api.github.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#github_app_enterprise_base_url PlatformGitopsRepository#github_app_enterprise_base_url}
  */
  readonly githubAppEnterpriseBaseUrl?: string;
  /**
  * Id of the GitHub app used to access the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#github_app_id PlatformGitopsRepository#github_app_id}
  */
  readonly githubAppId?: string;
  /**
  * Installation id of the GitHub app used to access the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#github_app_installation_id PlatformGitopsRepository#github_app_installation_id}
  */
  readonly githubAppInstallationId?: string;
  /**
  * GitHub app private key PEM data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#github_app_private_key PlatformGitopsRepository#github_app_private_key}
  */
  readonly githubAppPrivateKey?: string;
  /**
  * Indicates if the connection to the repository ignores any errors when verifying TLS certificates or SSH host keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#insecure PlatformGitopsRepository#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Indicates if InsecureIgnoreHostKey should be used. Insecure is favored used only for git repos. Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#insecure_ignore_host_key PlatformGitopsRepository#insecure_ignore_host_key}
  */
  readonly insecureIgnoreHostKey?: boolean | cdktf.IResolvable;
  /**
  * Name to be used for this repo. Only used with Helm repos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#name PlatformGitopsRepository#name}
  */
  readonly name?: string;
  /**
  * Password or PAT to be used for authenticating the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#password PlatformGitopsRepository#password}
  */
  readonly password?: string;
  /**
  * The ArgoCD project name corresponding to this GitOps repository. An empty string means that the GitOps repository belongs to the default project created by Harness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#project PlatformGitopsRepository#project}
  */
  readonly project?: string;
  /**
  * The HTTP/HTTPS proxy used to access the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#proxy PlatformGitopsRepository#proxy}
  */
  readonly proxy?: string;
  /**
  * URL to the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#repo PlatformGitopsRepository#repo}
  */
  readonly repo: string;
  /**
  * SSH Key in PEM format for authenticating the repository. Used only for Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#ssh_private_key PlatformGitopsRepository#ssh_private_key}
  */
  readonly sshPrivateKey?: string;
  /**
  * Certificate in PEM format for authenticating at the repo server. This is used for mTLS. The value should be base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#tls_client_cert_data PlatformGitopsRepository#tls_client_cert_data}
  */
  readonly tlsClientCertData?: string;
  /**
  * Private key in PEM format for authenticating at the repo server. This is used for mTLS. The value should be base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#tls_client_cert_key PlatformGitopsRepository#tls_client_cert_key}
  */
  readonly tlsClientCertKey?: string;
  /**
  * Type specifies the type of the repo. Can be either "git" or "helm. "git" is assumed if empty or absent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#type_ PlatformGitopsRepository#type_}
  */
  readonly type?: string;
  /**
  * Username to be used for authenticating the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#username PlatformGitopsRepository#username}
  */
  readonly username?: string;
}

export function platformGitopsRepositoryRepoToTerraform(struct?: PlatformGitopsRepositoryRepoOutputReference | PlatformGitopsRepositoryRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    enable_lfs: cdktf.booleanToTerraform(struct!.enableLfs),
    enable_oci: cdktf.booleanToTerraform(struct!.enableOci),
    github_app_enterprise_base_url: cdktf.stringToTerraform(struct!.githubAppEnterpriseBaseUrl),
    github_app_id: cdktf.stringToTerraform(struct!.githubAppId),
    github_app_installation_id: cdktf.stringToTerraform(struct!.githubAppInstallationId),
    github_app_private_key: cdktf.stringToTerraform(struct!.githubAppPrivateKey),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    insecure_ignore_host_key: cdktf.booleanToTerraform(struct!.insecureIgnoreHostKey),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    project: cdktf.stringToTerraform(struct!.project),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    repo: cdktf.stringToTerraform(struct!.repo),
    ssh_private_key: cdktf.stringToTerraform(struct!.sshPrivateKey),
    tls_client_cert_data: cdktf.stringToTerraform(struct!.tlsClientCertData),
    tls_client_cert_key: cdktf.stringToTerraform(struct!.tlsClientCertKey),
    type_: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function platformGitopsRepositoryRepoToHclTerraform(struct?: PlatformGitopsRepositoryRepoOutputReference | PlatformGitopsRepositoryRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_lfs: {
      value: cdktf.booleanToHclTerraform(struct!.enableLfs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_oci: {
      value: cdktf.booleanToHclTerraform(struct!.enableOci),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    github_app_enterprise_base_url: {
      value: cdktf.stringToHclTerraform(struct!.githubAppEnterpriseBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_app_id: {
      value: cdktf.stringToHclTerraform(struct!.githubAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_app_installation_id: {
      value: cdktf.stringToHclTerraform(struct!.githubAppInstallationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_app_private_key: {
      value: cdktf.stringToHclTerraform(struct!.githubAppPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_ignore_host_key: {
      value: cdktf.booleanToHclTerraform(struct!.insecureIgnoreHostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_private_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert_data: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCertData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCertKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepositoryRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsRepositoryRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._enableLfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLfs = this._enableLfs;
    }
    if (this._enableOci !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOci = this._enableOci;
    }
    if (this._githubAppEnterpriseBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubAppEnterpriseBaseUrl = this._githubAppEnterpriseBaseUrl;
    }
    if (this._githubAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubAppId = this._githubAppId;
    }
    if (this._githubAppInstallationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubAppInstallationId = this._githubAppInstallationId;
    }
    if (this._githubAppPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubAppPrivateKey = this._githubAppPrivateKey;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._insecureIgnoreHostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureIgnoreHostKey = this._insecureIgnoreHostKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._sshPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKey = this._sshPrivateKey;
    }
    if (this._tlsClientCertData !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCertData = this._tlsClientCertData;
    }
    if (this._tlsClientCertKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCertKey = this._tlsClientCertKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepositoryRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionType = undefined;
      this._enableLfs = undefined;
      this._enableOci = undefined;
      this._githubAppEnterpriseBaseUrl = undefined;
      this._githubAppId = undefined;
      this._githubAppInstallationId = undefined;
      this._githubAppPrivateKey = undefined;
      this._insecure = undefined;
      this._insecureIgnoreHostKey = undefined;
      this._name = undefined;
      this._password = undefined;
      this._project = undefined;
      this._proxy = undefined;
      this._repo = undefined;
      this._sshPrivateKey = undefined;
      this._tlsClientCertData = undefined;
      this._tlsClientCertKey = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionType = value.connectionType;
      this._enableLfs = value.enableLfs;
      this._enableOci = value.enableOci;
      this._githubAppEnterpriseBaseUrl = value.githubAppEnterpriseBaseUrl;
      this._githubAppId = value.githubAppId;
      this._githubAppInstallationId = value.githubAppInstallationId;
      this._githubAppPrivateKey = value.githubAppPrivateKey;
      this._insecure = value.insecure;
      this._insecureIgnoreHostKey = value.insecureIgnoreHostKey;
      this._name = value.name;
      this._password = value.password;
      this._project = value.project;
      this._proxy = value.proxy;
      this._repo = value.repo;
      this._sshPrivateKey = value.sshPrivateKey;
      this._tlsClientCertData = value.tlsClientCertData;
      this._tlsClientCertKey = value.tlsClientCertKey;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // enable_lfs - computed: false, optional: true, required: false
  private _enableLfs?: boolean | cdktf.IResolvable; 
  public get enableLfs() {
    return this.getBooleanAttribute('enable_lfs');
  }
  public set enableLfs(value: boolean | cdktf.IResolvable) {
    this._enableLfs = value;
  }
  public resetEnableLfs() {
    this._enableLfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLfsInput() {
    return this._enableLfs;
  }

  // enable_oci - computed: false, optional: true, required: false
  private _enableOci?: boolean | cdktf.IResolvable; 
  public get enableOci() {
    return this.getBooleanAttribute('enable_oci');
  }
  public set enableOci(value: boolean | cdktf.IResolvable) {
    this._enableOci = value;
  }
  public resetEnableOci() {
    this._enableOci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOciInput() {
    return this._enableOci;
  }

  // github_app_enterprise_base_url - computed: false, optional: true, required: false
  private _githubAppEnterpriseBaseUrl?: string; 
  public get githubAppEnterpriseBaseUrl() {
    return this.getStringAttribute('github_app_enterprise_base_url');
  }
  public set githubAppEnterpriseBaseUrl(value: string) {
    this._githubAppEnterpriseBaseUrl = value;
  }
  public resetGithubAppEnterpriseBaseUrl() {
    this._githubAppEnterpriseBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppEnterpriseBaseUrlInput() {
    return this._githubAppEnterpriseBaseUrl;
  }

  // github_app_id - computed: true, optional: true, required: false
  private _githubAppId?: string; 
  public get githubAppId() {
    return this.getStringAttribute('github_app_id');
  }
  public set githubAppId(value: string) {
    this._githubAppId = value;
  }
  public resetGithubAppId() {
    this._githubAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppIdInput() {
    return this._githubAppId;
  }

  // github_app_installation_id - computed: true, optional: true, required: false
  private _githubAppInstallationId?: string; 
  public get githubAppInstallationId() {
    return this.getStringAttribute('github_app_installation_id');
  }
  public set githubAppInstallationId(value: string) {
    this._githubAppInstallationId = value;
  }
  public resetGithubAppInstallationId() {
    this._githubAppInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppInstallationIdInput() {
    return this._githubAppInstallationId;
  }

  // github_app_private_key - computed: true, optional: true, required: false
  private _githubAppPrivateKey?: string; 
  public get githubAppPrivateKey() {
    return this.getStringAttribute('github_app_private_key');
  }
  public set githubAppPrivateKey(value: string) {
    this._githubAppPrivateKey = value;
  }
  public resetGithubAppPrivateKey() {
    this._githubAppPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppPrivateKeyInput() {
    return this._githubAppPrivateKey;
  }

  // inherited_creds - computed: true, optional: false, required: false
  public get inheritedCreds() {
    return this.getBooleanAttribute('inherited_creds');
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // insecure_ignore_host_key - computed: false, optional: true, required: false
  private _insecureIgnoreHostKey?: boolean | cdktf.IResolvable; 
  public get insecureIgnoreHostKey() {
    return this.getBooleanAttribute('insecure_ignore_host_key');
  }
  public set insecureIgnoreHostKey(value: boolean | cdktf.IResolvable) {
    this._insecureIgnoreHostKey = value;
  }
  public resetInsecureIgnoreHostKey() {
    this._insecureIgnoreHostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureIgnoreHostKeyInput() {
    return this._insecureIgnoreHostKey;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // ssh_private_key - computed: true, optional: true, required: false
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  public resetSshPrivateKey() {
    this._sshPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }

  // tls_client_cert_data - computed: true, optional: true, required: false
  private _tlsClientCertData?: string; 
  public get tlsClientCertData() {
    return this.getStringAttribute('tls_client_cert_data');
  }
  public set tlsClientCertData(value: string) {
    this._tlsClientCertData = value;
  }
  public resetTlsClientCertData() {
    this._tlsClientCertData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertDataInput() {
    return this._tlsClientCertData;
  }

  // tls_client_cert_key - computed: true, optional: true, required: false
  private _tlsClientCertKey?: string; 
  public get tlsClientCertKey() {
    return this.getStringAttribute('tls_client_cert_key');
  }
  public set tlsClientCertKey(value: string) {
    this._tlsClientCertKey = value;
  }
  public resetTlsClientCertKey() {
    this._tlsClientCertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertKeyInput() {
    return this._tlsClientCertKey;
  }

  // type_ - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface PlatformGitopsRepositoryUpdateMask {
  /**
  * The set of field mask paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#paths PlatformGitopsRepository#paths}
  */
  readonly paths?: string[];
}

export function platformGitopsRepositoryUpdateMaskToTerraform(struct?: PlatformGitopsRepositoryUpdateMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function platformGitopsRepositoryUpdateMaskToHclTerraform(struct?: PlatformGitopsRepositoryUpdateMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepositoryUpdateMaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsRepositoryUpdateMask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepositoryUpdateMask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
    }
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}

export class PlatformGitopsRepositoryUpdateMaskList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsRepositoryUpdateMask[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsRepositoryUpdateMaskOutputReference {
    return new PlatformGitopsRepositoryUpdateMaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository harness_platform_gitops_repository}
*/
export class PlatformGitopsRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_gitops_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformGitopsRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformGitopsRepository to import
  * @param importFromId The id of the existing PlatformGitopsRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformGitopsRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_gitops_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repository harness_platform_gitops_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformGitopsRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformGitopsRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_gitops_repository',
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
    this._accountId = config.accountId;
    this._agentId = config.agentId;
    this._credsOnly = config.credsOnly;
    this._forceDelete = config.forceDelete;
    this._genType = config.genType;
    this._id = config.id;
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._refreshInterval = config.refreshInterval;
    this._upsert = config.upsert;
    this._ecrGen.internalValue = config.ecrGen;
    this._gcrGen.internalValue = config.gcrGen;
    this._repo.internalValue = config.repo;
    this._updateMask.internalValue = config.updateMask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // creds_only - computed: false, optional: true, required: false
  private _credsOnly?: boolean | cdktf.IResolvable; 
  public get credsOnly() {
    return this.getBooleanAttribute('creds_only');
  }
  public set credsOnly(value: boolean | cdktf.IResolvable) {
    this._credsOnly = value;
  }
  public resetCredsOnly() {
    this._credsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credsOnlyInput() {
    return this._credsOnly;
  }

  // force_delete - computed: false, optional: true, required: false
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

  // gen_type - computed: false, optional: true, required: false
  private _genType?: string; 
  public get genType() {
    return this.getStringAttribute('gen_type');
  }
  public set genType(value: string) {
    this._genType = value;
  }
  public resetGenType() {
    this._genType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genTypeInput() {
    return this._genType;
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

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // upsert - computed: false, optional: true, required: false
  private _upsert?: boolean | cdktf.IResolvable; 
  public get upsert() {
    return this.getBooleanAttribute('upsert');
  }
  public set upsert(value: boolean | cdktf.IResolvable) {
    this._upsert = value;
  }
  public resetUpsert() {
    this._upsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsertInput() {
    return this._upsert;
  }

  // ecr_gen - computed: false, optional: true, required: false
  private _ecrGen = new PlatformGitopsRepositoryEcrGenOutputReference(this, "ecr_gen");
  public get ecrGen() {
    return this._ecrGen;
  }
  public putEcrGen(value: PlatformGitopsRepositoryEcrGen) {
    this._ecrGen.internalValue = value;
  }
  public resetEcrGen() {
    this._ecrGen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrGenInput() {
    return this._ecrGen.internalValue;
  }

  // gcr_gen - computed: false, optional: true, required: false
  private _gcrGen = new PlatformGitopsRepositoryGcrGenOutputReference(this, "gcr_gen");
  public get gcrGen() {
    return this._gcrGen;
  }
  public putGcrGen(value: PlatformGitopsRepositoryGcrGen) {
    this._gcrGen.internalValue = value;
  }
  public resetGcrGen() {
    this._gcrGen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcrGenInput() {
    return this._gcrGen.internalValue;
  }

  // repo - computed: false, optional: false, required: true
  private _repo = new PlatformGitopsRepositoryRepoOutputReference(this, "repo");
  public get repo() {
    return this._repo;
  }
  public putRepo(value: PlatformGitopsRepositoryRepo) {
    this._repo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo.internalValue;
  }

  // update_mask - computed: false, optional: true, required: false
  private _updateMask = new PlatformGitopsRepositoryUpdateMaskList(this, "update_mask", false);
  public get updateMask() {
    return this._updateMask;
  }
  public putUpdateMask(value: PlatformGitopsRepositoryUpdateMask[] | cdktf.IResolvable) {
    this._updateMask.internalValue = value;
  }
  public resetUpdateMask() {
    this._updateMask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMaskInput() {
    return this._updateMask.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      agent_id: cdktf.stringToTerraform(this._agentId),
      creds_only: cdktf.booleanToTerraform(this._credsOnly),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      gen_type: cdktf.stringToTerraform(this._genType),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      refresh_interval: cdktf.stringToTerraform(this._refreshInterval),
      upsert: cdktf.booleanToTerraform(this._upsert),
      ecr_gen: platformGitopsRepositoryEcrGenToTerraform(this._ecrGen.internalValue),
      gcr_gen: platformGitopsRepositoryGcrGenToTerraform(this._gcrGen.internalValue),
      repo: platformGitopsRepositoryRepoToTerraform(this._repo.internalValue),
      update_mask: cdktf.listMapper(platformGitopsRepositoryUpdateMaskToTerraform, true)(this._updateMask.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creds_only: {
        value: cdktf.booleanToHclTerraform(this._credsOnly),
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
      gen_type: {
        value: cdktf.stringToHclTerraform(this._genType),
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
      refresh_interval: {
        value: cdktf.stringToHclTerraform(this._refreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upsert: {
        value: cdktf.booleanToHclTerraform(this._upsert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ecr_gen: {
        value: platformGitopsRepositoryEcrGenToHclTerraform(this._ecrGen.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformGitopsRepositoryEcrGenList",
      },
      gcr_gen: {
        value: platformGitopsRepositoryGcrGenToHclTerraform(this._gcrGen.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformGitopsRepositoryGcrGenList",
      },
      repo: {
        value: platformGitopsRepositoryRepoToHclTerraform(this._repo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformGitopsRepositoryRepoList",
      },
      update_mask: {
        value: cdktf.listMapperHcl(platformGitopsRepositoryUpdateMaskToHclTerraform, true)(this._updateMask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformGitopsRepositoryUpdateMaskList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
