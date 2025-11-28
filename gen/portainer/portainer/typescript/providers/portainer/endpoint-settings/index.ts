// https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#enable_gpu_management EndpointSettings#enable_gpu_management}
  */
  readonly enableGpuManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#enable_image_notification EndpointSettings#enable_image_notification}
  */
  readonly enableImageNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#endpoint_id EndpointSettings#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#id EndpointSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * change_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#change_window EndpointSettings#change_window}
  */
  readonly changeWindow?: EndpointSettingsChangeWindow;
  /**
  * deployment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#deployment_options EndpointSettings#deployment_options}
  */
  readonly deploymentOptions?: EndpointSettingsDeploymentOptions;
  /**
  * gpus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#gpus EndpointSettings#gpus}
  */
  readonly gpus?: EndpointSettingsGpus[] | cdktf.IResolvable;
  /**
  * security_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#security_settings EndpointSettings#security_settings}
  */
  readonly securitySettings?: EndpointSettingsSecuritySettings;
}
export interface EndpointSettingsChangeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#enabled EndpointSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#end_time EndpointSettings#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#start_time EndpointSettings#start_time}
  */
  readonly startTime?: string;
}

export function endpointSettingsChangeWindowToTerraform(struct?: EndpointSettingsChangeWindowOutputReference | EndpointSettingsChangeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function endpointSettingsChangeWindowToHclTerraform(struct?: EndpointSettingsChangeWindowOutputReference | EndpointSettingsChangeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSettingsChangeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EndpointSettingsChangeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSettingsChangeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface EndpointSettingsDeploymentOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#hide_add_with_form EndpointSettings#hide_add_with_form}
  */
  readonly hideAddWithForm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#hide_file_upload EndpointSettings#hide_file_upload}
  */
  readonly hideFileUpload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#hide_web_editor EndpointSettings#hide_web_editor}
  */
  readonly hideWebEditor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#override_global_options EndpointSettings#override_global_options}
  */
  readonly overrideGlobalOptions?: boolean | cdktf.IResolvable;
}

export function endpointSettingsDeploymentOptionsToTerraform(struct?: EndpointSettingsDeploymentOptionsOutputReference | EndpointSettingsDeploymentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide_add_with_form: cdktf.booleanToTerraform(struct!.hideAddWithForm),
    hide_file_upload: cdktf.booleanToTerraform(struct!.hideFileUpload),
    hide_web_editor: cdktf.booleanToTerraform(struct!.hideWebEditor),
    override_global_options: cdktf.booleanToTerraform(struct!.overrideGlobalOptions),
  }
}


export function endpointSettingsDeploymentOptionsToHclTerraform(struct?: EndpointSettingsDeploymentOptionsOutputReference | EndpointSettingsDeploymentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide_add_with_form: {
      value: cdktf.booleanToHclTerraform(struct!.hideAddWithForm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_file_upload: {
      value: cdktf.booleanToHclTerraform(struct!.hideFileUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_web_editor: {
      value: cdktf.booleanToHclTerraform(struct!.hideWebEditor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_global_options: {
      value: cdktf.booleanToHclTerraform(struct!.overrideGlobalOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSettingsDeploymentOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EndpointSettingsDeploymentOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hideAddWithForm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideAddWithForm = this._hideAddWithForm;
    }
    if (this._hideFileUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideFileUpload = this._hideFileUpload;
    }
    if (this._hideWebEditor !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideWebEditor = this._hideWebEditor;
    }
    if (this._overrideGlobalOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideGlobalOptions = this._overrideGlobalOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSettingsDeploymentOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hideAddWithForm = undefined;
      this._hideFileUpload = undefined;
      this._hideWebEditor = undefined;
      this._overrideGlobalOptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hideAddWithForm = value.hideAddWithForm;
      this._hideFileUpload = value.hideFileUpload;
      this._hideWebEditor = value.hideWebEditor;
      this._overrideGlobalOptions = value.overrideGlobalOptions;
    }
  }

  // hide_add_with_form - computed: false, optional: true, required: false
  private _hideAddWithForm?: boolean | cdktf.IResolvable; 
  public get hideAddWithForm() {
    return this.getBooleanAttribute('hide_add_with_form');
  }
  public set hideAddWithForm(value: boolean | cdktf.IResolvable) {
    this._hideAddWithForm = value;
  }
  public resetHideAddWithForm() {
    this._hideAddWithForm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideAddWithFormInput() {
    return this._hideAddWithForm;
  }

  // hide_file_upload - computed: false, optional: true, required: false
  private _hideFileUpload?: boolean | cdktf.IResolvable; 
  public get hideFileUpload() {
    return this.getBooleanAttribute('hide_file_upload');
  }
  public set hideFileUpload(value: boolean | cdktf.IResolvable) {
    this._hideFileUpload = value;
  }
  public resetHideFileUpload() {
    this._hideFileUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideFileUploadInput() {
    return this._hideFileUpload;
  }

  // hide_web_editor - computed: false, optional: true, required: false
  private _hideWebEditor?: boolean | cdktf.IResolvable; 
  public get hideWebEditor() {
    return this.getBooleanAttribute('hide_web_editor');
  }
  public set hideWebEditor(value: boolean | cdktf.IResolvable) {
    this._hideWebEditor = value;
  }
  public resetHideWebEditor() {
    this._hideWebEditor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideWebEditorInput() {
    return this._hideWebEditor;
  }

  // override_global_options - computed: false, optional: true, required: false
  private _overrideGlobalOptions?: boolean | cdktf.IResolvable; 
  public get overrideGlobalOptions() {
    return this.getBooleanAttribute('override_global_options');
  }
  public set overrideGlobalOptions(value: boolean | cdktf.IResolvable) {
    this._overrideGlobalOptions = value;
  }
  public resetOverrideGlobalOptions() {
    this._overrideGlobalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideGlobalOptionsInput() {
    return this._overrideGlobalOptions;
  }
}
export interface EndpointSettingsGpus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#name EndpointSettings#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#value EndpointSettings#value}
  */
  readonly value: string;
}

export function endpointSettingsGpusToTerraform(struct?: EndpointSettingsGpus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSettingsGpusToHclTerraform(struct?: EndpointSettingsGpus | cdktf.IResolvable): any {
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

export class EndpointSettingsGpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSettingsGpus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSettingsGpus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSettingsGpusList extends cdktf.ComplexList {
  public internalValue? : EndpointSettingsGpus[] | cdktf.IResolvable

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
  public get(index: number): EndpointSettingsGpusOutputReference {
    return new EndpointSettingsGpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSettingsSecuritySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#allow_bind_mounts EndpointSettings#allow_bind_mounts}
  */
  readonly allowBindMounts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#allow_container_capabilities EndpointSettings#allow_container_capabilities}
  */
  readonly allowContainerCapabilities?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#allow_device_mapping EndpointSettings#allow_device_mapping}
  */
  readonly allowDeviceMapping?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#allow_host_namespace EndpointSettings#allow_host_namespace}
  */
  readonly allowHostNamespace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#allow_privileged_mode EndpointSettings#allow_privileged_mode}
  */
  readonly allowPrivilegedMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#allow_stack_management EndpointSettings#allow_stack_management}
  */
  readonly allowStackManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#allow_sysctl_setting EndpointSettings#allow_sysctl_setting}
  */
  readonly allowSysctlSetting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#allow_volume_browser EndpointSettings#allow_volume_browser}
  */
  readonly allowVolumeBrowser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#enable_host_management EndpointSettings#enable_host_management}
  */
  readonly enableHostManagement?: boolean | cdktf.IResolvable;
}

export function endpointSettingsSecuritySettingsToTerraform(struct?: EndpointSettingsSecuritySettingsOutputReference | EndpointSettingsSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_bind_mounts: cdktf.booleanToTerraform(struct!.allowBindMounts),
    allow_container_capabilities: cdktf.booleanToTerraform(struct!.allowContainerCapabilities),
    allow_device_mapping: cdktf.booleanToTerraform(struct!.allowDeviceMapping),
    allow_host_namespace: cdktf.booleanToTerraform(struct!.allowHostNamespace),
    allow_privileged_mode: cdktf.booleanToTerraform(struct!.allowPrivilegedMode),
    allow_stack_management: cdktf.booleanToTerraform(struct!.allowStackManagement),
    allow_sysctl_setting: cdktf.booleanToTerraform(struct!.allowSysctlSetting),
    allow_volume_browser: cdktf.booleanToTerraform(struct!.allowVolumeBrowser),
    enable_host_management: cdktf.booleanToTerraform(struct!.enableHostManagement),
  }
}


export function endpointSettingsSecuritySettingsToHclTerraform(struct?: EndpointSettingsSecuritySettingsOutputReference | EndpointSettingsSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_bind_mounts: {
      value: cdktf.booleanToHclTerraform(struct!.allowBindMounts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_container_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.allowContainerCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_device_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.allowDeviceMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_host_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.allowHostNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_privileged_mode: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegedMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_stack_management: {
      value: cdktf.booleanToHclTerraform(struct!.allowStackManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_sysctl_setting: {
      value: cdktf.booleanToHclTerraform(struct!.allowSysctlSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_volume_browser: {
      value: cdktf.booleanToHclTerraform(struct!.allowVolumeBrowser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_host_management: {
      value: cdktf.booleanToHclTerraform(struct!.enableHostManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSettingsSecuritySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EndpointSettingsSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowBindMounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowBindMounts = this._allowBindMounts;
    }
    if (this._allowContainerCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowContainerCapabilities = this._allowContainerCapabilities;
    }
    if (this._allowDeviceMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDeviceMapping = this._allowDeviceMapping;
    }
    if (this._allowHostNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHostNamespace = this._allowHostNamespace;
    }
    if (this._allowPrivilegedMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegedMode = this._allowPrivilegedMode;
    }
    if (this._allowStackManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStackManagement = this._allowStackManagement;
    }
    if (this._allowSysctlSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSysctlSetting = this._allowSysctlSetting;
    }
    if (this._allowVolumeBrowser !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowVolumeBrowser = this._allowVolumeBrowser;
    }
    if (this._enableHostManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHostManagement = this._enableHostManagement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSettingsSecuritySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowBindMounts = undefined;
      this._allowContainerCapabilities = undefined;
      this._allowDeviceMapping = undefined;
      this._allowHostNamespace = undefined;
      this._allowPrivilegedMode = undefined;
      this._allowStackManagement = undefined;
      this._allowSysctlSetting = undefined;
      this._allowVolumeBrowser = undefined;
      this._enableHostManagement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowBindMounts = value.allowBindMounts;
      this._allowContainerCapabilities = value.allowContainerCapabilities;
      this._allowDeviceMapping = value.allowDeviceMapping;
      this._allowHostNamespace = value.allowHostNamespace;
      this._allowPrivilegedMode = value.allowPrivilegedMode;
      this._allowStackManagement = value.allowStackManagement;
      this._allowSysctlSetting = value.allowSysctlSetting;
      this._allowVolumeBrowser = value.allowVolumeBrowser;
      this._enableHostManagement = value.enableHostManagement;
    }
  }

  // allow_bind_mounts - computed: false, optional: true, required: false
  private _allowBindMounts?: boolean | cdktf.IResolvable; 
  public get allowBindMounts() {
    return this.getBooleanAttribute('allow_bind_mounts');
  }
  public set allowBindMounts(value: boolean | cdktf.IResolvable) {
    this._allowBindMounts = value;
  }
  public resetAllowBindMounts() {
    this._allowBindMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBindMountsInput() {
    return this._allowBindMounts;
  }

  // allow_container_capabilities - computed: false, optional: true, required: false
  private _allowContainerCapabilities?: boolean | cdktf.IResolvable; 
  public get allowContainerCapabilities() {
    return this.getBooleanAttribute('allow_container_capabilities');
  }
  public set allowContainerCapabilities(value: boolean | cdktf.IResolvable) {
    this._allowContainerCapabilities = value;
  }
  public resetAllowContainerCapabilities() {
    this._allowContainerCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowContainerCapabilitiesInput() {
    return this._allowContainerCapabilities;
  }

  // allow_device_mapping - computed: false, optional: true, required: false
  private _allowDeviceMapping?: boolean | cdktf.IResolvable; 
  public get allowDeviceMapping() {
    return this.getBooleanAttribute('allow_device_mapping');
  }
  public set allowDeviceMapping(value: boolean | cdktf.IResolvable) {
    this._allowDeviceMapping = value;
  }
  public resetAllowDeviceMapping() {
    this._allowDeviceMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeviceMappingInput() {
    return this._allowDeviceMapping;
  }

  // allow_host_namespace - computed: false, optional: true, required: false
  private _allowHostNamespace?: boolean | cdktf.IResolvable; 
  public get allowHostNamespace() {
    return this.getBooleanAttribute('allow_host_namespace');
  }
  public set allowHostNamespace(value: boolean | cdktf.IResolvable) {
    this._allowHostNamespace = value;
  }
  public resetAllowHostNamespace() {
    this._allowHostNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHostNamespaceInput() {
    return this._allowHostNamespace;
  }

  // allow_privileged_mode - computed: false, optional: true, required: false
  private _allowPrivilegedMode?: boolean | cdktf.IResolvable; 
  public get allowPrivilegedMode() {
    return this.getBooleanAttribute('allow_privileged_mode');
  }
  public set allowPrivilegedMode(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegedMode = value;
  }
  public resetAllowPrivilegedMode() {
    this._allowPrivilegedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegedModeInput() {
    return this._allowPrivilegedMode;
  }

  // allow_stack_management - computed: false, optional: true, required: false
  private _allowStackManagement?: boolean | cdktf.IResolvable; 
  public get allowStackManagement() {
    return this.getBooleanAttribute('allow_stack_management');
  }
  public set allowStackManagement(value: boolean | cdktf.IResolvable) {
    this._allowStackManagement = value;
  }
  public resetAllowStackManagement() {
    this._allowStackManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStackManagementInput() {
    return this._allowStackManagement;
  }

  // allow_sysctl_setting - computed: false, optional: true, required: false
  private _allowSysctlSetting?: boolean | cdktf.IResolvable; 
  public get allowSysctlSetting() {
    return this.getBooleanAttribute('allow_sysctl_setting');
  }
  public set allowSysctlSetting(value: boolean | cdktf.IResolvable) {
    this._allowSysctlSetting = value;
  }
  public resetAllowSysctlSetting() {
    this._allowSysctlSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSysctlSettingInput() {
    return this._allowSysctlSetting;
  }

  // allow_volume_browser - computed: false, optional: true, required: false
  private _allowVolumeBrowser?: boolean | cdktf.IResolvable; 
  public get allowVolumeBrowser() {
    return this.getBooleanAttribute('allow_volume_browser');
  }
  public set allowVolumeBrowser(value: boolean | cdktf.IResolvable) {
    this._allowVolumeBrowser = value;
  }
  public resetAllowVolumeBrowser() {
    this._allowVolumeBrowser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVolumeBrowserInput() {
    return this._allowVolumeBrowser;
  }

  // enable_host_management - computed: false, optional: true, required: false
  private _enableHostManagement?: boolean | cdktf.IResolvable; 
  public get enableHostManagement() {
    return this.getBooleanAttribute('enable_host_management');
  }
  public set enableHostManagement(value: boolean | cdktf.IResolvable) {
    this._enableHostManagement = value;
  }
  public resetEnableHostManagement() {
    this._enableHostManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHostManagementInput() {
    return this._enableHostManagement;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings portainer_endpoint_settings}
*/
export class EndpointSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_endpoint_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointSettings to import
  * @param importFromId The id of the existing EndpointSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_endpoint_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/endpoint_settings portainer_endpoint_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_endpoint_settings',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.19.0',
        providerVersionConstraint: '1.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableGpuManagement = config.enableGpuManagement;
    this._enableImageNotification = config.enableImageNotification;
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._changeWindow.internalValue = config.changeWindow;
    this._deploymentOptions.internalValue = config.deploymentOptions;
    this._gpus.internalValue = config.gpus;
    this._securitySettings.internalValue = config.securitySettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_gpu_management - computed: false, optional: true, required: false
  private _enableGpuManagement?: boolean | cdktf.IResolvable; 
  public get enableGpuManagement() {
    return this.getBooleanAttribute('enable_gpu_management');
  }
  public set enableGpuManagement(value: boolean | cdktf.IResolvable) {
    this._enableGpuManagement = value;
  }
  public resetEnableGpuManagement() {
    this._enableGpuManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGpuManagementInput() {
    return this._enableGpuManagement;
  }

  // enable_image_notification - computed: false, optional: true, required: false
  private _enableImageNotification?: boolean | cdktf.IResolvable; 
  public get enableImageNotification() {
    return this.getBooleanAttribute('enable_image_notification');
  }
  public set enableImageNotification(value: boolean | cdktf.IResolvable) {
    this._enableImageNotification = value;
  }
  public resetEnableImageNotification() {
    this._enableImageNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImageNotificationInput() {
    return this._enableImageNotification;
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // change_window - computed: false, optional: true, required: false
  private _changeWindow = new EndpointSettingsChangeWindowOutputReference(this, "change_window");
  public get changeWindow() {
    return this._changeWindow;
  }
  public putChangeWindow(value: EndpointSettingsChangeWindow) {
    this._changeWindow.internalValue = value;
  }
  public resetChangeWindow() {
    this._changeWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeWindowInput() {
    return this._changeWindow.internalValue;
  }

  // deployment_options - computed: false, optional: true, required: false
  private _deploymentOptions = new EndpointSettingsDeploymentOptionsOutputReference(this, "deployment_options");
  public get deploymentOptions() {
    return this._deploymentOptions;
  }
  public putDeploymentOptions(value: EndpointSettingsDeploymentOptions) {
    this._deploymentOptions.internalValue = value;
  }
  public resetDeploymentOptions() {
    this._deploymentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentOptionsInput() {
    return this._deploymentOptions.internalValue;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus = new EndpointSettingsGpusList(this, "gpus", false);
  public get gpus() {
    return this._gpus;
  }
  public putGpus(value: EndpointSettingsGpus[] | cdktf.IResolvable) {
    this._gpus.internalValue = value;
  }
  public resetGpus() {
    this._gpus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus.internalValue;
  }

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings = new EndpointSettingsSecuritySettingsOutputReference(this, "security_settings");
  public get securitySettings() {
    return this._securitySettings;
  }
  public putSecuritySettings(value: EndpointSettingsSecuritySettings) {
    this._securitySettings.internalValue = value;
  }
  public resetSecuritySettings() {
    this._securitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_gpu_management: cdktf.booleanToTerraform(this._enableGpuManagement),
      enable_image_notification: cdktf.booleanToTerraform(this._enableImageNotification),
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      change_window: endpointSettingsChangeWindowToTerraform(this._changeWindow.internalValue),
      deployment_options: endpointSettingsDeploymentOptionsToTerraform(this._deploymentOptions.internalValue),
      gpus: cdktf.listMapper(endpointSettingsGpusToTerraform, true)(this._gpus.internalValue),
      security_settings: endpointSettingsSecuritySettingsToTerraform(this._securitySettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_gpu_management: {
        value: cdktf.booleanToHclTerraform(this._enableGpuManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_image_notification: {
        value: cdktf.booleanToHclTerraform(this._enableImageNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_window: {
        value: endpointSettingsChangeWindowToHclTerraform(this._changeWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointSettingsChangeWindowList",
      },
      deployment_options: {
        value: endpointSettingsDeploymentOptionsToHclTerraform(this._deploymentOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointSettingsDeploymentOptionsList",
      },
      gpus: {
        value: cdktf.listMapperHcl(endpointSettingsGpusToHclTerraform, true)(this._gpus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointSettingsGpusList",
      },
      security_settings: {
        value: endpointSettingsSecuritySettingsToHclTerraform(this._securitySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointSettingsSecuritySettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
