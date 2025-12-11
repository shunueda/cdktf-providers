// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/tcm_mesh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTcmMeshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/tcm_mesh#id DataTencentcloudTcmMesh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mesh name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/tcm_mesh#mesh_cluster DataTencentcloudTcmMesh#mesh_cluster}
  */
  readonly meshCluster?: string[];
  /**
  * Mesh instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/tcm_mesh#mesh_id DataTencentcloudTcmMesh#mesh_id}
  */
  readonly meshId?: string[];
  /**
  * Display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/tcm_mesh#mesh_name DataTencentcloudTcmMesh#mesh_name}
  */
  readonly meshName?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/tcm_mesh#result_output_file DataTencentcloudTcmMesh#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/tcm_mesh#tags DataTencentcloudTcmMesh#tags}
  */
  readonly tags?: string[];
}
export interface DataTencentcloudTcmMeshMeshListConfigIstioSmartDns {
}

export function dataTencentcloudTcmMeshMeshListConfigIstioSmartDnsToTerraform(struct?: DataTencentcloudTcmMeshMeshListConfigIstioSmartDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcmMeshMeshListConfigIstioSmartDnsToHclTerraform(struct?: DataTencentcloudTcmMeshMeshListConfigIstioSmartDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcmMeshMeshListConfigIstioSmartDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmMeshMeshListConfigIstioSmartDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmMeshMeshListConfigIstioSmartDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // istio_meta_dns_auto_allocate - computed: true, optional: false, required: false
  public get istioMetaDnsAutoAllocate() {
    return this.getBooleanAttribute('istio_meta_dns_auto_allocate');
  }

  // istio_meta_dns_capture - computed: true, optional: false, required: false
  public get istioMetaDnsCapture() {
    return this.getBooleanAttribute('istio_meta_dns_capture');
  }
}

export class DataTencentcloudTcmMeshMeshListConfigIstioSmartDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcmMeshMeshListConfigIstioSmartDnsOutputReference {
    return new DataTencentcloudTcmMeshMeshListConfigIstioSmartDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTcmMeshMeshListConfigIstio {
}

export function dataTencentcloudTcmMeshMeshListConfigIstioToTerraform(struct?: DataTencentcloudTcmMeshMeshListConfigIstio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcmMeshMeshListConfigIstioToHclTerraform(struct?: DataTencentcloudTcmMeshMeshListConfigIstio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcmMeshMeshListConfigIstioOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmMeshMeshListConfigIstio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmMeshMeshListConfigIstio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_http_retry - computed: true, optional: false, required: false
  public get disableHttpRetry() {
    return this.getBooleanAttribute('disable_http_retry');
  }

  // disable_policy_checks - computed: true, optional: false, required: false
  public get disablePolicyChecks() {
    return this.getBooleanAttribute('disable_policy_checks');
  }

  // enable_pilot_http - computed: true, optional: false, required: false
  public get enablePilotHttp() {
    return this.getBooleanAttribute('enable_pilot_http');
  }

  // outbound_traffic_policy - computed: true, optional: false, required: false
  public get outboundTrafficPolicy() {
    return this.getStringAttribute('outbound_traffic_policy');
  }

  // smart_dns - computed: true, optional: false, required: false
  private _smartDns = new DataTencentcloudTcmMeshMeshListConfigIstioSmartDnsList(this, "smart_dns", false);
  public get smartDns() {
    return this._smartDns;
  }
}

export class DataTencentcloudTcmMeshMeshListConfigIstioList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcmMeshMeshListConfigIstioOutputReference {
    return new DataTencentcloudTcmMeshMeshListConfigIstioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTcmMeshMeshListConfig {
}

export function dataTencentcloudTcmMeshMeshListConfigToTerraform(struct?: DataTencentcloudTcmMeshMeshListConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcmMeshMeshListConfigToHclTerraform(struct?: DataTencentcloudTcmMeshMeshListConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcmMeshMeshListConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmMeshMeshListConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmMeshMeshListConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // istio - computed: true, optional: false, required: false
  private _istio = new DataTencentcloudTcmMeshMeshListConfigIstioList(this, "istio", false);
  public get istio() {
    return this._istio;
  }
}

export class DataTencentcloudTcmMeshMeshListConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcmMeshMeshListConfigOutputReference {
    return new DataTencentcloudTcmMeshMeshListConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTcmMeshMeshListTagListStruct {
}

export function dataTencentcloudTcmMeshMeshListTagListStructToTerraform(struct?: DataTencentcloudTcmMeshMeshListTagListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcmMeshMeshListTagListStructToHclTerraform(struct?: DataTencentcloudTcmMeshMeshListTagListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcmMeshMeshListTagListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmMeshMeshListTagListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmMeshMeshListTagListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // passthrough - computed: true, optional: false, required: false
  public get passthrough() {
    return this.getBooleanAttribute('passthrough');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudTcmMeshMeshListTagListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcmMeshMeshListTagListStructOutputReference {
    return new DataTencentcloudTcmMeshMeshListTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTcmMeshMeshListStruct {
}

export function dataTencentcloudTcmMeshMeshListStructToTerraform(struct?: DataTencentcloudTcmMeshMeshListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcmMeshMeshListStructToHclTerraform(struct?: DataTencentcloudTcmMeshMeshListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcmMeshMeshListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmMeshMeshListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmMeshMeshListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataTencentcloudTcmMeshMeshListConfigList(this, "config", false);
  public get config() {
    return this._config;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // mesh_id - computed: true, optional: false, required: false
  public get meshId() {
    return this.getStringAttribute('mesh_id');
  }

  // tag_list - computed: true, optional: false, required: false
  private _tagList = new DataTencentcloudTcmMeshMeshListTagListStructList(this, "tag_list", false);
  public get tagList() {
    return this._tagList;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTencentcloudTcmMeshMeshListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcmMeshMeshListStructOutputReference {
    return new DataTencentcloudTcmMeshMeshListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/tcm_mesh tencentcloud_tcm_mesh}
*/
export class DataTencentcloudTcmMesh extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcm_mesh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTcmMesh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTcmMesh to import
  * @param importFromId The id of the existing DataTencentcloudTcmMesh that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/tcm_mesh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTcmMesh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcm_mesh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/tcm_mesh tencentcloud_tcm_mesh} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTcmMeshConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTcmMeshConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcm_mesh',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._meshCluster = config.meshCluster;
    this._meshId = config.meshId;
    this._meshName = config.meshName;
    this._resultOutputFile = config.resultOutputFile;
    this._tags = config.tags;
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

  // mesh_cluster - computed: false, optional: true, required: false
  private _meshCluster?: string[]; 
  public get meshCluster() {
    return cdktf.Fn.tolist(this.getListAttribute('mesh_cluster'));
  }
  public set meshCluster(value: string[]) {
    this._meshCluster = value;
  }
  public resetMeshCluster() {
    this._meshCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshClusterInput() {
    return this._meshCluster;
  }

  // mesh_id - computed: false, optional: true, required: false
  private _meshId?: string[]; 
  public get meshId() {
    return cdktf.Fn.tolist(this.getListAttribute('mesh_id'));
  }
  public set meshId(value: string[]) {
    this._meshId = value;
  }
  public resetMeshId() {
    this._meshId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshIdInput() {
    return this._meshId;
  }

  // mesh_list - computed: true, optional: false, required: false
  private _meshList = new DataTencentcloudTcmMeshMeshListStructList(this, "mesh_list", false);
  public get meshList() {
    return this._meshList;
  }

  // mesh_name - computed: false, optional: true, required: false
  private _meshName?: string[]; 
  public get meshName() {
    return cdktf.Fn.tolist(this.getListAttribute('mesh_name'));
  }
  public set meshName(value: string[]) {
    this._meshName = value;
  }
  public resetMeshName() {
    this._meshName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mesh_cluster: cdktf.listMapper(cdktf.stringToTerraform, false)(this._meshCluster),
      mesh_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._meshId),
      mesh_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._meshName),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
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
      mesh_cluster: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._meshCluster),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mesh_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._meshId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mesh_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._meshName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
