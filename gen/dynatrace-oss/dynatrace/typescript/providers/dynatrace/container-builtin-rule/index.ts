// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/container_builtin_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerBuiltinRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/container_builtin_rule#id ContainerBuiltinRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disable monitoring of platform internal pause containers in Kubernetes and OpenShift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/container_builtin_rule#ignore_docker_pause_container ContainerBuiltinRule#ignore_docker_pause_container}
  */
  readonly ignoreDockerPauseContainer: boolean | cdktf.IResolvable;
  /**
  * Disable monitoring of platform internal pause containers in Kubernetes and OpenShift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/container_builtin_rule#ignore_kubernetes_pause_container ContainerBuiltinRule#ignore_kubernetes_pause_container}
  */
  readonly ignoreKubernetesPauseContainer: boolean | cdktf.IResolvable;
  /**
  * Disable monitoring of intermediate containers created during image build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/container_builtin_rule#ignore_open_shift_build_pod_name ContainerBuiltinRule#ignore_open_shift_build_pod_name}
  */
  readonly ignoreOpenShiftBuildPodName: boolean | cdktf.IResolvable;
  /**
  * Disable monitoring of platform internal containers in the openshift-sdn namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/container_builtin_rule#ignore_open_shift_sdn_namespace ContainerBuiltinRule#ignore_open_shift_sdn_namespace}
  */
  readonly ignoreOpenShiftSdnNamespace: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/container_builtin_rule dynatrace_container_builtin_rule}
*/
export class ContainerBuiltinRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_container_builtin_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerBuiltinRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerBuiltinRule to import
  * @param importFromId The id of the existing ContainerBuiltinRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/container_builtin_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerBuiltinRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_container_builtin_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/container_builtin_rule dynatrace_container_builtin_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerBuiltinRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerBuiltinRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_container_builtin_rule',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._ignoreDockerPauseContainer = config.ignoreDockerPauseContainer;
    this._ignoreKubernetesPauseContainer = config.ignoreKubernetesPauseContainer;
    this._ignoreOpenShiftBuildPodName = config.ignoreOpenShiftBuildPodName;
    this._ignoreOpenShiftSdnNamespace = config.ignoreOpenShiftSdnNamespace;
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

  // ignore_docker_pause_container - computed: false, optional: false, required: true
  private _ignoreDockerPauseContainer?: boolean | cdktf.IResolvable; 
  public get ignoreDockerPauseContainer() {
    return this.getBooleanAttribute('ignore_docker_pause_container');
  }
  public set ignoreDockerPauseContainer(value: boolean | cdktf.IResolvable) {
    this._ignoreDockerPauseContainer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDockerPauseContainerInput() {
    return this._ignoreDockerPauseContainer;
  }

  // ignore_kubernetes_pause_container - computed: false, optional: false, required: true
  private _ignoreKubernetesPauseContainer?: boolean | cdktf.IResolvable; 
  public get ignoreKubernetesPauseContainer() {
    return this.getBooleanAttribute('ignore_kubernetes_pause_container');
  }
  public set ignoreKubernetesPauseContainer(value: boolean | cdktf.IResolvable) {
    this._ignoreKubernetesPauseContainer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreKubernetesPauseContainerInput() {
    return this._ignoreKubernetesPauseContainer;
  }

  // ignore_open_shift_build_pod_name - computed: false, optional: false, required: true
  private _ignoreOpenShiftBuildPodName?: boolean | cdktf.IResolvable; 
  public get ignoreOpenShiftBuildPodName() {
    return this.getBooleanAttribute('ignore_open_shift_build_pod_name');
  }
  public set ignoreOpenShiftBuildPodName(value: boolean | cdktf.IResolvable) {
    this._ignoreOpenShiftBuildPodName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOpenShiftBuildPodNameInput() {
    return this._ignoreOpenShiftBuildPodName;
  }

  // ignore_open_shift_sdn_namespace - computed: false, optional: false, required: true
  private _ignoreOpenShiftSdnNamespace?: boolean | cdktf.IResolvable; 
  public get ignoreOpenShiftSdnNamespace() {
    return this.getBooleanAttribute('ignore_open_shift_sdn_namespace');
  }
  public set ignoreOpenShiftSdnNamespace(value: boolean | cdktf.IResolvable) {
    this._ignoreOpenShiftSdnNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOpenShiftSdnNamespaceInput() {
    return this._ignoreOpenShiftSdnNamespace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ignore_docker_pause_container: cdktf.booleanToTerraform(this._ignoreDockerPauseContainer),
      ignore_kubernetes_pause_container: cdktf.booleanToTerraform(this._ignoreKubernetesPauseContainer),
      ignore_open_shift_build_pod_name: cdktf.booleanToTerraform(this._ignoreOpenShiftBuildPodName),
      ignore_open_shift_sdn_namespace: cdktf.booleanToTerraform(this._ignoreOpenShiftSdnNamespace),
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
      ignore_docker_pause_container: {
        value: cdktf.booleanToHclTerraform(this._ignoreDockerPauseContainer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_kubernetes_pause_container: {
        value: cdktf.booleanToHclTerraform(this._ignoreKubernetesPauseContainer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_open_shift_build_pod_name: {
        value: cdktf.booleanToHclTerraform(this._ignoreOpenShiftBuildPodName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_open_shift_sdn_namespace: {
        value: cdktf.booleanToHclTerraform(this._ignoreOpenShiftSdnNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
