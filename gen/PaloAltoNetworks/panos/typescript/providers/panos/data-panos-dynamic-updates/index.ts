// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosDynamicUpdatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#location DataPanosDynamicUpdates#location}
  */
  readonly location: DataPanosDynamicUpdatesLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#update_schedule DataPanosDynamicUpdates#update_schedule}
  */
  readonly updateSchedule?: DataPanosDynamicUpdatesUpdateSchedule;
}
export interface DataPanosDynamicUpdatesLocationSystem {
  /**
  * The NGFW device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#ngfw_device DataPanosDynamicUpdates#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosDynamicUpdatesLocationSystemToTerraform(struct?: DataPanosDynamicUpdatesLocationSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosDynamicUpdatesLocationSystemToHclTerraform(struct?: DataPanosDynamicUpdatesLocationSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesLocationSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesLocationSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesLocationSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface DataPanosDynamicUpdatesLocationTemplate {
  /**
  * The template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#name DataPanosDynamicUpdates#name}
  */
  readonly name?: string;
  /**
  * The NGFW device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#ngfw_device DataPanosDynamicUpdates#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#panorama_device DataPanosDynamicUpdates#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosDynamicUpdatesLocationTemplateToTerraform(struct?: DataPanosDynamicUpdatesLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosDynamicUpdatesLocationTemplateToHclTerraform(struct?: DataPanosDynamicUpdatesLocationTemplate | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosDynamicUpdatesLocationTemplateStack {
  /**
  * The template stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#name DataPanosDynamicUpdates#name}
  */
  readonly name?: string;
  /**
  * The NGFW device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#ngfw_device DataPanosDynamicUpdates#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#panorama_device DataPanosDynamicUpdates#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosDynamicUpdatesLocationTemplateStackToTerraform(struct?: DataPanosDynamicUpdatesLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosDynamicUpdatesLocationTemplateStackToHclTerraform(struct?: DataPanosDynamicUpdatesLocationTemplateStack | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosDynamicUpdatesLocation {
  /**
  * Located in a system settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#system DataPanosDynamicUpdates#system}
  */
  readonly systemAttribute?: DataPanosDynamicUpdatesLocationSystem;
  /**
  * Located in a specific template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#template DataPanosDynamicUpdates#template}
  */
  readonly template?: DataPanosDynamicUpdatesLocationTemplate;
  /**
  * Located in a specific template stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#template_stack DataPanosDynamicUpdates#template_stack}
  */
  readonly templateStack?: DataPanosDynamicUpdatesLocationTemplateStack;
}

export function dataPanosDynamicUpdatesLocationToTerraform(struct?: DataPanosDynamicUpdatesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system: dataPanosDynamicUpdatesLocationSystemToTerraform(struct!.systemAttribute),
    template: dataPanosDynamicUpdatesLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosDynamicUpdatesLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosDynamicUpdatesLocationToHclTerraform(struct?: DataPanosDynamicUpdatesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system: {
      value: dataPanosDynamicUpdatesLocationSystemToHclTerraform(struct!.systemAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesLocationSystem",
    },
    template: {
      value: dataPanosDynamicUpdatesLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesLocationTemplate",
    },
    template_stack: {
      value: dataPanosDynamicUpdatesLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._system?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._system.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._system.internalValue = value.systemAttribute;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // system - computed: false, optional: true, required: false
  private _system = new DataPanosDynamicUpdatesLocationSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: DataPanosDynamicUpdatesLocationSystem) {
    this._system.internalValue = value;
  }
  public resetSystemAttribute() {
    this._system.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosDynamicUpdatesLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosDynamicUpdatesLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new DataPanosDynamicUpdatesLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosDynamicUpdatesLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: string;
}

export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDailyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDailyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
}

export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNone {
}

export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNoneToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNoneToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#day_of_week DataPanosDynamicUpdates#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#daily DataPanosDynamicUpdates#daily}
  */
  readonly daily?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#hourly DataPanosDynamicUpdates#hourly}
  */
  readonly hourly?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#none DataPanosDynamicUpdates#none}
  */
  readonly none?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNone;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#sync_to_peer DataPanosDynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
  /**
  * ignore if release date is new (hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#threshold DataPanosDynamicUpdates#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#weekly DataPanosDynamicUpdates#weekly}
  */
  readonly weekly?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly;
}

export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDailyToTerraform(struct!.daily),
    hourly: dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyToTerraform(struct!.hourly),
    none: dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNoneToTerraform(struct!.none),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    weekly: dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDaily",
    },
    hourly: {
      value: dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourly",
    },
    none: {
      value: dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNone",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekly: {
      value: dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._none.internalValue = undefined;
      this._syncToPeer = undefined;
      this._threshold = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._hourly.internalValue = value.hourly;
      this._none.internalValue = value.none;
      this._syncToPeer = value.syncToPeer;
      this._threshold = value.threshold;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // hourly - computed: true, optional: true, required: false
  private _hourly = new DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAntiVirus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#recurring DataPanosDynamicUpdates#recurring}
  */
  readonly recurring?: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurring;
}

export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringToTerraform(struct!.recurring),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAntiVirusToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAntiVirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleAntiVirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAntiVirus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurring.internalValue = value.recurring;
    }
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirusRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: string;
}

export function dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDailyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDailyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNone {
}

export function dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNoneToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNoneToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#day_of_week DataPanosDynamicUpdates#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#daily DataPanosDynamicUpdates#daily}
  */
  readonly daily?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#none DataPanosDynamicUpdates#none}
  */
  readonly none?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNone;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#sync_to_peer DataPanosDynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
  /**
  * ignore if release date is new (hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#threshold DataPanosDynamicUpdates#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#weekly DataPanosDynamicUpdates#weekly}
  */
  readonly weekly?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeekly;
}

export function dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDailyToTerraform(struct!.daily),
    none: dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNoneToTerraform(struct!.none),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    weekly: dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDaily",
    },
    none: {
      value: dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNone",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekly: {
      value: dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._none.internalValue = undefined;
      this._syncToPeer = undefined;
      this._threshold = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._none.internalValue = value.none;
      this._syncToPeer = value.syncToPeer;
      this._threshold = value.threshold;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleAppProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#recurring DataPanosDynamicUpdates#recurring}
  */
  readonly recurring?: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurring;
}

export function dataPanosDynamicUpdatesUpdateScheduleAppProfileToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAppProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringToTerraform(struct!.recurring),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleAppProfileToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleAppProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleAppProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleAppProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleAppProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurring.internalValue = value.recurring;
    }
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosDynamicUpdatesUpdateScheduleAppProfileRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: string;
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone {
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#day_of_week DataPanosDynamicUpdates#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#daily DataPanosDynamicUpdates#daily}
  */
  readonly daily?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#hourly DataPanosDynamicUpdates#hourly}
  */
  readonly hourly?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#none DataPanosDynamicUpdates#none}
  */
  readonly none?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#weekly DataPanosDynamicUpdates#weekly}
  */
  readonly weekly?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly;
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyToTerraform(struct!.daily),
    hourly: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyToTerraform(struct!.hourly),
    none: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneToTerraform(struct!.none),
    weekly: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily",
    },
    hourly: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly",
    },
    none: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone",
    },
    weekly: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._none.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._hourly.internalValue = value.hourly;
      this._none.internalValue = value.none;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // hourly - computed: true, optional: true, required: false
  private _hourly = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#recurring DataPanosDynamicUpdates#recurring}
  */
  readonly recurring?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring;
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringToTerraform(struct!.recurring),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurring.internalValue = value.recurring;
    }
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: string;
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone {
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#day_of_week DataPanosDynamicUpdates#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#daily DataPanosDynamicUpdates#daily}
  */
  readonly daily?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#hourly DataPanosDynamicUpdates#hourly}
  */
  readonly hourly?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#none DataPanosDynamicUpdates#none}
  */
  readonly none?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#weekly DataPanosDynamicUpdates#weekly}
  */
  readonly weekly?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly;
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyToTerraform(struct!.daily),
    hourly: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyToTerraform(struct!.hourly),
    none: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneToTerraform(struct!.none),
    weekly: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily",
    },
    hourly: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly",
    },
    none: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone",
    },
    weekly: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._none.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._hourly.internalValue = value.hourly;
      this._none.internalValue = value.none;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // hourly - computed: true, optional: true, required: false
  private _hourly = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#recurring DataPanosDynamicUpdates#recurring}
  */
  readonly recurring?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring;
}

export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringToTerraform(struct!.recurring),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurring.internalValue = value.recurring;
    }
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleStatisticsService {
  /**
  * Application Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#application_reports DataPanosDynamicUpdates#application_reports}
  */
  readonly applicationReports?: boolean | cdktf.IResolvable;
  /**
  * File Type Identification Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#file_identification_reports DataPanosDynamicUpdates#file_identification_reports}
  */
  readonly fileIdentificationReports?: boolean | cdktf.IResolvable;
  /**
  * Health and Performance Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#health_performance_reports DataPanosDynamicUpdates#health_performance_reports}
  */
  readonly healthPerformanceReports?: boolean | cdktf.IResolvable;
  /**
  * Passive DNS Monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#passive_dns_monitoring DataPanosDynamicUpdates#passive_dns_monitoring}
  */
  readonly passiveDnsMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Threat Prevention Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#threat_prevention_information DataPanosDynamicUpdates#threat_prevention_information}
  */
  readonly threatPreventionInformation?: boolean | cdktf.IResolvable;
  /**
  * Enable sending packet-captures with threat prevention information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#threat_prevention_pcap DataPanosDynamicUpdates#threat_prevention_pcap}
  */
  readonly threatPreventionPcap?: boolean | cdktf.IResolvable;
  /**
  * Threat Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#threat_prevention_reports DataPanosDynamicUpdates#threat_prevention_reports}
  */
  readonly threatPreventionReports?: boolean | cdktf.IResolvable;
  /**
  * URL Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#url_reports DataPanosDynamicUpdates#url_reports}
  */
  readonly urlReports?: boolean | cdktf.IResolvable;
}

export function dataPanosDynamicUpdatesUpdateScheduleStatisticsServiceToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleStatisticsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_reports: cdktf.booleanToTerraform(struct!.applicationReports),
    file_identification_reports: cdktf.booleanToTerraform(struct!.fileIdentificationReports),
    health_performance_reports: cdktf.booleanToTerraform(struct!.healthPerformanceReports),
    passive_dns_monitoring: cdktf.booleanToTerraform(struct!.passiveDnsMonitoring),
    threat_prevention_information: cdktf.booleanToTerraform(struct!.threatPreventionInformation),
    threat_prevention_pcap: cdktf.booleanToTerraform(struct!.threatPreventionPcap),
    threat_prevention_reports: cdktf.booleanToTerraform(struct!.threatPreventionReports),
    url_reports: cdktf.booleanToTerraform(struct!.urlReports),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleStatisticsServiceToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleStatisticsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_reports: {
      value: cdktf.booleanToHclTerraform(struct!.applicationReports),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_identification_reports: {
      value: cdktf.booleanToHclTerraform(struct!.fileIdentificationReports),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_performance_reports: {
      value: cdktf.booleanToHclTerraform(struct!.healthPerformanceReports),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passive_dns_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.passiveDnsMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threat_prevention_information: {
      value: cdktf.booleanToHclTerraform(struct!.threatPreventionInformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threat_prevention_pcap: {
      value: cdktf.booleanToHclTerraform(struct!.threatPreventionPcap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threat_prevention_reports: {
      value: cdktf.booleanToHclTerraform(struct!.threatPreventionReports),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url_reports: {
      value: cdktf.booleanToHclTerraform(struct!.urlReports),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleStatisticsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleStatisticsService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationReports = this._applicationReports;
    }
    if (this._fileIdentificationReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileIdentificationReports = this._fileIdentificationReports;
    }
    if (this._healthPerformanceReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthPerformanceReports = this._healthPerformanceReports;
    }
    if (this._passiveDnsMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveDnsMonitoring = this._passiveDnsMonitoring;
    }
    if (this._threatPreventionInformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatPreventionInformation = this._threatPreventionInformation;
    }
    if (this._threatPreventionPcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatPreventionPcap = this._threatPreventionPcap;
    }
    if (this._threatPreventionReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatPreventionReports = this._threatPreventionReports;
    }
    if (this._urlReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlReports = this._urlReports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleStatisticsService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationReports = undefined;
      this._fileIdentificationReports = undefined;
      this._healthPerformanceReports = undefined;
      this._passiveDnsMonitoring = undefined;
      this._threatPreventionInformation = undefined;
      this._threatPreventionPcap = undefined;
      this._threatPreventionReports = undefined;
      this._urlReports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationReports = value.applicationReports;
      this._fileIdentificationReports = value.fileIdentificationReports;
      this._healthPerformanceReports = value.healthPerformanceReports;
      this._passiveDnsMonitoring = value.passiveDnsMonitoring;
      this._threatPreventionInformation = value.threatPreventionInformation;
      this._threatPreventionPcap = value.threatPreventionPcap;
      this._threatPreventionReports = value.threatPreventionReports;
      this._urlReports = value.urlReports;
    }
  }

  // application_reports - computed: true, optional: true, required: false
  private _applicationReports?: boolean | cdktf.IResolvable; 
  public get applicationReports() {
    return this.getBooleanAttribute('application_reports');
  }
  public set applicationReports(value: boolean | cdktf.IResolvable) {
    this._applicationReports = value;
  }
  public resetApplicationReports() {
    this._applicationReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationReportsInput() {
    return this._applicationReports;
  }

  // file_identification_reports - computed: true, optional: true, required: false
  private _fileIdentificationReports?: boolean | cdktf.IResolvable; 
  public get fileIdentificationReports() {
    return this.getBooleanAttribute('file_identification_reports');
  }
  public set fileIdentificationReports(value: boolean | cdktf.IResolvable) {
    this._fileIdentificationReports = value;
  }
  public resetFileIdentificationReports() {
    this._fileIdentificationReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdentificationReportsInput() {
    return this._fileIdentificationReports;
  }

  // health_performance_reports - computed: true, optional: true, required: false
  private _healthPerformanceReports?: boolean | cdktf.IResolvable; 
  public get healthPerformanceReports() {
    return this.getBooleanAttribute('health_performance_reports');
  }
  public set healthPerformanceReports(value: boolean | cdktf.IResolvable) {
    this._healthPerformanceReports = value;
  }
  public resetHealthPerformanceReports() {
    this._healthPerformanceReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPerformanceReportsInput() {
    return this._healthPerformanceReports;
  }

  // passive_dns_monitoring - computed: true, optional: true, required: false
  private _passiveDnsMonitoring?: boolean | cdktf.IResolvable; 
  public get passiveDnsMonitoring() {
    return this.getBooleanAttribute('passive_dns_monitoring');
  }
  public set passiveDnsMonitoring(value: boolean | cdktf.IResolvable) {
    this._passiveDnsMonitoring = value;
  }
  public resetPassiveDnsMonitoring() {
    this._passiveDnsMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveDnsMonitoringInput() {
    return this._passiveDnsMonitoring;
  }

  // threat_prevention_information - computed: true, optional: true, required: false
  private _threatPreventionInformation?: boolean | cdktf.IResolvable; 
  public get threatPreventionInformation() {
    return this.getBooleanAttribute('threat_prevention_information');
  }
  public set threatPreventionInformation(value: boolean | cdktf.IResolvable) {
    this._threatPreventionInformation = value;
  }
  public resetThreatPreventionInformation() {
    this._threatPreventionInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatPreventionInformationInput() {
    return this._threatPreventionInformation;
  }

  // threat_prevention_pcap - computed: true, optional: true, required: false
  private _threatPreventionPcap?: boolean | cdktf.IResolvable; 
  public get threatPreventionPcap() {
    return this.getBooleanAttribute('threat_prevention_pcap');
  }
  public set threatPreventionPcap(value: boolean | cdktf.IResolvable) {
    this._threatPreventionPcap = value;
  }
  public resetThreatPreventionPcap() {
    this._threatPreventionPcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatPreventionPcapInput() {
    return this._threatPreventionPcap;
  }

  // threat_prevention_reports - computed: true, optional: true, required: false
  private _threatPreventionReports?: boolean | cdktf.IResolvable; 
  public get threatPreventionReports() {
    return this.getBooleanAttribute('threat_prevention_reports');
  }
  public set threatPreventionReports(value: boolean | cdktf.IResolvable) {
    this._threatPreventionReports = value;
  }
  public resetThreatPreventionReports() {
    this._threatPreventionReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatPreventionReportsInput() {
    return this._threatPreventionReports;
  }

  // url_reports - computed: true, optional: true, required: false
  private _urlReports?: boolean | cdktf.IResolvable; 
  public get urlReports() {
    return this.getBooleanAttribute('url_reports');
  }
  public set urlReports(value: boolean | cdktf.IResolvable) {
    this._urlReports = value;
  }
  public resetUrlReports() {
    this._urlReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlReportsInput() {
    return this._urlReports;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Disable new applications after installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#disable_new_content DataPanosDynamicUpdates#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDailyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
    disable_new_content: cdktf.booleanToTerraform(struct!.disableNewContent),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDailyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_new_content: {
      value: cdktf.booleanToHclTerraform(struct!.disableNewContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._disableNewContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNewContent = this._disableNewContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._disableNewContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._disableNewContent = value.disableNewContent;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // disable_new_content - computed: true, optional: true, required: false
  private _disableNewContent?: boolean | cdktf.IResolvable; 
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
  public set disableNewContent(value: boolean | cdktf.IResolvable) {
    this._disableNewContent = value;
  }
  public resetDisableNewContent() {
    this._disableNewContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewContentInput() {
    return this._disableNewContent;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past half-hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
  /**
  * Disable new applications after installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#disable_new_content DataPanosDynamicUpdates#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
    disable_new_content: cdktf.booleanToTerraform(struct!.disableNewContent),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_new_content: {
      value: cdktf.booleanToHclTerraform(struct!.disableNewContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._disableNewContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNewContent = this._disableNewContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._disableNewContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._disableNewContent = value.disableNewContent;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // disable_new_content - computed: true, optional: true, required: false
  private _disableNewContent?: boolean | cdktf.IResolvable; 
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
  public set disableNewContent(value: boolean | cdktf.IResolvable) {
    this._disableNewContent = value;
  }
  public resetDisableNewContent() {
    this._disableNewContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewContentInput() {
    return this._disableNewContent;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
  /**
  * Disable new applications after installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#disable_new_content DataPanosDynamicUpdates#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourlyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
    disable_new_content: cdktf.booleanToTerraform(struct!.disableNewContent),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourlyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_new_content: {
      value: cdktf.booleanToHclTerraform(struct!.disableNewContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._disableNewContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNewContent = this._disableNewContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._disableNewContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._disableNewContent = value.disableNewContent;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // disable_new_content - computed: true, optional: true, required: false
  private _disableNewContent?: boolean | cdktf.IResolvable; 
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
  public set disableNewContent(value: boolean | cdktf.IResolvable) {
    this._disableNewContent = value;
  }
  public resetDisableNewContent() {
    this._disableNewContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewContentInput() {
    return this._disableNewContent;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNone {
}

export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNoneToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNoneToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#day_of_week DataPanosDynamicUpdates#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Disable new applications after installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#disable_new_content DataPanosDynamicUpdates#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeeklyToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    disable_new_content: cdktf.booleanToTerraform(struct!.disableNewContent),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeeklyToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_new_content: {
      value: cdktf.booleanToHclTerraform(struct!.disableNewContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._disableNewContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNewContent = this._disableNewContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
      this._disableNewContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
      this._disableNewContent = value.disableNewContent;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // disable_new_content - computed: true, optional: true, required: false
  private _disableNewContent?: boolean | cdktf.IResolvable; 
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
  public set disableNewContent(value: boolean | cdktf.IResolvable) {
    this._disableNewContent = value;
  }
  public resetDisableNewContent() {
    this._disableNewContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewContentInput() {
    return this._disableNewContent;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleThreatsRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#daily DataPanosDynamicUpdates#daily}
  */
  readonly daily?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#every_30_mins DataPanosDynamicUpdates#every_30_mins}
  */
  readonly every30Mins?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#hourly DataPanosDynamicUpdates#hourly}
  */
  readonly hourly?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourly;
  /**
  * ignore new apps if release date is new (hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#new_app_threshold DataPanosDynamicUpdates#new_app_threshold}
  */
  readonly newAppThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#none DataPanosDynamicUpdates#none}
  */
  readonly none?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNone;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#sync_to_peer DataPanosDynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
  /**
  * ignore if release date is new (hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#threshold DataPanosDynamicUpdates#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#weekly DataPanosDynamicUpdates#weekly}
  */
  readonly weekly?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeekly;
}

export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDailyToTerraform(struct!.daily),
    every_30_mins: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsToTerraform(struct!.every30Mins),
    hourly: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourlyToTerraform(struct!.hourly),
    new_app_threshold: cdktf.numberToTerraform(struct!.newAppThreshold),
    none: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNoneToTerraform(struct!.none),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    weekly: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDaily",
    },
    every_30_mins: {
      value: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsToHclTerraform(struct!.every30Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins",
    },
    hourly: {
      value: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourly",
    },
    new_app_threshold: {
      value: cdktf.numberToHclTerraform(struct!.newAppThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    none: {
      value: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNone",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekly: {
      value: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleThreatsRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._every30Mins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.every30Mins = this._every30Mins?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._newAppThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.newAppThreshold = this._newAppThreshold;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._every30Mins.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._newAppThreshold = undefined;
      this._none.internalValue = undefined;
      this._syncToPeer = undefined;
      this._threshold = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._every30Mins.internalValue = value.every30Mins;
      this._hourly.internalValue = value.hourly;
      this._newAppThreshold = value.newAppThreshold;
      this._none.internalValue = value.none;
      this._syncToPeer = value.syncToPeer;
      this._threshold = value.threshold;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // every_30_mins - computed: true, optional: true, required: false
  private _every30Mins = new DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }
  public putEvery30Mins(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins) {
    this._every30Mins.internalValue = value;
  }
  public resetEvery30Mins() {
    this._every30Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every30MinsInput() {
    return this._every30Mins.internalValue;
  }

  // hourly - computed: true, optional: true, required: false
  private _hourly = new DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // new_app_threshold - computed: true, optional: true, required: false
  private _newAppThreshold?: number; 
  public get newAppThreshold() {
    return this.getNumberAttribute('new_app_threshold');
  }
  public set newAppThreshold(value: number) {
    this._newAppThreshold = value;
  }
  public resetNewAppThreshold() {
    this._newAppThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newAppThresholdInput() {
    return this._newAppThreshold;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleThreats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#recurring DataPanosDynamicUpdates#recurring}
  */
  readonly recurring?: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurring;
}

export function dataPanosDynamicUpdatesUpdateScheduleThreatsToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringToTerraform(struct!.recurring),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleThreatsToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleThreats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dataPanosDynamicUpdatesUpdateScheduleThreatsRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleThreatsRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleThreatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleThreats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleThreats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurring.internalValue = value.recurring;
    }
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosDynamicUpdatesUpdateScheduleThreatsRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosDynamicUpdatesUpdateScheduleThreatsRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes Past Quarter-Hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
}

export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes Past Half-Hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
}

export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes Past five minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
}

export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes Past Hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
}

export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNone {
}

export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNoneToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNoneToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#every_15_mins DataPanosDynamicUpdates#every_15_mins}
  */
  readonly every15Mins?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#every_30_mins DataPanosDynamicUpdates#every_30_mins}
  */
  readonly every30Mins?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#every_5_mins DataPanosDynamicUpdates#every_5_mins}
  */
  readonly every5Mins?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#every_hour DataPanosDynamicUpdates#every_hour}
  */
  readonly everyHour?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#none DataPanosDynamicUpdates#none}
  */
  readonly none?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNone;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#sync_to_peer DataPanosDynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every_15_mins: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsToTerraform(struct!.every15Mins),
    every_30_mins: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsToTerraform(struct!.every30Mins),
    every_5_mins: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsToTerraform(struct!.every5Mins),
    every_hour: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourToTerraform(struct!.everyHour),
    none: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNoneToTerraform(struct!.none),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every_15_mins: {
      value: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsToHclTerraform(struct!.every15Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins",
    },
    every_30_mins: {
      value: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsToHclTerraform(struct!.every30Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins",
    },
    every_5_mins: {
      value: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsToHclTerraform(struct!.every5Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins",
    },
    every_hour: {
      value: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourToHclTerraform(struct!.everyHour),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour",
    },
    none: {
      value: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNone",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._every15Mins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.every15Mins = this._every15Mins?.internalValue;
    }
    if (this._every30Mins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.every30Mins = this._every30Mins?.internalValue;
    }
    if (this._every5Mins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.every5Mins = this._every5Mins?.internalValue;
    }
    if (this._everyHour?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyHour = this._everyHour?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._every15Mins.internalValue = undefined;
      this._every30Mins.internalValue = undefined;
      this._every5Mins.internalValue = undefined;
      this._everyHour.internalValue = undefined;
      this._none.internalValue = undefined;
      this._syncToPeer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._every15Mins.internalValue = value.every15Mins;
      this._every30Mins.internalValue = value.every30Mins;
      this._every5Mins.internalValue = value.every5Mins;
      this._everyHour.internalValue = value.everyHour;
      this._none.internalValue = value.none;
      this._syncToPeer = value.syncToPeer;
    }
  }

  // every_15_mins - computed: true, optional: true, required: false
  private _every15Mins = new DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsOutputReference(this, "every_15_mins");
  public get every15Mins() {
    return this._every15Mins;
  }
  public putEvery15Mins(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins) {
    this._every15Mins.internalValue = value;
  }
  public resetEvery15Mins() {
    this._every15Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every15MinsInput() {
    return this._every15Mins.internalValue;
  }

  // every_30_mins - computed: true, optional: true, required: false
  private _every30Mins = new DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }
  public putEvery30Mins(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins) {
    this._every30Mins.internalValue = value;
  }
  public resetEvery30Mins() {
    this._every30Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every30MinsInput() {
    return this._every30Mins.internalValue;
  }

  // every_5_mins - computed: true, optional: true, required: false
  private _every5Mins = new DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsOutputReference(this, "every_5_mins");
  public get every5Mins() {
    return this._every5Mins;
  }
  public putEvery5Mins(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins) {
    this._every5Mins.internalValue = value;
  }
  public resetEvery5Mins() {
    this._every5Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every5MinsInput() {
    return this._every5Mins.internalValue;
  }

  // every_hour - computed: true, optional: true, required: false
  private _everyHour = new DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourOutputReference(this, "every_hour");
  public get everyHour() {
    return this._everyHour;
  }
  public putEveryHour(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour) {
    this._everyHour.internalValue = value;
  }
  public resetEveryHour() {
    this._everyHour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyHourInput() {
    return this._everyHour.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWfPrivate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#recurring DataPanosDynamicUpdates#recurring}
  */
  readonly recurring?: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurring;
}

export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringToTerraform(struct!.recurring),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWfPrivateToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWfPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWfPrivateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWfPrivate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurring.internalValue = value.recurring;
    }
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivateRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past quarter-hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#sync_to_peer DataPanosDynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._syncToPeer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._syncToPeer = value.syncToPeer;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past half-hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#sync_to_peer DataPanosDynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._syncToPeer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._syncToPeer = value.syncToPeer;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHour {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#at DataPanosDynamicUpdates#at}
  */
  readonly at?: number;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#sync_to_peer DataPanosDynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHourToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHourToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.numberToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._at = undefined;
      this._syncToPeer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._at = value.at;
      this._syncToPeer = value.syncToPeer;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#action DataPanosDynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#sync_to_peer DataPanosDynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMinToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMinToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_to_peer: {
      value: cdktf.booleanToHclTerraform(struct!.syncToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._syncToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncToPeer = this._syncToPeer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._syncToPeer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._syncToPeer = value.syncToPeer;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // sync_to_peer - computed: true, optional: true, required: false
  private _syncToPeer?: boolean | cdktf.IResolvable; 
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
  public set syncToPeer(value: boolean | cdktf.IResolvable) {
    this._syncToPeer = value;
  }
  public resetSyncToPeer() {
    this._syncToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncToPeerInput() {
    return this._syncToPeer;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNone {
}

export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNoneToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNoneToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTime {
}

export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTimeToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTimeToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWildfireRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#every_15_mins DataPanosDynamicUpdates#every_15_mins}
  */
  readonly every15Mins?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#every_30_mins DataPanosDynamicUpdates#every_30_mins}
  */
  readonly every30Mins?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#every_hour DataPanosDynamicUpdates#every_hour}
  */
  readonly everyHour?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHour;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#every_min DataPanosDynamicUpdates#every_min}
  */
  readonly everyMin?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#none DataPanosDynamicUpdates#none}
  */
  readonly none?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#real_time DataPanosDynamicUpdates#real_time}
  */
  readonly realTime?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTime;
}

export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every_15_mins: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsToTerraform(struct!.every15Mins),
    every_30_mins: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsToTerraform(struct!.every30Mins),
    every_hour: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHourToTerraform(struct!.everyHour),
    every_min: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMinToTerraform(struct!.everyMin),
    none: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNoneToTerraform(struct!.none),
    real_time: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTimeToTerraform(struct!.realTime),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every_15_mins: {
      value: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsToHclTerraform(struct!.every15Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins",
    },
    every_30_mins: {
      value: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsToHclTerraform(struct!.every30Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins",
    },
    every_hour: {
      value: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHourToHclTerraform(struct!.everyHour),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHour",
    },
    every_min: {
      value: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMinToHclTerraform(struct!.everyMin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMin",
    },
    none: {
      value: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNone",
    },
    real_time: {
      value: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTimeToHclTerraform(struct!.realTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWildfireRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._every15Mins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.every15Mins = this._every15Mins?.internalValue;
    }
    if (this._every30Mins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.every30Mins = this._every30Mins?.internalValue;
    }
    if (this._everyHour?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyHour = this._everyHour?.internalValue;
    }
    if (this._everyMin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyMin = this._everyMin?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._realTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realTime = this._realTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._every15Mins.internalValue = undefined;
      this._every30Mins.internalValue = undefined;
      this._everyHour.internalValue = undefined;
      this._everyMin.internalValue = undefined;
      this._none.internalValue = undefined;
      this._realTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._every15Mins.internalValue = value.every15Mins;
      this._every30Mins.internalValue = value.every30Mins;
      this._everyHour.internalValue = value.everyHour;
      this._everyMin.internalValue = value.everyMin;
      this._none.internalValue = value.none;
      this._realTime.internalValue = value.realTime;
    }
  }

  // every_15_mins - computed: true, optional: true, required: false
  private _every15Mins = new DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsOutputReference(this, "every_15_mins");
  public get every15Mins() {
    return this._every15Mins;
  }
  public putEvery15Mins(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins) {
    this._every15Mins.internalValue = value;
  }
  public resetEvery15Mins() {
    this._every15Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every15MinsInput() {
    return this._every15Mins.internalValue;
  }

  // every_30_mins - computed: true, optional: true, required: false
  private _every30Mins = new DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }
  public putEvery30Mins(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins) {
    this._every30Mins.internalValue = value;
  }
  public resetEvery30Mins() {
    this._every30Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every30MinsInput() {
    return this._every30Mins.internalValue;
  }

  // every_hour - computed: true, optional: true, required: false
  private _everyHour = new DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHourOutputReference(this, "every_hour");
  public get everyHour() {
    return this._everyHour;
  }
  public putEveryHour(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryHour) {
    this._everyHour.internalValue = value;
  }
  public resetEveryHour() {
    this._everyHour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyHourInput() {
    return this._everyHour.internalValue;
  }

  // every_min - computed: true, optional: true, required: false
  private _everyMin = new DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMinOutputReference(this, "every_min");
  public get everyMin() {
    return this._everyMin;
  }
  public putEveryMin(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringEveryMin) {
    this._everyMin.internalValue = value;
  }
  public resetEveryMin() {
    this._everyMin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyMinInput() {
    return this._everyMin.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // real_time - computed: true, optional: true, required: false
  private _realTime = new DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTimeOutputReference(this, "real_time");
  public get realTime() {
    return this._realTime;
  }
  public putRealTime(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringRealTime) {
    this._realTime.internalValue = value;
  }
  public resetRealTime() {
    this._realTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realTimeInput() {
    return this._realTime.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateScheduleWildfire {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#recurring DataPanosDynamicUpdates#recurring}
  */
  readonly recurring?: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurring;
}

export function dataPanosDynamicUpdatesUpdateScheduleWildfireToTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringToTerraform(struct!.recurring),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleWildfireToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateScheduleWildfire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dataPanosDynamicUpdatesUpdateScheduleWildfireRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWildfireRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleWildfireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateScheduleWildfire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateScheduleWildfire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurring.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurring.internalValue = value.recurring;
    }
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosDynamicUpdatesUpdateScheduleWildfireRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosDynamicUpdatesUpdateScheduleWildfireRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }
}
export interface DataPanosDynamicUpdatesUpdateSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#anti_virus DataPanosDynamicUpdates#anti_virus}
  */
  readonly antiVirus?: DataPanosDynamicUpdatesUpdateScheduleAntiVirus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#app_profile DataPanosDynamicUpdates#app_profile}
  */
  readonly appProfile?: DataPanosDynamicUpdatesUpdateScheduleAppProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#global_protect_clientless_vpn DataPanosDynamicUpdates#global_protect_clientless_vpn}
  */
  readonly globalProtectClientlessVpn?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#global_protect_datafile DataPanosDynamicUpdates#global_protect_datafile}
  */
  readonly globalProtectDatafile?: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#statistics_service DataPanosDynamicUpdates#statistics_service}
  */
  readonly statisticsService?: DataPanosDynamicUpdatesUpdateScheduleStatisticsService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#threats DataPanosDynamicUpdates#threats}
  */
  readonly threats?: DataPanosDynamicUpdatesUpdateScheduleThreats;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#wf_private DataPanosDynamicUpdates#wf_private}
  */
  readonly wfPrivate?: DataPanosDynamicUpdatesUpdateScheduleWfPrivate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#wildfire DataPanosDynamicUpdates#wildfire}
  */
  readonly wildfire?: DataPanosDynamicUpdatesUpdateScheduleWildfire;
}

export function dataPanosDynamicUpdatesUpdateScheduleToTerraform(struct?: DataPanosDynamicUpdatesUpdateSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_virus: dataPanosDynamicUpdatesUpdateScheduleAntiVirusToTerraform(struct!.antiVirus),
    app_profile: dataPanosDynamicUpdatesUpdateScheduleAppProfileToTerraform(struct!.appProfile),
    global_protect_clientless_vpn: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnToTerraform(struct!.globalProtectClientlessVpn),
    global_protect_datafile: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileToTerraform(struct!.globalProtectDatafile),
    statistics_service: dataPanosDynamicUpdatesUpdateScheduleStatisticsServiceToTerraform(struct!.statisticsService),
    threats: dataPanosDynamicUpdatesUpdateScheduleThreatsToTerraform(struct!.threats),
    wf_private: dataPanosDynamicUpdatesUpdateScheduleWfPrivateToTerraform(struct!.wfPrivate),
    wildfire: dataPanosDynamicUpdatesUpdateScheduleWildfireToTerraform(struct!.wildfire),
  }
}


export function dataPanosDynamicUpdatesUpdateScheduleToHclTerraform(struct?: DataPanosDynamicUpdatesUpdateSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_virus: {
      value: dataPanosDynamicUpdatesUpdateScheduleAntiVirusToHclTerraform(struct!.antiVirus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAntiVirus",
    },
    app_profile: {
      value: dataPanosDynamicUpdatesUpdateScheduleAppProfileToHclTerraform(struct!.appProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleAppProfile",
    },
    global_protect_clientless_vpn: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnToHclTerraform(struct!.globalProtectClientlessVpn),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn",
    },
    global_protect_datafile: {
      value: dataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileToHclTerraform(struct!.globalProtectDatafile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafile",
    },
    statistics_service: {
      value: dataPanosDynamicUpdatesUpdateScheduleStatisticsServiceToHclTerraform(struct!.statisticsService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleStatisticsService",
    },
    threats: {
      value: dataPanosDynamicUpdatesUpdateScheduleThreatsToHclTerraform(struct!.threats),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleThreats",
    },
    wf_private: {
      value: dataPanosDynamicUpdatesUpdateScheduleWfPrivateToHclTerraform(struct!.wfPrivate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWfPrivate",
    },
    wildfire: {
      value: dataPanosDynamicUpdatesUpdateScheduleWildfireToHclTerraform(struct!.wildfire),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDynamicUpdatesUpdateScheduleWildfire",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDynamicUpdatesUpdateScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDynamicUpdatesUpdateSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiVirus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiVirus = this._antiVirus?.internalValue;
    }
    if (this._appProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProfile = this._appProfile?.internalValue;
    }
    if (this._globalProtectClientlessVpn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalProtectClientlessVpn = this._globalProtectClientlessVpn?.internalValue;
    }
    if (this._globalProtectDatafile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalProtectDatafile = this._globalProtectDatafile?.internalValue;
    }
    if (this._statisticsService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticsService = this._statisticsService?.internalValue;
    }
    if (this._threats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threats = this._threats?.internalValue;
    }
    if (this._wfPrivate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wfPrivate = this._wfPrivate?.internalValue;
    }
    if (this._wildfire?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfire = this._wildfire?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDynamicUpdatesUpdateSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiVirus.internalValue = undefined;
      this._appProfile.internalValue = undefined;
      this._globalProtectClientlessVpn.internalValue = undefined;
      this._globalProtectDatafile.internalValue = undefined;
      this._statisticsService.internalValue = undefined;
      this._threats.internalValue = undefined;
      this._wfPrivate.internalValue = undefined;
      this._wildfire.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiVirus.internalValue = value.antiVirus;
      this._appProfile.internalValue = value.appProfile;
      this._globalProtectClientlessVpn.internalValue = value.globalProtectClientlessVpn;
      this._globalProtectDatafile.internalValue = value.globalProtectDatafile;
      this._statisticsService.internalValue = value.statisticsService;
      this._threats.internalValue = value.threats;
      this._wfPrivate.internalValue = value.wfPrivate;
      this._wildfire.internalValue = value.wildfire;
    }
  }

  // anti_virus - computed: true, optional: true, required: false
  private _antiVirus = new DataPanosDynamicUpdatesUpdateScheduleAntiVirusOutputReference(this, "anti_virus");
  public get antiVirus() {
    return this._antiVirus;
  }
  public putAntiVirus(value: DataPanosDynamicUpdatesUpdateScheduleAntiVirus) {
    this._antiVirus.internalValue = value;
  }
  public resetAntiVirus() {
    this._antiVirus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusInput() {
    return this._antiVirus.internalValue;
  }

  // app_profile - computed: true, optional: true, required: false
  private _appProfile = new DataPanosDynamicUpdatesUpdateScheduleAppProfileOutputReference(this, "app_profile");
  public get appProfile() {
    return this._appProfile;
  }
  public putAppProfile(value: DataPanosDynamicUpdatesUpdateScheduleAppProfile) {
    this._appProfile.internalValue = value;
  }
  public resetAppProfile() {
    this._appProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileInput() {
    return this._appProfile.internalValue;
  }

  // global_protect_clientless_vpn - computed: true, optional: true, required: false
  private _globalProtectClientlessVpn = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnOutputReference(this, "global_protect_clientless_vpn");
  public get globalProtectClientlessVpn() {
    return this._globalProtectClientlessVpn;
  }
  public putGlobalProtectClientlessVpn(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn) {
    this._globalProtectClientlessVpn.internalValue = value;
  }
  public resetGlobalProtectClientlessVpn() {
    this._globalProtectClientlessVpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectClientlessVpnInput() {
    return this._globalProtectClientlessVpn.internalValue;
  }

  // global_protect_datafile - computed: true, optional: true, required: false
  private _globalProtectDatafile = new DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafileOutputReference(this, "global_protect_datafile");
  public get globalProtectDatafile() {
    return this._globalProtectDatafile;
  }
  public putGlobalProtectDatafile(value: DataPanosDynamicUpdatesUpdateScheduleGlobalProtectDatafile) {
    this._globalProtectDatafile.internalValue = value;
  }
  public resetGlobalProtectDatafile() {
    this._globalProtectDatafile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectDatafileInput() {
    return this._globalProtectDatafile.internalValue;
  }

  // statistics_service - computed: true, optional: true, required: false
  private _statisticsService = new DataPanosDynamicUpdatesUpdateScheduleStatisticsServiceOutputReference(this, "statistics_service");
  public get statisticsService() {
    return this._statisticsService;
  }
  public putStatisticsService(value: DataPanosDynamicUpdatesUpdateScheduleStatisticsService) {
    this._statisticsService.internalValue = value;
  }
  public resetStatisticsService() {
    this._statisticsService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsServiceInput() {
    return this._statisticsService.internalValue;
  }

  // threats - computed: true, optional: true, required: false
  private _threats = new DataPanosDynamicUpdatesUpdateScheduleThreatsOutputReference(this, "threats");
  public get threats() {
    return this._threats;
  }
  public putThreats(value: DataPanosDynamicUpdatesUpdateScheduleThreats) {
    this._threats.internalValue = value;
  }
  public resetThreats() {
    this._threats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatsInput() {
    return this._threats.internalValue;
  }

  // wf_private - computed: true, optional: true, required: false
  private _wfPrivate = new DataPanosDynamicUpdatesUpdateScheduleWfPrivateOutputReference(this, "wf_private");
  public get wfPrivate() {
    return this._wfPrivate;
  }
  public putWfPrivate(value: DataPanosDynamicUpdatesUpdateScheduleWfPrivate) {
    this._wfPrivate.internalValue = value;
  }
  public resetWfPrivate() {
    this._wfPrivate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfPrivateInput() {
    return this._wfPrivate.internalValue;
  }

  // wildfire - computed: true, optional: true, required: false
  private _wildfire = new DataPanosDynamicUpdatesUpdateScheduleWildfireOutputReference(this, "wildfire");
  public get wildfire() {
    return this._wildfire;
  }
  public putWildfire(value: DataPanosDynamicUpdatesUpdateScheduleWildfire) {
    this._wildfire.internalValue = value;
  }
  public resetWildfire() {
    this._wildfire.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInput() {
    return this._wildfire.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates panos_dynamic_updates}
*/
export class DataPanosDynamicUpdates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_dynamic_updates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosDynamicUpdates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosDynamicUpdates to import
  * @param importFromId The id of the existing DataPanosDynamicUpdates that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosDynamicUpdates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_dynamic_updates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/dynamic_updates panos_dynamic_updates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosDynamicUpdatesConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosDynamicUpdatesConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_dynamic_updates',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._location.internalValue = config.location;
    this._updateSchedule.internalValue = config.updateSchedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosDynamicUpdatesLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosDynamicUpdatesLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // update_schedule - computed: true, optional: true, required: false
  private _updateSchedule = new DataPanosDynamicUpdatesUpdateScheduleOutputReference(this, "update_schedule");
  public get updateSchedule() {
    return this._updateSchedule;
  }
  public putUpdateSchedule(value: DataPanosDynamicUpdatesUpdateSchedule) {
    this._updateSchedule.internalValue = value;
  }
  public resetUpdateSchedule() {
    this._updateSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateScheduleInput() {
    return this._updateSchedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: dataPanosDynamicUpdatesLocationToTerraform(this._location.internalValue),
      update_schedule: dataPanosDynamicUpdatesUpdateScheduleToTerraform(this._updateSchedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: dataPanosDynamicUpdatesLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosDynamicUpdatesLocation",
      },
      update_schedule: {
        value: dataPanosDynamicUpdatesUpdateScheduleToHclTerraform(this._updateSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosDynamicUpdatesUpdateSchedule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
