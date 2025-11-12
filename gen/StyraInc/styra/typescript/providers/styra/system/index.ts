// https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#bundle_download System#bundle_download}
  */
  readonly bundleDownload?: SystemBundleDownload;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#bundle_registry System#bundle_registry}
  */
  readonly bundleRegistry?: SystemBundleRegistry;
  /**
  * only put data in the context bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#context_bundle_data_only System#context_bundle_data_only}
  */
  readonly contextBundleDataOnly?: boolean | cdktf.IResolvable;
  /**
  * list of path prefixes for policies/datasources that go into the second (context) bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#context_bundle_roots System#context_bundle_roots}
  */
  readonly contextBundleRoots?: string[];
  /**
  * location of key attributes and additional columns in the decisions grouped by policy entry point path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#decision_mappings System#decision_mappings}
  */
  readonly decisionMappings?: { [key: string]: SystemDecisionMappings } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#deployment_parameters System#deployment_parameters}
  */
  readonly deploymentParameters?: SystemDeploymentParameters;
  /**
  * description for the system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#description System#description}
  */
  readonly description?: string;
  /**
  * error/warning configuration: one of "all", "errors", "none"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#error_setting System#error_setting}
  */
  readonly errorSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#external_bundles System#external_bundles}
  */
  readonly externalBundles?: SystemExternalBundles;
  /**
  * optional parameter to map Styra DAS system ID to external IDs used by a customer. (mapping can be retrieved with TranslateExternalIds operation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#external_id System#external_id}
  */
  readonly externalId?: string;
  /**
  * when set, stacks that are not linked to this system will be filtered out of its bundles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#filter_stacks System#filter_stacks}
  */
  readonly filterStacks?: boolean | cdktf.IResolvable;
  /**
  * optional parameter to specify the Kafka topic where the decision logs for this system should be published (ignored if Kafka is not configured for the workspace for decision export)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#kafka_topic System#kafka_topic}
  */
  readonly kafkaTopic?: string;
  /**
  * enable mock OPAs for this system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#mock_opa_enabled System#mock_opa_enabled}
  */
  readonly mockOpaEnabled?: boolean | cdktf.IResolvable;
  /**
  * system name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#name System#name}
  */
  readonly name: string;
  /**
  * prevents users from modifying policies using Styra UIs. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#read_only System#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * if set to 'false', only deletes the system configuration and does not delete associated objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#recursive System#recursive}
  */
  readonly recursive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#source_control System#source_control}
  */
  readonly sourceControl?: SystemSourceControl;
  /**
  * system type e.g. kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#type System#type}
  */
  readonly type: string;
  /**
  * system type parameter values (for template.* types)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#type_parameters System#type_parameters}
  */
  readonly typeParameters?: SystemTypeParameters;
}
export interface SystemAuthzRoleBindings {
}

export function systemAuthzRoleBindingsToTerraform(struct?: SystemAuthzRoleBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemAuthzRoleBindingsToHclTerraform(struct?: SystemAuthzRoleBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemAuthzRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAuthzRoleBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAuthzRoleBindings | undefined) {
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

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
}

export class SystemAuthzRoleBindingsList extends cdktf.ComplexList {

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
  public get(index: number): SystemAuthzRoleBindingsOutputReference {
    return new SystemAuthzRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAuthz {
}

export function systemAuthzToTerraform(struct?: SystemAuthz): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemAuthzToHclTerraform(struct?: SystemAuthz): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemAuthzOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemAuthz | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAuthz | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_bindings - computed: true, optional: false, required: false
  private _roleBindings = new SystemAuthzRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
}
export interface SystemBundleDownload {
  /**
  * enabled delta bundles on bundle download. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#delta_bundles System#delta_bundles}
  */
  readonly deltaBundles?: boolean | cdktf.IResolvable;
}

export function systemBundleDownloadToTerraform(struct?: SystemBundleDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delta_bundles: cdktf.booleanToTerraform(struct!.deltaBundles),
  }
}


export function systemBundleDownloadToHclTerraform(struct?: SystemBundleDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delta_bundles: {
      value: cdktf.booleanToHclTerraform(struct!.deltaBundles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBundleDownloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemBundleDownload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaBundles !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaBundles = this._deltaBundles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBundleDownload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deltaBundles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deltaBundles = value.deltaBundles;
    }
  }

  // delta_bundles - computed: true, optional: true, required: false
  private _deltaBundles?: boolean | cdktf.IResolvable; 
  public get deltaBundles() {
    return this.getBooleanAttribute('delta_bundles');
  }
  public set deltaBundles(value: boolean | cdktf.IResolvable) {
    this._deltaBundles = value;
  }
  public resetDeltaBundles() {
    this._deltaBundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaBundlesInput() {
    return this._deltaBundles;
  }
}
export interface SystemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials {
}

export function systemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsToTerraform(struct?: SystemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsToHclTerraform(struct?: SystemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials | cdktf.IResolvable | undefined) {
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
}
export interface SystemBundleRegistryDistributionS3OpaCredentialsMetadataCredentials {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#aws_region System#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#iam_role System#iam_role}
  */
  readonly iamRole?: string;
}

export function systemBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsToTerraform(struct?: SystemBundleRegistryDistributionS3OpaCredentialsMetadataCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    iam_role: cdktf.stringToTerraform(struct!.iamRole),
  }
}


export function systemBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsToHclTerraform(struct?: SystemBundleRegistryDistributionS3OpaCredentialsMetadataCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role: {
      value: cdktf.stringToHclTerraform(struct!.iamRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemBundleRegistryDistributionS3OpaCredentialsMetadataCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._iamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBundleRegistryDistributionS3OpaCredentialsMetadataCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._iamRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._iamRole = value.iamRole;
    }
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // iam_role - computed: true, optional: true, required: false
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
  }
}
export interface SystemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#aws_region System#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#session_name System#session_name}
  */
  readonly sessionName?: string;
}

export function systemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsToTerraform(struct?: SystemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
  }
}


export function systemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsToHclTerraform(struct?: SystemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._sessionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._sessionName = value.sessionName;
    }
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // session_name - computed: true, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }
}
export interface SystemBundleRegistryDistributionS3OpaCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#environment_credentials System#environment_credentials}
  */
  readonly environmentCredentials?: SystemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#metadata_credentials System#metadata_credentials}
  */
  readonly metadataCredentials?: SystemBundleRegistryDistributionS3OpaCredentialsMetadataCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#web_identity_credentials System#web_identity_credentials}
  */
  readonly webIdentityCredentials?: SystemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials;
}

export function systemBundleRegistryDistributionS3OpaCredentialsToTerraform(struct?: SystemBundleRegistryDistributionS3OpaCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_credentials: systemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsToTerraform(struct!.environmentCredentials),
    metadata_credentials: systemBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsToTerraform(struct!.metadataCredentials),
    web_identity_credentials: systemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsToTerraform(struct!.webIdentityCredentials),
  }
}


export function systemBundleRegistryDistributionS3OpaCredentialsToHclTerraform(struct?: SystemBundleRegistryDistributionS3OpaCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_credentials: {
      value: systemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsToHclTerraform(struct!.environmentCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials",
    },
    metadata_credentials: {
      value: systemBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsToHclTerraform(struct!.metadataCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemBundleRegistryDistributionS3OpaCredentialsMetadataCredentials",
    },
    web_identity_credentials: {
      value: systemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsToHclTerraform(struct!.webIdentityCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBundleRegistryDistributionS3OpaCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemBundleRegistryDistributionS3OpaCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentCredentials = this._environmentCredentials?.internalValue;
    }
    if (this._metadataCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataCredentials = this._metadataCredentials?.internalValue;
    }
    if (this._webIdentityCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webIdentityCredentials = this._webIdentityCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBundleRegistryDistributionS3OpaCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentCredentials.internalValue = undefined;
      this._metadataCredentials.internalValue = undefined;
      this._webIdentityCredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentCredentials.internalValue = value.environmentCredentials;
      this._metadataCredentials.internalValue = value.metadataCredentials;
      this._webIdentityCredentials.internalValue = value.webIdentityCredentials;
    }
  }

  // environment_credentials - computed: true, optional: true, required: false
  private _environmentCredentials = new SystemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsOutputReference(this, "environment_credentials");
  public get environmentCredentials() {
    return this._environmentCredentials;
  }
  public putEnvironmentCredentials(value: SystemBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials) {
    this._environmentCredentials.internalValue = value;
  }
  public resetEnvironmentCredentials() {
    this._environmentCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentCredentialsInput() {
    return this._environmentCredentials.internalValue;
  }

  // metadata_credentials - computed: true, optional: true, required: false
  private _metadataCredentials = new SystemBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsOutputReference(this, "metadata_credentials");
  public get metadataCredentials() {
    return this._metadataCredentials;
  }
  public putMetadataCredentials(value: SystemBundleRegistryDistributionS3OpaCredentialsMetadataCredentials) {
    this._metadataCredentials.internalValue = value;
  }
  public resetMetadataCredentials() {
    this._metadataCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataCredentialsInput() {
    return this._metadataCredentials.internalValue;
  }

  // web_identity_credentials - computed: true, optional: true, required: false
  private _webIdentityCredentials = new SystemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsOutputReference(this, "web_identity_credentials");
  public get webIdentityCredentials() {
    return this._webIdentityCredentials;
  }
  public putWebIdentityCredentials(value: SystemBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials) {
    this._webIdentityCredentials.internalValue = value;
  }
  public resetWebIdentityCredentials() {
    this._webIdentityCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webIdentityCredentialsInput() {
    return this._webIdentityCredentials.internalValue;
  }
}
export interface SystemBundleRegistryDistributionS3 {
  /**
  * access key id and secret access key are looked under the key <name>/<access_keys>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#access_keys System#access_keys}
  */
  readonly accessKeys?: string;
  /**
  * bucket name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#bucket System#bucket}
  */
  readonly bucket?: string;
  /**
  * context bundle path. The name must not use template variables. Default: "context-{policy_path}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#context_path System#context_path}
  */
  readonly contextPath?: string;
  /**
  * discovery bundle path. Template variables can be used in the name. Default: "discovery.tgz"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#discovery_path System#discovery_path}
  */
  readonly discoveryPath?: string;
  /**
  * AWS endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#endpoint System#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#opa_credentials System#opa_credentials}
  */
  readonly opaCredentials?: SystemBundleRegistryDistributionS3OpaCredentials;
  /**
  * policy bundle path. Template variables can be used in the name. Default: "bundle.tgz"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#policy_path System#policy_path}
  */
  readonly policyPath?: string;
  /**
  * AWS region. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#region System#region}
  */
  readonly region?: string;
  /**
  * AWS role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#role_arn System#role_arn}
  */
  readonly roleArn?: string;
}

export function systemBundleRegistryDistributionS3ToTerraform(struct?: SystemBundleRegistryDistributionS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_keys: cdktf.stringToTerraform(struct!.accessKeys),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    context_path: cdktf.stringToTerraform(struct!.contextPath),
    discovery_path: cdktf.stringToTerraform(struct!.discoveryPath),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    opa_credentials: systemBundleRegistryDistributionS3OpaCredentialsToTerraform(struct!.opaCredentials),
    policy_path: cdktf.stringToTerraform(struct!.policyPath),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function systemBundleRegistryDistributionS3ToHclTerraform(struct?: SystemBundleRegistryDistributionS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_keys: {
      value: cdktf.stringToHclTerraform(struct!.accessKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_path: {
      value: cdktf.stringToHclTerraform(struct!.contextPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_path: {
      value: cdktf.stringToHclTerraform(struct!.discoveryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opa_credentials: {
      value: systemBundleRegistryDistributionS3OpaCredentialsToHclTerraform(struct!.opaCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemBundleRegistryDistributionS3OpaCredentials",
    },
    policy_path: {
      value: cdktf.stringToHclTerraform(struct!.policyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBundleRegistryDistributionS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemBundleRegistryDistributionS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeys = this._accessKeys;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._contextPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextPath = this._contextPath;
    }
    if (this._discoveryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryPath = this._discoveryPath;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._opaCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaCredentials = this._opaCredentials?.internalValue;
    }
    if (this._policyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyPath = this._policyPath;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBundleRegistryDistributionS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeys = undefined;
      this._bucket = undefined;
      this._contextPath = undefined;
      this._discoveryPath = undefined;
      this._endpoint = undefined;
      this._opaCredentials.internalValue = undefined;
      this._policyPath = undefined;
      this._region = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeys = value.accessKeys;
      this._bucket = value.bucket;
      this._contextPath = value.contextPath;
      this._discoveryPath = value.discoveryPath;
      this._endpoint = value.endpoint;
      this._opaCredentials.internalValue = value.opaCredentials;
      this._policyPath = value.policyPath;
      this._region = value.region;
      this._roleArn = value.roleArn;
    }
  }

  // access_keys - computed: true, optional: true, required: false
  private _accessKeys?: string; 
  public get accessKeys() {
    return this.getStringAttribute('access_keys');
  }
  public set accessKeys(value: string) {
    this._accessKeys = value;
  }
  public resetAccessKeys() {
    this._accessKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeysInput() {
    return this._accessKeys;
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // context_path - computed: true, optional: true, required: false
  private _contextPath?: string; 
  public get contextPath() {
    return this.getStringAttribute('context_path');
  }
  public set contextPath(value: string) {
    this._contextPath = value;
  }
  public resetContextPath() {
    this._contextPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextPathInput() {
    return this._contextPath;
  }

  // discovery_path - computed: true, optional: true, required: false
  private _discoveryPath?: string; 
  public get discoveryPath() {
    return this.getStringAttribute('discovery_path');
  }
  public set discoveryPath(value: string) {
    this._discoveryPath = value;
  }
  public resetDiscoveryPath() {
    this._discoveryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryPathInput() {
    return this._discoveryPath;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // opa_credentials - computed: true, optional: true, required: false
  private _opaCredentials = new SystemBundleRegistryDistributionS3OpaCredentialsOutputReference(this, "opa_credentials");
  public get opaCredentials() {
    return this._opaCredentials;
  }
  public putOpaCredentials(value: SystemBundleRegistryDistributionS3OpaCredentials) {
    this._opaCredentials.internalValue = value;
  }
  public resetOpaCredentials() {
    this._opaCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaCredentialsInput() {
    return this._opaCredentials.internalValue;
  }

  // policy_path - computed: true, optional: true, required: false
  private _policyPath?: string; 
  public get policyPath() {
    return this.getStringAttribute('policy_path');
  }
  public set policyPath(value: string) {
    this._policyPath = value;
  }
  public resetPolicyPath() {
    this._policyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPathInput() {
    return this._policyPath;
  }

  // region - computed: true, optional: true, required: false
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface SystemBundleRegistry {
  /**
  * when checked, bundles will be activated regardless of their compatibility with currently running agents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#disable_bundle_compatibility_check System#disable_bundle_compatibility_check}
  */
  readonly disableBundleCompatibilityCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#distribution_s3 System#distribution_s3}
  */
  readonly distributionS3?: SystemBundleRegistryDistributionS3;
  /**
  * extra bundle entry points to use when compiling bundles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#entrypoints System#entrypoints}
  */
  readonly entrypoints?: string[];
  /**
  * manual deployment mode to prevent automatic deployment of new bundles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#manual_deployment System#manual_deployment}
  */
  readonly manualDeployment?: boolean | cdktf.IResolvable;
  /**
  * Override of manual deployment mode flag per bundle type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#manual_deployment_overrides System#manual_deployment_overrides}
  */
  readonly manualDeploymentOverrides?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * maximum number of all bundles to store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#max_bundles System#max_bundles}
  */
  readonly maxBundles?: number;
  /**
  * maximum number of previously deployed bundles to store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#max_deployed_bundles System#max_deployed_bundles}
  */
  readonly maxDeployedBundles?: number;
  /**
  * OPA optimization level to use when building bundles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#optimization_level System#optimization_level}
  */
  readonly optimizationLevel?: number;
}

export function systemBundleRegistryToTerraform(struct?: SystemBundleRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_bundle_compatibility_check: cdktf.booleanToTerraform(struct!.disableBundleCompatibilityCheck),
    distribution_s3: systemBundleRegistryDistributionS3ToTerraform(struct!.distributionS3),
    entrypoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoints),
    manual_deployment: cdktf.booleanToTerraform(struct!.manualDeployment),
    manual_deployment_overrides: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.manualDeploymentOverrides),
    max_bundles: cdktf.numberToTerraform(struct!.maxBundles),
    max_deployed_bundles: cdktf.numberToTerraform(struct!.maxDeployedBundles),
    optimization_level: cdktf.numberToTerraform(struct!.optimizationLevel),
  }
}


export function systemBundleRegistryToHclTerraform(struct?: SystemBundleRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_bundle_compatibility_check: {
      value: cdktf.booleanToHclTerraform(struct!.disableBundleCompatibilityCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    distribution_s3: {
      value: systemBundleRegistryDistributionS3ToHclTerraform(struct!.distributionS3),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemBundleRegistryDistributionS3",
    },
    entrypoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entrypoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    manual_deployment: {
      value: cdktf.booleanToHclTerraform(struct!.manualDeployment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual_deployment_overrides: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.manualDeploymentOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
    },
    max_bundles: {
      value: cdktf.numberToHclTerraform(struct!.maxBundles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_deployed_bundles: {
      value: cdktf.numberToHclTerraform(struct!.maxDeployedBundles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    optimization_level: {
      value: cdktf.numberToHclTerraform(struct!.optimizationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBundleRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemBundleRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableBundleCompatibilityCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBundleCompatibilityCheck = this._disableBundleCompatibilityCheck;
    }
    if (this._distributionS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionS3 = this._distributionS3?.internalValue;
    }
    if (this._entrypoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoints = this._entrypoints;
    }
    if (this._manualDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualDeployment = this._manualDeployment;
    }
    if (this._manualDeploymentOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualDeploymentOverrides = this._manualDeploymentOverrides;
    }
    if (this._maxBundles !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBundles = this._maxBundles;
    }
    if (this._maxDeployedBundles !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeployedBundles = this._maxDeployedBundles;
    }
    if (this._optimizationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizationLevel = this._optimizationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBundleRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableBundleCompatibilityCheck = undefined;
      this._distributionS3.internalValue = undefined;
      this._entrypoints = undefined;
      this._manualDeployment = undefined;
      this._manualDeploymentOverrides = undefined;
      this._maxBundles = undefined;
      this._maxDeployedBundles = undefined;
      this._optimizationLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableBundleCompatibilityCheck = value.disableBundleCompatibilityCheck;
      this._distributionS3.internalValue = value.distributionS3;
      this._entrypoints = value.entrypoints;
      this._manualDeployment = value.manualDeployment;
      this._manualDeploymentOverrides = value.manualDeploymentOverrides;
      this._maxBundles = value.maxBundles;
      this._maxDeployedBundles = value.maxDeployedBundles;
      this._optimizationLevel = value.optimizationLevel;
    }
  }

  // disable_bundle_compatibility_check - computed: true, optional: true, required: false
  private _disableBundleCompatibilityCheck?: boolean | cdktf.IResolvable; 
  public get disableBundleCompatibilityCheck() {
    return this.getBooleanAttribute('disable_bundle_compatibility_check');
  }
  public set disableBundleCompatibilityCheck(value: boolean | cdktf.IResolvable) {
    this._disableBundleCompatibilityCheck = value;
  }
  public resetDisableBundleCompatibilityCheck() {
    this._disableBundleCompatibilityCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBundleCompatibilityCheckInput() {
    return this._disableBundleCompatibilityCheck;
  }

  // distribution_s3 - computed: true, optional: true, required: false
  private _distributionS3 = new SystemBundleRegistryDistributionS3OutputReference(this, "distribution_s3");
  public get distributionS3() {
    return this._distributionS3;
  }
  public putDistributionS3(value: SystemBundleRegistryDistributionS3) {
    this._distributionS3.internalValue = value;
  }
  public resetDistributionS3() {
    this._distributionS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionS3Input() {
    return this._distributionS3.internalValue;
  }

  // entrypoints - computed: true, optional: true, required: false
  private _entrypoints?: string[]; 
  public get entrypoints() {
    return this.getListAttribute('entrypoints');
  }
  public set entrypoints(value: string[]) {
    this._entrypoints = value;
  }
  public resetEntrypoints() {
    this._entrypoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointsInput() {
    return this._entrypoints;
  }

  // manual_deployment - computed: true, optional: true, required: false
  private _manualDeployment?: boolean | cdktf.IResolvable; 
  public get manualDeployment() {
    return this.getBooleanAttribute('manual_deployment');
  }
  public set manualDeployment(value: boolean | cdktf.IResolvable) {
    this._manualDeployment = value;
  }
  public resetManualDeployment() {
    this._manualDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualDeploymentInput() {
    return this._manualDeployment;
  }

  // manual_deployment_overrides - computed: true, optional: true, required: false
  private _manualDeploymentOverrides?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get manualDeploymentOverrides() {
    return this.getBooleanMapAttribute('manual_deployment_overrides');
  }
  public set manualDeploymentOverrides(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._manualDeploymentOverrides = value;
  }
  public resetManualDeploymentOverrides() {
    this._manualDeploymentOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualDeploymentOverridesInput() {
    return this._manualDeploymentOverrides;
  }

  // max_bundles - computed: true, optional: true, required: false
  private _maxBundles?: number; 
  public get maxBundles() {
    return this.getNumberAttribute('max_bundles');
  }
  public set maxBundles(value: number) {
    this._maxBundles = value;
  }
  public resetMaxBundles() {
    this._maxBundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBundlesInput() {
    return this._maxBundles;
  }

  // max_deployed_bundles - computed: true, optional: true, required: false
  private _maxDeployedBundles?: number; 
  public get maxDeployedBundles() {
    return this.getNumberAttribute('max_deployed_bundles');
  }
  public set maxDeployedBundles(value: number) {
    this._maxDeployedBundles = value;
  }
  public resetMaxDeployedBundles() {
    this._maxDeployedBundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeployedBundlesInput() {
    return this._maxDeployedBundles;
  }

  // optimization_level - computed: true, optional: true, required: false
  private _optimizationLevel?: number; 
  public get optimizationLevel() {
    return this.getNumberAttribute('optimization_level');
  }
  public set optimizationLevel(value: number) {
    this._optimizationLevel = value;
  }
  public resetOptimizationLevel() {
    this._optimizationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationLevelInput() {
    return this._optimizationLevel;
  }
}
export interface SystemDatasourcesStatus {
}

export function systemDatasourcesStatusToTerraform(struct?: SystemDatasourcesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemDatasourcesStatusToHclTerraform(struct?: SystemDatasourcesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemDatasourcesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemDatasourcesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDatasourcesStatus | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface SystemDatasources {
}

export function systemDatasourcesToTerraform(struct?: SystemDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemDatasourcesToHclTerraform(struct?: SystemDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemDatasourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDatasources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDatasources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // status - computed: true, optional: false, required: false
  private _status = new SystemDatasourcesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}

export class SystemDatasourcesList extends cdktf.ComplexList {

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
  public get(index: number): SystemDatasourcesOutputReference {
    return new SystemDatasourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDecisionMappingsAllowed {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#expected System#expected}
  */
  readonly expected?: string;
  /**
  * when set to true, decision is Allowed when the mapped property IS NOT equal to the expected value. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#negated System#negated}
  */
  readonly negated?: boolean | cdktf.IResolvable;
  /**
  * dot-separated decision property path. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#path System#path}
  */
  readonly path?: string;
}

export function systemDecisionMappingsAllowedToTerraform(struct?: SystemDecisionMappingsAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected: cdktf.stringToTerraform(struct!.expected),
    negated: cdktf.booleanToTerraform(struct!.negated),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function systemDecisionMappingsAllowedToHclTerraform(struct?: SystemDecisionMappingsAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected: {
      value: cdktf.stringToHclTerraform(struct!.expected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negated: {
      value: cdktf.booleanToHclTerraform(struct!.negated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDecisionMappingsAllowedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemDecisionMappingsAllowed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expected !== undefined) {
      hasAnyValues = true;
      internalValueResult.expected = this._expected;
    }
    if (this._negated !== undefined) {
      hasAnyValues = true;
      internalValueResult.negated = this._negated;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDecisionMappingsAllowed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expected = undefined;
      this._negated = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expected = value.expected;
      this._negated = value.negated;
      this._path = value.path;
    }
  }

  // expected - computed: true, optional: true, required: false
  private _expected?: string; 
  public get expected() {
    return this.getStringAttribute('expected');
  }
  public set expected(value: string) {
    this._expected = value;
  }
  public resetExpected() {
    this._expected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedInput() {
    return this._expected;
  }

  // negated - computed: true, optional: true, required: false
  private _negated?: boolean | cdktf.IResolvable; 
  public get negated() {
    return this.getBooleanAttribute('negated');
  }
  public set negated(value: boolean | cdktf.IResolvable) {
    this._negated = value;
  }
  public resetNegated() {
    this._negated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negatedInput() {
    return this._negated;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface SystemDecisionMappingsColumns {
  /**
  * column key (also the search key). Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#key System#key}
  */
  readonly key?: string;
  /**
  * dot-separated decision property path. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#path System#path}
  */
  readonly path?: string;
  /**
  * column type: one of "string", "boolean", "date", "integer", "float". Default: "string"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#type System#type}
  */
  readonly type?: string;
}

export function systemDecisionMappingsColumnsToTerraform(struct?: SystemDecisionMappingsColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemDecisionMappingsColumnsToHclTerraform(struct?: SystemDecisionMappingsColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDecisionMappingsColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDecisionMappingsColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDecisionMappingsColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
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
}

export class SystemDecisionMappingsColumnsList extends cdktf.ComplexList {
  public internalValue? : SystemDecisionMappingsColumns[] | cdktf.IResolvable

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
  public get(index: number): SystemDecisionMappingsColumnsOutputReference {
    return new SystemDecisionMappingsColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDecisionMappingsReason {
  /**
  * dot-separated decision property path. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#path System#path}
  */
  readonly path?: string;
}

export function systemDecisionMappingsReasonToTerraform(struct?: SystemDecisionMappingsReason | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function systemDecisionMappingsReasonToHclTerraform(struct?: SystemDecisionMappingsReason | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDecisionMappingsReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemDecisionMappingsReason | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDecisionMappingsReason | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface SystemDecisionMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#allowed System#allowed}
  */
  readonly allowed?: SystemDecisionMappingsAllowed;
  /**
  * decision mappings for additional columns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#columns System#columns}
  */
  readonly columns?: SystemDecisionMappingsColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#reason System#reason}
  */
  readonly reason?: SystemDecisionMappingsReason;
}

export function systemDecisionMappingsToTerraform(struct?: SystemDecisionMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: systemDecisionMappingsAllowedToTerraform(struct!.allowed),
    columns: cdktf.listMapper(systemDecisionMappingsColumnsToTerraform, false)(struct!.columns),
    reason: systemDecisionMappingsReasonToTerraform(struct!.reason),
  }
}


export function systemDecisionMappingsToHclTerraform(struct?: SystemDecisionMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: systemDecisionMappingsAllowedToHclTerraform(struct!.allowed),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemDecisionMappingsAllowed",
    },
    columns: {
      value: cdktf.listMapperHcl(systemDecisionMappingsColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "SystemDecisionMappingsColumnsList",
    },
    reason: {
      value: systemDecisionMappingsReasonToHclTerraform(struct!.reason),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemDecisionMappingsReason",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDecisionMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SystemDecisionMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed?.internalValue;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._reason?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDecisionMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed.internalValue = undefined;
      this._columns.internalValue = undefined;
      this._reason.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed.internalValue = value.allowed;
      this._columns.internalValue = value.columns;
      this._reason.internalValue = value.reason;
    }
  }

  // allowed - computed: true, optional: true, required: false
  private _allowed = new SystemDecisionMappingsAllowedOutputReference(this, "allowed");
  public get allowed() {
    return this._allowed;
  }
  public putAllowed(value: SystemDecisionMappingsAllowed) {
    this._allowed.internalValue = value;
  }
  public resetAllowed() {
    this._allowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed.internalValue;
  }

  // columns - computed: true, optional: true, required: false
  private _columns = new SystemDecisionMappingsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: SystemDecisionMappingsColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // reason - computed: true, optional: true, required: false
  private _reason = new SystemDecisionMappingsReasonOutputReference(this, "reason");
  public get reason() {
    return this._reason;
  }
  public putReason(value: SystemDecisionMappingsReason) {
    this._reason.internalValue = value;
  }
  public resetReason() {
    this._reason.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason.internalValue;
  }
}

export class SystemDecisionMappingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SystemDecisionMappings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SystemDecisionMappingsOutputReference {
    return new SystemDecisionMappingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SystemDeploymentParametersDiscovery {
}

export function systemDeploymentParametersDiscoveryToTerraform(struct?: SystemDeploymentParametersDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemDeploymentParametersDiscoveryToHclTerraform(struct?: SystemDeploymentParametersDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemDeploymentParametersDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemDeploymentParametersDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDeploymentParametersDiscovery | cdktf.IResolvable | undefined) {
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
}
export interface SystemDeploymentParametersExtra {
}

export function systemDeploymentParametersExtraToTerraform(struct?: SystemDeploymentParametersExtra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemDeploymentParametersExtraToHclTerraform(struct?: SystemDeploymentParametersExtra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemDeploymentParametersExtraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemDeploymentParametersExtra | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDeploymentParametersExtra | cdktf.IResolvable | undefined) {
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
}
export interface SystemDeploymentParameters {
  /**
  * true to fail close. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#deny_on_opa_fail System#deny_on_opa_fail}
  */
  readonly denyOnOpaFail?: boolean | cdktf.IResolvable;
  /**
  * discovery config settings for OPAs linked to the system. (in case of conflict with system-type defined setting, this value takes precedence)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#discovery System#discovery}
  */
  readonly discovery?: SystemDeploymentParametersDiscovery;
  /**
  * extra deployment settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#extra System#extra}
  */
  readonly extra?: SystemDeploymentParametersExtra;
  /**
  * HTTP proxy URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#http_proxy System#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HTTPS proxy URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#https_proxy System#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * minimum Kubernetes version expected (where applicable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#kubernetes_version System#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Custom name for mutating webhook (useful for changing webhook order of execution)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#mutating_webhook_name System#mutating_webhook_name}
  */
  readonly mutatingWebhookName?: string;
  /**
  * Kubernetes namespace the system is deployed to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#namespace System#namespace}
  */
  readonly namespace?: string;
  /**
  * URLs that should be excluded from proxying
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#no_proxy System#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Kubernetes webhook timeout (where applicable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#timeout_seconds System#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * trusted CA certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#trusted_ca_certs System#trusted_ca_certs}
  */
  readonly trustedCaCerts?: string[];
  /**
  * trusted container registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#trusted_container_registry System#trusted_container_registry}
  */
  readonly trustedContainerRegistry?: string;
}

export function systemDeploymentParametersToTerraform(struct?: SystemDeploymentParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_on_opa_fail: cdktf.booleanToTerraform(struct!.denyOnOpaFail),
    discovery: systemDeploymentParametersDiscoveryToTerraform(struct!.discovery),
    extra: systemDeploymentParametersExtraToTerraform(struct!.extra),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    mutating_webhook_name: cdktf.stringToTerraform(struct!.mutatingWebhookName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    trusted_ca_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedCaCerts),
    trusted_container_registry: cdktf.stringToTerraform(struct!.trustedContainerRegistry),
  }
}


export function systemDeploymentParametersToHclTerraform(struct?: SystemDeploymentParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_on_opa_fail: {
      value: cdktf.booleanToHclTerraform(struct!.denyOnOpaFail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery: {
      value: systemDeploymentParametersDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemDeploymentParametersDiscovery",
    },
    extra: {
      value: systemDeploymentParametersExtraToHclTerraform(struct!.extra),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemDeploymentParametersExtra",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_version: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mutating_webhook_name: {
      value: cdktf.stringToHclTerraform(struct!.mutatingWebhookName),
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
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trusted_ca_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedCaCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_container_registry: {
      value: cdktf.stringToHclTerraform(struct!.trustedContainerRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDeploymentParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemDeploymentParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyOnOpaFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyOnOpaFail = this._denyOnOpaFail;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    if (this._extra?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extra = this._extra?.internalValue;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._mutatingWebhookName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutatingWebhookName = this._mutatingWebhookName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._trustedCaCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaCerts = this._trustedCaCerts;
    }
    if (this._trustedContainerRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedContainerRegistry = this._trustedContainerRegistry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDeploymentParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denyOnOpaFail = undefined;
      this._discovery.internalValue = undefined;
      this._extra.internalValue = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._kubernetesVersion = undefined;
      this._mutatingWebhookName = undefined;
      this._namespace = undefined;
      this._noProxy = undefined;
      this._timeoutSeconds = undefined;
      this._trustedCaCerts = undefined;
      this._trustedContainerRegistry = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denyOnOpaFail = value.denyOnOpaFail;
      this._discovery.internalValue = value.discovery;
      this._extra.internalValue = value.extra;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._kubernetesVersion = value.kubernetesVersion;
      this._mutatingWebhookName = value.mutatingWebhookName;
      this._namespace = value.namespace;
      this._noProxy = value.noProxy;
      this._timeoutSeconds = value.timeoutSeconds;
      this._trustedCaCerts = value.trustedCaCerts;
      this._trustedContainerRegistry = value.trustedContainerRegistry;
    }
  }

  // deny_on_opa_fail - computed: true, optional: true, required: false
  private _denyOnOpaFail?: boolean | cdktf.IResolvable; 
  public get denyOnOpaFail() {
    return this.getBooleanAttribute('deny_on_opa_fail');
  }
  public set denyOnOpaFail(value: boolean | cdktf.IResolvable) {
    this._denyOnOpaFail = value;
  }
  public resetDenyOnOpaFail() {
    this._denyOnOpaFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyOnOpaFailInput() {
    return this._denyOnOpaFail;
  }

  // discovery - computed: true, optional: true, required: false
  private _discovery = new SystemDeploymentParametersDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: SystemDeploymentParametersDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }

  // extra - computed: true, optional: true, required: false
  private _extra = new SystemDeploymentParametersExtraOutputReference(this, "extra");
  public get extra() {
    return this._extra;
  }
  public putExtra(value: SystemDeploymentParametersExtra) {
    this._extra.internalValue = value;
  }
  public resetExtra() {
    this._extra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInput() {
    return this._extra.internalValue;
  }

  // http_proxy - computed: true, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: true, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // mutating_webhook_name - computed: true, optional: true, required: false
  private _mutatingWebhookName?: string; 
  public get mutatingWebhookName() {
    return this.getStringAttribute('mutating_webhook_name');
  }
  public set mutatingWebhookName(value: string) {
    this._mutatingWebhookName = value;
  }
  public resetMutatingWebhookName() {
    this._mutatingWebhookName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutatingWebhookNameInput() {
    return this._mutatingWebhookName;
  }

  // namespace - computed: true, optional: true, required: false
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

  // no_proxy - computed: true, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // trusted_ca_certs - computed: true, optional: true, required: false
  private _trustedCaCerts?: string[]; 
  public get trustedCaCerts() {
    return this.getListAttribute('trusted_ca_certs');
  }
  public set trustedCaCerts(value: string[]) {
    this._trustedCaCerts = value;
  }
  public resetTrustedCaCerts() {
    this._trustedCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaCertsInput() {
    return this._trustedCaCerts;
  }

  // trusted_container_registry - computed: true, optional: true, required: false
  private _trustedContainerRegistry?: string; 
  public get trustedContainerRegistry() {
    return this.getStringAttribute('trusted_container_registry');
  }
  public set trustedContainerRegistry(value: string) {
    this._trustedContainerRegistry = value;
  }
  public resetTrustedContainerRegistry() {
    this._trustedContainerRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedContainerRegistryInput() {
    return this._trustedContainerRegistry;
  }
}
export interface SystemErrorsErrors {
}

export function systemErrorsErrorsToTerraform(struct?: SystemErrorsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemErrorsErrorsToHclTerraform(struct?: SystemErrorsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemErrorsErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemErrorsErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemErrorsErrors | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class SystemErrorsErrorsList extends cdktf.ComplexList {

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
  public get(index: number): SystemErrorsErrorsOutputReference {
    return new SystemErrorsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemErrors {
}

export function systemErrorsToTerraform(struct?: SystemErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemErrorsToHclTerraform(struct?: SystemErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SystemErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new SystemErrorsErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // waiting - computed: true, optional: false, required: false
  public get waiting() {
    return this.getBooleanAttribute('waiting');
  }
}

export class SystemErrorsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SystemErrorsOutputReference {
    return new SystemErrorsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SystemExternalBundlesBundlesPolling {
  /**
  * maximum amount of time the server should wait before issuing a timeout if there’s no update available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#long_polling_timeout_seconds System#long_polling_timeout_seconds}
  */
  readonly longPollingTimeoutSeconds?: number;
  /**
  * maximum amount of time to wait between bundle downloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#max_delay_seconds System#max_delay_seconds}
  */
  readonly maxDelaySeconds?: number;
  /**
  * minimum amount of time to wait between bundle downloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#min_delay_seconds System#min_delay_seconds}
  */
  readonly minDelaySeconds?: number;
}

export function systemExternalBundlesBundlesPollingToTerraform(struct?: SystemExternalBundlesBundlesPolling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    long_polling_timeout_seconds: cdktf.numberToTerraform(struct!.longPollingTimeoutSeconds),
    max_delay_seconds: cdktf.numberToTerraform(struct!.maxDelaySeconds),
    min_delay_seconds: cdktf.numberToTerraform(struct!.minDelaySeconds),
  }
}


export function systemExternalBundlesBundlesPollingToHclTerraform(struct?: SystemExternalBundlesBundlesPolling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    long_polling_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.longPollingTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesBundlesPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesBundlesPolling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._longPollingTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.longPollingTimeoutSeconds = this._longPollingTimeoutSeconds;
    }
    if (this._maxDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDelaySeconds = this._maxDelaySeconds;
    }
    if (this._minDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDelaySeconds = this._minDelaySeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesBundlesPolling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._longPollingTimeoutSeconds = undefined;
      this._maxDelaySeconds = undefined;
      this._minDelaySeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._longPollingTimeoutSeconds = value.longPollingTimeoutSeconds;
      this._maxDelaySeconds = value.maxDelaySeconds;
      this._minDelaySeconds = value.minDelaySeconds;
    }
  }

  // long_polling_timeout_seconds - computed: true, optional: true, required: false
  private _longPollingTimeoutSeconds?: number; 
  public get longPollingTimeoutSeconds() {
    return this.getNumberAttribute('long_polling_timeout_seconds');
  }
  public set longPollingTimeoutSeconds(value: number) {
    this._longPollingTimeoutSeconds = value;
  }
  public resetLongPollingTimeoutSeconds() {
    this._longPollingTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longPollingTimeoutSecondsInput() {
    return this._longPollingTimeoutSeconds;
  }

  // max_delay_seconds - computed: true, optional: true, required: false
  private _maxDelaySeconds?: number; 
  public get maxDelaySeconds() {
    return this.getNumberAttribute('max_delay_seconds');
  }
  public set maxDelaySeconds(value: number) {
    this._maxDelaySeconds = value;
  }
  public resetMaxDelaySeconds() {
    this._maxDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelaySecondsInput() {
    return this._maxDelaySeconds;
  }

  // min_delay_seconds - computed: true, optional: true, required: false
  private _minDelaySeconds?: number; 
  public get minDelaySeconds() {
    return this.getNumberAttribute('min_delay_seconds');
  }
  public set minDelaySeconds(value: number) {
    this._minDelaySeconds = value;
  }
  public resetMinDelaySeconds() {
    this._minDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelaySecondsInput() {
    return this._minDelaySeconds;
  }
}
export interface SystemExternalBundlesBundlesSigningPublicKeys {
  /**
  * name of the signing algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#algorithm System#algorithm}
  */
  readonly algorithm?: string;
  /**
  * PEM encoded public key to use for signature verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#key System#key}
  */
  readonly key?: string;
  /**
  * PEM encoded private key to use for signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#private_key System#private_key}
  */
  readonly privateKey?: string;
  /**
  * scope to use for bundle signature verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#scope System#scope}
  */
  readonly scope?: string;
}

export function systemExternalBundlesBundlesSigningPublicKeysToTerraform(struct?: SystemExternalBundlesBundlesSigningPublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key: cdktf.stringToTerraform(struct!.key),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function systemExternalBundlesBundlesSigningPublicKeysToHclTerraform(struct?: SystemExternalBundlesBundlesSigningPublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesBundlesSigningPublicKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SystemExternalBundlesBundlesSigningPublicKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesBundlesSigningPublicKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._key = undefined;
      this._privateKey = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._key = value.key;
      this._privateKey = value.privateKey;
      this._scope = value.scope;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class SystemExternalBundlesBundlesSigningPublicKeysMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SystemExternalBundlesBundlesSigningPublicKeys } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SystemExternalBundlesBundlesSigningPublicKeysOutputReference {
    return new SystemExternalBundlesBundlesSigningPublicKeysOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SystemExternalBundlesBundlesSigning {
  /**
  * files in the bundle to exclude during verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#exclude_files System#exclude_files}
  */
  readonly excludeFiles?: string[];
  /**
  * name of the key to use for bundle signature verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#keyid System#keyid}
  */
  readonly keyid?: string;
  /**
  * information about necessary public signing keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#public_keys System#public_keys}
  */
  readonly publicKeys?: { [key: string]: SystemExternalBundlesBundlesSigningPublicKeys } | cdktf.IResolvable;
  /**
  * scope to use for bundle signature verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#scope System#scope}
  */
  readonly scope?: string;
}

export function systemExternalBundlesBundlesSigningToTerraform(struct?: SystemExternalBundlesBundlesSigning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeFiles),
    keyid: cdktf.stringToTerraform(struct!.keyid),
    public_keys: cdktf.hashMapper(systemExternalBundlesBundlesSigningPublicKeysToTerraform)(struct!.publicKeys),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function systemExternalBundlesBundlesSigningToHclTerraform(struct?: SystemExternalBundlesBundlesSigning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keyid: {
      value: cdktf.stringToHclTerraform(struct!.keyid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_keys: {
      value: cdktf.hashMapperHcl(systemExternalBundlesBundlesSigningPublicKeysToHclTerraform)(struct!.publicKeys),
      isBlock: true,
      type: "map",
      storageClassType: "SystemExternalBundlesBundlesSigningPublicKeysMap",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesBundlesSigningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesBundlesSigning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFiles = this._excludeFiles;
    }
    if (this._keyid !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyid = this._keyid;
    }
    if (this._publicKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys?.internalValue;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesBundlesSigning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeFiles = undefined;
      this._keyid = undefined;
      this._publicKeys.internalValue = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeFiles = value.excludeFiles;
      this._keyid = value.keyid;
      this._publicKeys.internalValue = value.publicKeys;
      this._scope = value.scope;
    }
  }

  // exclude_files - computed: true, optional: true, required: false
  private _excludeFiles?: string[]; 
  public get excludeFiles() {
    return this.getListAttribute('exclude_files');
  }
  public set excludeFiles(value: string[]) {
    this._excludeFiles = value;
  }
  public resetExcludeFiles() {
    this._excludeFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilesInput() {
    return this._excludeFiles;
  }

  // keyid - computed: true, optional: true, required: false
  private _keyid?: string; 
  public get keyid() {
    return this.getStringAttribute('keyid');
  }
  public set keyid(value: string) {
    this._keyid = value;
  }
  public resetKeyid() {
    this._keyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyidInput() {
    return this._keyid;
  }

  // public_keys - computed: true, optional: true, required: false
  private _publicKeys = new SystemExternalBundlesBundlesSigningPublicKeysMap(this, "public_keys");
  public get publicKeys() {
    return this._publicKeys;
  }
  public putPublicKeys(value: { [key: string]: SystemExternalBundlesBundlesSigningPublicKeys } | cdktf.IResolvable) {
    this._publicKeys.internalValue = value;
  }
  public resetPublicKeys() {
    this._publicKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys.internalValue;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface SystemExternalBundlesBundles {
  /**
  * persist activated bundles to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#persist System#persist}
  */
  readonly persist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#polling System#polling}
  */
  readonly polling?: SystemExternalBundlesBundlesPolling;
  /**
  * resource path to use to download bundle from configured service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#resource System#resource}
  */
  readonly resource?: string;
  /**
  * name of service to use to contact remote server. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#service System#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#signing System#signing}
  */
  readonly signing?: SystemExternalBundlesBundlesSigning;
  /**
  * size limit for individual files contained in the bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#size_limit_bytes System#size_limit_bytes}
  */
  readonly sizeLimitBytes?: number;
}

export function systemExternalBundlesBundlesToTerraform(struct?: SystemExternalBundlesBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist: cdktf.booleanToTerraform(struct!.persist),
    polling: systemExternalBundlesBundlesPollingToTerraform(struct!.polling),
    resource: cdktf.stringToTerraform(struct!.resource),
    service: cdktf.stringToTerraform(struct!.service),
    signing: systemExternalBundlesBundlesSigningToTerraform(struct!.signing),
    size_limit_bytes: cdktf.numberToTerraform(struct!.sizeLimitBytes),
  }
}


export function systemExternalBundlesBundlesToHclTerraform(struct?: SystemExternalBundlesBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persist: {
      value: cdktf.booleanToHclTerraform(struct!.persist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    polling: {
      value: systemExternalBundlesBundlesPollingToHclTerraform(struct!.polling),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesBundlesPolling",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing: {
      value: systemExternalBundlesBundlesSigningToHclTerraform(struct!.signing),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesBundlesSigning",
    },
    size_limit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.sizeLimitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesBundlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SystemExternalBundlesBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persist !== undefined) {
      hasAnyValues = true;
      internalValueResult.persist = this._persist;
    }
    if (this._polling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polling = this._polling?.internalValue;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._signing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signing = this._signing?.internalValue;
    }
    if (this._sizeLimitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimitBytes = this._sizeLimitBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persist = undefined;
      this._polling.internalValue = undefined;
      this._resource = undefined;
      this._service = undefined;
      this._signing.internalValue = undefined;
      this._sizeLimitBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persist = value.persist;
      this._polling.internalValue = value.polling;
      this._resource = value.resource;
      this._service = value.service;
      this._signing.internalValue = value.signing;
      this._sizeLimitBytes = value.sizeLimitBytes;
    }
  }

  // persist - computed: true, optional: true, required: false
  private _persist?: boolean | cdktf.IResolvable; 
  public get persist() {
    return this.getBooleanAttribute('persist');
  }
  public set persist(value: boolean | cdktf.IResolvable) {
    this._persist = value;
  }
  public resetPersist() {
    this._persist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist;
  }

  // polling - computed: true, optional: true, required: false
  private _polling = new SystemExternalBundlesBundlesPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }
  public putPolling(value: SystemExternalBundlesBundlesPolling) {
    this._polling.internalValue = value;
  }
  public resetPolling() {
    this._polling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingInput() {
    return this._polling.internalValue;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // signing - computed: true, optional: true, required: false
  private _signing = new SystemExternalBundlesBundlesSigningOutputReference(this, "signing");
  public get signing() {
    return this._signing;
  }
  public putSigning(value: SystemExternalBundlesBundlesSigning) {
    this._signing.internalValue = value;
  }
  public resetSigning() {
    this._signing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingInput() {
    return this._signing.internalValue;
  }

  // size_limit_bytes - computed: true, optional: true, required: false
  private _sizeLimitBytes?: number; 
  public get sizeLimitBytes() {
    return this.getNumberAttribute('size_limit_bytes');
  }
  public set sizeLimitBytes(value: number) {
    this._sizeLimitBytes = value;
  }
  public resetSizeLimitBytes() {
    this._sizeLimitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitBytesInput() {
    return this._sizeLimitBytes;
  }
}

export class SystemExternalBundlesBundlesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SystemExternalBundlesBundles } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SystemExternalBundlesBundlesOutputReference {
    return new SystemExternalBundlesBundlesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SystemExternalBundlesServicesCredentialsAzureManagedIdentity {
  /**
  * API version to use. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#api_version System#api_version}
  */
  readonly apiVersion?: string;
  /**
  * optional client ID of the managed identity you would like the token for, required if your VM has multiple user-assigned managed identities. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#client_id System#client_id}
  */
  readonly clientId?: string;
  /**
  * request endpoint. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#endpoint System#endpoint}
  */
  readonly endpoint?: string;
  /**
  * optional Azure Resource ID of the managed identity you would like the token for, required, if your VM has multiple user-assigned managed identities. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#mi_res_id System#mi_res_id}
  */
  readonly miResId?: string;
  /**
  * optional object ID of the managed identity you would like the token for, required if your VM has multiple user-assigned managed identities. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#object_id System#object_id}
  */
  readonly objectId?: string;
  /**
  * app ID URI of the target resource. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#resource System#resource}
  */
  readonly resource?: string;
}

export function systemExternalBundlesServicesCredentialsAzureManagedIdentityToTerraform(struct?: SystemExternalBundlesServicesCredentialsAzureManagedIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    mi_res_id: cdktf.stringToTerraform(struct!.miResId),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function systemExternalBundlesServicesCredentialsAzureManagedIdentityToHclTerraform(struct?: SystemExternalBundlesServicesCredentialsAzureManagedIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mi_res_id: {
      value: cdktf.stringToHclTerraform(struct!.miResId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesCredentialsAzureManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentialsAzureManagedIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._miResId !== undefined) {
      hasAnyValues = true;
      internalValueResult.miResId = this._miResId;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentialsAzureManagedIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._clientId = undefined;
      this._endpoint = undefined;
      this._miResId = undefined;
      this._objectId = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._clientId = value.clientId;
      this._endpoint = value.endpoint;
      this._miResId = value.miResId;
      this._objectId = value.objectId;
      this._resource = value.resource;
    }
  }

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // mi_res_id - computed: true, optional: true, required: false
  private _miResId?: string; 
  public get miResId() {
    return this.getStringAttribute('mi_res_id');
  }
  public set miResId(value: string) {
    this._miResId = value;
  }
  public resetMiResId() {
    this._miResId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get miResIdInput() {
    return this._miResId;
  }

  // object_id - computed: true, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface SystemExternalBundlesServicesCredentialsBearer {
  /**
  * bearer token scheme to specify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#scheme System#scheme}
  */
  readonly scheme?: string;
  /**
  * enables token-based authentication and supplies the bearer token to authenticate with. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#token System#token}
  */
  readonly token?: string;
  /**
  * enables token-based authentication and supplies the path to the bearer token to authenticate with. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#token_path System#token_path}
  */
  readonly tokenPath?: string;
}

export function systemExternalBundlesServicesCredentialsBearerToTerraform(struct?: SystemExternalBundlesServicesCredentialsBearer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scheme: cdktf.stringToTerraform(struct!.scheme),
    token: cdktf.stringToTerraform(struct!.token),
    token_path: cdktf.stringToTerraform(struct!.tokenPath),
  }
}


export function systemExternalBundlesServicesCredentialsBearerToHclTerraform(struct?: SystemExternalBundlesServicesCredentialsBearer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_path: {
      value: cdktf.stringToHclTerraform(struct!.tokenPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesCredentialsBearerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentialsBearer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._tokenPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenPath = this._tokenPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentialsBearer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheme = undefined;
      this._token = undefined;
      this._tokenPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheme = value.scheme;
      this._token = value.token;
      this._tokenPath = value.tokenPath;
    }
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_path - computed: true, optional: true, required: false
  private _tokenPath?: string; 
  public get tokenPath() {
    return this.getStringAttribute('token_path');
  }
  public set tokenPath(value: string) {
    this._tokenPath = value;
  }
  public resetTokenPath() {
    this._tokenPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPathInput() {
    return this._tokenPath;
  }
}
export interface SystemExternalBundlesServicesCredentialsClientTls {
  /**
  * the path to the client certificate to authenticate with. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#cert System#cert}
  */
  readonly cert?: string;
  /**
  * the path to the private key of the client certificate. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#private_key System#private_key}
  */
  readonly privateKey?: string;
  /**
  * the passphrase to use for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#private_key_passphrase System#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
}

export function systemExternalBundlesServicesCredentialsClientTlsToTerraform(struct?: SystemExternalBundlesServicesCredentialsClientTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_passphrase: cdktf.stringToTerraform(struct!.privateKeyPassphrase),
  }
}


export function systemExternalBundlesServicesCredentialsClientTlsToHclTerraform(struct?: SystemExternalBundlesServicesCredentialsClientTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesCredentialsClientTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentialsClientTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphrase = this._privateKeyPassphrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentialsClientTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._privateKey = undefined;
      this._privateKeyPassphrase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._privateKey = value.privateKey;
      this._privateKeyPassphrase = value.privateKeyPassphrase;
    }
  }

  // cert - computed: true, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_passphrase - computed: true, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }
}
export interface SystemExternalBundlesServicesCredentialsGcpMetadata {
  /**
  * the access token metadata path to use. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#access_token_path System#access_token_path}
  */
  readonly accessTokenPath?: string;
  /**
  * the audience to use when fetching identity tokens. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#audience System#audience}
  */
  readonly audience?: string;
  /**
  * the metadata endpoint to use. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#endpoint System#endpoint}
  */
  readonly endpoint?: string;
  /**
  * the identity token metadata path to use. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#id_token_path System#id_token_path}
  */
  readonly idTokenPath?: string;
  /**
  * the set of scopes to use when fetching access token. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#scopes System#scopes}
  */
  readonly scopes?: string[];
}

export function systemExternalBundlesServicesCredentialsGcpMetadataToTerraform(struct?: SystemExternalBundlesServicesCredentialsGcpMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_path: cdktf.stringToTerraform(struct!.accessTokenPath),
    audience: cdktf.stringToTerraform(struct!.audience),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id_token_path: cdktf.stringToTerraform(struct!.idTokenPath),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function systemExternalBundlesServicesCredentialsGcpMetadataToHclTerraform(struct?: SystemExternalBundlesServicesCredentialsGcpMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_path: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_path: {
      value: cdktf.stringToHclTerraform(struct!.idTokenPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesCredentialsGcpMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentialsGcpMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenPath = this._accessTokenPath;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._idTokenPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenPath = this._idTokenPath;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentialsGcpMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenPath = undefined;
      this._audience = undefined;
      this._endpoint = undefined;
      this._idTokenPath = undefined;
      this._scopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenPath = value.accessTokenPath;
      this._audience = value.audience;
      this._endpoint = value.endpoint;
      this._idTokenPath = value.idTokenPath;
      this._scopes = value.scopes;
    }
  }

  // access_token_path - computed: true, optional: true, required: false
  private _accessTokenPath?: string; 
  public get accessTokenPath() {
    return this.getStringAttribute('access_token_path');
  }
  public set accessTokenPath(value: string) {
    this._accessTokenPath = value;
  }
  public resetAccessTokenPath() {
    this._accessTokenPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenPathInput() {
    return this._accessTokenPath;
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // id_token_path - computed: true, optional: true, required: false
  private _idTokenPath?: string; 
  public get idTokenPath() {
    return this.getStringAttribute('id_token_path');
  }
  public set idTokenPath(value: string) {
    this._idTokenPath = value;
  }
  public resetIdTokenPath() {
    this._idTokenPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenPathInput() {
    return this._idTokenPath;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface SystemExternalBundlesServicesCredentialsOauth2AdditionalClaims {
}

export function systemExternalBundlesServicesCredentialsOauth2AdditionalClaimsToTerraform(struct?: SystemExternalBundlesServicesCredentialsOauth2AdditionalClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemExternalBundlesServicesCredentialsOauth2AdditionalClaimsToHclTerraform(struct?: SystemExternalBundlesServicesCredentialsOauth2AdditionalClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemExternalBundlesServicesCredentialsOauth2AdditionalClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentialsOauth2AdditionalClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentialsOauth2AdditionalClaims | cdktf.IResolvable | undefined) {
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
}
export interface SystemExternalBundlesServicesCredentialsOauth2 {
  /**
  * map of claims to include in the JWT. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#additional_claims System#additional_claims}
  */
  readonly additionalClaims?: SystemExternalBundlesServicesCredentialsOauth2AdditionalClaims;
  /**
  * map of additional headers to send to token endpoint at the OAuth2 authorization server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#additional_headers System#additional_headers}
  */
  readonly additionalHeaders?: { [key: string]: string };
  /**
  * map of additional body parameters to send token endpoint at the OAuth2 authorization server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#additional_parameters System#additional_parameters}
  */
  readonly additionalParameters?: { [key: string]: string };
  /**
  * the client ID to use for authentication. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#client_id System#client_id}
  */
  readonly clientId?: string;
  /**
  * the client secret to use for authentication. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#client_secret System#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * defaults to client_credentials. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#grant_type System#grant_type}
  */
  readonly grantType?: string;
  /**
  * include a uniquely generated jti claim in any issued JWT. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#include_jti_claim System#include_jti_claim}
  */
  readonly includeJtiClaim?: boolean | cdktf.IResolvable;
  /**
  * optional list of scopes to request for the token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#scopes System#scopes}
  */
  readonly scopes?: string[];
  /**
  * reference to private key used for signing the JWT. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#signing_key System#signing_key}
  */
  readonly signingKey?: string;
  /**
  * certificate thumbprint to use for x5t header generation. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#thumbprint System#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * URL pointing to the token endpoint at the OAuth2 authorization server. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#token_url System#token_url}
  */
  readonly tokenUrl?: string;
}

export function systemExternalBundlesServicesCredentialsOauth2ToTerraform(struct?: SystemExternalBundlesServicesCredentialsOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_claims: systemExternalBundlesServicesCredentialsOauth2AdditionalClaimsToTerraform(struct!.additionalClaims),
    additional_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalHeaders),
    additional_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalParameters),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    grant_type: cdktf.stringToTerraform(struct!.grantType),
    include_jti_claim: cdktf.booleanToTerraform(struct!.includeJtiClaim),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    signing_key: cdktf.stringToTerraform(struct!.signingKey),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function systemExternalBundlesServicesCredentialsOauth2ToHclTerraform(struct?: SystemExternalBundlesServicesCredentialsOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_claims: {
      value: systemExternalBundlesServicesCredentialsOauth2AdditionalClaimsToHclTerraform(struct!.additionalClaims),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentialsOauth2AdditionalClaims",
    },
    additional_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    additional_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_type: {
      value: cdktf.stringToHclTerraform(struct!.grantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_jti_claim: {
      value: cdktf.booleanToHclTerraform(struct!.includeJtiClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    signing_key: {
      value: cdktf.stringToHclTerraform(struct!.signingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesCredentialsOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentialsOauth2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalClaims = this._additionalClaims?.internalValue;
    }
    if (this._additionalHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalHeaders = this._additionalHeaders;
    }
    if (this._additionalParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalParameters = this._additionalParameters;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._grantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantType = this._grantType;
    }
    if (this._includeJtiClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeJtiClaim = this._includeJtiClaim;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._signingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingKey = this._signingKey;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentialsOauth2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalClaims.internalValue = undefined;
      this._additionalHeaders = undefined;
      this._additionalParameters = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._grantType = undefined;
      this._includeJtiClaim = undefined;
      this._scopes = undefined;
      this._signingKey = undefined;
      this._thumbprint = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalClaims.internalValue = value.additionalClaims;
      this._additionalHeaders = value.additionalHeaders;
      this._additionalParameters = value.additionalParameters;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._grantType = value.grantType;
      this._includeJtiClaim = value.includeJtiClaim;
      this._scopes = value.scopes;
      this._signingKey = value.signingKey;
      this._thumbprint = value.thumbprint;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // additional_claims - computed: true, optional: true, required: false
  private _additionalClaims = new SystemExternalBundlesServicesCredentialsOauth2AdditionalClaimsOutputReference(this, "additional_claims");
  public get additionalClaims() {
    return this._additionalClaims;
  }
  public putAdditionalClaims(value: SystemExternalBundlesServicesCredentialsOauth2AdditionalClaims) {
    this._additionalClaims.internalValue = value;
  }
  public resetAdditionalClaims() {
    this._additionalClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalClaimsInput() {
    return this._additionalClaims.internalValue;
  }

  // additional_headers - computed: true, optional: true, required: false
  private _additionalHeaders?: { [key: string]: string }; 
  public get additionalHeaders() {
    return this.getStringMapAttribute('additional_headers');
  }
  public set additionalHeaders(value: { [key: string]: string }) {
    this._additionalHeaders = value;
  }
  public resetAdditionalHeaders() {
    this._additionalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeadersInput() {
    return this._additionalHeaders;
  }

  // additional_parameters - computed: true, optional: true, required: false
  private _additionalParameters?: { [key: string]: string }; 
  public get additionalParameters() {
    return this.getStringMapAttribute('additional_parameters');
  }
  public set additionalParameters(value: { [key: string]: string }) {
    this._additionalParameters = value;
  }
  public resetAdditionalParameters() {
    this._additionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalParametersInput() {
    return this._additionalParameters;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // grant_type - computed: true, optional: true, required: false
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // include_jti_claim - computed: true, optional: true, required: false
  private _includeJtiClaim?: boolean | cdktf.IResolvable; 
  public get includeJtiClaim() {
    return this.getBooleanAttribute('include_jti_claim');
  }
  public set includeJtiClaim(value: boolean | cdktf.IResolvable) {
    this._includeJtiClaim = value;
  }
  public resetIncludeJtiClaim() {
    this._includeJtiClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeJtiClaimInput() {
    return this._includeJtiClaim;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // signing_key - computed: true, optional: true, required: false
  private _signingKey?: string; 
  public get signingKey() {
    return this.getStringAttribute('signing_key');
  }
  public set signingKey(value: string) {
    this._signingKey = value;
  }
  public resetSigningKey() {
    this._signingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyInput() {
    return this._signingKey;
  }

  // thumbprint - computed: true, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // token_url - computed: true, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface SystemExternalBundlesServicesCredentialsS3SigningMetadataCredentials {
  /**
  * the AWS region to use for the AWS signing service credential method. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#aws_region System#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * the IAM role to use for the AWS signing service credential method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#iam_role System#iam_role}
  */
  readonly iamRole?: string;
}

export function systemExternalBundlesServicesCredentialsS3SigningMetadataCredentialsToTerraform(struct?: SystemExternalBundlesServicesCredentialsS3SigningMetadataCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    iam_role: cdktf.stringToTerraform(struct!.iamRole),
  }
}


export function systemExternalBundlesServicesCredentialsS3SigningMetadataCredentialsToHclTerraform(struct?: SystemExternalBundlesServicesCredentialsS3SigningMetadataCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role: {
      value: cdktf.stringToHclTerraform(struct!.iamRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesCredentialsS3SigningMetadataCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentialsS3SigningMetadataCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._iamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentialsS3SigningMetadataCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._iamRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._iamRole = value.iamRole;
    }
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // iam_role - computed: true, optional: true, required: false
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
  }
}
export interface SystemExternalBundlesServicesCredentialsS3SigningProfileCredentials {
  /**
  * the AWS region to use for the AWS signing service credential method. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#aws_region System#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * the path to the shared credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#path System#path}
  */
  readonly path?: string;
  /**
  * AWS Profile to extract credentials from the credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#profile System#profile}
  */
  readonly profile?: string;
}

export function systemExternalBundlesServicesCredentialsS3SigningProfileCredentialsToTerraform(struct?: SystemExternalBundlesServicesCredentialsS3SigningProfileCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    path: cdktf.stringToTerraform(struct!.path),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function systemExternalBundlesServicesCredentialsS3SigningProfileCredentialsToHclTerraform(struct?: SystemExternalBundlesServicesCredentialsS3SigningProfileCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesCredentialsS3SigningProfileCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentialsS3SigningProfileCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentialsS3SigningProfileCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._path = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._path = value.path;
      this._profile = value.profile;
    }
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface SystemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials {
  /**
  * the AWS region to use for the sts regional endpoint (default: global). Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#aws_region System#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * the session name used to identify the assumed role session (default: open-policy-agent). Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#session_name System#session_name}
  */
  readonly sessionName?: string;
}

export function systemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsToTerraform(struct?: SystemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
  }
}


export function systemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsToHclTerraform(struct?: SystemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._sessionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._sessionName = value.sessionName;
    }
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // session_name - computed: true, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }
}
export interface SystemExternalBundlesServicesCredentialsS3Signing {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#environment_credentials System#environment_credentials}
  */
  readonly environmentCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#metadata_credentials System#metadata_credentials}
  */
  readonly metadataCredentials?: SystemExternalBundlesServicesCredentialsS3SigningMetadataCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#profile_credentials System#profile_credentials}
  */
  readonly profileCredentials?: SystemExternalBundlesServicesCredentialsS3SigningProfileCredentials;
  /**
  * the AWS service to sign requests with, eg execute-api or s3 (default: s3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#service System#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#web_identity_credentials System#web_identity_credentials}
  */
  readonly webIdentityCredentials?: SystemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials;
}

export function systemExternalBundlesServicesCredentialsS3SigningToTerraform(struct?: SystemExternalBundlesServicesCredentialsS3Signing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_credentials: cdktf.stringToTerraform(struct!.environmentCredentials),
    metadata_credentials: systemExternalBundlesServicesCredentialsS3SigningMetadataCredentialsToTerraform(struct!.metadataCredentials),
    profile_credentials: systemExternalBundlesServicesCredentialsS3SigningProfileCredentialsToTerraform(struct!.profileCredentials),
    service: cdktf.stringToTerraform(struct!.service),
    web_identity_credentials: systemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsToTerraform(struct!.webIdentityCredentials),
  }
}


export function systemExternalBundlesServicesCredentialsS3SigningToHclTerraform(struct?: SystemExternalBundlesServicesCredentialsS3Signing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_credentials: {
      value: cdktf.stringToHclTerraform(struct!.environmentCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_credentials: {
      value: systemExternalBundlesServicesCredentialsS3SigningMetadataCredentialsToHclTerraform(struct!.metadataCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentialsS3SigningMetadataCredentials",
    },
    profile_credentials: {
      value: systemExternalBundlesServicesCredentialsS3SigningProfileCredentialsToHclTerraform(struct!.profileCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentialsS3SigningProfileCredentials",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_credentials: {
      value: systemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsToHclTerraform(struct!.webIdentityCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesCredentialsS3SigningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentialsS3Signing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentCredentials = this._environmentCredentials;
    }
    if (this._metadataCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataCredentials = this._metadataCredentials?.internalValue;
    }
    if (this._profileCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileCredentials = this._profileCredentials?.internalValue;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._webIdentityCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webIdentityCredentials = this._webIdentityCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentialsS3Signing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentCredentials = undefined;
      this._metadataCredentials.internalValue = undefined;
      this._profileCredentials.internalValue = undefined;
      this._service = undefined;
      this._webIdentityCredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentCredentials = value.environmentCredentials;
      this._metadataCredentials.internalValue = value.metadataCredentials;
      this._profileCredentials.internalValue = value.profileCredentials;
      this._service = value.service;
      this._webIdentityCredentials.internalValue = value.webIdentityCredentials;
    }
  }

  // environment_credentials - computed: true, optional: true, required: false
  private _environmentCredentials?: string; 
  public get environmentCredentials() {
    return this.getStringAttribute('environment_credentials');
  }
  public set environmentCredentials(value: string) {
    this._environmentCredentials = value;
  }
  public resetEnvironmentCredentials() {
    this._environmentCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentCredentialsInput() {
    return this._environmentCredentials;
  }

  // metadata_credentials - computed: true, optional: true, required: false
  private _metadataCredentials = new SystemExternalBundlesServicesCredentialsS3SigningMetadataCredentialsOutputReference(this, "metadata_credentials");
  public get metadataCredentials() {
    return this._metadataCredentials;
  }
  public putMetadataCredentials(value: SystemExternalBundlesServicesCredentialsS3SigningMetadataCredentials) {
    this._metadataCredentials.internalValue = value;
  }
  public resetMetadataCredentials() {
    this._metadataCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataCredentialsInput() {
    return this._metadataCredentials.internalValue;
  }

  // profile_credentials - computed: true, optional: true, required: false
  private _profileCredentials = new SystemExternalBundlesServicesCredentialsS3SigningProfileCredentialsOutputReference(this, "profile_credentials");
  public get profileCredentials() {
    return this._profileCredentials;
  }
  public putProfileCredentials(value: SystemExternalBundlesServicesCredentialsS3SigningProfileCredentials) {
    this._profileCredentials.internalValue = value;
  }
  public resetProfileCredentials() {
    this._profileCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileCredentialsInput() {
    return this._profileCredentials.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // web_identity_credentials - computed: true, optional: true, required: false
  private _webIdentityCredentials = new SystemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsOutputReference(this, "web_identity_credentials");
  public get webIdentityCredentials() {
    return this._webIdentityCredentials;
  }
  public putWebIdentityCredentials(value: SystemExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials) {
    this._webIdentityCredentials.internalValue = value;
  }
  public resetWebIdentityCredentials() {
    this._webIdentityCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webIdentityCredentialsInput() {
    return this._webIdentityCredentials.internalValue;
  }
}
export interface SystemExternalBundlesServicesCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#azure_managed_identity System#azure_managed_identity}
  */
  readonly azureManagedIdentity?: SystemExternalBundlesServicesCredentialsAzureManagedIdentity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#bearer System#bearer}
  */
  readonly bearer?: SystemExternalBundlesServicesCredentialsBearer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#client_tls System#client_tls}
  */
  readonly clientTls?: SystemExternalBundlesServicesCredentialsClientTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#gcp_metadata System#gcp_metadata}
  */
  readonly gcpMetadata?: SystemExternalBundlesServicesCredentialsGcpMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#oauth2 System#oauth2}
  */
  readonly oauth2?: SystemExternalBundlesServicesCredentialsOauth2;
  /**
  * authenticate using a custom plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#plugin System#plugin}
  */
  readonly plugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#s3_signing System#s3_signing}
  */
  readonly s3Signing?: SystemExternalBundlesServicesCredentialsS3Signing;
}

export function systemExternalBundlesServicesCredentialsToTerraform(struct?: SystemExternalBundlesServicesCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_managed_identity: systemExternalBundlesServicesCredentialsAzureManagedIdentityToTerraform(struct!.azureManagedIdentity),
    bearer: systemExternalBundlesServicesCredentialsBearerToTerraform(struct!.bearer),
    client_tls: systemExternalBundlesServicesCredentialsClientTlsToTerraform(struct!.clientTls),
    gcp_metadata: systemExternalBundlesServicesCredentialsGcpMetadataToTerraform(struct!.gcpMetadata),
    oauth2: systemExternalBundlesServicesCredentialsOauth2ToTerraform(struct!.oauth2),
    plugin: cdktf.stringToTerraform(struct!.plugin),
    s3_signing: systemExternalBundlesServicesCredentialsS3SigningToTerraform(struct!.s3Signing),
  }
}


export function systemExternalBundlesServicesCredentialsToHclTerraform(struct?: SystemExternalBundlesServicesCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_managed_identity: {
      value: systemExternalBundlesServicesCredentialsAzureManagedIdentityToHclTerraform(struct!.azureManagedIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentialsAzureManagedIdentity",
    },
    bearer: {
      value: systemExternalBundlesServicesCredentialsBearerToHclTerraform(struct!.bearer),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentialsBearer",
    },
    client_tls: {
      value: systemExternalBundlesServicesCredentialsClientTlsToHclTerraform(struct!.clientTls),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentialsClientTls",
    },
    gcp_metadata: {
      value: systemExternalBundlesServicesCredentialsGcpMetadataToHclTerraform(struct!.gcpMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentialsGcpMetadata",
    },
    oauth2: {
      value: systemExternalBundlesServicesCredentialsOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentialsOauth2",
    },
    plugin: {
      value: cdktf.stringToHclTerraform(struct!.plugin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_signing: {
      value: systemExternalBundlesServicesCredentialsS3SigningToHclTerraform(struct!.s3Signing),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentialsS3Signing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureManagedIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureManagedIdentity = this._azureManagedIdentity?.internalValue;
    }
    if (this._bearer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearer = this._bearer?.internalValue;
    }
    if (this._clientTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTls = this._clientTls?.internalValue;
    }
    if (this._gcpMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpMetadata = this._gcpMetadata?.internalValue;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    if (this._plugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin;
    }
    if (this._s3Signing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Signing = this._s3Signing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureManagedIdentity.internalValue = undefined;
      this._bearer.internalValue = undefined;
      this._clientTls.internalValue = undefined;
      this._gcpMetadata.internalValue = undefined;
      this._oauth2.internalValue = undefined;
      this._plugin = undefined;
      this._s3Signing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureManagedIdentity.internalValue = value.azureManagedIdentity;
      this._bearer.internalValue = value.bearer;
      this._clientTls.internalValue = value.clientTls;
      this._gcpMetadata.internalValue = value.gcpMetadata;
      this._oauth2.internalValue = value.oauth2;
      this._plugin = value.plugin;
      this._s3Signing.internalValue = value.s3Signing;
    }
  }

  // azure_managed_identity - computed: true, optional: true, required: false
  private _azureManagedIdentity = new SystemExternalBundlesServicesCredentialsAzureManagedIdentityOutputReference(this, "azure_managed_identity");
  public get azureManagedIdentity() {
    return this._azureManagedIdentity;
  }
  public putAzureManagedIdentity(value: SystemExternalBundlesServicesCredentialsAzureManagedIdentity) {
    this._azureManagedIdentity.internalValue = value;
  }
  public resetAzureManagedIdentity() {
    this._azureManagedIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureManagedIdentityInput() {
    return this._azureManagedIdentity.internalValue;
  }

  // bearer - computed: true, optional: true, required: false
  private _bearer = new SystemExternalBundlesServicesCredentialsBearerOutputReference(this, "bearer");
  public get bearer() {
    return this._bearer;
  }
  public putBearer(value: SystemExternalBundlesServicesCredentialsBearer) {
    this._bearer.internalValue = value;
  }
  public resetBearer() {
    this._bearer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerInput() {
    return this._bearer.internalValue;
  }

  // client_tls - computed: true, optional: true, required: false
  private _clientTls = new SystemExternalBundlesServicesCredentialsClientTlsOutputReference(this, "client_tls");
  public get clientTls() {
    return this._clientTls;
  }
  public putClientTls(value: SystemExternalBundlesServicesCredentialsClientTls) {
    this._clientTls.internalValue = value;
  }
  public resetClientTls() {
    this._clientTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsInput() {
    return this._clientTls.internalValue;
  }

  // gcp_metadata - computed: true, optional: true, required: false
  private _gcpMetadata = new SystemExternalBundlesServicesCredentialsGcpMetadataOutputReference(this, "gcp_metadata");
  public get gcpMetadata() {
    return this._gcpMetadata;
  }
  public putGcpMetadata(value: SystemExternalBundlesServicesCredentialsGcpMetadata) {
    this._gcpMetadata.internalValue = value;
  }
  public resetGcpMetadata() {
    this._gcpMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpMetadataInput() {
    return this._gcpMetadata.internalValue;
  }

  // oauth2 - computed: true, optional: true, required: false
  private _oauth2 = new SystemExternalBundlesServicesCredentialsOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: SystemExternalBundlesServicesCredentialsOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // plugin - computed: true, optional: true, required: false
  private _plugin?: string; 
  public get plugin() {
    return this.getStringAttribute('plugin');
  }
  public set plugin(value: string) {
    this._plugin = value;
  }
  public resetPlugin() {
    this._plugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // s3_signing - computed: true, optional: true, required: false
  private _s3Signing = new SystemExternalBundlesServicesCredentialsS3SigningOutputReference(this, "s3_signing");
  public get s3Signing() {
    return this._s3Signing;
  }
  public putS3Signing(value: SystemExternalBundlesServicesCredentialsS3Signing) {
    this._s3Signing.internalValue = value;
  }
  public resetS3Signing() {
    this._s3Signing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SigningInput() {
    return this._s3Signing.internalValue;
  }
}
export interface SystemExternalBundlesServicesKeys {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#algorithm System#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#key System#key}
  */
  readonly key?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#private_key System#private_key}
  */
  readonly privateKey?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#scope System#scope}
  */
  readonly scope?: string;
}

export function systemExternalBundlesServicesKeysToTerraform(struct?: SystemExternalBundlesServicesKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key: cdktf.stringToTerraform(struct!.key),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function systemExternalBundlesServicesKeysToHclTerraform(struct?: SystemExternalBundlesServicesKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SystemExternalBundlesServicesKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._key = undefined;
      this._privateKey = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._key = value.key;
      this._privateKey = value.privateKey;
      this._scope = value.scope;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class SystemExternalBundlesServicesKeysMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SystemExternalBundlesServicesKeys } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SystemExternalBundlesServicesKeysOutputReference {
    return new SystemExternalBundlesServicesKeysOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SystemExternalBundlesServicesTls {
  /**
  * the path to the root CA certificate. If not provided, this defaults to TLS using the host’s root CA set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#ca_cert System#ca_cert}
  */
  readonly caCert?: string;
  /**
  * require system certificate appended with root CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#system_ca_required System#system_ca_required}
  */
  readonly systemCaRequired?: boolean | cdktf.IResolvable;
}

export function systemExternalBundlesServicesTlsToTerraform(struct?: SystemExternalBundlesServicesTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    system_ca_required: cdktf.booleanToTerraform(struct!.systemCaRequired),
  }
}


export function systemExternalBundlesServicesTlsToHclTerraform(struct?: SystemExternalBundlesServicesTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_ca_required: {
      value: cdktf.booleanToHclTerraform(struct!.systemCaRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundlesServicesTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._systemCaRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCaRequired = this._systemCaRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServicesTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert = undefined;
      this._systemCaRequired = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert = value.caCert;
      this._systemCaRequired = value.systemCaRequired;
    }
  }

  // ca_cert - computed: true, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // system_ca_required - computed: true, optional: true, required: false
  private _systemCaRequired?: boolean | cdktf.IResolvable; 
  public get systemCaRequired() {
    return this.getBooleanAttribute('system_ca_required');
  }
  public set systemCaRequired(value: boolean | cdktf.IResolvable) {
    this._systemCaRequired = value;
  }
  public resetSystemCaRequired() {
    this._systemCaRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCaRequiredInput() {
    return this._systemCaRequired;
  }
}
export interface SystemExternalBundlesServices {
  /**
  * allow insecure TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#allow_insecure_tls System#allow_insecure_tls}
  */
  readonly allowInsecureTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#credentials System#credentials}
  */
  readonly credentials?: SystemExternalBundlesServicesCredentials;
  /**
  * HTTP headers to include in the requests to the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#headers System#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * keys is a dictionary mapping the key name to the actual key and optionally the algorithm and scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#keys System#keys}
  */
  readonly keys?: { [key: string]: SystemExternalBundlesServicesKeys } | cdktf.IResolvable;
  /**
  * unique name for each service, referred to by plugins. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#name System#name}
  */
  readonly name?: string;
  /**
  * amount of time to wait for a server's response headers after fully writing the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#response_header_timeout_seconds System#response_header_timeout_seconds}
  */
  readonly responseHeaderTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#tls System#tls}
  */
  readonly tls?: SystemExternalBundlesServicesTls;
  /**
  * optional parameter that allows to use an “OCI” service type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#type System#type}
  */
  readonly type?: string;
  /**
  * base URL to contact the service with. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#url System#url}
  */
  readonly url?: string;
}

export function systemExternalBundlesServicesToTerraform(struct?: SystemExternalBundlesServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure_tls: cdktf.booleanToTerraform(struct!.allowInsecureTls),
    credentials: systemExternalBundlesServicesCredentialsToTerraform(struct!.credentials),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    keys: cdktf.hashMapper(systemExternalBundlesServicesKeysToTerraform)(struct!.keys),
    name: cdktf.stringToTerraform(struct!.name),
    response_header_timeout_seconds: cdktf.numberToTerraform(struct!.responseHeaderTimeoutSeconds),
    tls: systemExternalBundlesServicesTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function systemExternalBundlesServicesToHclTerraform(struct?: SystemExternalBundlesServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure_tls: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecureTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credentials: {
      value: systemExternalBundlesServicesCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesCredentials",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    keys: {
      value: cdktf.hashMapperHcl(systemExternalBundlesServicesKeysToHclTerraform)(struct!.keys),
      isBlock: true,
      type: "map",
      storageClassType: "SystemExternalBundlesServicesKeysMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_header_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.responseHeaderTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: systemExternalBundlesServicesTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemExternalBundlesServicesTls",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemExternalBundlesServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecureTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecureTls = this._allowInsecureTls;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._responseHeaderTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderTimeoutSeconds = this._responseHeaderTimeoutSeconds;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundlesServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInsecureTls = undefined;
      this._credentials.internalValue = undefined;
      this._headers = undefined;
      this._keys.internalValue = undefined;
      this._name = undefined;
      this._responseHeaderTimeoutSeconds = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInsecureTls = value.allowInsecureTls;
      this._credentials.internalValue = value.credentials;
      this._headers = value.headers;
      this._keys.internalValue = value.keys;
      this._name = value.name;
      this._responseHeaderTimeoutSeconds = value.responseHeaderTimeoutSeconds;
      this._tls.internalValue = value.tls;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // allow_insecure_tls - computed: true, optional: true, required: false
  private _allowInsecureTls?: boolean | cdktf.IResolvable; 
  public get allowInsecureTls() {
    return this.getBooleanAttribute('allow_insecure_tls');
  }
  public set allowInsecureTls(value: boolean | cdktf.IResolvable) {
    this._allowInsecureTls = value;
  }
  public resetAllowInsecureTls() {
    this._allowInsecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureTlsInput() {
    return this._allowInsecureTls;
  }

  // credentials - computed: true, optional: true, required: false
  private _credentials = new SystemExternalBundlesServicesCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SystemExternalBundlesServicesCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // keys - computed: true, optional: true, required: false
  private _keys = new SystemExternalBundlesServicesKeysMap(this, "keys");
  public get keys() {
    return this._keys;
  }
  public putKeys(value: { [key: string]: SystemExternalBundlesServicesKeys } | cdktf.IResolvable) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
  }

  // name - computed: true, optional: true, required: false
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

  // response_header_timeout_seconds - computed: true, optional: true, required: false
  private _responseHeaderTimeoutSeconds?: number; 
  public get responseHeaderTimeoutSeconds() {
    return this.getNumberAttribute('response_header_timeout_seconds');
  }
  public set responseHeaderTimeoutSeconds(value: number) {
    this._responseHeaderTimeoutSeconds = value;
  }
  public resetResponseHeaderTimeoutSeconds() {
    this._responseHeaderTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderTimeoutSecondsInput() {
    return this._responseHeaderTimeoutSeconds;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new SystemExternalBundlesServicesTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: SystemExternalBundlesServicesTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
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

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class SystemExternalBundlesServicesList extends cdktf.ComplexList {
  public internalValue? : SystemExternalBundlesServices[] | cdktf.IResolvable

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
  public get(index: number): SystemExternalBundlesServicesOutputReference {
    return new SystemExternalBundlesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemExternalBundles {
  /**
  * externally configured bundles, use name of bundle as key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#bundles System#bundles}
  */
  readonly bundles?: { [key: string]: SystemExternalBundlesBundles } | cdktf.IResolvable;
  /**
  * externally configured services. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#services System#services}
  */
  readonly services?: SystemExternalBundlesServices[] | cdktf.IResolvable;
}

export function systemExternalBundlesToTerraform(struct?: SystemExternalBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundles: cdktf.hashMapper(systemExternalBundlesBundlesToTerraform)(struct!.bundles),
    services: cdktf.listMapper(systemExternalBundlesServicesToTerraform, false)(struct!.services),
  }
}


export function systemExternalBundlesToHclTerraform(struct?: SystemExternalBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundles: {
      value: cdktf.hashMapperHcl(systemExternalBundlesBundlesToHclTerraform)(struct!.bundles),
      isBlock: true,
      type: "map",
      storageClassType: "SystemExternalBundlesBundlesMap",
    },
    services: {
      value: cdktf.listMapperHcl(systemExternalBundlesServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "SystemExternalBundlesServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemExternalBundlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemExternalBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundles = this._bundles?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExternalBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundles.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundles.internalValue = value.bundles;
      this._services.internalValue = value.services;
    }
  }

  // bundles - computed: true, optional: true, required: false
  private _bundles = new SystemExternalBundlesBundlesMap(this, "bundles");
  public get bundles() {
    return this._bundles;
  }
  public putBundles(value: { [key: string]: SystemExternalBundlesBundles } | cdktf.IResolvable) {
    this._bundles.internalValue = value;
  }
  public resetBundles() {
    this._bundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlesInput() {
    return this._bundles.internalValue;
  }

  // services - computed: true, optional: true, required: false
  private _services = new SystemExternalBundlesServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: SystemExternalBundlesServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface SystemMetadata {
}

export function systemMetadataToTerraform(struct?: SystemMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemMetadataToHclTerraform(struct?: SystemMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_through - computed: true, optional: false, required: false
  public get createdThrough() {
    return this.getStringAttribute('created_through');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_through - computed: true, optional: false, required: false
  public get lastModifiedThrough() {
    return this.getStringAttribute('last_modified_through');
  }
}
export interface SystemMigrationHistory {
}

export function systemMigrationHistoryToTerraform(struct?: SystemMigrationHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemMigrationHistoryToHclTerraform(struct?: SystemMigrationHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemMigrationHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMigrationHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMigrationHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // initiated_by - computed: true, optional: false, required: false
  public get initiatedBy() {
    return this.getStringAttribute('initiated_by');
  }

  // initiating_user - computed: true, optional: false, required: false
  public get initiatingUser() {
    return this.getStringAttribute('initiating_user');
  }

  // migrated_at - computed: true, optional: false, required: false
  public get migratedAt() {
    return this.getStringAttribute('migrated_at');
  }

  // recovered - computed: true, optional: false, required: false
  public get recovered() {
    return this.getBooleanAttribute('recovered');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class SystemMigrationHistoryList extends cdktf.ComplexList {

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
  public get(index: number): SystemMigrationHistoryOutputReference {
    return new SystemMigrationHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemPoliciesEnforcement {
}

export function systemPoliciesEnforcementToTerraform(struct?: SystemPoliciesEnforcement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemPoliciesEnforcementToHclTerraform(struct?: SystemPoliciesEnforcement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemPoliciesEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemPoliciesEnforcement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPoliciesEnforcement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface SystemPoliciesModulesRules {
}

export function systemPoliciesModulesRulesToTerraform(struct?: SystemPoliciesModulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemPoliciesModulesRulesToHclTerraform(struct?: SystemPoliciesModulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemPoliciesModulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemPoliciesModulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPoliciesModulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getNumberAttribute('allow');
  }

  // deny - computed: true, optional: false, required: false
  public get deny() {
    return this.getNumberAttribute('deny');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getNumberAttribute('enforce');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getNumberAttribute('ignore');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getNumberAttribute('notify');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getNumberAttribute('other');
  }

  // test - computed: true, optional: false, required: false
  public get test() {
    return this.getNumberAttribute('test');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}
export interface SystemPoliciesModules {
}

export function systemPoliciesModulesToTerraform(struct?: SystemPoliciesModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemPoliciesModulesToHclTerraform(struct?: SystemPoliciesModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemPoliciesModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemPoliciesModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPoliciesModules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // placeholder - computed: true, optional: false, required: false
  public get placeholder() {
    return this.getBooleanAttribute('placeholder');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new SystemPoliciesModulesRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
}

export class SystemPoliciesModulesList extends cdktf.ComplexList {

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
  public get(index: number): SystemPoliciesModulesOutputReference {
    return new SystemPoliciesModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemPoliciesRules {
}

export function systemPoliciesRulesToTerraform(struct?: SystemPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemPoliciesRulesToHclTerraform(struct?: SystemPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemPoliciesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemPoliciesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPoliciesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getNumberAttribute('allow');
  }

  // deny - computed: true, optional: false, required: false
  public get deny() {
    return this.getNumberAttribute('deny');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getNumberAttribute('enforce');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getNumberAttribute('ignore');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getNumberAttribute('notify');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getNumberAttribute('other');
  }

  // test - computed: true, optional: false, required: false
  public get test() {
    return this.getNumberAttribute('test');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}
export interface SystemPolicies {
}

export function systemPoliciesToTerraform(struct?: SystemPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemPoliciesToHclTerraform(struct?: SystemPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enforcement - computed: true, optional: false, required: false
  private _enforcement = new SystemPoliciesEnforcementOutputReference(this, "enforcement");
  public get enforcement() {
    return this._enforcement;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modules - computed: true, optional: false, required: false
  private _modules = new SystemPoliciesModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new SystemPoliciesRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SystemPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): SystemPoliciesOutputReference {
    return new SystemPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResultAuthzRoleBindings {
}

export function systemResultAuthzRoleBindingsToTerraform(struct?: SystemResultAuthzRoleBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultAuthzRoleBindingsToHclTerraform(struct?: SystemResultAuthzRoleBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultAuthzRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResultAuthzRoleBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultAuthzRoleBindings | undefined) {
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

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
}

export class SystemResultAuthzRoleBindingsList extends cdktf.ComplexList {

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
  public get(index: number): SystemResultAuthzRoleBindingsOutputReference {
    return new SystemResultAuthzRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResultAuthz {
}

export function systemResultAuthzToTerraform(struct?: SystemResultAuthz): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultAuthzToHclTerraform(struct?: SystemResultAuthz): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultAuthzOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultAuthz | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultAuthz | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_bindings - computed: true, optional: false, required: false
  private _roleBindings = new SystemResultAuthzRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
}
export interface SystemResultBundleDownload {
}

export function systemResultBundleDownloadToTerraform(struct?: SystemResultBundleDownload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultBundleDownloadToHclTerraform(struct?: SystemResultBundleDownload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultBundleDownloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultBundleDownload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultBundleDownload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_bundles - computed: true, optional: false, required: false
  public get deltaBundles() {
    return this.getBooleanAttribute('delta_bundles');
  }
}
export interface SystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials {
}

export function systemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsToTerraform(struct?: SystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsToHclTerraform(struct?: SystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentials {
}

export function systemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsToTerraform(struct?: SystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsToHclTerraform(struct?: SystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // iam_role - computed: true, optional: false, required: false
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
}
export interface SystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials {
}

export function systemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsToTerraform(struct?: SystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsToHclTerraform(struct?: SystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // session_name - computed: true, optional: false, required: false
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
}
export interface SystemResultBundleRegistryDistributionS3OpaCredentials {
}

export function systemResultBundleRegistryDistributionS3OpaCredentialsToTerraform(struct?: SystemResultBundleRegistryDistributionS3OpaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultBundleRegistryDistributionS3OpaCredentialsToHclTerraform(struct?: SystemResultBundleRegistryDistributionS3OpaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultBundleRegistryDistributionS3OpaCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultBundleRegistryDistributionS3OpaCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultBundleRegistryDistributionS3OpaCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_credentials - computed: true, optional: false, required: false
  private _environmentCredentials = new SystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsOutputReference(this, "environment_credentials");
  public get environmentCredentials() {
    return this._environmentCredentials;
  }

  // metadata_credentials - computed: true, optional: false, required: false
  private _metadataCredentials = new SystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsOutputReference(this, "metadata_credentials");
  public get metadataCredentials() {
    return this._metadataCredentials;
  }

  // web_identity_credentials - computed: true, optional: false, required: false
  private _webIdentityCredentials = new SystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsOutputReference(this, "web_identity_credentials");
  public get webIdentityCredentials() {
    return this._webIdentityCredentials;
  }
}
export interface SystemResultBundleRegistryDistributionS3 {
}

export function systemResultBundleRegistryDistributionS3ToTerraform(struct?: SystemResultBundleRegistryDistributionS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultBundleRegistryDistributionS3ToHclTerraform(struct?: SystemResultBundleRegistryDistributionS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultBundleRegistryDistributionS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultBundleRegistryDistributionS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultBundleRegistryDistributionS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_keys - computed: true, optional: false, required: false
  public get accessKeys() {
    return this.getStringAttribute('access_keys');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // context_path - computed: true, optional: false, required: false
  public get contextPath() {
    return this.getStringAttribute('context_path');
  }

  // discovery_path - computed: true, optional: false, required: false
  public get discoveryPath() {
    return this.getStringAttribute('discovery_path');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // opa_credentials - computed: true, optional: false, required: false
  private _opaCredentials = new SystemResultBundleRegistryDistributionS3OpaCredentialsOutputReference(this, "opa_credentials");
  public get opaCredentials() {
    return this._opaCredentials;
  }

  // policy_path - computed: true, optional: false, required: false
  public get policyPath() {
    return this.getStringAttribute('policy_path');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface SystemResultBundleRegistry {
}

export function systemResultBundleRegistryToTerraform(struct?: SystemResultBundleRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultBundleRegistryToHclTerraform(struct?: SystemResultBundleRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultBundleRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultBundleRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultBundleRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_bundle_compatibility_check - computed: true, optional: false, required: false
  public get disableBundleCompatibilityCheck() {
    return this.getBooleanAttribute('disable_bundle_compatibility_check');
  }

  // distribution_s3 - computed: true, optional: false, required: false
  private _distributionS3 = new SystemResultBundleRegistryDistributionS3OutputReference(this, "distribution_s3");
  public get distributionS3() {
    return this._distributionS3;
  }

  // entrypoints - computed: true, optional: false, required: false
  public get entrypoints() {
    return this.getListAttribute('entrypoints');
  }

  // manual_deployment - computed: true, optional: false, required: false
  public get manualDeployment() {
    return this.getBooleanAttribute('manual_deployment');
  }

  // manual_deployment_overrides - computed: true, optional: false, required: false
  private _manualDeploymentOverrides = new cdktf.BooleanMap(this, "manual_deployment_overrides");
  public get manualDeploymentOverrides() {
    return this._manualDeploymentOverrides;
  }

  // max_bundles - computed: true, optional: false, required: false
  public get maxBundles() {
    return this.getNumberAttribute('max_bundles');
  }

  // max_deployed_bundles - computed: true, optional: false, required: false
  public get maxDeployedBundles() {
    return this.getNumberAttribute('max_deployed_bundles');
  }

  // optimization_level - computed: true, optional: false, required: false
  public get optimizationLevel() {
    return this.getNumberAttribute('optimization_level');
  }
}
export interface SystemResultDatasourcesStatus {
}

export function systemResultDatasourcesStatusToTerraform(struct?: SystemResultDatasourcesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultDatasourcesStatusToHclTerraform(struct?: SystemResultDatasourcesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultDatasourcesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultDatasourcesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultDatasourcesStatus | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface SystemResultDatasources {
}

export function systemResultDatasourcesToTerraform(struct?: SystemResultDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultDatasourcesToHclTerraform(struct?: SystemResultDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultDatasourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResultDatasources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultDatasources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // status - computed: true, optional: false, required: false
  private _status = new SystemResultDatasourcesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}

export class SystemResultDatasourcesList extends cdktf.ComplexList {

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
  public get(index: number): SystemResultDatasourcesOutputReference {
    return new SystemResultDatasourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResultDecisionMappingsAllowed {
}

export function systemResultDecisionMappingsAllowedToTerraform(struct?: SystemResultDecisionMappingsAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultDecisionMappingsAllowedToHclTerraform(struct?: SystemResultDecisionMappingsAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultDecisionMappingsAllowedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultDecisionMappingsAllowed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultDecisionMappingsAllowed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expected - computed: true, optional: false, required: false
  public get expected() {
    return this.getStringAttribute('expected');
  }

  // negated - computed: true, optional: false, required: false
  public get negated() {
    return this.getBooleanAttribute('negated');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface SystemResultDecisionMappingsColumns {
}

export function systemResultDecisionMappingsColumnsToTerraform(struct?: SystemResultDecisionMappingsColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultDecisionMappingsColumnsToHclTerraform(struct?: SystemResultDecisionMappingsColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultDecisionMappingsColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResultDecisionMappingsColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultDecisionMappingsColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SystemResultDecisionMappingsColumnsList extends cdktf.ComplexList {

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
  public get(index: number): SystemResultDecisionMappingsColumnsOutputReference {
    return new SystemResultDecisionMappingsColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResultDecisionMappingsReason {
}

export function systemResultDecisionMappingsReasonToTerraform(struct?: SystemResultDecisionMappingsReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultDecisionMappingsReasonToHclTerraform(struct?: SystemResultDecisionMappingsReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultDecisionMappingsReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultDecisionMappingsReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultDecisionMappingsReason | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface SystemResultDecisionMappings {
}

export function systemResultDecisionMappingsToTerraform(struct?: SystemResultDecisionMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultDecisionMappingsToHclTerraform(struct?: SystemResultDecisionMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultDecisionMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SystemResultDecisionMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultDecisionMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed - computed: true, optional: false, required: false
  private _allowed = new SystemResultDecisionMappingsAllowedOutputReference(this, "allowed");
  public get allowed() {
    return this._allowed;
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new SystemResultDecisionMappingsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // reason - computed: true, optional: false, required: false
  private _reason = new SystemResultDecisionMappingsReasonOutputReference(this, "reason");
  public get reason() {
    return this._reason;
  }
}

export class SystemResultDecisionMappingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SystemResultDecisionMappingsOutputReference {
    return new SystemResultDecisionMappingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SystemResultDeploymentParametersDiscovery {
}

export function systemResultDeploymentParametersDiscoveryToTerraform(struct?: SystemResultDeploymentParametersDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultDeploymentParametersDiscoveryToHclTerraform(struct?: SystemResultDeploymentParametersDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultDeploymentParametersDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultDeploymentParametersDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultDeploymentParametersDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SystemResultDeploymentParametersExtra {
}

export function systemResultDeploymentParametersExtraToTerraform(struct?: SystemResultDeploymentParametersExtra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultDeploymentParametersExtraToHclTerraform(struct?: SystemResultDeploymentParametersExtra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultDeploymentParametersExtraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultDeploymentParametersExtra | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultDeploymentParametersExtra | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SystemResultDeploymentParameters {
}

export function systemResultDeploymentParametersToTerraform(struct?: SystemResultDeploymentParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultDeploymentParametersToHclTerraform(struct?: SystemResultDeploymentParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultDeploymentParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultDeploymentParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultDeploymentParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deny_on_opa_fail - computed: true, optional: false, required: false
  public get denyOnOpaFail() {
    return this.getBooleanAttribute('deny_on_opa_fail');
  }

  // discovery - computed: true, optional: false, required: false
  private _discovery = new SystemResultDeploymentParametersDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }

  // extra - computed: true, optional: false, required: false
  private _extra = new SystemResultDeploymentParametersExtraOutputReference(this, "extra");
  public get extra() {
    return this._extra;
  }

  // http_proxy - computed: true, optional: false, required: false
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }

  // https_proxy - computed: true, optional: false, required: false
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // mutating_webhook_name - computed: true, optional: false, required: false
  public get mutatingWebhookName() {
    return this.getStringAttribute('mutating_webhook_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // no_proxy - computed: true, optional: false, required: false
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // trusted_ca_certs - computed: true, optional: false, required: false
  public get trustedCaCerts() {
    return this.getListAttribute('trusted_ca_certs');
  }

  // trusted_container_registry - computed: true, optional: false, required: false
  public get trustedContainerRegistry() {
    return this.getStringAttribute('trusted_container_registry');
  }
}
export interface SystemResultErrorsErrors {
}

export function systemResultErrorsErrorsToTerraform(struct?: SystemResultErrorsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultErrorsErrorsToHclTerraform(struct?: SystemResultErrorsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultErrorsErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResultErrorsErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultErrorsErrors | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class SystemResultErrorsErrorsList extends cdktf.ComplexList {

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
  public get(index: number): SystemResultErrorsErrorsOutputReference {
    return new SystemResultErrorsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResultErrors {
}

export function systemResultErrorsToTerraform(struct?: SystemResultErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultErrorsToHclTerraform(struct?: SystemResultErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SystemResultErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new SystemResultErrorsErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // waiting - computed: true, optional: false, required: false
  public get waiting() {
    return this.getBooleanAttribute('waiting');
  }
}

export class SystemResultErrorsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SystemResultErrorsOutputReference {
    return new SystemResultErrorsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SystemResultExternalBundlesBundlesPolling {
}

export function systemResultExternalBundlesBundlesPollingToTerraform(struct?: SystemResultExternalBundlesBundlesPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesBundlesPollingToHclTerraform(struct?: SystemResultExternalBundlesBundlesPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesBundlesPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesBundlesPolling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesBundlesPolling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_polling_timeout_seconds - computed: true, optional: false, required: false
  public get longPollingTimeoutSeconds() {
    return this.getNumberAttribute('long_polling_timeout_seconds');
  }

  // max_delay_seconds - computed: true, optional: false, required: false
  public get maxDelaySeconds() {
    return this.getNumberAttribute('max_delay_seconds');
  }

  // min_delay_seconds - computed: true, optional: false, required: false
  public get minDelaySeconds() {
    return this.getNumberAttribute('min_delay_seconds');
  }
}
export interface SystemResultExternalBundlesBundlesSigningPublicKeys {
}

export function systemResultExternalBundlesBundlesSigningPublicKeysToTerraform(struct?: SystemResultExternalBundlesBundlesSigningPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesBundlesSigningPublicKeysToHclTerraform(struct?: SystemResultExternalBundlesBundlesSigningPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesBundlesSigningPublicKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SystemResultExternalBundlesBundlesSigningPublicKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesBundlesSigningPublicKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class SystemResultExternalBundlesBundlesSigningPublicKeysMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SystemResultExternalBundlesBundlesSigningPublicKeysOutputReference {
    return new SystemResultExternalBundlesBundlesSigningPublicKeysOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SystemResultExternalBundlesBundlesSigning {
}

export function systemResultExternalBundlesBundlesSigningToTerraform(struct?: SystemResultExternalBundlesBundlesSigning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesBundlesSigningToHclTerraform(struct?: SystemResultExternalBundlesBundlesSigning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesBundlesSigningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesBundlesSigning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesBundlesSigning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_files - computed: true, optional: false, required: false
  public get excludeFiles() {
    return this.getListAttribute('exclude_files');
  }

  // keyid - computed: true, optional: false, required: false
  public get keyid() {
    return this.getStringAttribute('keyid');
  }

  // public_keys - computed: true, optional: false, required: false
  private _publicKeys = new SystemResultExternalBundlesBundlesSigningPublicKeysMap(this, "public_keys");
  public get publicKeys() {
    return this._publicKeys;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface SystemResultExternalBundlesBundles {
}

export function systemResultExternalBundlesBundlesToTerraform(struct?: SystemResultExternalBundlesBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesBundlesToHclTerraform(struct?: SystemResultExternalBundlesBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesBundlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SystemResultExternalBundlesBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // persist - computed: true, optional: false, required: false
  public get persist() {
    return this.getBooleanAttribute('persist');
  }

  // polling - computed: true, optional: false, required: false
  private _polling = new SystemResultExternalBundlesBundlesPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // signing - computed: true, optional: false, required: false
  private _signing = new SystemResultExternalBundlesBundlesSigningOutputReference(this, "signing");
  public get signing() {
    return this._signing;
  }

  // size_limit_bytes - computed: true, optional: false, required: false
  public get sizeLimitBytes() {
    return this.getNumberAttribute('size_limit_bytes');
  }
}

export class SystemResultExternalBundlesBundlesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SystemResultExternalBundlesBundlesOutputReference {
    return new SystemResultExternalBundlesBundlesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SystemResultExternalBundlesServicesCredentialsAzureManagedIdentity {
}

export function systemResultExternalBundlesServicesCredentialsAzureManagedIdentityToTerraform(struct?: SystemResultExternalBundlesServicesCredentialsAzureManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsAzureManagedIdentityToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentialsAzureManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsAzureManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentialsAzureManagedIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentialsAzureManagedIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // mi_res_id - computed: true, optional: false, required: false
  public get miResId() {
    return this.getStringAttribute('mi_res_id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export interface SystemResultExternalBundlesServicesCredentialsBearer {
}

export function systemResultExternalBundlesServicesCredentialsBearerToTerraform(struct?: SystemResultExternalBundlesServicesCredentialsBearer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsBearerToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentialsBearer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsBearerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentialsBearer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentialsBearer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_path - computed: true, optional: false, required: false
  public get tokenPath() {
    return this.getStringAttribute('token_path');
  }
}
export interface SystemResultExternalBundlesServicesCredentialsClientTls {
}

export function systemResultExternalBundlesServicesCredentialsClientTlsToTerraform(struct?: SystemResultExternalBundlesServicesCredentialsClientTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsClientTlsToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentialsClientTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsClientTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentialsClientTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentialsClientTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_passphrase - computed: true, optional: false, required: false
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
}
export interface SystemResultExternalBundlesServicesCredentialsGcpMetadata {
}

export function systemResultExternalBundlesServicesCredentialsGcpMetadataToTerraform(struct?: SystemResultExternalBundlesServicesCredentialsGcpMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsGcpMetadataToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentialsGcpMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsGcpMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentialsGcpMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentialsGcpMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token_path - computed: true, optional: false, required: false
  public get accessTokenPath() {
    return this.getStringAttribute('access_token_path');
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id_token_path - computed: true, optional: false, required: false
  public get idTokenPath() {
    return this.getStringAttribute('id_token_path');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}
export interface SystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaims {
}

export function systemResultExternalBundlesServicesCredentialsOauth2AdditionalClaimsToTerraform(struct?: SystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsOauth2AdditionalClaimsToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SystemResultExternalBundlesServicesCredentialsOauth2 {
}

export function systemResultExternalBundlesServicesCredentialsOauth2ToTerraform(struct?: SystemResultExternalBundlesServicesCredentialsOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsOauth2ToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentialsOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentialsOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentialsOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_claims - computed: true, optional: false, required: false
  private _additionalClaims = new SystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaimsOutputReference(this, "additional_claims");
  public get additionalClaims() {
    return this._additionalClaims;
  }

  // additional_headers - computed: true, optional: false, required: false
  private _additionalHeaders = new cdktf.StringMap(this, "additional_headers");
  public get additionalHeaders() {
    return this._additionalHeaders;
  }

  // additional_parameters - computed: true, optional: false, required: false
  private _additionalParameters = new cdktf.StringMap(this, "additional_parameters");
  public get additionalParameters() {
    return this._additionalParameters;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // grant_type - computed: true, optional: false, required: false
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }

  // include_jti_claim - computed: true, optional: false, required: false
  public get includeJtiClaim() {
    return this.getBooleanAttribute('include_jti_claim');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // signing_key - computed: true, optional: false, required: false
  public get signingKey() {
    return this.getStringAttribute('signing_key');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}
export interface SystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentials {
}

export function systemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentialsToTerraform(struct?: SystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentialsToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // iam_role - computed: true, optional: false, required: false
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
}
export interface SystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentials {
}

export function systemResultExternalBundlesServicesCredentialsS3SigningProfileCredentialsToTerraform(struct?: SystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsS3SigningProfileCredentialsToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}
export interface SystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials {
}

export function systemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsToTerraform(struct?: SystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // session_name - computed: true, optional: false, required: false
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
}
export interface SystemResultExternalBundlesServicesCredentialsS3Signing {
}

export function systemResultExternalBundlesServicesCredentialsS3SigningToTerraform(struct?: SystemResultExternalBundlesServicesCredentialsS3Signing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsS3SigningToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentialsS3Signing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsS3SigningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentialsS3Signing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentialsS3Signing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_credentials - computed: true, optional: false, required: false
  public get environmentCredentials() {
    return this.getStringAttribute('environment_credentials');
  }

  // metadata_credentials - computed: true, optional: false, required: false
  private _metadataCredentials = new SystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentialsOutputReference(this, "metadata_credentials");
  public get metadataCredentials() {
    return this._metadataCredentials;
  }

  // profile_credentials - computed: true, optional: false, required: false
  private _profileCredentials = new SystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentialsOutputReference(this, "profile_credentials");
  public get profileCredentials() {
    return this._profileCredentials;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // web_identity_credentials - computed: true, optional: false, required: false
  private _webIdentityCredentials = new SystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsOutputReference(this, "web_identity_credentials");
  public get webIdentityCredentials() {
    return this._webIdentityCredentials;
  }
}
export interface SystemResultExternalBundlesServicesCredentials {
}

export function systemResultExternalBundlesServicesCredentialsToTerraform(struct?: SystemResultExternalBundlesServicesCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesCredentialsToHclTerraform(struct?: SystemResultExternalBundlesServicesCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_managed_identity - computed: true, optional: false, required: false
  private _azureManagedIdentity = new SystemResultExternalBundlesServicesCredentialsAzureManagedIdentityOutputReference(this, "azure_managed_identity");
  public get azureManagedIdentity() {
    return this._azureManagedIdentity;
  }

  // bearer - computed: true, optional: false, required: false
  private _bearer = new SystemResultExternalBundlesServicesCredentialsBearerOutputReference(this, "bearer");
  public get bearer() {
    return this._bearer;
  }

  // client_tls - computed: true, optional: false, required: false
  private _clientTls = new SystemResultExternalBundlesServicesCredentialsClientTlsOutputReference(this, "client_tls");
  public get clientTls() {
    return this._clientTls;
  }

  // gcp_metadata - computed: true, optional: false, required: false
  private _gcpMetadata = new SystemResultExternalBundlesServicesCredentialsGcpMetadataOutputReference(this, "gcp_metadata");
  public get gcpMetadata() {
    return this._gcpMetadata;
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new SystemResultExternalBundlesServicesCredentialsOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }

  // plugin - computed: true, optional: false, required: false
  public get plugin() {
    return this.getStringAttribute('plugin');
  }

  // s3_signing - computed: true, optional: false, required: false
  private _s3Signing = new SystemResultExternalBundlesServicesCredentialsS3SigningOutputReference(this, "s3_signing");
  public get s3Signing() {
    return this._s3Signing;
  }
}
export interface SystemResultExternalBundlesServicesKeys {
}

export function systemResultExternalBundlesServicesKeysToTerraform(struct?: SystemResultExternalBundlesServicesKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesKeysToHclTerraform(struct?: SystemResultExternalBundlesServicesKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SystemResultExternalBundlesServicesKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class SystemResultExternalBundlesServicesKeysMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SystemResultExternalBundlesServicesKeysOutputReference {
    return new SystemResultExternalBundlesServicesKeysOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SystemResultExternalBundlesServicesTls {
}

export function systemResultExternalBundlesServicesTlsToTerraform(struct?: SystemResultExternalBundlesServicesTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesTlsToHclTerraform(struct?: SystemResultExternalBundlesServicesTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundlesServicesTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServicesTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // system_ca_required - computed: true, optional: false, required: false
  public get systemCaRequired() {
    return this.getBooleanAttribute('system_ca_required');
  }
}
export interface SystemResultExternalBundlesServices {
}

export function systemResultExternalBundlesServicesToTerraform(struct?: SystemResultExternalBundlesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesServicesToHclTerraform(struct?: SystemResultExternalBundlesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResultExternalBundlesServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundlesServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_insecure_tls - computed: true, optional: false, required: false
  public get allowInsecureTls() {
    return this.getBooleanAttribute('allow_insecure_tls');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new SystemResultExternalBundlesServicesCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new SystemResultExternalBundlesServicesKeysMap(this, "keys");
  public get keys() {
    return this._keys;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // response_header_timeout_seconds - computed: true, optional: false, required: false
  public get responseHeaderTimeoutSeconds() {
    return this.getNumberAttribute('response_header_timeout_seconds');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new SystemResultExternalBundlesServicesTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class SystemResultExternalBundlesServicesList extends cdktf.ComplexList {

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
  public get(index: number): SystemResultExternalBundlesServicesOutputReference {
    return new SystemResultExternalBundlesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResultExternalBundles {
}

export function systemResultExternalBundlesToTerraform(struct?: SystemResultExternalBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultExternalBundlesToHclTerraform(struct?: SystemResultExternalBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultExternalBundlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultExternalBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultExternalBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundles - computed: true, optional: false, required: false
  private _bundles = new SystemResultExternalBundlesBundlesMap(this, "bundles");
  public get bundles() {
    return this._bundles;
  }

  // services - computed: true, optional: false, required: false
  private _services = new SystemResultExternalBundlesServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
}
export interface SystemResultMetadata {
}

export function systemResultMetadataToTerraform(struct?: SystemResultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultMetadataToHclTerraform(struct?: SystemResultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_through - computed: true, optional: false, required: false
  public get createdThrough() {
    return this.getStringAttribute('created_through');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_through - computed: true, optional: false, required: false
  public get lastModifiedThrough() {
    return this.getStringAttribute('last_modified_through');
  }
}
export interface SystemResultMigrationHistory {
}

export function systemResultMigrationHistoryToTerraform(struct?: SystemResultMigrationHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultMigrationHistoryToHclTerraform(struct?: SystemResultMigrationHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultMigrationHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResultMigrationHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultMigrationHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // initiated_by - computed: true, optional: false, required: false
  public get initiatedBy() {
    return this.getStringAttribute('initiated_by');
  }

  // initiating_user - computed: true, optional: false, required: false
  public get initiatingUser() {
    return this.getStringAttribute('initiating_user');
  }

  // migrated_at - computed: true, optional: false, required: false
  public get migratedAt() {
    return this.getStringAttribute('migrated_at');
  }

  // recovered - computed: true, optional: false, required: false
  public get recovered() {
    return this.getBooleanAttribute('recovered');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class SystemResultMigrationHistoryList extends cdktf.ComplexList {

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
  public get(index: number): SystemResultMigrationHistoryOutputReference {
    return new SystemResultMigrationHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResultPoliciesEnforcement {
}

export function systemResultPoliciesEnforcementToTerraform(struct?: SystemResultPoliciesEnforcement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultPoliciesEnforcementToHclTerraform(struct?: SystemResultPoliciesEnforcement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultPoliciesEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultPoliciesEnforcement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultPoliciesEnforcement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface SystemResultPoliciesModulesRules {
}

export function systemResultPoliciesModulesRulesToTerraform(struct?: SystemResultPoliciesModulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultPoliciesModulesRulesToHclTerraform(struct?: SystemResultPoliciesModulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultPoliciesModulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultPoliciesModulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultPoliciesModulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getNumberAttribute('allow');
  }

  // deny - computed: true, optional: false, required: false
  public get deny() {
    return this.getNumberAttribute('deny');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getNumberAttribute('enforce');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getNumberAttribute('ignore');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getNumberAttribute('notify');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getNumberAttribute('other');
  }

  // test - computed: true, optional: false, required: false
  public get test() {
    return this.getNumberAttribute('test');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}
export interface SystemResultPoliciesModules {
}

export function systemResultPoliciesModulesToTerraform(struct?: SystemResultPoliciesModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultPoliciesModulesToHclTerraform(struct?: SystemResultPoliciesModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultPoliciesModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResultPoliciesModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultPoliciesModules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // placeholder - computed: true, optional: false, required: false
  public get placeholder() {
    return this.getBooleanAttribute('placeholder');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new SystemResultPoliciesModulesRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
}

export class SystemResultPoliciesModulesList extends cdktf.ComplexList {

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
  public get(index: number): SystemResultPoliciesModulesOutputReference {
    return new SystemResultPoliciesModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResultPoliciesRules {
}

export function systemResultPoliciesRulesToTerraform(struct?: SystemResultPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultPoliciesRulesToHclTerraform(struct?: SystemResultPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultPoliciesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultPoliciesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultPoliciesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getNumberAttribute('allow');
  }

  // deny - computed: true, optional: false, required: false
  public get deny() {
    return this.getNumberAttribute('deny');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getNumberAttribute('enforce');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getNumberAttribute('ignore');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getNumberAttribute('notify');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getNumberAttribute('other');
  }

  // test - computed: true, optional: false, required: false
  public get test() {
    return this.getNumberAttribute('test');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}
export interface SystemResultPolicies {
}

export function systemResultPoliciesToTerraform(struct?: SystemResultPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultPoliciesToHclTerraform(struct?: SystemResultPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResultPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enforcement - computed: true, optional: false, required: false
  private _enforcement = new SystemResultPoliciesEnforcementOutputReference(this, "enforcement");
  public get enforcement() {
    return this._enforcement;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modules - computed: true, optional: false, required: false
  private _modules = new SystemResultPoliciesModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new SystemResultPoliciesRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SystemResultPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): SystemResultPoliciesOutputReference {
    return new SystemResultPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResultSourceControlOriginSshCredentials {
}

export function systemResultSourceControlOriginSshCredentialsToTerraform(struct?: SystemResultSourceControlOriginSshCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultSourceControlOriginSshCredentialsToHclTerraform(struct?: SystemResultSourceControlOriginSshCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultSourceControlOriginSshCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultSourceControlOriginSshCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultSourceControlOriginSshCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
}
export interface SystemResultSourceControlOrigin {
}

export function systemResultSourceControlOriginToTerraform(struct?: SystemResultSourceControlOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultSourceControlOriginToHclTerraform(struct?: SystemResultSourceControlOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultSourceControlOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultSourceControlOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultSourceControlOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commit - computed: true, optional: false, required: false
  public get commit() {
    return this.getStringAttribute('commit');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }

  // ssh_credentials - computed: true, optional: false, required: false
  private _sshCredentials = new SystemResultSourceControlOriginSshCredentialsOutputReference(this, "ssh_credentials");
  public get sshCredentials() {
    return this._sshCredentials;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface SystemResultSourceControl {
}

export function systemResultSourceControlToTerraform(struct?: SystemResultSourceControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultSourceControlToHclTerraform(struct?: SystemResultSourceControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultSourceControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultSourceControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultSourceControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // origin - computed: true, optional: false, required: false
  private _origin = new SystemResultSourceControlOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
}
export interface SystemResultTokensMetadata {
}

export function systemResultTokensMetadataToTerraform(struct?: SystemResultTokensMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultTokensMetadataToHclTerraform(struct?: SystemResultTokensMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultTokensMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultTokensMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultTokensMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_through - computed: true, optional: false, required: false
  public get createdThrough() {
    return this.getStringAttribute('created_through');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_through - computed: true, optional: false, required: false
  public get lastModifiedThrough() {
    return this.getStringAttribute('last_modified_through');
  }
}
export interface SystemResultTokens {
}

export function systemResultTokensToTerraform(struct?: SystemResultTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultTokensToHclTerraform(struct?: SystemResultTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResultTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_path_patterns - computed: true, optional: false, required: false
  public get allowPathPatterns() {
    return this.getListAttribute('allow_path_patterns');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new SystemResultTokensMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }

  // uses - computed: true, optional: false, required: false
  public get uses() {
    return this.getNumberAttribute('uses');
  }
}

export class SystemResultTokensList extends cdktf.ComplexList {

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
  public get(index: number): SystemResultTokensOutputReference {
    return new SystemResultTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResultTypeParameters {
}

export function systemResultTypeParametersToTerraform(struct?: SystemResultTypeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultTypeParametersToHclTerraform(struct?: SystemResultTypeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultTypeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResultTypeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResultTypeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SystemResult {
}

export function systemResultToTerraform(struct?: SystemResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemResultToHclTerraform(struct?: SystemResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authz - computed: true, optional: false, required: false
  private _authz = new SystemResultAuthzOutputReference(this, "authz");
  public get authz() {
    return this._authz;
  }

  // bundle_download - computed: true, optional: false, required: false
  private _bundleDownload = new SystemResultBundleDownloadOutputReference(this, "bundle_download");
  public get bundleDownload() {
    return this._bundleDownload;
  }

  // bundle_registry - computed: true, optional: false, required: false
  private _bundleRegistry = new SystemResultBundleRegistryOutputReference(this, "bundle_registry");
  public get bundleRegistry() {
    return this._bundleRegistry;
  }

  // context_bundle_data_only - computed: true, optional: false, required: false
  public get contextBundleDataOnly() {
    return this.getBooleanAttribute('context_bundle_data_only');
  }

  // context_bundle_roots - computed: true, optional: false, required: false
  public get contextBundleRoots() {
    return this.getListAttribute('context_bundle_roots');
  }

  // datasources - computed: true, optional: false, required: false
  private _datasources = new SystemResultDatasourcesList(this, "datasources", false);
  public get datasources() {
    return this._datasources;
  }

  // decision_mappings - computed: true, optional: false, required: false
  private _decisionMappings = new SystemResultDecisionMappingsMap(this, "decision_mappings");
  public get decisionMappings() {
    return this._decisionMappings;
  }

  // deployment_parameters - computed: true, optional: false, required: false
  private _deploymentParameters = new SystemResultDeploymentParametersOutputReference(this, "deployment_parameters");
  public get deploymentParameters() {
    return this._deploymentParameters;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // error_setting - computed: true, optional: false, required: false
  public get errorSetting() {
    return this.getStringAttribute('error_setting');
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new SystemResultErrorsMap(this, "errors");
  public get errors() {
    return this._errors;
  }

  // external_bundles - computed: true, optional: false, required: false
  private _externalBundles = new SystemResultExternalBundlesOutputReference(this, "external_bundles");
  public get externalBundles() {
    return this._externalBundles;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // filter_stacks - computed: true, optional: false, required: false
  public get filterStacks() {
    return this.getBooleanAttribute('filter_stacks');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_topic - computed: true, optional: false, required: false
  public get kafkaTopic() {
    return this.getStringAttribute('kafka_topic');
  }

  // matching_stacks - computed: true, optional: false, required: false
  public get matchingStacks() {
    return this.getListAttribute('matching_stacks');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new SystemResultMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // migration_history - computed: true, optional: false, required: false
  private _migrationHistory = new SystemResultMigrationHistoryList(this, "migration_history", false);
  public get migrationHistory() {
    return this._migrationHistory;
  }

  // minimum_opa_version - computed: true, optional: false, required: false
  public get minimumOpaVersion() {
    return this.getStringAttribute('minimum_opa_version');
  }

  // mock_opa_enabled - computed: true, optional: false, required: false
  public get mockOpaEnabled() {
    return this.getBooleanAttribute('mock_opa_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new SystemResultPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_control - computed: true, optional: false, required: false
  private _sourceControl = new SystemResultSourceControlOutputReference(this, "source_control");
  public get sourceControl() {
    return this._sourceControl;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new SystemResultTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_parameters - computed: true, optional: false, required: false
  private _typeParameters = new SystemResultTypeParametersOutputReference(this, "type_parameters");
  public get typeParameters() {
    return this._typeParameters;
  }

  // uninstall - computed: true, optional: false, required: false
  private _uninstall = new cdktf.StringMap(this, "uninstall");
  public get uninstall() {
    return this._uninstall;
  }
}
export interface SystemSourceControlOriginSshCredentials {
  /**
  * Passphrase is looked under the key passphrase/<pass>. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#passphrase System#passphrase}
  */
  readonly passphrase?: string;
  /**
  * PrivateKey is looked under the key private-key/<key>. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#private_key System#private_key}
  */
  readonly privateKey?: string;
}

export function systemSourceControlOriginSshCredentialsToTerraform(struct?: SystemSourceControlOriginSshCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function systemSourceControlOriginSshCredentialsToHclTerraform(struct?: SystemSourceControlOriginSshCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSourceControlOriginSshCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemSourceControlOriginSshCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSourceControlOriginSshCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passphrase = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passphrase = value.passphrase;
      this._privateKey = value.privateKey;
    }
  }

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface SystemSourceControlOrigin {
  /**
  * Commit SHA. Only one of reference or commit can be set at any time. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#commit System#commit}
  */
  readonly commit?: string;
  /**
  * Credentials are looked under the key <name>/<creds>. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#credentials System#credentials}
  */
  readonly credentials?: string;
  /**
  * Path to limit the import to. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#path System#path}
  */
  readonly path?: string;
  /**
  * Remote reference. Only one of reference or commit can be set at any time. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#reference System#reference}
  */
  readonly reference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#ssh_credentials System#ssh_credentials}
  */
  readonly sshCredentials?: SystemSourceControlOriginSshCredentials;
  /**
  * Repository URL. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#url System#url}
  */
  readonly url?: string;
}

export function systemSourceControlOriginToTerraform(struct?: SystemSourceControlOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit: cdktf.stringToTerraform(struct!.commit),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    path: cdktf.stringToTerraform(struct!.path),
    reference: cdktf.stringToTerraform(struct!.reference),
    ssh_credentials: systemSourceControlOriginSshCredentialsToTerraform(struct!.sshCredentials),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function systemSourceControlOriginToHclTerraform(struct?: SystemSourceControlOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_credentials: {
      value: systemSourceControlOriginSshCredentialsToHclTerraform(struct!.sshCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemSourceControlOriginSshCredentials",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSourceControlOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemSourceControlOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    if (this._sshCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshCredentials = this._sshCredentials?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSourceControlOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commit = undefined;
      this._credentials = undefined;
      this._path = undefined;
      this._reference = undefined;
      this._sshCredentials.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commit = value.commit;
      this._credentials = value.credentials;
      this._path = value.path;
      this._reference = value.reference;
      this._sshCredentials.internalValue = value.sshCredentials;
      this._url = value.url;
    }
  }

  // commit - computed: true, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // credentials - computed: true, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // reference - computed: true, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }

  // ssh_credentials - computed: true, optional: true, required: false
  private _sshCredentials = new SystemSourceControlOriginSshCredentialsOutputReference(this, "ssh_credentials");
  public get sshCredentials() {
    return this._sshCredentials;
  }
  public putSshCredentials(value: SystemSourceControlOriginSshCredentials) {
    this._sshCredentials.internalValue = value;
  }
  public resetSshCredentials() {
    this._sshCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCredentialsInput() {
    return this._sshCredentials.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SystemSourceControl {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#origin System#origin}
  */
  readonly origin?: SystemSourceControlOrigin;
}

export function systemSourceControlToTerraform(struct?: SystemSourceControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin: systemSourceControlOriginToTerraform(struct!.origin),
  }
}


export function systemSourceControlToHclTerraform(struct?: SystemSourceControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin: {
      value: systemSourceControlOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemSourceControlOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSourceControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemSourceControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSourceControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._origin.internalValue = value.origin;
    }
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new SystemSourceControlOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: SystemSourceControlOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}
export interface SystemTokensMetadata {
}

export function systemTokensMetadataToTerraform(struct?: SystemTokensMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemTokensMetadataToHclTerraform(struct?: SystemTokensMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemTokensMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemTokensMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTokensMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_through - computed: true, optional: false, required: false
  public get createdThrough() {
    return this.getStringAttribute('created_through');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_through - computed: true, optional: false, required: false
  public get lastModifiedThrough() {
    return this.getStringAttribute('last_modified_through');
  }
}
export interface SystemTokens {
}

export function systemTokensToTerraform(struct?: SystemTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemTokensToHclTerraform(struct?: SystemTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_path_patterns - computed: true, optional: false, required: false
  public get allowPathPatterns() {
    return this.getListAttribute('allow_path_patterns');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new SystemTokensMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }

  // uses - computed: true, optional: false, required: false
  public get uses() {
    return this.getNumberAttribute('uses');
  }
}

export class SystemTokensList extends cdktf.ComplexList {

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
  public get(index: number): SystemTokensOutputReference {
    return new SystemTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTypeParameters {
}

export function systemTypeParametersToTerraform(struct?: SystemTypeParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemTypeParametersToHclTerraform(struct?: SystemTypeParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemTypeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemTypeParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTypeParameters | cdktf.IResolvable | undefined) {
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system styra_system}
*/
export class System extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "styra_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a System resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the System to import
  * @param importFromId The id of the existing System that should be imported. Refer to the {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the System to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "styra_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/system styra_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConfig
  */
  public constructor(scope: Construct, id: string, config: SystemConfig) {
    super(scope, id, {
      terraformResourceType: 'styra_system',
      terraformGeneratorMetadata: {
        providerName: 'styra',
        providerVersion: '0.2.3',
        providerVersionConstraint: '0.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundleDownload.internalValue = config.bundleDownload;
    this._bundleRegistry.internalValue = config.bundleRegistry;
    this._contextBundleDataOnly = config.contextBundleDataOnly;
    this._contextBundleRoots = config.contextBundleRoots;
    this._decisionMappings.internalValue = config.decisionMappings;
    this._deploymentParameters.internalValue = config.deploymentParameters;
    this._description = config.description;
    this._errorSetting = config.errorSetting;
    this._externalBundles.internalValue = config.externalBundles;
    this._externalId = config.externalId;
    this._filterStacks = config.filterStacks;
    this._kafkaTopic = config.kafkaTopic;
    this._mockOpaEnabled = config.mockOpaEnabled;
    this._name = config.name;
    this._readOnly = config.readOnly;
    this._recursive = config.recursive;
    this._sourceControl.internalValue = config.sourceControl;
    this._type = config.type;
    this._typeParameters.internalValue = config.typeParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authz - computed: true, optional: false, required: false
  private _authz = new SystemAuthzOutputReference(this, "authz");
  public get authz() {
    return this._authz;
  }

  // bundle_download - computed: true, optional: true, required: false
  private _bundleDownload = new SystemBundleDownloadOutputReference(this, "bundle_download");
  public get bundleDownload() {
    return this._bundleDownload;
  }
  public putBundleDownload(value: SystemBundleDownload) {
    this._bundleDownload.internalValue = value;
  }
  public resetBundleDownload() {
    this._bundleDownload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleDownloadInput() {
    return this._bundleDownload.internalValue;
  }

  // bundle_registry - computed: true, optional: true, required: false
  private _bundleRegistry = new SystemBundleRegistryOutputReference(this, "bundle_registry");
  public get bundleRegistry() {
    return this._bundleRegistry;
  }
  public putBundleRegistry(value: SystemBundleRegistry) {
    this._bundleRegistry.internalValue = value;
  }
  public resetBundleRegistry() {
    this._bundleRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleRegistryInput() {
    return this._bundleRegistry.internalValue;
  }

  // context_bundle_data_only - computed: true, optional: true, required: false
  private _contextBundleDataOnly?: boolean | cdktf.IResolvable; 
  public get contextBundleDataOnly() {
    return this.getBooleanAttribute('context_bundle_data_only');
  }
  public set contextBundleDataOnly(value: boolean | cdktf.IResolvable) {
    this._contextBundleDataOnly = value;
  }
  public resetContextBundleDataOnly() {
    this._contextBundleDataOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextBundleDataOnlyInput() {
    return this._contextBundleDataOnly;
  }

  // context_bundle_roots - computed: true, optional: true, required: false
  private _contextBundleRoots?: string[]; 
  public get contextBundleRoots() {
    return this.getListAttribute('context_bundle_roots');
  }
  public set contextBundleRoots(value: string[]) {
    this._contextBundleRoots = value;
  }
  public resetContextBundleRoots() {
    this._contextBundleRoots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextBundleRootsInput() {
    return this._contextBundleRoots;
  }

  // datasources - computed: true, optional: false, required: false
  private _datasources = new SystemDatasourcesList(this, "datasources", false);
  public get datasources() {
    return this._datasources;
  }

  // decision_mappings - computed: true, optional: true, required: false
  private _decisionMappings = new SystemDecisionMappingsMap(this, "decision_mappings");
  public get decisionMappings() {
    return this._decisionMappings;
  }
  public putDecisionMappings(value: { [key: string]: SystemDecisionMappings } | cdktf.IResolvable) {
    this._decisionMappings.internalValue = value;
  }
  public resetDecisionMappings() {
    this._decisionMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionMappingsInput() {
    return this._decisionMappings.internalValue;
  }

  // deployment_parameters - computed: true, optional: true, required: false
  private _deploymentParameters = new SystemDeploymentParametersOutputReference(this, "deployment_parameters");
  public get deploymentParameters() {
    return this._deploymentParameters;
  }
  public putDeploymentParameters(value: SystemDeploymentParameters) {
    this._deploymentParameters.internalValue = value;
  }
  public resetDeploymentParameters() {
    this._deploymentParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentParametersInput() {
    return this._deploymentParameters.internalValue;
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

  // error_setting - computed: true, optional: true, required: false
  private _errorSetting?: string; 
  public get errorSetting() {
    return this.getStringAttribute('error_setting');
  }
  public set errorSetting(value: string) {
    this._errorSetting = value;
  }
  public resetErrorSetting() {
    this._errorSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorSettingInput() {
    return this._errorSetting;
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new SystemErrorsMap(this, "errors");
  public get errors() {
    return this._errors;
  }

  // external_bundles - computed: true, optional: true, required: false
  private _externalBundles = new SystemExternalBundlesOutputReference(this, "external_bundles");
  public get externalBundles() {
    return this._externalBundles;
  }
  public putExternalBundles(value: SystemExternalBundles) {
    this._externalBundles.internalValue = value;
  }
  public resetExternalBundles() {
    this._externalBundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBundlesInput() {
    return this._externalBundles.internalValue;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // filter_stacks - computed: true, optional: true, required: false
  private _filterStacks?: boolean | cdktf.IResolvable; 
  public get filterStacks() {
    return this.getBooleanAttribute('filter_stacks');
  }
  public set filterStacks(value: boolean | cdktf.IResolvable) {
    this._filterStacks = value;
  }
  public resetFilterStacks() {
    this._filterStacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStacksInput() {
    return this._filterStacks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_topic - computed: true, optional: true, required: false
  private _kafkaTopic?: string; 
  public get kafkaTopic() {
    return this.getStringAttribute('kafka_topic');
  }
  public set kafkaTopic(value: string) {
    this._kafkaTopic = value;
  }
  public resetKafkaTopic() {
    this._kafkaTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTopicInput() {
    return this._kafkaTopic;
  }

  // matching_stacks - computed: true, optional: false, required: false
  public get matchingStacks() {
    return this.getListAttribute('matching_stacks');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new SystemMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // migration_history - computed: true, optional: false, required: false
  private _migrationHistory = new SystemMigrationHistoryList(this, "migration_history", false);
  public get migrationHistory() {
    return this._migrationHistory;
  }

  // minimum_opa_version - computed: true, optional: false, required: false
  public get minimumOpaVersion() {
    return this.getStringAttribute('minimum_opa_version');
  }

  // mock_opa_enabled - computed: true, optional: true, required: false
  private _mockOpaEnabled?: boolean | cdktf.IResolvable; 
  public get mockOpaEnabled() {
    return this.getBooleanAttribute('mock_opa_enabled');
  }
  public set mockOpaEnabled(value: boolean | cdktf.IResolvable) {
    this._mockOpaEnabled = value;
  }
  public resetMockOpaEnabled() {
    this._mockOpaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockOpaEnabledInput() {
    return this._mockOpaEnabled;
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

  // policies - computed: true, optional: false, required: false
  private _policies = new SystemPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // recursive - computed: false, optional: true, required: false
  private _recursive?: string; 
  public get recursive() {
    return this.getStringAttribute('recursive');
  }
  public set recursive(value: string) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // result - computed: true, optional: false, required: false
  private _result = new SystemResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }

  // source_control - computed: true, optional: true, required: false
  private _sourceControl = new SystemSourceControlOutputReference(this, "source_control");
  public get sourceControl() {
    return this._sourceControl;
  }
  public putSourceControl(value: SystemSourceControl) {
    this._sourceControl.internalValue = value;
  }
  public resetSourceControl() {
    this._sourceControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlInput() {
    return this._sourceControl.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new SystemTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_parameters - computed: true, optional: true, required: false
  private _typeParameters = new SystemTypeParametersOutputReference(this, "type_parameters");
  public get typeParameters() {
    return this._typeParameters;
  }
  public putTypeParameters(value: SystemTypeParameters) {
    this._typeParameters.internalValue = value;
  }
  public resetTypeParameters() {
    this._typeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeParametersInput() {
    return this._typeParameters.internalValue;
  }

  // uninstall - computed: true, optional: false, required: false
  private _uninstall = new cdktf.StringMap(this, "uninstall");
  public get uninstall() {
    return this._uninstall;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_download: systemBundleDownloadToTerraform(this._bundleDownload.internalValue),
      bundle_registry: systemBundleRegistryToTerraform(this._bundleRegistry.internalValue),
      context_bundle_data_only: cdktf.booleanToTerraform(this._contextBundleDataOnly),
      context_bundle_roots: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contextBundleRoots),
      decision_mappings: cdktf.hashMapper(systemDecisionMappingsToTerraform)(this._decisionMappings.internalValue),
      deployment_parameters: systemDeploymentParametersToTerraform(this._deploymentParameters.internalValue),
      description: cdktf.stringToTerraform(this._description),
      error_setting: cdktf.stringToTerraform(this._errorSetting),
      external_bundles: systemExternalBundlesToTerraform(this._externalBundles.internalValue),
      external_id: cdktf.stringToTerraform(this._externalId),
      filter_stacks: cdktf.booleanToTerraform(this._filterStacks),
      kafka_topic: cdktf.stringToTerraform(this._kafkaTopic),
      mock_opa_enabled: cdktf.booleanToTerraform(this._mockOpaEnabled),
      name: cdktf.stringToTerraform(this._name),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      recursive: cdktf.stringToTerraform(this._recursive),
      source_control: systemSourceControlToTerraform(this._sourceControl.internalValue),
      type: cdktf.stringToTerraform(this._type),
      type_parameters: systemTypeParametersToTerraform(this._typeParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_download: {
        value: systemBundleDownloadToHclTerraform(this._bundleDownload.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemBundleDownload",
      },
      bundle_registry: {
        value: systemBundleRegistryToHclTerraform(this._bundleRegistry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemBundleRegistry",
      },
      context_bundle_data_only: {
        value: cdktf.booleanToHclTerraform(this._contextBundleDataOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      context_bundle_roots: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contextBundleRoots),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      decision_mappings: {
        value: cdktf.hashMapperHcl(systemDecisionMappingsToHclTerraform)(this._decisionMappings.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SystemDecisionMappingsMap",
      },
      deployment_parameters: {
        value: systemDeploymentParametersToHclTerraform(this._deploymentParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemDeploymentParameters",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_setting: {
        value: cdktf.stringToHclTerraform(this._errorSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_bundles: {
        value: systemExternalBundlesToHclTerraform(this._externalBundles.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemExternalBundles",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_stacks: {
        value: cdktf.booleanToHclTerraform(this._filterStacks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kafka_topic: {
        value: cdktf.stringToHclTerraform(this._kafkaTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mock_opa_enabled: {
        value: cdktf.booleanToHclTerraform(this._mockOpaEnabled),
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
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recursive: {
        value: cdktf.stringToHclTerraform(this._recursive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_control: {
        value: systemSourceControlToHclTerraform(this._sourceControl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemSourceControl",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_parameters: {
        value: systemTypeParametersToHclTerraform(this._typeParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemTypeParameters",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
