// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#device_acl Zone#device_acl}
  */
  readonly deviceAcl?: ZoneDeviceAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#enable_device_identification Zone#enable_device_identification}
  */
  readonly enableDeviceIdentification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#enable_user_identification Zone#enable_user_identification}
  */
  readonly enableUserIdentification?: boolean | cdktf.IResolvable;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#location Zone#location}
  */
  readonly location: ZoneLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#name Zone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#network Zone#network}
  */
  readonly network?: ZoneNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#user_acl Zone#user_acl}
  */
  readonly userAcl?: ZoneUserAcl;
}
export interface ZoneDeviceAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#exclude_list Zone#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#include_list Zone#include_list}
  */
  readonly includeList?: string[];
}

export function zoneDeviceAclToTerraform(struct?: ZoneDeviceAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeList),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
  }
}


export function zoneDeviceAclToHclTerraform(struct?: ZoneDeviceAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneDeviceAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneDeviceAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList;
    }
    if (this._includeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeList = this._includeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneDeviceAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeList = undefined;
      this._includeList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeList = value.excludeList;
      this._includeList = value.includeList;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList?: string[]; 
  public get excludeList() {
    return this.getListAttribute('exclude_list');
  }
  public set excludeList(value: string[]) {
    this._excludeList = value;
  }
  public resetExcludeList() {
    this._excludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return this.getListAttribute('include_list');
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
  }
}
export interface ZoneLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#name Zone#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#ngfw_device Zone#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#panorama_device Zone#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#vsys Zone#vsys}
  */
  readonly vsys?: string;
}

export function zoneLocationTemplateToTerraform(struct?: ZoneLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function zoneLocationTemplateToHclTerraform(struct?: ZoneLocationTemplate | cdktf.IResolvable): any {
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
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneLocationTemplate | cdktf.IResolvable | undefined {
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
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._vsys = undefined;
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
      this._vsys = value.vsys;
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

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface ZoneLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#name Zone#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#ngfw_device Zone#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#panorama_device Zone#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function zoneLocationTemplateStackToTerraform(struct?: ZoneLocationTemplateStack | cdktf.IResolvable): any {
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


export function zoneLocationTemplateStackToHclTerraform(struct?: ZoneLocationTemplateStack | cdktf.IResolvable): any {
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

export class ZoneLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZoneLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface ZoneLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#name Zone#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#ngfw_device Zone#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function zoneLocationVsysToTerraform(struct?: ZoneLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function zoneLocationVsysToHclTerraform(struct?: ZoneLocationVsys | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneLocationVsys | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneLocationVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
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
}
export interface ZoneLocation {
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#template Zone#template}
  */
  readonly template?: ZoneLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#template_stack Zone#template_stack}
  */
  readonly templateStack?: ZoneLocationTemplateStack;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#vsys Zone#vsys}
  */
  readonly vsys?: ZoneLocationVsys;
}

export function zoneLocationToTerraform(struct?: ZoneLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: zoneLocationTemplateToTerraform(struct!.template),
    template_stack: zoneLocationTemplateStackToTerraform(struct!.templateStack),
    vsys: zoneLocationVsysToTerraform(struct!.vsys),
  }
}


export function zoneLocationToHclTerraform(struct?: ZoneLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: zoneLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneLocationTemplate",
    },
    template_stack: {
      value: zoneLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneLocationTemplateStack",
    },
    vsys: {
      value: zoneLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
      this._vsys.internalValue = value.vsys;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template = new ZoneLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ZoneLocationTemplate) {
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
  private _templateStack = new ZoneLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: ZoneLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new ZoneLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: ZoneLocationVsys) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}
export interface ZoneNetworkTunnel {
}

export function zoneNetworkTunnelToTerraform(struct?: ZoneNetworkTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zoneNetworkTunnelToHclTerraform(struct?: ZoneNetworkTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZoneNetworkTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneNetworkTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneNetworkTunnel | cdktf.IResolvable | undefined) {
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
export interface ZoneNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#enable_packet_buffer_protection Zone#enable_packet_buffer_protection}
  */
  readonly enablePacketBufferProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#external Zone#external}
  */
  readonly external?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#layer2 Zone#layer2}
  */
  readonly layer2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#layer3 Zone#layer3}
  */
  readonly layer3?: string[];
  /**
  * Log setting for forwarding scan logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#log_setting Zone#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#net_inspection Zone#net_inspection}
  */
  readonly netInspection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#tap Zone#tap}
  */
  readonly tap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#tunnel Zone#tunnel}
  */
  readonly tunnel?: ZoneNetworkTunnel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#virtual_wire Zone#virtual_wire}
  */
  readonly virtualWire?: string[];
  /**
  * Zone protection profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#zone_protection_profile Zone#zone_protection_profile}
  */
  readonly zoneProtectionProfile?: string;
}

export function zoneNetworkToTerraform(struct?: ZoneNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_packet_buffer_protection: cdktf.booleanToTerraform(struct!.enablePacketBufferProtection),
    external: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.external),
    layer2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.layer2),
    layer3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.layer3),
    log_setting: cdktf.stringToTerraform(struct!.logSetting),
    net_inspection: cdktf.booleanToTerraform(struct!.netInspection),
    tap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tap),
    tunnel: zoneNetworkTunnelToTerraform(struct!.tunnel),
    virtual_wire: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virtualWire),
    zone_protection_profile: cdktf.stringToTerraform(struct!.zoneProtectionProfile),
  }
}


export function zoneNetworkToHclTerraform(struct?: ZoneNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_packet_buffer_protection: {
      value: cdktf.booleanToHclTerraform(struct!.enablePacketBufferProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.external),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    layer2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.layer2),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    layer3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.layer3),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_setting: {
      value: cdktf.stringToHclTerraform(struct!.logSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_inspection: {
      value: cdktf.booleanToHclTerraform(struct!.netInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tap),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tunnel: {
      value: zoneNetworkTunnelToHclTerraform(struct!.tunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneNetworkTunnel",
    },
    virtual_wire: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virtualWire),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    zone_protection_profile: {
      value: cdktf.stringToHclTerraform(struct!.zoneProtectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePacketBufferProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePacketBufferProtection = this._enablePacketBufferProtection;
    }
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._layer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer2 = this._layer2;
    }
    if (this._layer3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer3 = this._layer3;
    }
    if (this._logSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetting = this._logSetting;
    }
    if (this._netInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.netInspection = this._netInspection;
    }
    if (this._tap !== undefined) {
      hasAnyValues = true;
      internalValueResult.tap = this._tap;
    }
    if (this._tunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel?.internalValue;
    }
    if (this._virtualWire !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualWire = this._virtualWire;
    }
    if (this._zoneProtectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneProtectionProfile = this._zoneProtectionProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePacketBufferProtection = undefined;
      this._external = undefined;
      this._layer2 = undefined;
      this._layer3 = undefined;
      this._logSetting = undefined;
      this._netInspection = undefined;
      this._tap = undefined;
      this._tunnel.internalValue = undefined;
      this._virtualWire = undefined;
      this._zoneProtectionProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePacketBufferProtection = value.enablePacketBufferProtection;
      this._external = value.external;
      this._layer2 = value.layer2;
      this._layer3 = value.layer3;
      this._logSetting = value.logSetting;
      this._netInspection = value.netInspection;
      this._tap = value.tap;
      this._tunnel.internalValue = value.tunnel;
      this._virtualWire = value.virtualWire;
      this._zoneProtectionProfile = value.zoneProtectionProfile;
    }
  }

  // enable_packet_buffer_protection - computed: false, optional: true, required: false
  private _enablePacketBufferProtection?: boolean | cdktf.IResolvable; 
  public get enablePacketBufferProtection() {
    return this.getBooleanAttribute('enable_packet_buffer_protection');
  }
  public set enablePacketBufferProtection(value: boolean | cdktf.IResolvable) {
    this._enablePacketBufferProtection = value;
  }
  public resetEnablePacketBufferProtection() {
    this._enablePacketBufferProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePacketBufferProtectionInput() {
    return this._enablePacketBufferProtection;
  }

  // external - computed: false, optional: true, required: false
  private _external?: string[]; 
  public get external() {
    return this.getListAttribute('external');
  }
  public set external(value: string[]) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // layer2 - computed: false, optional: true, required: false
  private _layer2?: string[]; 
  public get layer2() {
    return this.getListAttribute('layer2');
  }
  public set layer2(value: string[]) {
    this._layer2 = value;
  }
  public resetLayer2() {
    this._layer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2Input() {
    return this._layer2;
  }

  // layer3 - computed: false, optional: true, required: false
  private _layer3?: string[]; 
  public get layer3() {
    return this.getListAttribute('layer3');
  }
  public set layer3(value: string[]) {
    this._layer3 = value;
  }
  public resetLayer3() {
    this._layer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer3Input() {
    return this._layer3;
  }

  // log_setting - computed: false, optional: true, required: false
  private _logSetting?: string; 
  public get logSetting() {
    return this.getStringAttribute('log_setting');
  }
  public set logSetting(value: string) {
    this._logSetting = value;
  }
  public resetLogSetting() {
    this._logSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingInput() {
    return this._logSetting;
  }

  // net_inspection - computed: false, optional: true, required: false
  private _netInspection?: boolean | cdktf.IResolvable; 
  public get netInspection() {
    return this.getBooleanAttribute('net_inspection');
  }
  public set netInspection(value: boolean | cdktf.IResolvable) {
    this._netInspection = value;
  }
  public resetNetInspection() {
    this._netInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInspectionInput() {
    return this._netInspection;
  }

  // tap - computed: false, optional: true, required: false
  private _tap?: string[]; 
  public get tap() {
    return this.getListAttribute('tap');
  }
  public set tap(value: string[]) {
    this._tap = value;
  }
  public resetTap() {
    this._tap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tapInput() {
    return this._tap;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel = new ZoneNetworkTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: ZoneNetworkTunnel) {
    this._tunnel.internalValue = value;
  }
  public resetTunnel() {
    this._tunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }

  // virtual_wire - computed: false, optional: true, required: false
  private _virtualWire?: string[]; 
  public get virtualWire() {
    return this.getListAttribute('virtual_wire');
  }
  public set virtualWire(value: string[]) {
    this._virtualWire = value;
  }
  public resetVirtualWire() {
    this._virtualWire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWireInput() {
    return this._virtualWire;
  }

  // zone_protection_profile - computed: false, optional: true, required: false
  private _zoneProtectionProfile?: string; 
  public get zoneProtectionProfile() {
    return this.getStringAttribute('zone_protection_profile');
  }
  public set zoneProtectionProfile(value: string) {
    this._zoneProtectionProfile = value;
  }
  public resetZoneProtectionProfile() {
    this._zoneProtectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneProtectionProfileInput() {
    return this._zoneProtectionProfile;
  }
}
export interface ZoneUserAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#exclude_list Zone#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#include_list Zone#include_list}
  */
  readonly includeList?: string[];
}

export function zoneUserAclToTerraform(struct?: ZoneUserAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeList),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
  }
}


export function zoneUserAclToHclTerraform(struct?: ZoneUserAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneUserAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneUserAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList;
    }
    if (this._includeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeList = this._includeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneUserAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeList = undefined;
      this._includeList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeList = value.excludeList;
      this._includeList = value.includeList;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList?: string[]; 
  public get excludeList() {
    return this.getListAttribute('exclude_list');
  }
  public set excludeList(value: string[]) {
    this._excludeList = value;
  }
  public resetExcludeList() {
    this._excludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return this.getListAttribute('include_list');
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone panos_zone}
*/
export class Zone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Zone to import
  * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Zone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/zone panos_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_zone',
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
    this._deviceAcl.internalValue = config.deviceAcl;
    this._enableDeviceIdentification = config.enableDeviceIdentification;
    this._enableUserIdentification = config.enableUserIdentification;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._network.internalValue = config.network;
    this._userAcl.internalValue = config.userAcl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_acl - computed: false, optional: true, required: false
  private _deviceAcl = new ZoneDeviceAclOutputReference(this, "device_acl");
  public get deviceAcl() {
    return this._deviceAcl;
  }
  public putDeviceAcl(value: ZoneDeviceAcl) {
    this._deviceAcl.internalValue = value;
  }
  public resetDeviceAcl() {
    this._deviceAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAclInput() {
    return this._deviceAcl.internalValue;
  }

  // enable_device_identification - computed: false, optional: true, required: false
  private _enableDeviceIdentification?: boolean | cdktf.IResolvable; 
  public get enableDeviceIdentification() {
    return this.getBooleanAttribute('enable_device_identification');
  }
  public set enableDeviceIdentification(value: boolean | cdktf.IResolvable) {
    this._enableDeviceIdentification = value;
  }
  public resetEnableDeviceIdentification() {
    this._enableDeviceIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeviceIdentificationInput() {
    return this._enableDeviceIdentification;
  }

  // enable_user_identification - computed: false, optional: true, required: false
  private _enableUserIdentification?: boolean | cdktf.IResolvable; 
  public get enableUserIdentification() {
    return this.getBooleanAttribute('enable_user_identification');
  }
  public set enableUserIdentification(value: boolean | cdktf.IResolvable) {
    this._enableUserIdentification = value;
  }
  public resetEnableUserIdentification() {
    this._enableUserIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserIdentificationInput() {
    return this._enableUserIdentification;
  }

  // location - computed: false, optional: false, required: true
  private _location = new ZoneLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: ZoneLocation) {
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

  // network - computed: false, optional: true, required: false
  private _network = new ZoneNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ZoneNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // user_acl - computed: false, optional: true, required: false
  private _userAcl = new ZoneUserAclOutputReference(this, "user_acl");
  public get userAcl() {
    return this._userAcl;
  }
  public putUserAcl(value: ZoneUserAcl) {
    this._userAcl.internalValue = value;
  }
  public resetUserAcl() {
    this._userAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAclInput() {
    return this._userAcl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_acl: zoneDeviceAclToTerraform(this._deviceAcl.internalValue),
      enable_device_identification: cdktf.booleanToTerraform(this._enableDeviceIdentification),
      enable_user_identification: cdktf.booleanToTerraform(this._enableUserIdentification),
      location: zoneLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network: zoneNetworkToTerraform(this._network.internalValue),
      user_acl: zoneUserAclToTerraform(this._userAcl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_acl: {
        value: zoneDeviceAclToHclTerraform(this._deviceAcl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneDeviceAcl",
      },
      enable_device_identification: {
        value: cdktf.booleanToHclTerraform(this._enableDeviceIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_user_identification: {
        value: cdktf.booleanToHclTerraform(this._enableUserIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: zoneLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: zoneNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneNetwork",
      },
      user_acl: {
        value: zoneUserAclToHclTerraform(this._userAcl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneUserAcl",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
