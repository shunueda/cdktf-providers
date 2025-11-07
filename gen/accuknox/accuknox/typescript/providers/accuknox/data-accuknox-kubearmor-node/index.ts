// https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAccuknoxKubearmorNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_node#id DataAccuknoxKubearmorNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAccuknoxKubearmorNodeNodeDataContainerDefaultPosture {
}

export function dataAccuknoxKubearmorNodeNodeDataContainerDefaultPostureToTerraform(struct?: DataAccuknoxKubearmorNodeNodeDataContainerDefaultPosture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorNodeNodeDataContainerDefaultPostureToHclTerraform(struct?: DataAccuknoxKubearmorNodeNodeDataContainerDefaultPosture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorNodeNodeDataContainerDefaultPostureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorNodeNodeDataContainerDefaultPosture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorNodeNodeDataContainerDefaultPosture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getStringAttribute('capabilities');
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }
}

export class DataAccuknoxKubearmorNodeNodeDataContainerDefaultPostureList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorNodeNodeDataContainerDefaultPostureOutputReference {
    return new DataAccuknoxKubearmorNodeNodeDataContainerDefaultPostureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorNodeNodeDataHostDefaultPosture {
}

export function dataAccuknoxKubearmorNodeNodeDataHostDefaultPostureToTerraform(struct?: DataAccuknoxKubearmorNodeNodeDataHostDefaultPosture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorNodeNodeDataHostDefaultPostureToHclTerraform(struct?: DataAccuknoxKubearmorNodeNodeDataHostDefaultPosture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorNodeNodeDataHostDefaultPostureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorNodeNodeDataHostDefaultPosture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorNodeNodeDataHostDefaultPosture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getStringAttribute('capabilities');
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }
}

export class DataAccuknoxKubearmorNodeNodeDataHostDefaultPostureList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorNodeNodeDataHostDefaultPostureOutputReference {
    return new DataAccuknoxKubearmorNodeNodeDataHostDefaultPostureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorNodeNodeData {
}

export function dataAccuknoxKubearmorNodeNodeDataToTerraform(struct?: DataAccuknoxKubearmorNodeNodeData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorNodeNodeDataToHclTerraform(struct?: DataAccuknoxKubearmorNodeNodeData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorNodeNodeDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorNodeNodeData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorNodeNodeData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_lsm - computed: true, optional: false, required: false
  public get activeLsm() {
    return this.getStringAttribute('active_lsm');
  }

  // container_default_posture - computed: true, optional: false, required: false
  private _containerDefaultPosture = new DataAccuknoxKubearmorNodeNodeDataContainerDefaultPostureList(this, "container_default_posture", false);
  public get containerDefaultPosture() {
    return this._containerDefaultPosture;
  }

  // container_runtime - computed: true, optional: false, required: false
  public get containerRuntime() {
    return this.getStringAttribute('container_runtime');
  }

  // container_security - computed: true, optional: false, required: false
  public get containerSecurity() {
    return this.getBooleanAttribute('container_security');
  }

  // host_default_posture - computed: true, optional: false, required: false
  private _hostDefaultPosture = new DataAccuknoxKubearmorNodeNodeDataHostDefaultPostureList(this, "host_default_posture", false);
  public get hostDefaultPosture() {
    return this._hostDefaultPosture;
  }

  // host_security - computed: true, optional: false, required: false
  public get hostSecurity() {
    return this.getBooleanAttribute('host_security');
  }

  // host_visibility - computed: true, optional: false, required: false
  public get hostVisibility() {
    return this.getStringAttribute('host_visibility');
  }

  // kernel_version - computed: true, optional: false, required: false
  public get kernelVersion() {
    return this.getStringAttribute('kernel_version');
  }

  // kubelet_version - computed: true, optional: false, required: false
  public get kubeletVersion() {
    return this.getStringAttribute('kubelet_version');
  }

  // os_image - computed: true, optional: false, required: false
  public get osImage() {
    return this.getStringAttribute('os_image');
  }
}

export class DataAccuknoxKubearmorNodeNodeDataList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorNodeNodeDataOutputReference {
    return new DataAccuknoxKubearmorNodeNodeDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_node accuknox_kubearmor_node}
*/
export class DataAccuknoxKubearmorNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "accuknox_kubearmor_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAccuknoxKubearmorNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAccuknoxKubearmorNode to import
  * @param importFromId The id of the existing DataAccuknoxKubearmorNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAccuknoxKubearmorNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "accuknox_kubearmor_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_node accuknox_kubearmor_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAccuknoxKubearmorNodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAccuknoxKubearmorNodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'accuknox_kubearmor_node',
      terraformGeneratorMetadata: {
        providerName: 'accuknox',
        providerVersion: '1.0.0'
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

  // node_data - computed: true, optional: false, required: false
  private _nodeData = new DataAccuknoxKubearmorNodeNodeDataList(this, "node_data", false);
  public get nodeData() {
    return this._nodeData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
