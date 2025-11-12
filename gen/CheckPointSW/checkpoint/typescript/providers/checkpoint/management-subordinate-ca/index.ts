// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSubordinateCaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate file encoded in base64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#base64_certificate ManagementSubordinateCa#base64_certificate}
  */
  readonly base64Certificate: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#color ManagementSubordinateCa#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#comments ManagementSubordinateCa#comments}
  */
  readonly comments?: string;
  /**
  * Collection of group identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#groups ManagementSubordinateCa#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#id ManagementSubordinateCa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#ignore_errors ManagementSubordinateCa#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#ignore_warnings ManagementSubordinateCa#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#name ManagementSubordinateCa#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#tags ManagementSubordinateCa#tags}
  */
  readonly tags?: string[];
  /**
  * automatic_enrollment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#automatic_enrollment ManagementSubordinateCa#automatic_enrollment}
  */
  readonly automaticEnrollment?: ManagementSubordinateCaAutomaticEnrollment;
}
export interface ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings {
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#ip_address ManagementSubordinateCa#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#port ManagementSubordinateCa#port}
  */
  readonly port?: number;
}

export function managementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsToTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function managementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsToHclTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ManagementSubordinateCaAutomaticEnrollmentCmpv1Settings {
  /**
  * direct_tcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#direct_tcp_settings ManagementSubordinateCa#direct_tcp_settings}
  */
  readonly directTcpSettings?: ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings;
}

export function managementSubordinateCaAutomaticEnrollmentCmpv1SettingsToTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentCmpv1Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct_tcp_settings: managementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsToTerraform(struct!.directTcpSettings),
  }
}


export function managementSubordinateCaAutomaticEnrollmentCmpv1SettingsToHclTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentCmpv1Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direct_tcp_settings: {
      value: managementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsToHclTerraform(struct!.directTcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSubordinateCaAutomaticEnrollmentCmpv1Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directTcpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directTcpSettings = this._directTcpSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSubordinateCaAutomaticEnrollmentCmpv1Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directTcpSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directTcpSettings.internalValue = value.directTcpSettings;
    }
  }

  // direct_tcp_settings - computed: false, optional: true, required: false
  private _directTcpSettings = new ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference(this, "direct_tcp_settings");
  public get directTcpSettings() {
    return this._directTcpSettings;
  }
  public putDirectTcpSettings(value: ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings) {
    this._directTcpSettings.internalValue = value;
  }
  public resetDirectTcpSettings() {
    this._directTcpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directTcpSettingsInput() {
    return this._directTcpSettings.internalValue;
  }
}
export interface ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings {
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#ip_address ManagementSubordinateCa#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#port ManagementSubordinateCa#port}
  */
  readonly port?: number;
}

export function managementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsToTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function managementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsToHclTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettings {
  /**
  * Certificate authority URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#url ManagementSubordinateCa#url}
  */
  readonly url?: string;
}

export function managementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettingsToTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function managementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettingsToHclTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ManagementSubordinateCaAutomaticEnrollmentCmpv2Settings {
  /**
  * Transport layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#transport_layer ManagementSubordinateCa#transport_layer}
  */
  readonly transportLayer?: string;
  /**
  * direct_tcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#direct_tcp_settings ManagementSubordinateCa#direct_tcp_settings}
  */
  readonly directTcpSettings?: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings;
  /**
  * http_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#http_settings ManagementSubordinateCa#http_settings}
  */
  readonly httpSettings?: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettings;
}

export function managementSubordinateCaAutomaticEnrollmentCmpv2SettingsToTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentCmpv2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transport_layer: cdktf.stringToTerraform(struct!.transportLayer),
    direct_tcp_settings: managementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsToTerraform(struct!.directTcpSettings),
    http_settings: managementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettingsToTerraform(struct!.httpSettings),
  }
}


export function managementSubordinateCaAutomaticEnrollmentCmpv2SettingsToHclTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentCmpv2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transport_layer: {
      value: cdktf.stringToHclTerraform(struct!.transportLayer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_tcp_settings: {
      value: managementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsToHclTerraform(struct!.directTcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsList",
    },
    http_settings: {
      value: managementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettingsToHclTerraform(struct!.httpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSubordinateCaAutomaticEnrollmentCmpv2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transportLayer !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportLayer = this._transportLayer;
    }
    if (this._directTcpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directTcpSettings = this._directTcpSettings?.internalValue;
    }
    if (this._httpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSettings = this._httpSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSubordinateCaAutomaticEnrollmentCmpv2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transportLayer = undefined;
      this._directTcpSettings.internalValue = undefined;
      this._httpSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transportLayer = value.transportLayer;
      this._directTcpSettings.internalValue = value.directTcpSettings;
      this._httpSettings.internalValue = value.httpSettings;
    }
  }

  // transport_layer - computed: false, optional: true, required: false
  private _transportLayer?: string; 
  public get transportLayer() {
    return this.getStringAttribute('transport_layer');
  }
  public set transportLayer(value: string) {
    this._transportLayer = value;
  }
  public resetTransportLayer() {
    this._transportLayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportLayerInput() {
    return this._transportLayer;
  }

  // direct_tcp_settings - computed: false, optional: true, required: false
  private _directTcpSettings = new ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference(this, "direct_tcp_settings");
  public get directTcpSettings() {
    return this._directTcpSettings;
  }
  public putDirectTcpSettings(value: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings) {
    this._directTcpSettings.internalValue = value;
  }
  public resetDirectTcpSettings() {
    this._directTcpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directTcpSettingsInput() {
    return this._directTcpSettings.internalValue;
  }

  // http_settings - computed: false, optional: true, required: false
  private _httpSettings = new ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference(this, "http_settings");
  public get httpSettings() {
    return this._httpSettings;
  }
  public putHttpSettings(value: ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsHttpSettings) {
    this._httpSettings.internalValue = value;
  }
  public resetHttpSettings() {
    this._httpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSettingsInput() {
    return this._httpSettings.internalValue;
  }
}
export interface ManagementSubordinateCaAutomaticEnrollmentScepSettings {
  /**
  * Certificate authority identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#ca_identifier ManagementSubordinateCa#ca_identifier}
  */
  readonly caIdentifier?: string;
  /**
  * Certificate authority URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#url ManagementSubordinateCa#url}
  */
  readonly url?: string;
}

export function managementSubordinateCaAutomaticEnrollmentScepSettingsToTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentScepSettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentScepSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_identifier: cdktf.stringToTerraform(struct!.caIdentifier),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function managementSubordinateCaAutomaticEnrollmentScepSettingsToHclTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentScepSettingsOutputReference | ManagementSubordinateCaAutomaticEnrollmentScepSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_identifier: {
      value: cdktf.stringToHclTerraform(struct!.caIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSubordinateCaAutomaticEnrollmentScepSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSubordinateCaAutomaticEnrollmentScepSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.caIdentifier = this._caIdentifier;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSubordinateCaAutomaticEnrollmentScepSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caIdentifier = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caIdentifier = value.caIdentifier;
      this._url = value.url;
    }
  }

  // ca_identifier - computed: false, optional: true, required: false
  private _caIdentifier?: string; 
  public get caIdentifier() {
    return this.getStringAttribute('ca_identifier');
  }
  public set caIdentifier(value: string) {
    this._caIdentifier = value;
  }
  public resetCaIdentifier() {
    this._caIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdentifierInput() {
    return this._caIdentifier;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ManagementSubordinateCaAutomaticEnrollment {
  /**
  * Whether to automatically enroll certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#automatically_enroll_certificate ManagementSubordinateCa#automatically_enroll_certificate}
  */
  readonly automaticallyEnrollCertificate?: boolean | cdktf.IResolvable;
  /**
  * Protocol that communicates with the certificate authority. Available only if "automatically-enroll-certificate" parameter is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#protocol ManagementSubordinateCa#protocol}
  */
  readonly protocol?: string;
  /**
  * cmpv1_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#cmpv1_settings ManagementSubordinateCa#cmpv1_settings}
  */
  readonly cmpv1Settings?: ManagementSubordinateCaAutomaticEnrollmentCmpv1Settings;
  /**
  * cmpv2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#cmpv2_settings ManagementSubordinateCa#cmpv2_settings}
  */
  readonly cmpv2Settings?: ManagementSubordinateCaAutomaticEnrollmentCmpv2Settings;
  /**
  * scep_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#scep_settings ManagementSubordinateCa#scep_settings}
  */
  readonly scepSettings?: ManagementSubordinateCaAutomaticEnrollmentScepSettings;
}

export function managementSubordinateCaAutomaticEnrollmentToTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentOutputReference | ManagementSubordinateCaAutomaticEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatically_enroll_certificate: cdktf.booleanToTerraform(struct!.automaticallyEnrollCertificate),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    cmpv1_settings: managementSubordinateCaAutomaticEnrollmentCmpv1SettingsToTerraform(struct!.cmpv1Settings),
    cmpv2_settings: managementSubordinateCaAutomaticEnrollmentCmpv2SettingsToTerraform(struct!.cmpv2Settings),
    scep_settings: managementSubordinateCaAutomaticEnrollmentScepSettingsToTerraform(struct!.scepSettings),
  }
}


export function managementSubordinateCaAutomaticEnrollmentToHclTerraform(struct?: ManagementSubordinateCaAutomaticEnrollmentOutputReference | ManagementSubordinateCaAutomaticEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatically_enroll_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.automaticallyEnrollCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cmpv1_settings: {
      value: managementSubordinateCaAutomaticEnrollmentCmpv1SettingsToHclTerraform(struct!.cmpv1Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsList",
    },
    cmpv2_settings: {
      value: managementSubordinateCaAutomaticEnrollmentCmpv2SettingsToHclTerraform(struct!.cmpv2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsList",
    },
    scep_settings: {
      value: managementSubordinateCaAutomaticEnrollmentScepSettingsToHclTerraform(struct!.scepSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSubordinateCaAutomaticEnrollmentScepSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSubordinateCaAutomaticEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSubordinateCaAutomaticEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticallyEnrollCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticallyEnrollCertificate = this._automaticallyEnrollCertificate;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._cmpv1Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmpv1Settings = this._cmpv1Settings?.internalValue;
    }
    if (this._cmpv2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmpv2Settings = this._cmpv2Settings?.internalValue;
    }
    if (this._scepSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scepSettings = this._scepSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSubordinateCaAutomaticEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticallyEnrollCertificate = undefined;
      this._protocol = undefined;
      this._cmpv1Settings.internalValue = undefined;
      this._cmpv2Settings.internalValue = undefined;
      this._scepSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticallyEnrollCertificate = value.automaticallyEnrollCertificate;
      this._protocol = value.protocol;
      this._cmpv1Settings.internalValue = value.cmpv1Settings;
      this._cmpv2Settings.internalValue = value.cmpv2Settings;
      this._scepSettings.internalValue = value.scepSettings;
    }
  }

  // automatically_enroll_certificate - computed: false, optional: true, required: false
  private _automaticallyEnrollCertificate?: boolean | cdktf.IResolvable; 
  public get automaticallyEnrollCertificate() {
    return this.getBooleanAttribute('automatically_enroll_certificate');
  }
  public set automaticallyEnrollCertificate(value: boolean | cdktf.IResolvable) {
    this._automaticallyEnrollCertificate = value;
  }
  public resetAutomaticallyEnrollCertificate() {
    this._automaticallyEnrollCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticallyEnrollCertificateInput() {
    return this._automaticallyEnrollCertificate;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // cmpv1_settings - computed: false, optional: true, required: false
  private _cmpv1Settings = new ManagementSubordinateCaAutomaticEnrollmentCmpv1SettingsOutputReference(this, "cmpv1_settings");
  public get cmpv1Settings() {
    return this._cmpv1Settings;
  }
  public putCmpv1Settings(value: ManagementSubordinateCaAutomaticEnrollmentCmpv1Settings) {
    this._cmpv1Settings.internalValue = value;
  }
  public resetCmpv1Settings() {
    this._cmpv1Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpv1SettingsInput() {
    return this._cmpv1Settings.internalValue;
  }

  // cmpv2_settings - computed: false, optional: true, required: false
  private _cmpv2Settings = new ManagementSubordinateCaAutomaticEnrollmentCmpv2SettingsOutputReference(this, "cmpv2_settings");
  public get cmpv2Settings() {
    return this._cmpv2Settings;
  }
  public putCmpv2Settings(value: ManagementSubordinateCaAutomaticEnrollmentCmpv2Settings) {
    this._cmpv2Settings.internalValue = value;
  }
  public resetCmpv2Settings() {
    this._cmpv2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpv2SettingsInput() {
    return this._cmpv2Settings.internalValue;
  }

  // scep_settings - computed: false, optional: true, required: false
  private _scepSettings = new ManagementSubordinateCaAutomaticEnrollmentScepSettingsOutputReference(this, "scep_settings");
  public get scepSettings() {
    return this._scepSettings;
  }
  public putScepSettings(value: ManagementSubordinateCaAutomaticEnrollmentScepSettings) {
    this._scepSettings.internalValue = value;
  }
  public resetScepSettings() {
    this._scepSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepSettingsInput() {
    return this._scepSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca checkpoint_management_subordinate_ca}
*/
export class ManagementSubordinateCa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_subordinate_ca";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSubordinateCa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSubordinateCa to import
  * @param importFromId The id of the existing ManagementSubordinateCa that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSubordinateCa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_subordinate_ca", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_subordinate_ca checkpoint_management_subordinate_ca} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSubordinateCaConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementSubordinateCaConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_subordinate_ca',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64Certificate = config.base64Certificate;
    this._color = config.color;
    this._comments = config.comments;
    this._groups = config.groups;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._tags = config.tags;
    this._automaticEnrollment.internalValue = config.automaticEnrollment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_certificate - computed: false, optional: false, required: true
  private _base64Certificate?: string; 
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }
  public set base64Certificate(value: string) {
    this._base64Certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get base64CertificateInput() {
    return this._base64Certificate;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // automatic_enrollment - computed: false, optional: true, required: false
  private _automaticEnrollment = new ManagementSubordinateCaAutomaticEnrollmentOutputReference(this, "automatic_enrollment");
  public get automaticEnrollment() {
    return this._automaticEnrollment;
  }
  public putAutomaticEnrollment(value: ManagementSubordinateCaAutomaticEnrollment) {
    this._automaticEnrollment.internalValue = value;
  }
  public resetAutomaticEnrollment() {
    this._automaticEnrollment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticEnrollmentInput() {
    return this._automaticEnrollment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_certificate: cdktf.stringToTerraform(this._base64Certificate),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      automatic_enrollment: managementSubordinateCaAutomaticEnrollmentToTerraform(this._automaticEnrollment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base64_certificate: {
        value: cdktf.stringToHclTerraform(this._base64Certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      automatic_enrollment: {
        value: managementSubordinateCaAutomaticEnrollmentToHclTerraform(this._automaticEnrollment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSubordinateCaAutomaticEnrollmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
