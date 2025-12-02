// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#description FunctionTrigger#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#folder_id FunctionTrigger#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#id FunctionTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#labels FunctionTrigger#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#name FunctionTrigger#name}
  */
  readonly name: string;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#container FunctionTrigger#container}
  */
  readonly container?: FunctionTriggerContainer;
  /**
  * container_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#container_registry FunctionTrigger#container_registry}
  */
  readonly containerRegistry?: FunctionTriggerContainerRegistry;
  /**
  * data_streams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#data_streams FunctionTrigger#data_streams}
  */
  readonly dataStreams?: FunctionTriggerDataStreams;
  /**
  * dlq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#dlq FunctionTrigger#dlq}
  */
  readonly dlq?: FunctionTriggerDlq;
  /**
  * function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#function FunctionTrigger#function}
  */
  readonly function?: FunctionTriggerFunction;
  /**
  * iot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#iot FunctionTrigger#iot}
  */
  readonly iot?: FunctionTriggerIot;
  /**
  * log_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#log_group FunctionTrigger#log_group}
  */
  readonly logGroup?: FunctionTriggerLogGroup;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#logging FunctionTrigger#logging}
  */
  readonly logging?: FunctionTriggerLogging;
  /**
  * mail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#mail FunctionTrigger#mail}
  */
  readonly mail?: FunctionTriggerMail;
  /**
  * message_queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#message_queue FunctionTrigger#message_queue}
  */
  readonly messageQueue?: FunctionTriggerMessageQueue;
  /**
  * object_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#object_storage FunctionTrigger#object_storage}
  */
  readonly objectStorage?: FunctionTriggerObjectStorage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#timeouts FunctionTrigger#timeouts}
  */
  readonly timeouts?: FunctionTriggerTimeouts;
  /**
  * timer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#timer FunctionTrigger#timer}
  */
  readonly timer?: FunctionTriggerTimer;
}
export interface FunctionTriggerContainer {
  /**
  * Yandex Cloud Serverless Container ID for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#id FunctionTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Path for Yandex Cloud Serverless Container for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#path FunctionTrigger#path}
  */
  readonly path?: string;
  /**
  * Retry attempts for Yandex Cloud Serverless Container for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#retry_attempts FunctionTrigger#retry_attempts}
  */
  readonly retryAttempts?: string;
  /**
  * Retry interval in seconds for Yandex Cloud Serverless Container for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#retry_interval FunctionTrigger#retry_interval}
  */
  readonly retryInterval?: string;
  /**
  * Service account ID for Yandex Cloud Serverless Container for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#service_account_id FunctionTrigger#service_account_id}
  */
  readonly serviceAccountId?: string;
}

export function functionTriggerContainerToTerraform(struct?: FunctionTriggerContainerOutputReference | FunctionTriggerContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    path: cdktf.stringToTerraform(struct!.path),
    retry_attempts: cdktf.stringToTerraform(struct!.retryAttempts),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function functionTriggerContainerToHclTerraform(struct?: FunctionTriggerContainerOutputReference | FunctionTriggerContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_attempts: {
      value: cdktf.stringToHclTerraform(struct!.retryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._retryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAttempts = this._retryAttempts;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._path = undefined;
      this._retryAttempts = undefined;
      this._retryInterval = undefined;
      this._serviceAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._path = value.path;
      this._retryAttempts = value.retryAttempts;
      this._retryInterval = value.retryInterval;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // retry_attempts - computed: false, optional: true, required: false
  private _retryAttempts?: string; 
  public get retryAttempts() {
    return this.getStringAttribute('retry_attempts');
  }
  public set retryAttempts(value: string) {
    this._retryAttempts = value;
  }
  public resetRetryAttempts() {
    this._retryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAttemptsInput() {
    return this._retryAttempts;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface FunctionTriggerContainerRegistry {
  /**
  * Batch Duration in seconds for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Batch Size for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Boolean flag for setting `create image` event for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#create_image FunctionTrigger#create_image}
  */
  readonly createImage?: boolean | cdktf.IResolvable;
  /**
  * Boolean flag for setting `create image tag` event for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#create_image_tag FunctionTrigger#create_image_tag}
  */
  readonly createImageTag?: boolean | cdktf.IResolvable;
  /**
  * Boolean flag for setting `delete image` event for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#delete_image FunctionTrigger#delete_image}
  */
  readonly deleteImage?: boolean | cdktf.IResolvable;
  /**
  * Boolean flag for setting `delete image tag` event for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#delete_image_tag FunctionTrigger#delete_image_tag}
  */
  readonly deleteImageTag?: boolean | cdktf.IResolvable;
  /**
  * Image name filter setting for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#image_name FunctionTrigger#image_name}
  */
  readonly imageName?: string;
  /**
  * Container Registry ID for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#registry_id FunctionTrigger#registry_id}
  */
  readonly registryId: string;
  /**
  * Image tag filter setting for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#tag FunctionTrigger#tag}
  */
  readonly tag?: string;
}

export function functionTriggerContainerRegistryToTerraform(struct?: FunctionTriggerContainerRegistryOutputReference | FunctionTriggerContainerRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    create_image: cdktf.booleanToTerraform(struct!.createImage),
    create_image_tag: cdktf.booleanToTerraform(struct!.createImageTag),
    delete_image: cdktf.booleanToTerraform(struct!.deleteImage),
    delete_image_tag: cdktf.booleanToTerraform(struct!.deleteImageTag),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    registry_id: cdktf.stringToTerraform(struct!.registryId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function functionTriggerContainerRegistryToHclTerraform(struct?: FunctionTriggerContainerRegistryOutputReference | FunctionTriggerContainerRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_cutoff: {
      value: cdktf.stringToHclTerraform(struct!.batchCutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_image: {
      value: cdktf.booleanToHclTerraform(struct!.createImage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_image_tag: {
      value: cdktf.booleanToHclTerraform(struct!.createImageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_image: {
      value: cdktf.booleanToHclTerraform(struct!.deleteImage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_image_tag: {
      value: cdktf.booleanToHclTerraform(struct!.deleteImageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_id: {
      value: cdktf.stringToHclTerraform(struct!.registryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerContainerRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerContainerRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._createImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.createImage = this._createImage;
    }
    if (this._createImageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.createImageTag = this._createImageTag;
    }
    if (this._deleteImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteImage = this._deleteImage;
    }
    if (this._deleteImageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteImageTag = this._deleteImageTag;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._registryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryId = this._registryId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerContainerRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._createImage = undefined;
      this._createImageTag = undefined;
      this._deleteImage = undefined;
      this._deleteImageTag = undefined;
      this._imageName = undefined;
      this._registryId = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._createImage = value.createImage;
      this._createImageTag = value.createImageTag;
      this._deleteImage = value.deleteImage;
      this._deleteImageTag = value.deleteImageTag;
      this._imageName = value.imageName;
      this._registryId = value.registryId;
      this._tag = value.tag;
    }
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // create_image - computed: false, optional: true, required: false
  private _createImage?: boolean | cdktf.IResolvable; 
  public get createImage() {
    return this.getBooleanAttribute('create_image');
  }
  public set createImage(value: boolean | cdktf.IResolvable) {
    this._createImage = value;
  }
  public resetCreateImage() {
    this._createImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createImageInput() {
    return this._createImage;
  }

  // create_image_tag - computed: false, optional: true, required: false
  private _createImageTag?: boolean | cdktf.IResolvable; 
  public get createImageTag() {
    return this.getBooleanAttribute('create_image_tag');
  }
  public set createImageTag(value: boolean | cdktf.IResolvable) {
    this._createImageTag = value;
  }
  public resetCreateImageTag() {
    this._createImageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createImageTagInput() {
    return this._createImageTag;
  }

  // delete_image - computed: false, optional: true, required: false
  private _deleteImage?: boolean | cdktf.IResolvable; 
  public get deleteImage() {
    return this.getBooleanAttribute('delete_image');
  }
  public set deleteImage(value: boolean | cdktf.IResolvable) {
    this._deleteImage = value;
  }
  public resetDeleteImage() {
    this._deleteImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteImageInput() {
    return this._deleteImage;
  }

  // delete_image_tag - computed: false, optional: true, required: false
  private _deleteImageTag?: boolean | cdktf.IResolvable; 
  public get deleteImageTag() {
    return this.getBooleanAttribute('delete_image_tag');
  }
  public set deleteImageTag(value: boolean | cdktf.IResolvable) {
    this._deleteImageTag = value;
  }
  public resetDeleteImageTag() {
    this._deleteImageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteImageTagInput() {
    return this._deleteImageTag;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface FunctionTriggerDataStreams {
  /**
  * Batch Duration in seconds for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Batch Size for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Stream database for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#database FunctionTrigger#database}
  */
  readonly database: string;
  /**
  * Service account ID to access data stream for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#service_account_id FunctionTrigger#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Stream name for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#stream_name FunctionTrigger#stream_name}
  */
  readonly streamName: string;
}

export function functionTriggerDataStreamsToTerraform(struct?: FunctionTriggerDataStreamsOutputReference | FunctionTriggerDataStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    database: cdktf.stringToTerraform(struct!.database),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function functionTriggerDataStreamsToHclTerraform(struct?: FunctionTriggerDataStreamsOutputReference | FunctionTriggerDataStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_cutoff: {
      value: cdktf.stringToHclTerraform(struct!.batchCutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerDataStreamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerDataStreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerDataStreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._database = undefined;
      this._serviceAccountId = undefined;
      this._streamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._database = value.database;
      this._serviceAccountId = value.serviceAccountId;
      this._streamName = value.streamName;
    }
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}
export interface FunctionTriggerDlq {
  /**
  * ID of Dead Letter Queue for Trigger (Queue ARN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#queue_id FunctionTrigger#queue_id}
  */
  readonly queueId: string;
  /**
  * Service Account ID for Dead Letter Queue for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#service_account_id FunctionTrigger#service_account_id}
  */
  readonly serviceAccountId: string;
}

export function functionTriggerDlqToTerraform(struct?: FunctionTriggerDlqOutputReference | FunctionTriggerDlq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_id: cdktf.stringToTerraform(struct!.queueId),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function functionTriggerDlqToHclTerraform(struct?: FunctionTriggerDlqOutputReference | FunctionTriggerDlq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queue_id: {
      value: cdktf.stringToHclTerraform(struct!.queueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerDlqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerDlq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerDlq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queueId = undefined;
      this._serviceAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queueId = value.queueId;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface FunctionTriggerFunction {
  /**
  * Yandex Cloud Function ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#id FunctionTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Retry attempts for Yandex Cloud Function for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#retry_attempts FunctionTrigger#retry_attempts}
  */
  readonly retryAttempts?: string;
  /**
  * Retry interval in seconds for Yandex Cloud Function for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#retry_interval FunctionTrigger#retry_interval}
  */
  readonly retryInterval?: string;
  /**
  * Service account ID for Yandex Cloud Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#service_account_id FunctionTrigger#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Tag for Yandex Cloud Function for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#tag FunctionTrigger#tag}
  */
  readonly tag?: string;
}

export function functionTriggerFunctionToTerraform(struct?: FunctionTriggerFunctionOutputReference | FunctionTriggerFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    retry_attempts: cdktf.stringToTerraform(struct!.retryAttempts),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function functionTriggerFunctionToHclTerraform(struct?: FunctionTriggerFunctionOutputReference | FunctionTriggerFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_attempts: {
      value: cdktf.stringToHclTerraform(struct!.retryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._retryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAttempts = this._retryAttempts;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._retryAttempts = undefined;
      this._retryInterval = undefined;
      this._serviceAccountId = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._retryAttempts = value.retryAttempts;
      this._retryInterval = value.retryInterval;
      this._serviceAccountId = value.serviceAccountId;
      this._tag = value.tag;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // retry_attempts - computed: false, optional: true, required: false
  private _retryAttempts?: string; 
  public get retryAttempts() {
    return this.getStringAttribute('retry_attempts');
  }
  public set retryAttempts(value: string) {
    this._retryAttempts = value;
  }
  public resetRetryAttempts() {
    this._retryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAttemptsInput() {
    return this._retryAttempts;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface FunctionTriggerIot {
  /**
  * Batch Duration in seconds for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Batch Size for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * IoT Device ID for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#device_id FunctionTrigger#device_id}
  */
  readonly deviceId?: string;
  /**
  * IoT Registry ID for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#registry_id FunctionTrigger#registry_id}
  */
  readonly registryId: string;
  /**
  * IoT Topic for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#topic FunctionTrigger#topic}
  */
  readonly topic?: string;
}

export function functionTriggerIotToTerraform(struct?: FunctionTriggerIotOutputReference | FunctionTriggerIot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    registry_id: cdktf.stringToTerraform(struct!.registryId),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function functionTriggerIotToHclTerraform(struct?: FunctionTriggerIotOutputReference | FunctionTriggerIot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_cutoff: {
      value: cdktf.stringToHclTerraform(struct!.batchCutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_id: {
      value: cdktf.stringToHclTerraform(struct!.registryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerIotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerIot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._registryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryId = this._registryId;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerIot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._deviceId = undefined;
      this._registryId = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._deviceId = value.deviceId;
      this._registryId = value.registryId;
      this._topic = value.topic;
    }
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface FunctionTriggerLogGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#log_group_ids FunctionTrigger#log_group_ids}
  */
  readonly logGroupIds: string[];
}

export function functionTriggerLogGroupToTerraform(struct?: FunctionTriggerLogGroupOutputReference | FunctionTriggerLogGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    log_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logGroupIds),
  }
}


export function functionTriggerLogGroupToHclTerraform(struct?: FunctionTriggerLogGroupOutputReference | FunctionTriggerLogGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_cutoff: {
      value: cdktf.stringToHclTerraform(struct!.batchCutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerLogGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerLogGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._logGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupIds = this._logGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerLogGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._logGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._logGroupIds = value.logGroupIds;
    }
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // log_group_ids - computed: false, optional: false, required: true
  private _logGroupIds?: string[]; 
  public get logGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('log_group_ids'));
  }
  public set logGroupIds(value: string[]) {
    this._logGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdsInput() {
    return this._logGroupIds;
  }
}
export interface FunctionTriggerLogging {
  /**
  * Batch Duration in seconds for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Batch Size for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Logging group ID for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#group_id FunctionTrigger#group_id}
  */
  readonly groupId: string;
  /**
  * Logging level filter setting for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#levels FunctionTrigger#levels}
  */
  readonly levels?: string[];
  /**
  * Resource ID filter setting for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#resource_ids FunctionTrigger#resource_ids}
  */
  readonly resourceIds?: string[];
  /**
  * Resource type filter setting for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#resource_types FunctionTrigger#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Logging stream name filter setting for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#stream_names FunctionTrigger#stream_names}
  */
  readonly streamNames?: string[];
}

export function functionTriggerLoggingToTerraform(struct?: FunctionTriggerLoggingOutputReference | FunctionTriggerLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.levels),
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceIds),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
    stream_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamNames),
  }
}


export function functionTriggerLoggingToHclTerraform(struct?: FunctionTriggerLoggingOutputReference | FunctionTriggerLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_cutoff: {
      value: cdktf.stringToHclTerraform(struct!.batchCutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.levels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    stream_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._levels !== undefined) {
      hasAnyValues = true;
      internalValueResult.levels = this._levels;
    }
    if (this._resourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIds = this._resourceIds;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._streamNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamNames = this._streamNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._groupId = undefined;
      this._levels = undefined;
      this._resourceIds = undefined;
      this._resourceTypes = undefined;
      this._streamNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._groupId = value.groupId;
      this._levels = value.levels;
      this._resourceIds = value.resourceIds;
      this._resourceTypes = value.resourceTypes;
      this._streamNames = value.streamNames;
    }
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // levels - computed: false, optional: true, required: false
  private _levels?: string[]; 
  public get levels() {
    return cdktf.Fn.tolist(this.getListAttribute('levels'));
  }
  public set levels(value: string[]) {
    this._levels = value;
  }
  public resetLevels() {
    this._levels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelsInput() {
    return this._levels;
  }

  // resource_ids - computed: false, optional: true, required: false
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_ids'));
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  public resetResourceIds() {
    this._resourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds;
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_types'));
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // stream_names - computed: false, optional: true, required: false
  private _streamNames?: string[]; 
  public get streamNames() {
    return cdktf.Fn.tolist(this.getListAttribute('stream_names'));
  }
  public set streamNames(value: string[]) {
    this._streamNames = value;
  }
  public resetStreamNames() {
    this._streamNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNamesInput() {
    return this._streamNames;
  }
}
export interface FunctionTriggerMail {
  /**
  * Object Storage Bucket ID for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#attachments_bucket_id FunctionTrigger#attachments_bucket_id}
  */
  readonly attachmentsBucketId?: string;
  /**
  * Batch Duration in seconds for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Batch Size for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Service account ID to access object storage for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#service_account_id FunctionTrigger#service_account_id}
  */
  readonly serviceAccountId?: string;
}

export function functionTriggerMailToTerraform(struct?: FunctionTriggerMailOutputReference | FunctionTriggerMail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachments_bucket_id: cdktf.stringToTerraform(struct!.attachmentsBucketId),
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function functionTriggerMailToHclTerraform(struct?: FunctionTriggerMailOutputReference | FunctionTriggerMail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachments_bucket_id: {
      value: cdktf.stringToHclTerraform(struct!.attachmentsBucketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_cutoff: {
      value: cdktf.stringToHclTerraform(struct!.batchCutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerMailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerMail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentsBucketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentsBucketId = this._attachmentsBucketId;
    }
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerMail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attachmentsBucketId = undefined;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._serviceAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attachmentsBucketId = value.attachmentsBucketId;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // attachments_bucket_id - computed: false, optional: true, required: false
  private _attachmentsBucketId?: string; 
  public get attachmentsBucketId() {
    return this.getStringAttribute('attachments_bucket_id');
  }
  public set attachmentsBucketId(value: string) {
    this._attachmentsBucketId = value;
  }
  public resetAttachmentsBucketId() {
    this._attachmentsBucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsBucketIdInput() {
    return this._attachmentsBucketId;
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface FunctionTriggerMessageQueue {
  /**
  * Batch Duration in seconds for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Batch Size for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Message Queue ID for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#queue_id FunctionTrigger#queue_id}
  */
  readonly queueId: string;
  /**
  * Message Queue Service Account ID for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#service_account_id FunctionTrigger#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Visibility timeout for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#visibility_timeout FunctionTrigger#visibility_timeout}
  */
  readonly visibilityTimeout?: string;
}

export function functionTriggerMessageQueueToTerraform(struct?: FunctionTriggerMessageQueueOutputReference | FunctionTriggerMessageQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    queue_id: cdktf.stringToTerraform(struct!.queueId),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    visibility_timeout: cdktf.stringToTerraform(struct!.visibilityTimeout),
  }
}


export function functionTriggerMessageQueueToHclTerraform(struct?: FunctionTriggerMessageQueueOutputReference | FunctionTriggerMessageQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_cutoff: {
      value: cdktf.stringToHclTerraform(struct!.batchCutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_id: {
      value: cdktf.stringToHclTerraform(struct!.queueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility_timeout: {
      value: cdktf.stringToHclTerraform(struct!.visibilityTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerMessageQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerMessageQueue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._visibilityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityTimeout = this._visibilityTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerMessageQueue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._queueId = undefined;
      this._serviceAccountId = undefined;
      this._visibilityTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._queueId = value.queueId;
      this._serviceAccountId = value.serviceAccountId;
      this._visibilityTimeout = value.visibilityTimeout;
    }
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // visibility_timeout - computed: false, optional: true, required: false
  private _visibilityTimeout?: string; 
  public get visibilityTimeout() {
    return this.getStringAttribute('visibility_timeout');
  }
  public set visibilityTimeout(value: string) {
    this._visibilityTimeout = value;
  }
  public resetVisibilityTimeout() {
    this._visibilityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutInput() {
    return this._visibilityTimeout;
  }
}
export interface FunctionTriggerObjectStorage {
  /**
  * Batch Duration in seconds for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_cutoff FunctionTrigger#batch_cutoff}
  */
  readonly batchCutoff: string;
  /**
  * Batch Size for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#batch_size FunctionTrigger#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Object Storage Bucket ID for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#bucket_id FunctionTrigger#bucket_id}
  */
  readonly bucketId: string;
  /**
  * Boolean flag for setting `create` event for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#create FunctionTrigger#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Boolean flag for setting `delete` event for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#delete FunctionTrigger#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Prefix for Object Storage for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#prefix FunctionTrigger#prefix}
  */
  readonly prefix?: string;
  /**
  * Suffix for Object Storage for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#suffix FunctionTrigger#suffix}
  */
  readonly suffix?: string;
  /**
  * Boolean flag for setting `update` event for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#update FunctionTrigger#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
}

export function functionTriggerObjectStorageToTerraform(struct?: FunctionTriggerObjectStorageOutputReference | FunctionTriggerObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_cutoff: cdktf.stringToTerraform(struct!.batchCutoff),
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    bucket_id: cdktf.stringToTerraform(struct!.bucketId),
    create: cdktf.booleanToTerraform(struct!.create),
    delete: cdktf.booleanToTerraform(struct!.delete),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    update: cdktf.booleanToTerraform(struct!.update),
  }
}


export function functionTriggerObjectStorageToHclTerraform(struct?: FunctionTriggerObjectStorageOutputReference | FunctionTriggerObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_cutoff: {
      value: cdktf.stringToHclTerraform(struct!.batchCutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_id: {
      value: cdktf.stringToHclTerraform(struct!.bucketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete: {
      value: cdktf.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.booleanToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerObjectStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerObjectStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCutoff = this._batchCutoff;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._bucketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketId = this._bucketId;
    }
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerObjectStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCutoff = undefined;
      this._batchSize = undefined;
      this._bucketId = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCutoff = value.batchCutoff;
      this._batchSize = value.batchSize;
      this._bucketId = value.bucketId;
      this._create = value.create;
      this._delete = value.delete;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
      this._update = value.update;
    }
  }

  // batch_cutoff - computed: false, optional: false, required: true
  private _batchCutoff?: string; 
  public get batchCutoff() {
    return this.getStringAttribute('batch_cutoff');
  }
  public set batchCutoff(value: string) {
    this._batchCutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCutoffInput() {
    return this._batchCutoff;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
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
export interface FunctionTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#create FunctionTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#delete FunctionTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#update FunctionTrigger#update}
  */
  readonly update?: string;
}

export function functionTriggerTimeoutsToTerraform(struct?: FunctionTriggerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function functionTriggerTimeoutsToHclTerraform(struct?: FunctionTriggerTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class FunctionTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FunctionTriggerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
export interface FunctionTriggerTimer {
  /**
  * Cron expression for timer for Yandex Cloud Functions Trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#cron_expression FunctionTrigger#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Payload to be passed to function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#payload FunctionTrigger#payload}
  */
  readonly payload?: string;
}

export function functionTriggerTimerToTerraform(struct?: FunctionTriggerTimerOutputReference | FunctionTriggerTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    payload: cdktf.stringToTerraform(struct!.payload),
  }
}


export function functionTriggerTimerToHclTerraform(struct?: FunctionTriggerTimerOutputReference | FunctionTriggerTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionTriggerTimerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionTriggerTimer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionTriggerTimer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._payload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._payload = value.payload;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger yandex_function_trigger}
*/
export class FunctionTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_function_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FunctionTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FunctionTrigger to import
  * @param importFromId The id of the existing FunctionTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FunctionTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_function_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/function_trigger yandex_function_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_function_trigger',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._container.internalValue = config.container;
    this._containerRegistry.internalValue = config.containerRegistry;
    this._dataStreams.internalValue = config.dataStreams;
    this._dlq.internalValue = config.dlq;
    this._function.internalValue = config.function;
    this._iot.internalValue = config.iot;
    this._logGroup.internalValue = config.logGroup;
    this._logging.internalValue = config.logging;
    this._mail.internalValue = config.mail;
    this._messageQueue.internalValue = config.messageQueue;
    this._objectStorage.internalValue = config.objectStorage;
    this._timeouts.internalValue = config.timeouts;
    this._timer.internalValue = config.timer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // container - computed: false, optional: true, required: false
  private _container = new FunctionTriggerContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: FunctionTriggerContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // container_registry - computed: false, optional: true, required: false
  private _containerRegistry = new FunctionTriggerContainerRegistryOutputReference(this, "container_registry");
  public get containerRegistry() {
    return this._containerRegistry;
  }
  public putContainerRegistry(value: FunctionTriggerContainerRegistry) {
    this._containerRegistry.internalValue = value;
  }
  public resetContainerRegistry() {
    this._containerRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryInput() {
    return this._containerRegistry.internalValue;
  }

  // data_streams - computed: false, optional: true, required: false
  private _dataStreams = new FunctionTriggerDataStreamsOutputReference(this, "data_streams");
  public get dataStreams() {
    return this._dataStreams;
  }
  public putDataStreams(value: FunctionTriggerDataStreams) {
    this._dataStreams.internalValue = value;
  }
  public resetDataStreams() {
    this._dataStreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamsInput() {
    return this._dataStreams.internalValue;
  }

  // dlq - computed: false, optional: true, required: false
  private _dlq = new FunctionTriggerDlqOutputReference(this, "dlq");
  public get dlq() {
    return this._dlq;
  }
  public putDlq(value: FunctionTriggerDlq) {
    this._dlq.internalValue = value;
  }
  public resetDlq() {
    this._dlq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlqInput() {
    return this._dlq.internalValue;
  }

  // function - computed: false, optional: true, required: false
  private _function = new FunctionTriggerFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: FunctionTriggerFunction) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // iot - computed: false, optional: true, required: false
  private _iot = new FunctionTriggerIotOutputReference(this, "iot");
  public get iot() {
    return this._iot;
  }
  public putIot(value: FunctionTriggerIot) {
    this._iot.internalValue = value;
  }
  public resetIot() {
    this._iot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotInput() {
    return this._iot.internalValue;
  }

  // log_group - computed: false, optional: true, required: false
  private _logGroup = new FunctionTriggerLogGroupOutputReference(this, "log_group");
  public get logGroup() {
    return this._logGroup;
  }
  public putLogGroup(value: FunctionTriggerLogGroup) {
    this._logGroup.internalValue = value;
  }
  public resetLogGroup() {
    this._logGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new FunctionTriggerLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: FunctionTriggerLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // mail - computed: false, optional: true, required: false
  private _mail = new FunctionTriggerMailOutputReference(this, "mail");
  public get mail() {
    return this._mail;
  }
  public putMail(value: FunctionTriggerMail) {
    this._mail.internalValue = value;
  }
  public resetMail() {
    this._mail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailInput() {
    return this._mail.internalValue;
  }

  // message_queue - computed: false, optional: true, required: false
  private _messageQueue = new FunctionTriggerMessageQueueOutputReference(this, "message_queue");
  public get messageQueue() {
    return this._messageQueue;
  }
  public putMessageQueue(value: FunctionTriggerMessageQueue) {
    this._messageQueue.internalValue = value;
  }
  public resetMessageQueue() {
    this._messageQueue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageQueueInput() {
    return this._messageQueue.internalValue;
  }

  // object_storage - computed: false, optional: true, required: false
  private _objectStorage = new FunctionTriggerObjectStorageOutputReference(this, "object_storage");
  public get objectStorage() {
    return this._objectStorage;
  }
  public putObjectStorage(value: FunctionTriggerObjectStorage) {
    this._objectStorage.internalValue = value;
  }
  public resetObjectStorage() {
    this._objectStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageInput() {
    return this._objectStorage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FunctionTriggerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FunctionTriggerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // timer - computed: false, optional: true, required: false
  private _timer = new FunctionTriggerTimerOutputReference(this, "timer");
  public get timer() {
    return this._timer;
  }
  public putTimer(value: FunctionTriggerTimer) {
    this._timer.internalValue = value;
  }
  public resetTimer() {
    this._timer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      container: functionTriggerContainerToTerraform(this._container.internalValue),
      container_registry: functionTriggerContainerRegistryToTerraform(this._containerRegistry.internalValue),
      data_streams: functionTriggerDataStreamsToTerraform(this._dataStreams.internalValue),
      dlq: functionTriggerDlqToTerraform(this._dlq.internalValue),
      function: functionTriggerFunctionToTerraform(this._function.internalValue),
      iot: functionTriggerIotToTerraform(this._iot.internalValue),
      log_group: functionTriggerLogGroupToTerraform(this._logGroup.internalValue),
      logging: functionTriggerLoggingToTerraform(this._logging.internalValue),
      mail: functionTriggerMailToTerraform(this._mail.internalValue),
      message_queue: functionTriggerMessageQueueToTerraform(this._messageQueue.internalValue),
      object_storage: functionTriggerObjectStorageToTerraform(this._objectStorage.internalValue),
      timeouts: functionTriggerTimeoutsToTerraform(this._timeouts.internalValue),
      timer: functionTriggerTimerToTerraform(this._timer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container: {
        value: functionTriggerContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerContainerList",
      },
      container_registry: {
        value: functionTriggerContainerRegistryToHclTerraform(this._containerRegistry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerContainerRegistryList",
      },
      data_streams: {
        value: functionTriggerDataStreamsToHclTerraform(this._dataStreams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerDataStreamsList",
      },
      dlq: {
        value: functionTriggerDlqToHclTerraform(this._dlq.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerDlqList",
      },
      function: {
        value: functionTriggerFunctionToHclTerraform(this._function.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerFunctionList",
      },
      iot: {
        value: functionTriggerIotToHclTerraform(this._iot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerIotList",
      },
      log_group: {
        value: functionTriggerLogGroupToHclTerraform(this._logGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerLogGroupList",
      },
      logging: {
        value: functionTriggerLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerLoggingList",
      },
      mail: {
        value: functionTriggerMailToHclTerraform(this._mail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerMailList",
      },
      message_queue: {
        value: functionTriggerMessageQueueToHclTerraform(this._messageQueue.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerMessageQueueList",
      },
      object_storage: {
        value: functionTriggerObjectStorageToHclTerraform(this._objectStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerObjectStorageList",
      },
      timeouts: {
        value: functionTriggerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FunctionTriggerTimeouts",
      },
      timer: {
        value: functionTriggerTimerToHclTerraform(this._timer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionTriggerTimerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
