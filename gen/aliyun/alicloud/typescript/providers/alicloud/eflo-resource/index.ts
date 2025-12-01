// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfloResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#cluster_desc EfloResource#cluster_desc}
  */
  readonly clusterDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#cluster_id EfloResource#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#cluster_name EfloResource#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#id EfloResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * machine_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#machine_types EfloResource#machine_types}
  */
  readonly machineTypes: EfloResourceMachineTypes;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#timeouts EfloResource#timeouts}
  */
  readonly timeouts?: EfloResourceTimeouts;
  /**
  * user_access_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#user_access_param EfloResource#user_access_param}
  */
  readonly userAccessParam: EfloResourceUserAccessParam;
}
export interface EfloResourceMachineTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#bond_num EfloResource#bond_num}
  */
  readonly bondNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#cpu_info EfloResource#cpu_info}
  */
  readonly cpuInfo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#disk_info EfloResource#disk_info}
  */
  readonly diskInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#gpu_info EfloResource#gpu_info}
  */
  readonly gpuInfo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#memory_info EfloResource#memory_info}
  */
  readonly memoryInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#name EfloResource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#network_info EfloResource#network_info}
  */
  readonly networkInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#network_mode EfloResource#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#node_count EfloResource#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#type EfloResource#type}
  */
  readonly type?: string;
}

export function efloResourceMachineTypesToTerraform(struct?: EfloResourceMachineTypesOutputReference | EfloResourceMachineTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_num: cdktf.numberToTerraform(struct!.bondNum),
    cpu_info: cdktf.stringToTerraform(struct!.cpuInfo),
    disk_info: cdktf.stringToTerraform(struct!.diskInfo),
    gpu_info: cdktf.stringToTerraform(struct!.gpuInfo),
    memory_info: cdktf.stringToTerraform(struct!.memoryInfo),
    name: cdktf.stringToTerraform(struct!.name),
    network_info: cdktf.stringToTerraform(struct!.networkInfo),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function efloResourceMachineTypesToHclTerraform(struct?: EfloResourceMachineTypesOutputReference | EfloResourceMachineTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_num: {
      value: cdktf.numberToHclTerraform(struct!.bondNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_info: {
      value: cdktf.stringToHclTerraform(struct!.cpuInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_info: {
      value: cdktf.stringToHclTerraform(struct!.diskInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_info: {
      value: cdktf.stringToHclTerraform(struct!.gpuInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_info: {
      value: cdktf.stringToHclTerraform(struct!.memoryInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_info: {
      value: cdktf.stringToHclTerraform(struct!.networkInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloResourceMachineTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfloResourceMachineTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondNum = this._bondNum;
    }
    if (this._cpuInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuInfo = this._cpuInfo;
    }
    if (this._diskInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskInfo = this._diskInfo;
    }
    if (this._gpuInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuInfo = this._gpuInfo;
    }
    if (this._memoryInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInfo = this._memoryInfo;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInfo = this._networkInfo;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloResourceMachineTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bondNum = undefined;
      this._cpuInfo = undefined;
      this._diskInfo = undefined;
      this._gpuInfo = undefined;
      this._memoryInfo = undefined;
      this._name = undefined;
      this._networkInfo = undefined;
      this._networkMode = undefined;
      this._nodeCount = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bondNum = value.bondNum;
      this._cpuInfo = value.cpuInfo;
      this._diskInfo = value.diskInfo;
      this._gpuInfo = value.gpuInfo;
      this._memoryInfo = value.memoryInfo;
      this._name = value.name;
      this._networkInfo = value.networkInfo;
      this._networkMode = value.networkMode;
      this._nodeCount = value.nodeCount;
      this._type = value.type;
    }
  }

  // bond_num - computed: false, optional: true, required: false
  private _bondNum?: number; 
  public get bondNum() {
    return this.getNumberAttribute('bond_num');
  }
  public set bondNum(value: number) {
    this._bondNum = value;
  }
  public resetBondNum() {
    this._bondNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondNumInput() {
    return this._bondNum;
  }

  // cpu_info - computed: false, optional: false, required: true
  private _cpuInfo?: string; 
  public get cpuInfo() {
    return this.getStringAttribute('cpu_info');
  }
  public set cpuInfo(value: string) {
    this._cpuInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInfoInput() {
    return this._cpuInfo;
  }

  // disk_info - computed: false, optional: true, required: false
  private _diskInfo?: string; 
  public get diskInfo() {
    return this.getStringAttribute('disk_info');
  }
  public set diskInfo(value: string) {
    this._diskInfo = value;
  }
  public resetDiskInfo() {
    this._diskInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInfoInput() {
    return this._diskInfo;
  }

  // gpu_info - computed: false, optional: false, required: true
  private _gpuInfo?: string; 
  public get gpuInfo() {
    return this.getStringAttribute('gpu_info');
  }
  public set gpuInfo(value: string) {
    this._gpuInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInfoInput() {
    return this._gpuInfo;
  }

  // memory_info - computed: false, optional: true, required: false
  private _memoryInfo?: string; 
  public get memoryInfo() {
    return this.getStringAttribute('memory_info');
  }
  public set memoryInfo(value: string) {
    this._memoryInfo = value;
  }
  public resetMemoryInfo() {
    this._memoryInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInfoInput() {
    return this._memoryInfo;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_info - computed: false, optional: true, required: false
  private _networkInfo?: string; 
  public get networkInfo() {
    return this.getStringAttribute('network_info');
  }
  public set networkInfo(value: string) {
    this._networkInfo = value;
  }
  public resetNetworkInfo() {
    this._networkInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo;
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface EfloResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#create EfloResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#update EfloResource#update}
  */
  readonly update?: string;
}

export function efloResourceTimeoutsToTerraform(struct?: EfloResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function efloResourceTimeoutsToHclTerraform(struct?: EfloResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EfloResourceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloResourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface EfloResourceUserAccessParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#access_id EfloResource#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#access_key EfloResource#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#endpoint EfloResource#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#workspace_id EfloResource#workspace_id}
  */
  readonly workspaceId: string;
}

export function efloResourceUserAccessParamToTerraform(struct?: EfloResourceUserAccessParamOutputReference | EfloResourceUserAccessParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function efloResourceUserAccessParamToHclTerraform(struct?: EfloResourceUserAccessParamOutputReference | EfloResourceUserAccessParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloResourceUserAccessParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfloResourceUserAccessParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloResourceUserAccessParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessId = undefined;
      this._accessKey = undefined;
      this._endpoint = undefined;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessId = value.accessId;
      this._accessKey = value.accessKey;
      this._endpoint = value.endpoint;
      this._workspaceId = value.workspaceId;
    }
  }

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource alicloud_eflo_resource}
*/
export class EfloResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eflo_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EfloResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EfloResource to import
  * @param importFromId The id of the existing EfloResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EfloResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eflo_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_resource alicloud_eflo_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfloResourceConfig
  */
  public constructor(scope: Construct, id: string, config: EfloResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eflo_resource',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterDesc = config.clusterDesc;
    this._clusterId = config.clusterId;
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._machineTypes.internalValue = config.machineTypes;
    this._timeouts.internalValue = config.timeouts;
    this._userAccessParam.internalValue = config.userAccessParam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_desc - computed: false, optional: true, required: false
  private _clusterDesc?: string; 
  public get clusterDesc() {
    return this.getStringAttribute('cluster_desc');
  }
  public set clusterDesc(value: string) {
    this._clusterDesc = value;
  }
  public resetClusterDesc() {
    this._clusterDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDescInput() {
    return this._clusterDesc;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // machine_types - computed: false, optional: false, required: true
  private _machineTypes = new EfloResourceMachineTypesOutputReference(this, "machine_types");
  public get machineTypes() {
    return this._machineTypes;
  }
  public putMachineTypes(value: EfloResourceMachineTypes) {
    this._machineTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypesInput() {
    return this._machineTypes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EfloResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EfloResourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_access_param - computed: false, optional: false, required: true
  private _userAccessParam = new EfloResourceUserAccessParamOutputReference(this, "user_access_param");
  public get userAccessParam() {
    return this._userAccessParam;
  }
  public putUserAccessParam(value: EfloResourceUserAccessParam) {
    this._userAccessParam.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessParamInput() {
    return this._userAccessParam.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_desc: cdktf.stringToTerraform(this._clusterDesc),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      machine_types: efloResourceMachineTypesToTerraform(this._machineTypes.internalValue),
      timeouts: efloResourceTimeoutsToTerraform(this._timeouts.internalValue),
      user_access_param: efloResourceUserAccessParamToTerraform(this._userAccessParam.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_desc: {
        value: cdktf.stringToHclTerraform(this._clusterDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_types: {
        value: efloResourceMachineTypesToHclTerraform(this._machineTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EfloResourceMachineTypesList",
      },
      timeouts: {
        value: efloResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EfloResourceTimeouts",
      },
      user_access_param: {
        value: efloResourceUserAccessParamToHclTerraform(this._userAccessParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EfloResourceUserAccessParamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
