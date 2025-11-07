// https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKustomizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization#id DataKustomization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization#path DataKustomization#path}
  */
  readonly path: string;
  /**
  * kustomize_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization#kustomize_options DataKustomization#kustomize_options}
  */
  readonly kustomizeOptions?: DataKustomizationKustomizeOptions;
}
export interface DataKustomizationKustomizeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization#enable_alpha_plugins DataKustomization#enable_alpha_plugins}
  */
  readonly enableAlphaPlugins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization#enable_exec DataKustomization#enable_exec}
  */
  readonly enableExec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization#enable_helm DataKustomization#enable_helm}
  */
  readonly enableHelm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization#enable_star DataKustomization#enable_star}
  */
  readonly enableStar?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization#helm_path DataKustomization#helm_path}
  */
  readonly helmPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization#load_restrictor DataKustomization#load_restrictor}
  */
  readonly loadRestrictor?: string;
}

export function dataKustomizationKustomizeOptionsToTerraform(struct?: DataKustomizationKustomizeOptionsOutputReference | DataKustomizationKustomizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_alpha_plugins: cdktf.booleanToTerraform(struct!.enableAlphaPlugins),
    enable_exec: cdktf.booleanToTerraform(struct!.enableExec),
    enable_helm: cdktf.booleanToTerraform(struct!.enableHelm),
    enable_star: cdktf.booleanToTerraform(struct!.enableStar),
    helm_path: cdktf.stringToTerraform(struct!.helmPath),
    load_restrictor: cdktf.stringToTerraform(struct!.loadRestrictor),
  }
}


export function dataKustomizationKustomizeOptionsToHclTerraform(struct?: DataKustomizationKustomizeOptionsOutputReference | DataKustomizationKustomizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_alpha_plugins: {
      value: cdktf.booleanToHclTerraform(struct!.enableAlphaPlugins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_exec: {
      value: cdktf.booleanToHclTerraform(struct!.enableExec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_helm: {
      value: cdktf.booleanToHclTerraform(struct!.enableHelm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_star: {
      value: cdktf.booleanToHclTerraform(struct!.enableStar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    helm_path: {
      value: cdktf.stringToHclTerraform(struct!.helmPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_restrictor: {
      value: cdktf.stringToHclTerraform(struct!.loadRestrictor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationKustomizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationKustomizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAlphaPlugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAlphaPlugins = this._enableAlphaPlugins;
    }
    if (this._enableExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExec = this._enableExec;
    }
    if (this._enableHelm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHelm = this._enableHelm;
    }
    if (this._enableStar !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStar = this._enableStar;
    }
    if (this._helmPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmPath = this._helmPath;
    }
    if (this._loadRestrictor !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadRestrictor = this._loadRestrictor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationKustomizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAlphaPlugins = undefined;
      this._enableExec = undefined;
      this._enableHelm = undefined;
      this._enableStar = undefined;
      this._helmPath = undefined;
      this._loadRestrictor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAlphaPlugins = value.enableAlphaPlugins;
      this._enableExec = value.enableExec;
      this._enableHelm = value.enableHelm;
      this._enableStar = value.enableStar;
      this._helmPath = value.helmPath;
      this._loadRestrictor = value.loadRestrictor;
    }
  }

  // enable_alpha_plugins - computed: false, optional: true, required: false
  private _enableAlphaPlugins?: boolean | cdktf.IResolvable; 
  public get enableAlphaPlugins() {
    return this.getBooleanAttribute('enable_alpha_plugins');
  }
  public set enableAlphaPlugins(value: boolean | cdktf.IResolvable) {
    this._enableAlphaPlugins = value;
  }
  public resetEnableAlphaPlugins() {
    this._enableAlphaPlugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAlphaPluginsInput() {
    return this._enableAlphaPlugins;
  }

  // enable_exec - computed: false, optional: true, required: false
  private _enableExec?: boolean | cdktf.IResolvable; 
  public get enableExec() {
    return this.getBooleanAttribute('enable_exec');
  }
  public set enableExec(value: boolean | cdktf.IResolvable) {
    this._enableExec = value;
  }
  public resetEnableExec() {
    this._enableExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExecInput() {
    return this._enableExec;
  }

  // enable_helm - computed: false, optional: true, required: false
  private _enableHelm?: boolean | cdktf.IResolvable; 
  public get enableHelm() {
    return this.getBooleanAttribute('enable_helm');
  }
  public set enableHelm(value: boolean | cdktf.IResolvable) {
    this._enableHelm = value;
  }
  public resetEnableHelm() {
    this._enableHelm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHelmInput() {
    return this._enableHelm;
  }

  // enable_star - computed: false, optional: true, required: false
  private _enableStar?: boolean | cdktf.IResolvable; 
  public get enableStar() {
    return this.getBooleanAttribute('enable_star');
  }
  public set enableStar(value: boolean | cdktf.IResolvable) {
    this._enableStar = value;
  }
  public resetEnableStar() {
    this._enableStar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStarInput() {
    return this._enableStar;
  }

  // helm_path - computed: false, optional: true, required: false
  private _helmPath?: string; 
  public get helmPath() {
    return this.getStringAttribute('helm_path');
  }
  public set helmPath(value: string) {
    this._helmPath = value;
  }
  public resetHelmPath() {
    this._helmPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmPathInput() {
    return this._helmPath;
  }

  // load_restrictor - computed: false, optional: true, required: false
  private _loadRestrictor?: string; 
  public get loadRestrictor() {
    return this.getStringAttribute('load_restrictor');
  }
  public set loadRestrictor(value: string) {
    this._loadRestrictor = value;
  }
  public resetLoadRestrictor() {
    this._loadRestrictor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadRestrictorInput() {
    return this._loadRestrictor;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization kustomization}
*/
export class DataKustomization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kustomization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKustomization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKustomization to import
  * @param importFromId The id of the existing DataKustomization that should be imported. Refer to the {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKustomization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kustomization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/kustomization kustomization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKustomizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataKustomizationConfig) {
    super(scope, id, {
      terraformResourceType: 'kustomization',
      terraformGeneratorMetadata: {
        providerName: 'kustomization',
        providerVersion: '0.9.7'
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
    this._path = config.path;
    this._kustomizeOptions.internalValue = config.kustomizeOptions;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // ids_prio - computed: true, optional: false, required: false
  private _idsPrio = new cdktf.StringListList(this, "ids_prio", false);
  public get idsPrio() {
    return this._idsPrio;
  }

  // manifests - computed: true, optional: false, required: false
  private _manifests = new cdktf.StringMap(this, "manifests");
  public get manifests() {
    return this._manifests;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // kustomize_options - computed: false, optional: true, required: false
  private _kustomizeOptions = new DataKustomizationKustomizeOptionsOutputReference(this, "kustomize_options");
  public get kustomizeOptions() {
    return this._kustomizeOptions;
  }
  public putKustomizeOptions(value: DataKustomizationKustomizeOptions) {
    this._kustomizeOptions.internalValue = value;
  }
  public resetKustomizeOptions() {
    this._kustomizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeOptionsInput() {
    return this._kustomizeOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      kustomize_options: dataKustomizationKustomizeOptionsToTerraform(this._kustomizeOptions.internalValue),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kustomize_options: {
        value: dataKustomizationKustomizeOptionsToHclTerraform(this._kustomizeOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationKustomizeOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
