// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosInterfaceManagementProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#http DataPanosInterfaceManagementProfile#http}
  */
  readonly http?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#http_ocsp DataPanosInterfaceManagementProfile#http_ocsp}
  */
  readonly httpOcsp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#https DataPanosInterfaceManagementProfile#https}
  */
  readonly https?: boolean | cdktf.IResolvable;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#location DataPanosInterfaceManagementProfile#location}
  */
  readonly location: DataPanosInterfaceManagementProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#name DataPanosInterfaceManagementProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#permitted_ips DataPanosInterfaceManagementProfile#permitted_ips}
  */
  readonly permittedIps?: DataPanosInterfaceManagementProfilePermittedIps[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#ping DataPanosInterfaceManagementProfile#ping}
  */
  readonly ping?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#response_pages DataPanosInterfaceManagementProfile#response_pages}
  */
  readonly responsePages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#snmp DataPanosInterfaceManagementProfile#snmp}
  */
  readonly snmp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#ssh DataPanosInterfaceManagementProfile#ssh}
  */
  readonly ssh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#telnet DataPanosInterfaceManagementProfile#telnet}
  */
  readonly telnet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#userid_service DataPanosInterfaceManagementProfile#userid_service}
  */
  readonly useridService?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#userid_syslog_listener_ssl DataPanosInterfaceManagementProfile#userid_syslog_listener_ssl}
  */
  readonly useridSyslogListenerSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#userid_syslog_listener_udp DataPanosInterfaceManagementProfile#userid_syslog_listener_udp}
  */
  readonly useridSyslogListenerUdp?: boolean | cdktf.IResolvable;
}
export interface DataPanosInterfaceManagementProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#ngfw_device DataPanosInterfaceManagementProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosInterfaceManagementProfileLocationNgfwToTerraform(struct?: DataPanosInterfaceManagementProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosInterfaceManagementProfileLocationNgfwToHclTerraform(struct?: DataPanosInterfaceManagementProfileLocationNgfw | cdktf.IResolvable): any {
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

export class DataPanosInterfaceManagementProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosInterfaceManagementProfileLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosInterfaceManagementProfileLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface DataPanosInterfaceManagementProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#name DataPanosInterfaceManagementProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#ngfw_device DataPanosInterfaceManagementProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#panorama_device DataPanosInterfaceManagementProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosInterfaceManagementProfileLocationTemplateToTerraform(struct?: DataPanosInterfaceManagementProfileLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosInterfaceManagementProfileLocationTemplateToHclTerraform(struct?: DataPanosInterfaceManagementProfileLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosInterfaceManagementProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosInterfaceManagementProfileLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosInterfaceManagementProfileLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosInterfaceManagementProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#name DataPanosInterfaceManagementProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#ngfw_device DataPanosInterfaceManagementProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#panorama_device DataPanosInterfaceManagementProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosInterfaceManagementProfileLocationTemplateStackToTerraform(struct?: DataPanosInterfaceManagementProfileLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosInterfaceManagementProfileLocationTemplateStackToHclTerraform(struct?: DataPanosInterfaceManagementProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosInterfaceManagementProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosInterfaceManagementProfileLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosInterfaceManagementProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosInterfaceManagementProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#ngfw DataPanosInterfaceManagementProfile#ngfw}
  */
  readonly ngfw?: DataPanosInterfaceManagementProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#template DataPanosInterfaceManagementProfile#template}
  */
  readonly template?: DataPanosInterfaceManagementProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#template_stack DataPanosInterfaceManagementProfile#template_stack}
  */
  readonly templateStack?: DataPanosInterfaceManagementProfileLocationTemplateStack;
}

export function dataPanosInterfaceManagementProfileLocationToTerraform(struct?: DataPanosInterfaceManagementProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosInterfaceManagementProfileLocationNgfwToTerraform(struct!.ngfw),
    template: dataPanosInterfaceManagementProfileLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosInterfaceManagementProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosInterfaceManagementProfileLocationToHclTerraform(struct?: DataPanosInterfaceManagementProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosInterfaceManagementProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosInterfaceManagementProfileLocationNgfw",
    },
    template: {
      value: dataPanosInterfaceManagementProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosInterfaceManagementProfileLocationTemplate",
    },
    template_stack: {
      value: dataPanosInterfaceManagementProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosInterfaceManagementProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosInterfaceManagementProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosInterfaceManagementProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosInterfaceManagementProfileLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new DataPanosInterfaceManagementProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosInterfaceManagementProfileLocationNgfw) {
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
  private _template = new DataPanosInterfaceManagementProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosInterfaceManagementProfileLocationTemplate) {
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
  private _templateStack = new DataPanosInterfaceManagementProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosInterfaceManagementProfileLocationTemplateStack) {
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
export interface DataPanosInterfaceManagementProfilePermittedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#name DataPanosInterfaceManagementProfile#name}
  */
  readonly name: string;
}

export function dataPanosInterfaceManagementProfilePermittedIpsToTerraform(struct?: DataPanosInterfaceManagementProfilePermittedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosInterfaceManagementProfilePermittedIpsToHclTerraform(struct?: DataPanosInterfaceManagementProfilePermittedIps | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosInterfaceManagementProfilePermittedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosInterfaceManagementProfilePermittedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosInterfaceManagementProfilePermittedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataPanosInterfaceManagementProfilePermittedIpsList extends cdktf.ComplexList {
  public internalValue? : DataPanosInterfaceManagementProfilePermittedIps[] | cdktf.IResolvable

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
  public get(index: number): DataPanosInterfaceManagementProfilePermittedIpsOutputReference {
    return new DataPanosInterfaceManagementProfilePermittedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile panos_interface_management_profile}
*/
export class DataPanosInterfaceManagementProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_interface_management_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosInterfaceManagementProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosInterfaceManagementProfile to import
  * @param importFromId The id of the existing DataPanosInterfaceManagementProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosInterfaceManagementProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_interface_management_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/interface_management_profile panos_interface_management_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosInterfaceManagementProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosInterfaceManagementProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_interface_management_profile',
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
    this._http = config.http;
    this._httpOcsp = config.httpOcsp;
    this._https = config.https;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._permittedIps.internalValue = config.permittedIps;
    this._ping = config.ping;
    this._responsePages = config.responsePages;
    this._snmp = config.snmp;
    this._ssh = config.ssh;
    this._telnet = config.telnet;
    this._useridService = config.useridService;
    this._useridSyslogListenerSsl = config.useridSyslogListenerSsl;
    this._useridSyslogListenerUdp = config.useridSyslogListenerUdp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http - computed: true, optional: true, required: false
  private _http?: boolean | cdktf.IResolvable; 
  public get http() {
    return this.getBooleanAttribute('http');
  }
  public set http(value: boolean | cdktf.IResolvable) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // http_ocsp - computed: true, optional: true, required: false
  private _httpOcsp?: boolean | cdktf.IResolvable; 
  public get httpOcsp() {
    return this.getBooleanAttribute('http_ocsp');
  }
  public set httpOcsp(value: boolean | cdktf.IResolvable) {
    this._httpOcsp = value;
  }
  public resetHttpOcsp() {
    this._httpOcsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOcspInput() {
    return this._httpOcsp;
  }

  // https - computed: true, optional: true, required: false
  private _https?: boolean | cdktf.IResolvable; 
  public get https() {
    return this.getBooleanAttribute('https');
  }
  public set https(value: boolean | cdktf.IResolvable) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosInterfaceManagementProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosInterfaceManagementProfileLocation) {
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

  // permitted_ips - computed: true, optional: true, required: false
  private _permittedIps = new DataPanosInterfaceManagementProfilePermittedIpsList(this, "permitted_ips", false);
  public get permittedIps() {
    return this._permittedIps;
  }
  public putPermittedIps(value: DataPanosInterfaceManagementProfilePermittedIps[] | cdktf.IResolvable) {
    this._permittedIps.internalValue = value;
  }
  public resetPermittedIps() {
    this._permittedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedIpsInput() {
    return this._permittedIps.internalValue;
  }

  // ping - computed: true, optional: true, required: false
  private _ping?: boolean | cdktf.IResolvable; 
  public get ping() {
    return this.getBooleanAttribute('ping');
  }
  public set ping(value: boolean | cdktf.IResolvable) {
    this._ping = value;
  }
  public resetPing() {
    this._ping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingInput() {
    return this._ping;
  }

  // response_pages - computed: true, optional: true, required: false
  private _responsePages?: boolean | cdktf.IResolvable; 
  public get responsePages() {
    return this.getBooleanAttribute('response_pages');
  }
  public set responsePages(value: boolean | cdktf.IResolvable) {
    this._responsePages = value;
  }
  public resetResponsePages() {
    this._responsePages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePagesInput() {
    return this._responsePages;
  }

  // snmp - computed: true, optional: true, required: false
  private _snmp?: boolean | cdktf.IResolvable; 
  public get snmp() {
    return this.getBooleanAttribute('snmp');
  }
  public set snmp(value: boolean | cdktf.IResolvable) {
    this._snmp = value;
  }
  public resetSnmp() {
    this._snmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp;
  }

  // ssh - computed: true, optional: true, required: false
  private _ssh?: boolean | cdktf.IResolvable; 
  public get ssh() {
    return this.getBooleanAttribute('ssh');
  }
  public set ssh(value: boolean | cdktf.IResolvable) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // telnet - computed: true, optional: true, required: false
  private _telnet?: boolean | cdktf.IResolvable; 
  public get telnet() {
    return this.getBooleanAttribute('telnet');
  }
  public set telnet(value: boolean | cdktf.IResolvable) {
    this._telnet = value;
  }
  public resetTelnet() {
    this._telnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telnetInput() {
    return this._telnet;
  }

  // userid_service - computed: true, optional: true, required: false
  private _useridService?: boolean | cdktf.IResolvable; 
  public get useridService() {
    return this.getBooleanAttribute('userid_service');
  }
  public set useridService(value: boolean | cdktf.IResolvable) {
    this._useridService = value;
  }
  public resetUseridService() {
    this._useridService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridServiceInput() {
    return this._useridService;
  }

  // userid_syslog_listener_ssl - computed: true, optional: true, required: false
  private _useridSyslogListenerSsl?: boolean | cdktf.IResolvable; 
  public get useridSyslogListenerSsl() {
    return this.getBooleanAttribute('userid_syslog_listener_ssl');
  }
  public set useridSyslogListenerSsl(value: boolean | cdktf.IResolvable) {
    this._useridSyslogListenerSsl = value;
  }
  public resetUseridSyslogListenerSsl() {
    this._useridSyslogListenerSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridSyslogListenerSslInput() {
    return this._useridSyslogListenerSsl;
  }

  // userid_syslog_listener_udp - computed: true, optional: true, required: false
  private _useridSyslogListenerUdp?: boolean | cdktf.IResolvable; 
  public get useridSyslogListenerUdp() {
    return this.getBooleanAttribute('userid_syslog_listener_udp');
  }
  public set useridSyslogListenerUdp(value: boolean | cdktf.IResolvable) {
    this._useridSyslogListenerUdp = value;
  }
  public resetUseridSyslogListenerUdp() {
    this._useridSyslogListenerUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridSyslogListenerUdpInput() {
    return this._useridSyslogListenerUdp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http: cdktf.booleanToTerraform(this._http),
      http_ocsp: cdktf.booleanToTerraform(this._httpOcsp),
      https: cdktf.booleanToTerraform(this._https),
      location: dataPanosInterfaceManagementProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      permitted_ips: cdktf.listMapper(dataPanosInterfaceManagementProfilePermittedIpsToTerraform, false)(this._permittedIps.internalValue),
      ping: cdktf.booleanToTerraform(this._ping),
      response_pages: cdktf.booleanToTerraform(this._responsePages),
      snmp: cdktf.booleanToTerraform(this._snmp),
      ssh: cdktf.booleanToTerraform(this._ssh),
      telnet: cdktf.booleanToTerraform(this._telnet),
      userid_service: cdktf.booleanToTerraform(this._useridService),
      userid_syslog_listener_ssl: cdktf.booleanToTerraform(this._useridSyslogListenerSsl),
      userid_syslog_listener_udp: cdktf.booleanToTerraform(this._useridSyslogListenerUdp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http: {
        value: cdktf.booleanToHclTerraform(this._http),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_ocsp: {
        value: cdktf.booleanToHclTerraform(this._httpOcsp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      https: {
        value: cdktf.booleanToHclTerraform(this._https),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: dataPanosInterfaceManagementProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosInterfaceManagementProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permitted_ips: {
        value: cdktf.listMapperHcl(dataPanosInterfaceManagementProfilePermittedIpsToHclTerraform, false)(this._permittedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosInterfaceManagementProfilePermittedIpsList",
      },
      ping: {
        value: cdktf.booleanToHclTerraform(this._ping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_pages: {
        value: cdktf.booleanToHclTerraform(this._responsePages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snmp: {
        value: cdktf.booleanToHclTerraform(this._snmp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh: {
        value: cdktf.booleanToHclTerraform(this._ssh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      telnet: {
        value: cdktf.booleanToHclTerraform(this._telnet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      userid_service: {
        value: cdktf.booleanToHclTerraform(this._useridService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      userid_syslog_listener_ssl: {
        value: cdktf.booleanToHclTerraform(this._useridSyslogListenerSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      userid_syslog_listener_udp: {
        value: cdktf.booleanToHclTerraform(this._useridSyslogListenerUdp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
