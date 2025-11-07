// https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GitopsEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Environment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment#id GitopsEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of environment. Possible values: NON_PROD, PROD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment#kind GitopsEnvironment#kind}
  */
  readonly kind: string;
  /**
  * List of labels and values in the format label=value that can be used to assign applications to the environment. Example: ['codefresh.io/environment=prod']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment#label_pairs GitopsEnvironment#label_pairs}
  */
  readonly labelPairs?: string[];
  /**
  * The name of the environment. Must be unique per account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment#name GitopsEnvironment#name}
  */
  readonly name: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment#cluster GitopsEnvironment#cluster}
  */
  readonly cluster: GitopsEnvironmentCluster[] | cdktf.IResolvable;
}
export interface GitopsEnvironmentCluster {
  /**
  * Target cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment#name GitopsEnvironment#name}
  */
  readonly name: string;
  /**
  * List of namespaces in the target cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment#namespaces GitopsEnvironment#namespaces}
  */
  readonly namespaces: string[];
  /**
  * Runtime name where the target cluster is registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment#runtime_name GitopsEnvironment#runtime_name}
  */
  readonly runtimeName: string;
}

export function gitopsEnvironmentClusterToTerraform(struct?: GitopsEnvironmentCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    runtime_name: cdktf.stringToTerraform(struct!.runtimeName),
  }
}


export function gitopsEnvironmentClusterToHclTerraform(struct?: GitopsEnvironmentCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    runtime_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GitopsEnvironmentClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GitopsEnvironmentCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._runtimeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeName = this._runtimeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GitopsEnvironmentCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespaces = undefined;
      this._runtimeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespaces = value.namespaces;
      this._runtimeName = value.runtimeName;
    }
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

  // namespaces - computed: false, optional: false, required: true
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // runtime_name - computed: false, optional: false, required: true
  private _runtimeName?: string; 
  public get runtimeName() {
    return this.getStringAttribute('runtime_name');
  }
  public set runtimeName(value: string) {
    this._runtimeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeNameInput() {
    return this._runtimeName;
  }
}

export class GitopsEnvironmentClusterList extends cdktf.ComplexList {
  public internalValue? : GitopsEnvironmentCluster[] | cdktf.IResolvable

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
  public get(index: number): GitopsEnvironmentClusterOutputReference {
    return new GitopsEnvironmentClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment codefresh_gitops_environment}
*/
export class GitopsEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_gitops_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GitopsEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GitopsEnvironment to import
  * @param importFromId The id of the existing GitopsEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GitopsEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_gitops_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/gitops_environment codefresh_gitops_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GitopsEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: GitopsEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'codefresh_gitops_environment',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
        providerVersion: '1.1.0'
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
    this._kind = config.kind;
    this._labelPairs = config.labelPairs;
    this._name = config.name;
    this._cluster.internalValue = config.cluster;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label_pairs - computed: false, optional: true, required: false
  private _labelPairs?: string[]; 
  public get labelPairs() {
    return this.getListAttribute('label_pairs');
  }
  public set labelPairs(value: string[]) {
    this._labelPairs = value;
  }
  public resetLabelPairs() {
    this._labelPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelPairsInput() {
    return this._labelPairs;
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

  // cluster - computed: false, optional: false, required: true
  private _cluster = new GitopsEnvironmentClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: GitopsEnvironmentCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      label_pairs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labelPairs),
      name: cdktf.stringToTerraform(this._name),
      cluster: cdktf.listMapper(gitopsEnvironmentClusterToTerraform, true)(this._cluster.internalValue),
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
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_pairs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labelPairs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktf.listMapperHcl(gitopsEnvironmentClusterToHclTerraform, true)(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GitopsEnvironmentClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
