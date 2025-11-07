// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemorybalancerrequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#id Memorybalancerrequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#name Memorybalancerrequest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#node_uuid Memorybalancerrequest#node_uuid}
  */
  readonly nodeUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#process_instance Memorybalancerrequest#process_instance}
  */
  readonly processInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#tenant_ref Memorybalancerrequest#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#timestamp Memorybalancerrequest#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#uuid Memorybalancerrequest#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#configpb_attributes Memorybalancerrequest#configpb_attributes}
  */
  readonly configpbAttributes?: MemorybalancerrequestConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * controller_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#controller_info Memorybalancerrequest#controller_info}
  */
  readonly controllerInfo?: MemorybalancerrequestControllerInfo[] | cdktf.IResolvable;
  /**
  * process_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#process_info Memorybalancerrequest#process_info}
  */
  readonly processInfo?: MemorybalancerrequestProcessInfo[] | cdktf.IResolvable;
}
export interface MemorybalancerrequestConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#version Memorybalancerrequest#version}
  */
  readonly version?: string;
}

export function memorybalancerrequestConfigpbAttributesToTerraform(struct?: MemorybalancerrequestConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function memorybalancerrequestConfigpbAttributesToHclTerraform(struct?: MemorybalancerrequestConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MemorybalancerrequestConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MemorybalancerrequestConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemorybalancerrequestConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class MemorybalancerrequestConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : MemorybalancerrequestConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): MemorybalancerrequestConfigpbAttributesOutputReference {
    return new MemorybalancerrequestConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemorybalancerrequestControllerInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#current_controller_mem_usage Memorybalancerrequest#current_controller_mem_usage}
  */
  readonly currentControllerMemUsage?: string;
}

export function memorybalancerrequestControllerInfoToTerraform(struct?: MemorybalancerrequestControllerInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_controller_mem_usage: cdktf.stringToTerraform(struct!.currentControllerMemUsage),
  }
}


export function memorybalancerrequestControllerInfoToHclTerraform(struct?: MemorybalancerrequestControllerInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_controller_mem_usage: {
      value: cdktf.stringToHclTerraform(struct!.currentControllerMemUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MemorybalancerrequestControllerInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MemorybalancerrequestControllerInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentControllerMemUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentControllerMemUsage = this._currentControllerMemUsage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemorybalancerrequestControllerInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentControllerMemUsage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentControllerMemUsage = value.currentControllerMemUsage;
    }
  }

  // current_controller_mem_usage - computed: true, optional: true, required: false
  private _currentControllerMemUsage?: string; 
  public get currentControllerMemUsage() {
    return this.getStringAttribute('current_controller_mem_usage');
  }
  public set currentControllerMemUsage(value: string) {
    this._currentControllerMemUsage = value;
  }
  public resetCurrentControllerMemUsage() {
    this._currentControllerMemUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentControllerMemUsageInput() {
    return this._currentControllerMemUsage;
  }
}

export class MemorybalancerrequestControllerInfoList extends cdktf.ComplexList {
  public internalValue? : MemorybalancerrequestControllerInfo[] | cdktf.IResolvable

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
  public get(index: number): MemorybalancerrequestControllerInfoOutputReference {
    return new MemorybalancerrequestControllerInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemorybalancerrequestProcessInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#current_process_id Memorybalancerrequest#current_process_id}
  */
  readonly currentProcessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#current_process_mem_usage Memorybalancerrequest#current_process_mem_usage}
  */
  readonly currentProcessMemUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#intimation_count Memorybalancerrequest#intimation_count}
  */
  readonly intimationCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#memory_limit Memorybalancerrequest#memory_limit}
  */
  readonly memoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#memory_trend_usage Memorybalancerrequest#memory_trend_usage}
  */
  readonly memoryTrendUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#process_mode Memorybalancerrequest#process_mode}
  */
  readonly processMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#threshold_percent Memorybalancerrequest#threshold_percent}
  */
  readonly thresholdPercent?: string;
}

export function memorybalancerrequestProcessInfoToTerraform(struct?: MemorybalancerrequestProcessInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_process_id: cdktf.stringToTerraform(struct!.currentProcessId),
    current_process_mem_usage: cdktf.stringToTerraform(struct!.currentProcessMemUsage),
    intimation_count: cdktf.stringToTerraform(struct!.intimationCount),
    memory_limit: cdktf.stringToTerraform(struct!.memoryLimit),
    memory_trend_usage: cdktf.stringToTerraform(struct!.memoryTrendUsage),
    process_mode: cdktf.stringToTerraform(struct!.processMode),
    threshold_percent: cdktf.stringToTerraform(struct!.thresholdPercent),
  }
}


export function memorybalancerrequestProcessInfoToHclTerraform(struct?: MemorybalancerrequestProcessInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_process_id: {
      value: cdktf.stringToHclTerraform(struct!.currentProcessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_process_mem_usage: {
      value: cdktf.stringToHclTerraform(struct!.currentProcessMemUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intimation_count: {
      value: cdktf.stringToHclTerraform(struct!.intimationCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_trend_usage: {
      value: cdktf.stringToHclTerraform(struct!.memoryTrendUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_mode: {
      value: cdktf.stringToHclTerraform(struct!.processMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_percent: {
      value: cdktf.stringToHclTerraform(struct!.thresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MemorybalancerrequestProcessInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MemorybalancerrequestProcessInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentProcessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentProcessId = this._currentProcessId;
    }
    if (this._currentProcessMemUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentProcessMemUsage = this._currentProcessMemUsage;
    }
    if (this._intimationCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.intimationCount = this._intimationCount;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._memoryTrendUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryTrendUsage = this._memoryTrendUsage;
    }
    if (this._processMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.processMode = this._processMode;
    }
    if (this._thresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPercent = this._thresholdPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemorybalancerrequestProcessInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentProcessId = undefined;
      this._currentProcessMemUsage = undefined;
      this._intimationCount = undefined;
      this._memoryLimit = undefined;
      this._memoryTrendUsage = undefined;
      this._processMode = undefined;
      this._thresholdPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentProcessId = value.currentProcessId;
      this._currentProcessMemUsage = value.currentProcessMemUsage;
      this._intimationCount = value.intimationCount;
      this._memoryLimit = value.memoryLimit;
      this._memoryTrendUsage = value.memoryTrendUsage;
      this._processMode = value.processMode;
      this._thresholdPercent = value.thresholdPercent;
    }
  }

  // current_process_id - computed: true, optional: true, required: false
  private _currentProcessId?: string; 
  public get currentProcessId() {
    return this.getStringAttribute('current_process_id');
  }
  public set currentProcessId(value: string) {
    this._currentProcessId = value;
  }
  public resetCurrentProcessId() {
    this._currentProcessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentProcessIdInput() {
    return this._currentProcessId;
  }

  // current_process_mem_usage - computed: true, optional: true, required: false
  private _currentProcessMemUsage?: string; 
  public get currentProcessMemUsage() {
    return this.getStringAttribute('current_process_mem_usage');
  }
  public set currentProcessMemUsage(value: string) {
    this._currentProcessMemUsage = value;
  }
  public resetCurrentProcessMemUsage() {
    this._currentProcessMemUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentProcessMemUsageInput() {
    return this._currentProcessMemUsage;
  }

  // intimation_count - computed: true, optional: true, required: false
  private _intimationCount?: string; 
  public get intimationCount() {
    return this.getStringAttribute('intimation_count');
  }
  public set intimationCount(value: string) {
    this._intimationCount = value;
  }
  public resetIntimationCount() {
    this._intimationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intimationCountInput() {
    return this._intimationCount;
  }

  // memory_limit - computed: true, optional: true, required: false
  private _memoryLimit?: string; 
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
  public set memoryLimit(value: string) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_trend_usage - computed: true, optional: true, required: false
  private _memoryTrendUsage?: string; 
  public get memoryTrendUsage() {
    return this.getStringAttribute('memory_trend_usage');
  }
  public set memoryTrendUsage(value: string) {
    this._memoryTrendUsage = value;
  }
  public resetMemoryTrendUsage() {
    this._memoryTrendUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryTrendUsageInput() {
    return this._memoryTrendUsage;
  }

  // process_mode - computed: true, optional: true, required: false
  private _processMode?: string; 
  public get processMode() {
    return this.getStringAttribute('process_mode');
  }
  public set processMode(value: string) {
    this._processMode = value;
  }
  public resetProcessMode() {
    this._processMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processModeInput() {
    return this._processMode;
  }

  // threshold_percent - computed: true, optional: true, required: false
  private _thresholdPercent?: string; 
  public get thresholdPercent() {
    return this.getStringAttribute('threshold_percent');
  }
  public set thresholdPercent(value: string) {
    this._thresholdPercent = value;
  }
  public resetThresholdPercent() {
    this._thresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentInput() {
    return this._thresholdPercent;
  }
}

export class MemorybalancerrequestProcessInfoList extends cdktf.ComplexList {
  public internalValue? : MemorybalancerrequestProcessInfo[] | cdktf.IResolvable

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
  public get(index: number): MemorybalancerrequestProcessInfoOutputReference {
    return new MemorybalancerrequestProcessInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest avi_memorybalancerrequest}
*/
export class Memorybalancerrequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_memorybalancerrequest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Memorybalancerrequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Memorybalancerrequest to import
  * @param importFromId The id of the existing Memorybalancerrequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Memorybalancerrequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_memorybalancerrequest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/memorybalancerrequest avi_memorybalancerrequest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemorybalancerrequestConfig
  */
  public constructor(scope: Construct, id: string, config: MemorybalancerrequestConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_memorybalancerrequest',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
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
    this._name = config.name;
    this._nodeUuid = config.nodeUuid;
    this._processInstance = config.processInstance;
    this._tenantRef = config.tenantRef;
    this._timestamp = config.timestamp;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._controllerInfo.internalValue = config.controllerInfo;
    this._processInfo.internalValue = config.processInfo;
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

  // node_uuid - computed: true, optional: true, required: false
  private _nodeUuid?: string; 
  public get nodeUuid() {
    return this.getStringAttribute('node_uuid');
  }
  public set nodeUuid(value: string) {
    this._nodeUuid = value;
  }
  public resetNodeUuid() {
    this._nodeUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeUuidInput() {
    return this._nodeUuid;
  }

  // process_instance - computed: true, optional: true, required: false
  private _processInstance?: string; 
  public get processInstance() {
    return this.getStringAttribute('process_instance');
  }
  public set processInstance(value: string) {
    this._processInstance = value;
  }
  public resetProcessInstance() {
    this._processInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInstanceInput() {
    return this._processInstance;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new MemorybalancerrequestConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: MemorybalancerrequestConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // controller_info - computed: false, optional: true, required: false
  private _controllerInfo = new MemorybalancerrequestControllerInfoList(this, "controller_info", true);
  public get controllerInfo() {
    return this._controllerInfo;
  }
  public putControllerInfo(value: MemorybalancerrequestControllerInfo[] | cdktf.IResolvable) {
    this._controllerInfo.internalValue = value;
  }
  public resetControllerInfo() {
    this._controllerInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInfoInput() {
    return this._controllerInfo.internalValue;
  }

  // process_info - computed: false, optional: true, required: false
  private _processInfo = new MemorybalancerrequestProcessInfoList(this, "process_info", true);
  public get processInfo() {
    return this._processInfo;
  }
  public putProcessInfo(value: MemorybalancerrequestProcessInfo[] | cdktf.IResolvable) {
    this._processInfo.internalValue = value;
  }
  public resetProcessInfo() {
    this._processInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInfoInput() {
    return this._processInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_uuid: cdktf.stringToTerraform(this._nodeUuid),
      process_instance: cdktf.stringToTerraform(this._processInstance),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      timestamp: cdktf.stringToTerraform(this._timestamp),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(memorybalancerrequestConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      controller_info: cdktf.listMapper(memorybalancerrequestControllerInfoToTerraform, true)(this._controllerInfo.internalValue),
      process_info: cdktf.listMapper(memorybalancerrequestProcessInfoToTerraform, true)(this._processInfo.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_uuid: {
        value: cdktf.stringToHclTerraform(this._nodeUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_instance: {
        value: cdktf.stringToHclTerraform(this._processInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp: {
        value: cdktf.stringToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(memorybalancerrequestConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MemorybalancerrequestConfigpbAttributesList",
      },
      controller_info: {
        value: cdktf.listMapperHcl(memorybalancerrequestControllerInfoToHclTerraform, true)(this._controllerInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MemorybalancerrequestControllerInfoList",
      },
      process_info: {
        value: cdktf.listMapperHcl(memorybalancerrequestProcessInfoToHclTerraform, true)(this._processInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MemorybalancerrequestProcessInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
