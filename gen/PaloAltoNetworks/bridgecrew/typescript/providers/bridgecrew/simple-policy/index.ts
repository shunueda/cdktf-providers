// https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SimplePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Check category for grouping similar checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#category SimplePolicy#category}
  */
  readonly category: string;
  /**
  * The Cloud provider this is for e.g. - aws, gcp, azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cloud_provider SimplePolicy#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Which IAC framework is this policy targeting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#frameworks SimplePolicy#frameworks}
  */
  readonly frameworks: string[];
  /**
  * A detailed description helps you understand why the check was written and should include details on how to fix the violation. The field must more than 50 chars in it, to encourage detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#guidelines SimplePolicy#guidelines}
  */
  readonly guidelines?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#last_updated SimplePolicy#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Severity category allows you to indicate importance and this value can determine build or PR failure in the platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#severity SimplePolicy#severity}
  */
  readonly severity: string;
  /**
  * The title of the check, needs to be longer than 20 chars - an effort to ensure detailed names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#title SimplePolicy#title}
  */
  readonly title: string;
  /**
  * benchmarks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#benchmarks SimplePolicy#benchmarks}
  */
  readonly benchmarks?: SimplePolicyBenchmarks;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#conditions SimplePolicy#conditions}
  */
  readonly conditions: SimplePolicyConditions;
}
export interface SimplePolicyBenchmarks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_aws_v12 SimplePolicy#cis_aws_v12}
  */
  readonly cisAwsV12?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_aws_v13 SimplePolicy#cis_aws_v13}
  */
  readonly cisAwsV13?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_azure_v11 SimplePolicy#cis_azure_v11}
  */
  readonly cisAzureV11?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_azure_v12 SimplePolicy#cis_azure_v12}
  */
  readonly cisAzureV12?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_azure_v13 SimplePolicy#cis_azure_v13}
  */
  readonly cisAzureV13?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_docker_v11 SimplePolicy#cis_docker_v11}
  */
  readonly cisDockerV11?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_eks_v11 SimplePolicy#cis_eks_v11}
  */
  readonly cisEksV11?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_gcp_v11 SimplePolicy#cis_gcp_v11}
  */
  readonly cisGcpV11?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_gke_v11 SimplePolicy#cis_gke_v11}
  */
  readonly cisGkeV11?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_kubernetes_v15 SimplePolicy#cis_kubernetes_v15}
  */
  readonly cisKubernetesV15?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cis_kubernetes_v16 SimplePolicy#cis_kubernetes_v16}
  */
  readonly cisKubernetesV16?: string[];
}

export function simplePolicyBenchmarksToTerraform(struct?: SimplePolicyBenchmarksOutputReference | SimplePolicyBenchmarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cis_aws_v12: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisAwsV12),
    cis_aws_v13: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisAwsV13),
    cis_azure_v11: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisAzureV11),
    cis_azure_v12: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisAzureV12),
    cis_azure_v13: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisAzureV13),
    cis_docker_v11: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisDockerV11),
    cis_eks_v11: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisEksV11),
    cis_gcp_v11: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisGcpV11),
    cis_gke_v11: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisGkeV11),
    cis_kubernetes_v15: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisKubernetesV15),
    cis_kubernetes_v16: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cisKubernetesV16),
  }
}


export function simplePolicyBenchmarksToHclTerraform(struct?: SimplePolicyBenchmarksOutputReference | SimplePolicyBenchmarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cis_aws_v12: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisAwsV12),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cis_aws_v13: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisAwsV13),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cis_azure_v11: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisAzureV11),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cis_azure_v12: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisAzureV12),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cis_azure_v13: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisAzureV13),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cis_docker_v11: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisDockerV11),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cis_eks_v11: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisEksV11),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cis_gcp_v11: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisGcpV11),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cis_gke_v11: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisGkeV11),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cis_kubernetes_v15: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisKubernetesV15),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cis_kubernetes_v16: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cisKubernetesV16),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SimplePolicyBenchmarksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SimplePolicyBenchmarks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cisAwsV12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisAwsV12 = this._cisAwsV12;
    }
    if (this._cisAwsV13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisAwsV13 = this._cisAwsV13;
    }
    if (this._cisAzureV11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisAzureV11 = this._cisAzureV11;
    }
    if (this._cisAzureV12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisAzureV12 = this._cisAzureV12;
    }
    if (this._cisAzureV13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisAzureV13 = this._cisAzureV13;
    }
    if (this._cisDockerV11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisDockerV11 = this._cisDockerV11;
    }
    if (this._cisEksV11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisEksV11 = this._cisEksV11;
    }
    if (this._cisGcpV11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisGcpV11 = this._cisGcpV11;
    }
    if (this._cisGkeV11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisGkeV11 = this._cisGkeV11;
    }
    if (this._cisKubernetesV15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisKubernetesV15 = this._cisKubernetesV15;
    }
    if (this._cisKubernetesV16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisKubernetesV16 = this._cisKubernetesV16;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SimplePolicyBenchmarks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cisAwsV12 = undefined;
      this._cisAwsV13 = undefined;
      this._cisAzureV11 = undefined;
      this._cisAzureV12 = undefined;
      this._cisAzureV13 = undefined;
      this._cisDockerV11 = undefined;
      this._cisEksV11 = undefined;
      this._cisGcpV11 = undefined;
      this._cisGkeV11 = undefined;
      this._cisKubernetesV15 = undefined;
      this._cisKubernetesV16 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cisAwsV12 = value.cisAwsV12;
      this._cisAwsV13 = value.cisAwsV13;
      this._cisAzureV11 = value.cisAzureV11;
      this._cisAzureV12 = value.cisAzureV12;
      this._cisAzureV13 = value.cisAzureV13;
      this._cisDockerV11 = value.cisDockerV11;
      this._cisEksV11 = value.cisEksV11;
      this._cisGcpV11 = value.cisGcpV11;
      this._cisGkeV11 = value.cisGkeV11;
      this._cisKubernetesV15 = value.cisKubernetesV15;
      this._cisKubernetesV16 = value.cisKubernetesV16;
    }
  }

  // cis_aws_v12 - computed: false, optional: true, required: false
  private _cisAwsV12?: string[]; 
  public get cisAwsV12() {
    return this.getListAttribute('cis_aws_v12');
  }
  public set cisAwsV12(value: string[]) {
    this._cisAwsV12 = value;
  }
  public resetCisAwsV12() {
    this._cisAwsV12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisAwsV12Input() {
    return this._cisAwsV12;
  }

  // cis_aws_v13 - computed: false, optional: true, required: false
  private _cisAwsV13?: string[]; 
  public get cisAwsV13() {
    return this.getListAttribute('cis_aws_v13');
  }
  public set cisAwsV13(value: string[]) {
    this._cisAwsV13 = value;
  }
  public resetCisAwsV13() {
    this._cisAwsV13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisAwsV13Input() {
    return this._cisAwsV13;
  }

  // cis_azure_v11 - computed: false, optional: true, required: false
  private _cisAzureV11?: string[]; 
  public get cisAzureV11() {
    return this.getListAttribute('cis_azure_v11');
  }
  public set cisAzureV11(value: string[]) {
    this._cisAzureV11 = value;
  }
  public resetCisAzureV11() {
    this._cisAzureV11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisAzureV11Input() {
    return this._cisAzureV11;
  }

  // cis_azure_v12 - computed: false, optional: true, required: false
  private _cisAzureV12?: string[]; 
  public get cisAzureV12() {
    return this.getListAttribute('cis_azure_v12');
  }
  public set cisAzureV12(value: string[]) {
    this._cisAzureV12 = value;
  }
  public resetCisAzureV12() {
    this._cisAzureV12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisAzureV12Input() {
    return this._cisAzureV12;
  }

  // cis_azure_v13 - computed: false, optional: true, required: false
  private _cisAzureV13?: string[]; 
  public get cisAzureV13() {
    return this.getListAttribute('cis_azure_v13');
  }
  public set cisAzureV13(value: string[]) {
    this._cisAzureV13 = value;
  }
  public resetCisAzureV13() {
    this._cisAzureV13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisAzureV13Input() {
    return this._cisAzureV13;
  }

  // cis_docker_v11 - computed: false, optional: true, required: false
  private _cisDockerV11?: string[]; 
  public get cisDockerV11() {
    return this.getListAttribute('cis_docker_v11');
  }
  public set cisDockerV11(value: string[]) {
    this._cisDockerV11 = value;
  }
  public resetCisDockerV11() {
    this._cisDockerV11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisDockerV11Input() {
    return this._cisDockerV11;
  }

  // cis_eks_v11 - computed: false, optional: true, required: false
  private _cisEksV11?: string[]; 
  public get cisEksV11() {
    return this.getListAttribute('cis_eks_v11');
  }
  public set cisEksV11(value: string[]) {
    this._cisEksV11 = value;
  }
  public resetCisEksV11() {
    this._cisEksV11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisEksV11Input() {
    return this._cisEksV11;
  }

  // cis_gcp_v11 - computed: false, optional: true, required: false
  private _cisGcpV11?: string[]; 
  public get cisGcpV11() {
    return this.getListAttribute('cis_gcp_v11');
  }
  public set cisGcpV11(value: string[]) {
    this._cisGcpV11 = value;
  }
  public resetCisGcpV11() {
    this._cisGcpV11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisGcpV11Input() {
    return this._cisGcpV11;
  }

  // cis_gke_v11 - computed: false, optional: true, required: false
  private _cisGkeV11?: string[]; 
  public get cisGkeV11() {
    return this.getListAttribute('cis_gke_v11');
  }
  public set cisGkeV11(value: string[]) {
    this._cisGkeV11 = value;
  }
  public resetCisGkeV11() {
    this._cisGkeV11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisGkeV11Input() {
    return this._cisGkeV11;
  }

  // cis_kubernetes_v15 - computed: false, optional: true, required: false
  private _cisKubernetesV15?: string[]; 
  public get cisKubernetesV15() {
    return this.getListAttribute('cis_kubernetes_v15');
  }
  public set cisKubernetesV15(value: string[]) {
    this._cisKubernetesV15 = value;
  }
  public resetCisKubernetesV15() {
    this._cisKubernetesV15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisKubernetesV15Input() {
    return this._cisKubernetesV15;
  }

  // cis_kubernetes_v16 - computed: false, optional: true, required: false
  private _cisKubernetesV16?: string[]; 
  public get cisKubernetesV16() {
    return this.getListAttribute('cis_kubernetes_v16');
  }
  public set cisKubernetesV16(value: string[]) {
    this._cisKubernetesV16 = value;
  }
  public resetCisKubernetesV16() {
    this._cisKubernetesV16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisKubernetesV16Input() {
    return this._cisKubernetesV16;
  }
}
export interface SimplePolicyConditions {
  /**
  * The field that you want the condition on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#attribute SimplePolicy#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#cond_type SimplePolicy#cond_type}
  */
  readonly condType: string;
  /**
  * The logic Operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#operator SimplePolicy#operator}
  */
  readonly operator: string;
  /**
  * The resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#resource_types SimplePolicy#resource_types}
  */
  readonly resourceTypes: string[];
  /**
  * The Value to Check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#value SimplePolicy#value}
  */
  readonly value: string;
}

export function simplePolicyConditionsToTerraform(struct?: SimplePolicyConditionsOutputReference | SimplePolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    cond_type: cdktf.stringToTerraform(struct!.condType),
    operator: cdktf.stringToTerraform(struct!.operator),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function simplePolicyConditionsToHclTerraform(struct?: SimplePolicyConditionsOutputReference | SimplePolicyConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cond_type: {
      value: cdktf.stringToHclTerraform(struct!.condType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SimplePolicyConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SimplePolicyConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._condType !== undefined) {
      hasAnyValues = true;
      internalValueResult.condType = this._condType;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SimplePolicyConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attribute = undefined;
      this._condType = undefined;
      this._operator = undefined;
      this._resourceTypes = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attribute = value.attribute;
      this._condType = value.condType;
      this._operator = value.operator;
      this._resourceTypes = value.resourceTypes;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // cond_type - computed: false, optional: false, required: true
  private _condType?: string; 
  public get condType() {
    return this.getStringAttribute('cond_type');
  }
  public set condType(value: string) {
    this._condType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get condTypeInput() {
    return this._condType;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy bridgecrew_simple_policy}
*/
export class SimplePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bridgecrew_simple_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SimplePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SimplePolicy to import
  * @param importFromId The id of the existing SimplePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SimplePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bridgecrew_simple_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/simple_policy bridgecrew_simple_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SimplePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SimplePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'bridgecrew_simple_policy',
      terraformGeneratorMetadata: {
        providerName: 'bridgecrew',
        providerVersion: '0.3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._cloudProvider = config.cloudProvider;
    this._frameworks = config.frameworks;
    this._guidelines = config.guidelines;
    this._lastUpdated = config.lastUpdated;
    this._severity = config.severity;
    this._title = config.title;
    this._benchmarks.internalValue = config.benchmarks;
    this._conditions.internalValue = config.conditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // frameworks - computed: false, optional: false, required: true
  private _frameworks?: string[]; 
  public get frameworks() {
    return this.getListAttribute('frameworks');
  }
  public set frameworks(value: string[]) {
    this._frameworks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworksInput() {
    return this._frameworks;
  }

  // guidelines - computed: false, optional: true, required: false
  private _guidelines?: string; 
  public get guidelines() {
    return this.getStringAttribute('guidelines');
  }
  public set guidelines(value: string) {
    this._guidelines = value;
  }
  public resetGuidelines() {
    this._guidelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidelinesInput() {
    return this._guidelines;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // benchmarks - computed: false, optional: true, required: false
  private _benchmarks = new SimplePolicyBenchmarksOutputReference(this, "benchmarks");
  public get benchmarks() {
    return this._benchmarks;
  }
  public putBenchmarks(value: SimplePolicyBenchmarks) {
    this._benchmarks.internalValue = value;
  }
  public resetBenchmarks() {
    this._benchmarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get benchmarksInput() {
    return this._benchmarks.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new SimplePolicyConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SimplePolicyConditions) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      frameworks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._frameworks),
      guidelines: cdktf.stringToTerraform(this._guidelines),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      severity: cdktf.stringToTerraform(this._severity),
      title: cdktf.stringToTerraform(this._title),
      benchmarks: simplePolicyBenchmarksToTerraform(this._benchmarks.internalValue),
      conditions: simplePolicyConditionsToTerraform(this._conditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frameworks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._frameworks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      guidelines: {
        value: cdktf.stringToHclTerraform(this._guidelines),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      benchmarks: {
        value: simplePolicyBenchmarksToHclTerraform(this._benchmarks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SimplePolicyBenchmarksList",
      },
      conditions: {
        value: simplePolicyConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SimplePolicyConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
