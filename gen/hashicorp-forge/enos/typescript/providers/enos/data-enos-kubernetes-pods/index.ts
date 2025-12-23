// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnosKubernetesPodsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the cluster context to connect to. The context must exist in cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods#context_name DataEnosKubernetesPods#context_name}
  */
  readonly contextName: string;
  /**
  * The number of pods that are expected to be found matching the query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods#expected_pod_count DataEnosKubernetesPods#expected_pod_count}
  */
  readonly expectedPodCount?: number;
  /**
  * Field selectors to use when querying pods, see [k8s docs](https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods#field_selectors DataEnosKubernetesPods#field_selectors}
  */
  readonly fieldSelectors?: string[];
  /**
  * The base64 encoded kubeconfig for the cluster to connect to as a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods#kubeconfig_base64 DataEnosKubernetesPods#kubeconfig_base64}
  */
  readonly kubeconfigBase64: string;
  /**
  * Label selectors to use when querying pods, see [k8s docs](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods#label_selectors DataEnosKubernetesPods#label_selectors}
  */
  readonly labelSelectors?: string[];
  /**
  * The namespace to query the pods in. If not set we'll query all namespaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods#namespace DataEnosKubernetesPods#namespace}
  */
  readonly namespace?: string;
  /**
  * The amount of time to wait for the pods found in the query to be in the 'Running' state. If not provided a default of 1m will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods#wait_timeout DataEnosKubernetesPods#wait_timeout}
  */
  readonly waitTimeout?: string;
}
export interface DataEnosKubernetesPodsPods {
}

export function dataEnosKubernetesPodsPodsToTerraform(struct?: DataEnosKubernetesPodsPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEnosKubernetesPodsPodsToHclTerraform(struct?: DataEnosKubernetesPodsPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEnosKubernetesPodsPodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEnosKubernetesPodsPods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEnosKubernetesPodsPods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  public get containers() {
    return this.getListAttribute('containers');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataEnosKubernetesPodsPodsList extends cdktf.ComplexList {

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
  public get(index: number): DataEnosKubernetesPodsPodsOutputReference {
    return new DataEnosKubernetesPodsPodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEnosKubernetesPodsTransports {
}

export function dataEnosKubernetesPodsTransportsToTerraform(struct?: DataEnosKubernetesPodsTransports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEnosKubernetesPodsTransportsToHclTerraform(struct?: DataEnosKubernetesPodsTransports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEnosKubernetesPodsTransportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEnosKubernetesPodsTransports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEnosKubernetesPodsTransports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // context_name - computed: true, optional: false, required: false
  public get contextName() {
    return this.getStringAttribute('context_name');
  }

  // kubeconfig_base64 - computed: true, optional: false, required: false
  public get kubeconfigBase64() {
    return this.getStringAttribute('kubeconfig_base64');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // pod - computed: true, optional: false, required: false
  public get pod() {
    return this.getStringAttribute('pod');
  }
}

export class DataEnosKubernetesPodsTransportsList extends cdktf.ComplexList {

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
  public get(index: number): DataEnosKubernetesPodsTransportsOutputReference {
    return new DataEnosKubernetesPodsTransportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods enos_kubernetes_pods}
*/
export class DataEnosKubernetesPods extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_kubernetes_pods";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnosKubernetesPods resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnosKubernetesPods to import
  * @param importFromId The id of the existing DataEnosKubernetesPods that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnosKubernetesPods to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_kubernetes_pods", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/data-sources/kubernetes_pods enos_kubernetes_pods} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnosKubernetesPodsConfig
  */
  public constructor(scope: Construct, id: string, config: DataEnosKubernetesPodsConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_kubernetes_pods',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contextName = config.contextName;
    this._expectedPodCount = config.expectedPodCount;
    this._fieldSelectors = config.fieldSelectors;
    this._kubeconfigBase64 = config.kubeconfigBase64;
    this._labelSelectors = config.labelSelectors;
    this._namespace = config.namespace;
    this._waitTimeout = config.waitTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context_name - computed: false, optional: false, required: true
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // expected_pod_count - computed: false, optional: true, required: false
  private _expectedPodCount?: number; 
  public get expectedPodCount() {
    return this.getNumberAttribute('expected_pod_count');
  }
  public set expectedPodCount(value: number) {
    this._expectedPodCount = value;
  }
  public resetExpectedPodCount() {
    this._expectedPodCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedPodCountInput() {
    return this._expectedPodCount;
  }

  // field_selectors - computed: false, optional: true, required: false
  private _fieldSelectors?: string[]; 
  public get fieldSelectors() {
    return this.getListAttribute('field_selectors');
  }
  public set fieldSelectors(value: string[]) {
    this._fieldSelectors = value;
  }
  public resetFieldSelectors() {
    this._fieldSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorsInput() {
    return this._fieldSelectors;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubeconfig_base64 - computed: false, optional: false, required: true
  private _kubeconfigBase64?: string; 
  public get kubeconfigBase64() {
    return this.getStringAttribute('kubeconfig_base64');
  }
  public set kubeconfigBase64(value: string) {
    this._kubeconfigBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigBase64Input() {
    return this._kubeconfigBase64;
  }

  // label_selectors - computed: false, optional: true, required: false
  private _labelSelectors?: string[]; 
  public get labelSelectors() {
    return this.getListAttribute('label_selectors');
  }
  public set labelSelectors(value: string[]) {
    this._labelSelectors = value;
  }
  public resetLabelSelectors() {
    this._labelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorsInput() {
    return this._labelSelectors;
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

  // pods - computed: true, optional: false, required: false
  private _pods = new DataEnosKubernetesPodsPodsList(this, "pods", false);
  public get pods() {
    return this._pods;
  }

  // transports - computed: true, optional: false, required: false
  private _transports = new DataEnosKubernetesPodsTransportsList(this, "transports", false);
  public get transports() {
    return this._transports;
  }

  // wait_timeout - computed: false, optional: true, required: false
  private _waitTimeout?: string; 
  public get waitTimeout() {
    return this.getStringAttribute('wait_timeout');
  }
  public set waitTimeout(value: string) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context_name: cdktf.stringToTerraform(this._contextName),
      expected_pod_count: cdktf.numberToTerraform(this._expectedPodCount),
      field_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldSelectors),
      kubeconfig_base64: cdktf.stringToTerraform(this._kubeconfigBase64),
      label_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labelSelectors),
      namespace: cdktf.stringToTerraform(this._namespace),
      wait_timeout: cdktf.stringToTerraform(this._waitTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context_name: {
        value: cdktf.stringToHclTerraform(this._contextName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_pod_count: {
        value: cdktf.numberToHclTerraform(this._expectedPodCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      field_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldSelectors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      kubeconfig_base64: {
        value: cdktf.stringToHclTerraform(this._kubeconfigBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labelSelectors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_timeout: {
        value: cdktf.stringToHclTerraform(this._waitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
