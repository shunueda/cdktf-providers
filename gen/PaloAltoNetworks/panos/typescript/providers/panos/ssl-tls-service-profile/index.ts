// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslTlsServiceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * SSL certificate file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#certificate SslTlsServiceProfile#certificate}
  */
  readonly certificate: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#location SslTlsServiceProfile#location}
  */
  readonly location: SslTlsServiceProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#name SslTlsServiceProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#protocol_settings SslTlsServiceProfile#protocol_settings}
  */
  readonly protocolSettings?: SslTlsServiceProfileProtocolSettings;
}
export interface SslTlsServiceProfileLocationPanorama {
}

export function sslTlsServiceProfileLocationPanoramaToTerraform(struct?: SslTlsServiceProfileLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sslTlsServiceProfileLocationPanoramaToHclTerraform(struct?: SslTlsServiceProfileLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SslTlsServiceProfileLocationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslTlsServiceProfileLocationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslTlsServiceProfileLocationPanorama | cdktf.IResolvable | undefined) {
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
export interface SslTlsServiceProfileLocationShared {
}

export function sslTlsServiceProfileLocationSharedToTerraform(struct?: SslTlsServiceProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sslTlsServiceProfileLocationSharedToHclTerraform(struct?: SslTlsServiceProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SslTlsServiceProfileLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslTlsServiceProfileLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslTlsServiceProfileLocationShared | cdktf.IResolvable | undefined) {
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
export interface SslTlsServiceProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#name SslTlsServiceProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#ngfw_device SslTlsServiceProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#panorama_device SslTlsServiceProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function sslTlsServiceProfileLocationTemplateToTerraform(struct?: SslTlsServiceProfileLocationTemplate | cdktf.IResolvable): any {
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


export function sslTlsServiceProfileLocationTemplateToHclTerraform(struct?: SslTlsServiceProfileLocationTemplate | cdktf.IResolvable): any {
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

export class SslTlsServiceProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslTlsServiceProfileLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SslTlsServiceProfileLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface SslTlsServiceProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#name SslTlsServiceProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#ngfw_device SslTlsServiceProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#panorama_device SslTlsServiceProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function sslTlsServiceProfileLocationTemplateStackToTerraform(struct?: SslTlsServiceProfileLocationTemplateStack | cdktf.IResolvable): any {
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


export function sslTlsServiceProfileLocationTemplateStackToHclTerraform(struct?: SslTlsServiceProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class SslTlsServiceProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslTlsServiceProfileLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SslTlsServiceProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface SslTlsServiceProfileLocationTemplateStackVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#ngfw_device SslTlsServiceProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#panorama_device SslTlsServiceProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#template_stack SslTlsServiceProfile#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#vsys SslTlsServiceProfile#vsys}
  */
  readonly vsys?: string;
}

export function sslTlsServiceProfileLocationTemplateStackVsysToTerraform(struct?: SslTlsServiceProfileLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template_stack: cdktf.stringToTerraform(struct!.templateStack),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function sslTlsServiceProfileLocationTemplateStackVsysToHclTerraform(struct?: SslTlsServiceProfileLocationTemplateStackVsys | cdktf.IResolvable): any {
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
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_stack: {
      value: cdktf.stringToHclTerraform(struct!.templateStack),
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

export class SslTlsServiceProfileLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslTlsServiceProfileLocationTemplateStackVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._templateStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslTlsServiceProfileLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._templateStack = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._templateStack = value.templateStack;
      this._vsys = value.vsys;
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

  // template_stack - computed: true, optional: true, required: false
  private _templateStack?: string; 
  public get templateStack() {
    return this.getStringAttribute('template_stack');
  }
  public set templateStack(value: string) {
    this._templateStack = value;
  }
  public resetTemplateStack() {
    this._templateStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack;
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
export interface SslTlsServiceProfileLocationTemplateVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#ngfw_device SslTlsServiceProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#panorama_device SslTlsServiceProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#template SslTlsServiceProfile#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#vsys SslTlsServiceProfile#vsys}
  */
  readonly vsys?: string;
}

export function sslTlsServiceProfileLocationTemplateVsysToTerraform(struct?: SslTlsServiceProfileLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template: cdktf.stringToTerraform(struct!.template),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function sslTlsServiceProfileLocationTemplateVsysToHclTerraform(struct?: SslTlsServiceProfileLocationTemplateVsys | cdktf.IResolvable): any {
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
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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

export class SslTlsServiceProfileLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslTlsServiceProfileLocationTemplateVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslTlsServiceProfileLocationTemplateVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._template = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._template = value.template;
      this._vsys = value.vsys;
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

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface SslTlsServiceProfileLocation {
  /**
  * Located in a panorama.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#panorama SslTlsServiceProfile#panorama}
  */
  readonly panorama?: SslTlsServiceProfileLocationPanorama;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#shared SslTlsServiceProfile#shared}
  */
  readonly shared?: SslTlsServiceProfileLocationShared;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#template SslTlsServiceProfile#template}
  */
  readonly template?: SslTlsServiceProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#template_stack SslTlsServiceProfile#template_stack}
  */
  readonly templateStack?: SslTlsServiceProfileLocationTemplateStack;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#template_stack_vsys SslTlsServiceProfile#template_stack_vsys}
  */
  readonly templateStackVsys?: SslTlsServiceProfileLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#template_vsys SslTlsServiceProfile#template_vsys}
  */
  readonly templateVsys?: SslTlsServiceProfileLocationTemplateVsys;
}

export function sslTlsServiceProfileLocationToTerraform(struct?: SslTlsServiceProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    panorama: sslTlsServiceProfileLocationPanoramaToTerraform(struct!.panorama),
    shared: sslTlsServiceProfileLocationSharedToTerraform(struct!.shared),
    template: sslTlsServiceProfileLocationTemplateToTerraform(struct!.template),
    template_stack: sslTlsServiceProfileLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: sslTlsServiceProfileLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: sslTlsServiceProfileLocationTemplateVsysToTerraform(struct!.templateVsys),
  }
}


export function sslTlsServiceProfileLocationToHclTerraform(struct?: SslTlsServiceProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    panorama: {
      value: sslTlsServiceProfileLocationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "SslTlsServiceProfileLocationPanorama",
    },
    shared: {
      value: sslTlsServiceProfileLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "SslTlsServiceProfileLocationShared",
    },
    template: {
      value: sslTlsServiceProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "SslTlsServiceProfileLocationTemplate",
    },
    template_stack: {
      value: sslTlsServiceProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "SslTlsServiceProfileLocationTemplateStack",
    },
    template_stack_vsys: {
      value: sslTlsServiceProfileLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "SslTlsServiceProfileLocationTemplateStackVsys",
    },
    template_vsys: {
      value: sslTlsServiceProfileLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "SslTlsServiceProfileLocationTemplateVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslTlsServiceProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslTlsServiceProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._panorama?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panorama = this._panorama?.internalValue;
    }
    if (this._shared?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    if (this._templateStackVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStackVsys = this._templateStackVsys?.internalValue;
    }
    if (this._templateVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVsys = this._templateVsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslTlsServiceProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._panorama.internalValue = undefined;
      this._shared.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._templateStackVsys.internalValue = undefined;
      this._templateVsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._panorama.internalValue = value.panorama;
      this._shared.internalValue = value.shared;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
      this._templateStackVsys.internalValue = value.templateStackVsys;
      this._templateVsys.internalValue = value.templateVsys;
    }
  }

  // panorama - computed: false, optional: true, required: false
  private _panorama = new SslTlsServiceProfileLocationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: SslTlsServiceProfileLocationPanorama) {
    this._panorama.internalValue = value;
  }
  public resetPanorama() {
    this._panorama.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaInput() {
    return this._panorama.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new SslTlsServiceProfileLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: SslTlsServiceProfileLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new SslTlsServiceProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: SslTlsServiceProfileLocationTemplate) {
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
  private _templateStack = new SslTlsServiceProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: SslTlsServiceProfileLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }

  // template_stack_vsys - computed: false, optional: true, required: false
  private _templateStackVsys = new SslTlsServiceProfileLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: SslTlsServiceProfileLocationTemplateStackVsys) {
    this._templateStackVsys.internalValue = value;
  }
  public resetTemplateStackVsys() {
    this._templateStackVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackVsysInput() {
    return this._templateStackVsys.internalValue;
  }

  // template_vsys - computed: false, optional: true, required: false
  private _templateVsys = new SslTlsServiceProfileLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: SslTlsServiceProfileLocationTemplateVsys) {
    this._templateVsys.internalValue = value;
  }
  public resetTemplateVsys() {
    this._templateVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVsysInput() {
    return this._templateVsys.internalValue;
  }
}
export interface SslTlsServiceProfileProtocolSettings {
  /**
  * Allow algorithm 3DES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_algorithm_3des SslTlsServiceProfile#allow_algorithm_3des}
  */
  readonly allowAlgorithm3Des?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm AES-128-CBC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_algorithm_aes_128_cbc SslTlsServiceProfile#allow_algorithm_aes_128_cbc}
  */
  readonly allowAlgorithmAes128Cbc?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm AES-128-GCM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_algorithm_aes_128_gcm SslTlsServiceProfile#allow_algorithm_aes_128_gcm}
  */
  readonly allowAlgorithmAes128Gcm?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm AES-256-CBC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_algorithm_aes_256_cbc SslTlsServiceProfile#allow_algorithm_aes_256_cbc}
  */
  readonly allowAlgorithmAes256Cbc?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm AES-256-GCM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_algorithm_aes_256_gcm SslTlsServiceProfile#allow_algorithm_aes_256_gcm}
  */
  readonly allowAlgorithmAes256Gcm?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm DHE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_algorithm_dhe SslTlsServiceProfile#allow_algorithm_dhe}
  */
  readonly allowAlgorithmDhe?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm ECDHE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_algorithm_ecdhe SslTlsServiceProfile#allow_algorithm_ecdhe}
  */
  readonly allowAlgorithmEcdhe?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm RC4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_algorithm_rc4 SslTlsServiceProfile#allow_algorithm_rc4}
  */
  readonly allowAlgorithmRc4?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm RSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_algorithm_rsa SslTlsServiceProfile#allow_algorithm_rsa}
  */
  readonly allowAlgorithmRsa?: boolean | cdktf.IResolvable;
  /**
  * Allow authentication SHA1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_authentication_sha1 SslTlsServiceProfile#allow_authentication_sha1}
  */
  readonly allowAuthenticationSha1?: boolean | cdktf.IResolvable;
  /**
  * Allow authentication SHA256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_authentication_sha256 SslTlsServiceProfile#allow_authentication_sha256}
  */
  readonly allowAuthenticationSha256?: boolean | cdktf.IResolvable;
  /**
  * Allow authentication SHA384
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#allow_authentication_sha384 SslTlsServiceProfile#allow_authentication_sha384}
  */
  readonly allowAuthenticationSha384?: boolean | cdktf.IResolvable;
  /**
  * Maximum TLS protocol version. Valid values are 'tls1-0', 'tls1-1', 'tls1-2', and max (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#max_version SslTlsServiceProfile#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#min_version SslTlsServiceProfile#min_version}
  */
  readonly minVersion?: string;
}

export function sslTlsServiceProfileProtocolSettingsToTerraform(struct?: SslTlsServiceProfileProtocolSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_algorithm_3des: cdktf.booleanToTerraform(struct!.allowAlgorithm3Des),
    allow_algorithm_aes_128_cbc: cdktf.booleanToTerraform(struct!.allowAlgorithmAes128Cbc),
    allow_algorithm_aes_128_gcm: cdktf.booleanToTerraform(struct!.allowAlgorithmAes128Gcm),
    allow_algorithm_aes_256_cbc: cdktf.booleanToTerraform(struct!.allowAlgorithmAes256Cbc),
    allow_algorithm_aes_256_gcm: cdktf.booleanToTerraform(struct!.allowAlgorithmAes256Gcm),
    allow_algorithm_dhe: cdktf.booleanToTerraform(struct!.allowAlgorithmDhe),
    allow_algorithm_ecdhe: cdktf.booleanToTerraform(struct!.allowAlgorithmEcdhe),
    allow_algorithm_rc4: cdktf.booleanToTerraform(struct!.allowAlgorithmRc4),
    allow_algorithm_rsa: cdktf.booleanToTerraform(struct!.allowAlgorithmRsa),
    allow_authentication_sha1: cdktf.booleanToTerraform(struct!.allowAuthenticationSha1),
    allow_authentication_sha256: cdktf.booleanToTerraform(struct!.allowAuthenticationSha256),
    allow_authentication_sha384: cdktf.booleanToTerraform(struct!.allowAuthenticationSha384),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function sslTlsServiceProfileProtocolSettingsToHclTerraform(struct?: SslTlsServiceProfileProtocolSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_algorithm_3des: {
      value: cdktf.booleanToHclTerraform(struct!.allowAlgorithm3Des),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_algorithm_aes_128_cbc: {
      value: cdktf.booleanToHclTerraform(struct!.allowAlgorithmAes128Cbc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_algorithm_aes_128_gcm: {
      value: cdktf.booleanToHclTerraform(struct!.allowAlgorithmAes128Gcm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_algorithm_aes_256_cbc: {
      value: cdktf.booleanToHclTerraform(struct!.allowAlgorithmAes256Cbc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_algorithm_aes_256_gcm: {
      value: cdktf.booleanToHclTerraform(struct!.allowAlgorithmAes256Gcm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_algorithm_dhe: {
      value: cdktf.booleanToHclTerraform(struct!.allowAlgorithmDhe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_algorithm_ecdhe: {
      value: cdktf.booleanToHclTerraform(struct!.allowAlgorithmEcdhe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_algorithm_rc4: {
      value: cdktf.booleanToHclTerraform(struct!.allowAlgorithmRc4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_algorithm_rsa: {
      value: cdktf.booleanToHclTerraform(struct!.allowAlgorithmRsa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_authentication_sha1: {
      value: cdktf.booleanToHclTerraform(struct!.allowAuthenticationSha1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_authentication_sha256: {
      value: cdktf.booleanToHclTerraform(struct!.allowAuthenticationSha256),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_authentication_sha384: {
      value: cdktf.booleanToHclTerraform(struct!.allowAuthenticationSha384),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslTlsServiceProfileProtocolSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslTlsServiceProfileProtocolSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAlgorithm3Des !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAlgorithm3Des = this._allowAlgorithm3Des;
    }
    if (this._allowAlgorithmAes128Cbc !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAlgorithmAes128Cbc = this._allowAlgorithmAes128Cbc;
    }
    if (this._allowAlgorithmAes128Gcm !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAlgorithmAes128Gcm = this._allowAlgorithmAes128Gcm;
    }
    if (this._allowAlgorithmAes256Cbc !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAlgorithmAes256Cbc = this._allowAlgorithmAes256Cbc;
    }
    if (this._allowAlgorithmAes256Gcm !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAlgorithmAes256Gcm = this._allowAlgorithmAes256Gcm;
    }
    if (this._allowAlgorithmDhe !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAlgorithmDhe = this._allowAlgorithmDhe;
    }
    if (this._allowAlgorithmEcdhe !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAlgorithmEcdhe = this._allowAlgorithmEcdhe;
    }
    if (this._allowAlgorithmRc4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAlgorithmRc4 = this._allowAlgorithmRc4;
    }
    if (this._allowAlgorithmRsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAlgorithmRsa = this._allowAlgorithmRsa;
    }
    if (this._allowAuthenticationSha1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAuthenticationSha1 = this._allowAuthenticationSha1;
    }
    if (this._allowAuthenticationSha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAuthenticationSha256 = this._allowAuthenticationSha256;
    }
    if (this._allowAuthenticationSha384 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAuthenticationSha384 = this._allowAuthenticationSha384;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslTlsServiceProfileProtocolSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAlgorithm3Des = undefined;
      this._allowAlgorithmAes128Cbc = undefined;
      this._allowAlgorithmAes128Gcm = undefined;
      this._allowAlgorithmAes256Cbc = undefined;
      this._allowAlgorithmAes256Gcm = undefined;
      this._allowAlgorithmDhe = undefined;
      this._allowAlgorithmEcdhe = undefined;
      this._allowAlgorithmRc4 = undefined;
      this._allowAlgorithmRsa = undefined;
      this._allowAuthenticationSha1 = undefined;
      this._allowAuthenticationSha256 = undefined;
      this._allowAuthenticationSha384 = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAlgorithm3Des = value.allowAlgorithm3Des;
      this._allowAlgorithmAes128Cbc = value.allowAlgorithmAes128Cbc;
      this._allowAlgorithmAes128Gcm = value.allowAlgorithmAes128Gcm;
      this._allowAlgorithmAes256Cbc = value.allowAlgorithmAes256Cbc;
      this._allowAlgorithmAes256Gcm = value.allowAlgorithmAes256Gcm;
      this._allowAlgorithmDhe = value.allowAlgorithmDhe;
      this._allowAlgorithmEcdhe = value.allowAlgorithmEcdhe;
      this._allowAlgorithmRc4 = value.allowAlgorithmRc4;
      this._allowAlgorithmRsa = value.allowAlgorithmRsa;
      this._allowAuthenticationSha1 = value.allowAuthenticationSha1;
      this._allowAuthenticationSha256 = value.allowAuthenticationSha256;
      this._allowAuthenticationSha384 = value.allowAuthenticationSha384;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // allow_algorithm_3des - computed: false, optional: true, required: false
  private _allowAlgorithm3Des?: boolean | cdktf.IResolvable; 
  public get allowAlgorithm3Des() {
    return this.getBooleanAttribute('allow_algorithm_3des');
  }
  public set allowAlgorithm3Des(value: boolean | cdktf.IResolvable) {
    this._allowAlgorithm3Des = value;
  }
  public resetAllowAlgorithm3Des() {
    this._allowAlgorithm3Des = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlgorithm3DesInput() {
    return this._allowAlgorithm3Des;
  }

  // allow_algorithm_aes_128_cbc - computed: false, optional: true, required: false
  private _allowAlgorithmAes128Cbc?: boolean | cdktf.IResolvable; 
  public get allowAlgorithmAes128Cbc() {
    return this.getBooleanAttribute('allow_algorithm_aes_128_cbc');
  }
  public set allowAlgorithmAes128Cbc(value: boolean | cdktf.IResolvable) {
    this._allowAlgorithmAes128Cbc = value;
  }
  public resetAllowAlgorithmAes128Cbc() {
    this._allowAlgorithmAes128Cbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlgorithmAes128CbcInput() {
    return this._allowAlgorithmAes128Cbc;
  }

  // allow_algorithm_aes_128_gcm - computed: false, optional: true, required: false
  private _allowAlgorithmAes128Gcm?: boolean | cdktf.IResolvable; 
  public get allowAlgorithmAes128Gcm() {
    return this.getBooleanAttribute('allow_algorithm_aes_128_gcm');
  }
  public set allowAlgorithmAes128Gcm(value: boolean | cdktf.IResolvable) {
    this._allowAlgorithmAes128Gcm = value;
  }
  public resetAllowAlgorithmAes128Gcm() {
    this._allowAlgorithmAes128Gcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlgorithmAes128GcmInput() {
    return this._allowAlgorithmAes128Gcm;
  }

  // allow_algorithm_aes_256_cbc - computed: false, optional: true, required: false
  private _allowAlgorithmAes256Cbc?: boolean | cdktf.IResolvable; 
  public get allowAlgorithmAes256Cbc() {
    return this.getBooleanAttribute('allow_algorithm_aes_256_cbc');
  }
  public set allowAlgorithmAes256Cbc(value: boolean | cdktf.IResolvable) {
    this._allowAlgorithmAes256Cbc = value;
  }
  public resetAllowAlgorithmAes256Cbc() {
    this._allowAlgorithmAes256Cbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlgorithmAes256CbcInput() {
    return this._allowAlgorithmAes256Cbc;
  }

  // allow_algorithm_aes_256_gcm - computed: false, optional: true, required: false
  private _allowAlgorithmAes256Gcm?: boolean | cdktf.IResolvable; 
  public get allowAlgorithmAes256Gcm() {
    return this.getBooleanAttribute('allow_algorithm_aes_256_gcm');
  }
  public set allowAlgorithmAes256Gcm(value: boolean | cdktf.IResolvable) {
    this._allowAlgorithmAes256Gcm = value;
  }
  public resetAllowAlgorithmAes256Gcm() {
    this._allowAlgorithmAes256Gcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlgorithmAes256GcmInput() {
    return this._allowAlgorithmAes256Gcm;
  }

  // allow_algorithm_dhe - computed: false, optional: true, required: false
  private _allowAlgorithmDhe?: boolean | cdktf.IResolvable; 
  public get allowAlgorithmDhe() {
    return this.getBooleanAttribute('allow_algorithm_dhe');
  }
  public set allowAlgorithmDhe(value: boolean | cdktf.IResolvable) {
    this._allowAlgorithmDhe = value;
  }
  public resetAllowAlgorithmDhe() {
    this._allowAlgorithmDhe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlgorithmDheInput() {
    return this._allowAlgorithmDhe;
  }

  // allow_algorithm_ecdhe - computed: false, optional: true, required: false
  private _allowAlgorithmEcdhe?: boolean | cdktf.IResolvable; 
  public get allowAlgorithmEcdhe() {
    return this.getBooleanAttribute('allow_algorithm_ecdhe');
  }
  public set allowAlgorithmEcdhe(value: boolean | cdktf.IResolvable) {
    this._allowAlgorithmEcdhe = value;
  }
  public resetAllowAlgorithmEcdhe() {
    this._allowAlgorithmEcdhe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlgorithmEcdheInput() {
    return this._allowAlgorithmEcdhe;
  }

  // allow_algorithm_rc4 - computed: false, optional: true, required: false
  private _allowAlgorithmRc4?: boolean | cdktf.IResolvable; 
  public get allowAlgorithmRc4() {
    return this.getBooleanAttribute('allow_algorithm_rc4');
  }
  public set allowAlgorithmRc4(value: boolean | cdktf.IResolvable) {
    this._allowAlgorithmRc4 = value;
  }
  public resetAllowAlgorithmRc4() {
    this._allowAlgorithmRc4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlgorithmRc4Input() {
    return this._allowAlgorithmRc4;
  }

  // allow_algorithm_rsa - computed: false, optional: true, required: false
  private _allowAlgorithmRsa?: boolean | cdktf.IResolvable; 
  public get allowAlgorithmRsa() {
    return this.getBooleanAttribute('allow_algorithm_rsa');
  }
  public set allowAlgorithmRsa(value: boolean | cdktf.IResolvable) {
    this._allowAlgorithmRsa = value;
  }
  public resetAllowAlgorithmRsa() {
    this._allowAlgorithmRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlgorithmRsaInput() {
    return this._allowAlgorithmRsa;
  }

  // allow_authentication_sha1 - computed: false, optional: true, required: false
  private _allowAuthenticationSha1?: boolean | cdktf.IResolvable; 
  public get allowAuthenticationSha1() {
    return this.getBooleanAttribute('allow_authentication_sha1');
  }
  public set allowAuthenticationSha1(value: boolean | cdktf.IResolvable) {
    this._allowAuthenticationSha1 = value;
  }
  public resetAllowAuthenticationSha1() {
    this._allowAuthenticationSha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthenticationSha1Input() {
    return this._allowAuthenticationSha1;
  }

  // allow_authentication_sha256 - computed: false, optional: true, required: false
  private _allowAuthenticationSha256?: boolean | cdktf.IResolvable; 
  public get allowAuthenticationSha256() {
    return this.getBooleanAttribute('allow_authentication_sha256');
  }
  public set allowAuthenticationSha256(value: boolean | cdktf.IResolvable) {
    this._allowAuthenticationSha256 = value;
  }
  public resetAllowAuthenticationSha256() {
    this._allowAuthenticationSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthenticationSha256Input() {
    return this._allowAuthenticationSha256;
  }

  // allow_authentication_sha384 - computed: false, optional: true, required: false
  private _allowAuthenticationSha384?: boolean | cdktf.IResolvable; 
  public get allowAuthenticationSha384() {
    return this.getBooleanAttribute('allow_authentication_sha384');
  }
  public set allowAuthenticationSha384(value: boolean | cdktf.IResolvable) {
    this._allowAuthenticationSha384 = value;
  }
  public resetAllowAuthenticationSha384() {
    this._allowAuthenticationSha384 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthenticationSha384Input() {
    return this._allowAuthenticationSha384;
  }

  // max_version - computed: true, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: true, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile panos_ssl_tls_service_profile}
*/
export class SslTlsServiceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_ssl_tls_service_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslTlsServiceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslTlsServiceProfile to import
  * @param importFromId The id of the existing SslTlsServiceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslTlsServiceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_ssl_tls_service_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_tls_service_profile panos_ssl_tls_service_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslTlsServiceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SslTlsServiceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_ssl_tls_service_profile',
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
    this._certificate = config.certificate;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._protocolSettings.internalValue = config.protocolSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // location - computed: false, optional: false, required: true
  private _location = new SslTlsServiceProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: SslTlsServiceProfileLocation) {
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

  // protocol_settings - computed: false, optional: true, required: false
  private _protocolSettings = new SslTlsServiceProfileProtocolSettingsOutputReference(this, "protocol_settings");
  public get protocolSettings() {
    return this._protocolSettings;
  }
  public putProtocolSettings(value: SslTlsServiceProfileProtocolSettings) {
    this._protocolSettings.internalValue = value;
  }
  public resetProtocolSettings() {
    this._protocolSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolSettingsInput() {
    return this._protocolSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      location: sslTlsServiceProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      protocol_settings: sslTlsServiceProfileProtocolSettingsToTerraform(this._protocolSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: sslTlsServiceProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SslTlsServiceProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_settings: {
        value: sslTlsServiceProfileProtocolSettingsToHclTerraform(this._protocolSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SslTlsServiceProfileProtocolSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
