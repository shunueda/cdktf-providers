// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosFiltersPrefixListRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describe Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#description DataPanosFiltersPrefixListRoutingProfile#description}
  */
  readonly description?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#location DataPanosFiltersPrefixListRoutingProfile#location}
  */
  readonly location: DataPanosFiltersPrefixListRoutingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#name DataPanosFiltersPrefixListRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#type DataPanosFiltersPrefixListRoutingProfile#type}
  */
  readonly type?: DataPanosFiltersPrefixListRoutingProfileType;
}
export interface DataPanosFiltersPrefixListRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#ngfw_device DataPanosFiltersPrefixListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosFiltersPrefixListRoutingProfileLocationNgfwToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileLocationNgfwToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileLocationNgfw | cdktf.IResolvable): any {
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

export class DataPanosFiltersPrefixListRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface DataPanosFiltersPrefixListRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#name DataPanosFiltersPrefixListRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#ngfw_device DataPanosFiltersPrefixListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#panorama_device DataPanosFiltersPrefixListRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosFiltersPrefixListRoutingProfileLocationTemplateToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosFiltersPrefixListRoutingProfileLocationTemplateToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosFiltersPrefixListRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosFiltersPrefixListRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#name DataPanosFiltersPrefixListRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#ngfw_device DataPanosFiltersPrefixListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#panorama_device DataPanosFiltersPrefixListRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosFiltersPrefixListRoutingProfileLocationTemplateStackToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosFiltersPrefixListRoutingProfileLocationTemplateStackToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosFiltersPrefixListRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosFiltersPrefixListRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#ngfw DataPanosFiltersPrefixListRoutingProfile#ngfw}
  */
  readonly ngfw?: DataPanosFiltersPrefixListRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#template DataPanosFiltersPrefixListRoutingProfile#template}
  */
  readonly template?: DataPanosFiltersPrefixListRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#template_stack DataPanosFiltersPrefixListRoutingProfile#template_stack}
  */
  readonly templateStack?: DataPanosFiltersPrefixListRoutingProfileLocationTemplateStack;
}

export function dataPanosFiltersPrefixListRoutingProfileLocationToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosFiltersPrefixListRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: dataPanosFiltersPrefixListRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosFiltersPrefixListRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileLocationToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosFiltersPrefixListRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileLocationNgfw",
    },
    template: {
      value: dataPanosFiltersPrefixListRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: dataPanosFiltersPrefixListRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersPrefixListRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfw = this._ngfw?.internalValue;
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

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = undefined;
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
      this._ngfw.internalValue = value.ngfw;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // ngfw - computed: false, optional: true, required: false
  private _ngfw = new DataPanosFiltersPrefixListRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosFiltersPrefixListRoutingProfileLocationNgfw) {
    this._ngfw.internalValue = value;
  }
  public resetNgfw() {
    this._ngfw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwInput() {
    return this._ngfw.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosFiltersPrefixListRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosFiltersPrefixListRoutingProfileLocationTemplate) {
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
  private _templateStack = new DataPanosFiltersPrefixListRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosFiltersPrefixListRoutingProfileLocationTemplateStack) {
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
export interface DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry {
  /**
  * Maximum Prefix length to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#greater_than_or_equal DataPanosFiltersPrefixListRoutingProfile#greater_than_or_equal}
  */
  readonly greaterThanOrEqual?: number;
  /**
  * Minimum Prefix length to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#less_than_or_equal DataPanosFiltersPrefixListRoutingProfile#less_than_or_equal}
  */
  readonly lessThanOrEqual?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#network DataPanosFiltersPrefixListRoutingProfile#network}
  */
  readonly network?: string;
}

export function dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    greater_than_or_equal: cdktf.numberToTerraform(struct!.greaterThanOrEqual),
    less_than_or_equal: cdktf.numberToTerraform(struct!.lessThanOrEqual),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    greater_than_or_equal: {
      value: cdktf.numberToHclTerraform(struct!.greaterThanOrEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_than_or_equal: {
      value: cdktf.numberToHclTerraform(struct!.lessThanOrEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greaterThanOrEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThanOrEqual = this._greaterThanOrEqual;
    }
    if (this._lessThanOrEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThanOrEqual = this._lessThanOrEqual;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._greaterThanOrEqual = undefined;
      this._lessThanOrEqual = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._greaterThanOrEqual = value.greaterThanOrEqual;
      this._lessThanOrEqual = value.lessThanOrEqual;
      this._network = value.network;
    }
  }

  // greater_than_or_equal - computed: true, optional: true, required: false
  private _greaterThanOrEqual?: number; 
  public get greaterThanOrEqual() {
    return this.getNumberAttribute('greater_than_or_equal');
  }
  public set greaterThanOrEqual(value: number) {
    this._greaterThanOrEqual = value;
  }
  public resetGreaterThanOrEqual() {
    this._greaterThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanOrEqualInput() {
    return this._greaterThanOrEqual;
  }

  // less_than_or_equal - computed: true, optional: true, required: false
  private _lessThanOrEqual?: number; 
  public get lessThanOrEqual() {
    return this.getNumberAttribute('less_than_or_equal');
  }
  public set lessThanOrEqual(value: number) {
    this._lessThanOrEqual = value;
  }
  public resetLessThanOrEqual() {
    this._lessThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanOrEqualInput() {
    return this._lessThanOrEqual;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}
export interface DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#entry DataPanosFiltersPrefixListRoutingProfile#entry}
  */
  readonly entry?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry;
  /**
  * Select pre-defined Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#network DataPanosFiltersPrefixListRoutingProfile#network}
  */
  readonly network?: string;
}

export function dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryToTerraform(struct!.entry),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryToHclTerraform(struct!.entry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
      this._network = value.network;
    }
  }

  // entry - computed: true, optional: true, required: false
  private _entry = new DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryOutputReference(this, "entry");
  public get entry() {
    return this._entry;
  }
  public putEntry(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}
export interface DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries {
  /**
  * Permit or Deny (default) this Prefix-List Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#action DataPanosFiltersPrefixListRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#name DataPanosFiltersPrefixListRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#prefix DataPanosFiltersPrefixListRoutingProfile#prefix}
  */
  readonly prefix?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix;
}

export function dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixToTerraform(struct!.prefix),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._prefix.internalValue = value.prefix;
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

  // name - computed: true, optional: false, required: true
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

  // prefix - computed: true, optional: true, required: false
  private _prefix = new DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}

export class DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesList extends cdktf.ComplexList {
  public internalValue? : DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries[] | cdktf.IResolvable

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
  public get(index: number): DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesOutputReference {
    return new DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosFiltersPrefixListRoutingProfileTypeIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#ipv4_entries DataPanosFiltersPrefixListRoutingProfile#ipv4_entries}
  */
  readonly ipv4Entries?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries[] | cdktf.IResolvable;
}

export function dataPanosFiltersPrefixListRoutingProfileTypeIpv4ToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_entries: cdktf.listMapper(dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesToTerraform, false)(struct!.ipv4Entries),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileTypeIpv4ToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_entries: {
      value: cdktf.listMapperHcl(dataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesToHclTerraform, false)(struct!.ipv4Entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersPrefixListRoutingProfileTypeIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileTypeIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Entries = this._ipv4Entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Entries.internalValue = value.ipv4Entries;
    }
  }

  // ipv4_entries - computed: true, optional: true, required: false
  private _ipv4Entries = new DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesList(this, "ipv4_entries", false);
  public get ipv4Entries() {
    return this._ipv4Entries;
  }
  public putIpv4Entries(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries[] | cdktf.IResolvable) {
    this._ipv4Entries.internalValue = value;
  }
  public resetIpv4Entries() {
    this._ipv4Entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EntriesInput() {
    return this._ipv4Entries.internalValue;
  }
}
export interface DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry {
  /**
  * Maximum Prefix length to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#greater_than_or_equal DataPanosFiltersPrefixListRoutingProfile#greater_than_or_equal}
  */
  readonly greaterThanOrEqual?: number;
  /**
  * Minimum Prefix length to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#less_than_or_equal DataPanosFiltersPrefixListRoutingProfile#less_than_or_equal}
  */
  readonly lessThanOrEqual?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#network DataPanosFiltersPrefixListRoutingProfile#network}
  */
  readonly network?: string;
}

export function dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    greater_than_or_equal: cdktf.numberToTerraform(struct!.greaterThanOrEqual),
    less_than_or_equal: cdktf.numberToTerraform(struct!.lessThanOrEqual),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    greater_than_or_equal: {
      value: cdktf.numberToHclTerraform(struct!.greaterThanOrEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_than_or_equal: {
      value: cdktf.numberToHclTerraform(struct!.lessThanOrEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greaterThanOrEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThanOrEqual = this._greaterThanOrEqual;
    }
    if (this._lessThanOrEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThanOrEqual = this._lessThanOrEqual;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._greaterThanOrEqual = undefined;
      this._lessThanOrEqual = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._greaterThanOrEqual = value.greaterThanOrEqual;
      this._lessThanOrEqual = value.lessThanOrEqual;
      this._network = value.network;
    }
  }

  // greater_than_or_equal - computed: true, optional: true, required: false
  private _greaterThanOrEqual?: number; 
  public get greaterThanOrEqual() {
    return this.getNumberAttribute('greater_than_or_equal');
  }
  public set greaterThanOrEqual(value: number) {
    this._greaterThanOrEqual = value;
  }
  public resetGreaterThanOrEqual() {
    this._greaterThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanOrEqualInput() {
    return this._greaterThanOrEqual;
  }

  // less_than_or_equal - computed: true, optional: true, required: false
  private _lessThanOrEqual?: number; 
  public get lessThanOrEqual() {
    return this.getNumberAttribute('less_than_or_equal');
  }
  public set lessThanOrEqual(value: number) {
    this._lessThanOrEqual = value;
  }
  public resetLessThanOrEqual() {
    this._lessThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanOrEqualInput() {
    return this._lessThanOrEqual;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}
export interface DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#entry DataPanosFiltersPrefixListRoutingProfile#entry}
  */
  readonly entry?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry;
  /**
  * Select pre-defined Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#network DataPanosFiltersPrefixListRoutingProfile#network}
  */
  readonly network?: string;
}

export function dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryToTerraform(struct!.entry),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryToHclTerraform(struct!.entry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
      this._network = value.network;
    }
  }

  // entry - computed: true, optional: true, required: false
  private _entry = new DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryOutputReference(this, "entry");
  public get entry() {
    return this._entry;
  }
  public putEntry(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}
export interface DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries {
  /**
  * Permit or Deny (default) this Prefix-List Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#action DataPanosFiltersPrefixListRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#name DataPanosFiltersPrefixListRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#prefix DataPanosFiltersPrefixListRoutingProfile#prefix}
  */
  readonly prefix?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix;
}

export function dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixToTerraform(struct!.prefix),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._prefix.internalValue = value.prefix;
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

  // name - computed: true, optional: false, required: true
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

  // prefix - computed: true, optional: true, required: false
  private _prefix = new DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}

export class DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesList extends cdktf.ComplexList {
  public internalValue? : DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries[] | cdktf.IResolvable

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
  public get(index: number): DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesOutputReference {
    return new DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosFiltersPrefixListRoutingProfileTypeIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#ipv6_entries DataPanosFiltersPrefixListRoutingProfile#ipv6_entries}
  */
  readonly ipv6Entries?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries[] | cdktf.IResolvable;
}

export function dataPanosFiltersPrefixListRoutingProfileTypeIpv6ToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_entries: cdktf.listMapper(dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesToTerraform, false)(struct!.ipv6Entries),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileTypeIpv6ToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_entries: {
      value: cdktf.listMapperHcl(dataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesToHclTerraform, false)(struct!.ipv6Entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersPrefixListRoutingProfileTypeIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileTypeIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Entries = this._ipv6Entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Entries.internalValue = value.ipv6Entries;
    }
  }

  // ipv6_entries - computed: true, optional: true, required: false
  private _ipv6Entries = new DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesList(this, "ipv6_entries", false);
  public get ipv6Entries() {
    return this._ipv6Entries;
  }
  public putIpv6Entries(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries[] | cdktf.IResolvable) {
    this._ipv6Entries.internalValue = value;
  }
  public resetIpv6Entries() {
    this._ipv6Entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EntriesInput() {
    return this._ipv6Entries.internalValue;
  }
}
export interface DataPanosFiltersPrefixListRoutingProfileType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#ipv4 DataPanosFiltersPrefixListRoutingProfile#ipv4}
  */
  readonly ipv4?: DataPanosFiltersPrefixListRoutingProfileTypeIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#ipv6 DataPanosFiltersPrefixListRoutingProfile#ipv6}
  */
  readonly ipv6?: DataPanosFiltersPrefixListRoutingProfileTypeIpv6;
}

export function dataPanosFiltersPrefixListRoutingProfileTypeToTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: dataPanosFiltersPrefixListRoutingProfileTypeIpv4ToTerraform(struct!.ipv4),
    ipv6: dataPanosFiltersPrefixListRoutingProfileTypeIpv6ToTerraform(struct!.ipv6),
  }
}


export function dataPanosFiltersPrefixListRoutingProfileTypeToHclTerraform(struct?: DataPanosFiltersPrefixListRoutingProfileType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: dataPanosFiltersPrefixListRoutingProfileTypeIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileTypeIpv4",
    },
    ipv6: {
      value: dataPanosFiltersPrefixListRoutingProfileTypeIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersPrefixListRoutingProfileTypeIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersPrefixListRoutingProfileTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersPrefixListRoutingProfileType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersPrefixListRoutingProfileType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new DataPanosFiltersPrefixListRoutingProfileTypeIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataPanosFiltersPrefixListRoutingProfileTypeIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosFiltersPrefixListRoutingProfileTypeIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile panos_filters_prefix_list_routing_profile}
*/
export class DataPanosFiltersPrefixListRoutingProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_filters_prefix_list_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosFiltersPrefixListRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosFiltersPrefixListRoutingProfile to import
  * @param importFromId The id of the existing DataPanosFiltersPrefixListRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosFiltersPrefixListRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_filters_prefix_list_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_prefix_list_routing_profile panos_filters_prefix_list_routing_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosFiltersPrefixListRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosFiltersPrefixListRoutingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_filters_prefix_list_routing_profile',
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
    this._description = config.description;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._type.internalValue = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosFiltersPrefixListRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosFiltersPrefixListRoutingProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // type - computed: true, optional: true, required: false
  private _type = new DataPanosFiltersPrefixListRoutingProfileTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosFiltersPrefixListRoutingProfileType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      location: dataPanosFiltersPrefixListRoutingProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      type: dataPanosFiltersPrefixListRoutingProfileTypeToTerraform(this._type.internalValue),
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
      location: {
        value: dataPanosFiltersPrefixListRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosFiltersPrefixListRoutingProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: dataPanosFiltersPrefixListRoutingProfileTypeToHclTerraform(this._type.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosFiltersPrefixListRoutingProfileType",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
