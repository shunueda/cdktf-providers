// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceancdRolloutSpecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}
  */
  readonly rolloutSpecName: string;
  /**
  * failure_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#failure_policy OceancdRolloutSpec#failure_policy}
  */
  readonly failurePolicy?: OceancdRolloutSpecFailurePolicy;
  /**
  * spot_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#spot_deployment OceancdRolloutSpec#spot_deployment}
  */
  readonly spotDeployment?: OceancdRolloutSpecSpotDeployment;
  /**
  * spot_deployments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#spot_deployments OceancdRolloutSpec#spot_deployments}
  */
  readonly spotDeployments?: OceancdRolloutSpecSpotDeployments[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#strategy OceancdRolloutSpec#strategy}
  */
  readonly strategy: OceancdRolloutSpecStrategy;
  /**
  * traffic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#traffic OceancdRolloutSpec#traffic}
  */
  readonly traffic?: OceancdRolloutSpecTraffic;
}
export interface OceancdRolloutSpecFailurePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#action OceancdRolloutSpec#action}
  */
  readonly action: string;
}

export function oceancdRolloutSpecFailurePolicyToTerraform(struct?: OceancdRolloutSpecFailurePolicyOutputReference | OceancdRolloutSpecFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function oceancdRolloutSpecFailurePolicyToHclTerraform(struct?: OceancdRolloutSpecFailurePolicyOutputReference | OceancdRolloutSpecFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecFailurePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecFailurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecFailurePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface OceancdRolloutSpecSpotDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#spot_deployment_cluster_id OceancdRolloutSpec#spot_deployment_cluster_id}
  */
  readonly spotDeploymentClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#spot_deployment_name OceancdRolloutSpec#spot_deployment_name}
  */
  readonly spotDeploymentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#spot_deployment_namespace OceancdRolloutSpec#spot_deployment_namespace}
  */
  readonly spotDeploymentNamespace?: string;
}

export function oceancdRolloutSpecSpotDeploymentToTerraform(struct?: OceancdRolloutSpecSpotDeploymentOutputReference | OceancdRolloutSpecSpotDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spot_deployment_cluster_id: cdktf.stringToTerraform(struct!.spotDeploymentClusterId),
    spot_deployment_name: cdktf.stringToTerraform(struct!.spotDeploymentName),
    spot_deployment_namespace: cdktf.stringToTerraform(struct!.spotDeploymentNamespace),
  }
}


export function oceancdRolloutSpecSpotDeploymentToHclTerraform(struct?: OceancdRolloutSpecSpotDeploymentOutputReference | OceancdRolloutSpecSpotDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spot_deployment_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.spotDeploymentClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.spotDeploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_deployment_namespace: {
      value: cdktf.stringToHclTerraform(struct!.spotDeploymentNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecSpotDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecSpotDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spotDeploymentClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotDeploymentClusterId = this._spotDeploymentClusterId;
    }
    if (this._spotDeploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotDeploymentName = this._spotDeploymentName;
    }
    if (this._spotDeploymentNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotDeploymentNamespace = this._spotDeploymentNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecSpotDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._spotDeploymentClusterId = undefined;
      this._spotDeploymentName = undefined;
      this._spotDeploymentNamespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._spotDeploymentClusterId = value.spotDeploymentClusterId;
      this._spotDeploymentName = value.spotDeploymentName;
      this._spotDeploymentNamespace = value.spotDeploymentNamespace;
    }
  }

  // spot_deployment_cluster_id - computed: false, optional: true, required: false
  private _spotDeploymentClusterId?: string; 
  public get spotDeploymentClusterId() {
    return this.getStringAttribute('spot_deployment_cluster_id');
  }
  public set spotDeploymentClusterId(value: string) {
    this._spotDeploymentClusterId = value;
  }
  public resetSpotDeploymentClusterId() {
    this._spotDeploymentClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDeploymentClusterIdInput() {
    return this._spotDeploymentClusterId;
  }

  // spot_deployment_name - computed: false, optional: true, required: false
  private _spotDeploymentName?: string; 
  public get spotDeploymentName() {
    return this.getStringAttribute('spot_deployment_name');
  }
  public set spotDeploymentName(value: string) {
    this._spotDeploymentName = value;
  }
  public resetSpotDeploymentName() {
    this._spotDeploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDeploymentNameInput() {
    return this._spotDeploymentName;
  }

  // spot_deployment_namespace - computed: false, optional: true, required: false
  private _spotDeploymentNamespace?: string; 
  public get spotDeploymentNamespace() {
    return this.getStringAttribute('spot_deployment_namespace');
  }
  public set spotDeploymentNamespace(value: string) {
    this._spotDeploymentNamespace = value;
  }
  public resetSpotDeploymentNamespace() {
    this._spotDeploymentNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDeploymentNamespaceInput() {
    return this._spotDeploymentNamespace;
  }
}
export interface OceancdRolloutSpecSpotDeployments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#spot_deployments_cluster_id OceancdRolloutSpec#spot_deployments_cluster_id}
  */
  readonly spotDeploymentsClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#spot_deployments_name OceancdRolloutSpec#spot_deployments_name}
  */
  readonly spotDeploymentsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#spot_deployments_namespace OceancdRolloutSpec#spot_deployments_namespace}
  */
  readonly spotDeploymentsNamespace?: string;
}

export function oceancdRolloutSpecSpotDeploymentsToTerraform(struct?: OceancdRolloutSpecSpotDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spot_deployments_cluster_id: cdktf.stringToTerraform(struct!.spotDeploymentsClusterId),
    spot_deployments_name: cdktf.stringToTerraform(struct!.spotDeploymentsName),
    spot_deployments_namespace: cdktf.stringToTerraform(struct!.spotDeploymentsNamespace),
  }
}


export function oceancdRolloutSpecSpotDeploymentsToHclTerraform(struct?: OceancdRolloutSpecSpotDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spot_deployments_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.spotDeploymentsClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_deployments_name: {
      value: cdktf.stringToHclTerraform(struct!.spotDeploymentsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_deployments_namespace: {
      value: cdktf.stringToHclTerraform(struct!.spotDeploymentsNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecSpotDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdRolloutSpecSpotDeployments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spotDeploymentsClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotDeploymentsClusterId = this._spotDeploymentsClusterId;
    }
    if (this._spotDeploymentsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotDeploymentsName = this._spotDeploymentsName;
    }
    if (this._spotDeploymentsNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotDeploymentsNamespace = this._spotDeploymentsNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecSpotDeployments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spotDeploymentsClusterId = undefined;
      this._spotDeploymentsName = undefined;
      this._spotDeploymentsNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spotDeploymentsClusterId = value.spotDeploymentsClusterId;
      this._spotDeploymentsName = value.spotDeploymentsName;
      this._spotDeploymentsNamespace = value.spotDeploymentsNamespace;
    }
  }

  // spot_deployments_cluster_id - computed: false, optional: true, required: false
  private _spotDeploymentsClusterId?: string; 
  public get spotDeploymentsClusterId() {
    return this.getStringAttribute('spot_deployments_cluster_id');
  }
  public set spotDeploymentsClusterId(value: string) {
    this._spotDeploymentsClusterId = value;
  }
  public resetSpotDeploymentsClusterId() {
    this._spotDeploymentsClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDeploymentsClusterIdInput() {
    return this._spotDeploymentsClusterId;
  }

  // spot_deployments_name - computed: false, optional: true, required: false
  private _spotDeploymentsName?: string; 
  public get spotDeploymentsName() {
    return this.getStringAttribute('spot_deployments_name');
  }
  public set spotDeploymentsName(value: string) {
    this._spotDeploymentsName = value;
  }
  public resetSpotDeploymentsName() {
    this._spotDeploymentsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDeploymentsNameInput() {
    return this._spotDeploymentsName;
  }

  // spot_deployments_namespace - computed: false, optional: true, required: false
  private _spotDeploymentsNamespace?: string; 
  public get spotDeploymentsNamespace() {
    return this.getStringAttribute('spot_deployments_namespace');
  }
  public set spotDeploymentsNamespace(value: string) {
    this._spotDeploymentsNamespace = value;
  }
  public resetSpotDeploymentsNamespace() {
    this._spotDeploymentsNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDeploymentsNamespaceInput() {
    return this._spotDeploymentsNamespace;
  }
}

export class OceancdRolloutSpecSpotDeploymentsList extends cdktf.ComplexList {
  public internalValue? : OceancdRolloutSpecSpotDeployments[] | cdktf.IResolvable

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
  public get(index: number): OceancdRolloutSpecSpotDeploymentsOutputReference {
    return new OceancdRolloutSpecSpotDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdRolloutSpecStrategyArgsValueFromFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#field_path OceancdRolloutSpec#field_path}
  */
  readonly fieldPath: string;
}

export function oceancdRolloutSpecStrategyArgsValueFromFieldRefToTerraform(struct?: OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference | OceancdRolloutSpecStrategyArgsValueFromFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function oceancdRolloutSpecStrategyArgsValueFromFieldRefToHclTerraform(struct?: OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference | OceancdRolloutSpecStrategyArgsValueFromFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecStrategyArgsValueFromFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecStrategyArgsValueFromFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldPath = value.fieldPath;
    }
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface OceancdRolloutSpecStrategyArgsValueFrom {
  /**
  * field_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#field_ref OceancdRolloutSpec#field_ref}
  */
  readonly fieldRef: OceancdRolloutSpecStrategyArgsValueFromFieldRef;
}

export function oceancdRolloutSpecStrategyArgsValueFromToTerraform(struct?: OceancdRolloutSpecStrategyArgsValueFromOutputReference | OceancdRolloutSpecStrategyArgsValueFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: oceancdRolloutSpecStrategyArgsValueFromFieldRefToTerraform(struct!.fieldRef),
  }
}


export function oceancdRolloutSpecStrategyArgsValueFromToHclTerraform(struct?: OceancdRolloutSpecStrategyArgsValueFromOutputReference | OceancdRolloutSpecStrategyArgsValueFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: oceancdRolloutSpecStrategyArgsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecStrategyArgsValueFromFieldRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecStrategyArgsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecStrategyArgsValueFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecStrategyArgsValueFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldRef.internalValue = value.fieldRef;
    }
  }

  // field_ref - computed: false, optional: false, required: true
  private _fieldRef = new OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: OceancdRolloutSpecStrategyArgsValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }
}
export interface OceancdRolloutSpecStrategyArgs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#arg_name OceancdRolloutSpec#arg_name}
  */
  readonly argName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#arg_value OceancdRolloutSpec#arg_value}
  */
  readonly argValue?: string;
  /**
  * value_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#value_from OceancdRolloutSpec#value_from}
  */
  readonly valueFrom?: OceancdRolloutSpecStrategyArgsValueFrom;
}

export function oceancdRolloutSpecStrategyArgsToTerraform(struct?: OceancdRolloutSpecStrategyArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arg_name: cdktf.stringToTerraform(struct!.argName),
    arg_value: cdktf.stringToTerraform(struct!.argValue),
    value_from: oceancdRolloutSpecStrategyArgsValueFromToTerraform(struct!.valueFrom),
  }
}


export function oceancdRolloutSpecStrategyArgsToHclTerraform(struct?: OceancdRolloutSpecStrategyArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arg_name: {
      value: cdktf.stringToHclTerraform(struct!.argName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg_value: {
      value: cdktf.stringToHclTerraform(struct!.argValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: oceancdRolloutSpecStrategyArgsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecStrategyArgsValueFromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecStrategyArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdRolloutSpecStrategyArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argName !== undefined) {
      hasAnyValues = true;
      internalValueResult.argName = this._argName;
    }
    if (this._argValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argValue = this._argValue;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecStrategyArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argName = undefined;
      this._argValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argName = value.argName;
      this._argValue = value.argValue;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // arg_name - computed: false, optional: false, required: true
  private _argName?: string; 
  public get argName() {
    return this.getStringAttribute('arg_name');
  }
  public set argName(value: string) {
    this._argName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argNameInput() {
    return this._argName;
  }

  // arg_value - computed: false, optional: true, required: false
  private _argValue?: string; 
  public get argValue() {
    return this.getStringAttribute('arg_value');
  }
  public set argValue(value: string) {
    this._argValue = value;
  }
  public resetArgValue() {
    this._argValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argValueInput() {
    return this._argValue;
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new OceancdRolloutSpecStrategyArgsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: OceancdRolloutSpecStrategyArgsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class OceancdRolloutSpecStrategyArgsList extends cdktf.ComplexList {
  public internalValue? : OceancdRolloutSpecStrategyArgs[] | cdktf.IResolvable

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
  public get(index: number): OceancdRolloutSpecStrategyArgsOutputReference {
    return new OceancdRolloutSpecStrategyArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdRolloutSpecStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#strategy_name OceancdRolloutSpec#strategy_name}
  */
  readonly strategyName: string;
  /**
  * args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#args OceancdRolloutSpec#args}
  */
  readonly args?: OceancdRolloutSpecStrategyArgs[] | cdktf.IResolvable;
}

export function oceancdRolloutSpecStrategyToTerraform(struct?: OceancdRolloutSpecStrategyOutputReference | OceancdRolloutSpecStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy_name: cdktf.stringToTerraform(struct!.strategyName),
    args: cdktf.listMapper(oceancdRolloutSpecStrategyArgsToTerraform, true)(struct!.args),
  }
}


export function oceancdRolloutSpecStrategyToHclTerraform(struct?: OceancdRolloutSpecStrategyOutputReference | OceancdRolloutSpecStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy_name: {
      value: cdktf.stringToHclTerraform(struct!.strategyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    args: {
      value: cdktf.listMapperHcl(oceancdRolloutSpecStrategyArgsToHclTerraform, true)(struct!.args),
      isBlock: true,
      type: "set",
      storageClassType: "OceancdRolloutSpecStrategyArgsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyName = this._strategyName;
    }
    if (this._args?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strategyName = undefined;
      this._args.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strategyName = value.strategyName;
      this._args.internalValue = value.args;
    }
  }

  // strategy_name - computed: false, optional: false, required: true
  private _strategyName?: string; 
  public get strategyName() {
    return this.getStringAttribute('strategy_name');
  }
  public set strategyName(value: string) {
    this._strategyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyNameInput() {
    return this._strategyName;
  }

  // args - computed: false, optional: true, required: false
  private _args = new OceancdRolloutSpecStrategyArgsList(this, "args", true);
  public get args() {
    return this._args;
  }
  public putArgs(value: OceancdRolloutSpecStrategyArgs[] | cdktf.IResolvable) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
  }
}
export interface OceancdRolloutSpecTrafficAlbStickinessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#duration_seconds OceancdRolloutSpec#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#enabled OceancdRolloutSpec#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function oceancdRolloutSpecTrafficAlbStickinessConfigToTerraform(struct?: OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference | OceancdRolloutSpecTrafficAlbStickinessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function oceancdRolloutSpecTrafficAlbStickinessConfigToHclTerraform(struct?: OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference | OceancdRolloutSpecTrafficAlbStickinessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecTrafficAlbStickinessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficAlbStickinessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationSeconds = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationSeconds = value.durationSeconds;
      this._enabled = value.enabled;
    }
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OceancdRolloutSpecTrafficAlb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#alb_annotation_prefix OceancdRolloutSpec#alb_annotation_prefix}
  */
  readonly albAnnotationPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#alb_ingress OceancdRolloutSpec#alb_ingress}
  */
  readonly albIngress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#alb_root_service OceancdRolloutSpec#alb_root_service}
  */
  readonly albRootService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#service_port OceancdRolloutSpec#service_port}
  */
  readonly servicePort: number;
  /**
  * stickiness_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#stickiness_config OceancdRolloutSpec#stickiness_config}
  */
  readonly stickinessConfig?: OceancdRolloutSpecTrafficAlbStickinessConfig;
}

export function oceancdRolloutSpecTrafficAlbToTerraform(struct?: OceancdRolloutSpecTrafficAlbOutputReference | OceancdRolloutSpecTrafficAlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alb_annotation_prefix: cdktf.stringToTerraform(struct!.albAnnotationPrefix),
    alb_ingress: cdktf.stringToTerraform(struct!.albIngress),
    alb_root_service: cdktf.stringToTerraform(struct!.albRootService),
    service_port: cdktf.numberToTerraform(struct!.servicePort),
    stickiness_config: oceancdRolloutSpecTrafficAlbStickinessConfigToTerraform(struct!.stickinessConfig),
  }
}


export function oceancdRolloutSpecTrafficAlbToHclTerraform(struct?: OceancdRolloutSpecTrafficAlbOutputReference | OceancdRolloutSpecTrafficAlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alb_annotation_prefix: {
      value: cdktf.stringToHclTerraform(struct!.albAnnotationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alb_ingress: {
      value: cdktf.stringToHclTerraform(struct!.albIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alb_root_service: {
      value: cdktf.stringToHclTerraform(struct!.albRootService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port: {
      value: cdktf.numberToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stickiness_config: {
      value: oceancdRolloutSpecTrafficAlbStickinessConfigToHclTerraform(struct!.stickinessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecTrafficAlbStickinessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficAlbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecTrafficAlb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._albAnnotationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.albAnnotationPrefix = this._albAnnotationPrefix;
    }
    if (this._albIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.albIngress = this._albIngress;
    }
    if (this._albRootService !== undefined) {
      hasAnyValues = true;
      internalValueResult.albRootService = this._albRootService;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    if (this._stickinessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickinessConfig = this._stickinessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficAlb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._albAnnotationPrefix = undefined;
      this._albIngress = undefined;
      this._albRootService = undefined;
      this._servicePort = undefined;
      this._stickinessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._albAnnotationPrefix = value.albAnnotationPrefix;
      this._albIngress = value.albIngress;
      this._albRootService = value.albRootService;
      this._servicePort = value.servicePort;
      this._stickinessConfig.internalValue = value.stickinessConfig;
    }
  }

  // alb_annotation_prefix - computed: false, optional: true, required: false
  private _albAnnotationPrefix?: string; 
  public get albAnnotationPrefix() {
    return this.getStringAttribute('alb_annotation_prefix');
  }
  public set albAnnotationPrefix(value: string) {
    this._albAnnotationPrefix = value;
  }
  public resetAlbAnnotationPrefix() {
    this._albAnnotationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albAnnotationPrefixInput() {
    return this._albAnnotationPrefix;
  }

  // alb_ingress - computed: false, optional: false, required: true
  private _albIngress?: string; 
  public get albIngress() {
    return this.getStringAttribute('alb_ingress');
  }
  public set albIngress(value: string) {
    this._albIngress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get albIngressInput() {
    return this._albIngress;
  }

  // alb_root_service - computed: false, optional: false, required: true
  private _albRootService?: string; 
  public get albRootService() {
    return this.getStringAttribute('alb_root_service');
  }
  public set albRootService(value: string) {
    this._albRootService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get albRootServiceInput() {
    return this._albRootService;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // stickiness_config - computed: false, optional: true, required: false
  private _stickinessConfig = new OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference(this, "stickiness_config");
  public get stickinessConfig() {
    return this._stickinessConfig;
  }
  public putStickinessConfig(value: OceancdRolloutSpecTrafficAlbStickinessConfig) {
    this._stickinessConfig.internalValue = value;
  }
  public resetStickinessConfig() {
    this._stickinessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessConfigInput() {
    return this._stickinessConfig.internalValue;
  }
}
export interface OceancdRolloutSpecTrafficAmbassador {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#mappings OceancdRolloutSpec#mappings}
  */
  readonly mappings: string[];
}

export function oceancdRolloutSpecTrafficAmbassadorToTerraform(struct?: OceancdRolloutSpecTrafficAmbassadorOutputReference | OceancdRolloutSpecTrafficAmbassador): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mappings),
  }
}


export function oceancdRolloutSpecTrafficAmbassadorToHclTerraform(struct?: OceancdRolloutSpecTrafficAmbassadorOutputReference | OceancdRolloutSpecTrafficAmbassador): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mappings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mappings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficAmbassadorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecTrafficAmbassador | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficAmbassador | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mappings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mappings = value.mappings;
    }
  }

  // mappings - computed: false, optional: false, required: true
  private _mappings?: string[]; 
  public get mappings() {
    return this.getListAttribute('mappings');
  }
  public set mappings(value: string[]) {
    this._mappings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings;
  }
}
export interface OceancdRolloutSpecTrafficIstioDestinationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#canary_subset_name OceancdRolloutSpec#canary_subset_name}
  */
  readonly canarySubsetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#destination_rule_name OceancdRolloutSpec#destination_rule_name}
  */
  readonly destinationRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#stable_subset_name OceancdRolloutSpec#stable_subset_name}
  */
  readonly stableSubsetName: string;
}

export function oceancdRolloutSpecTrafficIstioDestinationRuleToTerraform(struct?: OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference | OceancdRolloutSpecTrafficIstioDestinationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary_subset_name: cdktf.stringToTerraform(struct!.canarySubsetName),
    destination_rule_name: cdktf.stringToTerraform(struct!.destinationRuleName),
    stable_subset_name: cdktf.stringToTerraform(struct!.stableSubsetName),
  }
}


export function oceancdRolloutSpecTrafficIstioDestinationRuleToHclTerraform(struct?: OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference | OceancdRolloutSpecTrafficIstioDestinationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canary_subset_name: {
      value: cdktf.stringToHclTerraform(struct!.canarySubsetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_rule_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationRuleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stable_subset_name: {
      value: cdktf.stringToHclTerraform(struct!.stableSubsetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecTrafficIstioDestinationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canarySubsetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.canarySubsetName = this._canarySubsetName;
    }
    if (this._destinationRuleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRuleName = this._destinationRuleName;
    }
    if (this._stableSubsetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableSubsetName = this._stableSubsetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficIstioDestinationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canarySubsetName = undefined;
      this._destinationRuleName = undefined;
      this._stableSubsetName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canarySubsetName = value.canarySubsetName;
      this._destinationRuleName = value.destinationRuleName;
      this._stableSubsetName = value.stableSubsetName;
    }
  }

  // canary_subset_name - computed: false, optional: false, required: true
  private _canarySubsetName?: string; 
  public get canarySubsetName() {
    return this.getStringAttribute('canary_subset_name');
  }
  public set canarySubsetName(value: string) {
    this._canarySubsetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canarySubsetNameInput() {
    return this._canarySubsetName;
  }

  // destination_rule_name - computed: false, optional: false, required: true
  private _destinationRuleName?: string; 
  public get destinationRuleName() {
    return this.getStringAttribute('destination_rule_name');
  }
  public set destinationRuleName(value: string) {
    this._destinationRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRuleNameInput() {
    return this._destinationRuleName;
  }

  // stable_subset_name - computed: false, optional: false, required: true
  private _stableSubsetName?: string; 
  public get stableSubsetName() {
    return this.getStringAttribute('stable_subset_name');
  }
  public set stableSubsetName(value: string) {
    this._stableSubsetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stableSubsetNameInput() {
    return this._stableSubsetName;
  }
}
export interface OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#port OceancdRolloutSpec#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#sni_hosts OceancdRolloutSpec#sni_hosts}
  */
  readonly sniHosts?: string[];
}

export function oceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesToTerraform(struct?: OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    sni_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sniHosts),
  }
}


export function oceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesToHclTerraform(struct?: OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sni_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sniHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sniHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniHosts = this._sniHosts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._sniHosts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._sniHosts = value.sniHosts;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sni_hosts - computed: false, optional: true, required: false
  private _sniHosts?: string[]; 
  public get sniHosts() {
    return this.getListAttribute('sni_hosts');
  }
  public set sniHosts(value: string[]) {
    this._sniHosts = value;
  }
  public resetSniHosts() {
    this._sniHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniHostsInput() {
    return this._sniHosts;
  }
}

export class OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList extends cdktf.ComplexList {
  public internalValue? : OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes[] | cdktf.IResolvable

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
  public get(index: number): OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference {
    return new OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdRolloutSpecTrafficIstioVirtualServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#virtual_service_name OceancdRolloutSpec#virtual_service_name}
  */
  readonly virtualServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#virtual_service_routes OceancdRolloutSpec#virtual_service_routes}
  */
  readonly virtualServiceRoutes?: string[];
  /**
  * tls_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#tls_routes OceancdRolloutSpec#tls_routes}
  */
  readonly tlsRoutes?: OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes[] | cdktf.IResolvable;
}

export function oceancdRolloutSpecTrafficIstioVirtualServicesToTerraform(struct?: OceancdRolloutSpecTrafficIstioVirtualServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    virtual_service_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virtualServiceRoutes),
    tls_routes: cdktf.listMapper(oceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesToTerraform, true)(struct!.tlsRoutes),
  }
}


export function oceancdRolloutSpecTrafficIstioVirtualServicesToHclTerraform(struct?: OceancdRolloutSpecTrafficIstioVirtualServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_service_routes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virtualServiceRoutes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_routes: {
      value: cdktf.listMapperHcl(oceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesToHclTerraform, true)(struct!.tlsRoutes),
      isBlock: true,
      type: "set",
      storageClassType: "OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdRolloutSpecTrafficIstioVirtualServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceName = this._virtualServiceName;
    }
    if (this._virtualServiceRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceRoutes = this._virtualServiceRoutes;
    }
    if (this._tlsRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsRoutes = this._tlsRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficIstioVirtualServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualServiceName = undefined;
      this._virtualServiceRoutes = undefined;
      this._tlsRoutes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualServiceName = value.virtualServiceName;
      this._virtualServiceRoutes = value.virtualServiceRoutes;
      this._tlsRoutes.internalValue = value.tlsRoutes;
    }
  }

  // virtual_service_name - computed: false, optional: false, required: true
  private _virtualServiceName?: string; 
  public get virtualServiceName() {
    return this.getStringAttribute('virtual_service_name');
  }
  public set virtualServiceName(value: string) {
    this._virtualServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceNameInput() {
    return this._virtualServiceName;
  }

  // virtual_service_routes - computed: false, optional: true, required: false
  private _virtualServiceRoutes?: string[]; 
  public get virtualServiceRoutes() {
    return this.getListAttribute('virtual_service_routes');
  }
  public set virtualServiceRoutes(value: string[]) {
    this._virtualServiceRoutes = value;
  }
  public resetVirtualServiceRoutes() {
    this._virtualServiceRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceRoutesInput() {
    return this._virtualServiceRoutes;
  }

  // tls_routes - computed: false, optional: true, required: false
  private _tlsRoutes = new OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList(this, "tls_routes", true);
  public get tlsRoutes() {
    return this._tlsRoutes;
  }
  public putTlsRoutes(value: OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes[] | cdktf.IResolvable) {
    this._tlsRoutes.internalValue = value;
  }
  public resetTlsRoutes() {
    this._tlsRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRoutesInput() {
    return this._tlsRoutes.internalValue;
  }
}

export class OceancdRolloutSpecTrafficIstioVirtualServicesList extends cdktf.ComplexList {
  public internalValue? : OceancdRolloutSpecTrafficIstioVirtualServices[] | cdktf.IResolvable

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
  public get(index: number): OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference {
    return new OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdRolloutSpecTrafficIstio {
  /**
  * destination_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#destination_rule OceancdRolloutSpec#destination_rule}
  */
  readonly destinationRule?: OceancdRolloutSpecTrafficIstioDestinationRule;
  /**
  * virtual_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#virtual_services OceancdRolloutSpec#virtual_services}
  */
  readonly virtualServices: OceancdRolloutSpecTrafficIstioVirtualServices[] | cdktf.IResolvable;
}

export function oceancdRolloutSpecTrafficIstioToTerraform(struct?: OceancdRolloutSpecTrafficIstioOutputReference | OceancdRolloutSpecTrafficIstio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_rule: oceancdRolloutSpecTrafficIstioDestinationRuleToTerraform(struct!.destinationRule),
    virtual_services: cdktf.listMapper(oceancdRolloutSpecTrafficIstioVirtualServicesToTerraform, true)(struct!.virtualServices),
  }
}


export function oceancdRolloutSpecTrafficIstioToHclTerraform(struct?: OceancdRolloutSpecTrafficIstioOutputReference | OceancdRolloutSpecTrafficIstio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_rule: {
      value: oceancdRolloutSpecTrafficIstioDestinationRuleToHclTerraform(struct!.destinationRule),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecTrafficIstioDestinationRuleList",
    },
    virtual_services: {
      value: cdktf.listMapperHcl(oceancdRolloutSpecTrafficIstioVirtualServicesToHclTerraform, true)(struct!.virtualServices),
      isBlock: true,
      type: "set",
      storageClassType: "OceancdRolloutSpecTrafficIstioVirtualServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficIstioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecTrafficIstio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRule = this._destinationRule?.internalValue;
    }
    if (this._virtualServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServices = this._virtualServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficIstio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationRule.internalValue = undefined;
      this._virtualServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationRule.internalValue = value.destinationRule;
      this._virtualServices.internalValue = value.virtualServices;
    }
  }

  // destination_rule - computed: false, optional: true, required: false
  private _destinationRule = new OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference(this, "destination_rule");
  public get destinationRule() {
    return this._destinationRule;
  }
  public putDestinationRule(value: OceancdRolloutSpecTrafficIstioDestinationRule) {
    this._destinationRule.internalValue = value;
  }
  public resetDestinationRule() {
    this._destinationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRuleInput() {
    return this._destinationRule.internalValue;
  }

  // virtual_services - computed: false, optional: false, required: true
  private _virtualServices = new OceancdRolloutSpecTrafficIstioVirtualServicesList(this, "virtual_services", true);
  public get virtualServices() {
    return this._virtualServices;
  }
  public putVirtualServices(value: OceancdRolloutSpecTrafficIstioVirtualServices[] | cdktf.IResolvable) {
    this._virtualServices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServicesInput() {
    return this._virtualServices.internalValue;
  }
}
export interface OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#canary_by_header OceancdRolloutSpec#canary_by_header}
  */
  readonly canaryByHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#key1 OceancdRolloutSpec#key1}
  */
  readonly key1?: string;
}

export function oceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationToTerraform(struct?: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference | OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary_by_header: cdktf.stringToTerraform(struct!.canaryByHeader),
    key1: cdktf.stringToTerraform(struct!.key1),
  }
}


export function oceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationToHclTerraform(struct?: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference | OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canary_by_header: {
      value: cdktf.stringToHclTerraform(struct!.canaryByHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key1: {
      value: cdktf.stringToHclTerraform(struct!.key1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canaryByHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryByHeader = this._canaryByHeader;
    }
    if (this._key1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.key1 = this._key1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canaryByHeader = undefined;
      this._key1 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canaryByHeader = value.canaryByHeader;
      this._key1 = value.key1;
    }
  }

  // canary_by_header - computed: false, optional: true, required: false
  private _canaryByHeader?: string; 
  public get canaryByHeader() {
    return this.getStringAttribute('canary_by_header');
  }
  public set canaryByHeader(value: string) {
    this._canaryByHeader = value;
  }
  public resetCanaryByHeader() {
    this._canaryByHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryByHeaderInput() {
    return this._canaryByHeader;
  }

  // key1 - computed: false, optional: true, required: false
  private _key1?: string; 
  public get key1() {
    return this.getStringAttribute('key1');
  }
  public set key1(value: string) {
    this._key1 = value;
  }
  public resetKey1() {
    this._key1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key1Input() {
    return this._key1;
  }
}
export interface OceancdRolloutSpecTrafficNginx {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#nginx_annotation_prefix OceancdRolloutSpec#nginx_annotation_prefix}
  */
  readonly nginxAnnotationPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#stable_ingress OceancdRolloutSpec#stable_ingress}
  */
  readonly stableIngress: string;
  /**
  * additional_ingress_annotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#additional_ingress_annotation OceancdRolloutSpec#additional_ingress_annotation}
  */
  readonly additionalIngressAnnotation?: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation;
}

export function oceancdRolloutSpecTrafficNginxToTerraform(struct?: OceancdRolloutSpecTrafficNginxOutputReference | OceancdRolloutSpecTrafficNginx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nginx_annotation_prefix: cdktf.stringToTerraform(struct!.nginxAnnotationPrefix),
    stable_ingress: cdktf.stringToTerraform(struct!.stableIngress),
    additional_ingress_annotation: oceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationToTerraform(struct!.additionalIngressAnnotation),
  }
}


export function oceancdRolloutSpecTrafficNginxToHclTerraform(struct?: OceancdRolloutSpecTrafficNginxOutputReference | OceancdRolloutSpecTrafficNginx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nginx_annotation_prefix: {
      value: cdktf.stringToHclTerraform(struct!.nginxAnnotationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stable_ingress: {
      value: cdktf.stringToHclTerraform(struct!.stableIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_ingress_annotation: {
      value: oceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationToHclTerraform(struct!.additionalIngressAnnotation),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficNginxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecTrafficNginx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nginxAnnotationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginxAnnotationPrefix = this._nginxAnnotationPrefix;
    }
    if (this._stableIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableIngress = this._stableIngress;
    }
    if (this._additionalIngressAnnotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalIngressAnnotation = this._additionalIngressAnnotation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficNginx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nginxAnnotationPrefix = undefined;
      this._stableIngress = undefined;
      this._additionalIngressAnnotation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nginxAnnotationPrefix = value.nginxAnnotationPrefix;
      this._stableIngress = value.stableIngress;
      this._additionalIngressAnnotation.internalValue = value.additionalIngressAnnotation;
    }
  }

  // nginx_annotation_prefix - computed: false, optional: true, required: false
  private _nginxAnnotationPrefix?: string; 
  public get nginxAnnotationPrefix() {
    return this.getStringAttribute('nginx_annotation_prefix');
  }
  public set nginxAnnotationPrefix(value: string) {
    this._nginxAnnotationPrefix = value;
  }
  public resetNginxAnnotationPrefix() {
    this._nginxAnnotationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxAnnotationPrefixInput() {
    return this._nginxAnnotationPrefix;
  }

  // stable_ingress - computed: false, optional: false, required: true
  private _stableIngress?: string; 
  public get stableIngress() {
    return this.getStringAttribute('stable_ingress');
  }
  public set stableIngress(value: string) {
    this._stableIngress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stableIngressInput() {
    return this._stableIngress;
  }

  // additional_ingress_annotation - computed: false, optional: true, required: false
  private _additionalIngressAnnotation = new OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference(this, "additional_ingress_annotation");
  public get additionalIngressAnnotation() {
    return this._additionalIngressAnnotation;
  }
  public putAdditionalIngressAnnotation(value: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation) {
    this._additionalIngressAnnotation.internalValue = value;
  }
  public resetAdditionalIngressAnnotation() {
    this._additionalIngressAnnotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalIngressAnnotationInput() {
    return this._additionalIngressAnnotation.internalValue;
  }
}
export interface OceancdRolloutSpecTrafficPingPong {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#ping_service OceancdRolloutSpec#ping_service}
  */
  readonly pingService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#pong_service OceancdRolloutSpec#pong_service}
  */
  readonly pongService: string;
}

export function oceancdRolloutSpecTrafficPingPongToTerraform(struct?: OceancdRolloutSpecTrafficPingPongOutputReference | OceancdRolloutSpecTrafficPingPong): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ping_service: cdktf.stringToTerraform(struct!.pingService),
    pong_service: cdktf.stringToTerraform(struct!.pongService),
  }
}


export function oceancdRolloutSpecTrafficPingPongToHclTerraform(struct?: OceancdRolloutSpecTrafficPingPongOutputReference | OceancdRolloutSpecTrafficPingPong): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ping_service: {
      value: cdktf.stringToHclTerraform(struct!.pingService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pong_service: {
      value: cdktf.stringToHclTerraform(struct!.pongService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficPingPongOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecTrafficPingPong | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pingService !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingService = this._pingService;
    }
    if (this._pongService !== undefined) {
      hasAnyValues = true;
      internalValueResult.pongService = this._pongService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficPingPong | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pingService = undefined;
      this._pongService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pingService = value.pingService;
      this._pongService = value.pongService;
    }
  }

  // ping_service - computed: false, optional: false, required: true
  private _pingService?: string; 
  public get pingService() {
    return this.getStringAttribute('ping_service');
  }
  public set pingService(value: string) {
    this._pingService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pingServiceInput() {
    return this._pingService;
  }

  // pong_service - computed: false, optional: false, required: true
  private _pongService?: string; 
  public get pongService() {
    return this.getStringAttribute('pong_service');
  }
  public set pongService(value: string) {
    this._pongService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pongServiceInput() {
    return this._pongService;
  }
}
export interface OceancdRolloutSpecTrafficSmi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#smi_root_service OceancdRolloutSpec#smi_root_service}
  */
  readonly smiRootService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#traffic_split_name OceancdRolloutSpec#traffic_split_name}
  */
  readonly trafficSplitName?: string;
}

export function oceancdRolloutSpecTrafficSmiToTerraform(struct?: OceancdRolloutSpecTrafficSmiOutputReference | OceancdRolloutSpecTrafficSmi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smi_root_service: cdktf.stringToTerraform(struct!.smiRootService),
    traffic_split_name: cdktf.stringToTerraform(struct!.trafficSplitName),
  }
}


export function oceancdRolloutSpecTrafficSmiToHclTerraform(struct?: OceancdRolloutSpecTrafficSmiOutputReference | OceancdRolloutSpecTrafficSmi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smi_root_service: {
      value: cdktf.stringToHclTerraform(struct!.smiRootService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_split_name: {
      value: cdktf.stringToHclTerraform(struct!.trafficSplitName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficSmiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecTrafficSmi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smiRootService !== undefined) {
      hasAnyValues = true;
      internalValueResult.smiRootService = this._smiRootService;
    }
    if (this._trafficSplitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplitName = this._trafficSplitName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTrafficSmi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._smiRootService = undefined;
      this._trafficSplitName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._smiRootService = value.smiRootService;
      this._trafficSplitName = value.trafficSplitName;
    }
  }

  // smi_root_service - computed: false, optional: true, required: false
  private _smiRootService?: string; 
  public get smiRootService() {
    return this.getStringAttribute('smi_root_service');
  }
  public set smiRootService(value: string) {
    this._smiRootService = value;
  }
  public resetSmiRootService() {
    this._smiRootService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smiRootServiceInput() {
    return this._smiRootService;
  }

  // traffic_split_name - computed: false, optional: true, required: false
  private _trafficSplitName?: string; 
  public get trafficSplitName() {
    return this.getStringAttribute('traffic_split_name');
  }
  public set trafficSplitName(value: string) {
    this._trafficSplitName = value;
  }
  public resetTrafficSplitName() {
    this._trafficSplitName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitNameInput() {
    return this._trafficSplitName;
  }
}
export interface OceancdRolloutSpecTraffic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#canary_service OceancdRolloutSpec#canary_service}
  */
  readonly canaryService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#stable_service OceancdRolloutSpec#stable_service}
  */
  readonly stableService?: string;
  /**
  * alb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#alb OceancdRolloutSpec#alb}
  */
  readonly alb?: OceancdRolloutSpecTrafficAlb;
  /**
  * ambassador block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#ambassador OceancdRolloutSpec#ambassador}
  */
  readonly ambassador?: OceancdRolloutSpecTrafficAmbassador;
  /**
  * istio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#istio OceancdRolloutSpec#istio}
  */
  readonly istio?: OceancdRolloutSpecTrafficIstio;
  /**
  * nginx block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#nginx OceancdRolloutSpec#nginx}
  */
  readonly nginx?: OceancdRolloutSpecTrafficNginx;
  /**
  * ping_pong block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#ping_pong OceancdRolloutSpec#ping_pong}
  */
  readonly pingPong?: OceancdRolloutSpecTrafficPingPong;
  /**
  * smi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#smi OceancdRolloutSpec#smi}
  */
  readonly smi?: OceancdRolloutSpecTrafficSmi;
}

export function oceancdRolloutSpecTrafficToTerraform(struct?: OceancdRolloutSpecTrafficOutputReference | OceancdRolloutSpecTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary_service: cdktf.stringToTerraform(struct!.canaryService),
    stable_service: cdktf.stringToTerraform(struct!.stableService),
    alb: oceancdRolloutSpecTrafficAlbToTerraform(struct!.alb),
    ambassador: oceancdRolloutSpecTrafficAmbassadorToTerraform(struct!.ambassador),
    istio: oceancdRolloutSpecTrafficIstioToTerraform(struct!.istio),
    nginx: oceancdRolloutSpecTrafficNginxToTerraform(struct!.nginx),
    ping_pong: oceancdRolloutSpecTrafficPingPongToTerraform(struct!.pingPong),
    smi: oceancdRolloutSpecTrafficSmiToTerraform(struct!.smi),
  }
}


export function oceancdRolloutSpecTrafficToHclTerraform(struct?: OceancdRolloutSpecTrafficOutputReference | OceancdRolloutSpecTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canary_service: {
      value: cdktf.stringToHclTerraform(struct!.canaryService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stable_service: {
      value: cdktf.stringToHclTerraform(struct!.stableService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alb: {
      value: oceancdRolloutSpecTrafficAlbToHclTerraform(struct!.alb),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecTrafficAlbList",
    },
    ambassador: {
      value: oceancdRolloutSpecTrafficAmbassadorToHclTerraform(struct!.ambassador),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecTrafficAmbassadorList",
    },
    istio: {
      value: oceancdRolloutSpecTrafficIstioToHclTerraform(struct!.istio),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecTrafficIstioList",
    },
    nginx: {
      value: oceancdRolloutSpecTrafficNginxToHclTerraform(struct!.nginx),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecTrafficNginxList",
    },
    ping_pong: {
      value: oceancdRolloutSpecTrafficPingPongToHclTerraform(struct!.pingPong),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecTrafficPingPongList",
    },
    smi: {
      value: oceancdRolloutSpecTrafficSmiToHclTerraform(struct!.smi),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdRolloutSpecTrafficSmiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdRolloutSpecTrafficOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdRolloutSpecTraffic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canaryService !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryService = this._canaryService;
    }
    if (this._stableService !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableService = this._stableService;
    }
    if (this._alb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alb = this._alb?.internalValue;
    }
    if (this._ambassador?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambassador = this._ambassador?.internalValue;
    }
    if (this._istio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istio = this._istio?.internalValue;
    }
    if (this._nginx?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginx = this._nginx?.internalValue;
    }
    if (this._pingPong?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingPong = this._pingPong?.internalValue;
    }
    if (this._smi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smi = this._smi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdRolloutSpecTraffic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canaryService = undefined;
      this._stableService = undefined;
      this._alb.internalValue = undefined;
      this._ambassador.internalValue = undefined;
      this._istio.internalValue = undefined;
      this._nginx.internalValue = undefined;
      this._pingPong.internalValue = undefined;
      this._smi.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canaryService = value.canaryService;
      this._stableService = value.stableService;
      this._alb.internalValue = value.alb;
      this._ambassador.internalValue = value.ambassador;
      this._istio.internalValue = value.istio;
      this._nginx.internalValue = value.nginx;
      this._pingPong.internalValue = value.pingPong;
      this._smi.internalValue = value.smi;
    }
  }

  // canary_service - computed: false, optional: true, required: false
  private _canaryService?: string; 
  public get canaryService() {
    return this.getStringAttribute('canary_service');
  }
  public set canaryService(value: string) {
    this._canaryService = value;
  }
  public resetCanaryService() {
    this._canaryService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryServiceInput() {
    return this._canaryService;
  }

  // stable_service - computed: false, optional: true, required: false
  private _stableService?: string; 
  public get stableService() {
    return this.getStringAttribute('stable_service');
  }
  public set stableService(value: string) {
    this._stableService = value;
  }
  public resetStableService() {
    this._stableService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stableServiceInput() {
    return this._stableService;
  }

  // alb - computed: false, optional: true, required: false
  private _alb = new OceancdRolloutSpecTrafficAlbOutputReference(this, "alb");
  public get alb() {
    return this._alb;
  }
  public putAlb(value: OceancdRolloutSpecTrafficAlb) {
    this._alb.internalValue = value;
  }
  public resetAlb() {
    this._alb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albInput() {
    return this._alb.internalValue;
  }

  // ambassador - computed: false, optional: true, required: false
  private _ambassador = new OceancdRolloutSpecTrafficAmbassadorOutputReference(this, "ambassador");
  public get ambassador() {
    return this._ambassador;
  }
  public putAmbassador(value: OceancdRolloutSpecTrafficAmbassador) {
    this._ambassador.internalValue = value;
  }
  public resetAmbassador() {
    this._ambassador.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambassadorInput() {
    return this._ambassador.internalValue;
  }

  // istio - computed: false, optional: true, required: false
  private _istio = new OceancdRolloutSpecTrafficIstioOutputReference(this, "istio");
  public get istio() {
    return this._istio;
  }
  public putIstio(value: OceancdRolloutSpecTrafficIstio) {
    this._istio.internalValue = value;
  }
  public resetIstio() {
    this._istio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioInput() {
    return this._istio.internalValue;
  }

  // nginx - computed: false, optional: true, required: false
  private _nginx = new OceancdRolloutSpecTrafficNginxOutputReference(this, "nginx");
  public get nginx() {
    return this._nginx;
  }
  public putNginx(value: OceancdRolloutSpecTrafficNginx) {
    this._nginx.internalValue = value;
  }
  public resetNginx() {
    this._nginx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxInput() {
    return this._nginx.internalValue;
  }

  // ping_pong - computed: false, optional: true, required: false
  private _pingPong = new OceancdRolloutSpecTrafficPingPongOutputReference(this, "ping_pong");
  public get pingPong() {
    return this._pingPong;
  }
  public putPingPong(value: OceancdRolloutSpecTrafficPingPong) {
    this._pingPong.internalValue = value;
  }
  public resetPingPong() {
    this._pingPong.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingPongInput() {
    return this._pingPong.internalValue;
  }

  // smi - computed: false, optional: true, required: false
  private _smi = new OceancdRolloutSpecTrafficSmiOutputReference(this, "smi");
  public get smi() {
    return this._smi;
  }
  public putSmi(value: OceancdRolloutSpecTrafficSmi) {
    this._smi.internalValue = value;
  }
  public resetSmi() {
    this._smi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smiInput() {
    return this._smi.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec spotinst_oceancd_rollout_spec}
*/
export class OceancdRolloutSpec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_oceancd_rollout_spec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceancdRolloutSpec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceancdRolloutSpec to import
  * @param importFromId The id of the existing OceancdRolloutSpec that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceancdRolloutSpec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_oceancd_rollout_spec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_rollout_spec spotinst_oceancd_rollout_spec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceancdRolloutSpecConfig
  */
  public constructor(scope: Construct, id: string, config: OceancdRolloutSpecConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_oceancd_rollout_spec',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._rolloutSpecName = config.rolloutSpecName;
    this._failurePolicy.internalValue = config.failurePolicy;
    this._spotDeployment.internalValue = config.spotDeployment;
    this._spotDeployments.internalValue = config.spotDeployments;
    this._strategy.internalValue = config.strategy;
    this._traffic.internalValue = config.traffic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rollout_spec_name - computed: false, optional: false, required: true
  private _rolloutSpecName?: string; 
  public get rolloutSpecName() {
    return this.getStringAttribute('rollout_spec_name');
  }
  public set rolloutSpecName(value: string) {
    this._rolloutSpecName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutSpecNameInput() {
    return this._rolloutSpecName;
  }

  // failure_policy - computed: false, optional: true, required: false
  private _failurePolicy = new OceancdRolloutSpecFailurePolicyOutputReference(this, "failure_policy");
  public get failurePolicy() {
    return this._failurePolicy;
  }
  public putFailurePolicy(value: OceancdRolloutSpecFailurePolicy) {
    this._failurePolicy.internalValue = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy.internalValue;
  }

  // spot_deployment - computed: false, optional: true, required: false
  private _spotDeployment = new OceancdRolloutSpecSpotDeploymentOutputReference(this, "spot_deployment");
  public get spotDeployment() {
    return this._spotDeployment;
  }
  public putSpotDeployment(value: OceancdRolloutSpecSpotDeployment) {
    this._spotDeployment.internalValue = value;
  }
  public resetSpotDeployment() {
    this._spotDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDeploymentInput() {
    return this._spotDeployment.internalValue;
  }

  // spot_deployments - computed: false, optional: true, required: false
  private _spotDeployments = new OceancdRolloutSpecSpotDeploymentsList(this, "spot_deployments", true);
  public get spotDeployments() {
    return this._spotDeployments;
  }
  public putSpotDeployments(value: OceancdRolloutSpecSpotDeployments[] | cdktf.IResolvable) {
    this._spotDeployments.internalValue = value;
  }
  public resetSpotDeployments() {
    this._spotDeployments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDeploymentsInput() {
    return this._spotDeployments.internalValue;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy = new OceancdRolloutSpecStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: OceancdRolloutSpecStrategy) {
    this._strategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic = new OceancdRolloutSpecTrafficOutputReference(this, "traffic");
  public get traffic() {
    return this._traffic;
  }
  public putTraffic(value: OceancdRolloutSpecTraffic) {
    this._traffic.internalValue = value;
  }
  public resetTraffic() {
    this._traffic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rollout_spec_name: cdktf.stringToTerraform(this._rolloutSpecName),
      failure_policy: oceancdRolloutSpecFailurePolicyToTerraform(this._failurePolicy.internalValue),
      spot_deployment: oceancdRolloutSpecSpotDeploymentToTerraform(this._spotDeployment.internalValue),
      spot_deployments: cdktf.listMapper(oceancdRolloutSpecSpotDeploymentsToTerraform, true)(this._spotDeployments.internalValue),
      strategy: oceancdRolloutSpecStrategyToTerraform(this._strategy.internalValue),
      traffic: oceancdRolloutSpecTrafficToTerraform(this._traffic.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollout_spec_name: {
        value: cdktf.stringToHclTerraform(this._rolloutSpecName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_policy: {
        value: oceancdRolloutSpecFailurePolicyToHclTerraform(this._failurePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdRolloutSpecFailurePolicyList",
      },
      spot_deployment: {
        value: oceancdRolloutSpecSpotDeploymentToHclTerraform(this._spotDeployment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdRolloutSpecSpotDeploymentList",
      },
      spot_deployments: {
        value: cdktf.listMapperHcl(oceancdRolloutSpecSpotDeploymentsToHclTerraform, true)(this._spotDeployments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceancdRolloutSpecSpotDeploymentsList",
      },
      strategy: {
        value: oceancdRolloutSpecStrategyToHclTerraform(this._strategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdRolloutSpecStrategyList",
      },
      traffic: {
        value: oceancdRolloutSpecTrafficToHclTerraform(this._traffic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdRolloutSpecTrafficList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
