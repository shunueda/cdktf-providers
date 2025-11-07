// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessChaosInfrastructureV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#environment_id DataHarnessChaosInfrastructureV2#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#id DataHarnessChaosInfrastructureV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#infra_id DataHarnessChaosInfrastructureV2#infra_id}
  */
  readonly infraId: string;
  /**
  * The ID of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#org_id DataHarnessChaosInfrastructureV2#org_id}
  */
  readonly orgId: string;
  /**
  * The ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#project_id DataHarnessChaosInfrastructureV2#project_id}
  */
  readonly projectId: string;
  /**
  * image_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#image_registry DataHarnessChaosInfrastructureV2#image_registry}
  */
  readonly imageRegistry?: DataHarnessChaosInfrastructureV2ImageRegistry[] | cdktf.IResolvable;
  /**
  * mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#mtls DataHarnessChaosInfrastructureV2#mtls}
  */
  readonly mtls?: DataHarnessChaosInfrastructureV2Mtls;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#proxy DataHarnessChaosInfrastructureV2#proxy}
  */
  readonly proxy?: DataHarnessChaosInfrastructureV2Proxy;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#tolerations DataHarnessChaosInfrastructureV2#tolerations}
  */
  readonly tolerations?: DataHarnessChaosInfrastructureV2Tolerations[] | cdktf.IResolvable;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#volume_mounts DataHarnessChaosInfrastructureV2#volume_mounts}
  */
  readonly volumeMounts?: DataHarnessChaosInfrastructureV2VolumeMounts[] | cdktf.IResolvable;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#volumes DataHarnessChaosInfrastructureV2#volumes}
  */
  readonly volumes?: DataHarnessChaosInfrastructureV2Volumes[] | cdktf.IResolvable;
}
export interface DataHarnessChaosInfrastructureV2ImageRegistryIdentifier {
}

export function dataHarnessChaosInfrastructureV2ImageRegistryIdentifierToTerraform(struct?: DataHarnessChaosInfrastructureV2ImageRegistryIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessChaosInfrastructureV2ImageRegistryIdentifierToHclTerraform(struct?: DataHarnessChaosInfrastructureV2ImageRegistryIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessChaosInfrastructureV2ImageRegistryIdentifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessChaosInfrastructureV2ImageRegistryIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessChaosInfrastructureV2ImageRegistryIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_identifier - computed: true, optional: false, required: false
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }

  // org_identifier - computed: true, optional: false, required: false
  public get orgIdentifier() {
    return this.getStringAttribute('org_identifier');
  }

  // project_identifier - computed: true, optional: false, required: false
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
}

export class DataHarnessChaosInfrastructureV2ImageRegistryIdentifierList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessChaosInfrastructureV2ImageRegistryIdentifierOutputReference {
    return new DataHarnessChaosInfrastructureV2ImageRegistryIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessChaosInfrastructureV2ImageRegistryCustomImages {
  /**
  * Custom image for ddcr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#ddcr DataHarnessChaosInfrastructureV2#ddcr}
  */
  readonly ddcr?: string;
  /**
  * Custom image for ddcr-fault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#ddcr_fault DataHarnessChaosInfrastructureV2#ddcr_fault}
  */
  readonly ddcrFault?: string;
  /**
  * Custom image for ddcr-lib.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#ddcr_lib DataHarnessChaosInfrastructureV2#ddcr_lib}
  */
  readonly ddcrLib?: string;
  /**
  * Custom image for log-watcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#log_watcher DataHarnessChaosInfrastructureV2#log_watcher}
  */
  readonly logWatcher?: string;
}

export function dataHarnessChaosInfrastructureV2ImageRegistryCustomImagesToTerraform(struct?: DataHarnessChaosInfrastructureV2ImageRegistryCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddcr: cdktf.stringToTerraform(struct!.ddcr),
    ddcr_fault: cdktf.stringToTerraform(struct!.ddcrFault),
    ddcr_lib: cdktf.stringToTerraform(struct!.ddcrLib),
    log_watcher: cdktf.stringToTerraform(struct!.logWatcher),
  }
}


export function dataHarnessChaosInfrastructureV2ImageRegistryCustomImagesToHclTerraform(struct?: DataHarnessChaosInfrastructureV2ImageRegistryCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddcr: {
      value: cdktf.stringToHclTerraform(struct!.ddcr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddcr_fault: {
      value: cdktf.stringToHclTerraform(struct!.ddcrFault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddcr_lib: {
      value: cdktf.stringToHclTerraform(struct!.ddcrLib),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_watcher: {
      value: cdktf.stringToHclTerraform(struct!.logWatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessChaosInfrastructureV2ImageRegistryCustomImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessChaosInfrastructureV2ImageRegistryCustomImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddcr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddcr = this._ddcr;
    }
    if (this._ddcrFault !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddcrFault = this._ddcrFault;
    }
    if (this._ddcrLib !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddcrLib = this._ddcrLib;
    }
    if (this._logWatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.logWatcher = this._logWatcher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessChaosInfrastructureV2ImageRegistryCustomImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddcr = undefined;
      this._ddcrFault = undefined;
      this._ddcrLib = undefined;
      this._logWatcher = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddcr = value.ddcr;
      this._ddcrFault = value.ddcrFault;
      this._ddcrLib = value.ddcrLib;
      this._logWatcher = value.logWatcher;
    }
  }

  // ddcr - computed: true, optional: true, required: false
  private _ddcr?: string; 
  public get ddcr() {
    return this.getStringAttribute('ddcr');
  }
  public set ddcr(value: string) {
    this._ddcr = value;
  }
  public resetDdcr() {
    this._ddcr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddcrInput() {
    return this._ddcr;
  }

  // ddcr_fault - computed: true, optional: true, required: false
  private _ddcrFault?: string; 
  public get ddcrFault() {
    return this.getStringAttribute('ddcr_fault');
  }
  public set ddcrFault(value: string) {
    this._ddcrFault = value;
  }
  public resetDdcrFault() {
    this._ddcrFault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddcrFaultInput() {
    return this._ddcrFault;
  }

  // ddcr_lib - computed: true, optional: true, required: false
  private _ddcrLib?: string; 
  public get ddcrLib() {
    return this.getStringAttribute('ddcr_lib');
  }
  public set ddcrLib(value: string) {
    this._ddcrLib = value;
  }
  public resetDdcrLib() {
    this._ddcrLib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddcrLibInput() {
    return this._ddcrLib;
  }

  // log_watcher - computed: true, optional: true, required: false
  private _logWatcher?: string; 
  public get logWatcher() {
    return this.getStringAttribute('log_watcher');
  }
  public set logWatcher(value: string) {
    this._logWatcher = value;
  }
  public resetLogWatcher() {
    this._logWatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logWatcherInput() {
    return this._logWatcher;
  }
}

export class DataHarnessChaosInfrastructureV2ImageRegistryCustomImagesList extends cdktf.ComplexList {
  public internalValue? : DataHarnessChaosInfrastructureV2ImageRegistryCustomImages[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessChaosInfrastructureV2ImageRegistryCustomImagesOutputReference {
    return new DataHarnessChaosInfrastructureV2ImageRegistryCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessChaosInfrastructureV2ImageRegistry {
  /**
  * Whether this is the default registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#is_default DataHarnessChaosInfrastructureV2#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Whether override is allowed for this registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#is_override_allowed DataHarnessChaosInfrastructureV2#is_override_allowed}
  */
  readonly isOverrideAllowed?: boolean | cdktf.IResolvable;
  /**
  * Whether the registry is private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#is_private DataHarnessChaosInfrastructureV2#is_private}
  */
  readonly isPrivate?: boolean | cdktf.IResolvable;
  /**
  * The account name for the container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#registry_account DataHarnessChaosInfrastructureV2#registry_account}
  */
  readonly registryAccount?: string;
  /**
  * The container image registry server URL (e.g., docker.io, gcr.io).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#registry_server DataHarnessChaosInfrastructureV2#registry_server}
  */
  readonly registryServer?: string;
  /**
  * Name of the Kubernetes secret containing registry credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#secret_name DataHarnessChaosInfrastructureV2#secret_name}
  */
  readonly secretName?: string;
  /**
  * Whether to use custom images instead of default ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#use_custom_images DataHarnessChaosInfrastructureV2#use_custom_images}
  */
  readonly useCustomImages?: boolean | cdktf.IResolvable;
  /**
  * custom_images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#custom_images DataHarnessChaosInfrastructureV2#custom_images}
  */
  readonly customImages?: DataHarnessChaosInfrastructureV2ImageRegistryCustomImages[] | cdktf.IResolvable;
}

export function dataHarnessChaosInfrastructureV2ImageRegistryToTerraform(struct?: DataHarnessChaosInfrastructureV2ImageRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    is_override_allowed: cdktf.booleanToTerraform(struct!.isOverrideAllowed),
    is_private: cdktf.booleanToTerraform(struct!.isPrivate),
    registry_account: cdktf.stringToTerraform(struct!.registryAccount),
    registry_server: cdktf.stringToTerraform(struct!.registryServer),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    use_custom_images: cdktf.booleanToTerraform(struct!.useCustomImages),
    custom_images: cdktf.listMapper(dataHarnessChaosInfrastructureV2ImageRegistryCustomImagesToTerraform, true)(struct!.customImages),
  }
}


export function dataHarnessChaosInfrastructureV2ImageRegistryToHclTerraform(struct?: DataHarnessChaosInfrastructureV2ImageRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_override_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.isOverrideAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_private: {
      value: cdktf.booleanToHclTerraform(struct!.isPrivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry_account: {
      value: cdktf.stringToHclTerraform(struct!.registryAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_server: {
      value: cdktf.stringToHclTerraform(struct!.registryServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_custom_images: {
      value: cdktf.booleanToHclTerraform(struct!.useCustomImages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_images: {
      value: cdktf.listMapperHcl(dataHarnessChaosInfrastructureV2ImageRegistryCustomImagesToHclTerraform, true)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessChaosInfrastructureV2ImageRegistryCustomImagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessChaosInfrastructureV2ImageRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessChaosInfrastructureV2ImageRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._isOverrideAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOverrideAllowed = this._isOverrideAllowed;
    }
    if (this._isPrivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrivate = this._isPrivate;
    }
    if (this._registryAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryAccount = this._registryAccount;
    }
    if (this._registryServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryServer = this._registryServer;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._useCustomImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCustomImages = this._useCustomImages;
    }
    if (this._customImages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImages = this._customImages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessChaosInfrastructureV2ImageRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDefault = undefined;
      this._isOverrideAllowed = undefined;
      this._isPrivate = undefined;
      this._registryAccount = undefined;
      this._registryServer = undefined;
      this._secretName = undefined;
      this._useCustomImages = undefined;
      this._customImages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDefault = value.isDefault;
      this._isOverrideAllowed = value.isOverrideAllowed;
      this._isPrivate = value.isPrivate;
      this._registryAccount = value.registryAccount;
      this._registryServer = value.registryServer;
      this._secretName = value.secretName;
      this._useCustomImages = value.useCustomImages;
      this._customImages.internalValue = value.customImages;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // identifier - computed: true, optional: false, required: false
  private _identifier = new DataHarnessChaosInfrastructureV2ImageRegistryIdentifierList(this, "identifier", false);
  public get identifier() {
    return this._identifier;
  }

  // infra_id - computed: true, optional: false, required: false
  public get infraId() {
    return this.getStringAttribute('infra_id');
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_override_allowed - computed: true, optional: true, required: false
  private _isOverrideAllowed?: boolean | cdktf.IResolvable; 
  public get isOverrideAllowed() {
    return this.getBooleanAttribute('is_override_allowed');
  }
  public set isOverrideAllowed(value: boolean | cdktf.IResolvable) {
    this._isOverrideAllowed = value;
  }
  public resetIsOverrideAllowed() {
    this._isOverrideAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOverrideAllowedInput() {
    return this._isOverrideAllowed;
  }

  // is_private - computed: true, optional: true, required: false
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  public resetIsPrivate() {
    this._isPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // registry_account - computed: true, optional: true, required: false
  private _registryAccount?: string; 
  public get registryAccount() {
    return this.getStringAttribute('registry_account');
  }
  public set registryAccount(value: string) {
    this._registryAccount = value;
  }
  public resetRegistryAccount() {
    this._registryAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryAccountInput() {
    return this._registryAccount;
  }

  // registry_server - computed: true, optional: true, required: false
  private _registryServer?: string; 
  public get registryServer() {
    return this.getStringAttribute('registry_server');
  }
  public set registryServer(value: string) {
    this._registryServer = value;
  }
  public resetRegistryServer() {
    this._registryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryServerInput() {
    return this._registryServer;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // use_custom_images - computed: true, optional: true, required: false
  private _useCustomImages?: boolean | cdktf.IResolvable; 
  public get useCustomImages() {
    return this.getBooleanAttribute('use_custom_images');
  }
  public set useCustomImages(value: boolean | cdktf.IResolvable) {
    this._useCustomImages = value;
  }
  public resetUseCustomImages() {
    this._useCustomImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomImagesInput() {
    return this._useCustomImages;
  }

  // custom_images - computed: false, optional: true, required: false
  private _customImages = new DataHarnessChaosInfrastructureV2ImageRegistryCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: DataHarnessChaosInfrastructureV2ImageRegistryCustomImages[] | cdktf.IResolvable) {
    this._customImages.internalValue = value;
  }
  public resetCustomImages() {
    this._customImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImagesInput() {
    return this._customImages.internalValue;
  }
}

export class DataHarnessChaosInfrastructureV2ImageRegistryList extends cdktf.ComplexList {
  public internalValue? : DataHarnessChaosInfrastructureV2ImageRegistry[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessChaosInfrastructureV2ImageRegistryOutputReference {
    return new DataHarnessChaosInfrastructureV2ImageRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessChaosInfrastructureV2Mtls {
  /**
  * Path to the certificate file for mTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#cert_path DataHarnessChaosInfrastructureV2#cert_path}
  */
  readonly certPath?: string;
  /**
  * Path to the private key file for mTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#key_path DataHarnessChaosInfrastructureV2#key_path}
  */
  readonly keyPath?: string;
  /**
  * Name of the Kubernetes secret containing mTLS certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#secret_name DataHarnessChaosInfrastructureV2#secret_name}
  */
  readonly secretName?: string;
  /**
  * URL for the mTLS endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#url DataHarnessChaosInfrastructureV2#url}
  */
  readonly url?: string;
}

export function dataHarnessChaosInfrastructureV2MtlsToTerraform(struct?: DataHarnessChaosInfrastructureV2MtlsOutputReference | DataHarnessChaosInfrastructureV2Mtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataHarnessChaosInfrastructureV2MtlsToHclTerraform(struct?: DataHarnessChaosInfrastructureV2MtlsOutputReference | DataHarnessChaosInfrastructureV2Mtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_path: {
      value: cdktf.stringToHclTerraform(struct!.certPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessChaosInfrastructureV2MtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessChaosInfrastructureV2Mtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPath = this._certPath;
    }
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessChaosInfrastructureV2Mtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certPath = undefined;
      this._keyPath = undefined;
      this._secretName = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certPath = value.certPath;
      this._keyPath = value.keyPath;
      this._secretName = value.secretName;
      this._url = value.url;
    }
  }

  // cert_path - computed: false, optional: true, required: false
  private _certPath?: string; 
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }
  public set certPath(value: string) {
    this._certPath = value;
  }
  public resetCertPath() {
    this._certPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // key_path - computed: false, optional: true, required: false
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataHarnessChaosInfrastructureV2Proxy {
  /**
  * HTTP proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#http_proxy DataHarnessChaosInfrastructureV2#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HTTPS proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#https_proxy DataHarnessChaosInfrastructureV2#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * List of hosts that should not use proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#no_proxy DataHarnessChaosInfrastructureV2#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#url DataHarnessChaosInfrastructureV2#url}
  */
  readonly url: string;
}

export function dataHarnessChaosInfrastructureV2ProxyToTerraform(struct?: DataHarnessChaosInfrastructureV2ProxyOutputReference | DataHarnessChaosInfrastructureV2Proxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataHarnessChaosInfrastructureV2ProxyToHclTerraform(struct?: DataHarnessChaosInfrastructureV2ProxyOutputReference | DataHarnessChaosInfrastructureV2Proxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessChaosInfrastructureV2ProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessChaosInfrastructureV2Proxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessChaosInfrastructureV2Proxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
      this._url = value.url;
    }
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataHarnessChaosInfrastructureV2Tolerations {
  /**
  * Effect indicates the taint effect to match. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#effect DataHarnessChaosInfrastructureV2#effect}
  */
  readonly effect: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#key DataHarnessChaosInfrastructureV2#key}
  */
  readonly key: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#operator DataHarnessChaosInfrastructureV2#operator}
  */
  readonly operator: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#toleration_seconds DataHarnessChaosInfrastructureV2#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#value DataHarnessChaosInfrastructureV2#value}
  */
  readonly value?: string;
}

export function dataHarnessChaosInfrastructureV2TolerationsToTerraform(struct?: DataHarnessChaosInfrastructureV2Tolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataHarnessChaosInfrastructureV2TolerationsToHclTerraform(struct?: DataHarnessChaosInfrastructureV2Tolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessChaosInfrastructureV2TolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessChaosInfrastructureV2Tolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessChaosInfrastructureV2Tolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataHarnessChaosInfrastructureV2TolerationsList extends cdktf.ComplexList {
  public internalValue? : DataHarnessChaosInfrastructureV2Tolerations[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessChaosInfrastructureV2TolerationsOutputReference {
    return new DataHarnessChaosInfrastructureV2TolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessChaosInfrastructureV2VolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#mount_path DataHarnessChaosInfrastructureV2#mount_path}
  */
  readonly mountPath: string;
  /**
  * Determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#mount_propagation DataHarnessChaosInfrastructureV2#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#name DataHarnessChaosInfrastructureV2#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#read_only DataHarnessChaosInfrastructureV2#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Mutually exclusive with sub_path_expr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#sub_path DataHarnessChaosInfrastructureV2#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to sub_path but environment variable references $(VAR_NAME) are expanded using the container's environment. Mutually exclusive with sub_path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#sub_path_expr DataHarnessChaosInfrastructureV2#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataHarnessChaosInfrastructureV2VolumeMountsToTerraform(struct?: DataHarnessChaosInfrastructureV2VolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataHarnessChaosInfrastructureV2VolumeMountsToHclTerraform(struct?: DataHarnessChaosInfrastructureV2VolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessChaosInfrastructureV2VolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessChaosInfrastructureV2VolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessChaosInfrastructureV2VolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataHarnessChaosInfrastructureV2VolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataHarnessChaosInfrastructureV2VolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessChaosInfrastructureV2VolumeMountsOutputReference {
    return new DataHarnessChaosInfrastructureV2VolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessChaosInfrastructureV2Volumes {
  /**
  * Name of the volume. Must be a DNS_LABEL and unique within the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#name DataHarnessChaosInfrastructureV2#name}
  */
  readonly name: string;
  /**
  * Size limit of the volume. Example: '10Gi', '100Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#size_limit DataHarnessChaosInfrastructureV2#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataHarnessChaosInfrastructureV2VolumesToTerraform(struct?: DataHarnessChaosInfrastructureV2Volumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataHarnessChaosInfrastructureV2VolumesToHclTerraform(struct?: DataHarnessChaosInfrastructureV2Volumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessChaosInfrastructureV2VolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessChaosInfrastructureV2Volumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessChaosInfrastructureV2Volumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sizeLimit = value.sizeLimit;
    }
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

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}

export class DataHarnessChaosInfrastructureV2VolumesList extends cdktf.ComplexList {
  public internalValue? : DataHarnessChaosInfrastructureV2Volumes[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessChaosInfrastructureV2VolumesOutputReference {
    return new DataHarnessChaosInfrastructureV2VolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2 harness_chaos_infrastructure_v2}
*/
export class DataHarnessChaosInfrastructureV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_chaos_infrastructure_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessChaosInfrastructureV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessChaosInfrastructureV2 to import
  * @param importFromId The id of the existing DataHarnessChaosInfrastructureV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessChaosInfrastructureV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_chaos_infrastructure_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/chaos_infrastructure_v2 harness_chaos_infrastructure_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessChaosInfrastructureV2Config
  */
  public constructor(scope: Construct, id: string, config: DataHarnessChaosInfrastructureV2Config) {
    super(scope, id, {
      terraformResourceType: 'harness_chaos_infrastructure_v2',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._infraId = config.infraId;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._imageRegistry.internalValue = config.imageRegistry;
    this._mtls.internalValue = config.mtls;
    this._proxy.internalValue = config.proxy;
    this._tolerations.internalValue = config.tolerations;
    this._volumeMounts.internalValue = config.volumeMounts;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: false, required: false
  private _annotation = new cdktf.StringMap(this, "annotation");
  public get annotation() {
    return this._annotation;
  }

  // containers - computed: true, optional: false, required: false
  public get containers() {
    return this.getStringAttribute('containers');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // infra_id - computed: false, optional: false, required: true
  private _infraId?: string; 
  public get infraId() {
    return this.getStringAttribute('infra_id');
  }
  public set infraId(value: string) {
    this._infraId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraIdInput() {
    return this._infraId;
  }

  // infra_scope - computed: true, optional: false, required: false
  public get infraScope() {
    return this.getStringAttribute('infra_scope');
  }

  // infra_type - computed: true, optional: false, required: false
  public get infraType() {
    return this.getStringAttribute('infra_type');
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // is_ai_enabled - computed: true, optional: false, required: false
  public get isAiEnabled() {
    return this.getBooleanAttribute('is_ai_enabled');
  }

  // is_chaos_enabled - computed: true, optional: false, required: false
  public get isChaosEnabled() {
    return this.getBooleanAttribute('is_chaos_enabled');
  }

  // label - computed: true, optional: false, required: false
  private _label = new cdktf.StringMap(this, "label");
  public get label() {
    return this._label;
  }

  // last_heartbeat - computed: true, optional: false, required: false
  public get lastHeartbeat() {
    return this.getNumberAttribute('last_heartbeat');
  }

  // last_workflow_timestamp - computed: true, optional: false, required: false
  public get lastWorkflowTimestamp() {
    return this.getStringAttribute('last_workflow_timestamp');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // no_of_schedules - computed: true, optional: false, required: false
  public get noOfSchedules() {
    return this.getNumberAttribute('no_of_schedules');
  }

  // no_of_workflows - computed: true, optional: false, required: false
  public get noOfWorkflows() {
    return this.getNumberAttribute('no_of_workflows');
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // update_status - computed: true, optional: false, required: false
  public get updateStatus() {
    return this.getStringAttribute('update_status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // image_registry - computed: false, optional: true, required: false
  private _imageRegistry = new DataHarnessChaosInfrastructureV2ImageRegistryList(this, "image_registry", false);
  public get imageRegistry() {
    return this._imageRegistry;
  }
  public putImageRegistry(value: DataHarnessChaosInfrastructureV2ImageRegistry[] | cdktf.IResolvable) {
    this._imageRegistry.internalValue = value;
  }
  public resetImageRegistry() {
    this._imageRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryInput() {
    return this._imageRegistry.internalValue;
  }

  // mtls - computed: false, optional: true, required: false
  private _mtls = new DataHarnessChaosInfrastructureV2MtlsOutputReference(this, "mtls");
  public get mtls() {
    return this._mtls;
  }
  public putMtls(value: DataHarnessChaosInfrastructureV2Mtls) {
    this._mtls.internalValue = value;
  }
  public resetMtls() {
    this._mtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsInput() {
    return this._mtls.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataHarnessChaosInfrastructureV2ProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataHarnessChaosInfrastructureV2Proxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataHarnessChaosInfrastructureV2TolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataHarnessChaosInfrastructureV2Tolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataHarnessChaosInfrastructureV2VolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataHarnessChaosInfrastructureV2VolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataHarnessChaosInfrastructureV2VolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataHarnessChaosInfrastructureV2Volumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      infra_id: cdktf.stringToTerraform(this._infraId),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      image_registry: cdktf.listMapper(dataHarnessChaosInfrastructureV2ImageRegistryToTerraform, true)(this._imageRegistry.internalValue),
      mtls: dataHarnessChaosInfrastructureV2MtlsToTerraform(this._mtls.internalValue),
      proxy: dataHarnessChaosInfrastructureV2ProxyToTerraform(this._proxy.internalValue),
      tolerations: cdktf.listMapper(dataHarnessChaosInfrastructureV2TolerationsToTerraform, true)(this._tolerations.internalValue),
      volume_mounts: cdktf.listMapper(dataHarnessChaosInfrastructureV2VolumeMountsToTerraform, true)(this._volumeMounts.internalValue),
      volumes: cdktf.listMapper(dataHarnessChaosInfrastructureV2VolumesToTerraform, true)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      infra_id: {
        value: cdktf.stringToHclTerraform(this._infraId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_registry: {
        value: cdktf.listMapperHcl(dataHarnessChaosInfrastructureV2ImageRegistryToHclTerraform, true)(this._imageRegistry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessChaosInfrastructureV2ImageRegistryList",
      },
      mtls: {
        value: dataHarnessChaosInfrastructureV2MtlsToHclTerraform(this._mtls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessChaosInfrastructureV2MtlsList",
      },
      proxy: {
        value: dataHarnessChaosInfrastructureV2ProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessChaosInfrastructureV2ProxyList",
      },
      tolerations: {
        value: cdktf.listMapperHcl(dataHarnessChaosInfrastructureV2TolerationsToHclTerraform, true)(this._tolerations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessChaosInfrastructureV2TolerationsList",
      },
      volume_mounts: {
        value: cdktf.listMapperHcl(dataHarnessChaosInfrastructureV2VolumeMountsToHclTerraform, true)(this._volumeMounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessChaosInfrastructureV2VolumeMountsList",
      },
      volumes: {
        value: cdktf.listMapperHcl(dataHarnessChaosInfrastructureV2VolumesToHclTerraform, true)(this._volumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessChaosInfrastructureV2VolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
