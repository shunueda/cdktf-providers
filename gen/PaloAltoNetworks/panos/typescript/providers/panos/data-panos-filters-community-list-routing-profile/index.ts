// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosFiltersCommunityListRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describe BGP Community-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#description DataPanosFiltersCommunityListRoutingProfile#description}
  */
  readonly description?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#location DataPanosFiltersCommunityListRoutingProfile#location}
  */
  readonly location: DataPanosFiltersCommunityListRoutingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#name DataPanosFiltersCommunityListRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#type DataPanosFiltersCommunityListRoutingProfile#type}
  */
  readonly type?: DataPanosFiltersCommunityListRoutingProfileType;
}
export interface DataPanosFiltersCommunityListRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#ngfw_device DataPanosFiltersCommunityListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosFiltersCommunityListRoutingProfileLocationNgfwToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosFiltersCommunityListRoutingProfileLocationNgfwToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileLocationNgfw | cdktf.IResolvable): any {
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

export class DataPanosFiltersCommunityListRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface DataPanosFiltersCommunityListRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#name DataPanosFiltersCommunityListRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#ngfw_device DataPanosFiltersCommunityListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#panorama_device DataPanosFiltersCommunityListRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosFiltersCommunityListRoutingProfileLocationTemplateToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosFiltersCommunityListRoutingProfileLocationTemplateToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosFiltersCommunityListRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosFiltersCommunityListRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#name DataPanosFiltersCommunityListRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#ngfw_device DataPanosFiltersCommunityListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#panorama_device DataPanosFiltersCommunityListRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosFiltersCommunityListRoutingProfileLocationTemplateStackToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosFiltersCommunityListRoutingProfileLocationTemplateStackToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosFiltersCommunityListRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosFiltersCommunityListRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#ngfw DataPanosFiltersCommunityListRoutingProfile#ngfw}
  */
  readonly ngfw?: DataPanosFiltersCommunityListRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#template DataPanosFiltersCommunityListRoutingProfile#template}
  */
  readonly template?: DataPanosFiltersCommunityListRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#template_stack DataPanosFiltersCommunityListRoutingProfile#template_stack}
  */
  readonly templateStack?: DataPanosFiltersCommunityListRoutingProfileLocationTemplateStack;
}

export function dataPanosFiltersCommunityListRoutingProfileLocationToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosFiltersCommunityListRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: dataPanosFiltersCommunityListRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosFiltersCommunityListRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosFiltersCommunityListRoutingProfileLocationToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosFiltersCommunityListRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersCommunityListRoutingProfileLocationNgfw",
    },
    template: {
      value: dataPanosFiltersCommunityListRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersCommunityListRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: dataPanosFiltersCommunityListRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersCommunityListRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersCommunityListRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new DataPanosFiltersCommunityListRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosFiltersCommunityListRoutingProfileLocationNgfw) {
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
  private _template = new DataPanosFiltersCommunityListRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosFiltersCommunityListRoutingProfileLocationTemplate) {
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
  private _templateStack = new DataPanosFiltersCommunityListRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosFiltersCommunityListRoutingProfileLocationTemplateStack) {
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
export interface DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntries {
  /**
  * Permit or Deny (default) this Extended Community-List Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#action DataPanosFiltersCommunityListRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#extended_community_regexes DataPanosFiltersCommunityListRoutingProfile#extended_community_regexes}
  */
  readonly extendedCommunityRegexes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#name DataPanosFiltersCommunityListRoutingProfile#name}
  */
  readonly name: string;
}

export function dataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntriesToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    extended_community_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedCommunityRegexes),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntriesToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntries | cdktf.IResolvable): any {
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
    extended_community_regexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extendedCommunityRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._extendedCommunityRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCommunityRegexes = this._extendedCommunityRegexes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._extendedCommunityRegexes = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._extendedCommunityRegexes = value.extendedCommunityRegexes;
      this._name = value.name;
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

  // extended_community_regexes - computed: true, optional: true, required: false
  private _extendedCommunityRegexes?: string[]; 
  public get extendedCommunityRegexes() {
    return this.getListAttribute('extended_community_regexes');
  }
  public set extendedCommunityRegexes(value: string[]) {
    this._extendedCommunityRegexes = value;
  }
  public resetExtendedCommunityRegexes() {
    this._extendedCommunityRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCommunityRegexesInput() {
    return this._extendedCommunityRegexes;
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
}

export class DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntriesList extends cdktf.ComplexList {
  public internalValue? : DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntries[] | cdktf.IResolvable

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
  public get(index: number): DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntriesOutputReference {
    return new DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosFiltersCommunityListRoutingProfileTypeExtended {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#extended_entries DataPanosFiltersCommunityListRoutingProfile#extended_entries}
  */
  readonly extendedEntries?: DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntries[] | cdktf.IResolvable;
}

export function dataPanosFiltersCommunityListRoutingProfileTypeExtendedToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_entries: cdktf.listMapper(dataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntriesToTerraform, false)(struct!.extendedEntries),
  }
}


export function dataPanosFiltersCommunityListRoutingProfileTypeExtendedToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_entries: {
      value: cdktf.listMapperHcl(dataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntriesToHclTerraform, false)(struct!.extendedEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersCommunityListRoutingProfileTypeExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileTypeExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedEntries = this._extendedEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileTypeExtended | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendedEntries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extendedEntries.internalValue = value.extendedEntries;
    }
  }

  // extended_entries - computed: true, optional: true, required: false
  private _extendedEntries = new DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntriesList(this, "extended_entries", false);
  public get extendedEntries() {
    return this._extendedEntries;
  }
  public putExtendedEntries(value: DataPanosFiltersCommunityListRoutingProfileTypeExtendedExtendedEntries[] | cdktf.IResolvable) {
    this._extendedEntries.internalValue = value;
  }
  public resetExtendedEntries() {
    this._extendedEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedEntriesInput() {
    return this._extendedEntries.internalValue;
  }
}
export interface DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntries {
  /**
  * Permit or Deny (default) this Large Community-List Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#action DataPanosFiltersCommunityListRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#large_community_regexes DataPanosFiltersCommunityListRoutingProfile#large_community_regexes}
  */
  readonly largeCommunityRegexes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#name DataPanosFiltersCommunityListRoutingProfile#name}
  */
  readonly name: string;
}

export function dataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntriesToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    large_community_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.largeCommunityRegexes),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntriesToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntries | cdktf.IResolvable): any {
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
    large_community_regexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.largeCommunityRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._largeCommunityRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCommunityRegexes = this._largeCommunityRegexes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._largeCommunityRegexes = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._largeCommunityRegexes = value.largeCommunityRegexes;
      this._name = value.name;
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

  // large_community_regexes - computed: true, optional: true, required: false
  private _largeCommunityRegexes?: string[]; 
  public get largeCommunityRegexes() {
    return this.getListAttribute('large_community_regexes');
  }
  public set largeCommunityRegexes(value: string[]) {
    this._largeCommunityRegexes = value;
  }
  public resetLargeCommunityRegexes() {
    this._largeCommunityRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommunityRegexesInput() {
    return this._largeCommunityRegexes;
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
}

export class DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntriesList extends cdktf.ComplexList {
  public internalValue? : DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntries[] | cdktf.IResolvable

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
  public get(index: number): DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntriesOutputReference {
    return new DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosFiltersCommunityListRoutingProfileTypeLarge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#large_entries DataPanosFiltersCommunityListRoutingProfile#large_entries}
  */
  readonly largeEntries?: DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntries[] | cdktf.IResolvable;
}

export function dataPanosFiltersCommunityListRoutingProfileTypeLargeToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    large_entries: cdktf.listMapper(dataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntriesToTerraform, false)(struct!.largeEntries),
  }
}


export function dataPanosFiltersCommunityListRoutingProfileTypeLargeToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    large_entries: {
      value: cdktf.listMapperHcl(dataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntriesToHclTerraform, false)(struct!.largeEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersCommunityListRoutingProfileTypeLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileTypeLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._largeEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeEntries = this._largeEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileTypeLarge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._largeEntries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._largeEntries.internalValue = value.largeEntries;
    }
  }

  // large_entries - computed: true, optional: true, required: false
  private _largeEntries = new DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntriesList(this, "large_entries", false);
  public get largeEntries() {
    return this._largeEntries;
  }
  public putLargeEntries(value: DataPanosFiltersCommunityListRoutingProfileTypeLargeLargeEntries[] | cdktf.IResolvable) {
    this._largeEntries.internalValue = value;
  }
  public resetLargeEntries() {
    this._largeEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeEntriesInput() {
    return this._largeEntries.internalValue;
  }
}
export interface DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntries {
  /**
  * Permit or Deny (default) this Regular Community-List Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#action DataPanosFiltersCommunityListRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#communities DataPanosFiltersCommunityListRoutingProfile#communities}
  */
  readonly communities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#name DataPanosFiltersCommunityListRoutingProfile#name}
  */
  readonly name: string;
}

export function dataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntriesToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    communities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.communities),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntriesToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntries | cdktf.IResolvable): any {
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
    communities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.communities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._communities !== undefined) {
      hasAnyValues = true;
      internalValueResult.communities = this._communities;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._communities = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._communities = value.communities;
      this._name = value.name;
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

  // communities - computed: true, optional: true, required: false
  private _communities?: string[]; 
  public get communities() {
    return this.getListAttribute('communities');
  }
  public set communities(value: string[]) {
    this._communities = value;
  }
  public resetCommunities() {
    this._communities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communitiesInput() {
    return this._communities;
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
}

export class DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntriesList extends cdktf.ComplexList {
  public internalValue? : DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntries[] | cdktf.IResolvable

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
  public get(index: number): DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntriesOutputReference {
    return new DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosFiltersCommunityListRoutingProfileTypeRegular {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#regular_entries DataPanosFiltersCommunityListRoutingProfile#regular_entries}
  */
  readonly regularEntries?: DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntries[] | cdktf.IResolvable;
}

export function dataPanosFiltersCommunityListRoutingProfileTypeRegularToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeRegular | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regular_entries: cdktf.listMapper(dataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntriesToTerraform, false)(struct!.regularEntries),
  }
}


export function dataPanosFiltersCommunityListRoutingProfileTypeRegularToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileTypeRegular | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regular_entries: {
      value: cdktf.listMapperHcl(dataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntriesToHclTerraform, false)(struct!.regularEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersCommunityListRoutingProfileTypeRegularOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileTypeRegular | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regularEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularEntries = this._regularEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileTypeRegular | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regularEntries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regularEntries.internalValue = value.regularEntries;
    }
  }

  // regular_entries - computed: true, optional: true, required: false
  private _regularEntries = new DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntriesList(this, "regular_entries", false);
  public get regularEntries() {
    return this._regularEntries;
  }
  public putRegularEntries(value: DataPanosFiltersCommunityListRoutingProfileTypeRegularRegularEntries[] | cdktf.IResolvable) {
    this._regularEntries.internalValue = value;
  }
  public resetRegularEntries() {
    this._regularEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularEntriesInput() {
    return this._regularEntries.internalValue;
  }
}
export interface DataPanosFiltersCommunityListRoutingProfileType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#extended DataPanosFiltersCommunityListRoutingProfile#extended}
  */
  readonly extended?: DataPanosFiltersCommunityListRoutingProfileTypeExtended;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#large DataPanosFiltersCommunityListRoutingProfile#large}
  */
  readonly large?: DataPanosFiltersCommunityListRoutingProfileTypeLarge;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#regular DataPanosFiltersCommunityListRoutingProfile#regular}
  */
  readonly regular?: DataPanosFiltersCommunityListRoutingProfileTypeRegular;
}

export function dataPanosFiltersCommunityListRoutingProfileTypeToTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended: dataPanosFiltersCommunityListRoutingProfileTypeExtendedToTerraform(struct!.extended),
    large: dataPanosFiltersCommunityListRoutingProfileTypeLargeToTerraform(struct!.large),
    regular: dataPanosFiltersCommunityListRoutingProfileTypeRegularToTerraform(struct!.regular),
  }
}


export function dataPanosFiltersCommunityListRoutingProfileTypeToHclTerraform(struct?: DataPanosFiltersCommunityListRoutingProfileType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended: {
      value: dataPanosFiltersCommunityListRoutingProfileTypeExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersCommunityListRoutingProfileTypeExtended",
    },
    large: {
      value: dataPanosFiltersCommunityListRoutingProfileTypeLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersCommunityListRoutingProfileTypeLarge",
    },
    regular: {
      value: dataPanosFiltersCommunityListRoutingProfileTypeRegularToHclTerraform(struct!.regular),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersCommunityListRoutingProfileTypeRegular",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersCommunityListRoutingProfileTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersCommunityListRoutingProfileType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extended?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extended = this._extended?.internalValue;
    }
    if (this._large?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.large = this._large?.internalValue;
    }
    if (this._regular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regular = this._regular?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersCommunityListRoutingProfileType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extended.internalValue = undefined;
      this._large.internalValue = undefined;
      this._regular.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extended.internalValue = value.extended;
      this._large.internalValue = value.large;
      this._regular.internalValue = value.regular;
    }
  }

  // extended - computed: true, optional: true, required: false
  private _extended = new DataPanosFiltersCommunityListRoutingProfileTypeExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: DataPanosFiltersCommunityListRoutingProfileTypeExtended) {
    this._extended.internalValue = value;
  }
  public resetExtended() {
    this._extended.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedInput() {
    return this._extended.internalValue;
  }

  // large - computed: true, optional: true, required: false
  private _large = new DataPanosFiltersCommunityListRoutingProfileTypeLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: DataPanosFiltersCommunityListRoutingProfileTypeLarge) {
    this._large.internalValue = value;
  }
  public resetLarge() {
    this._large.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeInput() {
    return this._large.internalValue;
  }

  // regular - computed: true, optional: true, required: false
  private _regular = new DataPanosFiltersCommunityListRoutingProfileTypeRegularOutputReference(this, "regular");
  public get regular() {
    return this._regular;
  }
  public putRegular(value: DataPanosFiltersCommunityListRoutingProfileTypeRegular) {
    this._regular.internalValue = value;
  }
  public resetRegular() {
    this._regular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularInput() {
    return this._regular.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile panos_filters_community_list_routing_profile}
*/
export class DataPanosFiltersCommunityListRoutingProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_filters_community_list_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosFiltersCommunityListRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosFiltersCommunityListRoutingProfile to import
  * @param importFromId The id of the existing DataPanosFiltersCommunityListRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosFiltersCommunityListRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_filters_community_list_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_community_list_routing_profile panos_filters_community_list_routing_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosFiltersCommunityListRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosFiltersCommunityListRoutingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_filters_community_list_routing_profile',
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
  private _location = new DataPanosFiltersCommunityListRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosFiltersCommunityListRoutingProfileLocation) {
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
  private _type = new DataPanosFiltersCommunityListRoutingProfileTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosFiltersCommunityListRoutingProfileType) {
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
      location: dataPanosFiltersCommunityListRoutingProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      type: dataPanosFiltersCommunityListRoutingProfileTypeToTerraform(this._type.internalValue),
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
        value: dataPanosFiltersCommunityListRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosFiltersCommunityListRoutingProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: dataPanosFiltersCommunityListRoutingProfileTypeToHclTerraform(this._type.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosFiltersCommunityListRoutingProfileType",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
