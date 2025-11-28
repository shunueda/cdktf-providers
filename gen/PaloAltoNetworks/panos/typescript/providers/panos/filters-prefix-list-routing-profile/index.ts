// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FiltersPrefixListRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describe Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#description FiltersPrefixListRoutingProfile#description}
  */
  readonly description?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#location FiltersPrefixListRoutingProfile#location}
  */
  readonly location: FiltersPrefixListRoutingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#name FiltersPrefixListRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#type FiltersPrefixListRoutingProfile#type}
  */
  readonly type?: FiltersPrefixListRoutingProfileType;
}
export interface FiltersPrefixListRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#ngfw_device FiltersPrefixListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function filtersPrefixListRoutingProfileLocationNgfwToTerraform(struct?: FiltersPrefixListRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function filtersPrefixListRoutingProfileLocationNgfwToHclTerraform(struct?: FiltersPrefixListRoutingProfileLocationNgfw | cdktf.IResolvable): any {
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

export class FiltersPrefixListRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface FiltersPrefixListRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#name FiltersPrefixListRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#ngfw_device FiltersPrefixListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#panorama_device FiltersPrefixListRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function filtersPrefixListRoutingProfileLocationTemplateToTerraform(struct?: FiltersPrefixListRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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


export function filtersPrefixListRoutingProfileLocationTemplateToHclTerraform(struct?: FiltersPrefixListRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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

export class FiltersPrefixListRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface FiltersPrefixListRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#name FiltersPrefixListRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#ngfw_device FiltersPrefixListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#panorama_device FiltersPrefixListRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function filtersPrefixListRoutingProfileLocationTemplateStackToTerraform(struct?: FiltersPrefixListRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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


export function filtersPrefixListRoutingProfileLocationTemplateStackToHclTerraform(struct?: FiltersPrefixListRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class FiltersPrefixListRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface FiltersPrefixListRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#ngfw FiltersPrefixListRoutingProfile#ngfw}
  */
  readonly ngfw?: FiltersPrefixListRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#template FiltersPrefixListRoutingProfile#template}
  */
  readonly template?: FiltersPrefixListRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#template_stack FiltersPrefixListRoutingProfile#template_stack}
  */
  readonly templateStack?: FiltersPrefixListRoutingProfileLocationTemplateStack;
}

export function filtersPrefixListRoutingProfileLocationToTerraform(struct?: FiltersPrefixListRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: filtersPrefixListRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: filtersPrefixListRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: filtersPrefixListRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function filtersPrefixListRoutingProfileLocationToHclTerraform(struct?: FiltersPrefixListRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: filtersPrefixListRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersPrefixListRoutingProfileLocationNgfw",
    },
    template: {
      value: filtersPrefixListRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersPrefixListRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: filtersPrefixListRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersPrefixListRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersPrefixListRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new FiltersPrefixListRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: FiltersPrefixListRoutingProfileLocationNgfw) {
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
  private _template = new FiltersPrefixListRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: FiltersPrefixListRoutingProfileLocationTemplate) {
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
  private _templateStack = new FiltersPrefixListRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: FiltersPrefixListRoutingProfileLocationTemplateStack) {
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
export interface FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry {
  /**
  * Maximum Prefix length to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#greater_than_or_equal FiltersPrefixListRoutingProfile#greater_than_or_equal}
  */
  readonly greaterThanOrEqual?: number;
  /**
  * Minimum Prefix length to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#less_than_or_equal FiltersPrefixListRoutingProfile#less_than_or_equal}
  */
  readonly lessThanOrEqual?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#network FiltersPrefixListRoutingProfile#network}
  */
  readonly network?: string;
}

export function filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryToTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry | cdktf.IResolvable): any {
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


export function filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryToHclTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry | cdktf.IResolvable): any {
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

export class FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry | cdktf.IResolvable | undefined) {
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

  // greater_than_or_equal - computed: false, optional: true, required: false
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

  // less_than_or_equal - computed: false, optional: true, required: false
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

  // network - computed: false, optional: true, required: false
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
export interface FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#entry FiltersPrefixListRoutingProfile#entry}
  */
  readonly entry?: FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry;
  /**
  * Select pre-defined Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#network FiltersPrefixListRoutingProfile#network}
  */
  readonly network?: string;
}

export function filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixToTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryToTerraform(struct!.entry),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixToHclTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryToHclTerraform(struct!.entry),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry",
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

export class FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix | cdktf.IResolvable | undefined) {
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

  // entry - computed: false, optional: true, required: false
  private _entry = new FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntryOutputReference(this, "entry");
  public get entry() {
    return this._entry;
  }
  public putEntry(value: FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixEntry) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }

  // network - computed: false, optional: true, required: false
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
export interface FiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries {
  /**
  * Permit or Deny (default) this Prefix-List Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#action FiltersPrefixListRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#name FiltersPrefixListRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#prefix FiltersPrefixListRoutingProfile#prefix}
  */
  readonly prefix?: FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix;
}

export function filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesToTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixToTerraform(struct!.prefix),
  }
}


export function filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesToHclTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable): any {
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
      value: filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable | undefined) {
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

  // prefix - computed: false, optional: true, required: false
  private _prefix = new FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesPrefix) {
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

export class FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesList extends cdktf.ComplexList {
  public internalValue? : FiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries[] | cdktf.IResolvable

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
  public get(index: number): FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesOutputReference {
    return new FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersPrefixListRoutingProfileTypeIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#ipv4_entries FiltersPrefixListRoutingProfile#ipv4_entries}
  */
  readonly ipv4Entries?: FiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries[] | cdktf.IResolvable;
}

export function filtersPrefixListRoutingProfileTypeIpv4ToTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_entries: cdktf.listMapper(filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesToTerraform, false)(struct!.ipv4Entries),
  }
}


export function filtersPrefixListRoutingProfileTypeIpv4ToHclTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_entries: {
      value: cdktf.listMapperHcl(filtersPrefixListRoutingProfileTypeIpv4Ipv4EntriesToHclTerraform, false)(struct!.ipv4Entries),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersPrefixListRoutingProfileTypeIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileTypeIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileTypeIpv4 | cdktf.IResolvable | undefined) {
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

  // ipv4_entries - computed: false, optional: true, required: false
  private _ipv4Entries = new FiltersPrefixListRoutingProfileTypeIpv4Ipv4EntriesList(this, "ipv4_entries", false);
  public get ipv4Entries() {
    return this._ipv4Entries;
  }
  public putIpv4Entries(value: FiltersPrefixListRoutingProfileTypeIpv4Ipv4Entries[] | cdktf.IResolvable) {
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
export interface FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry {
  /**
  * Maximum Prefix length to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#greater_than_or_equal FiltersPrefixListRoutingProfile#greater_than_or_equal}
  */
  readonly greaterThanOrEqual?: number;
  /**
  * Minimum Prefix length to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#less_than_or_equal FiltersPrefixListRoutingProfile#less_than_or_equal}
  */
  readonly lessThanOrEqual?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#network FiltersPrefixListRoutingProfile#network}
  */
  readonly network?: string;
}

export function filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryToTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry | cdktf.IResolvable): any {
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


export function filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryToHclTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry | cdktf.IResolvable): any {
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

export class FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry | cdktf.IResolvable | undefined) {
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

  // greater_than_or_equal - computed: false, optional: true, required: false
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

  // less_than_or_equal - computed: false, optional: true, required: false
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

  // network - computed: false, optional: true, required: false
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
export interface FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#entry FiltersPrefixListRoutingProfile#entry}
  */
  readonly entry?: FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry;
  /**
  * Select pre-defined Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#network FiltersPrefixListRoutingProfile#network}
  */
  readonly network?: string;
}

export function filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixToTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryToTerraform(struct!.entry),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixToHclTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryToHclTerraform(struct!.entry),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry",
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

export class FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix | cdktf.IResolvable | undefined) {
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

  // entry - computed: false, optional: true, required: false
  private _entry = new FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntryOutputReference(this, "entry");
  public get entry() {
    return this._entry;
  }
  public putEntry(value: FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixEntry) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }

  // network - computed: false, optional: true, required: false
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
export interface FiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries {
  /**
  * Permit or Deny (default) this Prefix-List Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#action FiltersPrefixListRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#name FiltersPrefixListRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#prefix FiltersPrefixListRoutingProfile#prefix}
  */
  readonly prefix?: FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix;
}

export function filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesToTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixToTerraform(struct!.prefix),
  }
}


export function filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesToHclTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable): any {
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
      value: filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable | undefined) {
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

  // prefix - computed: false, optional: true, required: false
  private _prefix = new FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesPrefix) {
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

export class FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesList extends cdktf.ComplexList {
  public internalValue? : FiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries[] | cdktf.IResolvable

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
  public get(index: number): FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesOutputReference {
    return new FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersPrefixListRoutingProfileTypeIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#ipv6_entries FiltersPrefixListRoutingProfile#ipv6_entries}
  */
  readonly ipv6Entries?: FiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries[] | cdktf.IResolvable;
}

export function filtersPrefixListRoutingProfileTypeIpv6ToTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_entries: cdktf.listMapper(filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesToTerraform, false)(struct!.ipv6Entries),
  }
}


export function filtersPrefixListRoutingProfileTypeIpv6ToHclTerraform(struct?: FiltersPrefixListRoutingProfileTypeIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_entries: {
      value: cdktf.listMapperHcl(filtersPrefixListRoutingProfileTypeIpv6Ipv6EntriesToHclTerraform, false)(struct!.ipv6Entries),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersPrefixListRoutingProfileTypeIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileTypeIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileTypeIpv6 | cdktf.IResolvable | undefined) {
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

  // ipv6_entries - computed: false, optional: true, required: false
  private _ipv6Entries = new FiltersPrefixListRoutingProfileTypeIpv6Ipv6EntriesList(this, "ipv6_entries", false);
  public get ipv6Entries() {
    return this._ipv6Entries;
  }
  public putIpv6Entries(value: FiltersPrefixListRoutingProfileTypeIpv6Ipv6Entries[] | cdktf.IResolvable) {
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
export interface FiltersPrefixListRoutingProfileType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#ipv4 FiltersPrefixListRoutingProfile#ipv4}
  */
  readonly ipv4?: FiltersPrefixListRoutingProfileTypeIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#ipv6 FiltersPrefixListRoutingProfile#ipv6}
  */
  readonly ipv6?: FiltersPrefixListRoutingProfileTypeIpv6;
}

export function filtersPrefixListRoutingProfileTypeToTerraform(struct?: FiltersPrefixListRoutingProfileType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: filtersPrefixListRoutingProfileTypeIpv4ToTerraform(struct!.ipv4),
    ipv6: filtersPrefixListRoutingProfileTypeIpv6ToTerraform(struct!.ipv6),
  }
}


export function filtersPrefixListRoutingProfileTypeToHclTerraform(struct?: FiltersPrefixListRoutingProfileType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: filtersPrefixListRoutingProfileTypeIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersPrefixListRoutingProfileTypeIpv4",
    },
    ipv6: {
      value: filtersPrefixListRoutingProfileTypeIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersPrefixListRoutingProfileTypeIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersPrefixListRoutingProfileTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersPrefixListRoutingProfileType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersPrefixListRoutingProfileType | cdktf.IResolvable | undefined) {
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

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new FiltersPrefixListRoutingProfileTypeIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: FiltersPrefixListRoutingProfileTypeIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new FiltersPrefixListRoutingProfileTypeIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: FiltersPrefixListRoutingProfileTypeIpv6) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile panos_filters_prefix_list_routing_profile}
*/
export class FiltersPrefixListRoutingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_filters_prefix_list_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FiltersPrefixListRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FiltersPrefixListRoutingProfile to import
  * @param importFromId The id of the existing FiltersPrefixListRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FiltersPrefixListRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_filters_prefix_list_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_prefix_list_routing_profile panos_filters_prefix_list_routing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FiltersPrefixListRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: FiltersPrefixListRoutingProfileConfig) {
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

  // location - computed: false, optional: false, required: true
  private _location = new FiltersPrefixListRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: FiltersPrefixListRoutingProfileLocation) {
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

  // type - computed: false, optional: true, required: false
  private _type = new FiltersPrefixListRoutingProfileTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: FiltersPrefixListRoutingProfileType) {
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
      location: filtersPrefixListRoutingProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      type: filtersPrefixListRoutingProfileTypeToTerraform(this._type.internalValue),
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
        value: filtersPrefixListRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FiltersPrefixListRoutingProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: filtersPrefixListRoutingProfileTypeToHclTerraform(this._type.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FiltersPrefixListRoutingProfileType",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
