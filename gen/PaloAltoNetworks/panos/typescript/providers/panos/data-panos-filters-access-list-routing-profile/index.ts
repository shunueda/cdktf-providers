// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosFiltersAccessListRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describe Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#description DataPanosFiltersAccessListRoutingProfile#description}
  */
  readonly description?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#location DataPanosFiltersAccessListRoutingProfile#location}
  */
  readonly location: DataPanosFiltersAccessListRoutingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#name DataPanosFiltersAccessListRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#type DataPanosFiltersAccessListRoutingProfile#type}
  */
  readonly type?: DataPanosFiltersAccessListRoutingProfileType;
}
export interface DataPanosFiltersAccessListRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#ngfw_device DataPanosFiltersAccessListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosFiltersAccessListRoutingProfileLocationNgfwToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosFiltersAccessListRoutingProfileLocationNgfwToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileLocationNgfw | cdktf.IResolvable): any {
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

export class DataPanosFiltersAccessListRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface DataPanosFiltersAccessListRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#name DataPanosFiltersAccessListRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#ngfw_device DataPanosFiltersAccessListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#panorama_device DataPanosFiltersAccessListRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosFiltersAccessListRoutingProfileLocationTemplateToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosFiltersAccessListRoutingProfileLocationTemplateToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosFiltersAccessListRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosFiltersAccessListRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#name DataPanosFiltersAccessListRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#ngfw_device DataPanosFiltersAccessListRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#panorama_device DataPanosFiltersAccessListRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosFiltersAccessListRoutingProfileLocationTemplateStackToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosFiltersAccessListRoutingProfileLocationTemplateStackToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosFiltersAccessListRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosFiltersAccessListRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#ngfw DataPanosFiltersAccessListRoutingProfile#ngfw}
  */
  readonly ngfw?: DataPanosFiltersAccessListRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#template DataPanosFiltersAccessListRoutingProfile#template}
  */
  readonly template?: DataPanosFiltersAccessListRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#template_stack DataPanosFiltersAccessListRoutingProfile#template_stack}
  */
  readonly templateStack?: DataPanosFiltersAccessListRoutingProfileLocationTemplateStack;
}

export function dataPanosFiltersAccessListRoutingProfileLocationToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosFiltersAccessListRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: dataPanosFiltersAccessListRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosFiltersAccessListRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosFiltersAccessListRoutingProfileLocationToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosFiltersAccessListRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileLocationNgfw",
    },
    template: {
      value: dataPanosFiltersAccessListRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: dataPanosFiltersAccessListRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new DataPanosFiltersAccessListRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosFiltersAccessListRoutingProfileLocationNgfw) {
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
  private _template = new DataPanosFiltersAccessListRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosFiltersAccessListRoutingProfileLocationTemplate) {
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
  private _templateStack = new DataPanosFiltersAccessListRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosFiltersAccessListRoutingProfileLocationTemplateStack) {
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
export interface DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntry {
  /**
  * Configure IPv4 Destination Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#address DataPanosFiltersAccessListRoutingProfile#address}
  */
  readonly address?: string;
  /**
  * Configure IPv4 Destination Wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#wildcard DataPanosFiltersAccessListRoutingProfile#wildcard}
  */
  readonly wildcard?: string;
}

export function dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntryToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    wildcard: cdktf.stringToTerraform(struct!.wildcard),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntryToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard: {
      value: cdktf.stringToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._wildcard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._wildcard = value.wildcard;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // wildcard - computed: true, optional: true, required: false
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }
}
export interface DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddress {
  /**
  * Select pre-defined Destination Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#address DataPanosFiltersAccessListRoutingProfile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#entry DataPanosFiltersAccessListRoutingProfile#entry}
  */
  readonly entry?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntry;
}

export function dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    entry: dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntryToTerraform(struct!.entry),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry: {
      value: dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntryToHclTerraform(struct!.entry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntry",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._entry.internalValue = value.entry;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // entry - computed: true, optional: true, required: false
  private _entry = new DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntryOutputReference(this, "entry");
  public get entry() {
    return this._entry;
  }
  public putEntry(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressEntry) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}
export interface DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntry {
  /**
  * Configure IPv4 Source Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#address DataPanosFiltersAccessListRoutingProfile#address}
  */
  readonly address?: string;
  /**
  * Configure IPv4 Source Wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#wildcard DataPanosFiltersAccessListRoutingProfile#wildcard}
  */
  readonly wildcard?: string;
}

export function dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntryToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    wildcard: cdktf.stringToTerraform(struct!.wildcard),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntryToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard: {
      value: cdktf.stringToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._wildcard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._wildcard = value.wildcard;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // wildcard - computed: true, optional: true, required: false
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }
}
export interface DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddress {
  /**
  * Select pre-defined Source Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#address DataPanosFiltersAccessListRoutingProfile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#entry DataPanosFiltersAccessListRoutingProfile#entry}
  */
  readonly entry?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntry;
}

export function dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    entry: dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntryToTerraform(struct!.entry),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry: {
      value: dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntryToHclTerraform(struct!.entry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntry",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._entry.internalValue = value.entry;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // entry - computed: true, optional: true, required: false
  private _entry = new DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntryOutputReference(this, "entry");
  public get entry() {
    return this._entry;
  }
  public putEntry(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressEntry) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}
export interface DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4Entries {
  /**
  * Permit or Deny (default) this Access-List Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#action DataPanosFiltersAccessListRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#destination_address DataPanosFiltersAccessListRoutingProfile#destination_address}
  */
  readonly destinationAddress?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#name DataPanosFiltersAccessListRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#source_address DataPanosFiltersAccessListRoutingProfile#source_address}
  */
  readonly sourceAddress?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddress;
}

export function dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    destination_address: dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressToTerraform(struct!.destinationAddress),
    name: cdktf.stringToTerraform(struct!.name),
    source_address: dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressToTerraform(struct!.sourceAddress),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable): any {
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
    destination_address: {
      value: dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressToHclTerraform(struct!.destinationAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddress",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressToHclTerraform(struct!.sourceAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destinationAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4Entries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destinationAddress.internalValue = undefined;
      this._name = undefined;
      this._sourceAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destinationAddress.internalValue = value.destinationAddress;
      this._name = value.name;
      this._sourceAddress.internalValue = value.sourceAddress;
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

  // destination_address - computed: true, optional: true, required: false
  private _destinationAddress = new DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddressOutputReference(this, "destination_address");
  public get destinationAddress() {
    return this._destinationAddress;
  }
  public putDestinationAddress(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesDestinationAddress) {
    this._destinationAddress.internalValue = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress.internalValue;
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

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress = new DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddressOutputReference(this, "source_address");
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesSourceAddress) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesList extends cdktf.ComplexList {
  public internalValue? : DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4Entries[] | cdktf.IResolvable

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
  public get(index: number): DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesOutputReference {
    return new DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosFiltersAccessListRoutingProfileTypeIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#ipv4_entries DataPanosFiltersAccessListRoutingProfile#ipv4_entries}
  */
  readonly ipv4Entries?: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4Entries[] | cdktf.IResolvable;
}

export function dataPanosFiltersAccessListRoutingProfileTypeIpv4ToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_entries: cdktf.listMapper(dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesToTerraform, false)(struct!.ipv4Entries),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeIpv4ToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_entries: {
      value: cdktf.listMapperHcl(dataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesToHclTerraform, false)(struct!.ipv4Entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileTypeIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4 | cdktf.IResolvable | undefined) {
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
  private _ipv4Entries = new DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4EntriesList(this, "ipv4_entries", false);
  public get ipv4Entries() {
    return this._ipv4Entries;
  }
  public putIpv4Entries(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4Ipv4Entries[] | cdktf.IResolvable) {
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
export interface DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntry {
  /**
  * Configure IPv6 Access-List Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#address DataPanosFiltersAccessListRoutingProfile#address}
  */
  readonly address?: string;
  /**
  * Exact Match of this address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#exact_match DataPanosFiltersAccessListRoutingProfile#exact_match}
  */
  readonly exactMatch?: boolean | cdktf.IResolvable;
}

export function dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntryToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    exact_match: cdktf.booleanToTerraform(struct!.exactMatch),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntryToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_match: {
      value: cdktf.booleanToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._exactMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._exactMatch = value.exactMatch;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // exact_match - computed: true, optional: true, required: false
  private _exactMatch?: boolean | cdktf.IResolvable; 
  public get exactMatch() {
    return this.getBooleanAttribute('exact_match');
  }
  public set exactMatch(value: boolean | cdktf.IResolvable) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }
}
export interface DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddress {
  /**
  * Select pre-defined Source Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#address DataPanosFiltersAccessListRoutingProfile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#entry DataPanosFiltersAccessListRoutingProfile#entry}
  */
  readonly entry?: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntry;
}

export function dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    entry: dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntryToTerraform(struct!.entry),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry: {
      value: dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntryToHclTerraform(struct!.entry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntry",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._entry.internalValue = value.entry;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // entry - computed: true, optional: true, required: false
  private _entry = new DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntryOutputReference(this, "entry");
  public get entry() {
    return this._entry;
  }
  public putEntry(value: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressEntry) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}
export interface DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6Entries {
  /**
  * Permit or Deny (default) this Access-List Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#action DataPanosFiltersAccessListRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#name DataPanosFiltersAccessListRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#source_address DataPanosFiltersAccessListRoutingProfile#source_address}
  */
  readonly sourceAddress?: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddress;
}

export function dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    source_address: dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressToTerraform(struct!.sourceAddress),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable): any {
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
    source_address: {
      value: dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressToHclTerraform(struct!.sourceAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable | undefined {
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
    if (this._sourceAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6Entries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._sourceAddress.internalValue = undefined;
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
      this._sourceAddress.internalValue = value.sourceAddress;
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

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress = new DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddressOutputReference(this, "source_address");
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesSourceAddress) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesList extends cdktf.ComplexList {
  public internalValue? : DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6Entries[] | cdktf.IResolvable

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
  public get(index: number): DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesOutputReference {
    return new DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosFiltersAccessListRoutingProfileTypeIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#ipv6_entries DataPanosFiltersAccessListRoutingProfile#ipv6_entries}
  */
  readonly ipv6Entries?: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6Entries[] | cdktf.IResolvable;
}

export function dataPanosFiltersAccessListRoutingProfileTypeIpv6ToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_entries: cdktf.listMapper(dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesToTerraform, false)(struct!.ipv6Entries),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeIpv6ToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileTypeIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_entries: {
      value: cdktf.listMapperHcl(dataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesToHclTerraform, false)(struct!.ipv6Entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileTypeIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileTypeIpv6 | cdktf.IResolvable | undefined) {
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
  private _ipv6Entries = new DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6EntriesList(this, "ipv6_entries", false);
  public get ipv6Entries() {
    return this._ipv6Entries;
  }
  public putIpv6Entries(value: DataPanosFiltersAccessListRoutingProfileTypeIpv6Ipv6Entries[] | cdktf.IResolvable) {
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
export interface DataPanosFiltersAccessListRoutingProfileType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#ipv4 DataPanosFiltersAccessListRoutingProfile#ipv4}
  */
  readonly ipv4?: DataPanosFiltersAccessListRoutingProfileTypeIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#ipv6 DataPanosFiltersAccessListRoutingProfile#ipv6}
  */
  readonly ipv6?: DataPanosFiltersAccessListRoutingProfileTypeIpv6;
}

export function dataPanosFiltersAccessListRoutingProfileTypeToTerraform(struct?: DataPanosFiltersAccessListRoutingProfileType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: dataPanosFiltersAccessListRoutingProfileTypeIpv4ToTerraform(struct!.ipv4),
    ipv6: dataPanosFiltersAccessListRoutingProfileTypeIpv6ToTerraform(struct!.ipv6),
  }
}


export function dataPanosFiltersAccessListRoutingProfileTypeToHclTerraform(struct?: DataPanosFiltersAccessListRoutingProfileType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: dataPanosFiltersAccessListRoutingProfileTypeIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileTypeIpv4",
    },
    ipv6: {
      value: dataPanosFiltersAccessListRoutingProfileTypeIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosFiltersAccessListRoutingProfileTypeIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosFiltersAccessListRoutingProfileTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosFiltersAccessListRoutingProfileType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosFiltersAccessListRoutingProfileType | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new DataPanosFiltersAccessListRoutingProfileTypeIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DataPanosFiltersAccessListRoutingProfileTypeIpv4) {
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
  private _ipv6 = new DataPanosFiltersAccessListRoutingProfileTypeIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosFiltersAccessListRoutingProfileTypeIpv6) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile panos_filters_access_list_routing_profile}
*/
export class DataPanosFiltersAccessListRoutingProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_filters_access_list_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosFiltersAccessListRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosFiltersAccessListRoutingProfile to import
  * @param importFromId The id of the existing DataPanosFiltersAccessListRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosFiltersAccessListRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_filters_access_list_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/filters_access_list_routing_profile panos_filters_access_list_routing_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosFiltersAccessListRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosFiltersAccessListRoutingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_filters_access_list_routing_profile',
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
  private _location = new DataPanosFiltersAccessListRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosFiltersAccessListRoutingProfileLocation) {
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
  private _type = new DataPanosFiltersAccessListRoutingProfileTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosFiltersAccessListRoutingProfileType) {
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
      location: dataPanosFiltersAccessListRoutingProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      type: dataPanosFiltersAccessListRoutingProfileTypeToTerraform(this._type.internalValue),
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
        value: dataPanosFiltersAccessListRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosFiltersAccessListRoutingProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: dataPanosFiltersAccessListRoutingProfileTypeToHclTerraform(this._type.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosFiltersAccessListRoutingProfileType",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
