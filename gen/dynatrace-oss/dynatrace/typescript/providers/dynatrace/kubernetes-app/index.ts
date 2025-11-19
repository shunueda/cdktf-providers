// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/kubernetes_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/kubernetes_app#id KubernetesApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (KUBERNETES_CLUSTER). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/kubernetes_app#scope KubernetesApp#scope}
  */
  readonly scope?: string;
  /**
  * kubernetes_app_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/kubernetes_app#kubernetes_app_options KubernetesApp#kubernetes_app_options}
  */
  readonly kubernetesAppOptions: KubernetesAppKubernetesAppOptions;
}
export interface KubernetesAppKubernetesAppOptions {
  /**
  * New Kubernetes experience
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/kubernetes_app#enable_kubernetes_app KubernetesApp#enable_kubernetes_app}
  */
  readonly enableKubernetesApp: boolean | cdktf.IResolvable;
}

export function kubernetesAppKubernetesAppOptionsToTerraform(struct?: KubernetesAppKubernetesAppOptionsOutputReference | KubernetesAppKubernetesAppOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_kubernetes_app: cdktf.booleanToTerraform(struct!.enableKubernetesApp),
  }
}


export function kubernetesAppKubernetesAppOptionsToHclTerraform(struct?: KubernetesAppKubernetesAppOptionsOutputReference | KubernetesAppKubernetesAppOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_kubernetes_app: {
      value: cdktf.booleanToHclTerraform(struct!.enableKubernetesApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAppKubernetesAppOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesAppKubernetesAppOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableKubernetesApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKubernetesApp = this._enableKubernetesApp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppKubernetesAppOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableKubernetesApp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableKubernetesApp = value.enableKubernetesApp;
    }
  }

  // enable_kubernetes_app - computed: false, optional: false, required: true
  private _enableKubernetesApp?: boolean | cdktf.IResolvable; 
  public get enableKubernetesApp() {
    return this.getBooleanAttribute('enable_kubernetes_app');
  }
  public set enableKubernetesApp(value: boolean | cdktf.IResolvable) {
    this._enableKubernetesApp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubernetesAppInput() {
    return this._enableKubernetesApp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/kubernetes_app dynatrace_kubernetes_app}
*/
export class KubernetesApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_kubernetes_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesApp to import
  * @param importFromId The id of the existing KubernetesApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/kubernetes_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_kubernetes_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/kubernetes_app dynatrace_kubernetes_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesAppConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesAppConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_kubernetes_app',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._scope = config.scope;
    this._kubernetesAppOptions.internalValue = config.kubernetesAppOptions;
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

  // scope - computed: false, optional: true, required: false
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

  // kubernetes_app_options - computed: false, optional: false, required: true
  private _kubernetesAppOptions = new KubernetesAppKubernetesAppOptionsOutputReference(this, "kubernetes_app_options");
  public get kubernetesAppOptions() {
    return this._kubernetesAppOptions;
  }
  public putKubernetesAppOptions(value: KubernetesAppKubernetesAppOptions) {
    this._kubernetesAppOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesAppOptionsInput() {
    return this._kubernetesAppOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      kubernetes_app_options: kubernetesAppKubernetesAppOptionsToTerraform(this._kubernetesAppOptions.internalValue),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_app_options: {
        value: kubernetesAppKubernetesAppOptionsToHclTerraform(this._kubernetesAppOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAppKubernetesAppOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
