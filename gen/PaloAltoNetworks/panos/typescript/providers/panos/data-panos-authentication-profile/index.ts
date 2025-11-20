// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosAuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#allow_list DataPanosAuthenticationProfile#allow_list}
  */
  readonly allowList?: string[];
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#location DataPanosAuthenticationProfile#location}
  */
  readonly location: DataPanosAuthenticationProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#lockout DataPanosAuthenticationProfile#lockout}
  */
  readonly lockout?: DataPanosAuthenticationProfileLockout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#method DataPanosAuthenticationProfile#method}
  */
  readonly method?: DataPanosAuthenticationProfileMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#multi_factor_auth DataPanosAuthenticationProfile#multi_factor_auth}
  */
  readonly multiFactorAuth?: DataPanosAuthenticationProfileMultiFactorAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#name DataPanosAuthenticationProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#single_sign_on DataPanosAuthenticationProfile#single_sign_on}
  */
  readonly singleSignOn?: DataPanosAuthenticationProfileSingleSignOn;
  /**
  * Domain name(Not for SAML) to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#user_domain DataPanosAuthenticationProfile#user_domain}
  */
  readonly userDomain?: string;
  /**
  * Username modifier(Not for SAML) to handle user domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#username_modifier DataPanosAuthenticationProfile#username_modifier}
  */
  readonly usernameModifier?: string;
}
export interface DataPanosAuthenticationProfileLocationPanorama {
}

export function dataPanosAuthenticationProfileLocationPanoramaToTerraform(struct?: DataPanosAuthenticationProfileLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAuthenticationProfileLocationPanoramaToHclTerraform(struct?: DataPanosAuthenticationProfileLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAuthenticationProfileLocationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileLocationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileLocationPanorama | cdktf.IResolvable | undefined) {
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
export interface DataPanosAuthenticationProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#name DataPanosAuthenticationProfile#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#panorama_device DataPanosAuthenticationProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosAuthenticationProfileLocationTemplateToTerraform(struct?: DataPanosAuthenticationProfileLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosAuthenticationProfileLocationTemplateToHclTerraform(struct?: DataPanosAuthenticationProfileLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosAuthenticationProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
export interface DataPanosAuthenticationProfileLocationTemplateStack {
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#name DataPanosAuthenticationProfile#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#panorama_device DataPanosAuthenticationProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosAuthenticationProfileLocationTemplateStackToTerraform(struct?: DataPanosAuthenticationProfileLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosAuthenticationProfileLocationTemplateStackToHclTerraform(struct?: DataPanosAuthenticationProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosAuthenticationProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
export interface DataPanosAuthenticationProfileLocationTemplateStackVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#ngfw_device DataPanosAuthenticationProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#panorama_device DataPanosAuthenticationProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#template_stack DataPanosAuthenticationProfile#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#vsys DataPanosAuthenticationProfile#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosAuthenticationProfileLocationTemplateStackVsysToTerraform(struct?: DataPanosAuthenticationProfileLocationTemplateStackVsys | cdktf.IResolvable): any {
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


export function dataPanosAuthenticationProfileLocationTemplateStackVsysToHclTerraform(struct?: DataPanosAuthenticationProfileLocationTemplateStackVsys | cdktf.IResolvable): any {
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

export class DataPanosAuthenticationProfileLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileLocationTemplateStackVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAuthenticationProfileLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosAuthenticationProfileLocationTemplateVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#ngfw_device DataPanosAuthenticationProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#panorama_device DataPanosAuthenticationProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#template DataPanosAuthenticationProfile#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#vsys DataPanosAuthenticationProfile#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosAuthenticationProfileLocationTemplateVsysToTerraform(struct?: DataPanosAuthenticationProfileLocationTemplateVsys | cdktf.IResolvable): any {
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


export function dataPanosAuthenticationProfileLocationTemplateVsysToHclTerraform(struct?: DataPanosAuthenticationProfileLocationTemplateVsys | cdktf.IResolvable): any {
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

export class DataPanosAuthenticationProfileLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileLocationTemplateVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAuthenticationProfileLocationTemplateVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosAuthenticationProfileLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#name DataPanosAuthenticationProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#ngfw_device DataPanosAuthenticationProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosAuthenticationProfileLocationVsysToTerraform(struct?: DataPanosAuthenticationProfileLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosAuthenticationProfileLocationVsysToHclTerraform(struct?: DataPanosAuthenticationProfileLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosAuthenticationProfileLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAuthenticationProfileLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosAuthenticationProfileLocation {
  /**
  * Located in a panorama.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#panorama DataPanosAuthenticationProfile#panorama}
  */
  readonly panorama?: DataPanosAuthenticationProfileLocationPanorama;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#template DataPanosAuthenticationProfile#template}
  */
  readonly template?: DataPanosAuthenticationProfileLocationTemplate;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#template_stack DataPanosAuthenticationProfile#template_stack}
  */
  readonly templateStack?: DataPanosAuthenticationProfileLocationTemplateStack;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#template_stack_vsys DataPanosAuthenticationProfile#template_stack_vsys}
  */
  readonly templateStackVsys?: DataPanosAuthenticationProfileLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#template_vsys DataPanosAuthenticationProfile#template_vsys}
  */
  readonly templateVsys?: DataPanosAuthenticationProfileLocationTemplateVsys;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#vsys DataPanosAuthenticationProfile#vsys}
  */
  readonly vsys?: DataPanosAuthenticationProfileLocationVsys;
}

export function dataPanosAuthenticationProfileLocationToTerraform(struct?: DataPanosAuthenticationProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    panorama: dataPanosAuthenticationProfileLocationPanoramaToTerraform(struct!.panorama),
    template: dataPanosAuthenticationProfileLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosAuthenticationProfileLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: dataPanosAuthenticationProfileLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: dataPanosAuthenticationProfileLocationTemplateVsysToTerraform(struct!.templateVsys),
    vsys: dataPanosAuthenticationProfileLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosAuthenticationProfileLocationToHclTerraform(struct?: DataPanosAuthenticationProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    panorama: {
      value: dataPanosAuthenticationProfileLocationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileLocationPanorama",
    },
    template: {
      value: dataPanosAuthenticationProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileLocationTemplate",
    },
    template_stack: {
      value: dataPanosAuthenticationProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileLocationTemplateStack",
    },
    template_stack_vsys: {
      value: dataPanosAuthenticationProfileLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileLocationTemplateStackVsys",
    },
    template_vsys: {
      value: dataPanosAuthenticationProfileLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileLocationTemplateVsys",
    },
    vsys: {
      value: dataPanosAuthenticationProfileLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._panorama?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panorama = this._panorama?.internalValue;
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
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._panorama.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._templateStackVsys.internalValue = undefined;
      this._templateVsys.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._panorama.internalValue = value.panorama;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
      this._templateStackVsys.internalValue = value.templateStackVsys;
      this._templateVsys.internalValue = value.templateVsys;
      this._vsys.internalValue = value.vsys;
    }
  }

  // panorama - computed: false, optional: true, required: false
  private _panorama = new DataPanosAuthenticationProfileLocationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: DataPanosAuthenticationProfileLocationPanorama) {
    this._panorama.internalValue = value;
  }
  public resetPanorama() {
    this._panorama.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaInput() {
    return this._panorama.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosAuthenticationProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosAuthenticationProfileLocationTemplate) {
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
  private _templateStack = new DataPanosAuthenticationProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosAuthenticationProfileLocationTemplateStack) {
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
  private _templateStackVsys = new DataPanosAuthenticationProfileLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: DataPanosAuthenticationProfileLocationTemplateStackVsys) {
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
  private _templateVsys = new DataPanosAuthenticationProfileLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: DataPanosAuthenticationProfileLocationTemplateVsys) {
    this._templateVsys.internalValue = value;
  }
  public resetTemplateVsys() {
    this._templateVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVsysInput() {
    return this._templateVsys.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new DataPanosAuthenticationProfileLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosAuthenticationProfileLocationVsys) {
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
export interface DataPanosAuthenticationProfileLockout {
  /**
  * Number of failed login attempts to trigger lock-out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#failed_attempts DataPanosAuthenticationProfile#failed_attempts}
  */
  readonly failedAttempts?: number;
  /**
  * Number of minutes to lock-out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#lockout_time DataPanosAuthenticationProfile#lockout_time}
  */
  readonly lockoutTime?: number;
}

export function dataPanosAuthenticationProfileLockoutToTerraform(struct?: DataPanosAuthenticationProfileLockout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_attempts: cdktf.numberToTerraform(struct!.failedAttempts),
    lockout_time: cdktf.numberToTerraform(struct!.lockoutTime),
  }
}


export function dataPanosAuthenticationProfileLockoutToHclTerraform(struct?: DataPanosAuthenticationProfileLockout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_attempts: {
      value: cdktf.numberToHclTerraform(struct!.failedAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout_time: {
      value: cdktf.numberToHclTerraform(struct!.lockoutTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileLockoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileLockout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedAttempts = this._failedAttempts;
    }
    if (this._lockoutTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutTime = this._lockoutTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileLockout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failedAttempts = undefined;
      this._lockoutTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failedAttempts = value.failedAttempts;
      this._lockoutTime = value.lockoutTime;
    }
  }

  // failed_attempts - computed: true, optional: true, required: false
  private _failedAttempts?: number; 
  public get failedAttempts() {
    return this.getNumberAttribute('failed_attempts');
  }
  public set failedAttempts(value: number) {
    this._failedAttempts = value;
  }
  public resetFailedAttempts() {
    this._failedAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAttemptsInput() {
    return this._failedAttempts;
  }

  // lockout_time - computed: true, optional: true, required: false
  private _lockoutTime?: number; 
  public get lockoutTime() {
    return this.getNumberAttribute('lockout_time');
  }
  public set lockoutTime(value: number) {
    this._lockoutTime = value;
  }
  public resetLockoutTime() {
    this._lockoutTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutTimeInput() {
    return this._lockoutTime;
  }
}
export interface DataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfa {
  /**
  * force multi-factor authentication in cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#force_mfa DataPanosAuthenticationProfile#force_mfa}
  */
  readonly forceMfa?: string;
}

export function dataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfaToTerraform(struct?: DataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_mfa: cdktf.stringToTerraform(struct!.forceMfa),
  }
}


export function dataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfaToHclTerraform(struct?: DataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_mfa: {
      value: cdktf.stringToHclTerraform(struct!.forceMfa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceMfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceMfa = this._forceMfa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceMfa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceMfa = value.forceMfa;
    }
  }

  // force_mfa - computed: true, optional: true, required: false
  private _forceMfa?: string; 
  public get forceMfa() {
    return this.getStringAttribute('force_mfa');
  }
  public set forceMfa(value: string) {
    this._forceMfa = value;
  }
  public resetForceMfa() {
    this._forceMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceMfaInput() {
    return this._forceMfa;
  }
}
export interface DataPanosAuthenticationProfileMethodCloudRegionTenantProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#mfa DataPanosAuthenticationProfile#mfa}
  */
  readonly mfa?: DataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfa;
  /**
  * CAS Profile id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#profile_id DataPanosAuthenticationProfile#profile_id}
  */
  readonly profileId?: string;
}

export function dataPanosAuthenticationProfileMethodCloudRegionTenantProfileToTerraform(struct?: DataPanosAuthenticationProfileMethodCloudRegionTenantProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mfa: dataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfaToTerraform(struct!.mfa),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
  }
}


export function dataPanosAuthenticationProfileMethodCloudRegionTenantProfileToHclTerraform(struct?: DataPanosAuthenticationProfileMethodCloudRegionTenantProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mfa: {
      value: dataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfaToHclTerraform(struct!.mfa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfa",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodCloudRegionTenantProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodCloudRegionTenantProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mfa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfa = this._mfa?.internalValue;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodCloudRegionTenantProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mfa.internalValue = undefined;
      this._profileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mfa.internalValue = value.mfa;
      this._profileId = value.profileId;
    }
  }

  // mfa - computed: true, optional: true, required: false
  private _mfa = new DataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: DataPanosAuthenticationProfileMethodCloudRegionTenantProfileMfa) {
    this._mfa.internalValue = value;
  }
  public resetMfa() {
    this._mfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa.internalValue;
  }

  // profile_id - computed: true, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }
}
export interface DataPanosAuthenticationProfileMethodCloudRegionTenant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#profile DataPanosAuthenticationProfile#profile}
  */
  readonly profile?: DataPanosAuthenticationProfileMethodCloudRegionTenantProfile;
  /**
  * Tenant id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#tenant_id DataPanosAuthenticationProfile#tenant_id}
  */
  readonly tenantId?: string;
}

export function dataPanosAuthenticationProfileMethodCloudRegionTenantToTerraform(struct?: DataPanosAuthenticationProfileMethodCloudRegionTenant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: dataPanosAuthenticationProfileMethodCloudRegionTenantProfileToTerraform(struct!.profile),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function dataPanosAuthenticationProfileMethodCloudRegionTenantToHclTerraform(struct?: DataPanosAuthenticationProfileMethodCloudRegionTenant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: dataPanosAuthenticationProfileMethodCloudRegionTenantProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodCloudRegionTenantProfile",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodCloudRegionTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodCloudRegionTenant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodCloudRegionTenant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._tenantId = value.tenantId;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile = new DataPanosAuthenticationProfileMethodCloudRegionTenantProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataPanosAuthenticationProfileMethodCloudRegionTenantProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface DataPanosAuthenticationProfileMethodCloudRegion {
  /**
  * Region Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#region_id DataPanosAuthenticationProfile#region_id}
  */
  readonly regionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#tenant DataPanosAuthenticationProfile#tenant}
  */
  readonly tenant?: DataPanosAuthenticationProfileMethodCloudRegionTenant;
}

export function dataPanosAuthenticationProfileMethodCloudRegionToTerraform(struct?: DataPanosAuthenticationProfileMethodCloudRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_id: cdktf.stringToTerraform(struct!.regionId),
    tenant: dataPanosAuthenticationProfileMethodCloudRegionTenantToTerraform(struct!.tenant),
  }
}


export function dataPanosAuthenticationProfileMethodCloudRegionToHclTerraform(struct?: DataPanosAuthenticationProfileMethodCloudRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: dataPanosAuthenticationProfileMethodCloudRegionTenantToHclTerraform(struct!.tenant),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodCloudRegionTenant",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodCloudRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodCloudRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._tenant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodCloudRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionId = undefined;
      this._tenant.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionId = value.regionId;
      this._tenant.internalValue = value.tenant;
    }
  }

  // region_id - computed: true, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // tenant - computed: true, optional: true, required: false
  private _tenant = new DataPanosAuthenticationProfileMethodCloudRegionTenantOutputReference(this, "tenant");
  public get tenant() {
    return this._tenant;
  }
  public putTenant(value: DataPanosAuthenticationProfileMethodCloudRegionTenant) {
    this._tenant.internalValue = value;
  }
  public resetTenant() {
    this._tenant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant.internalValue;
  }
}
export interface DataPanosAuthenticationProfileMethodCloud {
  /**
  * clock skew between CAS service and device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#clock_skew DataPanosAuthenticationProfile#clock_skew}
  */
  readonly clockSkew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#region DataPanosAuthenticationProfile#region}
  */
  readonly region?: DataPanosAuthenticationProfileMethodCloudRegion;
}

export function dataPanosAuthenticationProfileMethodCloudToTerraform(struct?: DataPanosAuthenticationProfileMethodCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clock_skew: cdktf.numberToTerraform(struct!.clockSkew),
    region: dataPanosAuthenticationProfileMethodCloudRegionToTerraform(struct!.region),
  }
}


export function dataPanosAuthenticationProfileMethodCloudToHclTerraform(struct?: DataPanosAuthenticationProfileMethodCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clock_skew: {
      value: cdktf.numberToHclTerraform(struct!.clockSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: dataPanosAuthenticationProfileMethodCloudRegionToHclTerraform(struct!.region),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodCloudRegion",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clockSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockSkew = this._clockSkew;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clockSkew = undefined;
      this._region.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clockSkew = value.clockSkew;
      this._region.internalValue = value.region;
    }
  }

  // clock_skew - computed: true, optional: true, required: false
  private _clockSkew?: number; 
  public get clockSkew() {
    return this.getNumberAttribute('clock_skew');
  }
  public set clockSkew(value: number) {
    this._clockSkew = value;
  }
  public resetClockSkew() {
    this._clockSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewInput() {
    return this._clockSkew;
  }

  // region - computed: true, optional: true, required: false
  private _region = new DataPanosAuthenticationProfileMethodCloudRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }
  public putRegion(value: DataPanosAuthenticationProfileMethodCloudRegion) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }
}
export interface DataPanosAuthenticationProfileMethodKerberos {
  /**
  * Realm name to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#realm DataPanosAuthenticationProfile#realm}
  */
  readonly realm?: string;
  /**
  * Kerberos server profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#server_profile DataPanosAuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function dataPanosAuthenticationProfileMethodKerberosToTerraform(struct?: DataPanosAuthenticationProfileMethodKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realm: cdktf.stringToTerraform(struct!.realm),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function dataPanosAuthenticationProfileMethodKerberosToHclTerraform(struct?: DataPanosAuthenticationProfileMethodKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodKerberos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodKerberos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._realm = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._realm = value.realm;
      this._serverProfile = value.serverProfile;
    }
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // server_profile - computed: true, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface DataPanosAuthenticationProfileMethodLdap {
  /**
  * Default is samAccountName for Active Directory, uid for other directory servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#login_attribute DataPanosAuthenticationProfile#login_attribute}
  */
  readonly loginAttribute?: string;
  /**
  * Avail for Active Directory, eDir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#passwd_exp_days DataPanosAuthenticationProfile#passwd_exp_days}
  */
  readonly passwdExpDays?: number;
  /**
  * LDAP server profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#server_profile DataPanosAuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function dataPanosAuthenticationProfileMethodLdapToTerraform(struct?: DataPanosAuthenticationProfileMethodLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_attribute: cdktf.stringToTerraform(struct!.loginAttribute),
    passwd_exp_days: cdktf.numberToTerraform(struct!.passwdExpDays),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function dataPanosAuthenticationProfileMethodLdapToHclTerraform(struct?: DataPanosAuthenticationProfileMethodLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_attribute: {
      value: cdktf.stringToHclTerraform(struct!.loginAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passwd_exp_days: {
      value: cdktf.numberToHclTerraform(struct!.passwdExpDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAttribute = this._loginAttribute;
    }
    if (this._passwdExpDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwdExpDays = this._passwdExpDays;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loginAttribute = undefined;
      this._passwdExpDays = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loginAttribute = value.loginAttribute;
      this._passwdExpDays = value.passwdExpDays;
      this._serverProfile = value.serverProfile;
    }
  }

  // login_attribute - computed: true, optional: true, required: false
  private _loginAttribute?: string; 
  public get loginAttribute() {
    return this.getStringAttribute('login_attribute');
  }
  public set loginAttribute(value: string) {
    this._loginAttribute = value;
  }
  public resetLoginAttribute() {
    this._loginAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAttributeInput() {
    return this._loginAttribute;
  }

  // passwd_exp_days - computed: true, optional: true, required: false
  private _passwdExpDays?: number; 
  public get passwdExpDays() {
    return this.getNumberAttribute('passwd_exp_days');
  }
  public set passwdExpDays(value: number) {
    this._passwdExpDays = value;
  }
  public resetPasswdExpDays() {
    this._passwdExpDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdExpDaysInput() {
    return this._passwdExpDays;
  }

  // server_profile - computed: true, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface DataPanosAuthenticationProfileMethodLocalDatabase {
}

export function dataPanosAuthenticationProfileMethodLocalDatabaseToTerraform(struct?: DataPanosAuthenticationProfileMethodLocalDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAuthenticationProfileMethodLocalDatabaseToHclTerraform(struct?: DataPanosAuthenticationProfileMethodLocalDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAuthenticationProfileMethodLocalDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodLocalDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodLocalDatabase | cdktf.IResolvable | undefined) {
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
export interface DataPanosAuthenticationProfileMethodNone {
}

export function dataPanosAuthenticationProfileMethodNoneToTerraform(struct?: DataPanosAuthenticationProfileMethodNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAuthenticationProfileMethodNoneToHclTerraform(struct?: DataPanosAuthenticationProfileMethodNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAuthenticationProfileMethodNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodNone | cdktf.IResolvable | undefined) {
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
export interface DataPanosAuthenticationProfileMethodRadius {
  /**
  * Retrieve user group from RADIUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#checkgroup DataPanosAuthenticationProfile#checkgroup}
  */
  readonly checkgroup?: boolean | cdktf.IResolvable;
  /**
  * RADIUS server profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#server_profile DataPanosAuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function dataPanosAuthenticationProfileMethodRadiusToTerraform(struct?: DataPanosAuthenticationProfileMethodRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkgroup: cdktf.booleanToTerraform(struct!.checkgroup),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function dataPanosAuthenticationProfileMethodRadiusToHclTerraform(struct?: DataPanosAuthenticationProfileMethodRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkgroup: {
      value: cdktf.booleanToHclTerraform(struct!.checkgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodRadiusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodRadius | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkgroup = this._checkgroup;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodRadius | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkgroup = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkgroup = value.checkgroup;
      this._serverProfile = value.serverProfile;
    }
  }

  // checkgroup - computed: true, optional: true, required: false
  private _checkgroup?: boolean | cdktf.IResolvable; 
  public get checkgroup() {
    return this.getBooleanAttribute('checkgroup');
  }
  public set checkgroup(value: boolean | cdktf.IResolvable) {
    this._checkgroup = value;
  }
  public resetCheckgroup() {
    this._checkgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkgroupInput() {
    return this._checkgroup;
  }

  // server_profile - computed: true, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface DataPanosAuthenticationProfileMethodSamlIdp {
  /**
  * access-domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#attribute_name_access_domain DataPanosAuthenticationProfile#attribute_name_access_domain}
  */
  readonly attributeNameAccessDomain?: string;
  /**
  * admin-role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#attribute_name_admin_role DataPanosAuthenticationProfile#attribute_name_admin_role}
  */
  readonly attributeNameAdminRole?: string;
  /**
  * usergroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#attribute_name_usergroup DataPanosAuthenticationProfile#attribute_name_usergroup}
  */
  readonly attributeNameUsergroup?: string;
  /**
  * Attribute name for username to be extracted from SAML response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#attribute_name_username DataPanosAuthenticationProfile#attribute_name_username}
  */
  readonly attributeNameUsername?: string;
  /**
  * Certificate profile for IDP and SP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#certificate_profile DataPanosAuthenticationProfile#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Enable single logout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#enable_single_logout DataPanosAuthenticationProfile#enable_single_logout}
  */
  readonly enableSingleLogout?: boolean | cdktf.IResolvable;
  /**
  * Signing certificate for SAML requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#request_signing_certificate DataPanosAuthenticationProfile#request_signing_certificate}
  */
  readonly requestSigningCertificate?: string;
  /**
  * IdP server profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#server_profile DataPanosAuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function dataPanosAuthenticationProfileMethodSamlIdpToTerraform(struct?: DataPanosAuthenticationProfileMethodSamlIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name_access_domain: cdktf.stringToTerraform(struct!.attributeNameAccessDomain),
    attribute_name_admin_role: cdktf.stringToTerraform(struct!.attributeNameAdminRole),
    attribute_name_usergroup: cdktf.stringToTerraform(struct!.attributeNameUsergroup),
    attribute_name_username: cdktf.stringToTerraform(struct!.attributeNameUsername),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    enable_single_logout: cdktf.booleanToTerraform(struct!.enableSingleLogout),
    request_signing_certificate: cdktf.stringToTerraform(struct!.requestSigningCertificate),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function dataPanosAuthenticationProfileMethodSamlIdpToHclTerraform(struct?: DataPanosAuthenticationProfileMethodSamlIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name_access_domain: {
      value: cdktf.stringToHclTerraform(struct!.attributeNameAccessDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name_admin_role: {
      value: cdktf.stringToHclTerraform(struct!.attributeNameAdminRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name_usergroup: {
      value: cdktf.stringToHclTerraform(struct!.attributeNameUsergroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name_username: {
      value: cdktf.stringToHclTerraform(struct!.attributeNameUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_single_logout: {
      value: cdktf.booleanToHclTerraform(struct!.enableSingleLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_signing_certificate: {
      value: cdktf.stringToHclTerraform(struct!.requestSigningCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodSamlIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodSamlIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNameAccessDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNameAccessDomain = this._attributeNameAccessDomain;
    }
    if (this._attributeNameAdminRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNameAdminRole = this._attributeNameAdminRole;
    }
    if (this._attributeNameUsergroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNameUsergroup = this._attributeNameUsergroup;
    }
    if (this._attributeNameUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNameUsername = this._attributeNameUsername;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._enableSingleLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSingleLogout = this._enableSingleLogout;
    }
    if (this._requestSigningCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSigningCertificate = this._requestSigningCertificate;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodSamlIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNameAccessDomain = undefined;
      this._attributeNameAdminRole = undefined;
      this._attributeNameUsergroup = undefined;
      this._attributeNameUsername = undefined;
      this._certificateProfile = undefined;
      this._enableSingleLogout = undefined;
      this._requestSigningCertificate = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNameAccessDomain = value.attributeNameAccessDomain;
      this._attributeNameAdminRole = value.attributeNameAdminRole;
      this._attributeNameUsergroup = value.attributeNameUsergroup;
      this._attributeNameUsername = value.attributeNameUsername;
      this._certificateProfile = value.certificateProfile;
      this._enableSingleLogout = value.enableSingleLogout;
      this._requestSigningCertificate = value.requestSigningCertificate;
      this._serverProfile = value.serverProfile;
    }
  }

  // attribute_name_access_domain - computed: true, optional: true, required: false
  private _attributeNameAccessDomain?: string; 
  public get attributeNameAccessDomain() {
    return this.getStringAttribute('attribute_name_access_domain');
  }
  public set attributeNameAccessDomain(value: string) {
    this._attributeNameAccessDomain = value;
  }
  public resetAttributeNameAccessDomain() {
    this._attributeNameAccessDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameAccessDomainInput() {
    return this._attributeNameAccessDomain;
  }

  // attribute_name_admin_role - computed: true, optional: true, required: false
  private _attributeNameAdminRole?: string; 
  public get attributeNameAdminRole() {
    return this.getStringAttribute('attribute_name_admin_role');
  }
  public set attributeNameAdminRole(value: string) {
    this._attributeNameAdminRole = value;
  }
  public resetAttributeNameAdminRole() {
    this._attributeNameAdminRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameAdminRoleInput() {
    return this._attributeNameAdminRole;
  }

  // attribute_name_usergroup - computed: true, optional: true, required: false
  private _attributeNameUsergroup?: string; 
  public get attributeNameUsergroup() {
    return this.getStringAttribute('attribute_name_usergroup');
  }
  public set attributeNameUsergroup(value: string) {
    this._attributeNameUsergroup = value;
  }
  public resetAttributeNameUsergroup() {
    this._attributeNameUsergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameUsergroupInput() {
    return this._attributeNameUsergroup;
  }

  // attribute_name_username - computed: true, optional: true, required: false
  private _attributeNameUsername?: string; 
  public get attributeNameUsername() {
    return this.getStringAttribute('attribute_name_username');
  }
  public set attributeNameUsername(value: string) {
    this._attributeNameUsername = value;
  }
  public resetAttributeNameUsername() {
    this._attributeNameUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameUsernameInput() {
    return this._attributeNameUsername;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // enable_single_logout - computed: true, optional: true, required: false
  private _enableSingleLogout?: boolean | cdktf.IResolvable; 
  public get enableSingleLogout() {
    return this.getBooleanAttribute('enable_single_logout');
  }
  public set enableSingleLogout(value: boolean | cdktf.IResolvable) {
    this._enableSingleLogout = value;
  }
  public resetEnableSingleLogout() {
    this._enableSingleLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSingleLogoutInput() {
    return this._enableSingleLogout;
  }

  // request_signing_certificate - computed: true, optional: true, required: false
  private _requestSigningCertificate?: string; 
  public get requestSigningCertificate() {
    return this.getStringAttribute('request_signing_certificate');
  }
  public set requestSigningCertificate(value: string) {
    this._requestSigningCertificate = value;
  }
  public resetRequestSigningCertificate() {
    this._requestSigningCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSigningCertificateInput() {
    return this._requestSigningCertificate;
  }

  // server_profile - computed: true, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface DataPanosAuthenticationProfileMethodTacplus {
  /**
  * Retrieve user group from TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#checkgroup DataPanosAuthenticationProfile#checkgroup}
  */
  readonly checkgroup?: boolean | cdktf.IResolvable;
  /**
  * TACACS+ server profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#server_profile DataPanosAuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function dataPanosAuthenticationProfileMethodTacplusToTerraform(struct?: DataPanosAuthenticationProfileMethodTacplus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkgroup: cdktf.booleanToTerraform(struct!.checkgroup),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function dataPanosAuthenticationProfileMethodTacplusToHclTerraform(struct?: DataPanosAuthenticationProfileMethodTacplus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkgroup: {
      value: cdktf.booleanToHclTerraform(struct!.checkgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodTacplusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethodTacplus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkgroup = this._checkgroup;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethodTacplus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkgroup = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkgroup = value.checkgroup;
      this._serverProfile = value.serverProfile;
    }
  }

  // checkgroup - computed: true, optional: true, required: false
  private _checkgroup?: boolean | cdktf.IResolvable; 
  public get checkgroup() {
    return this.getBooleanAttribute('checkgroup');
  }
  public set checkgroup(value: boolean | cdktf.IResolvable) {
    this._checkgroup = value;
  }
  public resetCheckgroup() {
    this._checkgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkgroupInput() {
    return this._checkgroup;
  }

  // server_profile - computed: true, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface DataPanosAuthenticationProfileMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#cloud DataPanosAuthenticationProfile#cloud}
  */
  readonly cloud?: DataPanosAuthenticationProfileMethodCloud;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#kerberos DataPanosAuthenticationProfile#kerberos}
  */
  readonly kerberos?: DataPanosAuthenticationProfileMethodKerberos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#ldap DataPanosAuthenticationProfile#ldap}
  */
  readonly ldap?: DataPanosAuthenticationProfileMethodLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#local_database DataPanosAuthenticationProfile#local_database}
  */
  readonly localDatabase?: DataPanosAuthenticationProfileMethodLocalDatabase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#none DataPanosAuthenticationProfile#none}
  */
  readonly none?: DataPanosAuthenticationProfileMethodNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#radius DataPanosAuthenticationProfile#radius}
  */
  readonly radius?: DataPanosAuthenticationProfileMethodRadius;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#saml_idp DataPanosAuthenticationProfile#saml_idp}
  */
  readonly samlIdp?: DataPanosAuthenticationProfileMethodSamlIdp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#tacplus DataPanosAuthenticationProfile#tacplus}
  */
  readonly tacplus?: DataPanosAuthenticationProfileMethodTacplus;
}

export function dataPanosAuthenticationProfileMethodToTerraform(struct?: DataPanosAuthenticationProfileMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud: dataPanosAuthenticationProfileMethodCloudToTerraform(struct!.cloud),
    kerberos: dataPanosAuthenticationProfileMethodKerberosToTerraform(struct!.kerberos),
    ldap: dataPanosAuthenticationProfileMethodLdapToTerraform(struct!.ldap),
    local_database: dataPanosAuthenticationProfileMethodLocalDatabaseToTerraform(struct!.localDatabase),
    none: dataPanosAuthenticationProfileMethodNoneToTerraform(struct!.none),
    radius: dataPanosAuthenticationProfileMethodRadiusToTerraform(struct!.radius),
    saml_idp: dataPanosAuthenticationProfileMethodSamlIdpToTerraform(struct!.samlIdp),
    tacplus: dataPanosAuthenticationProfileMethodTacplusToTerraform(struct!.tacplus),
  }
}


export function dataPanosAuthenticationProfileMethodToHclTerraform(struct?: DataPanosAuthenticationProfileMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud: {
      value: dataPanosAuthenticationProfileMethodCloudToHclTerraform(struct!.cloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodCloud",
    },
    kerberos: {
      value: dataPanosAuthenticationProfileMethodKerberosToHclTerraform(struct!.kerberos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodKerberos",
    },
    ldap: {
      value: dataPanosAuthenticationProfileMethodLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodLdap",
    },
    local_database: {
      value: dataPanosAuthenticationProfileMethodLocalDatabaseToHclTerraform(struct!.localDatabase),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodLocalDatabase",
    },
    none: {
      value: dataPanosAuthenticationProfileMethodNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodNone",
    },
    radius: {
      value: dataPanosAuthenticationProfileMethodRadiusToHclTerraform(struct!.radius),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodRadius",
    },
    saml_idp: {
      value: dataPanosAuthenticationProfileMethodSamlIdpToHclTerraform(struct!.samlIdp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodSamlIdp",
    },
    tacplus: {
      value: dataPanosAuthenticationProfileMethodTacplusToHclTerraform(struct!.tacplus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAuthenticationProfileMethodTacplus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud?.internalValue;
    }
    if (this._kerberos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos = this._kerberos?.internalValue;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._localDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDatabase = this._localDatabase?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._radius?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius?.internalValue;
    }
    if (this._samlIdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlIdp = this._samlIdp?.internalValue;
    }
    if (this._tacplus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplus = this._tacplus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloud.internalValue = undefined;
      this._kerberos.internalValue = undefined;
      this._ldap.internalValue = undefined;
      this._localDatabase.internalValue = undefined;
      this._none.internalValue = undefined;
      this._radius.internalValue = undefined;
      this._samlIdp.internalValue = undefined;
      this._tacplus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloud.internalValue = value.cloud;
      this._kerberos.internalValue = value.kerberos;
      this._ldap.internalValue = value.ldap;
      this._localDatabase.internalValue = value.localDatabase;
      this._none.internalValue = value.none;
      this._radius.internalValue = value.radius;
      this._samlIdp.internalValue = value.samlIdp;
      this._tacplus.internalValue = value.tacplus;
    }
  }

  // cloud - computed: true, optional: true, required: false
  private _cloud = new DataPanosAuthenticationProfileMethodCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: DataPanosAuthenticationProfileMethodCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // kerberos - computed: true, optional: true, required: false
  private _kerberos = new DataPanosAuthenticationProfileMethodKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: DataPanosAuthenticationProfileMethodKerberos) {
    this._kerberos.internalValue = value;
  }
  public resetKerberos() {
    this._kerberos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
  }

  // ldap - computed: true, optional: true, required: false
  private _ldap = new DataPanosAuthenticationProfileMethodLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DataPanosAuthenticationProfileMethodLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // local_database - computed: true, optional: true, required: false
  private _localDatabase = new DataPanosAuthenticationProfileMethodLocalDatabaseOutputReference(this, "local_database");
  public get localDatabase() {
    return this._localDatabase;
  }
  public putLocalDatabase(value: DataPanosAuthenticationProfileMethodLocalDatabase) {
    this._localDatabase.internalValue = value;
  }
  public resetLocalDatabase() {
    this._localDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDatabaseInput() {
    return this._localDatabase.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosAuthenticationProfileMethodNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosAuthenticationProfileMethodNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // radius - computed: true, optional: true, required: false
  private _radius = new DataPanosAuthenticationProfileMethodRadiusOutputReference(this, "radius");
  public get radius() {
    return this._radius;
  }
  public putRadius(value: DataPanosAuthenticationProfileMethodRadius) {
    this._radius.internalValue = value;
  }
  public resetRadius() {
    this._radius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius.internalValue;
  }

  // saml_idp - computed: true, optional: true, required: false
  private _samlIdp = new DataPanosAuthenticationProfileMethodSamlIdpOutputReference(this, "saml_idp");
  public get samlIdp() {
    return this._samlIdp;
  }
  public putSamlIdp(value: DataPanosAuthenticationProfileMethodSamlIdp) {
    this._samlIdp.internalValue = value;
  }
  public resetSamlIdp() {
    this._samlIdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpInput() {
    return this._samlIdp.internalValue;
  }

  // tacplus - computed: true, optional: true, required: false
  private _tacplus = new DataPanosAuthenticationProfileMethodTacplusOutputReference(this, "tacplus");
  public get tacplus() {
    return this._tacplus;
  }
  public putTacplus(value: DataPanosAuthenticationProfileMethodTacplus) {
    this._tacplus.internalValue = value;
  }
  public resetTacplus() {
    this._tacplus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusInput() {
    return this._tacplus.internalValue;
  }
}
export interface DataPanosAuthenticationProfileMultiFactorAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#factors DataPanosAuthenticationProfile#factors}
  */
  readonly factors?: string[];
  /**
  * Enable Additional Authentication Factors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#mfa_enable DataPanosAuthenticationProfile#mfa_enable}
  */
  readonly mfaEnable?: boolean | cdktf.IResolvable;
}

export function dataPanosAuthenticationProfileMultiFactorAuthToTerraform(struct?: DataPanosAuthenticationProfileMultiFactorAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    factors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.factors),
    mfa_enable: cdktf.booleanToTerraform(struct!.mfaEnable),
  }
}


export function dataPanosAuthenticationProfileMultiFactorAuthToHclTerraform(struct?: DataPanosAuthenticationProfileMultiFactorAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    factors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.factors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mfa_enable: {
      value: cdktf.booleanToHclTerraform(struct!.mfaEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileMultiFactorAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileMultiFactorAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._factors !== undefined) {
      hasAnyValues = true;
      internalValueResult.factors = this._factors;
    }
    if (this._mfaEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaEnable = this._mfaEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileMultiFactorAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._factors = undefined;
      this._mfaEnable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._factors = value.factors;
      this._mfaEnable = value.mfaEnable;
    }
  }

  // factors - computed: true, optional: true, required: false
  private _factors?: string[]; 
  public get factors() {
    return this.getListAttribute('factors');
  }
  public set factors(value: string[]) {
    this._factors = value;
  }
  public resetFactors() {
    this._factors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorsInput() {
    return this._factors;
  }

  // mfa_enable - computed: true, optional: true, required: false
  private _mfaEnable?: boolean | cdktf.IResolvable; 
  public get mfaEnable() {
    return this.getBooleanAttribute('mfa_enable');
  }
  public set mfaEnable(value: boolean | cdktf.IResolvable) {
    this._mfaEnable = value;
  }
  public resetMfaEnable() {
    this._mfaEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnableInput() {
    return this._mfaEnable;
  }
}
export interface DataPanosAuthenticationProfileSingleSignOn {
  /**
  * Kerberos keytab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#kerberos_keytab DataPanosAuthenticationProfile#kerberos_keytab}
  */
  readonly kerberosKeytab?: string;
  /**
  * Kerberos realm to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#realm DataPanosAuthenticationProfile#realm}
  */
  readonly realm?: string;
  /**
  * Kerberos service principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#service_principal DataPanosAuthenticationProfile#service_principal}
  */
  readonly servicePrincipal?: string;
}

export function dataPanosAuthenticationProfileSingleSignOnToTerraform(struct?: DataPanosAuthenticationProfileSingleSignOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_keytab: cdktf.stringToTerraform(struct!.kerberosKeytab),
    realm: cdktf.stringToTerraform(struct!.realm),
    service_principal: cdktf.stringToTerraform(struct!.servicePrincipal),
  }
}


export function dataPanosAuthenticationProfileSingleSignOnToHclTerraform(struct?: DataPanosAuthenticationProfileSingleSignOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos_keytab: {
      value: cdktf.stringToHclTerraform(struct!.kerberosKeytab),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAuthenticationProfileSingleSignOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAuthenticationProfileSingleSignOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosKeytab !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKeytab = this._kerberosKeytab;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._servicePrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipal = this._servicePrincipal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAuthenticationProfileSingleSignOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kerberosKeytab = undefined;
      this._realm = undefined;
      this._servicePrincipal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kerberosKeytab = value.kerberosKeytab;
      this._realm = value.realm;
      this._servicePrincipal = value.servicePrincipal;
    }
  }

  // kerberos_keytab - computed: true, optional: true, required: false
  private _kerberosKeytab?: string; 
  public get kerberosKeytab() {
    return this.getStringAttribute('kerberos_keytab');
  }
  public set kerberosKeytab(value: string) {
    this._kerberosKeytab = value;
  }
  public resetKerberosKeytab() {
    this._kerberosKeytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeytabInput() {
    return this._kerberosKeytab;
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // service_principal - computed: true, optional: true, required: false
  private _servicePrincipal?: string; 
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }
  public set servicePrincipal(value: string) {
    this._servicePrincipal = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile panos_authentication_profile}
*/
export class DataPanosAuthenticationProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_authentication_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosAuthenticationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosAuthenticationProfile to import
  * @param importFromId The id of the existing DataPanosAuthenticationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosAuthenticationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_authentication_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/authentication_profile panos_authentication_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosAuthenticationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosAuthenticationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_authentication_profile',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.6',
        providerVersionConstraint: '2.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowList = config.allowList;
    this._location.internalValue = config.location;
    this._lockout.internalValue = config.lockout;
    this._method.internalValue = config.method;
    this._multiFactorAuth.internalValue = config.multiFactorAuth;
    this._name = config.name;
    this._singleSignOn.internalValue = config.singleSignOn;
    this._userDomain = config.userDomain;
    this._usernameModifier = config.usernameModifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: true, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return this.getListAttribute('allow_list');
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosAuthenticationProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosAuthenticationProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // lockout - computed: true, optional: true, required: false
  private _lockout = new DataPanosAuthenticationProfileLockoutOutputReference(this, "lockout");
  public get lockout() {
    return this._lockout;
  }
  public putLockout(value: DataPanosAuthenticationProfileLockout) {
    this._lockout.internalValue = value;
  }
  public resetLockout() {
    this._lockout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutInput() {
    return this._lockout.internalValue;
  }

  // method - computed: true, optional: true, required: false
  private _method = new DataPanosAuthenticationProfileMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: DataPanosAuthenticationProfileMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // multi_factor_auth - computed: true, optional: true, required: false
  private _multiFactorAuth = new DataPanosAuthenticationProfileMultiFactorAuthOutputReference(this, "multi_factor_auth");
  public get multiFactorAuth() {
    return this._multiFactorAuth;
  }
  public putMultiFactorAuth(value: DataPanosAuthenticationProfileMultiFactorAuth) {
    this._multiFactorAuth.internalValue = value;
  }
  public resetMultiFactorAuth() {
    this._multiFactorAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorAuthInput() {
    return this._multiFactorAuth.internalValue;
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

  // single_sign_on - computed: true, optional: true, required: false
  private _singleSignOn = new DataPanosAuthenticationProfileSingleSignOnOutputReference(this, "single_sign_on");
  public get singleSignOn() {
    return this._singleSignOn;
  }
  public putSingleSignOn(value: DataPanosAuthenticationProfileSingleSignOn) {
    this._singleSignOn.internalValue = value;
  }
  public resetSingleSignOn() {
    this._singleSignOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnInput() {
    return this._singleSignOn.internalValue;
  }

  // user_domain - computed: true, optional: true, required: false
  private _userDomain?: string; 
  public get userDomain() {
    return this.getStringAttribute('user_domain');
  }
  public set userDomain(value: string) {
    this._userDomain = value;
  }
  public resetUserDomain() {
    this._userDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainInput() {
    return this._userDomain;
  }

  // username_modifier - computed: true, optional: true, required: false
  private _usernameModifier?: string; 
  public get usernameModifier() {
    return this.getStringAttribute('username_modifier');
  }
  public set usernameModifier(value: string) {
    this._usernameModifier = value;
  }
  public resetUsernameModifier() {
    this._usernameModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameModifierInput() {
    return this._usernameModifier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowList),
      location: dataPanosAuthenticationProfileLocationToTerraform(this._location.internalValue),
      lockout: dataPanosAuthenticationProfileLockoutToTerraform(this._lockout.internalValue),
      method: dataPanosAuthenticationProfileMethodToTerraform(this._method.internalValue),
      multi_factor_auth: dataPanosAuthenticationProfileMultiFactorAuthToTerraform(this._multiFactorAuth.internalValue),
      name: cdktf.stringToTerraform(this._name),
      single_sign_on: dataPanosAuthenticationProfileSingleSignOnToTerraform(this._singleSignOn.internalValue),
      user_domain: cdktf.stringToTerraform(this._userDomain),
      username_modifier: cdktf.stringToTerraform(this._usernameModifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: dataPanosAuthenticationProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosAuthenticationProfileLocation",
      },
      lockout: {
        value: dataPanosAuthenticationProfileLockoutToHclTerraform(this._lockout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosAuthenticationProfileLockout",
      },
      method: {
        value: dataPanosAuthenticationProfileMethodToHclTerraform(this._method.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosAuthenticationProfileMethod",
      },
      multi_factor_auth: {
        value: dataPanosAuthenticationProfileMultiFactorAuthToHclTerraform(this._multiFactorAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosAuthenticationProfileMultiFactorAuth",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on: {
        value: dataPanosAuthenticationProfileSingleSignOnToHclTerraform(this._singleSignOn.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosAuthenticationProfileSingleSignOn",
      },
      user_domain: {
        value: cdktf.stringToHclTerraform(this._userDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_modifier: {
        value: cdktf.stringToHclTerraform(this._usernameModifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
