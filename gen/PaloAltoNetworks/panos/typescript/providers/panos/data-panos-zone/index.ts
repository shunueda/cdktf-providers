// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#device_acl DataPanosZone#device_acl}
  */
  readonly deviceAcl?: DataPanosZoneDeviceAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#enable_device_identification DataPanosZone#enable_device_identification}
  */
  readonly enableDeviceIdentification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#enable_user_identification DataPanosZone#enable_user_identification}
  */
  readonly enableUserIdentification?: boolean | cdktf.IResolvable;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#location DataPanosZone#location}
  */
  readonly location: DataPanosZoneLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#name DataPanosZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#network DataPanosZone#network}
  */
  readonly network?: DataPanosZoneNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#user_acl DataPanosZone#user_acl}
  */
  readonly userAcl?: DataPanosZoneUserAcl;
}
export interface DataPanosZoneDeviceAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#exclude_list DataPanosZone#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#include_list DataPanosZone#include_list}
  */
  readonly includeList?: string[];
}

export function dataPanosZoneDeviceAclToTerraform(struct?: DataPanosZoneDeviceAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeList),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
  }
}


export function dataPanosZoneDeviceAclToHclTerraform(struct?: DataPanosZoneDeviceAcl | cdktf.IResolvable): any {
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

export class DataPanosZoneDeviceAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosZoneDeviceAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosZoneDeviceAcl | cdktf.IResolvable | undefined) {
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

  // exclude_list - computed: true, optional: true, required: false
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

  // include_list - computed: true, optional: true, required: false
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
export interface DataPanosZoneLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#name DataPanosZone#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#ngfw_device DataPanosZone#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#panorama_device DataPanosZone#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#vsys DataPanosZone#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosZoneLocationTemplateToTerraform(struct?: DataPanosZoneLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosZoneLocationTemplateToHclTerraform(struct?: DataPanosZoneLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosZoneLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosZoneLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosZoneLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosZoneLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#name DataPanosZone#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#ngfw_device DataPanosZone#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#panorama_device DataPanosZone#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosZoneLocationTemplateStackToTerraform(struct?: DataPanosZoneLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosZoneLocationTemplateStackToHclTerraform(struct?: DataPanosZoneLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosZoneLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosZoneLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosZoneLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosZoneLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#name DataPanosZone#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#ngfw_device DataPanosZone#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosZoneLocationVsysToTerraform(struct?: DataPanosZoneLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosZoneLocationVsysToHclTerraform(struct?: DataPanosZoneLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosZoneLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosZoneLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosZoneLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosZoneLocation {
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#template DataPanosZone#template}
  */
  readonly template?: DataPanosZoneLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#template_stack DataPanosZone#template_stack}
  */
  readonly templateStack?: DataPanosZoneLocationTemplateStack;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#vsys DataPanosZone#vsys}
  */
  readonly vsys?: DataPanosZoneLocationVsys;
}

export function dataPanosZoneLocationToTerraform(struct?: DataPanosZoneLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataPanosZoneLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosZoneLocationTemplateStackToTerraform(struct!.templateStack),
    vsys: dataPanosZoneLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosZoneLocationToHclTerraform(struct?: DataPanosZoneLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataPanosZoneLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosZoneLocationTemplate",
    },
    template_stack: {
      value: dataPanosZoneLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosZoneLocationTemplateStack",
    },
    vsys: {
      value: dataPanosZoneLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosZoneLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosZoneLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosZoneLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosZoneLocation | cdktf.IResolvable | undefined) {
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
  private _template = new DataPanosZoneLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosZoneLocationTemplate) {
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
  private _templateStack = new DataPanosZoneLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosZoneLocationTemplateStack) {
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
  private _vsys = new DataPanosZoneLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosZoneLocationVsys) {
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
export interface DataPanosZoneNetworkTunnel {
}

export function dataPanosZoneNetworkTunnelToTerraform(struct?: DataPanosZoneNetworkTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosZoneNetworkTunnelToHclTerraform(struct?: DataPanosZoneNetworkTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosZoneNetworkTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosZoneNetworkTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosZoneNetworkTunnel | cdktf.IResolvable | undefined) {
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
export interface DataPanosZoneNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#enable_packet_buffer_protection DataPanosZone#enable_packet_buffer_protection}
  */
  readonly enablePacketBufferProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#external DataPanosZone#external}
  */
  readonly external?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#layer2 DataPanosZone#layer2}
  */
  readonly layer2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#layer3 DataPanosZone#layer3}
  */
  readonly layer3?: string[];
  /**
  * Log setting for forwarding scan logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#log_setting DataPanosZone#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#net_inspection DataPanosZone#net_inspection}
  */
  readonly netInspection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#tap DataPanosZone#tap}
  */
  readonly tap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#tunnel DataPanosZone#tunnel}
  */
  readonly tunnel?: DataPanosZoneNetworkTunnel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#virtual_wire DataPanosZone#virtual_wire}
  */
  readonly virtualWire?: string[];
  /**
  * Zone protection profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#zone_protection_profile DataPanosZone#zone_protection_profile}
  */
  readonly zoneProtectionProfile?: string;
}

export function dataPanosZoneNetworkToTerraform(struct?: DataPanosZoneNetwork | cdktf.IResolvable): any {
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
    tunnel: dataPanosZoneNetworkTunnelToTerraform(struct!.tunnel),
    virtual_wire: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virtualWire),
    zone_protection_profile: cdktf.stringToTerraform(struct!.zoneProtectionProfile),
  }
}


export function dataPanosZoneNetworkToHclTerraform(struct?: DataPanosZoneNetwork | cdktf.IResolvable): any {
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
      value: dataPanosZoneNetworkTunnelToHclTerraform(struct!.tunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosZoneNetworkTunnel",
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

export class DataPanosZoneNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosZoneNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosZoneNetwork | cdktf.IResolvable | undefined) {
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

  // enable_packet_buffer_protection - computed: true, optional: true, required: false
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

  // external - computed: true, optional: true, required: false
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

  // layer2 - computed: true, optional: true, required: false
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

  // layer3 - computed: true, optional: true, required: false
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

  // log_setting - computed: true, optional: true, required: false
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

  // net_inspection - computed: true, optional: true, required: false
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

  // tap - computed: true, optional: true, required: false
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

  // tunnel - computed: true, optional: true, required: false
  private _tunnel = new DataPanosZoneNetworkTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: DataPanosZoneNetworkTunnel) {
    this._tunnel.internalValue = value;
  }
  public resetTunnel() {
    this._tunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }

  // virtual_wire - computed: true, optional: true, required: false
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

  // zone_protection_profile - computed: true, optional: true, required: false
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
export interface DataPanosZoneUserAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#exclude_list DataPanosZone#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#include_list DataPanosZone#include_list}
  */
  readonly includeList?: string[];
}

export function dataPanosZoneUserAclToTerraform(struct?: DataPanosZoneUserAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeList),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
  }
}


export function dataPanosZoneUserAclToHclTerraform(struct?: DataPanosZoneUserAcl | cdktf.IResolvable): any {
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

export class DataPanosZoneUserAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosZoneUserAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosZoneUserAcl | cdktf.IResolvable | undefined) {
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

  // exclude_list - computed: true, optional: true, required: false
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

  // include_list - computed: true, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone panos_zone}
*/
export class DataPanosZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosZone to import
  * @param importFromId The id of the existing DataPanosZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/zone panos_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_zone',
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

  // device_acl - computed: true, optional: true, required: false
  private _deviceAcl = new DataPanosZoneDeviceAclOutputReference(this, "device_acl");
  public get deviceAcl() {
    return this._deviceAcl;
  }
  public putDeviceAcl(value: DataPanosZoneDeviceAcl) {
    this._deviceAcl.internalValue = value;
  }
  public resetDeviceAcl() {
    this._deviceAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAclInput() {
    return this._deviceAcl.internalValue;
  }

  // enable_device_identification - computed: true, optional: true, required: false
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

  // enable_user_identification - computed: true, optional: true, required: false
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
  private _location = new DataPanosZoneLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosZoneLocation) {
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

  // network - computed: true, optional: true, required: false
  private _network = new DataPanosZoneNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataPanosZoneNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // user_acl - computed: true, optional: true, required: false
  private _userAcl = new DataPanosZoneUserAclOutputReference(this, "user_acl");
  public get userAcl() {
    return this._userAcl;
  }
  public putUserAcl(value: DataPanosZoneUserAcl) {
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
      device_acl: dataPanosZoneDeviceAclToTerraform(this._deviceAcl.internalValue),
      enable_device_identification: cdktf.booleanToTerraform(this._enableDeviceIdentification),
      enable_user_identification: cdktf.booleanToTerraform(this._enableUserIdentification),
      location: dataPanosZoneLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network: dataPanosZoneNetworkToTerraform(this._network.internalValue),
      user_acl: dataPanosZoneUserAclToTerraform(this._userAcl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_acl: {
        value: dataPanosZoneDeviceAclToHclTerraform(this._deviceAcl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosZoneDeviceAcl",
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
        value: dataPanosZoneLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosZoneLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: dataPanosZoneNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosZoneNetwork",
      },
      user_acl: {
        value: dataPanosZoneUserAclToHclTerraform(this._userAcl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosZoneUserAcl",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
