// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MfaServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#device MfaServer#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#folder MfaServer#folder}
  */
  readonly folder?: string;
  /**
  * The MFA server certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#mfa_cert_profile MfaServer#mfa_cert_profile}
  */
  readonly mfaCertProfile: string;
  /**
  * The MFA vendor type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#mfa_vendor_type MfaServer#mfa_vendor_type}
  */
  readonly mfaVendorType?: MfaServerMfaVendorType;
  /**
  * The name of the MFA server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#name MfaServer#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#snippet MfaServer#snippet}
  */
  readonly snippet?: string;
}
export interface MfaServerMfaVendorTypeDuoSecurityV2 {
  /**
  * Duo Security API hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#duo_api_host MfaServer#duo_api_host}
  */
  readonly duoApiHost: string;
  /**
  * Duo Security API base URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#duo_baseuri MfaServer#duo_baseuri}
  */
  readonly duoBaseuri: string;
  /**
  * Duo Security integration key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#duo_integration_key MfaServer#duo_integration_key}
  */
  readonly duoIntegrationKey: string;
  /**
  * Duo Security secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#duo_secret_key MfaServer#duo_secret_key}
  */
  readonly duoSecretKey: string;
  /**
  * Duo Security timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#duo_timeout MfaServer#duo_timeout}
  */
  readonly duoTimeout: number;
}

export function mfaServerMfaVendorTypeDuoSecurityV2ToTerraform(struct?: MfaServerMfaVendorTypeDuoSecurityV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duo_api_host: cdktf.stringToTerraform(struct!.duoApiHost),
    duo_baseuri: cdktf.stringToTerraform(struct!.duoBaseuri),
    duo_integration_key: cdktf.stringToTerraform(struct!.duoIntegrationKey),
    duo_secret_key: cdktf.stringToTerraform(struct!.duoSecretKey),
    duo_timeout: cdktf.numberToTerraform(struct!.duoTimeout),
  }
}


export function mfaServerMfaVendorTypeDuoSecurityV2ToHclTerraform(struct?: MfaServerMfaVendorTypeDuoSecurityV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duo_api_host: {
      value: cdktf.stringToHclTerraform(struct!.duoApiHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duo_baseuri: {
      value: cdktf.stringToHclTerraform(struct!.duoBaseuri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duo_integration_key: {
      value: cdktf.stringToHclTerraform(struct!.duoIntegrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duo_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.duoSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duo_timeout: {
      value: cdktf.numberToHclTerraform(struct!.duoTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaServerMfaVendorTypeDuoSecurityV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaServerMfaVendorTypeDuoSecurityV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duoApiHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoApiHost = this._duoApiHost;
    }
    if (this._duoBaseuri !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoBaseuri = this._duoBaseuri;
    }
    if (this._duoIntegrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoIntegrationKey = this._duoIntegrationKey;
    }
    if (this._duoSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoSecretKey = this._duoSecretKey;
    }
    if (this._duoTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoTimeout = this._duoTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaServerMfaVendorTypeDuoSecurityV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duoApiHost = undefined;
      this._duoBaseuri = undefined;
      this._duoIntegrationKey = undefined;
      this._duoSecretKey = undefined;
      this._duoTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duoApiHost = value.duoApiHost;
      this._duoBaseuri = value.duoBaseuri;
      this._duoIntegrationKey = value.duoIntegrationKey;
      this._duoSecretKey = value.duoSecretKey;
      this._duoTimeout = value.duoTimeout;
    }
  }

  // duo_api_host - computed: true, optional: false, required: true
  private _duoApiHost?: string; 
  public get duoApiHost() {
    return this.getStringAttribute('duo_api_host');
  }
  public set duoApiHost(value: string) {
    this._duoApiHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get duoApiHostInput() {
    return this._duoApiHost;
  }

  // duo_baseuri - computed: true, optional: false, required: true
  private _duoBaseuri?: string; 
  public get duoBaseuri() {
    return this.getStringAttribute('duo_baseuri');
  }
  public set duoBaseuri(value: string) {
    this._duoBaseuri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get duoBaseuriInput() {
    return this._duoBaseuri;
  }

  // duo_integration_key - computed: true, optional: false, required: true
  private _duoIntegrationKey?: string; 
  public get duoIntegrationKey() {
    return this.getStringAttribute('duo_integration_key');
  }
  public set duoIntegrationKey(value: string) {
    this._duoIntegrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get duoIntegrationKeyInput() {
    return this._duoIntegrationKey;
  }

  // duo_secret_key - computed: true, optional: false, required: true
  private _duoSecretKey?: string; 
  public get duoSecretKey() {
    return this.getStringAttribute('duo_secret_key');
  }
  public set duoSecretKey(value: string) {
    this._duoSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get duoSecretKeyInput() {
    return this._duoSecretKey;
  }

  // duo_timeout - computed: true, optional: false, required: true
  private _duoTimeout?: number; 
  public get duoTimeout() {
    return this.getNumberAttribute('duo_timeout');
  }
  public set duoTimeout(value: number) {
    this._duoTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get duoTimeoutInput() {
    return this._duoTimeout;
  }
}
export interface MfaServerMfaVendorTypeOktaAdaptiveV1 {
  /**
  * Okta API hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#okta_api_host MfaServer#okta_api_host}
  */
  readonly oktaApiHost: string;
  /**
  * Okta baseuri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#okta_baseuri MfaServer#okta_baseuri}
  */
  readonly oktaBaseuri: string;
  /**
  * Okta organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#okta_org MfaServer#okta_org}
  */
  readonly oktaOrg: string;
  /**
  * Okta timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#okta_timeout MfaServer#okta_timeout}
  */
  readonly oktaTimeout: number;
  /**
  * Okta API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#okta_token MfaServer#okta_token}
  */
  readonly oktaToken: string;
}

export function mfaServerMfaVendorTypeOktaAdaptiveV1ToTerraform(struct?: MfaServerMfaVendorTypeOktaAdaptiveV1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    okta_api_host: cdktf.stringToTerraform(struct!.oktaApiHost),
    okta_baseuri: cdktf.stringToTerraform(struct!.oktaBaseuri),
    okta_org: cdktf.stringToTerraform(struct!.oktaOrg),
    okta_timeout: cdktf.numberToTerraform(struct!.oktaTimeout),
    okta_token: cdktf.stringToTerraform(struct!.oktaToken),
  }
}


export function mfaServerMfaVendorTypeOktaAdaptiveV1ToHclTerraform(struct?: MfaServerMfaVendorTypeOktaAdaptiveV1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    okta_api_host: {
      value: cdktf.stringToHclTerraform(struct!.oktaApiHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    okta_baseuri: {
      value: cdktf.stringToHclTerraform(struct!.oktaBaseuri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    okta_org: {
      value: cdktf.stringToHclTerraform(struct!.oktaOrg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    okta_timeout: {
      value: cdktf.numberToHclTerraform(struct!.oktaTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    okta_token: {
      value: cdktf.stringToHclTerraform(struct!.oktaToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaServerMfaVendorTypeOktaAdaptiveV1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaServerMfaVendorTypeOktaAdaptiveV1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oktaApiHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaApiHost = this._oktaApiHost;
    }
    if (this._oktaBaseuri !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaBaseuri = this._oktaBaseuri;
    }
    if (this._oktaOrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaOrg = this._oktaOrg;
    }
    if (this._oktaTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaTimeout = this._oktaTimeout;
    }
    if (this._oktaToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaToken = this._oktaToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaServerMfaVendorTypeOktaAdaptiveV1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oktaApiHost = undefined;
      this._oktaBaseuri = undefined;
      this._oktaOrg = undefined;
      this._oktaTimeout = undefined;
      this._oktaToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oktaApiHost = value.oktaApiHost;
      this._oktaBaseuri = value.oktaBaseuri;
      this._oktaOrg = value.oktaOrg;
      this._oktaTimeout = value.oktaTimeout;
      this._oktaToken = value.oktaToken;
    }
  }

  // okta_api_host - computed: true, optional: false, required: true
  private _oktaApiHost?: string; 
  public get oktaApiHost() {
    return this.getStringAttribute('okta_api_host');
  }
  public set oktaApiHost(value: string) {
    this._oktaApiHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaApiHostInput() {
    return this._oktaApiHost;
  }

  // okta_baseuri - computed: true, optional: false, required: true
  private _oktaBaseuri?: string; 
  public get oktaBaseuri() {
    return this.getStringAttribute('okta_baseuri');
  }
  public set oktaBaseuri(value: string) {
    this._oktaBaseuri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaBaseuriInput() {
    return this._oktaBaseuri;
  }

  // okta_org - computed: true, optional: false, required: true
  private _oktaOrg?: string; 
  public get oktaOrg() {
    return this.getStringAttribute('okta_org');
  }
  public set oktaOrg(value: string) {
    this._oktaOrg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaOrgInput() {
    return this._oktaOrg;
  }

  // okta_timeout - computed: true, optional: false, required: true
  private _oktaTimeout?: number; 
  public get oktaTimeout() {
    return this.getNumberAttribute('okta_timeout');
  }
  public set oktaTimeout(value: number) {
    this._oktaTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaTimeoutInput() {
    return this._oktaTimeout;
  }

  // okta_token - computed: true, optional: false, required: true
  private _oktaToken?: string; 
  public get oktaToken() {
    return this.getStringAttribute('okta_token');
  }
  public set oktaToken(value: string) {
    this._oktaToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaTokenInput() {
    return this._oktaToken;
  }
}
export interface MfaServerMfaVendorTypePingIdentityV1 {
  /**
  * Ping Identity API hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#ping_api_host MfaServer#ping_api_host}
  */
  readonly pingApiHost: string;
  /**
  * Ping Identity API base URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#ping_baseuri MfaServer#ping_baseuri}
  */
  readonly pingBaseuri: string;
  /**
  * Ping Identity client organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#ping_org_alias MfaServer#ping_org_alias}
  */
  readonly pingOrgAlias?: string;
  /**
  * Ping Identity timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#ping_timeout MfaServer#ping_timeout}
  */
  readonly pingTimeout: number;
  /**
  * Ping Identity API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#ping_token MfaServer#ping_token}
  */
  readonly pingToken: string;
  /**
  * Ping Identity Base64 key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#ping_use_base64_key MfaServer#ping_use_base64_key}
  */
  readonly pingUseBase64Key: string;
}

export function mfaServerMfaVendorTypePingIdentityV1ToTerraform(struct?: MfaServerMfaVendorTypePingIdentityV1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ping_api_host: cdktf.stringToTerraform(struct!.pingApiHost),
    ping_baseuri: cdktf.stringToTerraform(struct!.pingBaseuri),
    ping_org_alias: cdktf.stringToTerraform(struct!.pingOrgAlias),
    ping_timeout: cdktf.numberToTerraform(struct!.pingTimeout),
    ping_token: cdktf.stringToTerraform(struct!.pingToken),
    ping_use_base64_key: cdktf.stringToTerraform(struct!.pingUseBase64Key),
  }
}


export function mfaServerMfaVendorTypePingIdentityV1ToHclTerraform(struct?: MfaServerMfaVendorTypePingIdentityV1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ping_api_host: {
      value: cdktf.stringToHclTerraform(struct!.pingApiHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_baseuri: {
      value: cdktf.stringToHclTerraform(struct!.pingBaseuri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_org_alias: {
      value: cdktf.stringToHclTerraform(struct!.pingOrgAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ping_token: {
      value: cdktf.stringToHclTerraform(struct!.pingToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_use_base64_key: {
      value: cdktf.stringToHclTerraform(struct!.pingUseBase64Key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaServerMfaVendorTypePingIdentityV1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaServerMfaVendorTypePingIdentityV1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pingApiHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingApiHost = this._pingApiHost;
    }
    if (this._pingBaseuri !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingBaseuri = this._pingBaseuri;
    }
    if (this._pingOrgAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingOrgAlias = this._pingOrgAlias;
    }
    if (this._pingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingTimeout = this._pingTimeout;
    }
    if (this._pingToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingToken = this._pingToken;
    }
    if (this._pingUseBase64Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingUseBase64Key = this._pingUseBase64Key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaServerMfaVendorTypePingIdentityV1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pingApiHost = undefined;
      this._pingBaseuri = undefined;
      this._pingOrgAlias = undefined;
      this._pingTimeout = undefined;
      this._pingToken = undefined;
      this._pingUseBase64Key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pingApiHost = value.pingApiHost;
      this._pingBaseuri = value.pingBaseuri;
      this._pingOrgAlias = value.pingOrgAlias;
      this._pingTimeout = value.pingTimeout;
      this._pingToken = value.pingToken;
      this._pingUseBase64Key = value.pingUseBase64Key;
    }
  }

  // ping_api_host - computed: true, optional: false, required: true
  private _pingApiHost?: string; 
  public get pingApiHost() {
    return this.getStringAttribute('ping_api_host');
  }
  public set pingApiHost(value: string) {
    this._pingApiHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pingApiHostInput() {
    return this._pingApiHost;
  }

  // ping_baseuri - computed: true, optional: false, required: true
  private _pingBaseuri?: string; 
  public get pingBaseuri() {
    return this.getStringAttribute('ping_baseuri');
  }
  public set pingBaseuri(value: string) {
    this._pingBaseuri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pingBaseuriInput() {
    return this._pingBaseuri;
  }

  // ping_org_alias - computed: true, optional: true, required: false
  private _pingOrgAlias?: string; 
  public get pingOrgAlias() {
    return this.getStringAttribute('ping_org_alias');
  }
  public set pingOrgAlias(value: string) {
    this._pingOrgAlias = value;
  }
  public resetPingOrgAlias() {
    this._pingOrgAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingOrgAliasInput() {
    return this._pingOrgAlias;
  }

  // ping_timeout - computed: true, optional: false, required: true
  private _pingTimeout?: number; 
  public get pingTimeout() {
    return this.getNumberAttribute('ping_timeout');
  }
  public set pingTimeout(value: number) {
    this._pingTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pingTimeoutInput() {
    return this._pingTimeout;
  }

  // ping_token - computed: true, optional: false, required: true
  private _pingToken?: string; 
  public get pingToken() {
    return this.getStringAttribute('ping_token');
  }
  public set pingToken(value: string) {
    this._pingToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pingTokenInput() {
    return this._pingToken;
  }

  // ping_use_base64_key - computed: true, optional: false, required: true
  private _pingUseBase64Key?: string; 
  public get pingUseBase64Key() {
    return this.getStringAttribute('ping_use_base64_key');
  }
  public set pingUseBase64Key(value: string) {
    this._pingUseBase64Key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pingUseBase64KeyInput() {
    return this._pingUseBase64Key;
  }
}
export interface MfaServerMfaVendorTypeRsaSecuridAccessV1 {
  /**
  * RSA SecurID access ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#rsa_accessid MfaServer#rsa_accessid}
  */
  readonly rsaAccessid?: string;
  /**
  * RSA SecurID access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#rsa_accesskey MfaServer#rsa_accesskey}
  */
  readonly rsaAccesskey?: string;
  /**
  * RSA SecurID hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#rsa_api_host MfaServer#rsa_api_host}
  */
  readonly rsaApiHost?: string;
  /**
  * RSA SecurID assurance level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#rsa_assurancepolicyid MfaServer#rsa_assurancepolicyid}
  */
  readonly rsaAssurancepolicyid?: string;
  /**
  * RSA SecurID API base URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#rsa_baseuri MfaServer#rsa_baseuri}
  */
  readonly rsaBaseuri?: string;
  /**
  * RSA SecurID timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#rsa_timeout MfaServer#rsa_timeout}
  */
  readonly rsaTimeout?: number;
}

export function mfaServerMfaVendorTypeRsaSecuridAccessV1ToTerraform(struct?: MfaServerMfaVendorTypeRsaSecuridAccessV1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rsa_accessid: cdktf.stringToTerraform(struct!.rsaAccessid),
    rsa_accesskey: cdktf.stringToTerraform(struct!.rsaAccesskey),
    rsa_api_host: cdktf.stringToTerraform(struct!.rsaApiHost),
    rsa_assurancepolicyid: cdktf.stringToTerraform(struct!.rsaAssurancepolicyid),
    rsa_baseuri: cdktf.stringToTerraform(struct!.rsaBaseuri),
    rsa_timeout: cdktf.numberToTerraform(struct!.rsaTimeout),
  }
}


export function mfaServerMfaVendorTypeRsaSecuridAccessV1ToHclTerraform(struct?: MfaServerMfaVendorTypeRsaSecuridAccessV1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rsa_accessid: {
      value: cdktf.stringToHclTerraform(struct!.rsaAccessid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_accesskey: {
      value: cdktf.stringToHclTerraform(struct!.rsaAccesskey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_api_host: {
      value: cdktf.stringToHclTerraform(struct!.rsaApiHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_assurancepolicyid: {
      value: cdktf.stringToHclTerraform(struct!.rsaAssurancepolicyid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_baseuri: {
      value: cdktf.stringToHclTerraform(struct!.rsaBaseuri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_timeout: {
      value: cdktf.numberToHclTerraform(struct!.rsaTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaServerMfaVendorTypeRsaSecuridAccessV1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaServerMfaVendorTypeRsaSecuridAccessV1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rsaAccessid !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaAccessid = this._rsaAccessid;
    }
    if (this._rsaAccesskey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaAccesskey = this._rsaAccesskey;
    }
    if (this._rsaApiHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaApiHost = this._rsaApiHost;
    }
    if (this._rsaAssurancepolicyid !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaAssurancepolicyid = this._rsaAssurancepolicyid;
    }
    if (this._rsaBaseuri !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaBaseuri = this._rsaBaseuri;
    }
    if (this._rsaTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaTimeout = this._rsaTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaServerMfaVendorTypeRsaSecuridAccessV1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rsaAccessid = undefined;
      this._rsaAccesskey = undefined;
      this._rsaApiHost = undefined;
      this._rsaAssurancepolicyid = undefined;
      this._rsaBaseuri = undefined;
      this._rsaTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rsaAccessid = value.rsaAccessid;
      this._rsaAccesskey = value.rsaAccesskey;
      this._rsaApiHost = value.rsaApiHost;
      this._rsaAssurancepolicyid = value.rsaAssurancepolicyid;
      this._rsaBaseuri = value.rsaBaseuri;
      this._rsaTimeout = value.rsaTimeout;
    }
  }

  // rsa_accessid - computed: true, optional: true, required: false
  private _rsaAccessid?: string; 
  public get rsaAccessid() {
    return this.getStringAttribute('rsa_accessid');
  }
  public set rsaAccessid(value: string) {
    this._rsaAccessid = value;
  }
  public resetRsaAccessid() {
    this._rsaAccessid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAccessidInput() {
    return this._rsaAccessid;
  }

  // rsa_accesskey - computed: true, optional: true, required: false
  private _rsaAccesskey?: string; 
  public get rsaAccesskey() {
    return this.getStringAttribute('rsa_accesskey');
  }
  public set rsaAccesskey(value: string) {
    this._rsaAccesskey = value;
  }
  public resetRsaAccesskey() {
    this._rsaAccesskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAccesskeyInput() {
    return this._rsaAccesskey;
  }

  // rsa_api_host - computed: true, optional: true, required: false
  private _rsaApiHost?: string; 
  public get rsaApiHost() {
    return this.getStringAttribute('rsa_api_host');
  }
  public set rsaApiHost(value: string) {
    this._rsaApiHost = value;
  }
  public resetRsaApiHost() {
    this._rsaApiHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaApiHostInput() {
    return this._rsaApiHost;
  }

  // rsa_assurancepolicyid - computed: true, optional: true, required: false
  private _rsaAssurancepolicyid?: string; 
  public get rsaAssurancepolicyid() {
    return this.getStringAttribute('rsa_assurancepolicyid');
  }
  public set rsaAssurancepolicyid(value: string) {
    this._rsaAssurancepolicyid = value;
  }
  public resetRsaAssurancepolicyid() {
    this._rsaAssurancepolicyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAssurancepolicyidInput() {
    return this._rsaAssurancepolicyid;
  }

  // rsa_baseuri - computed: true, optional: true, required: false
  private _rsaBaseuri?: string; 
  public get rsaBaseuri() {
    return this.getStringAttribute('rsa_baseuri');
  }
  public set rsaBaseuri(value: string) {
    this._rsaBaseuri = value;
  }
  public resetRsaBaseuri() {
    this._rsaBaseuri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaBaseuriInput() {
    return this._rsaBaseuri;
  }

  // rsa_timeout - computed: true, optional: true, required: false
  private _rsaTimeout?: number; 
  public get rsaTimeout() {
    return this.getNumberAttribute('rsa_timeout');
  }
  public set rsaTimeout(value: number) {
    this._rsaTimeout = value;
  }
  public resetRsaTimeout() {
    this._rsaTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaTimeoutInput() {
    return this._rsaTimeout;
  }
}
export interface MfaServerMfaVendorType {
  /**
  * Integration with [Duo Security](https://duo.com/product)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#duo_security_v2 MfaServer#duo_security_v2}
  */
  readonly duoSecurityV2?: MfaServerMfaVendorTypeDuoSecurityV2;
  /**
  * Integration with [Okta Adaptive MFA](https://www.okta.com/products/adaptive-multi-factor-authentication)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#okta_adaptive_v1 MfaServer#okta_adaptive_v1}
  */
  readonly oktaAdaptiveV1?: MfaServerMfaVendorTypeOktaAdaptiveV1;
  /**
  * Integation with [Ping Identity](https://www.pingidentity.com/en/platform.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#ping_identity_v1 MfaServer#ping_identity_v1}
  */
  readonly pingIdentityV1?: MfaServerMfaVendorTypePingIdentityV1;
  /**
  * Integration with [RSA SecurID](https://www.rsa.com/products/securid/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#rsa_securid_access_v1 MfaServer#rsa_securid_access_v1}
  */
  readonly rsaSecuridAccessV1?: MfaServerMfaVendorTypeRsaSecuridAccessV1;
}

export function mfaServerMfaVendorTypeToTerraform(struct?: MfaServerMfaVendorType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duo_security_v2: mfaServerMfaVendorTypeDuoSecurityV2ToTerraform(struct!.duoSecurityV2),
    okta_adaptive_v1: mfaServerMfaVendorTypeOktaAdaptiveV1ToTerraform(struct!.oktaAdaptiveV1),
    ping_identity_v1: mfaServerMfaVendorTypePingIdentityV1ToTerraform(struct!.pingIdentityV1),
    rsa_securid_access_v1: mfaServerMfaVendorTypeRsaSecuridAccessV1ToTerraform(struct!.rsaSecuridAccessV1),
  }
}


export function mfaServerMfaVendorTypeToHclTerraform(struct?: MfaServerMfaVendorType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duo_security_v2: {
      value: mfaServerMfaVendorTypeDuoSecurityV2ToHclTerraform(struct!.duoSecurityV2),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaServerMfaVendorTypeDuoSecurityV2",
    },
    okta_adaptive_v1: {
      value: mfaServerMfaVendorTypeOktaAdaptiveV1ToHclTerraform(struct!.oktaAdaptiveV1),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaServerMfaVendorTypeOktaAdaptiveV1",
    },
    ping_identity_v1: {
      value: mfaServerMfaVendorTypePingIdentityV1ToHclTerraform(struct!.pingIdentityV1),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaServerMfaVendorTypePingIdentityV1",
    },
    rsa_securid_access_v1: {
      value: mfaServerMfaVendorTypeRsaSecuridAccessV1ToHclTerraform(struct!.rsaSecuridAccessV1),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaServerMfaVendorTypeRsaSecuridAccessV1",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaServerMfaVendorTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaServerMfaVendorType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duoSecurityV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoSecurityV2 = this._duoSecurityV2?.internalValue;
    }
    if (this._oktaAdaptiveV1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaAdaptiveV1 = this._oktaAdaptiveV1?.internalValue;
    }
    if (this._pingIdentityV1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingIdentityV1 = this._pingIdentityV1?.internalValue;
    }
    if (this._rsaSecuridAccessV1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaSecuridAccessV1 = this._rsaSecuridAccessV1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaServerMfaVendorType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duoSecurityV2.internalValue = undefined;
      this._oktaAdaptiveV1.internalValue = undefined;
      this._pingIdentityV1.internalValue = undefined;
      this._rsaSecuridAccessV1.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duoSecurityV2.internalValue = value.duoSecurityV2;
      this._oktaAdaptiveV1.internalValue = value.oktaAdaptiveV1;
      this._pingIdentityV1.internalValue = value.pingIdentityV1;
      this._rsaSecuridAccessV1.internalValue = value.rsaSecuridAccessV1;
    }
  }

  // duo_security_v2 - computed: true, optional: true, required: false
  private _duoSecurityV2 = new MfaServerMfaVendorTypeDuoSecurityV2OutputReference(this, "duo_security_v2");
  public get duoSecurityV2() {
    return this._duoSecurityV2;
  }
  public putDuoSecurityV2(value: MfaServerMfaVendorTypeDuoSecurityV2) {
    this._duoSecurityV2.internalValue = value;
  }
  public resetDuoSecurityV2() {
    this._duoSecurityV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoSecurityV2Input() {
    return this._duoSecurityV2.internalValue;
  }

  // okta_adaptive_v1 - computed: true, optional: true, required: false
  private _oktaAdaptiveV1 = new MfaServerMfaVendorTypeOktaAdaptiveV1OutputReference(this, "okta_adaptive_v1");
  public get oktaAdaptiveV1() {
    return this._oktaAdaptiveV1;
  }
  public putOktaAdaptiveV1(value: MfaServerMfaVendorTypeOktaAdaptiveV1) {
    this._oktaAdaptiveV1.internalValue = value;
  }
  public resetOktaAdaptiveV1() {
    this._oktaAdaptiveV1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaAdaptiveV1Input() {
    return this._oktaAdaptiveV1.internalValue;
  }

  // ping_identity_v1 - computed: true, optional: true, required: false
  private _pingIdentityV1 = new MfaServerMfaVendorTypePingIdentityV1OutputReference(this, "ping_identity_v1");
  public get pingIdentityV1() {
    return this._pingIdentityV1;
  }
  public putPingIdentityV1(value: MfaServerMfaVendorTypePingIdentityV1) {
    this._pingIdentityV1.internalValue = value;
  }
  public resetPingIdentityV1() {
    this._pingIdentityV1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingIdentityV1Input() {
    return this._pingIdentityV1.internalValue;
  }

  // rsa_securid_access_v1 - computed: true, optional: true, required: false
  private _rsaSecuridAccessV1 = new MfaServerMfaVendorTypeRsaSecuridAccessV1OutputReference(this, "rsa_securid_access_v1");
  public get rsaSecuridAccessV1() {
    return this._rsaSecuridAccessV1;
  }
  public putRsaSecuridAccessV1(value: MfaServerMfaVendorTypeRsaSecuridAccessV1) {
    this._rsaSecuridAccessV1.internalValue = value;
  }
  public resetRsaSecuridAccessV1() {
    this._rsaSecuridAccessV1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaSecuridAccessV1Input() {
    return this._rsaSecuridAccessV1.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server scm_mfa_server}
*/
export class MfaServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_mfa_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MfaServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MfaServer to import
  * @param importFromId The id of the existing MfaServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MfaServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_mfa_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/mfa_server scm_mfa_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MfaServerConfig
  */
  public constructor(scope: Construct, id: string, config: MfaServerConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_mfa_server',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._mfaCertProfile = config.mfaCertProfile;
    this._mfaVendorType.internalValue = config.mfaVendorType;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // encrypted_values - computed: true, optional: false, required: false
  private _encryptedValues = new cdktf.StringMap(this, "encrypted_values");
  public get encryptedValues() {
    return this._encryptedValues;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mfa_cert_profile - computed: false, optional: false, required: true
  private _mfaCertProfile?: string; 
  public get mfaCertProfile() {
    return this.getStringAttribute('mfa_cert_profile');
  }
  public set mfaCertProfile(value: string) {
    this._mfaCertProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaCertProfileInput() {
    return this._mfaCertProfile;
  }

  // mfa_vendor_type - computed: true, optional: true, required: false
  private _mfaVendorType = new MfaServerMfaVendorTypeOutputReference(this, "mfa_vendor_type");
  public get mfaVendorType() {
    return this._mfaVendorType;
  }
  public putMfaVendorType(value: MfaServerMfaVendorType) {
    this._mfaVendorType.internalValue = value;
  }
  public resetMfaVendorType() {
    this._mfaVendorType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaVendorTypeInput() {
    return this._mfaVendorType.internalValue;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      mfa_cert_profile: cdktf.stringToTerraform(this._mfaCertProfile),
      mfa_vendor_type: mfaServerMfaVendorTypeToTerraform(this._mfaVendorType.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_cert_profile: {
        value: cdktf.stringToHclTerraform(this._mfaCertProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_vendor_type: {
        value: mfaServerMfaVendorTypeToHclTerraform(this._mfaVendorType.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaServerMfaVendorType",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
