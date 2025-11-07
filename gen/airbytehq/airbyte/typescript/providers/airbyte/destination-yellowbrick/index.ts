// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationYellowbrickConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#configuration DestinationYellowbrick#configuration}
  */
  readonly configuration: DestinationYellowbrickConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#definition_id DestinationYellowbrick#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#name DestinationYellowbrick#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#workspace_id DestinationYellowbrick#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationYellowbrickConfigurationSslModeAllow {
}

export function destinationYellowbrickConfigurationSslModeAllowToTerraform(struct?: DestinationYellowbrickConfigurationSslModeAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationYellowbrickConfigurationSslModeAllowToHclTerraform(struct?: DestinationYellowbrickConfigurationSslModeAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationYellowbrickConfigurationSslModeAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationSslModeAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationSslModeAllow | cdktf.IResolvable | undefined) {
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
export interface DestinationYellowbrickConfigurationSslModeDisable {
}

export function destinationYellowbrickConfigurationSslModeDisableToTerraform(struct?: DestinationYellowbrickConfigurationSslModeDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationYellowbrickConfigurationSslModeDisableToHclTerraform(struct?: DestinationYellowbrickConfigurationSslModeDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationYellowbrickConfigurationSslModeDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationSslModeDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationSslModeDisable | cdktf.IResolvable | undefined) {
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
export interface DestinationYellowbrickConfigurationSslModePrefer {
}

export function destinationYellowbrickConfigurationSslModePreferToTerraform(struct?: DestinationYellowbrickConfigurationSslModePrefer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationYellowbrickConfigurationSslModePreferToHclTerraform(struct?: DestinationYellowbrickConfigurationSslModePrefer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationYellowbrickConfigurationSslModePreferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationSslModePrefer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationSslModePrefer | cdktf.IResolvable | undefined) {
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
export interface DestinationYellowbrickConfigurationSslModeRequire {
}

export function destinationYellowbrickConfigurationSslModeRequireToTerraform(struct?: DestinationYellowbrickConfigurationSslModeRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationYellowbrickConfigurationSslModeRequireToHclTerraform(struct?: DestinationYellowbrickConfigurationSslModeRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationYellowbrickConfigurationSslModeRequireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationSslModeRequire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationSslModeRequire | cdktf.IResolvable | undefined) {
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
export interface DestinationYellowbrickConfigurationSslModeVerifyCa {
  /**
  * CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#ca_certificate DestinationYellowbrick#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * Password for keystorage. This field is optional. If you do not add it - the password will be generated automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#client_key_password DestinationYellowbrick#client_key_password}
  */
  readonly clientKeyPassword?: string;
}

export function destinationYellowbrickConfigurationSslModeVerifyCaToTerraform(struct?: DestinationYellowbrickConfigurationSslModeVerifyCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_key_password: cdktf.stringToTerraform(struct!.clientKeyPassword),
  }
}


export function destinationYellowbrickConfigurationSslModeVerifyCaToHclTerraform(struct?: DestinationYellowbrickConfigurationSslModeVerifyCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_password: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationYellowbrickConfigurationSslModeVerifyCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationSslModeVerifyCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyPassword = this._clientKeyPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationSslModeVerifyCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
      this._clientKeyPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
      this._clientKeyPassword = value.clientKeyPassword;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_key_password - computed: false, optional: true, required: false
  private _clientKeyPassword?: string; 
  public get clientKeyPassword() {
    return this.getStringAttribute('client_key_password');
  }
  public set clientKeyPassword(value: string) {
    this._clientKeyPassword = value;
  }
  public resetClientKeyPassword() {
    this._clientKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPasswordInput() {
    return this._clientKeyPassword;
  }
}
export interface DestinationYellowbrickConfigurationSslModeVerifyFull {
  /**
  * CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#ca_certificate DestinationYellowbrick#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * Client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#client_certificate DestinationYellowbrick#client_certificate}
  */
  readonly clientCertificate: string;
  /**
  * Client key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#client_key DestinationYellowbrick#client_key}
  */
  readonly clientKey: string;
  /**
  * Password for keystorage. This field is optional. If you do not add it - the password will be generated automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#client_key_password DestinationYellowbrick#client_key_password}
  */
  readonly clientKeyPassword?: string;
}

export function destinationYellowbrickConfigurationSslModeVerifyFullToTerraform(struct?: DestinationYellowbrickConfigurationSslModeVerifyFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    client_key_password: cdktf.stringToTerraform(struct!.clientKeyPassword),
  }
}


export function destinationYellowbrickConfigurationSslModeVerifyFullToHclTerraform(struct?: DestinationYellowbrickConfigurationSslModeVerifyFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_password: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationYellowbrickConfigurationSslModeVerifyFullOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationSslModeVerifyFull | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._clientKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyPassword = this._clientKeyPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationSslModeVerifyFull | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
      this._clientKeyPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
      this._clientKeyPassword = value.clientKeyPassword;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: false, required: true
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: false, required: true
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // client_key_password - computed: false, optional: true, required: false
  private _clientKeyPassword?: string; 
  public get clientKeyPassword() {
    return this.getStringAttribute('client_key_password');
  }
  public set clientKeyPassword(value: string) {
    this._clientKeyPassword = value;
  }
  public resetClientKeyPassword() {
    this._clientKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPasswordInput() {
    return this._clientKeyPassword;
  }
}
export interface DestinationYellowbrickConfigurationSslMode {
  /**
  * Allow SSL mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#allow DestinationYellowbrick#allow}
  */
  readonly allow?: DestinationYellowbrickConfigurationSslModeAllow;
  /**
  * Disable SSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#disable DestinationYellowbrick#disable}
  */
  readonly disable?: DestinationYellowbrickConfigurationSslModeDisable;
  /**
  * Prefer SSL mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#prefer DestinationYellowbrick#prefer}
  */
  readonly prefer?: DestinationYellowbrickConfigurationSslModePrefer;
  /**
  * Require SSL mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#require DestinationYellowbrick#require}
  */
  readonly require?: DestinationYellowbrickConfigurationSslModeRequire;
  /**
  * Verify-ca SSL mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#verify_ca DestinationYellowbrick#verify_ca}
  */
  readonly verifyCa?: DestinationYellowbrickConfigurationSslModeVerifyCa;
  /**
  * Verify-full SSL mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#verify_full DestinationYellowbrick#verify_full}
  */
  readonly verifyFull?: DestinationYellowbrickConfigurationSslModeVerifyFull;
}

export function destinationYellowbrickConfigurationSslModeToTerraform(struct?: DestinationYellowbrickConfigurationSslMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: destinationYellowbrickConfigurationSslModeAllowToTerraform(struct!.allow),
    disable: destinationYellowbrickConfigurationSslModeDisableToTerraform(struct!.disable),
    prefer: destinationYellowbrickConfigurationSslModePreferToTerraform(struct!.prefer),
    require: destinationYellowbrickConfigurationSslModeRequireToTerraform(struct!.require),
    verify_ca: destinationYellowbrickConfigurationSslModeVerifyCaToTerraform(struct!.verifyCa),
    verify_full: destinationYellowbrickConfigurationSslModeVerifyFullToTerraform(struct!.verifyFull),
  }
}


export function destinationYellowbrickConfigurationSslModeToHclTerraform(struct?: DestinationYellowbrickConfigurationSslMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: destinationYellowbrickConfigurationSslModeAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationSslModeAllow",
    },
    disable: {
      value: destinationYellowbrickConfigurationSslModeDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationSslModeDisable",
    },
    prefer: {
      value: destinationYellowbrickConfigurationSslModePreferToHclTerraform(struct!.prefer),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationSslModePrefer",
    },
    require: {
      value: destinationYellowbrickConfigurationSslModeRequireToHclTerraform(struct!.require),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationSslModeRequire",
    },
    verify_ca: {
      value: destinationYellowbrickConfigurationSslModeVerifyCaToHclTerraform(struct!.verifyCa),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationSslModeVerifyCa",
    },
    verify_full: {
      value: destinationYellowbrickConfigurationSslModeVerifyFullToHclTerraform(struct!.verifyFull),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationSslModeVerifyFull",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationYellowbrickConfigurationSslModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationSslMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._disable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable?.internalValue;
    }
    if (this._prefer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer?.internalValue;
    }
    if (this._require?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.require = this._require?.internalValue;
    }
    if (this._verifyCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCa = this._verifyCa?.internalValue;
    }
    if (this._verifyFull?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyFull = this._verifyFull?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationSslMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._disable.internalValue = undefined;
      this._prefer.internalValue = undefined;
      this._require.internalValue = undefined;
      this._verifyCa.internalValue = undefined;
      this._verifyFull.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._disable.internalValue = value.disable;
      this._prefer.internalValue = value.prefer;
      this._require.internalValue = value.require;
      this._verifyCa.internalValue = value.verifyCa;
      this._verifyFull.internalValue = value.verifyFull;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DestinationYellowbrickConfigurationSslModeAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DestinationYellowbrickConfigurationSslModeAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // disable - computed: false, optional: true, required: false
  private _disable = new DestinationYellowbrickConfigurationSslModeDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: DestinationYellowbrickConfigurationSslModeDisable) {
    this._disable.internalValue = value;
  }
  public resetDisable() {
    this._disable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable.internalValue;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer = new DestinationYellowbrickConfigurationSslModePreferOutputReference(this, "prefer");
  public get prefer() {
    return this._prefer;
  }
  public putPrefer(value: DestinationYellowbrickConfigurationSslModePrefer) {
    this._prefer.internalValue = value;
  }
  public resetPrefer() {
    this._prefer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer.internalValue;
  }

  // require - computed: false, optional: true, required: false
  private _require = new DestinationYellowbrickConfigurationSslModeRequireOutputReference(this, "require");
  public get require() {
    return this._require;
  }
  public putRequire(value: DestinationYellowbrickConfigurationSslModeRequire) {
    this._require.internalValue = value;
  }
  public resetRequire() {
    this._require.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require.internalValue;
  }

  // verify_ca - computed: false, optional: true, required: false
  private _verifyCa = new DestinationYellowbrickConfigurationSslModeVerifyCaOutputReference(this, "verify_ca");
  public get verifyCa() {
    return this._verifyCa;
  }
  public putVerifyCa(value: DestinationYellowbrickConfigurationSslModeVerifyCa) {
    this._verifyCa.internalValue = value;
  }
  public resetVerifyCa() {
    this._verifyCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCaInput() {
    return this._verifyCa.internalValue;
  }

  // verify_full - computed: false, optional: true, required: false
  private _verifyFull = new DestinationYellowbrickConfigurationSslModeVerifyFullOutputReference(this, "verify_full");
  public get verifyFull() {
    return this._verifyFull;
  }
  public putVerifyFull(value: DestinationYellowbrickConfigurationSslModeVerifyFull) {
    this._verifyFull.internalValue = value;
  }
  public resetVerifyFull() {
    this._verifyFull.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyFullInput() {
    return this._verifyFull.internalValue;
  }
}
export interface DestinationYellowbrickConfigurationTunnelMethodNoTunnel {
}

export function destinationYellowbrickConfigurationTunnelMethodNoTunnelToTerraform(struct?: DestinationYellowbrickConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationYellowbrickConfigurationTunnelMethodNoTunnelToHclTerraform(struct?: DestinationYellowbrickConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationYellowbrickConfigurationTunnelMethodNoTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined) {
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
export interface DestinationYellowbrickConfigurationTunnelMethodPasswordAuthentication {
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#tunnel_host DestinationYellowbrick#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#tunnel_port DestinationYellowbrick#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#tunnel_user DestinationYellowbrick#tunnel_user}
  */
  readonly tunnelUser: string;
  /**
  * OS-level password for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#tunnel_user_password DestinationYellowbrick#tunnel_user_password}
  */
  readonly tunnelUserPassword: string;
}

export function destinationYellowbrickConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct?: DestinationYellowbrickConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
    tunnel_user_password: cdktf.stringToTerraform(struct!.tunnelUserPassword),
  }
}


export function destinationYellowbrickConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct?: DestinationYellowbrickConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_user_password: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationYellowbrickConfigurationTunnelMethodPasswordAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    if (this._tunnelUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUserPassword = this._tunnelUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tunnelHost = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
      this._tunnelUserPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tunnelHost = value.tunnelHost;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
      this._tunnelUserPassword = value.tunnelUserPassword;
    }
  }

  // tunnel_host - computed: false, optional: false, required: true
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: false, required: true
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }

  // tunnel_user_password - computed: false, optional: false, required: true
  private _tunnelUserPassword?: string; 
  public get tunnelUserPassword() {
    return this.getStringAttribute('tunnel_user_password');
  }
  public set tunnelUserPassword(value: string) {
    this._tunnelUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserPasswordInput() {
    return this._tunnelUserPassword;
  }
}
export interface DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthentication {
  /**
  * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#ssh_key DestinationYellowbrick#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#tunnel_host DestinationYellowbrick#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#tunnel_port DestinationYellowbrick#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#tunnel_user DestinationYellowbrick#tunnel_user}
  */
  readonly tunnelUser: string;
}

export function destinationYellowbrickConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct?: DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
  }
}


export function destinationYellowbrickConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct?: DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sshKey = undefined;
      this._tunnelHost = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sshKey = value.sshKey;
      this._tunnelHost = value.tunnelHost;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
    }
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // tunnel_host - computed: false, optional: false, required: true
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: false, required: true
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }
}
export interface DestinationYellowbrickConfigurationTunnelMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#no_tunnel DestinationYellowbrick#no_tunnel}
  */
  readonly noTunnel?: DestinationYellowbrickConfigurationTunnelMethodNoTunnel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#password_authentication DestinationYellowbrick#password_authentication}
  */
  readonly passwordAuthentication?: DestinationYellowbrickConfigurationTunnelMethodPasswordAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#ssh_key_authentication DestinationYellowbrick#ssh_key_authentication}
  */
  readonly sshKeyAuthentication?: DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthentication;
}

export function destinationYellowbrickConfigurationTunnelMethodToTerraform(struct?: DestinationYellowbrickConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_tunnel: destinationYellowbrickConfigurationTunnelMethodNoTunnelToTerraform(struct!.noTunnel),
    password_authentication: destinationYellowbrickConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct!.passwordAuthentication),
    ssh_key_authentication: destinationYellowbrickConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct!.sshKeyAuthentication),
  }
}


export function destinationYellowbrickConfigurationTunnelMethodToHclTerraform(struct?: DestinationYellowbrickConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_tunnel: {
      value: destinationYellowbrickConfigurationTunnelMethodNoTunnelToHclTerraform(struct!.noTunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationTunnelMethodNoTunnel",
    },
    password_authentication: {
      value: destinationYellowbrickConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct!.passwordAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationTunnelMethodPasswordAuthentication",
    },
    ssh_key_authentication: {
      value: destinationYellowbrickConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct!.sshKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationYellowbrickConfigurationTunnelMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfigurationTunnelMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noTunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTunnel = this._noTunnel?.internalValue;
    }
    if (this._passwordAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAuthentication = this._passwordAuthentication?.internalValue;
    }
    if (this._sshKeyAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyAuthentication = this._sshKeyAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfigurationTunnelMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noTunnel.internalValue = undefined;
      this._passwordAuthentication.internalValue = undefined;
      this._sshKeyAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noTunnel.internalValue = value.noTunnel;
      this._passwordAuthentication.internalValue = value.passwordAuthentication;
      this._sshKeyAuthentication.internalValue = value.sshKeyAuthentication;
    }
  }

  // no_tunnel - computed: false, optional: true, required: false
  private _noTunnel = new DestinationYellowbrickConfigurationTunnelMethodNoTunnelOutputReference(this, "no_tunnel");
  public get noTunnel() {
    return this._noTunnel;
  }
  public putNoTunnel(value: DestinationYellowbrickConfigurationTunnelMethodNoTunnel) {
    this._noTunnel.internalValue = value;
  }
  public resetNoTunnel() {
    this._noTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTunnelInput() {
    return this._noTunnel.internalValue;
  }

  // password_authentication - computed: false, optional: true, required: false
  private _passwordAuthentication = new DestinationYellowbrickConfigurationTunnelMethodPasswordAuthenticationOutputReference(this, "password_authentication");
  public get passwordAuthentication() {
    return this._passwordAuthentication;
  }
  public putPasswordAuthentication(value: DestinationYellowbrickConfigurationTunnelMethodPasswordAuthentication) {
    this._passwordAuthentication.internalValue = value;
  }
  public resetPasswordAuthentication() {
    this._passwordAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationInput() {
    return this._passwordAuthentication.internalValue;
  }

  // ssh_key_authentication - computed: false, optional: true, required: false
  private _sshKeyAuthentication = new DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthenticationOutputReference(this, "ssh_key_authentication");
  public get sshKeyAuthentication() {
    return this._sshKeyAuthentication;
  }
  public putSshKeyAuthentication(value: DestinationYellowbrickConfigurationTunnelMethodSshKeyAuthentication) {
    this._sshKeyAuthentication.internalValue = value;
  }
  public resetSshKeyAuthentication() {
    this._sshKeyAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyAuthenticationInput() {
    return this._sshKeyAuthentication.internalValue;
  }
}
export interface DestinationYellowbrickConfiguration {
  /**
  * Name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#database DestinationYellowbrick#database}
  */
  readonly database: string;
  /**
  * Hostname of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#host DestinationYellowbrick#host}
  */
  readonly host: string;
  /**
  * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#jdbc_url_params DestinationYellowbrick#jdbc_url_params}
  */
  readonly jdbcUrlParams?: string;
  /**
  * Password associated with the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#password DestinationYellowbrick#password}
  */
  readonly password?: string;
  /**
  * Port of the database. Default: 5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#port DestinationYellowbrick#port}
  */
  readonly port?: number;
  /**
  * The default schema tables are written to if the source does not specify a namespace. The usual value for this field is "public". Default: "public"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#schema DestinationYellowbrick#schema}
  */
  readonly schema?: string;
  /**
  * Encrypt data using SSL. When activating SSL, please select one of the connection modes. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#ssl DestinationYellowbrick#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * SSL connection modes. 
  *  <b>disable</b> - Chose this mode to disable encryption of communication between Airbyte and destination database
  *  <b>allow</b> - Chose this mode to enable encryption only when required by the source database
  *  <b>prefer</b> - Chose this mode to allow unencrypted connection only if the source database does not support encryption
  *  <b>require</b> - Chose this mode to always require encryption. If the source database server does not support encryption, connection will fail
  *   <b>verify-ca</b> - Chose this mode to always require encryption and to verify that the source database server has a valid SSL certificate
  *   <b>verify-full</b> - This is the most secure mode. Chose this mode to always require encryption and to verify the identity of the source database server
  *  See more information - <a href="https://jdbc.postgresql.org/documentation/head/ssl-client.html"> in the docs</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#ssl_mode DestinationYellowbrick#ssl_mode}
  */
  readonly sslMode?: DestinationYellowbrickConfigurationSslMode;
  /**
  * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#tunnel_method DestinationYellowbrick#tunnel_method}
  */
  readonly tunnelMethod?: DestinationYellowbrickConfigurationTunnelMethod;
  /**
  * Username to use to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#username DestinationYellowbrick#username}
  */
  readonly username: string;
}

export function destinationYellowbrickConfigurationToTerraform(struct?: DestinationYellowbrickConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    jdbc_url_params: cdktf.stringToTerraform(struct!.jdbcUrlParams),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    schema: cdktf.stringToTerraform(struct!.schema),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_mode: destinationYellowbrickConfigurationSslModeToTerraform(struct!.sslMode),
    tunnel_method: destinationYellowbrickConfigurationTunnelMethodToTerraform(struct!.tunnelMethod),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function destinationYellowbrickConfigurationToHclTerraform(struct?: DestinationYellowbrickConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jdbc_url_params: {
      value: cdktf.stringToHclTerraform(struct!.jdbcUrlParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_mode: {
      value: destinationYellowbrickConfigurationSslModeToHclTerraform(struct!.sslMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationSslMode",
    },
    tunnel_method: {
      value: destinationYellowbrickConfigurationTunnelMethodToHclTerraform(struct!.tunnelMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationYellowbrickConfigurationTunnelMethod",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationYellowbrickConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._jdbcUrlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcUrlParams = this._jdbcUrlParams;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode?.internalValue;
    }
    if (this._tunnelMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._jdbcUrlParams = undefined;
      this._password = undefined;
      this._port = undefined;
      this._schema = undefined;
      this._ssl = undefined;
      this._sslMode.internalValue = undefined;
      this._tunnelMethod.internalValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._jdbcUrlParams = value.jdbcUrlParams;
      this._password = value.password;
      this._port = value.port;
      this._schema = value.schema;
      this._ssl = value.ssl;
      this._sslMode.internalValue = value.sslMode;
      this._tunnelMethod.internalValue = value.tunnelMethod;
      this._username = value.username;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // jdbc_url_params - computed: false, optional: true, required: false
  private _jdbcUrlParams?: string; 
  public get jdbcUrlParams() {
    return this.getStringAttribute('jdbc_url_params');
  }
  public set jdbcUrlParams(value: string) {
    this._jdbcUrlParams = value;
  }
  public resetJdbcUrlParams() {
    this._jdbcUrlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUrlParamsInput() {
    return this._jdbcUrlParams;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode = new DestinationYellowbrickConfigurationSslModeOutputReference(this, "ssl_mode");
  public get sslMode() {
    return this._sslMode;
  }
  public putSslMode(value: DestinationYellowbrickConfigurationSslMode) {
    this._sslMode.internalValue = value;
  }
  public resetSslMode() {
    this._sslMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode.internalValue;
  }

  // tunnel_method - computed: false, optional: true, required: false
  private _tunnelMethod = new DestinationYellowbrickConfigurationTunnelMethodOutputReference(this, "tunnel_method");
  public get tunnelMethod() {
    return this._tunnelMethod;
  }
  public putTunnelMethod(value: DestinationYellowbrickConfigurationTunnelMethod) {
    this._tunnelMethod.internalValue = value;
  }
  public resetTunnelMethod() {
    this._tunnelMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DestinationYellowbrickResourceAllocationDefault {
}

export function destinationYellowbrickResourceAllocationDefaultToTerraform(struct?: DestinationYellowbrickResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationYellowbrickResourceAllocationDefaultToHclTerraform(struct?: DestinationYellowbrickResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationYellowbrickResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationYellowbrickResourceAllocationJobSpecificResourceRequirements {
}

export function destinationYellowbrickResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationYellowbrickResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationYellowbrickResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationYellowbrickResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationYellowbrickResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationYellowbrickResourceAllocationJobSpecific {
}

export function destinationYellowbrickResourceAllocationJobSpecificToTerraform(struct?: DestinationYellowbrickResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationYellowbrickResourceAllocationJobSpecificToHclTerraform(struct?: DestinationYellowbrickResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationYellowbrickResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DestinationYellowbrickResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DestinationYellowbrickResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationYellowbrickResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationYellowbrickResourceAllocationJobSpecificOutputReference {
    return new DestinationYellowbrickResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationYellowbrickResourceAllocation {
}

export function destinationYellowbrickResourceAllocationToTerraform(struct?: DestinationYellowbrickResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationYellowbrickResourceAllocationToHclTerraform(struct?: DestinationYellowbrickResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationYellowbrickResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationYellowbrickResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationYellowbrickResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationYellowbrickResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationYellowbrickResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick airbyte_destination_yellowbrick}
*/
export class DestinationYellowbrick extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_yellowbrick";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationYellowbrick resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationYellowbrick to import
  * @param importFromId The id of the existing DestinationYellowbrick that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationYellowbrick to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_yellowbrick", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_yellowbrick airbyte_destination_yellowbrick} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationYellowbrickConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationYellowbrickConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_yellowbrick',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DestinationYellowbrickConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationYellowbrickConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
  }

  // destination_id - computed: true, optional: false, required: false
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
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

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new DestinationYellowbrickResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: destinationYellowbrickConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationYellowbrickConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationYellowbrickConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
