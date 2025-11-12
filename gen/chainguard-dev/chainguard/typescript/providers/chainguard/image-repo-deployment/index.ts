// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/image_repo_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageRepoDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Helm charts for this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/image_repo_deployment#charts ImageRepoDeployment#charts}
  */
  readonly charts: ImageRepoDeploymentCharts[] | cdktf.IResolvable;
  /**
  * The UIDP of the repository this deployment belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/image_repo_deployment#id ImageRepoDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * If true, deployment errors (like permission denied) will be logged as warnings instead of blocking the operation. Useful to prevent deployment failures from blocking image builds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/image_repo_deployment#ignore_errors ImageRepoDeployment#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
}
export interface ImageRepoDeploymentCharts {
  /**
  * Repository URL of the chart (e.g., 'oci://ghcr.io/stefanprodan/charts/podinfo' or 'https://kyverno.github.io/kyverno/').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/image_repo_deployment#repo ImageRepoDeployment#repo}
  */
  readonly repo: string;
  /**
  * Link to the Helm chart source code (e.g., 'https://github.com/kyverno/kyverno').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/image_repo_deployment#source ImageRepoDeployment#source}
  */
  readonly source?: string;
}

export function imageRepoDeploymentChartsToTerraform(struct?: ImageRepoDeploymentCharts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repo: cdktf.stringToTerraform(struct!.repo),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function imageRepoDeploymentChartsToHclTerraform(struct?: ImageRepoDeploymentCharts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageRepoDeploymentChartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageRepoDeploymentCharts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageRepoDeploymentCharts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repo = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repo = value.repo;
      this._source = value.source;
    }
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ImageRepoDeploymentChartsList extends cdktf.ComplexList {
  public internalValue? : ImageRepoDeploymentCharts[] | cdktf.IResolvable

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
  public get(index: number): ImageRepoDeploymentChartsOutputReference {
    return new ImageRepoDeploymentChartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/image_repo_deployment chainguard_image_repo_deployment}
*/
export class ImageRepoDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_image_repo_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageRepoDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageRepoDeployment to import
  * @param importFromId The id of the existing ImageRepoDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/image_repo_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageRepoDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_image_repo_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/image_repo_deployment chainguard_image_repo_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageRepoDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ImageRepoDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_image_repo_deployment',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.38',
        providerVersionConstraint: '0.1.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._charts.internalValue = config.charts;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // charts - computed: false, optional: false, required: true
  private _charts = new ImageRepoDeploymentChartsList(this, "charts", false);
  public get charts() {
    return this._charts;
  }
  public putCharts(value: ImageRepoDeploymentCharts[] | cdktf.IResolvable) {
    this._charts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartsInput() {
    return this._charts.internalValue;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      charts: cdktf.listMapper(imageRepoDeploymentChartsToTerraform, false)(this._charts.internalValue),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      charts: {
        value: cdktf.listMapperHcl(imageRepoDeploymentChartsToHclTerraform, false)(this._charts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImageRepoDeploymentChartsList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
