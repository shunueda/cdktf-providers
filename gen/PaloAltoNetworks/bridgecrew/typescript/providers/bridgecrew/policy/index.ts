// https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Cloud provider this is for e.g. - aws, gcp, azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cloud_provider Policy#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * This is the name of the YAML policy file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#file Policy#file}
  */
  readonly file: string;
  /**
  * Which IAC framework is this policy targeting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#frameworks Policy#frameworks}
  */
  readonly frameworks: string[];
  /**
  * By providing the source code hash change to the YAML file can be caught and the resource updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#source_code_hash Policy#source_code_hash}
  */
  readonly sourceCodeHash?: string;
  /**
  * benchmarks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#benchmarks Policy#benchmarks}
  */
  readonly benchmarks?: PolicyBenchmarks;
}
export interface PolicyBenchmarks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_aws_v12 Policy#cis_aws_v12}
  */
  readonly cisAwsV12?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_aws_v13 Policy#cis_aws_v13}
  */
  readonly cisAwsV13?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_azure_v11 Policy#cis_azure_v11}
  */
  readonly cisAzureV11?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_azure_v12 Policy#cis_azure_v12}
  */
  readonly cisAzureV12?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_azure_v13 Policy#cis_azure_v13}
  */
  readonly cisAzureV13?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_docker_v11 Policy#cis_docker_v11}
  */
  readonly cisDockerV11?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_eks_v11 Policy#cis_eks_v11}
  */
  readonly cisEksV11?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_gcp_v11 Policy#cis_gcp_v11}
  */
  readonly cisGcpV11?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_gke_v11 Policy#cis_gke_v11}
  */
  readonly cisGkeV11?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_kubernetes_v15 Policy#cis_kubernetes_v15}
  */
  readonly cisKubernetesV15?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#cis_kubernetes_v16 Policy#cis_kubernetes_v16}
  */
  readonly cisKubernetesV16?: string[];
}

export function policyBenchmarksToTerraform(struct?: PolicyBenchmarksOutputReference | PolicyBenchmarks): any {
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


export function policyBenchmarksToHclTerraform(struct?: PolicyBenchmarksOutputReference | PolicyBenchmarks): any {
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

export class PolicyBenchmarksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyBenchmarks | undefined {
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

  public set internalValue(value: PolicyBenchmarks | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy bridgecrew_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bridgecrew_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bridgecrew_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/policy bridgecrew_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'bridgecrew_policy',
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
    this._cloudProvider = config.cloudProvider;
    this._file = config.file;
    this._frameworks = config.frameworks;
    this._sourceCodeHash = config.sourceCodeHash;
    this._benchmarks.internalValue = config.benchmarks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // source_code_hash - computed: true, optional: true, required: false
  private _sourceCodeHash?: string; 
  public get sourceCodeHash() {
    return this.getStringAttribute('source_code_hash');
  }
  public set sourceCodeHash(value: string) {
    this._sourceCodeHash = value;
  }
  public resetSourceCodeHash() {
    this._sourceCodeHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeHashInput() {
    return this._sourceCodeHash;
  }

  // benchmarks - computed: false, optional: true, required: false
  private _benchmarks = new PolicyBenchmarksOutputReference(this, "benchmarks");
  public get benchmarks() {
    return this._benchmarks;
  }
  public putBenchmarks(value: PolicyBenchmarks) {
    this._benchmarks.internalValue = value;
  }
  public resetBenchmarks() {
    this._benchmarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get benchmarksInput() {
    return this._benchmarks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      file: cdktf.stringToTerraform(this._file),
      frameworks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._frameworks),
      source_code_hash: cdktf.stringToTerraform(this._sourceCodeHash),
      benchmarks: policyBenchmarksToTerraform(this._benchmarks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
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
      source_code_hash: {
        value: cdktf.stringToHclTerraform(this._sourceCodeHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      benchmarks: {
        value: policyBenchmarksToHclTerraform(this._benchmarks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyBenchmarksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
