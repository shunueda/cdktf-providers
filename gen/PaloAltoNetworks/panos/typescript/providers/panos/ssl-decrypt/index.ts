// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslDecryptConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of disabled predefined exclude certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#disabled_ssl_exclude_cert_from_predefined SslDecrypt#disabled_ssl_exclude_cert_from_predefined}
  */
  readonly disabledSslExcludeCertFromPredefined?: string[];
  /**
  * Forward trust ECDSA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#forward_trust_certificate_ecdsa SslDecrypt#forward_trust_certificate_ecdsa}
  */
  readonly forwardTrustCertificateEcdsa?: string;
  /**
  * Forward trust RSA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#forward_trust_certificate_rsa SslDecrypt#forward_trust_certificate_rsa}
  */
  readonly forwardTrustCertificateRsa?: string;
  /**
  * Forward untrust ECDSA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#forward_untrust_certificate_ecdsa SslDecrypt#forward_untrust_certificate_ecdsa}
  */
  readonly forwardUntrustCertificateEcdsa?: string;
  /**
  * Forward untrust RSA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#forward_untrust_certificate_rsa SslDecrypt#forward_untrust_certificate_rsa}
  */
  readonly forwardUntrustCertificateRsa?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#location SslDecrypt#location}
  */
  readonly location: SslDecryptLocation;
  /**
  * List of root CA excludes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#root_ca_exclude_list SslDecrypt#root_ca_exclude_list}
  */
  readonly rootCaExcludeList?: string[];
  /**
  * List of SSL decrypt exclude certificates specs (specified below).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#ssl_exclude_cert SslDecrypt#ssl_exclude_cert}
  */
  readonly sslExcludeCert?: SslDecryptSslExcludeCert[] | cdktf.IResolvable;
  /**
  * List of trusted root CAs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#trusted_root_ca SslDecrypt#trusted_root_ca}
  */
  readonly trustedRootCa?: string[];
}
export interface SslDecryptLocationPanorama {
}

export function sslDecryptLocationPanoramaToTerraform(struct?: SslDecryptLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sslDecryptLocationPanoramaToHclTerraform(struct?: SslDecryptLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SslDecryptLocationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslDecryptLocationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslDecryptLocationPanorama | cdktf.IResolvable | undefined) {
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
export interface SslDecryptLocationShared {
}

export function sslDecryptLocationSharedToTerraform(struct?: SslDecryptLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sslDecryptLocationSharedToHclTerraform(struct?: SslDecryptLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SslDecryptLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslDecryptLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslDecryptLocationShared | cdktf.IResolvable | undefined) {
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
export interface SslDecryptLocationTemplate {
  /**
  * The template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#name SslDecrypt#name}
  */
  readonly name?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#panorama_device SslDecrypt#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function sslDecryptLocationTemplateToTerraform(struct?: SslDecryptLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function sslDecryptLocationTemplateToHclTerraform(struct?: SslDecryptLocationTemplate | cdktf.IResolvable): any {
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

export class SslDecryptLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslDecryptLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SslDecryptLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface SslDecryptLocationTemplateStack {
  /**
  * The template stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#name SslDecrypt#name}
  */
  readonly name?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#panorama_device SslDecrypt#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function sslDecryptLocationTemplateStackToTerraform(struct?: SslDecryptLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function sslDecryptLocationTemplateStackToHclTerraform(struct?: SslDecryptLocationTemplateStack | cdktf.IResolvable): any {
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

export class SslDecryptLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslDecryptLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SslDecryptLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface SslDecryptLocationTemplateStackVsys {
  /**
  * The NGFW device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#ngfw_device SslDecrypt#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#panorama_device SslDecrypt#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#template_stack SslDecrypt#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#vsys SslDecrypt#vsys}
  */
  readonly vsys?: string;
}

export function sslDecryptLocationTemplateStackVsysToTerraform(struct?: SslDecryptLocationTemplateStackVsys | cdktf.IResolvable): any {
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


export function sslDecryptLocationTemplateStackVsysToHclTerraform(struct?: SslDecryptLocationTemplateStackVsys | cdktf.IResolvable): any {
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

export class SslDecryptLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslDecryptLocationTemplateStackVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SslDecryptLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
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
export interface SslDecryptLocationTemplateVsys {
  /**
  * The NGFW device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#ngfw_device SslDecrypt#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#panorama_device SslDecrypt#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#template SslDecrypt#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#vsys SslDecrypt#vsys}
  */
  readonly vsys?: string;
}

export function sslDecryptLocationTemplateVsysToTerraform(struct?: SslDecryptLocationTemplateVsys | cdktf.IResolvable): any {
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


export function sslDecryptLocationTemplateVsysToHclTerraform(struct?: SslDecryptLocationTemplateVsys | cdktf.IResolvable): any {
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

export class SslDecryptLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslDecryptLocationTemplateVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SslDecryptLocationTemplateVsys | cdktf.IResolvable | undefined) {
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
export interface SslDecryptLocation {
  /**
  * Located in a panorama.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#panorama SslDecrypt#panorama}
  */
  readonly panorama?: SslDecryptLocationPanorama;
  /**
  * Located in shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#shared SslDecrypt#shared}
  */
  readonly shared?: SslDecryptLocationShared;
  /**
  * Located in a specific template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#template SslDecrypt#template}
  */
  readonly template?: SslDecryptLocationTemplate;
  /**
  * Located in a specific template stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#template_stack SslDecrypt#template_stack}
  */
  readonly templateStack?: SslDecryptLocationTemplateStack;
  /**
  * Located in a specific template stack, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#template_stack_vsys SslDecrypt#template_stack_vsys}
  */
  readonly templateStackVsys?: SslDecryptLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#template_vsys SslDecrypt#template_vsys}
  */
  readonly templateVsys?: SslDecryptLocationTemplateVsys;
}

export function sslDecryptLocationToTerraform(struct?: SslDecryptLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    panorama: sslDecryptLocationPanoramaToTerraform(struct!.panorama),
    shared: sslDecryptLocationSharedToTerraform(struct!.shared),
    template: sslDecryptLocationTemplateToTerraform(struct!.template),
    template_stack: sslDecryptLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: sslDecryptLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: sslDecryptLocationTemplateVsysToTerraform(struct!.templateVsys),
  }
}


export function sslDecryptLocationToHclTerraform(struct?: SslDecryptLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    panorama: {
      value: sslDecryptLocationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "SslDecryptLocationPanorama",
    },
    shared: {
      value: sslDecryptLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "SslDecryptLocationShared",
    },
    template: {
      value: sslDecryptLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "SslDecryptLocationTemplate",
    },
    template_stack: {
      value: sslDecryptLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "SslDecryptLocationTemplateStack",
    },
    template_stack_vsys: {
      value: sslDecryptLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "SslDecryptLocationTemplateStackVsys",
    },
    template_vsys: {
      value: sslDecryptLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "SslDecryptLocationTemplateVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslDecryptLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslDecryptLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SslDecryptLocation | cdktf.IResolvable | undefined) {
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
  private _panorama = new SslDecryptLocationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: SslDecryptLocationPanorama) {
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
  private _shared = new SslDecryptLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: SslDecryptLocationShared) {
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
  private _template = new SslDecryptLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: SslDecryptLocationTemplate) {
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
  private _templateStack = new SslDecryptLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: SslDecryptLocationTemplateStack) {
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
  private _templateStackVsys = new SslDecryptLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: SslDecryptLocationTemplateStackVsys) {
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
  private _templateVsys = new SslDecryptLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: SslDecryptLocationTemplateVsys) {
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
export interface SslDecryptSslExcludeCert {
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#description SslDecrypt#description}
  */
  readonly description?: string;
  /**
  * Exclude or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#exclude SslDecrypt#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#name SslDecrypt#name}
  */
  readonly name: string;
}

export function sslDecryptSslExcludeCertToTerraform(struct?: SslDecryptSslExcludeCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sslDecryptSslExcludeCertToHclTerraform(struct?: SslDecryptSslExcludeCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class SslDecryptSslExcludeCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslDecryptSslExcludeCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslDecryptSslExcludeCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._exclude = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._exclude = value.exclude;
      this._name = value.name;
    }
  }

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

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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
}

export class SslDecryptSslExcludeCertList extends cdktf.ComplexList {
  public internalValue? : SslDecryptSslExcludeCert[] | cdktf.IResolvable

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
  public get(index: number): SslDecryptSslExcludeCertOutputReference {
    return new SslDecryptSslExcludeCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt panos_ssl_decrypt}
*/
export class SslDecrypt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_ssl_decrypt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslDecrypt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslDecrypt to import
  * @param importFromId The id of the existing SslDecrypt that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslDecrypt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_ssl_decrypt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ssl_decrypt panos_ssl_decrypt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslDecryptConfig
  */
  public constructor(scope: Construct, id: string, config: SslDecryptConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_ssl_decrypt',
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
    this._disabledSslExcludeCertFromPredefined = config.disabledSslExcludeCertFromPredefined;
    this._forwardTrustCertificateEcdsa = config.forwardTrustCertificateEcdsa;
    this._forwardTrustCertificateRsa = config.forwardTrustCertificateRsa;
    this._forwardUntrustCertificateEcdsa = config.forwardUntrustCertificateEcdsa;
    this._forwardUntrustCertificateRsa = config.forwardUntrustCertificateRsa;
    this._location.internalValue = config.location;
    this._rootCaExcludeList = config.rootCaExcludeList;
    this._sslExcludeCert.internalValue = config.sslExcludeCert;
    this._trustedRootCa = config.trustedRootCa;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled_ssl_exclude_cert_from_predefined - computed: false, optional: true, required: false
  private _disabledSslExcludeCertFromPredefined?: string[]; 
  public get disabledSslExcludeCertFromPredefined() {
    return this.getListAttribute('disabled_ssl_exclude_cert_from_predefined');
  }
  public set disabledSslExcludeCertFromPredefined(value: string[]) {
    this._disabledSslExcludeCertFromPredefined = value;
  }
  public resetDisabledSslExcludeCertFromPredefined() {
    this._disabledSslExcludeCertFromPredefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledSslExcludeCertFromPredefinedInput() {
    return this._disabledSslExcludeCertFromPredefined;
  }

  // forward_trust_certificate_ecdsa - computed: false, optional: true, required: false
  private _forwardTrustCertificateEcdsa?: string; 
  public get forwardTrustCertificateEcdsa() {
    return this.getStringAttribute('forward_trust_certificate_ecdsa');
  }
  public set forwardTrustCertificateEcdsa(value: string) {
    this._forwardTrustCertificateEcdsa = value;
  }
  public resetForwardTrustCertificateEcdsa() {
    this._forwardTrustCertificateEcdsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTrustCertificateEcdsaInput() {
    return this._forwardTrustCertificateEcdsa;
  }

  // forward_trust_certificate_rsa - computed: false, optional: true, required: false
  private _forwardTrustCertificateRsa?: string; 
  public get forwardTrustCertificateRsa() {
    return this.getStringAttribute('forward_trust_certificate_rsa');
  }
  public set forwardTrustCertificateRsa(value: string) {
    this._forwardTrustCertificateRsa = value;
  }
  public resetForwardTrustCertificateRsa() {
    this._forwardTrustCertificateRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTrustCertificateRsaInput() {
    return this._forwardTrustCertificateRsa;
  }

  // forward_untrust_certificate_ecdsa - computed: false, optional: true, required: false
  private _forwardUntrustCertificateEcdsa?: string; 
  public get forwardUntrustCertificateEcdsa() {
    return this.getStringAttribute('forward_untrust_certificate_ecdsa');
  }
  public set forwardUntrustCertificateEcdsa(value: string) {
    this._forwardUntrustCertificateEcdsa = value;
  }
  public resetForwardUntrustCertificateEcdsa() {
    this._forwardUntrustCertificateEcdsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUntrustCertificateEcdsaInput() {
    return this._forwardUntrustCertificateEcdsa;
  }

  // forward_untrust_certificate_rsa - computed: false, optional: true, required: false
  private _forwardUntrustCertificateRsa?: string; 
  public get forwardUntrustCertificateRsa() {
    return this.getStringAttribute('forward_untrust_certificate_rsa');
  }
  public set forwardUntrustCertificateRsa(value: string) {
    this._forwardUntrustCertificateRsa = value;
  }
  public resetForwardUntrustCertificateRsa() {
    this._forwardUntrustCertificateRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUntrustCertificateRsaInput() {
    return this._forwardUntrustCertificateRsa;
  }

  // location - computed: false, optional: false, required: true
  private _location = new SslDecryptLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: SslDecryptLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // root_ca_exclude_list - computed: false, optional: true, required: false
  private _rootCaExcludeList?: string[]; 
  public get rootCaExcludeList() {
    return this.getListAttribute('root_ca_exclude_list');
  }
  public set rootCaExcludeList(value: string[]) {
    this._rootCaExcludeList = value;
  }
  public resetRootCaExcludeList() {
    this._rootCaExcludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaExcludeListInput() {
    return this._rootCaExcludeList;
  }

  // ssl_exclude_cert - computed: false, optional: true, required: false
  private _sslExcludeCert = new SslDecryptSslExcludeCertList(this, "ssl_exclude_cert", false);
  public get sslExcludeCert() {
    return this._sslExcludeCert;
  }
  public putSslExcludeCert(value: SslDecryptSslExcludeCert[] | cdktf.IResolvable) {
    this._sslExcludeCert.internalValue = value;
  }
  public resetSslExcludeCert() {
    this._sslExcludeCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExcludeCertInput() {
    return this._sslExcludeCert.internalValue;
  }

  // trusted_root_ca - computed: false, optional: true, required: false
  private _trustedRootCa?: string[]; 
  public get trustedRootCa() {
    return this.getListAttribute('trusted_root_ca');
  }
  public set trustedRootCa(value: string[]) {
    this._trustedRootCa = value;
  }
  public resetTrustedRootCa() {
    this._trustedRootCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedRootCaInput() {
    return this._trustedRootCa;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled_ssl_exclude_cert_from_predefined: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledSslExcludeCertFromPredefined),
      forward_trust_certificate_ecdsa: cdktf.stringToTerraform(this._forwardTrustCertificateEcdsa),
      forward_trust_certificate_rsa: cdktf.stringToTerraform(this._forwardTrustCertificateRsa),
      forward_untrust_certificate_ecdsa: cdktf.stringToTerraform(this._forwardUntrustCertificateEcdsa),
      forward_untrust_certificate_rsa: cdktf.stringToTerraform(this._forwardUntrustCertificateRsa),
      location: sslDecryptLocationToTerraform(this._location.internalValue),
      root_ca_exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rootCaExcludeList),
      ssl_exclude_cert: cdktf.listMapper(sslDecryptSslExcludeCertToTerraform, false)(this._sslExcludeCert.internalValue),
      trusted_root_ca: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustedRootCa),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled_ssl_exclude_cert_from_predefined: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledSslExcludeCertFromPredefined),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      forward_trust_certificate_ecdsa: {
        value: cdktf.stringToHclTerraform(this._forwardTrustCertificateEcdsa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_trust_certificate_rsa: {
        value: cdktf.stringToHclTerraform(this._forwardTrustCertificateRsa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_untrust_certificate_ecdsa: {
        value: cdktf.stringToHclTerraform(this._forwardUntrustCertificateEcdsa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_untrust_certificate_rsa: {
        value: cdktf.stringToHclTerraform(this._forwardUntrustCertificateRsa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: sslDecryptLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SslDecryptLocation",
      },
      root_ca_exclude_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rootCaExcludeList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssl_exclude_cert: {
        value: cdktf.listMapperHcl(sslDecryptSslExcludeCertToHclTerraform, false)(this._sslExcludeCert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslDecryptSslExcludeCertList",
      },
      trusted_root_ca: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trustedRootCa),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
