// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpgradeprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#id Upgradeprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#uuid Upgradeprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#controller Upgradeprofile#controller}
  */
  readonly controller?: UpgradeprofileController[] | cdktf.IResolvable;
  /**
  * dry_run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#dry_run Upgradeprofile#dry_run}
  */
  readonly dryRun?: UpgradeprofileDryRun[] | cdktf.IResolvable;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#image Upgradeprofile#image}
  */
  readonly image?: UpgradeprofileImage[] | cdktf.IResolvable;
  /**
  * pre_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#pre_checks Upgradeprofile#pre_checks}
  */
  readonly preChecks?: UpgradeprofilePreChecks[] | cdktf.IResolvable;
  /**
  * service_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#service_engine Upgradeprofile#service_engine}
  */
  readonly serviceEngine?: UpgradeprofileServiceEngine[] | cdktf.IResolvable;
}
export interface UpgradeprofileController {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#task_base_timeout Upgradeprofile#task_base_timeout}
  */
  readonly taskBaseTimeout?: string;
}

export function upgradeprofileControllerToTerraform(struct?: UpgradeprofileController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task_base_timeout: cdktf.stringToTerraform(struct!.taskBaseTimeout),
  }
}


export function upgradeprofileControllerToHclTerraform(struct?: UpgradeprofileController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    task_base_timeout: {
      value: cdktf.stringToHclTerraform(struct!.taskBaseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeprofileControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeprofileController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taskBaseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskBaseTimeout = this._taskBaseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeprofileController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taskBaseTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taskBaseTimeout = value.taskBaseTimeout;
    }
  }

  // task_base_timeout - computed: false, optional: true, required: false
  private _taskBaseTimeout?: string; 
  public get taskBaseTimeout() {
    return this.getStringAttribute('task_base_timeout');
  }
  public set taskBaseTimeout(value: string) {
    this._taskBaseTimeout = value;
  }
  public resetTaskBaseTimeout() {
    this._taskBaseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskBaseTimeoutInput() {
    return this._taskBaseTimeout;
  }
}

export class UpgradeprofileControllerList extends cdktf.ComplexList {
  public internalValue? : UpgradeprofileController[] | cdktf.IResolvable

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
  public get(index: number): UpgradeprofileControllerOutputReference {
    return new UpgradeprofileControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradeprofileDryRun {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#allow_single_node Upgradeprofile#allow_single_node}
  */
  readonly allowSingleNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#memory Upgradeprofile#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#num_cpu Upgradeprofile#num_cpu}
  */
  readonly numCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#preferred_worker Upgradeprofile#preferred_worker}
  */
  readonly preferredWorker?: string;
}

export function upgradeprofileDryRunToTerraform(struct?: UpgradeprofileDryRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_single_node: cdktf.stringToTerraform(struct!.allowSingleNode),
    memory: cdktf.stringToTerraform(struct!.memory),
    num_cpu: cdktf.stringToTerraform(struct!.numCpu),
    preferred_worker: cdktf.stringToTerraform(struct!.preferredWorker),
  }
}


export function upgradeprofileDryRunToHclTerraform(struct?: UpgradeprofileDryRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_single_node: {
      value: cdktf.stringToHclTerraform(struct!.allowSingleNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_cpu: {
      value: cdktf.stringToHclTerraform(struct!.numCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_worker: {
      value: cdktf.stringToHclTerraform(struct!.preferredWorker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeprofileDryRunOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeprofileDryRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSingleNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSingleNode = this._allowSingleNode;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._numCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCpu = this._numCpu;
    }
    if (this._preferredWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredWorker = this._preferredWorker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeprofileDryRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowSingleNode = undefined;
      this._memory = undefined;
      this._numCpu = undefined;
      this._preferredWorker = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowSingleNode = value.allowSingleNode;
      this._memory = value.memory;
      this._numCpu = value.numCpu;
      this._preferredWorker = value.preferredWorker;
    }
  }

  // allow_single_node - computed: false, optional: true, required: false
  private _allowSingleNode?: string; 
  public get allowSingleNode() {
    return this.getStringAttribute('allow_single_node');
  }
  public set allowSingleNode(value: string) {
    this._allowSingleNode = value;
  }
  public resetAllowSingleNode() {
    this._allowSingleNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSingleNodeInput() {
    return this._allowSingleNode;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // num_cpu - computed: false, optional: true, required: false
  private _numCpu?: string; 
  public get numCpu() {
    return this.getStringAttribute('num_cpu');
  }
  public set numCpu(value: string) {
    this._numCpu = value;
  }
  public resetNumCpu() {
    this._numCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCpuInput() {
    return this._numCpu;
  }

  // preferred_worker - computed: true, optional: true, required: false
  private _preferredWorker?: string; 
  public get preferredWorker() {
    return this.getStringAttribute('preferred_worker');
  }
  public set preferredWorker(value: string) {
    this._preferredWorker = value;
  }
  public resetPreferredWorker() {
    this._preferredWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredWorkerInput() {
    return this._preferredWorker;
  }
}

export class UpgradeprofileDryRunList extends cdktf.ComplexList {
  public internalValue? : UpgradeprofileDryRun[] | cdktf.IResolvable

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
  public get(index: number): UpgradeprofileDryRunOutputReference {
    return new UpgradeprofileDryRunOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradeprofileImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#image_replication_timeout Upgradeprofile#image_replication_timeout}
  */
  readonly imageReplicationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#max_image_size Upgradeprofile#max_image_size}
  */
  readonly maxImageSize?: string;
}

export function upgradeprofileImageToTerraform(struct?: UpgradeprofileImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_replication_timeout: cdktf.stringToTerraform(struct!.imageReplicationTimeout),
    max_image_size: cdktf.stringToTerraform(struct!.maxImageSize),
  }
}


export function upgradeprofileImageToHclTerraform(struct?: UpgradeprofileImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_replication_timeout: {
      value: cdktf.stringToHclTerraform(struct!.imageReplicationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_image_size: {
      value: cdktf.stringToHclTerraform(struct!.maxImageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeprofileImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeprofileImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageReplicationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageReplicationTimeout = this._imageReplicationTimeout;
    }
    if (this._maxImageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxImageSize = this._maxImageSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeprofileImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageReplicationTimeout = undefined;
      this._maxImageSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageReplicationTimeout = value.imageReplicationTimeout;
      this._maxImageSize = value.maxImageSize;
    }
  }

  // image_replication_timeout - computed: false, optional: true, required: false
  private _imageReplicationTimeout?: string; 
  public get imageReplicationTimeout() {
    return this.getStringAttribute('image_replication_timeout');
  }
  public set imageReplicationTimeout(value: string) {
    this._imageReplicationTimeout = value;
  }
  public resetImageReplicationTimeout() {
    this._imageReplicationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReplicationTimeoutInput() {
    return this._imageReplicationTimeout;
  }

  // max_image_size - computed: false, optional: true, required: false
  private _maxImageSize?: string; 
  public get maxImageSize() {
    return this.getStringAttribute('max_image_size');
  }
  public set maxImageSize(value: string) {
    this._maxImageSize = value;
  }
  public resetMaxImageSize() {
    this._maxImageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxImageSizeInput() {
    return this._maxImageSize;
  }
}

export class UpgradeprofileImageList extends cdktf.ComplexList {
  public internalValue? : UpgradeprofileImage[] | cdktf.IResolvable

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
  public get(index: number): UpgradeprofileImageOutputReference {
    return new UpgradeprofileImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradeprofilePreChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#export_config_timeout Upgradeprofile#export_config_timeout}
  */
  readonly exportConfigTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#max_alerts Upgradeprofile#max_alerts}
  */
  readonly maxAlerts?: string;
}

export function upgradeprofilePreChecksToTerraform(struct?: UpgradeprofilePreChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_config_timeout: cdktf.stringToTerraform(struct!.exportConfigTimeout),
    max_alerts: cdktf.stringToTerraform(struct!.maxAlerts),
  }
}


export function upgradeprofilePreChecksToHclTerraform(struct?: UpgradeprofilePreChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_config_timeout: {
      value: cdktf.stringToHclTerraform(struct!.exportConfigTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_alerts: {
      value: cdktf.stringToHclTerraform(struct!.maxAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeprofilePreChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeprofilePreChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportConfigTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportConfigTimeout = this._exportConfigTimeout;
    }
    if (this._maxAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAlerts = this._maxAlerts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeprofilePreChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportConfigTimeout = undefined;
      this._maxAlerts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportConfigTimeout = value.exportConfigTimeout;
      this._maxAlerts = value.maxAlerts;
    }
  }

  // export_config_timeout - computed: false, optional: true, required: false
  private _exportConfigTimeout?: string; 
  public get exportConfigTimeout() {
    return this.getStringAttribute('export_config_timeout');
  }
  public set exportConfigTimeout(value: string) {
    this._exportConfigTimeout = value;
  }
  public resetExportConfigTimeout() {
    this._exportConfigTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportConfigTimeoutInput() {
    return this._exportConfigTimeout;
  }

  // max_alerts - computed: false, optional: true, required: false
  private _maxAlerts?: string; 
  public get maxAlerts() {
    return this.getStringAttribute('max_alerts');
  }
  public set maxAlerts(value: string) {
    this._maxAlerts = value;
  }
  public resetMaxAlerts() {
    this._maxAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAlertsInput() {
    return this._maxAlerts;
  }
}

export class UpgradeprofilePreChecksList extends cdktf.ComplexList {
  public internalValue? : UpgradeprofilePreChecks[] | cdktf.IResolvable

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
  public get(index: number): UpgradeprofilePreChecksOutputReference {
    return new UpgradeprofilePreChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradeprofileServiceEngine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#concurrent_segroup_upgrades Upgradeprofile#concurrent_segroup_upgrades}
  */
  readonly concurrentSegroupUpgrades?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#image_data_transfer_size Upgradeprofile#image_data_transfer_size}
  */
  readonly imageDataTransferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#large_se_connect_timeout Upgradeprofile#large_se_connect_timeout}
  */
  readonly largeSeConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#se_connect_timeout Upgradeprofile#se_connect_timeout}
  */
  readonly seConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#simultaneous_image_downloads Upgradeprofile#simultaneous_image_downloads}
  */
  readonly simultaneousImageDownloads?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#task_base_timeout Upgradeprofile#task_base_timeout}
  */
  readonly taskBaseTimeout?: string;
}

export function upgradeprofileServiceEngineToTerraform(struct?: UpgradeprofileServiceEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_segroup_upgrades: cdktf.stringToTerraform(struct!.concurrentSegroupUpgrades),
    image_data_transfer_size: cdktf.stringToTerraform(struct!.imageDataTransferSize),
    large_se_connect_timeout: cdktf.stringToTerraform(struct!.largeSeConnectTimeout),
    se_connect_timeout: cdktf.stringToTerraform(struct!.seConnectTimeout),
    simultaneous_image_downloads: cdktf.stringToTerraform(struct!.simultaneousImageDownloads),
    task_base_timeout: cdktf.stringToTerraform(struct!.taskBaseTimeout),
  }
}


export function upgradeprofileServiceEngineToHclTerraform(struct?: UpgradeprofileServiceEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_segroup_upgrades: {
      value: cdktf.stringToHclTerraform(struct!.concurrentSegroupUpgrades),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_data_transfer_size: {
      value: cdktf.stringToHclTerraform(struct!.imageDataTransferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    large_se_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.largeSeConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simultaneous_image_downloads: {
      value: cdktf.stringToHclTerraform(struct!.simultaneousImageDownloads),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_base_timeout: {
      value: cdktf.stringToHclTerraform(struct!.taskBaseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeprofileServiceEngineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeprofileServiceEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentSegroupUpgrades !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentSegroupUpgrades = this._concurrentSegroupUpgrades;
    }
    if (this._imageDataTransferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDataTransferSize = this._imageDataTransferSize;
    }
    if (this._largeSeConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeSeConnectTimeout = this._largeSeConnectTimeout;
    }
    if (this._seConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seConnectTimeout = this._seConnectTimeout;
    }
    if (this._simultaneousImageDownloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.simultaneousImageDownloads = this._simultaneousImageDownloads;
    }
    if (this._taskBaseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskBaseTimeout = this._taskBaseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeprofileServiceEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrentSegroupUpgrades = undefined;
      this._imageDataTransferSize = undefined;
      this._largeSeConnectTimeout = undefined;
      this._seConnectTimeout = undefined;
      this._simultaneousImageDownloads = undefined;
      this._taskBaseTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrentSegroupUpgrades = value.concurrentSegroupUpgrades;
      this._imageDataTransferSize = value.imageDataTransferSize;
      this._largeSeConnectTimeout = value.largeSeConnectTimeout;
      this._seConnectTimeout = value.seConnectTimeout;
      this._simultaneousImageDownloads = value.simultaneousImageDownloads;
      this._taskBaseTimeout = value.taskBaseTimeout;
    }
  }

  // concurrent_segroup_upgrades - computed: false, optional: true, required: false
  private _concurrentSegroupUpgrades?: string; 
  public get concurrentSegroupUpgrades() {
    return this.getStringAttribute('concurrent_segroup_upgrades');
  }
  public set concurrentSegroupUpgrades(value: string) {
    this._concurrentSegroupUpgrades = value;
  }
  public resetConcurrentSegroupUpgrades() {
    this._concurrentSegroupUpgrades = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSegroupUpgradesInput() {
    return this._concurrentSegroupUpgrades;
  }

  // image_data_transfer_size - computed: false, optional: true, required: false
  private _imageDataTransferSize?: string; 
  public get imageDataTransferSize() {
    return this.getStringAttribute('image_data_transfer_size');
  }
  public set imageDataTransferSize(value: string) {
    this._imageDataTransferSize = value;
  }
  public resetImageDataTransferSize() {
    this._imageDataTransferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDataTransferSizeInput() {
    return this._imageDataTransferSize;
  }

  // large_se_connect_timeout - computed: false, optional: true, required: false
  private _largeSeConnectTimeout?: string; 
  public get largeSeConnectTimeout() {
    return this.getStringAttribute('large_se_connect_timeout');
  }
  public set largeSeConnectTimeout(value: string) {
    this._largeSeConnectTimeout = value;
  }
  public resetLargeSeConnectTimeout() {
    this._largeSeConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeSeConnectTimeoutInput() {
    return this._largeSeConnectTimeout;
  }

  // se_connect_timeout - computed: false, optional: true, required: false
  private _seConnectTimeout?: string; 
  public get seConnectTimeout() {
    return this.getStringAttribute('se_connect_timeout');
  }
  public set seConnectTimeout(value: string) {
    this._seConnectTimeout = value;
  }
  public resetSeConnectTimeout() {
    this._seConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seConnectTimeoutInput() {
    return this._seConnectTimeout;
  }

  // simultaneous_image_downloads - computed: false, optional: true, required: false
  private _simultaneousImageDownloads?: string; 
  public get simultaneousImageDownloads() {
    return this.getStringAttribute('simultaneous_image_downloads');
  }
  public set simultaneousImageDownloads(value: string) {
    this._simultaneousImageDownloads = value;
  }
  public resetSimultaneousImageDownloads() {
    this._simultaneousImageDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simultaneousImageDownloadsInput() {
    return this._simultaneousImageDownloads;
  }

  // task_base_timeout - computed: false, optional: true, required: false
  private _taskBaseTimeout?: string; 
  public get taskBaseTimeout() {
    return this.getStringAttribute('task_base_timeout');
  }
  public set taskBaseTimeout(value: string) {
    this._taskBaseTimeout = value;
  }
  public resetTaskBaseTimeout() {
    this._taskBaseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskBaseTimeoutInput() {
    return this._taskBaseTimeout;
  }
}

export class UpgradeprofileServiceEngineList extends cdktf.ComplexList {
  public internalValue? : UpgradeprofileServiceEngine[] | cdktf.IResolvable

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
  public get(index: number): UpgradeprofileServiceEngineOutputReference {
    return new UpgradeprofileServiceEngineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile avi_upgradeprofile}
*/
export class Upgradeprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_upgradeprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Upgradeprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Upgradeprofile to import
  * @param importFromId The id of the existing Upgradeprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Upgradeprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_upgradeprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradeprofile avi_upgradeprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpgradeprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UpgradeprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_upgradeprofile',
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
    this._uuid = config.uuid;
    this._controller.internalValue = config.controller;
    this._dryRun.internalValue = config.dryRun;
    this._image.internalValue = config.image;
    this._preChecks.internalValue = config.preChecks;
    this._serviceEngine.internalValue = config.serviceEngine;
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

  // controller - computed: false, optional: true, required: false
  private _controller = new UpgradeprofileControllerList(this, "controller", true);
  public get controller() {
    return this._controller;
  }
  public putController(value: UpgradeprofileController[] | cdktf.IResolvable) {
    this._controller.internalValue = value;
  }
  public resetController() {
    this._controller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller.internalValue;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun = new UpgradeprofileDryRunList(this, "dry_run", true);
  public get dryRun() {
    return this._dryRun;
  }
  public putDryRun(value: UpgradeprofileDryRun[] | cdktf.IResolvable) {
    this._dryRun.internalValue = value;
  }
  public resetDryRun() {
    this._dryRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new UpgradeprofileImageList(this, "image", true);
  public get image() {
    return this._image;
  }
  public putImage(value: UpgradeprofileImage[] | cdktf.IResolvable) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // pre_checks - computed: false, optional: true, required: false
  private _preChecks = new UpgradeprofilePreChecksList(this, "pre_checks", true);
  public get preChecks() {
    return this._preChecks;
  }
  public putPreChecks(value: UpgradeprofilePreChecks[] | cdktf.IResolvable) {
    this._preChecks.internalValue = value;
  }
  public resetPreChecks() {
    this._preChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preChecksInput() {
    return this._preChecks.internalValue;
  }

  // service_engine - computed: false, optional: true, required: false
  private _serviceEngine = new UpgradeprofileServiceEngineList(this, "service_engine", true);
  public get serviceEngine() {
    return this._serviceEngine;
  }
  public putServiceEngine(value: UpgradeprofileServiceEngine[] | cdktf.IResolvable) {
    this._serviceEngine.internalValue = value;
  }
  public resetServiceEngine() {
    this._serviceEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEngineInput() {
    return this._serviceEngine.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      controller: cdktf.listMapper(upgradeprofileControllerToTerraform, true)(this._controller.internalValue),
      dry_run: cdktf.listMapper(upgradeprofileDryRunToTerraform, true)(this._dryRun.internalValue),
      image: cdktf.listMapper(upgradeprofileImageToTerraform, true)(this._image.internalValue),
      pre_checks: cdktf.listMapper(upgradeprofilePreChecksToTerraform, true)(this._preChecks.internalValue),
      service_engine: cdktf.listMapper(upgradeprofileServiceEngineToTerraform, true)(this._serviceEngine.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller: {
        value: cdktf.listMapperHcl(upgradeprofileControllerToHclTerraform, true)(this._controller.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradeprofileControllerList",
      },
      dry_run: {
        value: cdktf.listMapperHcl(upgradeprofileDryRunToHclTerraform, true)(this._dryRun.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradeprofileDryRunList",
      },
      image: {
        value: cdktf.listMapperHcl(upgradeprofileImageToHclTerraform, true)(this._image.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradeprofileImageList",
      },
      pre_checks: {
        value: cdktf.listMapperHcl(upgradeprofilePreChecksToHclTerraform, true)(this._preChecks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradeprofilePreChecksList",
      },
      service_engine: {
        value: cdktf.listMapperHcl(upgradeprofileServiceEngineToHclTerraform, true)(this._serviceEngine.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradeprofileServiceEngineList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
