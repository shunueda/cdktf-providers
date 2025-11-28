// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicUpdatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#location DynamicUpdates#location}
  */
  readonly location: DynamicUpdatesLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#update_schedule DynamicUpdates#update_schedule}
  */
  readonly updateSchedule?: DynamicUpdatesUpdateSchedule;
}
export interface DynamicUpdatesLocationSystem {
  /**
  * The NGFW device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#ngfw_device DynamicUpdates#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dynamicUpdatesLocationSystemToTerraform(struct?: DynamicUpdatesLocationSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dynamicUpdatesLocationSystemToHclTerraform(struct?: DynamicUpdatesLocationSystem | cdktf.IResolvable): any {
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

export class DynamicUpdatesLocationSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesLocationSystem | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesLocationSystem | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesLocationTemplate {
  /**
  * The template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#name DynamicUpdates#name}
  */
  readonly name?: string;
  /**
  * The NGFW device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#ngfw_device DynamicUpdates#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#panorama_device DynamicUpdates#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dynamicUpdatesLocationTemplateToTerraform(struct?: DynamicUpdatesLocationTemplate | cdktf.IResolvable): any {
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


export function dynamicUpdatesLocationTemplateToHclTerraform(struct?: DynamicUpdatesLocationTemplate | cdktf.IResolvable): any {
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

export class DynamicUpdatesLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesLocationTemplateStack {
  /**
  * The template stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#name DynamicUpdates#name}
  */
  readonly name?: string;
  /**
  * The NGFW device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#ngfw_device DynamicUpdates#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#panorama_device DynamicUpdates#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dynamicUpdatesLocationTemplateStackToTerraform(struct?: DynamicUpdatesLocationTemplateStack | cdktf.IResolvable): any {
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


export function dynamicUpdatesLocationTemplateStackToHclTerraform(struct?: DynamicUpdatesLocationTemplateStack | cdktf.IResolvable): any {
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

export class DynamicUpdatesLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesLocation {
  /**
  * Located in a system settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#system DynamicUpdates#system}
  */
  readonly systemAttribute?: DynamicUpdatesLocationSystem;
  /**
  * Located in a specific template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#template DynamicUpdates#template}
  */
  readonly template?: DynamicUpdatesLocationTemplate;
  /**
  * Located in a specific template stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#template_stack DynamicUpdates#template_stack}
  */
  readonly templateStack?: DynamicUpdatesLocationTemplateStack;
}

export function dynamicUpdatesLocationToTerraform(struct?: DynamicUpdatesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system: dynamicUpdatesLocationSystemToTerraform(struct!.systemAttribute),
    template: dynamicUpdatesLocationTemplateToTerraform(struct!.template),
    template_stack: dynamicUpdatesLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dynamicUpdatesLocationToHclTerraform(struct?: DynamicUpdatesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system: {
      value: dynamicUpdatesLocationSystemToHclTerraform(struct!.systemAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesLocationSystem",
    },
    template: {
      value: dynamicUpdatesLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesLocationTemplate",
    },
    template_stack: {
      value: dynamicUpdatesLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesLocation | cdktf.IResolvable | undefined) {
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
  private _system = new DynamicUpdatesLocationSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: DynamicUpdatesLocationSystem) {
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
  private _template = new DynamicUpdatesLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DynamicUpdatesLocationTemplate) {
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
  private _templateStack = new DynamicUpdatesLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DynamicUpdatesLocationTemplateStack) {
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
export interface DynamicUpdatesUpdateScheduleAntiVirusRecurringDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: string;
}

export function dynamicUpdatesUpdateScheduleAntiVirusRecurringDailyToTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleAntiVirusRecurringDailyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleAntiVirusRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleAntiVirusRecurringDaily | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleAntiVirusRecurringHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
}

export function dynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyToTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleAntiVirusRecurringHourly | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleAntiVirusRecurringNone {
}

export function dynamicUpdatesUpdateScheduleAntiVirusRecurringNoneToTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dynamicUpdatesUpdateScheduleAntiVirusRecurringNoneToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DynamicUpdatesUpdateScheduleAntiVirusRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicUpdatesUpdateScheduleAntiVirusRecurringNone | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#day_of_week DynamicUpdates#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyToTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // day_of_week - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleAntiVirusRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#daily DynamicUpdates#daily}
  */
  readonly daily?: DynamicUpdatesUpdateScheduleAntiVirusRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#hourly DynamicUpdates#hourly}
  */
  readonly hourly?: DynamicUpdatesUpdateScheduleAntiVirusRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#none DynamicUpdates#none}
  */
  readonly none?: DynamicUpdatesUpdateScheduleAntiVirusRecurringNone;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#sync_to_peer DynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
  /**
  * ignore if release date is new (hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#threshold DynamicUpdates#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#weekly DynamicUpdates#weekly}
  */
  readonly weekly?: DynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly;
}

export function dynamicUpdatesUpdateScheduleAntiVirusRecurringToTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirusRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dynamicUpdatesUpdateScheduleAntiVirusRecurringDailyToTerraform(struct!.daily),
    hourly: dynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyToTerraform(struct!.hourly),
    none: dynamicUpdatesUpdateScheduleAntiVirusRecurringNoneToTerraform(struct!.none),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    weekly: dynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dynamicUpdatesUpdateScheduleAntiVirusRecurringToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirusRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dynamicUpdatesUpdateScheduleAntiVirusRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAntiVirusRecurringDaily",
    },
    hourly: {
      value: dynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAntiVirusRecurringHourly",
    },
    none: {
      value: dynamicUpdatesUpdateScheduleAntiVirusRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAntiVirusRecurringNone",
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
      value: dynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleAntiVirusRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAntiVirusRecurring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleAntiVirusRecurring | cdktf.IResolvable | undefined) {
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

  // daily - computed: false, optional: true, required: false
  private _daily = new DynamicUpdatesUpdateScheduleAntiVirusRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DynamicUpdatesUpdateScheduleAntiVirusRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new DynamicUpdatesUpdateScheduleAntiVirusRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DynamicUpdatesUpdateScheduleAntiVirusRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new DynamicUpdatesUpdateScheduleAntiVirusRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DynamicUpdatesUpdateScheduleAntiVirusRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sync_to_peer - computed: false, optional: true, required: false
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

  // threshold - computed: false, optional: true, required: false
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

  // weekly - computed: false, optional: true, required: false
  private _weekly = new DynamicUpdatesUpdateScheduleAntiVirusRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DynamicUpdatesUpdateScheduleAntiVirusRecurringWeekly) {
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
export interface DynamicUpdatesUpdateScheduleAntiVirus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#recurring DynamicUpdates#recurring}
  */
  readonly recurring?: DynamicUpdatesUpdateScheduleAntiVirusRecurring;
}

export function dynamicUpdatesUpdateScheduleAntiVirusToTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dynamicUpdatesUpdateScheduleAntiVirusRecurringToTerraform(struct!.recurring),
  }
}


export function dynamicUpdatesUpdateScheduleAntiVirusToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAntiVirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dynamicUpdatesUpdateScheduleAntiVirusRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAntiVirusRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleAntiVirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAntiVirus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleAntiVirus | cdktf.IResolvable | undefined) {
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

  // recurring - computed: false, optional: true, required: false
  private _recurring = new DynamicUpdatesUpdateScheduleAntiVirusRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DynamicUpdatesUpdateScheduleAntiVirusRecurring) {
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
export interface DynamicUpdatesUpdateScheduleAppProfileRecurringDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: string;
}

export function dynamicUpdatesUpdateScheduleAppProfileRecurringDailyToTerraform(struct?: DynamicUpdatesUpdateScheduleAppProfileRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleAppProfileRecurringDailyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAppProfileRecurringDaily | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleAppProfileRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAppProfileRecurringDaily | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleAppProfileRecurringDaily | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleAppProfileRecurringNone {
}

export function dynamicUpdatesUpdateScheduleAppProfileRecurringNoneToTerraform(struct?: DynamicUpdatesUpdateScheduleAppProfileRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dynamicUpdatesUpdateScheduleAppProfileRecurringNoneToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAppProfileRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DynamicUpdatesUpdateScheduleAppProfileRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAppProfileRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicUpdatesUpdateScheduleAppProfileRecurringNone | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesUpdateScheduleAppProfileRecurringWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#day_of_week DynamicUpdates#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyToTerraform(struct?: DynamicUpdatesUpdateScheduleAppProfileRecurringWeekly | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAppProfileRecurringWeekly | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAppProfileRecurringWeekly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleAppProfileRecurringWeekly | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // day_of_week - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleAppProfileRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#daily DynamicUpdates#daily}
  */
  readonly daily?: DynamicUpdatesUpdateScheduleAppProfileRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#none DynamicUpdates#none}
  */
  readonly none?: DynamicUpdatesUpdateScheduleAppProfileRecurringNone;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#sync_to_peer DynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
  /**
  * ignore if release date is new (hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#threshold DynamicUpdates#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#weekly DynamicUpdates#weekly}
  */
  readonly weekly?: DynamicUpdatesUpdateScheduleAppProfileRecurringWeekly;
}

export function dynamicUpdatesUpdateScheduleAppProfileRecurringToTerraform(struct?: DynamicUpdatesUpdateScheduleAppProfileRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dynamicUpdatesUpdateScheduleAppProfileRecurringDailyToTerraform(struct!.daily),
    none: dynamicUpdatesUpdateScheduleAppProfileRecurringNoneToTerraform(struct!.none),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    weekly: dynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dynamicUpdatesUpdateScheduleAppProfileRecurringToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAppProfileRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dynamicUpdatesUpdateScheduleAppProfileRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAppProfileRecurringDaily",
    },
    none: {
      value: dynamicUpdatesUpdateScheduleAppProfileRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAppProfileRecurringNone",
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
      value: dynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAppProfileRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleAppProfileRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAppProfileRecurring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleAppProfileRecurring | cdktf.IResolvable | undefined) {
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

  // daily - computed: false, optional: true, required: false
  private _daily = new DynamicUpdatesUpdateScheduleAppProfileRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DynamicUpdatesUpdateScheduleAppProfileRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new DynamicUpdatesUpdateScheduleAppProfileRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DynamicUpdatesUpdateScheduleAppProfileRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sync_to_peer - computed: false, optional: true, required: false
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

  // threshold - computed: false, optional: true, required: false
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

  // weekly - computed: false, optional: true, required: false
  private _weekly = new DynamicUpdatesUpdateScheduleAppProfileRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DynamicUpdatesUpdateScheduleAppProfileRecurringWeekly) {
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
export interface DynamicUpdatesUpdateScheduleAppProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#recurring DynamicUpdates#recurring}
  */
  readonly recurring?: DynamicUpdatesUpdateScheduleAppProfileRecurring;
}

export function dynamicUpdatesUpdateScheduleAppProfileToTerraform(struct?: DynamicUpdatesUpdateScheduleAppProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dynamicUpdatesUpdateScheduleAppProfileRecurringToTerraform(struct!.recurring),
  }
}


export function dynamicUpdatesUpdateScheduleAppProfileToHclTerraform(struct?: DynamicUpdatesUpdateScheduleAppProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dynamicUpdatesUpdateScheduleAppProfileRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAppProfileRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleAppProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleAppProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleAppProfile | cdktf.IResolvable | undefined) {
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

  // recurring - computed: false, optional: true, required: false
  private _recurring = new DynamicUpdatesUpdateScheduleAppProfileRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DynamicUpdatesUpdateScheduleAppProfileRecurring) {
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: string;
}

export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
}

export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone {
}

export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#day_of_week DynamicUpdates#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // day_of_week - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#daily DynamicUpdates#daily}
  */
  readonly daily?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#hourly DynamicUpdates#hourly}
  */
  readonly hourly?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#none DynamicUpdates#none}
  */
  readonly none?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#weekly DynamicUpdates#weekly}
  */
  readonly weekly?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly;
}

export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyToTerraform(struct!.daily),
    hourly: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyToTerraform(struct!.hourly),
    none: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneToTerraform(struct!.none),
    weekly: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily",
    },
    hourly: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly",
    },
    none: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone",
    },
    weekly: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring | cdktf.IResolvable | undefined) {
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

  // daily - computed: false, optional: true, required: false
  private _daily = new DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringWeekly) {
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#recurring DynamicUpdates#recurring}
  */
  readonly recurring?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring;
}

export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringToTerraform(struct!.recurring),
  }
}


export function dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn | cdktf.IResolvable | undefined) {
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

  // recurring - computed: false, optional: true, required: false
  private _recurring = new DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnRecurring) {
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: string;
}

export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
}

export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone {
}

export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#day_of_week DynamicUpdates#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // day_of_week - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#daily DynamicUpdates#daily}
  */
  readonly daily?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#hourly DynamicUpdates#hourly}
  */
  readonly hourly?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#none DynamicUpdates#none}
  */
  readonly none?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#weekly DynamicUpdates#weekly}
  */
  readonly weekly?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly;
}

export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyToTerraform(struct!.daily),
    hourly: dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyToTerraform(struct!.hourly),
    none: dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneToTerraform(struct!.none),
    weekly: dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily",
    },
    hourly: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly",
    },
    none: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone",
    },
    weekly: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring | cdktf.IResolvable | undefined) {
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

  // daily - computed: false, optional: true, required: false
  private _daily = new DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringWeekly) {
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
export interface DynamicUpdatesUpdateScheduleGlobalProtectDatafile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#recurring DynamicUpdates#recurring}
  */
  readonly recurring?: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring;
}

export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileToTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringToTerraform(struct!.recurring),
  }
}


export function dynamicUpdatesUpdateScheduleGlobalProtectDatafileToHclTerraform(struct?: DynamicUpdatesUpdateScheduleGlobalProtectDatafile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleGlobalProtectDatafileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleGlobalProtectDatafile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafile | cdktf.IResolvable | undefined) {
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

  // recurring - computed: false, optional: true, required: false
  private _recurring = new DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafileRecurring) {
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
export interface DynamicUpdatesUpdateScheduleStatisticsService {
  /**
  * Application Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#application_reports DynamicUpdates#application_reports}
  */
  readonly applicationReports?: boolean | cdktf.IResolvable;
  /**
  * File Type Identification Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#file_identification_reports DynamicUpdates#file_identification_reports}
  */
  readonly fileIdentificationReports?: boolean | cdktf.IResolvable;
  /**
  * Health and Performance Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#health_performance_reports DynamicUpdates#health_performance_reports}
  */
  readonly healthPerformanceReports?: boolean | cdktf.IResolvable;
  /**
  * Passive DNS Monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#passive_dns_monitoring DynamicUpdates#passive_dns_monitoring}
  */
  readonly passiveDnsMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Threat Prevention Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#threat_prevention_information DynamicUpdates#threat_prevention_information}
  */
  readonly threatPreventionInformation?: boolean | cdktf.IResolvable;
  /**
  * Enable sending packet-captures with threat prevention information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#threat_prevention_pcap DynamicUpdates#threat_prevention_pcap}
  */
  readonly threatPreventionPcap?: boolean | cdktf.IResolvable;
  /**
  * Threat Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#threat_prevention_reports DynamicUpdates#threat_prevention_reports}
  */
  readonly threatPreventionReports?: boolean | cdktf.IResolvable;
  /**
  * URL Reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#url_reports DynamicUpdates#url_reports}
  */
  readonly urlReports?: boolean | cdktf.IResolvable;
}

export function dynamicUpdatesUpdateScheduleStatisticsServiceToTerraform(struct?: DynamicUpdatesUpdateScheduleStatisticsService | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleStatisticsServiceToHclTerraform(struct?: DynamicUpdatesUpdateScheduleStatisticsService | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleStatisticsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleStatisticsService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleStatisticsService | cdktf.IResolvable | undefined) {
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

  // application_reports - computed: false, optional: true, required: false
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

  // file_identification_reports - computed: false, optional: true, required: false
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

  // health_performance_reports - computed: false, optional: true, required: false
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

  // passive_dns_monitoring - computed: false, optional: true, required: false
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

  // threat_prevention_information - computed: false, optional: true, required: false
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

  // threat_prevention_pcap - computed: false, optional: true, required: false
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

  // threat_prevention_reports - computed: false, optional: true, required: false
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

  // url_reports - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleThreatsRecurringDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Disable new applications after installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#disable_new_content DynamicUpdates#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function dynamicUpdatesUpdateScheduleThreatsRecurringDailyToTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleThreatsRecurringDailyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleThreatsRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleThreatsRecurringDaily | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // disable_new_content - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past half-hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
  /**
  * Disable new applications after installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#disable_new_content DynamicUpdates#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function dynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsToTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsToHclTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // disable_new_content - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleThreatsRecurringHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
  /**
  * Disable new applications after installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#disable_new_content DynamicUpdates#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function dynamicUpdatesUpdateScheduleThreatsRecurringHourlyToTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleThreatsRecurringHourlyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleThreatsRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleThreatsRecurringHourly | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // disable_new_content - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleThreatsRecurringNone {
}

export function dynamicUpdatesUpdateScheduleThreatsRecurringNoneToTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dynamicUpdatesUpdateScheduleThreatsRecurringNoneToHclTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DynamicUpdatesUpdateScheduleThreatsRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleThreatsRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicUpdatesUpdateScheduleThreatsRecurringNone | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesUpdateScheduleThreatsRecurringWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Time specification hh:mm (e.g. 20:10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#day_of_week DynamicUpdates#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Disable new applications after installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#disable_new_content DynamicUpdates#disable_new_content}
  */
  readonly disableNewContent?: boolean | cdktf.IResolvable;
}

export function dynamicUpdatesUpdateScheduleThreatsRecurringWeeklyToTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleThreatsRecurringWeeklyToHclTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleThreatsRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleThreatsRecurringWeekly | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // day_of_week - computed: false, optional: true, required: false
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

  // disable_new_content - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleThreatsRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#daily DynamicUpdates#daily}
  */
  readonly daily?: DynamicUpdatesUpdateScheduleThreatsRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#every_30_mins DynamicUpdates#every_30_mins}
  */
  readonly every30Mins?: DynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#hourly DynamicUpdates#hourly}
  */
  readonly hourly?: DynamicUpdatesUpdateScheduleThreatsRecurringHourly;
  /**
  * ignore new apps if release date is new (hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#new_app_threshold DynamicUpdates#new_app_threshold}
  */
  readonly newAppThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#none DynamicUpdates#none}
  */
  readonly none?: DynamicUpdatesUpdateScheduleThreatsRecurringNone;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#sync_to_peer DynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
  /**
  * ignore if release date is new (hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#threshold DynamicUpdates#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#weekly DynamicUpdates#weekly}
  */
  readonly weekly?: DynamicUpdatesUpdateScheduleThreatsRecurringWeekly;
}

export function dynamicUpdatesUpdateScheduleThreatsRecurringToTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dynamicUpdatesUpdateScheduleThreatsRecurringDailyToTerraform(struct!.daily),
    every_30_mins: dynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsToTerraform(struct!.every30Mins),
    hourly: dynamicUpdatesUpdateScheduleThreatsRecurringHourlyToTerraform(struct!.hourly),
    new_app_threshold: cdktf.numberToTerraform(struct!.newAppThreshold),
    none: dynamicUpdatesUpdateScheduleThreatsRecurringNoneToTerraform(struct!.none),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    weekly: dynamicUpdatesUpdateScheduleThreatsRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dynamicUpdatesUpdateScheduleThreatsRecurringToHclTerraform(struct?: DynamicUpdatesUpdateScheduleThreatsRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dynamicUpdatesUpdateScheduleThreatsRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleThreatsRecurringDaily",
    },
    every_30_mins: {
      value: dynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsToHclTerraform(struct!.every30Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins",
    },
    hourly: {
      value: dynamicUpdatesUpdateScheduleThreatsRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleThreatsRecurringHourly",
    },
    new_app_threshold: {
      value: cdktf.numberToHclTerraform(struct!.newAppThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    none: {
      value: dynamicUpdatesUpdateScheduleThreatsRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleThreatsRecurringNone",
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
      value: dynamicUpdatesUpdateScheduleThreatsRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleThreatsRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleThreatsRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleThreatsRecurring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleThreatsRecurring | cdktf.IResolvable | undefined) {
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

  // daily - computed: false, optional: true, required: false
  private _daily = new DynamicUpdatesUpdateScheduleThreatsRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DynamicUpdatesUpdateScheduleThreatsRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // every_30_mins - computed: false, optional: true, required: false
  private _every30Mins = new DynamicUpdatesUpdateScheduleThreatsRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }
  public putEvery30Mins(value: DynamicUpdatesUpdateScheduleThreatsRecurringEvery30Mins) {
    this._every30Mins.internalValue = value;
  }
  public resetEvery30Mins() {
    this._every30Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every30MinsInput() {
    return this._every30Mins.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new DynamicUpdatesUpdateScheduleThreatsRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DynamicUpdatesUpdateScheduleThreatsRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // new_app_threshold - computed: false, optional: true, required: false
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

  // none - computed: false, optional: true, required: false
  private _none = new DynamicUpdatesUpdateScheduleThreatsRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DynamicUpdatesUpdateScheduleThreatsRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sync_to_peer - computed: false, optional: true, required: false
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

  // threshold - computed: false, optional: true, required: false
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

  // weekly - computed: false, optional: true, required: false
  private _weekly = new DynamicUpdatesUpdateScheduleThreatsRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DynamicUpdatesUpdateScheduleThreatsRecurringWeekly) {
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
export interface DynamicUpdatesUpdateScheduleThreats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#recurring DynamicUpdates#recurring}
  */
  readonly recurring?: DynamicUpdatesUpdateScheduleThreatsRecurring;
}

export function dynamicUpdatesUpdateScheduleThreatsToTerraform(struct?: DynamicUpdatesUpdateScheduleThreats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dynamicUpdatesUpdateScheduleThreatsRecurringToTerraform(struct!.recurring),
  }
}


export function dynamicUpdatesUpdateScheduleThreatsToHclTerraform(struct?: DynamicUpdatesUpdateScheduleThreats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dynamicUpdatesUpdateScheduleThreatsRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleThreatsRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleThreatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleThreats | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleThreats | cdktf.IResolvable | undefined) {
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

  // recurring - computed: false, optional: true, required: false
  private _recurring = new DynamicUpdatesUpdateScheduleThreatsRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DynamicUpdatesUpdateScheduleThreatsRecurring) {
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
export interface DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes Past Quarter-Hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
}

export function dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsToTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes Past Half-Hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
}

export function dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsToTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes Past five minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
}

export function dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsToTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes Past Hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
}

export function dynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourToTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    at: cdktf.numberToTerraform(struct!.at),
  }
}


export function dynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleWfPrivateRecurringNone {
}

export function dynamicUpdatesUpdateScheduleWfPrivateRecurringNoneToTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dynamicUpdatesUpdateScheduleWfPrivateRecurringNoneToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DynamicUpdatesUpdateScheduleWfPrivateRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWfPrivateRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicUpdatesUpdateScheduleWfPrivateRecurringNone | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesUpdateScheduleWfPrivateRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#every_15_mins DynamicUpdates#every_15_mins}
  */
  readonly every15Mins?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#every_30_mins DynamicUpdates#every_30_mins}
  */
  readonly every30Mins?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#every_5_mins DynamicUpdates#every_5_mins}
  */
  readonly every5Mins?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#every_hour DynamicUpdates#every_hour}
  */
  readonly everyHour?: DynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#none DynamicUpdates#none}
  */
  readonly none?: DynamicUpdatesUpdateScheduleWfPrivateRecurringNone;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#sync_to_peer DynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function dynamicUpdatesUpdateScheduleWfPrivateRecurringToTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every_15_mins: dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsToTerraform(struct!.every15Mins),
    every_30_mins: dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsToTerraform(struct!.every30Mins),
    every_5_mins: dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsToTerraform(struct!.every5Mins),
    every_hour: dynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourToTerraform(struct!.everyHour),
    none: dynamicUpdatesUpdateScheduleWfPrivateRecurringNoneToTerraform(struct!.none),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function dynamicUpdatesUpdateScheduleWfPrivateRecurringToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivateRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every_15_mins: {
      value: dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsToHclTerraform(struct!.every15Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins",
    },
    every_30_mins: {
      value: dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsToHclTerraform(struct!.every30Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins",
    },
    every_5_mins: {
      value: dynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsToHclTerraform(struct!.every5Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins",
    },
    every_hour: {
      value: dynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourToHclTerraform(struct!.everyHour),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour",
    },
    none: {
      value: dynamicUpdatesUpdateScheduleWfPrivateRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWfPrivateRecurringNone",
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

export class DynamicUpdatesUpdateScheduleWfPrivateRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWfPrivateRecurring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWfPrivateRecurring | cdktf.IResolvable | undefined) {
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

  // every_15_mins - computed: false, optional: true, required: false
  private _every15Mins = new DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15MinsOutputReference(this, "every_15_mins");
  public get every15Mins() {
    return this._every15Mins;
  }
  public putEvery15Mins(value: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery15Mins) {
    this._every15Mins.internalValue = value;
  }
  public resetEvery15Mins() {
    this._every15Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every15MinsInput() {
    return this._every15Mins.internalValue;
  }

  // every_30_mins - computed: false, optional: true, required: false
  private _every30Mins = new DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }
  public putEvery30Mins(value: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery30Mins) {
    this._every30Mins.internalValue = value;
  }
  public resetEvery30Mins() {
    this._every30Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every30MinsInput() {
    return this._every30Mins.internalValue;
  }

  // every_5_mins - computed: false, optional: true, required: false
  private _every5Mins = new DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5MinsOutputReference(this, "every_5_mins");
  public get every5Mins() {
    return this._every5Mins;
  }
  public putEvery5Mins(value: DynamicUpdatesUpdateScheduleWfPrivateRecurringEvery5Mins) {
    this._every5Mins.internalValue = value;
  }
  public resetEvery5Mins() {
    this._every5Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every5MinsInput() {
    return this._every5Mins.internalValue;
  }

  // every_hour - computed: false, optional: true, required: false
  private _everyHour = new DynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHourOutputReference(this, "every_hour");
  public get everyHour() {
    return this._everyHour;
  }
  public putEveryHour(value: DynamicUpdatesUpdateScheduleWfPrivateRecurringEveryHour) {
    this._everyHour.internalValue = value;
  }
  public resetEveryHour() {
    this._everyHour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyHourInput() {
    return this._everyHour.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new DynamicUpdatesUpdateScheduleWfPrivateRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DynamicUpdatesUpdateScheduleWfPrivateRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sync_to_peer - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleWfPrivate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#recurring DynamicUpdates#recurring}
  */
  readonly recurring?: DynamicUpdatesUpdateScheduleWfPrivateRecurring;
}

export function dynamicUpdatesUpdateScheduleWfPrivateToTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dynamicUpdatesUpdateScheduleWfPrivateRecurringToTerraform(struct!.recurring),
  }
}


export function dynamicUpdatesUpdateScheduleWfPrivateToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWfPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dynamicUpdatesUpdateScheduleWfPrivateRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWfPrivateRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleWfPrivateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWfPrivate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWfPrivate | cdktf.IResolvable | undefined) {
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

  // recurring - computed: false, optional: true, required: false
  private _recurring = new DynamicUpdatesUpdateScheduleWfPrivateRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DynamicUpdatesUpdateScheduleWfPrivateRecurring) {
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
export interface DynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past quarter-hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#sync_to_peer DynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function dynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsToTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // sync_to_peer - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past half-hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#sync_to_peer DynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function dynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsToTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // sync_to_peer - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleWildfireRecurringEveryHour {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Minutes past hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#at DynamicUpdates#at}
  */
  readonly at?: number;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#sync_to_peer DynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function dynamicUpdatesUpdateScheduleWildfireRecurringEveryHourToTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable): any {
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


export function dynamicUpdatesUpdateScheduleWildfireRecurringEveryHourToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleWildfireRecurringEveryHourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWildfireRecurringEveryHour | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // at - computed: false, optional: true, required: false
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

  // sync_to_peer - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleWildfireRecurringEveryMin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#action DynamicUpdates#action}
  */
  readonly action?: string;
  /**
  * Synchronize content with HA peer after download/install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#sync_to_peer DynamicUpdates#sync_to_peer}
  */
  readonly syncToPeer?: boolean | cdktf.IResolvable;
}

export function dynamicUpdatesUpdateScheduleWildfireRecurringEveryMinToTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    sync_to_peer: cdktf.booleanToTerraform(struct!.syncToPeer),
  }
}


export function dynamicUpdatesUpdateScheduleWildfireRecurringEveryMinToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable): any {
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

export class DynamicUpdatesUpdateScheduleWildfireRecurringEveryMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWildfireRecurringEveryMin | cdktf.IResolvable | undefined) {
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

  // action - computed: false, optional: true, required: false
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

  // sync_to_peer - computed: false, optional: true, required: false
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
export interface DynamicUpdatesUpdateScheduleWildfireRecurringNone {
}

export function dynamicUpdatesUpdateScheduleWildfireRecurringNoneToTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dynamicUpdatesUpdateScheduleWildfireRecurringNoneToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DynamicUpdatesUpdateScheduleWildfireRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWildfireRecurringNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicUpdatesUpdateScheduleWildfireRecurringNone | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesUpdateScheduleWildfireRecurringRealTime {
}

export function dynamicUpdatesUpdateScheduleWildfireRecurringRealTimeToTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dynamicUpdatesUpdateScheduleWildfireRecurringRealTimeToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DynamicUpdatesUpdateScheduleWildfireRecurringRealTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicUpdatesUpdateScheduleWildfireRecurringRealTime | cdktf.IResolvable | undefined) {
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
export interface DynamicUpdatesUpdateScheduleWildfireRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#every_15_mins DynamicUpdates#every_15_mins}
  */
  readonly every15Mins?: DynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#every_30_mins DynamicUpdates#every_30_mins}
  */
  readonly every30Mins?: DynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#every_hour DynamicUpdates#every_hour}
  */
  readonly everyHour?: DynamicUpdatesUpdateScheduleWildfireRecurringEveryHour;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#every_min DynamicUpdates#every_min}
  */
  readonly everyMin?: DynamicUpdatesUpdateScheduleWildfireRecurringEveryMin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#none DynamicUpdates#none}
  */
  readonly none?: DynamicUpdatesUpdateScheduleWildfireRecurringNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#real_time DynamicUpdates#real_time}
  */
  readonly realTime?: DynamicUpdatesUpdateScheduleWildfireRecurringRealTime;
}

export function dynamicUpdatesUpdateScheduleWildfireRecurringToTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every_15_mins: dynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsToTerraform(struct!.every15Mins),
    every_30_mins: dynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsToTerraform(struct!.every30Mins),
    every_hour: dynamicUpdatesUpdateScheduleWildfireRecurringEveryHourToTerraform(struct!.everyHour),
    every_min: dynamicUpdatesUpdateScheduleWildfireRecurringEveryMinToTerraform(struct!.everyMin),
    none: dynamicUpdatesUpdateScheduleWildfireRecurringNoneToTerraform(struct!.none),
    real_time: dynamicUpdatesUpdateScheduleWildfireRecurringRealTimeToTerraform(struct!.realTime),
  }
}


export function dynamicUpdatesUpdateScheduleWildfireRecurringToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWildfireRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every_15_mins: {
      value: dynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsToHclTerraform(struct!.every15Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins",
    },
    every_30_mins: {
      value: dynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsToHclTerraform(struct!.every30Mins),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins",
    },
    every_hour: {
      value: dynamicUpdatesUpdateScheduleWildfireRecurringEveryHourToHclTerraform(struct!.everyHour),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWildfireRecurringEveryHour",
    },
    every_min: {
      value: dynamicUpdatesUpdateScheduleWildfireRecurringEveryMinToHclTerraform(struct!.everyMin),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWildfireRecurringEveryMin",
    },
    none: {
      value: dynamicUpdatesUpdateScheduleWildfireRecurringNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWildfireRecurringNone",
    },
    real_time: {
      value: dynamicUpdatesUpdateScheduleWildfireRecurringRealTimeToHclTerraform(struct!.realTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWildfireRecurringRealTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleWildfireRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWildfireRecurring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWildfireRecurring | cdktf.IResolvable | undefined) {
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

  // every_15_mins - computed: false, optional: true, required: false
  private _every15Mins = new DynamicUpdatesUpdateScheduleWildfireRecurringEvery15MinsOutputReference(this, "every_15_mins");
  public get every15Mins() {
    return this._every15Mins;
  }
  public putEvery15Mins(value: DynamicUpdatesUpdateScheduleWildfireRecurringEvery15Mins) {
    this._every15Mins.internalValue = value;
  }
  public resetEvery15Mins() {
    this._every15Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every15MinsInput() {
    return this._every15Mins.internalValue;
  }

  // every_30_mins - computed: false, optional: true, required: false
  private _every30Mins = new DynamicUpdatesUpdateScheduleWildfireRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }
  public putEvery30Mins(value: DynamicUpdatesUpdateScheduleWildfireRecurringEvery30Mins) {
    this._every30Mins.internalValue = value;
  }
  public resetEvery30Mins() {
    this._every30Mins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get every30MinsInput() {
    return this._every30Mins.internalValue;
  }

  // every_hour - computed: false, optional: true, required: false
  private _everyHour = new DynamicUpdatesUpdateScheduleWildfireRecurringEveryHourOutputReference(this, "every_hour");
  public get everyHour() {
    return this._everyHour;
  }
  public putEveryHour(value: DynamicUpdatesUpdateScheduleWildfireRecurringEveryHour) {
    this._everyHour.internalValue = value;
  }
  public resetEveryHour() {
    this._everyHour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyHourInput() {
    return this._everyHour.internalValue;
  }

  // every_min - computed: false, optional: true, required: false
  private _everyMin = new DynamicUpdatesUpdateScheduleWildfireRecurringEveryMinOutputReference(this, "every_min");
  public get everyMin() {
    return this._everyMin;
  }
  public putEveryMin(value: DynamicUpdatesUpdateScheduleWildfireRecurringEveryMin) {
    this._everyMin.internalValue = value;
  }
  public resetEveryMin() {
    this._everyMin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyMinInput() {
    return this._everyMin.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new DynamicUpdatesUpdateScheduleWildfireRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DynamicUpdatesUpdateScheduleWildfireRecurringNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // real_time - computed: false, optional: true, required: false
  private _realTime = new DynamicUpdatesUpdateScheduleWildfireRecurringRealTimeOutputReference(this, "real_time");
  public get realTime() {
    return this._realTime;
  }
  public putRealTime(value: DynamicUpdatesUpdateScheduleWildfireRecurringRealTime) {
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
export interface DynamicUpdatesUpdateScheduleWildfire {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#recurring DynamicUpdates#recurring}
  */
  readonly recurring?: DynamicUpdatesUpdateScheduleWildfireRecurring;
}

export function dynamicUpdatesUpdateScheduleWildfireToTerraform(struct?: DynamicUpdatesUpdateScheduleWildfire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring: dynamicUpdatesUpdateScheduleWildfireRecurringToTerraform(struct!.recurring),
  }
}


export function dynamicUpdatesUpdateScheduleWildfireToHclTerraform(struct?: DynamicUpdatesUpdateScheduleWildfire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring: {
      value: dynamicUpdatesUpdateScheduleWildfireRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWildfireRecurring",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleWildfireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateScheduleWildfire | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateScheduleWildfire | cdktf.IResolvable | undefined) {
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

  // recurring - computed: false, optional: true, required: false
  private _recurring = new DynamicUpdatesUpdateScheduleWildfireRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DynamicUpdatesUpdateScheduleWildfireRecurring) {
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
export interface DynamicUpdatesUpdateSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#anti_virus DynamicUpdates#anti_virus}
  */
  readonly antiVirus?: DynamicUpdatesUpdateScheduleAntiVirus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#app_profile DynamicUpdates#app_profile}
  */
  readonly appProfile?: DynamicUpdatesUpdateScheduleAppProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#global_protect_clientless_vpn DynamicUpdates#global_protect_clientless_vpn}
  */
  readonly globalProtectClientlessVpn?: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#global_protect_datafile DynamicUpdates#global_protect_datafile}
  */
  readonly globalProtectDatafile?: DynamicUpdatesUpdateScheduleGlobalProtectDatafile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#statistics_service DynamicUpdates#statistics_service}
  */
  readonly statisticsService?: DynamicUpdatesUpdateScheduleStatisticsService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#threats DynamicUpdates#threats}
  */
  readonly threats?: DynamicUpdatesUpdateScheduleThreats;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#wf_private DynamicUpdates#wf_private}
  */
  readonly wfPrivate?: DynamicUpdatesUpdateScheduleWfPrivate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#wildfire DynamicUpdates#wildfire}
  */
  readonly wildfire?: DynamicUpdatesUpdateScheduleWildfire;
}

export function dynamicUpdatesUpdateScheduleToTerraform(struct?: DynamicUpdatesUpdateSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_virus: dynamicUpdatesUpdateScheduleAntiVirusToTerraform(struct!.antiVirus),
    app_profile: dynamicUpdatesUpdateScheduleAppProfileToTerraform(struct!.appProfile),
    global_protect_clientless_vpn: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnToTerraform(struct!.globalProtectClientlessVpn),
    global_protect_datafile: dynamicUpdatesUpdateScheduleGlobalProtectDatafileToTerraform(struct!.globalProtectDatafile),
    statistics_service: dynamicUpdatesUpdateScheduleStatisticsServiceToTerraform(struct!.statisticsService),
    threats: dynamicUpdatesUpdateScheduleThreatsToTerraform(struct!.threats),
    wf_private: dynamicUpdatesUpdateScheduleWfPrivateToTerraform(struct!.wfPrivate),
    wildfire: dynamicUpdatesUpdateScheduleWildfireToTerraform(struct!.wildfire),
  }
}


export function dynamicUpdatesUpdateScheduleToHclTerraform(struct?: DynamicUpdatesUpdateSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_virus: {
      value: dynamicUpdatesUpdateScheduleAntiVirusToHclTerraform(struct!.antiVirus),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAntiVirus",
    },
    app_profile: {
      value: dynamicUpdatesUpdateScheduleAppProfileToHclTerraform(struct!.appProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleAppProfile",
    },
    global_protect_clientless_vpn: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnToHclTerraform(struct!.globalProtectClientlessVpn),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn",
    },
    global_protect_datafile: {
      value: dynamicUpdatesUpdateScheduleGlobalProtectDatafileToHclTerraform(struct!.globalProtectDatafile),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleGlobalProtectDatafile",
    },
    statistics_service: {
      value: dynamicUpdatesUpdateScheduleStatisticsServiceToHclTerraform(struct!.statisticsService),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleStatisticsService",
    },
    threats: {
      value: dynamicUpdatesUpdateScheduleThreatsToHclTerraform(struct!.threats),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleThreats",
    },
    wf_private: {
      value: dynamicUpdatesUpdateScheduleWfPrivateToHclTerraform(struct!.wfPrivate),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWfPrivate",
    },
    wildfire: {
      value: dynamicUpdatesUpdateScheduleWildfireToHclTerraform(struct!.wildfire),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicUpdatesUpdateScheduleWildfire",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicUpdatesUpdateScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicUpdatesUpdateSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamicUpdatesUpdateSchedule | cdktf.IResolvable | undefined) {
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

  // anti_virus - computed: false, optional: true, required: false
  private _antiVirus = new DynamicUpdatesUpdateScheduleAntiVirusOutputReference(this, "anti_virus");
  public get antiVirus() {
    return this._antiVirus;
  }
  public putAntiVirus(value: DynamicUpdatesUpdateScheduleAntiVirus) {
    this._antiVirus.internalValue = value;
  }
  public resetAntiVirus() {
    this._antiVirus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusInput() {
    return this._antiVirus.internalValue;
  }

  // app_profile - computed: false, optional: true, required: false
  private _appProfile = new DynamicUpdatesUpdateScheduleAppProfileOutputReference(this, "app_profile");
  public get appProfile() {
    return this._appProfile;
  }
  public putAppProfile(value: DynamicUpdatesUpdateScheduleAppProfile) {
    this._appProfile.internalValue = value;
  }
  public resetAppProfile() {
    this._appProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileInput() {
    return this._appProfile.internalValue;
  }

  // global_protect_clientless_vpn - computed: false, optional: true, required: false
  private _globalProtectClientlessVpn = new DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpnOutputReference(this, "global_protect_clientless_vpn");
  public get globalProtectClientlessVpn() {
    return this._globalProtectClientlessVpn;
  }
  public putGlobalProtectClientlessVpn(value: DynamicUpdatesUpdateScheduleGlobalProtectClientlessVpn) {
    this._globalProtectClientlessVpn.internalValue = value;
  }
  public resetGlobalProtectClientlessVpn() {
    this._globalProtectClientlessVpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectClientlessVpnInput() {
    return this._globalProtectClientlessVpn.internalValue;
  }

  // global_protect_datafile - computed: false, optional: true, required: false
  private _globalProtectDatafile = new DynamicUpdatesUpdateScheduleGlobalProtectDatafileOutputReference(this, "global_protect_datafile");
  public get globalProtectDatafile() {
    return this._globalProtectDatafile;
  }
  public putGlobalProtectDatafile(value: DynamicUpdatesUpdateScheduleGlobalProtectDatafile) {
    this._globalProtectDatafile.internalValue = value;
  }
  public resetGlobalProtectDatafile() {
    this._globalProtectDatafile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectDatafileInput() {
    return this._globalProtectDatafile.internalValue;
  }

  // statistics_service - computed: false, optional: true, required: false
  private _statisticsService = new DynamicUpdatesUpdateScheduleStatisticsServiceOutputReference(this, "statistics_service");
  public get statisticsService() {
    return this._statisticsService;
  }
  public putStatisticsService(value: DynamicUpdatesUpdateScheduleStatisticsService) {
    this._statisticsService.internalValue = value;
  }
  public resetStatisticsService() {
    this._statisticsService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsServiceInput() {
    return this._statisticsService.internalValue;
  }

  // threats - computed: false, optional: true, required: false
  private _threats = new DynamicUpdatesUpdateScheduleThreatsOutputReference(this, "threats");
  public get threats() {
    return this._threats;
  }
  public putThreats(value: DynamicUpdatesUpdateScheduleThreats) {
    this._threats.internalValue = value;
  }
  public resetThreats() {
    this._threats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatsInput() {
    return this._threats.internalValue;
  }

  // wf_private - computed: false, optional: true, required: false
  private _wfPrivate = new DynamicUpdatesUpdateScheduleWfPrivateOutputReference(this, "wf_private");
  public get wfPrivate() {
    return this._wfPrivate;
  }
  public putWfPrivate(value: DynamicUpdatesUpdateScheduleWfPrivate) {
    this._wfPrivate.internalValue = value;
  }
  public resetWfPrivate() {
    this._wfPrivate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfPrivateInput() {
    return this._wfPrivate.internalValue;
  }

  // wildfire - computed: false, optional: true, required: false
  private _wildfire = new DynamicUpdatesUpdateScheduleWildfireOutputReference(this, "wildfire");
  public get wildfire() {
    return this._wildfire;
  }
  public putWildfire(value: DynamicUpdatesUpdateScheduleWildfire) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates panos_dynamic_updates}
*/
export class DynamicUpdates extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_dynamic_updates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicUpdates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicUpdates to import
  * @param importFromId The id of the existing DynamicUpdates that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicUpdates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_dynamic_updates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/dynamic_updates panos_dynamic_updates} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicUpdatesConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicUpdatesConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_dynamic_updates',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
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
  private _location = new DynamicUpdatesLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DynamicUpdatesLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // update_schedule - computed: false, optional: true, required: false
  private _updateSchedule = new DynamicUpdatesUpdateScheduleOutputReference(this, "update_schedule");
  public get updateSchedule() {
    return this._updateSchedule;
  }
  public putUpdateSchedule(value: DynamicUpdatesUpdateSchedule) {
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
      location: dynamicUpdatesLocationToTerraform(this._location.internalValue),
      update_schedule: dynamicUpdatesUpdateScheduleToTerraform(this._updateSchedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: dynamicUpdatesLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamicUpdatesLocation",
      },
      update_schedule: {
        value: dynamicUpdatesUpdateScheduleToHclTerraform(this._updateSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamicUpdatesUpdateSchedule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
