// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationAuthStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Response payload from creating or updating a Key Auth Application Auth Strategy. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#key_auth ApplicationAuthStrategy#key_auth}
  */
  readonly keyAuth?: ApplicationAuthStrategyKeyAuth;
  /**
  * Response payload from creating an OIDC Application Auth Strategy. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#openid_connect ApplicationAuthStrategy#openid_connect}
  */
  readonly openidConnect?: ApplicationAuthStrategyOpenidConnect;
}
export interface ApplicationAuthStrategyKeyAuthConfigsKeyAuth {
  /**
  * The names of the headers containing the API key. You can specify multiple header names. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#key_names ApplicationAuthStrategy#key_names}
  */
  readonly keyNames?: string[];
}

export function applicationAuthStrategyKeyAuthConfigsKeyAuthToTerraform(struct?: ApplicationAuthStrategyKeyAuthConfigsKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyNames),
  }
}


export function applicationAuthStrategyKeyAuthConfigsKeyAuthToHclTerraform(struct?: ApplicationAuthStrategyKeyAuthConfigsKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAuthStrategyKeyAuthConfigsKeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAuthStrategyKeyAuthConfigsKeyAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNames = this._keyNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAuthStrategyKeyAuthConfigsKeyAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyNames = value.keyNames;
    }
  }

  // key_names - computed: true, optional: true, required: false
  private _keyNames?: string[]; 
  public get keyNames() {
    return this.getListAttribute('key_names');
  }
  public set keyNames(value: string[]) {
    this._keyNames = value;
  }
  public resetKeyNames() {
    this._keyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNamesInput() {
    return this._keyNames;
  }
}
export interface ApplicationAuthStrategyKeyAuthConfigs {
  /**
  * The most basic mode to configure an Application Auth Strategy for an API Product Version. 
  * Using this mode will allow developers to generate API keys that will authenticate their application requests. 
  * Once authenticated, an application will be granted access to any Product Version it is registered for that is configured for Key Auth.
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#key_auth ApplicationAuthStrategy#key_auth}
  */
  readonly keyAuth?: ApplicationAuthStrategyKeyAuthConfigsKeyAuth;
}

export function applicationAuthStrategyKeyAuthConfigsToTerraform(struct?: ApplicationAuthStrategyKeyAuthConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_auth: applicationAuthStrategyKeyAuthConfigsKeyAuthToTerraform(struct!.keyAuth),
  }
}


export function applicationAuthStrategyKeyAuthConfigsToHclTerraform(struct?: ApplicationAuthStrategyKeyAuthConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_auth: {
      value: applicationAuthStrategyKeyAuthConfigsKeyAuthToHclTerraform(struct!.keyAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationAuthStrategyKeyAuthConfigsKeyAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAuthStrategyKeyAuthConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAuthStrategyKeyAuthConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAuth = this._keyAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAuthStrategyKeyAuthConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyAuth.internalValue = value.keyAuth;
    }
  }

  // key_auth - computed: true, optional: true, required: false
  private _keyAuth = new ApplicationAuthStrategyKeyAuthConfigsKeyAuthOutputReference(this, "key_auth");
  public get keyAuth() {
    return this._keyAuth;
  }
  public putKeyAuth(value: ApplicationAuthStrategyKeyAuthConfigsKeyAuth) {
    this._keyAuth.internalValue = value;
  }
  public resetKeyAuth() {
    this._keyAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAuthInput() {
    return this._keyAuth.internalValue;
  }
}
export interface ApplicationAuthStrategyKeyAuthDcrProvider {
}

export function applicationAuthStrategyKeyAuthDcrProviderToTerraform(struct?: ApplicationAuthStrategyKeyAuthDcrProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationAuthStrategyKeyAuthDcrProviderToHclTerraform(struct?: ApplicationAuthStrategyKeyAuthDcrProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationAuthStrategyKeyAuthDcrProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAuthStrategyKeyAuthDcrProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAuthStrategyKeyAuthDcrProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_type - computed: true, optional: false, required: false
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
}
export interface ApplicationAuthStrategyKeyAuth {
  /**
  * JSON-B object containing the configuration for the Key Auth strategy. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#configs ApplicationAuthStrategy#configs}
  */
  readonly configs?: ApplicationAuthStrategyKeyAuthConfigs;
  /**
  * The display name of the Auth strategy. This is used to identify the Auth strategy in the Portal UI. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#display_name ApplicationAuthStrategy#display_name}
  */
  readonly displayName?: string;
  /**
  * Labels store metadata of an entity that can be used for filtering an entity list or for searching across entity types. 
  * 
  * Keys must be of length 1-63 characters, and cannot start with "kong", "konnect", "mesh", "kic", or "_".
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#labels ApplicationAuthStrategy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the auth strategy. This is used to identify the auth strategy in the Konnect UI. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#name ApplicationAuthStrategy#name}
  */
  readonly name?: string;
  /**
  * Not Null; must be "key_auth"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#strategy_type ApplicationAuthStrategy#strategy_type}
  */
  readonly strategyType?: string;
}

export function applicationAuthStrategyKeyAuthToTerraform(struct?: ApplicationAuthStrategyKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configs: applicationAuthStrategyKeyAuthConfigsToTerraform(struct!.configs),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    strategy_type: cdktf.stringToTerraform(struct!.strategyType),
  }
}


export function applicationAuthStrategyKeyAuthToHclTerraform(struct?: ApplicationAuthStrategyKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configs: {
      value: applicationAuthStrategyKeyAuthConfigsToHclTerraform(struct!.configs),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationAuthStrategyKeyAuthConfigs",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_type: {
      value: cdktf.stringToHclTerraform(struct!.strategyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAuthStrategyKeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAuthStrategyKeyAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._strategyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyType = this._strategyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAuthStrategyKeyAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configs.internalValue = undefined;
      this._displayName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._strategyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configs.internalValue = value.configs;
      this._displayName = value.displayName;
      this._labels = value.labels;
      this._name = value.name;
      this._strategyType = value.strategyType;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // configs - computed: true, optional: true, required: false
  private _configs = new ApplicationAuthStrategyKeyAuthConfigsOutputReference(this, "configs");
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: ApplicationAuthStrategyKeyAuthConfigs) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dcr_provider - computed: true, optional: false, required: false
  private _dcrProvider = new ApplicationAuthStrategyKeyAuthDcrProviderOutputReference(this, "dcr_provider");
  public get dcrProvider() {
    return this._dcrProvider;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // strategy_type - computed: true, optional: true, required: false
  private _strategyType?: string; 
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
  public set strategyType(value: string) {
    this._strategyType = value;
  }
  public resetStrategyType() {
    this._strategyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface ApplicationAuthStrategyOpenidConnectConfigsOpenidConnect {
  /**
  * Requires replacement if changed.; Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#additional_properties ApplicationAuthStrategy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#auth_methods ApplicationAuthStrategy#auth_methods}
  */
  readonly authMethods?: string[];
  /**
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#credential_claim ApplicationAuthStrategy#credential_claim}
  */
  readonly credentialClaim?: string[];
  /**
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#issuer ApplicationAuthStrategy#issuer}
  */
  readonly issuer?: string;
  /**
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#scopes ApplicationAuthStrategy#scopes}
  */
  readonly scopes?: string[];
}

export function applicationAuthStrategyOpenidConnectConfigsOpenidConnectToTerraform(struct?: ApplicationAuthStrategyOpenidConnectConfigsOpenidConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    auth_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authMethods),
    credential_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.credentialClaim),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function applicationAuthStrategyOpenidConnectConfigsOpenidConnectToHclTerraform(struct?: ApplicationAuthStrategyOpenidConnectConfigsOpenidConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    credential_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.credentialClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAuthStrategyOpenidConnectConfigsOpenidConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAuthStrategyOpenidConnectConfigsOpenidConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._authMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethods = this._authMethods;
    }
    if (this._credentialClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialClaim = this._credentialClaim;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAuthStrategyOpenidConnectConfigsOpenidConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._authMethods = undefined;
      this._credentialClaim = undefined;
      this._issuer = undefined;
      this._scopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._authMethods = value.authMethods;
      this._credentialClaim = value.credentialClaim;
      this._issuer = value.issuer;
      this._scopes = value.scopes;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // auth_methods - computed: true, optional: true, required: false
  private _authMethods?: string[]; 
  public get authMethods() {
    return this.getListAttribute('auth_methods');
  }
  public set authMethods(value: string[]) {
    this._authMethods = value;
  }
  public resetAuthMethods() {
    this._authMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodsInput() {
    return this._authMethods;
  }

  // credential_claim - computed: true, optional: true, required: false
  private _credentialClaim?: string[]; 
  public get credentialClaim() {
    return this.getListAttribute('credential_claim');
  }
  public set credentialClaim(value: string[]) {
    this._credentialClaim = value;
  }
  public resetCredentialClaim() {
    this._credentialClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialClaimInput() {
    return this._credentialClaim;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface ApplicationAuthStrategyOpenidConnectConfigs {
  /**
  * A more advanced mode to configure an API Product Version’s Application Auth Strategy. 
  * Using this mode will allow developers to use API credentials issued from an external IdP that will authenticate their application requests. 
  * Once authenticated, an application will be granted access to any Product Version it is registered for that is configured for the same Auth Strategy. 
  * An OIDC strategy may be used in conjunction with a DCR provider to automatically create the IdP application.
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#openid_connect ApplicationAuthStrategy#openid_connect}
  */
  readonly openidConnect?: ApplicationAuthStrategyOpenidConnectConfigsOpenidConnect;
}

export function applicationAuthStrategyOpenidConnectConfigsToTerraform(struct?: ApplicationAuthStrategyOpenidConnectConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    openid_connect: applicationAuthStrategyOpenidConnectConfigsOpenidConnectToTerraform(struct!.openidConnect),
  }
}


export function applicationAuthStrategyOpenidConnectConfigsToHclTerraform(struct?: ApplicationAuthStrategyOpenidConnectConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    openid_connect: {
      value: applicationAuthStrategyOpenidConnectConfigsOpenidConnectToHclTerraform(struct!.openidConnect),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationAuthStrategyOpenidConnectConfigsOpenidConnect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAuthStrategyOpenidConnectConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAuthStrategyOpenidConnectConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openidConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openidConnect = this._openidConnect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAuthStrategyOpenidConnectConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._openidConnect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._openidConnect.internalValue = value.openidConnect;
    }
  }

  // openid_connect - computed: true, optional: true, required: false
  private _openidConnect = new ApplicationAuthStrategyOpenidConnectConfigsOpenidConnectOutputReference(this, "openid_connect");
  public get openidConnect() {
    return this._openidConnect;
  }
  public putOpenidConnect(value: ApplicationAuthStrategyOpenidConnectConfigsOpenidConnect) {
    this._openidConnect.internalValue = value;
  }
  public resetOpenidConnect() {
    this._openidConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectInput() {
    return this._openidConnect.internalValue;
  }
}
export interface ApplicationAuthStrategyOpenidConnectDcrProvider {
}

export function applicationAuthStrategyOpenidConnectDcrProviderToTerraform(struct?: ApplicationAuthStrategyOpenidConnectDcrProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationAuthStrategyOpenidConnectDcrProviderToHclTerraform(struct?: ApplicationAuthStrategyOpenidConnectDcrProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationAuthStrategyOpenidConnectDcrProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAuthStrategyOpenidConnectDcrProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAuthStrategyOpenidConnectDcrProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_type - computed: true, optional: false, required: false
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
}
export interface ApplicationAuthStrategyOpenidConnect {
  /**
  * JSON-B object containing the configuration for the OIDC strategy. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#configs ApplicationAuthStrategy#configs}
  */
  readonly configs?: ApplicationAuthStrategyOpenidConnectConfigs;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#dcr_provider_id ApplicationAuthStrategy#dcr_provider_id}
  */
  readonly dcrProviderId?: string;
  /**
  * The display name of the Auth strategy. This is used to identify the Auth strategy in the Portal UI. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#display_name ApplicationAuthStrategy#display_name}
  */
  readonly displayName?: string;
  /**
  * Labels store metadata of an entity that can be used for filtering an entity list or for searching across entity types. 
  * 
  * Keys must be of length 1-63 characters, and cannot start with "kong", "konnect", "mesh", "kic", or "_".
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#labels ApplicationAuthStrategy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the auth strategy. This is used to identify the auth strategy in the Konnect UI. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#name ApplicationAuthStrategy#name}
  */
  readonly name?: string;
  /**
  * Not Null; must be "openid_connect"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#strategy_type ApplicationAuthStrategy#strategy_type}
  */
  readonly strategyType?: string;
}

export function applicationAuthStrategyOpenidConnectToTerraform(struct?: ApplicationAuthStrategyOpenidConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configs: applicationAuthStrategyOpenidConnectConfigsToTerraform(struct!.configs),
    dcr_provider_id: cdktf.stringToTerraform(struct!.dcrProviderId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    strategy_type: cdktf.stringToTerraform(struct!.strategyType),
  }
}


export function applicationAuthStrategyOpenidConnectToHclTerraform(struct?: ApplicationAuthStrategyOpenidConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configs: {
      value: applicationAuthStrategyOpenidConnectConfigsToHclTerraform(struct!.configs),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationAuthStrategyOpenidConnectConfigs",
    },
    dcr_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.dcrProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_type: {
      value: cdktf.stringToHclTerraform(struct!.strategyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAuthStrategyOpenidConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAuthStrategyOpenidConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    if (this._dcrProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrProviderId = this._dcrProviderId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._strategyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyType = this._strategyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAuthStrategyOpenidConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configs.internalValue = undefined;
      this._dcrProviderId = undefined;
      this._displayName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._strategyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configs.internalValue = value.configs;
      this._dcrProviderId = value.dcrProviderId;
      this._displayName = value.displayName;
      this._labels = value.labels;
      this._name = value.name;
      this._strategyType = value.strategyType;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // configs - computed: true, optional: true, required: false
  private _configs = new ApplicationAuthStrategyOpenidConnectConfigsOutputReference(this, "configs");
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: ApplicationAuthStrategyOpenidConnectConfigs) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dcr_provider - computed: true, optional: false, required: false
  private _dcrProvider = new ApplicationAuthStrategyOpenidConnectDcrProviderOutputReference(this, "dcr_provider");
  public get dcrProvider() {
    return this._dcrProvider;
  }

  // dcr_provider_id - computed: false, optional: true, required: false
  private _dcrProviderId?: string; 
  public get dcrProviderId() {
    return this.getStringAttribute('dcr_provider_id');
  }
  public set dcrProviderId(value: string) {
    this._dcrProviderId = value;
  }
  public resetDcrProviderId() {
    this._dcrProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrProviderIdInput() {
    return this._dcrProviderId;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // strategy_type - computed: true, optional: true, required: false
  private _strategyType?: string; 
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
  public set strategyType(value: string) {
    this._strategyType = value;
  }
  public resetStrategyType() {
    this._strategyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy konnect_application_auth_strategy}
*/
export class ApplicationAuthStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_application_auth_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationAuthStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationAuthStrategy to import
  * @param importFromId The id of the existing ApplicationAuthStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationAuthStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_application_auth_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/application_auth_strategy konnect_application_auth_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationAuthStrategyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationAuthStrategyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'konnect_application_auth_strategy',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._keyAuth.internalValue = config.keyAuth;
    this._openidConnect.internalValue = config.openidConnect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_auth - computed: false, optional: true, required: false
  private _keyAuth = new ApplicationAuthStrategyKeyAuthOutputReference(this, "key_auth");
  public get keyAuth() {
    return this._keyAuth;
  }
  public putKeyAuth(value: ApplicationAuthStrategyKeyAuth) {
    this._keyAuth.internalValue = value;
  }
  public resetKeyAuth() {
    this._keyAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAuthInput() {
    return this._keyAuth.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // openid_connect - computed: false, optional: true, required: false
  private _openidConnect = new ApplicationAuthStrategyOpenidConnectOutputReference(this, "openid_connect");
  public get openidConnect() {
    return this._openidConnect;
  }
  public putOpenidConnect(value: ApplicationAuthStrategyOpenidConnect) {
    this._openidConnect.internalValue = value;
  }
  public resetOpenidConnect() {
    this._openidConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectInput() {
    return this._openidConnect.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_auth: applicationAuthStrategyKeyAuthToTerraform(this._keyAuth.internalValue),
      openid_connect: applicationAuthStrategyOpenidConnectToTerraform(this._openidConnect.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key_auth: {
        value: applicationAuthStrategyKeyAuthToHclTerraform(this._keyAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationAuthStrategyKeyAuth",
      },
      openid_connect: {
        value: applicationAuthStrategyOpenidConnectToHclTerraform(this._openidConnect.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationAuthStrategyOpenidConnect",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
