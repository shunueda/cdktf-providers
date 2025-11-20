// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name used in login screen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#display_name Connection#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#id Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether the connection is domain level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#is_domain_connection Connection#is_domain_connection}
  */
  readonly isDomainConnection?: boolean | cdktf.IResolvable;
  /**
  * Metadata associated with the connection, in the form of a map of string values (max 255 chars).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#metadata Connection#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Name of the connection. This value is immutable and changing it requires the creation of a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#name Connection#name}
  */
  readonly name: string;
  /**
  * Defines the realms for which the connection will be used (e.g., email domains). If not specified, the connection name is added as the realm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#realms Connection#realms}
  */
  readonly realms?: string[];
  /**
  * Display connection as a button. Only available on enterprise connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#show_as_button Connection#show_as_button}
  */
  readonly showAsButton?: boolean | cdktf.IResolvable;
  /**
  * Type of the connection, which indicates the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#strategy Connection#strategy}
  */
  readonly strategy: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#authentication Connection#authentication}
  */
  readonly authentication?: ConnectionAuthentication;
  /**
  * connected_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#connected_accounts Connection#connected_accounts}
  */
  readonly connectedAccounts?: ConnectionConnectedAccounts;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#options Connection#options}
  */
  readonly options?: ConnectionOptions;
}
export interface ConnectionAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#active Connection#active}
  */
  readonly active: boolean | cdktf.IResolvable;
}

export function connectionAuthenticationToTerraform(struct?: ConnectionAuthenticationOutputReference | ConnectionAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function connectionAuthenticationToHclTerraform(struct?: ConnectionAuthenticationOutputReference | ConnectionAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface ConnectionConnectedAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#active Connection#active}
  */
  readonly active: boolean | cdktf.IResolvable;
}

export function connectionConnectedAccountsToTerraform(struct?: ConnectionConnectedAccountsOutputReference | ConnectionConnectedAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function connectionConnectedAccountsToHclTerraform(struct?: ConnectionConnectedAccountsOutputReference | ConnectionConnectedAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConnectedAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionConnectedAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConnectedAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface ConnectionOptionsAttributeMap {
  /**
  * This property is an object containing mapping information that allows Auth0 to interpret incoming claims from the IdP. Mapping information must be provided as key/value pairs. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#attributes Connection#attributes}
  */
  readonly attributes?: string;
  /**
  * Method used to map incoming claims. Possible values: `use_map` (Okta or OIDC), `bind_all` (OIDC) or `basic_profile` (Okta).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#mapping_mode Connection#mapping_mode}
  */
  readonly mappingMode: string;
  /**
  * This property defines the scopes that Auth0 sends to the IdP’s UserInfo endpoint when requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#userinfo_scope Connection#userinfo_scope}
  */
  readonly userinfoScope?: string;
}

export function connectionOptionsAttributeMapToTerraform(struct?: ConnectionOptionsAttributeMapOutputReference | ConnectionOptionsAttributeMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.stringToTerraform(struct!.attributes),
    mapping_mode: cdktf.stringToTerraform(struct!.mappingMode),
    userinfo_scope: cdktf.stringToTerraform(struct!.userinfoScope),
  }
}


export function connectionOptionsAttributeMapToHclTerraform(struct?: ConnectionOptionsAttributeMapOutputReference | ConnectionOptionsAttributeMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.stringToHclTerraform(struct!.attributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_mode: {
      value: cdktf.stringToHclTerraform(struct!.mappingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userinfo_scope: {
      value: cdktf.stringToHclTerraform(struct!.userinfoScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributeMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsAttributeMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._mappingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingMode = this._mappingMode;
    }
    if (this._userinfoScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoScope = this._userinfoScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributeMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._mappingMode = undefined;
      this._userinfoScope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._mappingMode = value.mappingMode;
      this._userinfoScope = value.userinfoScope;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // mapping_mode - computed: false, optional: false, required: true
  private _mappingMode?: string; 
  public get mappingMode() {
    return this.getStringAttribute('mapping_mode');
  }
  public set mappingMode(value: string) {
    this._mappingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingModeInput() {
    return this._mappingMode;
  }

  // userinfo_scope - computed: false, optional: true, required: false
  private _userinfoScope?: string; 
  public get userinfoScope() {
    return this.getStringAttribute('userinfo_scope');
  }
  public set userinfoScope(value: string) {
    this._userinfoScope = value;
  }
  public resetUserinfoScope() {
    this._userinfoScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoScopeInput() {
    return this._userinfoScope;
  }
}
export interface ConnectionOptionsAttributesEmailIdentifier {
  /**
  * Defines whether email attribute is active as an identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#active Connection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function connectionOptionsAttributesEmailIdentifierToTerraform(struct?: ConnectionOptionsAttributesEmailIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function connectionOptionsAttributesEmailIdentifierToHclTerraform(struct?: ConnectionOptionsAttributesEmailIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesEmailIdentifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesEmailIdentifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesEmailIdentifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}

export class ConnectionOptionsAttributesEmailIdentifierList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesEmailIdentifier[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesEmailIdentifierOutputReference {
    return new ConnectionOptionsAttributesEmailIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesEmailSignupVerification {
  /**
  * Defines verification settings for signup attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#active Connection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function connectionOptionsAttributesEmailSignupVerificationToTerraform(struct?: ConnectionOptionsAttributesEmailSignupVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function connectionOptionsAttributesEmailSignupVerificationToHclTerraform(struct?: ConnectionOptionsAttributesEmailSignupVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesEmailSignupVerificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesEmailSignupVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesEmailSignupVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}

export class ConnectionOptionsAttributesEmailSignupVerificationList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesEmailSignupVerification[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesEmailSignupVerificationOutputReference {
    return new ConnectionOptionsAttributesEmailSignupVerificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesEmailSignup {
  /**
  * Defines signup status for Email Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#status Connection#status}
  */
  readonly status?: string;
  /**
  * verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#verification Connection#verification}
  */
  readonly verification?: ConnectionOptionsAttributesEmailSignupVerification[] | cdktf.IResolvable;
}

export function connectionOptionsAttributesEmailSignupToTerraform(struct?: ConnectionOptionsAttributesEmailSignup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    verification: cdktf.listMapper(connectionOptionsAttributesEmailSignupVerificationToTerraform, true)(struct!.verification),
  }
}


export function connectionOptionsAttributesEmailSignupToHclTerraform(struct?: ConnectionOptionsAttributesEmailSignup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesEmailSignupVerificationToHclTerraform, true)(struct!.verification),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesEmailSignupVerificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesEmailSignupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesEmailSignup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesEmailSignup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._verification.internalValue = value.verification;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // verification - computed: false, optional: true, required: false
  private _verification = new ConnectionOptionsAttributesEmailSignupVerificationList(this, "verification", false);
  public get verification() {
    return this._verification;
  }
  public putVerification(value: ConnectionOptionsAttributesEmailSignupVerification[] | cdktf.IResolvable) {
    this._verification.internalValue = value;
  }
  public resetVerification() {
    this._verification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}

export class ConnectionOptionsAttributesEmailSignupList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesEmailSignup[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesEmailSignupOutputReference {
    return new ConnectionOptionsAttributesEmailSignupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesEmail {
  /**
  * Defines whether Profile is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#profile_required Connection#profile_required}
  */
  readonly profileRequired?: boolean | cdktf.IResolvable;
  /**
  * If set to false, it allow multiple accounts with the same email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#unique Connection#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
  /**
  * Defines whether whether user will receive a link or an OTP during user signup for email verification and password reset for email verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#verification_method Connection#verification_method}
  */
  readonly verificationMethod?: string;
  /**
  * identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#identifier Connection#identifier}
  */
  readonly identifier?: ConnectionOptionsAttributesEmailIdentifier[] | cdktf.IResolvable;
  /**
  * signup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#signup Connection#signup}
  */
  readonly signup?: ConnectionOptionsAttributesEmailSignup[] | cdktf.IResolvable;
}

export function connectionOptionsAttributesEmailToTerraform(struct?: ConnectionOptionsAttributesEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_required: cdktf.booleanToTerraform(struct!.profileRequired),
    unique: cdktf.booleanToTerraform(struct!.unique),
    verification_method: cdktf.stringToTerraform(struct!.verificationMethod),
    identifier: cdktf.listMapper(connectionOptionsAttributesEmailIdentifierToTerraform, true)(struct!.identifier),
    signup: cdktf.listMapper(connectionOptionsAttributesEmailSignupToTerraform, true)(struct!.signup),
  }
}


export function connectionOptionsAttributesEmailToHclTerraform(struct?: ConnectionOptionsAttributesEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_required: {
      value: cdktf.booleanToHclTerraform(struct!.profileRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique: {
      value: cdktf.booleanToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verification_method: {
      value: cdktf.stringToHclTerraform(struct!.verificationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesEmailIdentifierToHclTerraform, true)(struct!.identifier),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesEmailIdentifierList",
    },
    signup: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesEmailSignupToHclTerraform, true)(struct!.signup),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesEmailSignupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesEmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileRequired = this._profileRequired;
    }
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    if (this._verificationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationMethod = this._verificationMethod;
    }
    if (this._identifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier?.internalValue;
    }
    if (this._signup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signup = this._signup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileRequired = undefined;
      this._unique = undefined;
      this._verificationMethod = undefined;
      this._identifier.internalValue = undefined;
      this._signup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileRequired = value.profileRequired;
      this._unique = value.unique;
      this._verificationMethod = value.verificationMethod;
      this._identifier.internalValue = value.identifier;
      this._signup.internalValue = value.signup;
    }
  }

  // profile_required - computed: false, optional: true, required: false
  private _profileRequired?: boolean | cdktf.IResolvable; 
  public get profileRequired() {
    return this.getBooleanAttribute('profile_required');
  }
  public set profileRequired(value: boolean | cdktf.IResolvable) {
    this._profileRequired = value;
  }
  public resetProfileRequired() {
    this._profileRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileRequiredInput() {
    return this._profileRequired;
  }

  // unique - computed: false, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // verification_method - computed: true, optional: true, required: false
  private _verificationMethod?: string; 
  public get verificationMethod() {
    return this.getStringAttribute('verification_method');
  }
  public set verificationMethod(value: string) {
    this._verificationMethod = value;
  }
  public resetVerificationMethod() {
    this._verificationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMethodInput() {
    return this._verificationMethod;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier = new ConnectionOptionsAttributesEmailIdentifierList(this, "identifier", false);
  public get identifier() {
    return this._identifier;
  }
  public putIdentifier(value: ConnectionOptionsAttributesEmailIdentifier[] | cdktf.IResolvable) {
    this._identifier.internalValue = value;
  }
  public resetIdentifier() {
    this._identifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier.internalValue;
  }

  // signup - computed: false, optional: true, required: false
  private _signup = new ConnectionOptionsAttributesEmailSignupList(this, "signup", false);
  public get signup() {
    return this._signup;
  }
  public putSignup(value: ConnectionOptionsAttributesEmailSignup[] | cdktf.IResolvable) {
    this._signup.internalValue = value;
  }
  public resetSignup() {
    this._signup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signupInput() {
    return this._signup.internalValue;
  }
}

export class ConnectionOptionsAttributesEmailList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesEmail[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesEmailOutputReference {
    return new ConnectionOptionsAttributesEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesPhoneNumberIdentifier {
  /**
  * Defines whether Phone Number attribute is active as an identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#active Connection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function connectionOptionsAttributesPhoneNumberIdentifierToTerraform(struct?: ConnectionOptionsAttributesPhoneNumberIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function connectionOptionsAttributesPhoneNumberIdentifierToHclTerraform(struct?: ConnectionOptionsAttributesPhoneNumberIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesPhoneNumberIdentifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesPhoneNumberIdentifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesPhoneNumberIdentifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}

export class ConnectionOptionsAttributesPhoneNumberIdentifierList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesPhoneNumberIdentifier[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesPhoneNumberIdentifierOutputReference {
    return new ConnectionOptionsAttributesPhoneNumberIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesPhoneNumberSignupVerification {
  /**
  * Defines verification settings for Phone Number attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#active Connection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function connectionOptionsAttributesPhoneNumberSignupVerificationToTerraform(struct?: ConnectionOptionsAttributesPhoneNumberSignupVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function connectionOptionsAttributesPhoneNumberSignupVerificationToHclTerraform(struct?: ConnectionOptionsAttributesPhoneNumberSignupVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesPhoneNumberSignupVerificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesPhoneNumberSignupVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesPhoneNumberSignupVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}

export class ConnectionOptionsAttributesPhoneNumberSignupVerificationList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesPhoneNumberSignupVerification[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesPhoneNumberSignupVerificationOutputReference {
    return new ConnectionOptionsAttributesPhoneNumberSignupVerificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesPhoneNumberSignup {
  /**
  * Defines status of signup for Phone Number attribute 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#status Connection#status}
  */
  readonly status?: string;
  /**
  * verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#verification Connection#verification}
  */
  readonly verification?: ConnectionOptionsAttributesPhoneNumberSignupVerification[] | cdktf.IResolvable;
}

export function connectionOptionsAttributesPhoneNumberSignupToTerraform(struct?: ConnectionOptionsAttributesPhoneNumberSignup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    verification: cdktf.listMapper(connectionOptionsAttributesPhoneNumberSignupVerificationToTerraform, true)(struct!.verification),
  }
}


export function connectionOptionsAttributesPhoneNumberSignupToHclTerraform(struct?: ConnectionOptionsAttributesPhoneNumberSignup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesPhoneNumberSignupVerificationToHclTerraform, true)(struct!.verification),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesPhoneNumberSignupVerificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesPhoneNumberSignupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesPhoneNumberSignup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesPhoneNumberSignup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._verification.internalValue = value.verification;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // verification - computed: false, optional: true, required: false
  private _verification = new ConnectionOptionsAttributesPhoneNumberSignupVerificationList(this, "verification", false);
  public get verification() {
    return this._verification;
  }
  public putVerification(value: ConnectionOptionsAttributesPhoneNumberSignupVerification[] | cdktf.IResolvable) {
    this._verification.internalValue = value;
  }
  public resetVerification() {
    this._verification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}

export class ConnectionOptionsAttributesPhoneNumberSignupList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesPhoneNumberSignup[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesPhoneNumberSignupOutputReference {
    return new ConnectionOptionsAttributesPhoneNumberSignupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesPhoneNumber {
  /**
  * Defines whether Profile is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#profile_required Connection#profile_required}
  */
  readonly profileRequired?: boolean | cdktf.IResolvable;
  /**
  * identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#identifier Connection#identifier}
  */
  readonly identifier?: ConnectionOptionsAttributesPhoneNumberIdentifier[] | cdktf.IResolvable;
  /**
  * signup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#signup Connection#signup}
  */
  readonly signup?: ConnectionOptionsAttributesPhoneNumberSignup[] | cdktf.IResolvable;
}

export function connectionOptionsAttributesPhoneNumberToTerraform(struct?: ConnectionOptionsAttributesPhoneNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_required: cdktf.booleanToTerraform(struct!.profileRequired),
    identifier: cdktf.listMapper(connectionOptionsAttributesPhoneNumberIdentifierToTerraform, true)(struct!.identifier),
    signup: cdktf.listMapper(connectionOptionsAttributesPhoneNumberSignupToTerraform, true)(struct!.signup),
  }
}


export function connectionOptionsAttributesPhoneNumberToHclTerraform(struct?: ConnectionOptionsAttributesPhoneNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_required: {
      value: cdktf.booleanToHclTerraform(struct!.profileRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identifier: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesPhoneNumberIdentifierToHclTerraform, true)(struct!.identifier),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesPhoneNumberIdentifierList",
    },
    signup: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesPhoneNumberSignupToHclTerraform, true)(struct!.signup),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesPhoneNumberSignupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesPhoneNumberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesPhoneNumber | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileRequired = this._profileRequired;
    }
    if (this._identifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier?.internalValue;
    }
    if (this._signup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signup = this._signup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesPhoneNumber | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileRequired = undefined;
      this._identifier.internalValue = undefined;
      this._signup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileRequired = value.profileRequired;
      this._identifier.internalValue = value.identifier;
      this._signup.internalValue = value.signup;
    }
  }

  // profile_required - computed: false, optional: true, required: false
  private _profileRequired?: boolean | cdktf.IResolvable; 
  public get profileRequired() {
    return this.getBooleanAttribute('profile_required');
  }
  public set profileRequired(value: boolean | cdktf.IResolvable) {
    this._profileRequired = value;
  }
  public resetProfileRequired() {
    this._profileRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileRequiredInput() {
    return this._profileRequired;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier = new ConnectionOptionsAttributesPhoneNumberIdentifierList(this, "identifier", false);
  public get identifier() {
    return this._identifier;
  }
  public putIdentifier(value: ConnectionOptionsAttributesPhoneNumberIdentifier[] | cdktf.IResolvable) {
    this._identifier.internalValue = value;
  }
  public resetIdentifier() {
    this._identifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier.internalValue;
  }

  // signup - computed: false, optional: true, required: false
  private _signup = new ConnectionOptionsAttributesPhoneNumberSignupList(this, "signup", false);
  public get signup() {
    return this._signup;
  }
  public putSignup(value: ConnectionOptionsAttributesPhoneNumberSignup[] | cdktf.IResolvable) {
    this._signup.internalValue = value;
  }
  public resetSignup() {
    this._signup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signupInput() {
    return this._signup.internalValue;
  }
}

export class ConnectionOptionsAttributesPhoneNumberList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesPhoneNumber[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesPhoneNumberOutputReference {
    return new ConnectionOptionsAttributesPhoneNumberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesUsernameIdentifier {
  /**
  * Defines whether UserName attribute is active as an identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#active Connection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function connectionOptionsAttributesUsernameIdentifierToTerraform(struct?: ConnectionOptionsAttributesUsernameIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function connectionOptionsAttributesUsernameIdentifierToHclTerraform(struct?: ConnectionOptionsAttributesUsernameIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesUsernameIdentifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesUsernameIdentifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesUsernameIdentifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}

export class ConnectionOptionsAttributesUsernameIdentifierList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesUsernameIdentifier[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesUsernameIdentifierOutputReference {
    return new ConnectionOptionsAttributesUsernameIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesUsernameSignup {
  /**
  * Defines whether User Name attribute is active as an identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#status Connection#status}
  */
  readonly status?: string;
}

export function connectionOptionsAttributesUsernameSignupToTerraform(struct?: ConnectionOptionsAttributesUsernameSignup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function connectionOptionsAttributesUsernameSignupToHclTerraform(struct?: ConnectionOptionsAttributesUsernameSignup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesUsernameSignupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesUsernameSignup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesUsernameSignup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ConnectionOptionsAttributesUsernameSignupList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesUsernameSignup[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesUsernameSignupOutputReference {
    return new ConnectionOptionsAttributesUsernameSignupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesUsernameValidationAllowedTypes {
  /**
  * One of the allowed types for UserName signup attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#email Connection#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * One of the allowed types for UserName signup attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#phone_number Connection#phone_number}
  */
  readonly phoneNumber?: boolean | cdktf.IResolvable;
}

export function connectionOptionsAttributesUsernameValidationAllowedTypesToTerraform(struct?: ConnectionOptionsAttributesUsernameValidationAllowedTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.booleanToTerraform(struct!.email),
    phone_number: cdktf.booleanToTerraform(struct!.phoneNumber),
  }
}


export function connectionOptionsAttributesUsernameValidationAllowedTypesToHclTerraform(struct?: ConnectionOptionsAttributesUsernameValidationAllowedTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.booleanToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    phone_number: {
      value: cdktf.booleanToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesUsernameValidationAllowedTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesUsernameValidationAllowedTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesUsernameValidationAllowedTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._phoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: boolean | cdktf.IResolvable; 
  public get phoneNumber() {
    return this.getBooleanAttribute('phone_number');
  }
  public set phoneNumber(value: boolean | cdktf.IResolvable) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}

export class ConnectionOptionsAttributesUsernameValidationAllowedTypesList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesUsernameValidationAllowedTypes[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesUsernameValidationAllowedTypesOutputReference {
    return new ConnectionOptionsAttributesUsernameValidationAllowedTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesUsernameValidation {
  /**
  * Defines Max Length for User Name attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#max_length Connection#max_length}
  */
  readonly maxLength?: number;
  /**
  * Defines Min Length for User Name attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#min_length Connection#min_length}
  */
  readonly minLength?: number;
  /**
  * allowed_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#allowed_types Connection#allowed_types}
  */
  readonly allowedTypes?: ConnectionOptionsAttributesUsernameValidationAllowedTypes[] | cdktf.IResolvable;
}

export function connectionOptionsAttributesUsernameValidationToTerraform(struct?: ConnectionOptionsAttributesUsernameValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    allowed_types: cdktf.listMapper(connectionOptionsAttributesUsernameValidationAllowedTypesToTerraform, true)(struct!.allowedTypes),
  }
}


export function connectionOptionsAttributesUsernameValidationToHclTerraform(struct?: ConnectionOptionsAttributesUsernameValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowed_types: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesUsernameValidationAllowedTypesToHclTerraform, true)(struct!.allowedTypes),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesUsernameValidationAllowedTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesUsernameValidationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesUsernameValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._allowedTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTypes = this._allowedTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesUsernameValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxLength = undefined;
      this._minLength = undefined;
      this._allowedTypes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
      this._allowedTypes.internalValue = value.allowedTypes;
    }
  }

  // max_length - computed: true, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: true, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // allowed_types - computed: false, optional: true, required: false
  private _allowedTypes = new ConnectionOptionsAttributesUsernameValidationAllowedTypesList(this, "allowed_types", false);
  public get allowedTypes() {
    return this._allowedTypes;
  }
  public putAllowedTypes(value: ConnectionOptionsAttributesUsernameValidationAllowedTypes[] | cdktf.IResolvable) {
    this._allowedTypes.internalValue = value;
  }
  public resetAllowedTypes() {
    this._allowedTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTypesInput() {
    return this._allowedTypes.internalValue;
  }
}

export class ConnectionOptionsAttributesUsernameValidationList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesUsernameValidation[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesUsernameValidationOutputReference {
    return new ConnectionOptionsAttributesUsernameValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributesUsername {
  /**
  * Defines whether Profile is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#profile_required Connection#profile_required}
  */
  readonly profileRequired?: boolean | cdktf.IResolvable;
  /**
  * identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#identifier Connection#identifier}
  */
  readonly identifier?: ConnectionOptionsAttributesUsernameIdentifier[] | cdktf.IResolvable;
  /**
  * signup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#signup Connection#signup}
  */
  readonly signup?: ConnectionOptionsAttributesUsernameSignup[] | cdktf.IResolvable;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#validation Connection#validation}
  */
  readonly validation?: ConnectionOptionsAttributesUsernameValidation[] | cdktf.IResolvable;
}

export function connectionOptionsAttributesUsernameToTerraform(struct?: ConnectionOptionsAttributesUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_required: cdktf.booleanToTerraform(struct!.profileRequired),
    identifier: cdktf.listMapper(connectionOptionsAttributesUsernameIdentifierToTerraform, true)(struct!.identifier),
    signup: cdktf.listMapper(connectionOptionsAttributesUsernameSignupToTerraform, true)(struct!.signup),
    validation: cdktf.listMapper(connectionOptionsAttributesUsernameValidationToTerraform, true)(struct!.validation),
  }
}


export function connectionOptionsAttributesUsernameToHclTerraform(struct?: ConnectionOptionsAttributesUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_required: {
      value: cdktf.booleanToHclTerraform(struct!.profileRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identifier: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesUsernameIdentifierToHclTerraform, true)(struct!.identifier),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesUsernameIdentifierList",
    },
    signup: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesUsernameSignupToHclTerraform, true)(struct!.signup),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesUsernameSignupList",
    },
    validation: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesUsernameValidationToHclTerraform, true)(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesUsernameValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesUsernameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributesUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileRequired = this._profileRequired;
    }
    if (this._identifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier?.internalValue;
    }
    if (this._signup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signup = this._signup?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributesUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileRequired = undefined;
      this._identifier.internalValue = undefined;
      this._signup.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileRequired = value.profileRequired;
      this._identifier.internalValue = value.identifier;
      this._signup.internalValue = value.signup;
      this._validation.internalValue = value.validation;
    }
  }

  // profile_required - computed: false, optional: true, required: false
  private _profileRequired?: boolean | cdktf.IResolvable; 
  public get profileRequired() {
    return this.getBooleanAttribute('profile_required');
  }
  public set profileRequired(value: boolean | cdktf.IResolvable) {
    this._profileRequired = value;
  }
  public resetProfileRequired() {
    this._profileRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileRequiredInput() {
    return this._profileRequired;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier = new ConnectionOptionsAttributesUsernameIdentifierList(this, "identifier", false);
  public get identifier() {
    return this._identifier;
  }
  public putIdentifier(value: ConnectionOptionsAttributesUsernameIdentifier[] | cdktf.IResolvable) {
    this._identifier.internalValue = value;
  }
  public resetIdentifier() {
    this._identifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier.internalValue;
  }

  // signup - computed: false, optional: true, required: false
  private _signup = new ConnectionOptionsAttributesUsernameSignupList(this, "signup", false);
  public get signup() {
    return this._signup;
  }
  public putSignup(value: ConnectionOptionsAttributesUsernameSignup[] | cdktf.IResolvable) {
    this._signup.internalValue = value;
  }
  public resetSignup() {
    this._signup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signupInput() {
    return this._signup.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new ConnectionOptionsAttributesUsernameValidationList(this, "validation", false);
  public get validation() {
    return this._validation;
  }
  public putValidation(value: ConnectionOptionsAttributesUsernameValidation[] | cdktf.IResolvable) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

export class ConnectionOptionsAttributesUsernameList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributesUsername[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesUsernameOutputReference {
    return new ConnectionOptionsAttributesUsernameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAttributes {
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#email Connection#email}
  */
  readonly email?: ConnectionOptionsAttributesEmail[] | cdktf.IResolvable;
  /**
  * phone_number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#phone_number Connection#phone_number}
  */
  readonly phoneNumber?: ConnectionOptionsAttributesPhoneNumber[] | cdktf.IResolvable;
  /**
  * username block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#username Connection#username}
  */
  readonly username?: ConnectionOptionsAttributesUsername[] | cdktf.IResolvable;
}

export function connectionOptionsAttributesToTerraform(struct?: ConnectionOptionsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(connectionOptionsAttributesEmailToTerraform, true)(struct!.email),
    phone_number: cdktf.listMapper(connectionOptionsAttributesPhoneNumberToTerraform, true)(struct!.phoneNumber),
    username: cdktf.listMapper(connectionOptionsAttributesUsernameToTerraform, true)(struct!.username),
  }
}


export function connectionOptionsAttributesToHclTerraform(struct?: ConnectionOptionsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesEmailToHclTerraform, true)(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesEmailList",
    },
    phone_number: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesPhoneNumberToHclTerraform, true)(struct!.phoneNumber),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesPhoneNumberList",
    },
    username: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesUsernameToHclTerraform, true)(struct!.username),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesUsernameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._phoneNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email.internalValue = undefined;
      this._phoneNumber.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email.internalValue = value.email;
      this._phoneNumber.internalValue = value.phoneNumber;
      this._username.internalValue = value.username;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email = new ConnectionOptionsAttributesEmailList(this, "email", false);
  public get email() {
    return this._email;
  }
  public putEmail(value: ConnectionOptionsAttributesEmail[] | cdktf.IResolvable) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber = new ConnectionOptionsAttributesPhoneNumberList(this, "phone_number", false);
  public get phoneNumber() {
    return this._phoneNumber;
  }
  public putPhoneNumber(value: ConnectionOptionsAttributesPhoneNumber[] | cdktf.IResolvable) {
    this._phoneNumber.internalValue = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username = new ConnectionOptionsAttributesUsernameList(this, "username", false);
  public get username() {
    return this._username;
  }
  public putUsername(value: ConnectionOptionsAttributesUsername[] | cdktf.IResolvable) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}

export class ConnectionOptionsAttributesList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAttributes[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAttributesOutputReference {
    return new ConnectionOptionsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsAuthenticationMethodsPasskey {
  /**
  * Enables passkey authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#enabled Connection#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function connectionOptionsAuthenticationMethodsPasskeyToTerraform(struct?: ConnectionOptionsAuthenticationMethodsPasskeyOutputReference | ConnectionOptionsAuthenticationMethodsPasskey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function connectionOptionsAuthenticationMethodsPasskeyToHclTerraform(struct?: ConnectionOptionsAuthenticationMethodsPasskeyOutputReference | ConnectionOptionsAuthenticationMethodsPasskey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAuthenticationMethodsPasskeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsAuthenticationMethodsPasskey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAuthenticationMethodsPasskey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ConnectionOptionsAuthenticationMethodsPassword {
  /**
  * Enables password authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#enabled Connection#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function connectionOptionsAuthenticationMethodsPasswordToTerraform(struct?: ConnectionOptionsAuthenticationMethodsPasswordOutputReference | ConnectionOptionsAuthenticationMethodsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function connectionOptionsAuthenticationMethodsPasswordToHclTerraform(struct?: ConnectionOptionsAuthenticationMethodsPasswordOutputReference | ConnectionOptionsAuthenticationMethodsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAuthenticationMethodsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsAuthenticationMethodsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAuthenticationMethodsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ConnectionOptionsAuthenticationMethods {
  /**
  * passkey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#passkey Connection#passkey}
  */
  readonly passkey?: ConnectionOptionsAuthenticationMethodsPasskey;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#password Connection#password}
  */
  readonly password?: ConnectionOptionsAuthenticationMethodsPassword;
}

export function connectionOptionsAuthenticationMethodsToTerraform(struct?: ConnectionOptionsAuthenticationMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passkey: connectionOptionsAuthenticationMethodsPasskeyToTerraform(struct!.passkey),
    password: connectionOptionsAuthenticationMethodsPasswordToTerraform(struct!.password),
  }
}


export function connectionOptionsAuthenticationMethodsToHclTerraform(struct?: ConnectionOptionsAuthenticationMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passkey: {
      value: connectionOptionsAuthenticationMethodsPasskeyToHclTerraform(struct!.passkey),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAuthenticationMethodsPasskeyList",
    },
    password: {
      value: connectionOptionsAuthenticationMethodsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAuthenticationMethodsPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsAuthenticationMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsAuthenticationMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passkey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passkey = this._passkey?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsAuthenticationMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passkey.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passkey.internalValue = value.passkey;
      this._password.internalValue = value.password;
    }
  }

  // passkey - computed: false, optional: true, required: false
  private _passkey = new ConnectionOptionsAuthenticationMethodsPasskeyOutputReference(this, "passkey");
  public get passkey() {
    return this._passkey;
  }
  public putPasskey(value: ConnectionOptionsAuthenticationMethodsPasskey) {
    this._passkey.internalValue = value;
  }
  public resetPasskey() {
    this._passkey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passkeyInput() {
    return this._passkey.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new ConnectionOptionsAuthenticationMethodsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionOptionsAuthenticationMethodsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}

export class ConnectionOptionsAuthenticationMethodsList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsAuthenticationMethods[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsAuthenticationMethodsOutputReference {
    return new ConnectionOptionsAuthenticationMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsConnectionSettings {
  /**
  * PKCE configuration. Possible values: `auto` (uses the strongest algorithm available), `S256` (uses the SHA-256 algorithm), `plain` (uses plaintext as described in the PKCE specification) or `disabled` (disables support for PKCE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#pkce Connection#pkce}
  */
  readonly pkce: string;
}

export function connectionOptionsConnectionSettingsToTerraform(struct?: ConnectionOptionsConnectionSettingsOutputReference | ConnectionOptionsConnectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pkce: cdktf.stringToTerraform(struct!.pkce),
  }
}


export function connectionOptionsConnectionSettingsToHclTerraform(struct?: ConnectionOptionsConnectionSettingsOutputReference | ConnectionOptionsConnectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pkce: {
      value: cdktf.stringToHclTerraform(struct!.pkce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsConnectionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsConnectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkce !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkce = this._pkce;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsConnectionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pkce = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pkce = value.pkce;
    }
  }

  // pkce - computed: false, optional: false, required: true
  private _pkce?: string; 
  public get pkce() {
    return this.getStringAttribute('pkce');
  }
  public set pkce(value: string) {
    this._pkce = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceInput() {
    return this._pkce;
  }
}
export interface ConnectionOptionsCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#header Connection#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#value Connection#value}
  */
  readonly value: string;
}

export function connectionOptionsCustomHeadersToTerraform(struct?: ConnectionOptionsCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function connectionOptionsCustomHeadersToHclTerraform(struct?: ConnectionOptionsCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsCustomHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsCustomHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsCustomHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._value = value.value;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ConnectionOptionsCustomHeadersList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsCustomHeaders[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsCustomHeadersOutputReference {
    return new ConnectionOptionsCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsDecryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#cert Connection#cert}
  */
  readonly cert: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#key Connection#key}
  */
  readonly key: string;
}

export function connectionOptionsDecryptionKeyToTerraform(struct?: ConnectionOptionsDecryptionKeyOutputReference | ConnectionOptionsDecryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function connectionOptionsDecryptionKeyToHclTerraform(struct?: ConnectionOptionsDecryptionKeyOutputReference | ConnectionOptionsDecryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsDecryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsDecryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsDecryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._key = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface ConnectionOptionsGatewayAuthentication {
  /**
  * Audience claim for the HS256 token sent to `gateway_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#audience Connection#audience}
  */
  readonly audience?: string;
  /**
  * Authentication method (default is `bearer` token).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#method Connection#method}
  */
  readonly method?: string;
  /**
  * Secret used to sign the HS256 token sent to `gateway_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#secret Connection#secret}
  */
  readonly secret?: string;
  /**
  * Specifies whether or not the secret is Base64-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#secret_base64_encoded Connection#secret_base64_encoded}
  */
  readonly secretBase64Encoded?: boolean | cdktf.IResolvable;
  /**
  * Subject claim for the HS256 token sent to `gateway_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#subject Connection#subject}
  */
  readonly subject?: string;
}

export function connectionOptionsGatewayAuthenticationToTerraform(struct?: ConnectionOptionsGatewayAuthenticationOutputReference | ConnectionOptionsGatewayAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    method: cdktf.stringToTerraform(struct!.method),
    secret: cdktf.stringToTerraform(struct!.secret),
    secret_base64_encoded: cdktf.booleanToTerraform(struct!.secretBase64Encoded),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function connectionOptionsGatewayAuthenticationToHclTerraform(struct?: ConnectionOptionsGatewayAuthenticationOutputReference | ConnectionOptionsGatewayAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_base64_encoded: {
      value: cdktf.booleanToHclTerraform(struct!.secretBase64Encoded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsGatewayAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsGatewayAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretBase64Encoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretBase64Encoded = this._secretBase64Encoded;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsGatewayAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._method = undefined;
      this._secret = undefined;
      this._secretBase64Encoded = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._method = value.method;
      this._secret = value.secret;
      this._secretBase64Encoded = value.secretBase64Encoded;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_base64_encoded - computed: false, optional: true, required: false
  private _secretBase64Encoded?: boolean | cdktf.IResolvable; 
  public get secretBase64Encoded() {
    return this.getBooleanAttribute('secret_base64_encoded');
  }
  public set secretBase64Encoded(value: boolean | cdktf.IResolvable) {
    this._secretBase64Encoded = value;
  }
  public resetSecretBase64Encoded() {
    this._secretBase64Encoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretBase64EncodedInput() {
    return this._secretBase64Encoded;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ConnectionOptionsIdpInitiated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#client_authorize_query Connection#client_authorize_query}
  */
  readonly clientAuthorizeQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#client_id Connection#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#client_protocol Connection#client_protocol}
  */
  readonly clientProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#enabled Connection#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function connectionOptionsIdpInitiatedToTerraform(struct?: ConnectionOptionsIdpInitiatedOutputReference | ConnectionOptionsIdpInitiated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_authorize_query: cdktf.stringToTerraform(struct!.clientAuthorizeQuery),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_protocol: cdktf.stringToTerraform(struct!.clientProtocol),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function connectionOptionsIdpInitiatedToHclTerraform(struct?: ConnectionOptionsIdpInitiatedOutputReference | ConnectionOptionsIdpInitiated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_authorize_query: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthorizeQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_protocol: {
      value: cdktf.stringToHclTerraform(struct!.clientProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsIdpInitiatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsIdpInitiated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuthorizeQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthorizeQuery = this._clientAuthorizeQuery;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientProtocol = this._clientProtocol;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsIdpInitiated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAuthorizeQuery = undefined;
      this._clientId = undefined;
      this._clientProtocol = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAuthorizeQuery = value.clientAuthorizeQuery;
      this._clientId = value.clientId;
      this._clientProtocol = value.clientProtocol;
      this._enabled = value.enabled;
    }
  }

  // client_authorize_query - computed: false, optional: true, required: false
  private _clientAuthorizeQuery?: string; 
  public get clientAuthorizeQuery() {
    return this.getStringAttribute('client_authorize_query');
  }
  public set clientAuthorizeQuery(value: string) {
    this._clientAuthorizeQuery = value;
  }
  public resetClientAuthorizeQuery() {
    this._clientAuthorizeQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthorizeQueryInput() {
    return this._clientAuthorizeQuery;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_protocol - computed: false, optional: true, required: false
  private _clientProtocol?: string; 
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }
  public set clientProtocol(value: string) {
    this._clientProtocol = value;
  }
  public resetClientProtocol() {
    this._clientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProtocolInput() {
    return this._clientProtocol;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ConnectionOptionsMfa {
  /**
  * Indicates whether multifactor authentication is enabled for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#active Connection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether multifactor authentication enrollment settings will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#return_enroll_settings Connection#return_enroll_settings}
  */
  readonly returnEnrollSettings?: boolean | cdktf.IResolvable;
}

export function connectionOptionsMfaToTerraform(struct?: ConnectionOptionsMfaOutputReference | ConnectionOptionsMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    return_enroll_settings: cdktf.booleanToTerraform(struct!.returnEnrollSettings),
  }
}


export function connectionOptionsMfaToHclTerraform(struct?: ConnectionOptionsMfaOutputReference | ConnectionOptionsMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    return_enroll_settings: {
      value: cdktf.booleanToHclTerraform(struct!.returnEnrollSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsMfa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._returnEnrollSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnEnrollSettings = this._returnEnrollSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsMfa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._returnEnrollSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._returnEnrollSettings = value.returnEnrollSettings;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // return_enroll_settings - computed: false, optional: true, required: false
  private _returnEnrollSettings?: boolean | cdktf.IResolvable; 
  public get returnEnrollSettings() {
    return this.getBooleanAttribute('return_enroll_settings');
  }
  public set returnEnrollSettings(value: boolean | cdktf.IResolvable) {
    this._returnEnrollSettings = value;
  }
  public resetReturnEnrollSettings() {
    this._returnEnrollSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnEnrollSettingsInput() {
    return this._returnEnrollSettings;
  }
}
export interface ConnectionOptionsPasskeyOptions {
  /**
  * Controls the UI used to challenge the user for their passkey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#challenge_ui Connection#challenge_ui}
  */
  readonly challengeUi?: string;
  /**
  * Enables or disables enrollment prompt for local passkey when user authenticates using a cross-device passkey for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#local_enrollment_enabled Connection#local_enrollment_enabled}
  */
  readonly localEnrollmentEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables progressive enrollment of passkeys for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#progressive_enrollment_enabled Connection#progressive_enrollment_enabled}
  */
  readonly progressiveEnrollmentEnabled?: boolean | cdktf.IResolvable;
}

export function connectionOptionsPasskeyOptionsToTerraform(struct?: ConnectionOptionsPasskeyOptionsOutputReference | ConnectionOptionsPasskeyOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    challenge_ui: cdktf.stringToTerraform(struct!.challengeUi),
    local_enrollment_enabled: cdktf.booleanToTerraform(struct!.localEnrollmentEnabled),
    progressive_enrollment_enabled: cdktf.booleanToTerraform(struct!.progressiveEnrollmentEnabled),
  }
}


export function connectionOptionsPasskeyOptionsToHclTerraform(struct?: ConnectionOptionsPasskeyOptionsOutputReference | ConnectionOptionsPasskeyOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    challenge_ui: {
      value: cdktf.stringToHclTerraform(struct!.challengeUi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_enrollment_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.localEnrollmentEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    progressive_enrollment_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.progressiveEnrollmentEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsPasskeyOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsPasskeyOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challengeUi !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeUi = this._challengeUi;
    }
    if (this._localEnrollmentEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.localEnrollmentEnabled = this._localEnrollmentEnabled;
    }
    if (this._progressiveEnrollmentEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressiveEnrollmentEnabled = this._progressiveEnrollmentEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsPasskeyOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._challengeUi = undefined;
      this._localEnrollmentEnabled = undefined;
      this._progressiveEnrollmentEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._challengeUi = value.challengeUi;
      this._localEnrollmentEnabled = value.localEnrollmentEnabled;
      this._progressiveEnrollmentEnabled = value.progressiveEnrollmentEnabled;
    }
  }

  // challenge_ui - computed: true, optional: true, required: false
  private _challengeUi?: string; 
  public get challengeUi() {
    return this.getStringAttribute('challenge_ui');
  }
  public set challengeUi(value: string) {
    this._challengeUi = value;
  }
  public resetChallengeUi() {
    this._challengeUi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeUiInput() {
    return this._challengeUi;
  }

  // local_enrollment_enabled - computed: true, optional: true, required: false
  private _localEnrollmentEnabled?: boolean | cdktf.IResolvable; 
  public get localEnrollmentEnabled() {
    return this.getBooleanAttribute('local_enrollment_enabled');
  }
  public set localEnrollmentEnabled(value: boolean | cdktf.IResolvable) {
    this._localEnrollmentEnabled = value;
  }
  public resetLocalEnrollmentEnabled() {
    this._localEnrollmentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localEnrollmentEnabledInput() {
    return this._localEnrollmentEnabled;
  }

  // progressive_enrollment_enabled - computed: true, optional: true, required: false
  private _progressiveEnrollmentEnabled?: boolean | cdktf.IResolvable; 
  public get progressiveEnrollmentEnabled() {
    return this.getBooleanAttribute('progressive_enrollment_enabled');
  }
  public set progressiveEnrollmentEnabled(value: boolean | cdktf.IResolvable) {
    this._progressiveEnrollmentEnabled = value;
  }
  public resetProgressiveEnrollmentEnabled() {
    this._progressiveEnrollmentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressiveEnrollmentEnabledInput() {
    return this._progressiveEnrollmentEnabled;
  }
}
export interface ConnectionOptionsPasswordComplexityOptions {
  /**
  * Minimum number of characters allowed in passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#min_length Connection#min_length}
  */
  readonly minLength?: number;
}

export function connectionOptionsPasswordComplexityOptionsToTerraform(struct?: ConnectionOptionsPasswordComplexityOptionsOutputReference | ConnectionOptionsPasswordComplexityOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_length: cdktf.numberToTerraform(struct!.minLength),
  }
}


export function connectionOptionsPasswordComplexityOptionsToHclTerraform(struct?: ConnectionOptionsPasswordComplexityOptionsOutputReference | ConnectionOptionsPasswordComplexityOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsPasswordComplexityOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsPasswordComplexityOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsPasswordComplexityOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minLength = value.minLength;
    }
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }
}
export interface ConnectionOptionsPasswordDictionary {
  /**
  * Customized contents of the password dictionary. By default, the password dictionary contains a list of the [10,000 most common passwords](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10k-most-common.txt); your customized content is used in addition to the default password dictionary. Matching is not case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#dictionary Connection#dictionary}
  */
  readonly dictionary?: string[];
  /**
  * Indicates whether the password dictionary check is enabled for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#enable Connection#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function connectionOptionsPasswordDictionaryToTerraform(struct?: ConnectionOptionsPasswordDictionaryOutputReference | ConnectionOptionsPasswordDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dictionary: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dictionary),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function connectionOptionsPasswordDictionaryToHclTerraform(struct?: ConnectionOptionsPasswordDictionaryOutputReference | ConnectionOptionsPasswordDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dictionary: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dictionary),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsPasswordDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsPasswordDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dictionary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsPasswordDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dictionary = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dictionary = value.dictionary;
      this._enable = value.enable;
    }
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary?: string[]; 
  public get dictionary() {
    return cdktf.Fn.tolist(this.getListAttribute('dictionary'));
  }
  public set dictionary(value: string[]) {
    this._dictionary = value;
  }
  public resetDictionary() {
    this._dictionary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface ConnectionOptionsPasswordHistory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#enable Connection#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#size Connection#size}
  */
  readonly size?: number;
}

export function connectionOptionsPasswordHistoryToTerraform(struct?: ConnectionOptionsPasswordHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function connectionOptionsPasswordHistoryToHclTerraform(struct?: ConnectionOptionsPasswordHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsPasswordHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsPasswordHistory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsPasswordHistory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._size = value.size;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class ConnectionOptionsPasswordHistoryList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsPasswordHistory[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsPasswordHistoryOutputReference {
    return new ConnectionOptionsPasswordHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsPasswordNoPersonalInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#enable Connection#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function connectionOptionsPasswordNoPersonalInfoToTerraform(struct?: ConnectionOptionsPasswordNoPersonalInfoOutputReference | ConnectionOptionsPasswordNoPersonalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function connectionOptionsPasswordNoPersonalInfoToHclTerraform(struct?: ConnectionOptionsPasswordNoPersonalInfoOutputReference | ConnectionOptionsPasswordNoPersonalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsPasswordNoPersonalInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsPasswordNoPersonalInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsPasswordNoPersonalInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface ConnectionOptionsSigningKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#cert Connection#cert}
  */
  readonly cert: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#key Connection#key}
  */
  readonly key: string;
}

export function connectionOptionsSigningKeyToTerraform(struct?: ConnectionOptionsSigningKeyOutputReference | ConnectionOptionsSigningKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function connectionOptionsSigningKeyToHclTerraform(struct?: ConnectionOptionsSigningKeyOutputReference | ConnectionOptionsSigningKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsSigningKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsSigningKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsSigningKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._key = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface ConnectionOptionsTotp {
  /**
  * Length of the one-time password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#length Connection#length}
  */
  readonly length?: number;
  /**
  * Seconds between allowed generation of new passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#time_step Connection#time_step}
  */
  readonly timeStep?: number;
}

export function connectionOptionsTotpToTerraform(struct?: ConnectionOptionsTotpOutputReference | ConnectionOptionsTotp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    time_step: cdktf.numberToTerraform(struct!.timeStep),
  }
}


export function connectionOptionsTotpToHclTerraform(struct?: ConnectionOptionsTotpOutputReference | ConnectionOptionsTotp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_step: {
      value: cdktf.numberToHclTerraform(struct!.timeStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsTotpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsTotp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._timeStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStep = this._timeStep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsTotp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._timeStep = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._timeStep = value.timeStep;
    }
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // time_step - computed: false, optional: true, required: false
  private _timeStep?: number; 
  public get timeStep() {
    return this.getNumberAttribute('time_step');
  }
  public set timeStep(value: number) {
    this._timeStep = value;
  }
  public resetTimeStep() {
    this._timeStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStepInput() {
    return this._timeStep;
  }
}
export interface ConnectionOptionsValidationUsername {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#max Connection#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#min Connection#min}
  */
  readonly min?: number;
}

export function connectionOptionsValidationUsernameToTerraform(struct?: ConnectionOptionsValidationUsernameOutputReference | ConnectionOptionsValidationUsername): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function connectionOptionsValidationUsernameToHclTerraform(struct?: ConnectionOptionsValidationUsernameOutputReference | ConnectionOptionsValidationUsername): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsValidationUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsValidationUsername | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsValidationUsername | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface ConnectionOptionsValidation {
  /**
  * username block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#username Connection#username}
  */
  readonly username?: ConnectionOptionsValidationUsername;
}

export function connectionOptionsValidationToTerraform(struct?: ConnectionOptionsValidationOutputReference | ConnectionOptionsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: connectionOptionsValidationUsernameToTerraform(struct!.username),
  }
}


export function connectionOptionsValidationToHclTerraform(struct?: ConnectionOptionsValidationOutputReference | ConnectionOptionsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: connectionOptionsValidationUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsValidationUsernameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username.internalValue = value.username;
    }
  }

  // username - computed: false, optional: true, required: false
  private _username = new ConnectionOptionsValidationUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: ConnectionOptionsValidationUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface ConnectionOptions {
  /**
  * URL used to exchange a user-authorized request token for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#access_token_url Connection#access_token_url}
  */
  readonly accessTokenUrl?: string;
  /**
  * ADFS URL where to fetch the metadata source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#adfs_server Connection#adfs_server}
  */
  readonly adfsServer?: string;
  /**
  * List of allowed audiences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#allowed_audiences Connection#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * Enable API Access to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#api_enable_users Connection#api_enable_users}
  */
  readonly apiEnableUsers?: boolean | cdktf.IResolvable;
  /**
  * App ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#app_id Connection#app_id}
  */
  readonly appId?: string;
  /**
  * Query string parameters to be included as part of the generated passwordless email link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#auth_params Connection#auth_params}
  */
  readonly authParams?: { [key: string]: string };
  /**
  * Authorization endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#authorization_endpoint Connection#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * Indicates whether to enable brute force protection, which will limit the number of signups and failed logins from a suspicious IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#brute_force_protection Connection#brute_force_protection}
  */
  readonly bruteForceProtection?: boolean | cdktf.IResolvable;
  /**
  * The strategy's client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#client_id Connection#client_id}
  */
  readonly clientId?: string;
  /**
  * The strategy's client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#client_secret Connection#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Salesforce community base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#community_base_url Connection#community_base_url}
  */
  readonly communityBaseUrl?: string;
  /**
  * A case-sensitive map of key value pairs used as configuration variables for the `custom_script`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#configuration Connection#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Identifies the client to the service provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#consumer_key Connection#consumer_key}
  */
  readonly consumerKey?: string;
  /**
  * Secret used to establish ownership of the consumer key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#consumer_secret Connection#consumer_secret}
  */
  readonly consumerSecret?: string;
  /**
  * A map of scripts used to integrate with a custom database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#custom_scripts Connection#custom_scripts}
  */
  readonly customScripts?: { [key: string]: string };
  /**
  * When enabled, additional debug information will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#debug Connection#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Sign Request Algorithm Digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#digest_algorithm Connection#digest_algorithm}
  */
  readonly digestAlgorithm?: string;
  /**
  * Indicates whether to disable the cache or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#disable_cache Connection#disable_cache}
  */
  readonly disableCache?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to remove the forgot password link within the New Universal Login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#disable_self_service_change_password Connection#disable_self_service_change_password}
  */
  readonly disableSelfServiceChangePassword?: boolean | cdktf.IResolvable;
  /**
  * When enabled, will disable sign out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#disable_sign_out Connection#disable_sign_out}
  */
  readonly disableSignOut?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to allow user sign-ups to your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#disable_signup Connection#disable_signup}
  */
  readonly disableSignup?: boolean | cdktf.IResolvable;
  /**
  * OpenID discovery URL, e.g. `https://auth.example.com/.well-known/openid-configuration`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#discovery_url Connection#discovery_url}
  */
  readonly discoveryUrl?: string;
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#domain Connection#domain}
  */
  readonly domain?: string;
  /**
  * List of the domains that can be authenticated using the identity provider. Only needed for Identifier First authentication flows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#domain_aliases Connection#domain_aliases}
  */
  readonly domainAliases?: string[];
  /**
  * Set to `true` to inject context into custom DB scripts (warning: cannot be disabled once enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#enable_script_context Connection#enable_script_context}
  */
  readonly enableScriptContext?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to use a legacy user store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#enabled_database_customization Connection#enabled_database_customization}
  */
  readonly enabledDatabaseCustomization?: boolean | cdktf.IResolvable;
  /**
  * Custom Entity ID for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#entity_id Connection#entity_id}
  */
  readonly entityId?: string;
  /**
  * Federation Metadata for the ADFS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#fed_metadata_xml Connection#fed_metadata_xml}
  */
  readonly fedMetadataXml?: string;
  /**
  * If you're configuring a SAML enterprise connection for a non-standard PingFederate Server, you must update the attribute mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#fields_map Connection#fields_map}
  */
  readonly fieldsMap?: string;
  /**
  * Specifies whether or not request info should be forwarded to sms gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#forward_request_info Connection#forward_request_info}
  */
  readonly forwardRequestInfo?: boolean | cdktf.IResolvable;
  /**
  * Address to use as the sender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#from Connection#from}
  */
  readonly from?: string;
  /**
  * Defines a custom sms gateway to use instead of Twilio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#gateway_url Connection#gateway_url}
  */
  readonly gatewayUrl?: string;
  /**
  * Specifies the issuer of the JWT used for global token revocation for the SAML connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#global_token_revocation_jwt_iss Connection#global_token_revocation_jwt_iss}
  */
  readonly globalTokenRevocationJwtIss?: string;
  /**
  * Specifies the subject of the JWT used for global token revocation for the SAML connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#global_token_revocation_jwt_sub Connection#global_token_revocation_jwt_sub}
  */
  readonly globalTokenRevocationJwtSub?: string;
  /**
  * Icon URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#icon_url Connection#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * Azure AD Identity API. Available options are: `microsoft-identity-platform-v2.0` or `azure-active-directory-v1.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#identity_api Connection#identity_api}
  */
  readonly identityApi?: string;
  /**
  * Indicates whether you have a legacy user store and want to gradually migrate those users to the Auth0 user store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#import_mode Connection#import_mode}
  */
  readonly importMode?: boolean | cdktf.IResolvable;
  /**
  * A list of IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#ips Connection#ips}
  */
  readonly ips?: string[];
  /**
  * Issuer URL, e.g. `https://auth.example.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#issuer Connection#issuer}
  */
  readonly issuer?: string;
  /**
  * JWKS URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#jwks_uri Connection#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Apple Key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#key_id Connection#key_id}
  */
  readonly keyId?: string;
  /**
  * By default Auth0 maps `user_id` to `email`. Enabling this setting changes the behavior to map `user_id` to 'id' instead. This can only be defined on a new Google Workspace connection and can not be changed once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#map_user_id_to_id Connection#map_user_id_to_id}
  */
  readonly mapUserIdToId?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of groups to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#max_groups_to_retrieve Connection#max_groups_to_retrieve}
  */
  readonly maxGroupsToRetrieve?: string;
  /**
  * SID for Copilot. Used when SMS Source is Copilot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#messaging_service_sid Connection#messaging_service_sid}
  */
  readonly messagingServiceSid?: string;
  /**
  * The URL of the SAML metadata document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#metadata_url Connection#metadata_url}
  */
  readonly metadataUrl?: string;
  /**
  * The XML content for the SAML metadata document. Values within the xml will take precedence over other attributes set on the options block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#metadata_xml Connection#metadata_xml}
  */
  readonly metadataXml?: string;
  /**
  * The public name of the email or SMS Connection. In most cases this is the same name as the connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#name Connection#name}
  */
  readonly name?: string;
  /**
  * If there are user fields that should not be stored in Auth0 databases due to privacy reasons, you can add them to the DenyList here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#non_persistent_attrs Connection#non_persistent_attrs}
  */
  readonly nonPersistentAttrs?: string[];
  /**
  * Indicates level of password strength to enforce during authentication. A strong password policy will make it difficult, if not improbable, for someone to guess a password through either manual or automated means. Options include `none`, `low`, `fair`, `good`, `excellent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#password_policy Connection#password_policy}
  */
  readonly passwordPolicy?: string;
  /**
  * Ping Federate Server URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#ping_federate_base_url Connection#ping_federate_base_url}
  */
  readonly pingFederateBaseUrl?: string;
  /**
  * Enables Proof Key for Code Exchange (PKCE) functionality for OAuth2 connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#pkce_enabled Connection#pkce_enabled}
  */
  readonly pkceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Order of attributes for precedence in identification.Valid values: email, phone_number, username. If Precedence is set, it must contain all values (email, phone_number, username) in specific order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#precedence Connection#precedence}
  */
  readonly precedence?: string[];
  /**
  * The SAML Response Binding: how the SAML token is received by Auth0 from the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#protocol_binding Connection#protocol_binding}
  */
  readonly protocolBinding?: string;
  /**
  * Defines the custom `sms_gateway` provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#provider Connection#provider}
  */
  readonly provider?: string;
  /**
  * Allows configuration if connections_realm_fallback flag is enabled for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#realm_fallback Connection#realm_fallback}
  */
  readonly realmFallback?: boolean | cdktf.IResolvable;
  /**
  * Template that formats the SAML request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#request_template Connection#request_template}
  */
  readonly requestTemplate?: string;
  /**
  * URL used to obtain an unauthorized request token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#request_token_url Connection#request_token_url}
  */
  readonly requestTokenUrl?: string;
  /**
  * Indicates whether the user is required to provide a username in addition to an email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#requires_username Connection#requires_username}
  */
  readonly requiresUsername?: boolean | cdktf.IResolvable;
  /**
  * Permissions to grant to the connection. Within the Auth0 dashboard these appear under the "Attributes" and "Extended Attributes" sections. Some examples: `basic_profile`, `ext_profile`, `ext_nested_groups`, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#scopes Connection#scopes}
  */
  readonly scopes?: string[];
  /**
  * A map of scripts used for an OAuth connection. Only accepts a `fetchUserProfile` script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#scripts Connection#scripts}
  */
  readonly scripts?: { [key: string]: string };
  /**
  * Session Key for storing the request token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#session_key Connection#session_key}
  */
  readonly sessionKey?: string;
  /**
  * Determines whether to sync user profile attributes (`name`, `given_name`, `family_name`, `nickname`, `picture`) at each login or only on the first login. Options include: `on_each_login`, `on_first_login`, `never_on_login`. Default value: `on_each_login`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#set_user_root_attributes Connection#set_user_root_attributes}
  */
  readonly setUserRootAttributes?: string;
  /**
  * Choose how Auth0 sets the email_verified field in the user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#should_trust_email_verified_connection Connection#should_trust_email_verified_connection}
  */
  readonly shouldTrustEmailVerifiedConnection?: string;
  /**
  * SAML single login URL for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#sign_in_endpoint Connection#sign_in_endpoint}
  */
  readonly signInEndpoint?: string;
  /**
  * SAML single logout URL for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#sign_out_endpoint Connection#sign_out_endpoint}
  */
  readonly signOutEndpoint?: string;
  /**
  * When enabled, the SAML authentication request will be signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#sign_saml_request Connection#sign_saml_request}
  */
  readonly signSamlRequest?: boolean | cdktf.IResolvable;
  /**
  * Sign Request Algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#signature_algorithm Connection#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Signature method used to sign the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#signature_method Connection#signature_method}
  */
  readonly signatureMethod?: string;
  /**
  * X.509 signing certificate (encoded in PEM or CER) you retrieved from the IdP, Base64-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#signing_cert Connection#signing_cert}
  */
  readonly signingCert?: string;
  /**
  * Version 1 is deprecated, use version 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#strategy_version Connection#strategy_version}
  */
  readonly strategyVersion?: number;
  /**
  * Subject line of the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#subject Connection#subject}
  */
  readonly subject?: string;
  /**
  * Syntax of the template body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#syntax Connection#syntax}
  */
  readonly syntax?: string;
  /**
  * Apple Team ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#team_id Connection#team_id}
  */
  readonly teamId?: string;
  /**
  * Body of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#template Connection#template}
  */
  readonly template?: string;
  /**
  * Tenant domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#tenant_domain Connection#tenant_domain}
  */
  readonly tenantDomain?: string;
  /**
  * Token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#token_endpoint Connection#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Specifies the authentication method for the token endpoint. (Okta/OIDC Connections)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#token_endpoint_auth_method Connection#token_endpoint_auth_method}
  */
  readonly tokenEndpointAuthMethod?: string;
  /**
  * Specifies the signing algorithm for the token endpoint. (Okta/OIDC Connections)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#token_endpoint_auth_signing_alg Connection#token_endpoint_auth_signing_alg}
  */
  readonly tokenEndpointAuthSigningAlg?: string;
  /**
  * SID for your Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#twilio_sid Connection#twilio_sid}
  */
  readonly twilioSid?: string;
  /**
  * AuthToken for your Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#twilio_token Connection#twilio_token}
  */
  readonly twilioToken?: string;
  /**
  * Value can be `back_channel` or `front_channel`. Front Channel will use OIDC protocol with `response_mode=form_post` and `response_type=id_token`. Back Channel will use `response_type=code`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#type Connection#type}
  */
  readonly type?: string;
  /**
  * You can pass provider-specific parameters to an identity provider during authentication. The values can either be static per connection or dynamic per user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#upstream_params Connection#upstream_params}
  */
  readonly upstreamParams?: string;
  /**
  * Indicates whether to use cert auth or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#use_cert_auth Connection#use_cert_auth}
  */
  readonly useCertAuth?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to use Kerberos or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#use_kerberos Connection#use_kerberos}
  */
  readonly useKerberos?: boolean | cdktf.IResolvable;
  /**
  * Whether to use WS-Fed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#use_wsfed Connection#use_wsfed}
  */
  readonly useWsfed?: boolean | cdktf.IResolvable;
  /**
  * URL used to obtain user authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#user_authorization_url Connection#user_authorization_url}
  */
  readonly userAuthorizationUrl?: string;
  /**
  * Attribute in the token that will be mapped to the user_id property in Auth0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#user_id_attribute Connection#user_id_attribute}
  */
  readonly userIdAttribute?: string;
  /**
  * User info endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#userinfo_endpoint Connection#userinfo_endpoint}
  */
  readonly userinfoEndpoint?: string;
  /**
  * Indicates whether to use the common endpoint rather than the default endpoint. Typically enabled if you're using this for a multi-tenant application in Azure AD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#waad_common_endpoint Connection#waad_common_endpoint}
  */
  readonly waadCommonEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Protocol to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#waad_protocol Connection#waad_protocol}
  */
  readonly waadProtocol?: string;
  /**
  * attribute_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#attribute_map Connection#attribute_map}
  */
  readonly attributeMap?: ConnectionOptionsAttributeMap;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#attributes Connection#attributes}
  */
  readonly attributes?: ConnectionOptionsAttributes[] | cdktf.IResolvable;
  /**
  * authentication_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#authentication_methods Connection#authentication_methods}
  */
  readonly authenticationMethods?: ConnectionOptionsAuthenticationMethods[] | cdktf.IResolvable;
  /**
  * connection_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#connection_settings Connection#connection_settings}
  */
  readonly connectionSettings?: ConnectionOptionsConnectionSettings;
  /**
  * custom_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#custom_headers Connection#custom_headers}
  */
  readonly customHeaders?: ConnectionOptionsCustomHeaders[] | cdktf.IResolvable;
  /**
  * decryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#decryption_key Connection#decryption_key}
  */
  readonly decryptionKey?: ConnectionOptionsDecryptionKey;
  /**
  * gateway_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#gateway_authentication Connection#gateway_authentication}
  */
  readonly gatewayAuthentication?: ConnectionOptionsGatewayAuthentication;
  /**
  * idp_initiated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#idp_initiated Connection#idp_initiated}
  */
  readonly idpInitiated?: ConnectionOptionsIdpInitiated;
  /**
  * mfa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#mfa Connection#mfa}
  */
  readonly mfa?: ConnectionOptionsMfa;
  /**
  * passkey_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#passkey_options Connection#passkey_options}
  */
  readonly passkeyOptions?: ConnectionOptionsPasskeyOptions;
  /**
  * password_complexity_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#password_complexity_options Connection#password_complexity_options}
  */
  readonly passwordComplexityOptions?: ConnectionOptionsPasswordComplexityOptions;
  /**
  * password_dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#password_dictionary Connection#password_dictionary}
  */
  readonly passwordDictionary?: ConnectionOptionsPasswordDictionary;
  /**
  * password_history block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#password_history Connection#password_history}
  */
  readonly passwordHistory?: ConnectionOptionsPasswordHistory[] | cdktf.IResolvable;
  /**
  * password_no_personal_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#password_no_personal_info Connection#password_no_personal_info}
  */
  readonly passwordNoPersonalInfo?: ConnectionOptionsPasswordNoPersonalInfo;
  /**
  * signing_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#signing_key Connection#signing_key}
  */
  readonly signingKey?: ConnectionOptionsSigningKey;
  /**
  * totp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#totp Connection#totp}
  */
  readonly totp?: ConnectionOptionsTotp;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#validation Connection#validation}
  */
  readonly validation?: ConnectionOptionsValidation;
}

export function connectionOptionsToTerraform(struct?: ConnectionOptionsOutputReference | ConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_url: cdktf.stringToTerraform(struct!.accessTokenUrl),
    adfs_server: cdktf.stringToTerraform(struct!.adfsServer),
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudiences),
    api_enable_users: cdktf.booleanToTerraform(struct!.apiEnableUsers),
    app_id: cdktf.stringToTerraform(struct!.appId),
    auth_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authParams),
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    brute_force_protection: cdktf.booleanToTerraform(struct!.bruteForceProtection),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    community_base_url: cdktf.stringToTerraform(struct!.communityBaseUrl),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret: cdktf.stringToTerraform(struct!.consumerSecret),
    custom_scripts: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customScripts),
    debug: cdktf.booleanToTerraform(struct!.debug),
    digest_algorithm: cdktf.stringToTerraform(struct!.digestAlgorithm),
    disable_cache: cdktf.booleanToTerraform(struct!.disableCache),
    disable_self_service_change_password: cdktf.booleanToTerraform(struct!.disableSelfServiceChangePassword),
    disable_sign_out: cdktf.booleanToTerraform(struct!.disableSignOut),
    disable_signup: cdktf.booleanToTerraform(struct!.disableSignup),
    discovery_url: cdktf.stringToTerraform(struct!.discoveryUrl),
    domain: cdktf.stringToTerraform(struct!.domain),
    domain_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainAliases),
    enable_script_context: cdktf.booleanToTerraform(struct!.enableScriptContext),
    enabled_database_customization: cdktf.booleanToTerraform(struct!.enabledDatabaseCustomization),
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    fed_metadata_xml: cdktf.stringToTerraform(struct!.fedMetadataXml),
    fields_map: cdktf.stringToTerraform(struct!.fieldsMap),
    forward_request_info: cdktf.booleanToTerraform(struct!.forwardRequestInfo),
    from: cdktf.stringToTerraform(struct!.from),
    gateway_url: cdktf.stringToTerraform(struct!.gatewayUrl),
    global_token_revocation_jwt_iss: cdktf.stringToTerraform(struct!.globalTokenRevocationJwtIss),
    global_token_revocation_jwt_sub: cdktf.stringToTerraform(struct!.globalTokenRevocationJwtSub),
    icon_url: cdktf.stringToTerraform(struct!.iconUrl),
    identity_api: cdktf.stringToTerraform(struct!.identityApi),
    import_mode: cdktf.booleanToTerraform(struct!.importMode),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    map_user_id_to_id: cdktf.booleanToTerraform(struct!.mapUserIdToId),
    max_groups_to_retrieve: cdktf.stringToTerraform(struct!.maxGroupsToRetrieve),
    messaging_service_sid: cdktf.stringToTerraform(struct!.messagingServiceSid),
    metadata_url: cdktf.stringToTerraform(struct!.metadataUrl),
    metadata_xml: cdktf.stringToTerraform(struct!.metadataXml),
    name: cdktf.stringToTerraform(struct!.name),
    non_persistent_attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonPersistentAttrs),
    password_policy: cdktf.stringToTerraform(struct!.passwordPolicy),
    ping_federate_base_url: cdktf.stringToTerraform(struct!.pingFederateBaseUrl),
    pkce_enabled: cdktf.booleanToTerraform(struct!.pkceEnabled),
    precedence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.precedence),
    protocol_binding: cdktf.stringToTerraform(struct!.protocolBinding),
    provider: cdktf.stringToTerraform(struct!.provider),
    realm_fallback: cdktf.booleanToTerraform(struct!.realmFallback),
    request_template: cdktf.stringToTerraform(struct!.requestTemplate),
    request_token_url: cdktf.stringToTerraform(struct!.requestTokenUrl),
    requires_username: cdktf.booleanToTerraform(struct!.requiresUsername),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    scripts: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scripts),
    session_key: cdktf.stringToTerraform(struct!.sessionKey),
    set_user_root_attributes: cdktf.stringToTerraform(struct!.setUserRootAttributes),
    should_trust_email_verified_connection: cdktf.stringToTerraform(struct!.shouldTrustEmailVerifiedConnection),
    sign_in_endpoint: cdktf.stringToTerraform(struct!.signInEndpoint),
    sign_out_endpoint: cdktf.stringToTerraform(struct!.signOutEndpoint),
    sign_saml_request: cdktf.booleanToTerraform(struct!.signSamlRequest),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    signature_method: cdktf.stringToTerraform(struct!.signatureMethod),
    signing_cert: cdktf.stringToTerraform(struct!.signingCert),
    strategy_version: cdktf.numberToTerraform(struct!.strategyVersion),
    subject: cdktf.stringToTerraform(struct!.subject),
    syntax: cdktf.stringToTerraform(struct!.syntax),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    template: cdktf.stringToTerraform(struct!.template),
    tenant_domain: cdktf.stringToTerraform(struct!.tenantDomain),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    token_endpoint_auth_method: cdktf.stringToTerraform(struct!.tokenEndpointAuthMethod),
    token_endpoint_auth_signing_alg: cdktf.stringToTerraform(struct!.tokenEndpointAuthSigningAlg),
    twilio_sid: cdktf.stringToTerraform(struct!.twilioSid),
    twilio_token: cdktf.stringToTerraform(struct!.twilioToken),
    type: cdktf.stringToTerraform(struct!.type),
    upstream_params: cdktf.stringToTerraform(struct!.upstreamParams),
    use_cert_auth: cdktf.booleanToTerraform(struct!.useCertAuth),
    use_kerberos: cdktf.booleanToTerraform(struct!.useKerberos),
    use_wsfed: cdktf.booleanToTerraform(struct!.useWsfed),
    user_authorization_url: cdktf.stringToTerraform(struct!.userAuthorizationUrl),
    user_id_attribute: cdktf.stringToTerraform(struct!.userIdAttribute),
    userinfo_endpoint: cdktf.stringToTerraform(struct!.userinfoEndpoint),
    waad_common_endpoint: cdktf.booleanToTerraform(struct!.waadCommonEndpoint),
    waad_protocol: cdktf.stringToTerraform(struct!.waadProtocol),
    attribute_map: connectionOptionsAttributeMapToTerraform(struct!.attributeMap),
    attributes: cdktf.listMapper(connectionOptionsAttributesToTerraform, true)(struct!.attributes),
    authentication_methods: cdktf.listMapper(connectionOptionsAuthenticationMethodsToTerraform, true)(struct!.authenticationMethods),
    connection_settings: connectionOptionsConnectionSettingsToTerraform(struct!.connectionSettings),
    custom_headers: cdktf.listMapper(connectionOptionsCustomHeadersToTerraform, true)(struct!.customHeaders),
    decryption_key: connectionOptionsDecryptionKeyToTerraform(struct!.decryptionKey),
    gateway_authentication: connectionOptionsGatewayAuthenticationToTerraform(struct!.gatewayAuthentication),
    idp_initiated: connectionOptionsIdpInitiatedToTerraform(struct!.idpInitiated),
    mfa: connectionOptionsMfaToTerraform(struct!.mfa),
    passkey_options: connectionOptionsPasskeyOptionsToTerraform(struct!.passkeyOptions),
    password_complexity_options: connectionOptionsPasswordComplexityOptionsToTerraform(struct!.passwordComplexityOptions),
    password_dictionary: connectionOptionsPasswordDictionaryToTerraform(struct!.passwordDictionary),
    password_history: cdktf.listMapper(connectionOptionsPasswordHistoryToTerraform, true)(struct!.passwordHistory),
    password_no_personal_info: connectionOptionsPasswordNoPersonalInfoToTerraform(struct!.passwordNoPersonalInfo),
    signing_key: connectionOptionsSigningKeyToTerraform(struct!.signingKey),
    totp: connectionOptionsTotpToTerraform(struct!.totp),
    validation: connectionOptionsValidationToTerraform(struct!.validation),
  }
}


export function connectionOptionsToHclTerraform(struct?: ConnectionOptionsOutputReference | ConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_url: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adfs_server: {
      value: cdktf.stringToHclTerraform(struct!.adfsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAudiences),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    api_enable_users: {
      value: cdktf.booleanToHclTerraform(struct!.apiEnableUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    brute_force_protection: {
      value: cdktf.booleanToHclTerraform(struct!.bruteForceProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_base_url: {
      value: cdktf.stringToHclTerraform(struct!.communityBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    consumer_key: {
      value: cdktf.stringToHclTerraform(struct!.consumerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_secret: {
      value: cdktf.stringToHclTerraform(struct!.consumerSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_scripts: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customScripts),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    digest_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.digestAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_cache: {
      value: cdktf.booleanToHclTerraform(struct!.disableCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_self_service_change_password: {
      value: cdktf.booleanToHclTerraform(struct!.disableSelfServiceChangePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_sign_out: {
      value: cdktf.booleanToHclTerraform(struct!.disableSignOut),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_signup: {
      value: cdktf.booleanToHclTerraform(struct!.disableSignup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery_url: {
      value: cdktf.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainAliases),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable_script_context: {
      value: cdktf.booleanToHclTerraform(struct!.enableScriptContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled_database_customization: {
      value: cdktf.booleanToHclTerraform(struct!.enabledDatabaseCustomization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fed_metadata_xml: {
      value: cdktf.stringToHclTerraform(struct!.fedMetadataXml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields_map: {
      value: cdktf.stringToHclTerraform(struct!.fieldsMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_request_info: {
      value: cdktf.booleanToHclTerraform(struct!.forwardRequestInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_url: {
      value: cdktf.stringToHclTerraform(struct!.gatewayUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_token_revocation_jwt_iss: {
      value: cdktf.stringToHclTerraform(struct!.globalTokenRevocationJwtIss),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_token_revocation_jwt_sub: {
      value: cdktf.stringToHclTerraform(struct!.globalTokenRevocationJwtSub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_url: {
      value: cdktf.stringToHclTerraform(struct!.iconUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_api: {
      value: cdktf.stringToHclTerraform(struct!.identityApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_mode: {
      value: cdktf.booleanToHclTerraform(struct!.importMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    map_user_id_to_id: {
      value: cdktf.booleanToHclTerraform(struct!.mapUserIdToId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_groups_to_retrieve: {
      value: cdktf.stringToHclTerraform(struct!.maxGroupsToRetrieve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    messaging_service_sid: {
      value: cdktf.stringToHclTerraform(struct!.messagingServiceSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.metadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_xml: {
      value: cdktf.stringToHclTerraform(struct!.metadataXml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_persistent_attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonPersistentAttrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password_policy: {
      value: cdktf.stringToHclTerraform(struct!.passwordPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_federate_base_url: {
      value: cdktf.stringToHclTerraform(struct!.pingFederateBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkce_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pkceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    precedence: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.precedence),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol_binding: {
      value: cdktf.stringToHclTerraform(struct!.protocolBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.realmFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_template: {
      value: cdktf.stringToHclTerraform(struct!.requestTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_token_url: {
      value: cdktf.stringToHclTerraform(struct!.requestTokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requires_username: {
      value: cdktf.booleanToHclTerraform(struct!.requiresUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scripts: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.scripts),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    session_key: {
      value: cdktf.stringToHclTerraform(struct!.sessionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_user_root_attributes: {
      value: cdktf.stringToHclTerraform(struct!.setUserRootAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_trust_email_verified_connection: {
      value: cdktf.stringToHclTerraform(struct!.shouldTrustEmailVerifiedConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_in_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.signInEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_out_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.signOutEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_saml_request: {
      value: cdktf.booleanToHclTerraform(struct!.signSamlRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_method: {
      value: cdktf.stringToHclTerraform(struct!.signatureMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_cert: {
      value: cdktf.stringToHclTerraform(struct!.signingCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_version: {
      value: cdktf.numberToHclTerraform(struct!.strategyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syntax: {
      value: cdktf.stringToHclTerraform(struct!.syntax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
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
    tenant_domain: {
      value: cdktf.stringToHclTerraform(struct!.tenantDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint_auth_method: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpointAuthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint_auth_signing_alg: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpointAuthSigningAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    twilio_sid: {
      value: cdktf.stringToHclTerraform(struct!.twilioSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    twilio_token: {
      value: cdktf.stringToHclTerraform(struct!.twilioToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_params: {
      value: cdktf.stringToHclTerraform(struct!.upstreamParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cert_auth: {
      value: cdktf.booleanToHclTerraform(struct!.useCertAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_kerberos: {
      value: cdktf.booleanToHclTerraform(struct!.useKerberos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_wsfed: {
      value: cdktf.booleanToHclTerraform(struct!.useWsfed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_authorization_url: {
      value: cdktf.stringToHclTerraform(struct!.userAuthorizationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id_attribute: {
      value: cdktf.stringToHclTerraform(struct!.userIdAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userinfo_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.userinfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waad_common_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.waadCommonEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    waad_protocol: {
      value: cdktf.stringToHclTerraform(struct!.waadProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_map: {
      value: connectionOptionsAttributeMapToHclTerraform(struct!.attributeMap),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributeMapList",
    },
    attributes: {
      value: cdktf.listMapperHcl(connectionOptionsAttributesToHclTerraform, true)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAttributesList",
    },
    authentication_methods: {
      value: cdktf.listMapperHcl(connectionOptionsAuthenticationMethodsToHclTerraform, true)(struct!.authenticationMethods),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsAuthenticationMethodsList",
    },
    connection_settings: {
      value: connectionOptionsConnectionSettingsToHclTerraform(struct!.connectionSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsConnectionSettingsList",
    },
    custom_headers: {
      value: cdktf.listMapperHcl(connectionOptionsCustomHeadersToHclTerraform, true)(struct!.customHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "ConnectionOptionsCustomHeadersList",
    },
    decryption_key: {
      value: connectionOptionsDecryptionKeyToHclTerraform(struct!.decryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsDecryptionKeyList",
    },
    gateway_authentication: {
      value: connectionOptionsGatewayAuthenticationToHclTerraform(struct!.gatewayAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsGatewayAuthenticationList",
    },
    idp_initiated: {
      value: connectionOptionsIdpInitiatedToHclTerraform(struct!.idpInitiated),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsIdpInitiatedList",
    },
    mfa: {
      value: connectionOptionsMfaToHclTerraform(struct!.mfa),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsMfaList",
    },
    passkey_options: {
      value: connectionOptionsPasskeyOptionsToHclTerraform(struct!.passkeyOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsPasskeyOptionsList",
    },
    password_complexity_options: {
      value: connectionOptionsPasswordComplexityOptionsToHclTerraform(struct!.passwordComplexityOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsPasswordComplexityOptionsList",
    },
    password_dictionary: {
      value: connectionOptionsPasswordDictionaryToHclTerraform(struct!.passwordDictionary),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsPasswordDictionaryList",
    },
    password_history: {
      value: cdktf.listMapperHcl(connectionOptionsPasswordHistoryToHclTerraform, true)(struct!.passwordHistory),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsPasswordHistoryList",
    },
    password_no_personal_info: {
      value: connectionOptionsPasswordNoPersonalInfoToHclTerraform(struct!.passwordNoPersonalInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsPasswordNoPersonalInfoList",
    },
    signing_key: {
      value: connectionOptionsSigningKeyToHclTerraform(struct!.signingKey),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsSigningKeyList",
    },
    totp: {
      value: connectionOptionsTotpToHclTerraform(struct!.totp),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsTotpList",
    },
    validation: {
      value: connectionOptionsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenUrl = this._accessTokenUrl;
    }
    if (this._adfsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.adfsServer = this._adfsServer;
    }
    if (this._allowedAudiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudiences = this._allowedAudiences;
    }
    if (this._apiEnableUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEnableUsers = this._apiEnableUsers;
    }
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._authParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authParams = this._authParams;
    }
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._bruteForceProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.bruteForceProtection = this._bruteForceProtection;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._communityBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityBaseUrl = this._communityBaseUrl;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._consumerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerKey = this._consumerKey;
    }
    if (this._consumerSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerSecret = this._consumerSecret;
    }
    if (this._customScripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.customScripts = this._customScripts;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._digestAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.digestAlgorithm = this._digestAlgorithm;
    }
    if (this._disableCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCache = this._disableCache;
    }
    if (this._disableSelfServiceChangePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSelfServiceChangePassword = this._disableSelfServiceChangePassword;
    }
    if (this._disableSignOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSignOut = this._disableSignOut;
    }
    if (this._disableSignup !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSignup = this._disableSignup;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._domainAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAliases = this._domainAliases;
    }
    if (this._enableScriptContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableScriptContext = this._enableScriptContext;
    }
    if (this._enabledDatabaseCustomization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledDatabaseCustomization = this._enabledDatabaseCustomization;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._fedMetadataXml !== undefined) {
      hasAnyValues = true;
      internalValueResult.fedMetadataXml = this._fedMetadataXml;
    }
    if (this._fieldsMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsMap = this._fieldsMap;
    }
    if (this._forwardRequestInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardRequestInfo = this._forwardRequestInfo;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._gatewayUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayUrl = this._gatewayUrl;
    }
    if (this._globalTokenRevocationJwtIss !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalTokenRevocationJwtIss = this._globalTokenRevocationJwtIss;
    }
    if (this._globalTokenRevocationJwtSub !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalTokenRevocationJwtSub = this._globalTokenRevocationJwtSub;
    }
    if (this._iconUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUrl = this._iconUrl;
    }
    if (this._identityApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityApi = this._identityApi;
    }
    if (this._importMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.importMode = this._importMode;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._mapUserIdToId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapUserIdToId = this._mapUserIdToId;
    }
    if (this._maxGroupsToRetrieve !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGroupsToRetrieve = this._maxGroupsToRetrieve;
    }
    if (this._messagingServiceSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagingServiceSid = this._messagingServiceSid;
    }
    if (this._metadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataUrl = this._metadataUrl;
    }
    if (this._metadataXml !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataXml = this._metadataXml;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nonPersistentAttrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonPersistentAttrs = this._nonPersistentAttrs;
    }
    if (this._passwordPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordPolicy = this._passwordPolicy;
    }
    if (this._pingFederateBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingFederateBaseUrl = this._pingFederateBaseUrl;
    }
    if (this._pkceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkceEnabled = this._pkceEnabled;
    }
    if (this._precedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.precedence = this._precedence;
    }
    if (this._protocolBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolBinding = this._protocolBinding;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._realmFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmFallback = this._realmFallback;
    }
    if (this._requestTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTemplate = this._requestTemplate;
    }
    if (this._requestTokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTokenUrl = this._requestTokenUrl;
    }
    if (this._requiresUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiresUsername = this._requiresUsername;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._scripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.scripts = this._scripts;
    }
    if (this._sessionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionKey = this._sessionKey;
    }
    if (this._setUserRootAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.setUserRootAttributes = this._setUserRootAttributes;
    }
    if (this._shouldTrustEmailVerifiedConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTrustEmailVerifiedConnection = this._shouldTrustEmailVerifiedConnection;
    }
    if (this._signInEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInEndpoint = this._signInEndpoint;
    }
    if (this._signOutEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.signOutEndpoint = this._signOutEndpoint;
    }
    if (this._signSamlRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.signSamlRequest = this._signSamlRequest;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._signatureMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureMethod = this._signatureMethod;
    }
    if (this._signingCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingCert = this._signingCert;
    }
    if (this._strategyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyVersion = this._strategyVersion;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._syntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntax = this._syntax;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._tenantDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantDomain = this._tenantDomain;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._tokenEndpointAuthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointAuthMethod = this._tokenEndpointAuthMethod;
    }
    if (this._tokenEndpointAuthSigningAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointAuthSigningAlg = this._tokenEndpointAuthSigningAlg;
    }
    if (this._twilioSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioSid = this._twilioSid;
    }
    if (this._twilioToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioToken = this._twilioToken;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._upstreamParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamParams = this._upstreamParams;
    }
    if (this._useCertAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCertAuth = this._useCertAuth;
    }
    if (this._useKerberos !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKerberos = this._useKerberos;
    }
    if (this._useWsfed !== undefined) {
      hasAnyValues = true;
      internalValueResult.useWsfed = this._useWsfed;
    }
    if (this._userAuthorizationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAuthorizationUrl = this._userAuthorizationUrl;
    }
    if (this._userIdAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdAttribute = this._userIdAttribute;
    }
    if (this._userinfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoEndpoint = this._userinfoEndpoint;
    }
    if (this._waadCommonEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.waadCommonEndpoint = this._waadCommonEndpoint;
    }
    if (this._waadProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.waadProtocol = this._waadProtocol;
    }
    if (this._attributeMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMap = this._attributeMap?.internalValue;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._authenticationMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethods = this._authenticationMethods?.internalValue;
    }
    if (this._connectionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionSettings = this._connectionSettings?.internalValue;
    }
    if (this._customHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaders = this._customHeaders?.internalValue;
    }
    if (this._decryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionKey = this._decryptionKey?.internalValue;
    }
    if (this._gatewayAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayAuthentication = this._gatewayAuthentication?.internalValue;
    }
    if (this._idpInitiated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpInitiated = this._idpInitiated?.internalValue;
    }
    if (this._mfa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfa = this._mfa?.internalValue;
    }
    if (this._passkeyOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passkeyOptions = this._passkeyOptions?.internalValue;
    }
    if (this._passwordComplexityOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordComplexityOptions = this._passwordComplexityOptions?.internalValue;
    }
    if (this._passwordDictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordDictionary = this._passwordDictionary?.internalValue;
    }
    if (this._passwordHistory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordHistory = this._passwordHistory?.internalValue;
    }
    if (this._passwordNoPersonalInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordNoPersonalInfo = this._passwordNoPersonalInfo?.internalValue;
    }
    if (this._signingKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingKey = this._signingKey?.internalValue;
    }
    if (this._totp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totp = this._totp?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokenUrl = undefined;
      this._adfsServer = undefined;
      this._allowedAudiences = undefined;
      this._apiEnableUsers = undefined;
      this._appId = undefined;
      this._authParams = undefined;
      this._authorizationEndpoint = undefined;
      this._bruteForceProtection = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._communityBaseUrl = undefined;
      this._configuration = undefined;
      this._consumerKey = undefined;
      this._consumerSecret = undefined;
      this._customScripts = undefined;
      this._debug = undefined;
      this._digestAlgorithm = undefined;
      this._disableCache = undefined;
      this._disableSelfServiceChangePassword = undefined;
      this._disableSignOut = undefined;
      this._disableSignup = undefined;
      this._discoveryUrl = undefined;
      this._domain = undefined;
      this._domainAliases = undefined;
      this._enableScriptContext = undefined;
      this._enabledDatabaseCustomization = undefined;
      this._entityId = undefined;
      this._fedMetadataXml = undefined;
      this._fieldsMap = undefined;
      this._forwardRequestInfo = undefined;
      this._from = undefined;
      this._gatewayUrl = undefined;
      this._globalTokenRevocationJwtIss = undefined;
      this._globalTokenRevocationJwtSub = undefined;
      this._iconUrl = undefined;
      this._identityApi = undefined;
      this._importMode = undefined;
      this._ips = undefined;
      this._issuer = undefined;
      this._jwksUri = undefined;
      this._keyId = undefined;
      this._mapUserIdToId = undefined;
      this._maxGroupsToRetrieve = undefined;
      this._messagingServiceSid = undefined;
      this._metadataUrl = undefined;
      this._metadataXml = undefined;
      this._name = undefined;
      this._nonPersistentAttrs = undefined;
      this._passwordPolicy = undefined;
      this._pingFederateBaseUrl = undefined;
      this._pkceEnabled = undefined;
      this._precedence = undefined;
      this._protocolBinding = undefined;
      this._provider = undefined;
      this._realmFallback = undefined;
      this._requestTemplate = undefined;
      this._requestTokenUrl = undefined;
      this._requiresUsername = undefined;
      this._scopes = undefined;
      this._scripts = undefined;
      this._sessionKey = undefined;
      this._setUserRootAttributes = undefined;
      this._shouldTrustEmailVerifiedConnection = undefined;
      this._signInEndpoint = undefined;
      this._signOutEndpoint = undefined;
      this._signSamlRequest = undefined;
      this._signatureAlgorithm = undefined;
      this._signatureMethod = undefined;
      this._signingCert = undefined;
      this._strategyVersion = undefined;
      this._subject = undefined;
      this._syntax = undefined;
      this._teamId = undefined;
      this._template = undefined;
      this._tenantDomain = undefined;
      this._tokenEndpoint = undefined;
      this._tokenEndpointAuthMethod = undefined;
      this._tokenEndpointAuthSigningAlg = undefined;
      this._twilioSid = undefined;
      this._twilioToken = undefined;
      this._type = undefined;
      this._upstreamParams = undefined;
      this._useCertAuth = undefined;
      this._useKerberos = undefined;
      this._useWsfed = undefined;
      this._userAuthorizationUrl = undefined;
      this._userIdAttribute = undefined;
      this._userinfoEndpoint = undefined;
      this._waadCommonEndpoint = undefined;
      this._waadProtocol = undefined;
      this._attributeMap.internalValue = undefined;
      this._attributes.internalValue = undefined;
      this._authenticationMethods.internalValue = undefined;
      this._connectionSettings.internalValue = undefined;
      this._customHeaders.internalValue = undefined;
      this._decryptionKey.internalValue = undefined;
      this._gatewayAuthentication.internalValue = undefined;
      this._idpInitiated.internalValue = undefined;
      this._mfa.internalValue = undefined;
      this._passkeyOptions.internalValue = undefined;
      this._passwordComplexityOptions.internalValue = undefined;
      this._passwordDictionary.internalValue = undefined;
      this._passwordHistory.internalValue = undefined;
      this._passwordNoPersonalInfo.internalValue = undefined;
      this._signingKey.internalValue = undefined;
      this._totp.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokenUrl = value.accessTokenUrl;
      this._adfsServer = value.adfsServer;
      this._allowedAudiences = value.allowedAudiences;
      this._apiEnableUsers = value.apiEnableUsers;
      this._appId = value.appId;
      this._authParams = value.authParams;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._bruteForceProtection = value.bruteForceProtection;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._communityBaseUrl = value.communityBaseUrl;
      this._configuration = value.configuration;
      this._consumerKey = value.consumerKey;
      this._consumerSecret = value.consumerSecret;
      this._customScripts = value.customScripts;
      this._debug = value.debug;
      this._digestAlgorithm = value.digestAlgorithm;
      this._disableCache = value.disableCache;
      this._disableSelfServiceChangePassword = value.disableSelfServiceChangePassword;
      this._disableSignOut = value.disableSignOut;
      this._disableSignup = value.disableSignup;
      this._discoveryUrl = value.discoveryUrl;
      this._domain = value.domain;
      this._domainAliases = value.domainAliases;
      this._enableScriptContext = value.enableScriptContext;
      this._enabledDatabaseCustomization = value.enabledDatabaseCustomization;
      this._entityId = value.entityId;
      this._fedMetadataXml = value.fedMetadataXml;
      this._fieldsMap = value.fieldsMap;
      this._forwardRequestInfo = value.forwardRequestInfo;
      this._from = value.from;
      this._gatewayUrl = value.gatewayUrl;
      this._globalTokenRevocationJwtIss = value.globalTokenRevocationJwtIss;
      this._globalTokenRevocationJwtSub = value.globalTokenRevocationJwtSub;
      this._iconUrl = value.iconUrl;
      this._identityApi = value.identityApi;
      this._importMode = value.importMode;
      this._ips = value.ips;
      this._issuer = value.issuer;
      this._jwksUri = value.jwksUri;
      this._keyId = value.keyId;
      this._mapUserIdToId = value.mapUserIdToId;
      this._maxGroupsToRetrieve = value.maxGroupsToRetrieve;
      this._messagingServiceSid = value.messagingServiceSid;
      this._metadataUrl = value.metadataUrl;
      this._metadataXml = value.metadataXml;
      this._name = value.name;
      this._nonPersistentAttrs = value.nonPersistentAttrs;
      this._passwordPolicy = value.passwordPolicy;
      this._pingFederateBaseUrl = value.pingFederateBaseUrl;
      this._pkceEnabled = value.pkceEnabled;
      this._precedence = value.precedence;
      this._protocolBinding = value.protocolBinding;
      this._provider = value.provider;
      this._realmFallback = value.realmFallback;
      this._requestTemplate = value.requestTemplate;
      this._requestTokenUrl = value.requestTokenUrl;
      this._requiresUsername = value.requiresUsername;
      this._scopes = value.scopes;
      this._scripts = value.scripts;
      this._sessionKey = value.sessionKey;
      this._setUserRootAttributes = value.setUserRootAttributes;
      this._shouldTrustEmailVerifiedConnection = value.shouldTrustEmailVerifiedConnection;
      this._signInEndpoint = value.signInEndpoint;
      this._signOutEndpoint = value.signOutEndpoint;
      this._signSamlRequest = value.signSamlRequest;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._signatureMethod = value.signatureMethod;
      this._signingCert = value.signingCert;
      this._strategyVersion = value.strategyVersion;
      this._subject = value.subject;
      this._syntax = value.syntax;
      this._teamId = value.teamId;
      this._template = value.template;
      this._tenantDomain = value.tenantDomain;
      this._tokenEndpoint = value.tokenEndpoint;
      this._tokenEndpointAuthMethod = value.tokenEndpointAuthMethod;
      this._tokenEndpointAuthSigningAlg = value.tokenEndpointAuthSigningAlg;
      this._twilioSid = value.twilioSid;
      this._twilioToken = value.twilioToken;
      this._type = value.type;
      this._upstreamParams = value.upstreamParams;
      this._useCertAuth = value.useCertAuth;
      this._useKerberos = value.useKerberos;
      this._useWsfed = value.useWsfed;
      this._userAuthorizationUrl = value.userAuthorizationUrl;
      this._userIdAttribute = value.userIdAttribute;
      this._userinfoEndpoint = value.userinfoEndpoint;
      this._waadCommonEndpoint = value.waadCommonEndpoint;
      this._waadProtocol = value.waadProtocol;
      this._attributeMap.internalValue = value.attributeMap;
      this._attributes.internalValue = value.attributes;
      this._authenticationMethods.internalValue = value.authenticationMethods;
      this._connectionSettings.internalValue = value.connectionSettings;
      this._customHeaders.internalValue = value.customHeaders;
      this._decryptionKey.internalValue = value.decryptionKey;
      this._gatewayAuthentication.internalValue = value.gatewayAuthentication;
      this._idpInitiated.internalValue = value.idpInitiated;
      this._mfa.internalValue = value.mfa;
      this._passkeyOptions.internalValue = value.passkeyOptions;
      this._passwordComplexityOptions.internalValue = value.passwordComplexityOptions;
      this._passwordDictionary.internalValue = value.passwordDictionary;
      this._passwordHistory.internalValue = value.passwordHistory;
      this._passwordNoPersonalInfo.internalValue = value.passwordNoPersonalInfo;
      this._signingKey.internalValue = value.signingKey;
      this._totp.internalValue = value.totp;
      this._validation.internalValue = value.validation;
    }
  }

  // access_token_url - computed: false, optional: true, required: false
  private _accessTokenUrl?: string; 
  public get accessTokenUrl() {
    return this.getStringAttribute('access_token_url');
  }
  public set accessTokenUrl(value: string) {
    this._accessTokenUrl = value;
  }
  public resetAccessTokenUrl() {
    this._accessTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenUrlInput() {
    return this._accessTokenUrl;
  }

  // adfs_server - computed: false, optional: true, required: false
  private _adfsServer?: string; 
  public get adfsServer() {
    return this.getStringAttribute('adfs_server');
  }
  public set adfsServer(value: string) {
    this._adfsServer = value;
  }
  public resetAdfsServer() {
    this._adfsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsServerInput() {
    return this._adfsServer;
  }

  // allowed_audiences - computed: true, optional: true, required: false
  private _allowedAudiences?: string[]; 
  public get allowedAudiences() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_audiences'));
  }
  public set allowedAudiences(value: string[]) {
    this._allowedAudiences = value;
  }
  public resetAllowedAudiences() {
    this._allowedAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudiencesInput() {
    return this._allowedAudiences;
  }

  // api_enable_users - computed: false, optional: true, required: false
  private _apiEnableUsers?: boolean | cdktf.IResolvable; 
  public get apiEnableUsers() {
    return this.getBooleanAttribute('api_enable_users');
  }
  public set apiEnableUsers(value: boolean | cdktf.IResolvable) {
    this._apiEnableUsers = value;
  }
  public resetApiEnableUsers() {
    this._apiEnableUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEnableUsersInput() {
    return this._apiEnableUsers;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // auth_params - computed: false, optional: true, required: false
  private _authParams?: { [key: string]: string }; 
  public get authParams() {
    return this.getStringMapAttribute('auth_params');
  }
  public set authParams(value: { [key: string]: string }) {
    this._authParams = value;
  }
  public resetAuthParams() {
    this._authParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authParamsInput() {
    return this._authParams;
  }

  // authorization_endpoint - computed: true, optional: true, required: false
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  public resetAuthorizationEndpoint() {
    this._authorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // brute_force_protection - computed: false, optional: true, required: false
  private _bruteForceProtection?: boolean | cdktf.IResolvable; 
  public get bruteForceProtection() {
    return this.getBooleanAttribute('brute_force_protection');
  }
  public set bruteForceProtection(value: boolean | cdktf.IResolvable) {
    this._bruteForceProtection = value;
  }
  public resetBruteForceProtection() {
    this._bruteForceProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bruteForceProtectionInput() {
    return this._bruteForceProtection;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // community_base_url - computed: false, optional: true, required: false
  private _communityBaseUrl?: string; 
  public get communityBaseUrl() {
    return this.getStringAttribute('community_base_url');
  }
  public set communityBaseUrl(value: string) {
    this._communityBaseUrl = value;
  }
  public resetCommunityBaseUrl() {
    this._communityBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityBaseUrlInput() {
    return this._communityBaseUrl;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // consumer_key - computed: false, optional: true, required: false
  private _consumerKey?: string; 
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }
  public set consumerKey(value: string) {
    this._consumerKey = value;
  }
  public resetConsumerKey() {
    this._consumerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey;
  }

  // consumer_secret - computed: false, optional: true, required: false
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }
  public set consumerSecret(value: string) {
    this._consumerSecret = value;
  }
  public resetConsumerSecret() {
    this._consumerSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret;
  }

  // custom_scripts - computed: false, optional: true, required: false
  private _customScripts?: { [key: string]: string }; 
  public get customScripts() {
    return this.getStringMapAttribute('custom_scripts');
  }
  public set customScripts(value: { [key: string]: string }) {
    this._customScripts = value;
  }
  public resetCustomScripts() {
    this._customScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customScriptsInput() {
    return this._customScripts;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // digest_algorithm - computed: false, optional: true, required: false
  private _digestAlgorithm?: string; 
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }
  public set digestAlgorithm(value: string) {
    this._digestAlgorithm = value;
  }
  public resetDigestAlgorithm() {
    this._digestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAlgorithmInput() {
    return this._digestAlgorithm;
  }

  // disable_cache - computed: false, optional: true, required: false
  private _disableCache?: boolean | cdktf.IResolvable; 
  public get disableCache() {
    return this.getBooleanAttribute('disable_cache');
  }
  public set disableCache(value: boolean | cdktf.IResolvable) {
    this._disableCache = value;
  }
  public resetDisableCache() {
    this._disableCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCacheInput() {
    return this._disableCache;
  }

  // disable_self_service_change_password - computed: false, optional: true, required: false
  private _disableSelfServiceChangePassword?: boolean | cdktf.IResolvable; 
  public get disableSelfServiceChangePassword() {
    return this.getBooleanAttribute('disable_self_service_change_password');
  }
  public set disableSelfServiceChangePassword(value: boolean | cdktf.IResolvable) {
    this._disableSelfServiceChangePassword = value;
  }
  public resetDisableSelfServiceChangePassword() {
    this._disableSelfServiceChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSelfServiceChangePasswordInput() {
    return this._disableSelfServiceChangePassword;
  }

  // disable_sign_out - computed: false, optional: true, required: false
  private _disableSignOut?: boolean | cdktf.IResolvable; 
  public get disableSignOut() {
    return this.getBooleanAttribute('disable_sign_out');
  }
  public set disableSignOut(value: boolean | cdktf.IResolvable) {
    this._disableSignOut = value;
  }
  public resetDisableSignOut() {
    this._disableSignOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSignOutInput() {
    return this._disableSignOut;
  }

  // disable_signup - computed: false, optional: true, required: false
  private _disableSignup?: boolean | cdktf.IResolvable; 
  public get disableSignup() {
    return this.getBooleanAttribute('disable_signup');
  }
  public set disableSignup(value: boolean | cdktf.IResolvable) {
    this._disableSignup = value;
  }
  public resetDisableSignup() {
    this._disableSignup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSignupInput() {
    return this._disableSignup;
  }

  // discovery_url - computed: false, optional: true, required: false
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  public resetDiscoveryUrl() {
    this._discoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_aliases - computed: true, optional: true, required: false
  private _domainAliases?: string[]; 
  public get domainAliases() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_aliases'));
  }
  public set domainAliases(value: string[]) {
    this._domainAliases = value;
  }
  public resetDomainAliases() {
    this._domainAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAliasesInput() {
    return this._domainAliases;
  }

  // enable_script_context - computed: false, optional: true, required: false
  private _enableScriptContext?: boolean | cdktf.IResolvable; 
  public get enableScriptContext() {
    return this.getBooleanAttribute('enable_script_context');
  }
  public set enableScriptContext(value: boolean | cdktf.IResolvable) {
    this._enableScriptContext = value;
  }
  public resetEnableScriptContext() {
    this._enableScriptContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScriptContextInput() {
    return this._enableScriptContext;
  }

  // enabled_database_customization - computed: false, optional: true, required: false
  private _enabledDatabaseCustomization?: boolean | cdktf.IResolvable; 
  public get enabledDatabaseCustomization() {
    return this.getBooleanAttribute('enabled_database_customization');
  }
  public set enabledDatabaseCustomization(value: boolean | cdktf.IResolvable) {
    this._enabledDatabaseCustomization = value;
  }
  public resetEnabledDatabaseCustomization() {
    this._enabledDatabaseCustomization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledDatabaseCustomizationInput() {
    return this._enabledDatabaseCustomization;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // fed_metadata_xml - computed: false, optional: true, required: false
  private _fedMetadataXml?: string; 
  public get fedMetadataXml() {
    return this.getStringAttribute('fed_metadata_xml');
  }
  public set fedMetadataXml(value: string) {
    this._fedMetadataXml = value;
  }
  public resetFedMetadataXml() {
    this._fedMetadataXml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fedMetadataXmlInput() {
    return this._fedMetadataXml;
  }

  // fields_map - computed: false, optional: true, required: false
  private _fieldsMap?: string; 
  public get fieldsMap() {
    return this.getStringAttribute('fields_map');
  }
  public set fieldsMap(value: string) {
    this._fieldsMap = value;
  }
  public resetFieldsMap() {
    this._fieldsMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsMapInput() {
    return this._fieldsMap;
  }

  // forward_request_info - computed: false, optional: true, required: false
  private _forwardRequestInfo?: boolean | cdktf.IResolvable; 
  public get forwardRequestInfo() {
    return this.getBooleanAttribute('forward_request_info');
  }
  public set forwardRequestInfo(value: boolean | cdktf.IResolvable) {
    this._forwardRequestInfo = value;
  }
  public resetForwardRequestInfo() {
    this._forwardRequestInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardRequestInfoInput() {
    return this._forwardRequestInfo;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // gateway_url - computed: false, optional: true, required: false
  private _gatewayUrl?: string; 
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
  }
  public set gatewayUrl(value: string) {
    this._gatewayUrl = value;
  }
  public resetGatewayUrl() {
    this._gatewayUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUrlInput() {
    return this._gatewayUrl;
  }

  // global_token_revocation_jwt_iss - computed: false, optional: true, required: false
  private _globalTokenRevocationJwtIss?: string; 
  public get globalTokenRevocationJwtIss() {
    return this.getStringAttribute('global_token_revocation_jwt_iss');
  }
  public set globalTokenRevocationJwtIss(value: string) {
    this._globalTokenRevocationJwtIss = value;
  }
  public resetGlobalTokenRevocationJwtIss() {
    this._globalTokenRevocationJwtIss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTokenRevocationJwtIssInput() {
    return this._globalTokenRevocationJwtIss;
  }

  // global_token_revocation_jwt_sub - computed: false, optional: true, required: false
  private _globalTokenRevocationJwtSub?: string; 
  public get globalTokenRevocationJwtSub() {
    return this.getStringAttribute('global_token_revocation_jwt_sub');
  }
  public set globalTokenRevocationJwtSub(value: string) {
    this._globalTokenRevocationJwtSub = value;
  }
  public resetGlobalTokenRevocationJwtSub() {
    this._globalTokenRevocationJwtSub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTokenRevocationJwtSubInput() {
    return this._globalTokenRevocationJwtSub;
  }

  // icon_url - computed: false, optional: true, required: false
  private _iconUrl?: string; 
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
  public set iconUrl(value: string) {
    this._iconUrl = value;
  }
  public resetIconUrl() {
    this._iconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUrlInput() {
    return this._iconUrl;
  }

  // identity_api - computed: false, optional: true, required: false
  private _identityApi?: string; 
  public get identityApi() {
    return this.getStringAttribute('identity_api');
  }
  public set identityApi(value: string) {
    this._identityApi = value;
  }
  public resetIdentityApi() {
    this._identityApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityApiInput() {
    return this._identityApi;
  }

  // import_mode - computed: false, optional: true, required: false
  private _importMode?: boolean | cdktf.IResolvable; 
  public get importMode() {
    return this.getBooleanAttribute('import_mode');
  }
  public set importMode(value: boolean | cdktf.IResolvable) {
    this._importMode = value;
  }
  public resetImportMode() {
    this._importMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importModeInput() {
    return this._importMode;
  }

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
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

  // jwks_uri - computed: true, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // map_user_id_to_id - computed: true, optional: true, required: false
  private _mapUserIdToId?: boolean | cdktf.IResolvable; 
  public get mapUserIdToId() {
    return this.getBooleanAttribute('map_user_id_to_id');
  }
  public set mapUserIdToId(value: boolean | cdktf.IResolvable) {
    this._mapUserIdToId = value;
  }
  public resetMapUserIdToId() {
    this._mapUserIdToId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapUserIdToIdInput() {
    return this._mapUserIdToId;
  }

  // max_groups_to_retrieve - computed: false, optional: true, required: false
  private _maxGroupsToRetrieve?: string; 
  public get maxGroupsToRetrieve() {
    return this.getStringAttribute('max_groups_to_retrieve');
  }
  public set maxGroupsToRetrieve(value: string) {
    this._maxGroupsToRetrieve = value;
  }
  public resetMaxGroupsToRetrieve() {
    this._maxGroupsToRetrieve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGroupsToRetrieveInput() {
    return this._maxGroupsToRetrieve;
  }

  // messaging_service_sid - computed: false, optional: true, required: false
  private _messagingServiceSid?: string; 
  public get messagingServiceSid() {
    return this.getStringAttribute('messaging_service_sid');
  }
  public set messagingServiceSid(value: string) {
    this._messagingServiceSid = value;
  }
  public resetMessagingServiceSid() {
    this._messagingServiceSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingServiceSidInput() {
    return this._messagingServiceSid;
  }

  // metadata_url - computed: false, optional: true, required: false
  private _metadataUrl?: string; 
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }
  public set metadataUrl(value: string) {
    this._metadataUrl = value;
  }
  public resetMetadataUrl() {
    this._metadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataUrlInput() {
    return this._metadataUrl;
  }

  // metadata_xml - computed: false, optional: true, required: false
  private _metadataXml?: string; 
  public get metadataXml() {
    return this.getStringAttribute('metadata_xml');
  }
  public set metadataXml(value: string) {
    this._metadataXml = value;
  }
  public resetMetadataXml() {
    this._metadataXml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataXmlInput() {
    return this._metadataXml;
  }

  // name - computed: false, optional: true, required: false
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

  // non_persistent_attrs - computed: true, optional: true, required: false
  private _nonPersistentAttrs?: string[]; 
  public get nonPersistentAttrs() {
    return cdktf.Fn.tolist(this.getListAttribute('non_persistent_attrs'));
  }
  public set nonPersistentAttrs(value: string[]) {
    this._nonPersistentAttrs = value;
  }
  public resetNonPersistentAttrs() {
    this._nonPersistentAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonPersistentAttrsInput() {
    return this._nonPersistentAttrs;
  }

  // password_policy - computed: true, optional: true, required: false
  private _passwordPolicy?: string; 
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }
  public set passwordPolicy(value: string) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy;
  }

  // ping_federate_base_url - computed: false, optional: true, required: false
  private _pingFederateBaseUrl?: string; 
  public get pingFederateBaseUrl() {
    return this.getStringAttribute('ping_federate_base_url');
  }
  public set pingFederateBaseUrl(value: string) {
    this._pingFederateBaseUrl = value;
  }
  public resetPingFederateBaseUrl() {
    this._pingFederateBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingFederateBaseUrlInput() {
    return this._pingFederateBaseUrl;
  }

  // pkce_enabled - computed: false, optional: true, required: false
  private _pkceEnabled?: boolean | cdktf.IResolvable; 
  public get pkceEnabled() {
    return this.getBooleanAttribute('pkce_enabled');
  }
  public set pkceEnabled(value: boolean | cdktf.IResolvable) {
    this._pkceEnabled = value;
  }
  public resetPkceEnabled() {
    this._pkceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceEnabledInput() {
    return this._pkceEnabled;
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: string[]; 
  public get precedence() {
    return this.getListAttribute('precedence');
  }
  public set precedence(value: string[]) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // protocol_binding - computed: false, optional: true, required: false
  private _protocolBinding?: string; 
  public get protocolBinding() {
    return this.getStringAttribute('protocol_binding');
  }
  public set protocolBinding(value: string) {
    this._protocolBinding = value;
  }
  public resetProtocolBinding() {
    this._protocolBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolBindingInput() {
    return this._protocolBinding;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // realm_fallback - computed: false, optional: true, required: false
  private _realmFallback?: boolean | cdktf.IResolvable; 
  public get realmFallback() {
    return this.getBooleanAttribute('realm_fallback');
  }
  public set realmFallback(value: boolean | cdktf.IResolvable) {
    this._realmFallback = value;
  }
  public resetRealmFallback() {
    this._realmFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmFallbackInput() {
    return this._realmFallback;
  }

  // request_template - computed: false, optional: true, required: false
  private _requestTemplate?: string; 
  public get requestTemplate() {
    return this.getStringAttribute('request_template');
  }
  public set requestTemplate(value: string) {
    this._requestTemplate = value;
  }
  public resetRequestTemplate() {
    this._requestTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateInput() {
    return this._requestTemplate;
  }

  // request_token_url - computed: false, optional: true, required: false
  private _requestTokenUrl?: string; 
  public get requestTokenUrl() {
    return this.getStringAttribute('request_token_url');
  }
  public set requestTokenUrl(value: string) {
    this._requestTokenUrl = value;
  }
  public resetRequestTokenUrl() {
    this._requestTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTokenUrlInput() {
    return this._requestTokenUrl;
  }

  // requires_username - computed: false, optional: true, required: false
  private _requiresUsername?: boolean | cdktf.IResolvable; 
  public get requiresUsername() {
    return this.getBooleanAttribute('requires_username');
  }
  public set requiresUsername(value: boolean | cdktf.IResolvable) {
    this._requiresUsername = value;
  }
  public resetRequiresUsername() {
    this._requiresUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresUsernameInput() {
    return this._requiresUsername;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
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

  // scripts - computed: false, optional: true, required: false
  private _scripts?: { [key: string]: string }; 
  public get scripts() {
    return this.getStringMapAttribute('scripts');
  }
  public set scripts(value: { [key: string]: string }) {
    this._scripts = value;
  }
  public resetScripts() {
    this._scripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptsInput() {
    return this._scripts;
  }

  // session_key - computed: false, optional: true, required: false
  private _sessionKey?: string; 
  public get sessionKey() {
    return this.getStringAttribute('session_key');
  }
  public set sessionKey(value: string) {
    this._sessionKey = value;
  }
  public resetSessionKey() {
    this._sessionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionKeyInput() {
    return this._sessionKey;
  }

  // set_user_root_attributes - computed: true, optional: true, required: false
  private _setUserRootAttributes?: string; 
  public get setUserRootAttributes() {
    return this.getStringAttribute('set_user_root_attributes');
  }
  public set setUserRootAttributes(value: string) {
    this._setUserRootAttributes = value;
  }
  public resetSetUserRootAttributes() {
    this._setUserRootAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setUserRootAttributesInput() {
    return this._setUserRootAttributes;
  }

  // should_trust_email_verified_connection - computed: false, optional: true, required: false
  private _shouldTrustEmailVerifiedConnection?: string; 
  public get shouldTrustEmailVerifiedConnection() {
    return this.getStringAttribute('should_trust_email_verified_connection');
  }
  public set shouldTrustEmailVerifiedConnection(value: string) {
    this._shouldTrustEmailVerifiedConnection = value;
  }
  public resetShouldTrustEmailVerifiedConnection() {
    this._shouldTrustEmailVerifiedConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTrustEmailVerifiedConnectionInput() {
    return this._shouldTrustEmailVerifiedConnection;
  }

  // sign_in_endpoint - computed: true, optional: true, required: false
  private _signInEndpoint?: string; 
  public get signInEndpoint() {
    return this.getStringAttribute('sign_in_endpoint');
  }
  public set signInEndpoint(value: string) {
    this._signInEndpoint = value;
  }
  public resetSignInEndpoint() {
    this._signInEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInEndpointInput() {
    return this._signInEndpoint;
  }

  // sign_out_endpoint - computed: true, optional: true, required: false
  private _signOutEndpoint?: string; 
  public get signOutEndpoint() {
    return this.getStringAttribute('sign_out_endpoint');
  }
  public set signOutEndpoint(value: string) {
    this._signOutEndpoint = value;
  }
  public resetSignOutEndpoint() {
    this._signOutEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signOutEndpointInput() {
    return this._signOutEndpoint;
  }

  // sign_saml_request - computed: false, optional: true, required: false
  private _signSamlRequest?: boolean | cdktf.IResolvable; 
  public get signSamlRequest() {
    return this.getBooleanAttribute('sign_saml_request');
  }
  public set signSamlRequest(value: boolean | cdktf.IResolvable) {
    this._signSamlRequest = value;
  }
  public resetSignSamlRequest() {
    this._signSamlRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signSamlRequestInput() {
    return this._signSamlRequest;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // signature_method - computed: false, optional: true, required: false
  private _signatureMethod?: string; 
  public get signatureMethod() {
    return this.getStringAttribute('signature_method');
  }
  public set signatureMethod(value: string) {
    this._signatureMethod = value;
  }
  public resetSignatureMethod() {
    this._signatureMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureMethodInput() {
    return this._signatureMethod;
  }

  // signing_cert - computed: true, optional: true, required: false
  private _signingCert?: string; 
  public get signingCert() {
    return this.getStringAttribute('signing_cert');
  }
  public set signingCert(value: string) {
    this._signingCert = value;
  }
  public resetSigningCert() {
    this._signingCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingCertInput() {
    return this._signingCert;
  }

  // strategy_version - computed: true, optional: true, required: false
  private _strategyVersion?: number; 
  public get strategyVersion() {
    return this.getNumberAttribute('strategy_version');
  }
  public set strategyVersion(value: number) {
    this._strategyVersion = value;
  }
  public resetStrategyVersion() {
    this._strategyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyVersionInput() {
    return this._strategyVersion;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // syntax - computed: false, optional: true, required: false
  private _syntax?: string; 
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
  public set syntax(value: string) {
    this._syntax = value;
  }
  public resetSyntax() {
    this._syntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxInput() {
    return this._syntax;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // template - computed: false, optional: true, required: false
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

  // tenant_domain - computed: false, optional: true, required: false
  private _tenantDomain?: string; 
  public get tenantDomain() {
    return this.getStringAttribute('tenant_domain');
  }
  public set tenantDomain(value: string) {
    this._tenantDomain = value;
  }
  public resetTenantDomain() {
    this._tenantDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDomainInput() {
    return this._tenantDomain;
  }

  // token_endpoint - computed: true, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // token_endpoint_auth_method - computed: false, optional: true, required: false
  private _tokenEndpointAuthMethod?: string; 
  public get tokenEndpointAuthMethod() {
    return this.getStringAttribute('token_endpoint_auth_method');
  }
  public set tokenEndpointAuthMethod(value: string) {
    this._tokenEndpointAuthMethod = value;
  }
  public resetTokenEndpointAuthMethod() {
    this._tokenEndpointAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointAuthMethodInput() {
    return this._tokenEndpointAuthMethod;
  }

  // token_endpoint_auth_signing_alg - computed: false, optional: true, required: false
  private _tokenEndpointAuthSigningAlg?: string; 
  public get tokenEndpointAuthSigningAlg() {
    return this.getStringAttribute('token_endpoint_auth_signing_alg');
  }
  public set tokenEndpointAuthSigningAlg(value: string) {
    this._tokenEndpointAuthSigningAlg = value;
  }
  public resetTokenEndpointAuthSigningAlg() {
    this._tokenEndpointAuthSigningAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointAuthSigningAlgInput() {
    return this._tokenEndpointAuthSigningAlg;
  }

  // twilio_sid - computed: false, optional: true, required: false
  private _twilioSid?: string; 
  public get twilioSid() {
    return this.getStringAttribute('twilio_sid');
  }
  public set twilioSid(value: string) {
    this._twilioSid = value;
  }
  public resetTwilioSid() {
    this._twilioSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioSidInput() {
    return this._twilioSid;
  }

  // twilio_token - computed: false, optional: true, required: false
  private _twilioToken?: string; 
  public get twilioToken() {
    return this.getStringAttribute('twilio_token');
  }
  public set twilioToken(value: string) {
    this._twilioToken = value;
  }
  public resetTwilioToken() {
    this._twilioToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioTokenInput() {
    return this._twilioToken;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // upstream_params - computed: false, optional: true, required: false
  private _upstreamParams?: string; 
  public get upstreamParams() {
    return this.getStringAttribute('upstream_params');
  }
  public set upstreamParams(value: string) {
    this._upstreamParams = value;
  }
  public resetUpstreamParams() {
    this._upstreamParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamParamsInput() {
    return this._upstreamParams;
  }

  // use_cert_auth - computed: false, optional: true, required: false
  private _useCertAuth?: boolean | cdktf.IResolvable; 
  public get useCertAuth() {
    return this.getBooleanAttribute('use_cert_auth');
  }
  public set useCertAuth(value: boolean | cdktf.IResolvable) {
    this._useCertAuth = value;
  }
  public resetUseCertAuth() {
    this._useCertAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCertAuthInput() {
    return this._useCertAuth;
  }

  // use_kerberos - computed: false, optional: true, required: false
  private _useKerberos?: boolean | cdktf.IResolvable; 
  public get useKerberos() {
    return this.getBooleanAttribute('use_kerberos');
  }
  public set useKerberos(value: boolean | cdktf.IResolvable) {
    this._useKerberos = value;
  }
  public resetUseKerberos() {
    this._useKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKerberosInput() {
    return this._useKerberos;
  }

  // use_wsfed - computed: false, optional: true, required: false
  private _useWsfed?: boolean | cdktf.IResolvable; 
  public get useWsfed() {
    return this.getBooleanAttribute('use_wsfed');
  }
  public set useWsfed(value: boolean | cdktf.IResolvable) {
    this._useWsfed = value;
  }
  public resetUseWsfed() {
    this._useWsfed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWsfedInput() {
    return this._useWsfed;
  }

  // user_authorization_url - computed: false, optional: true, required: false
  private _userAuthorizationUrl?: string; 
  public get userAuthorizationUrl() {
    return this.getStringAttribute('user_authorization_url');
  }
  public set userAuthorizationUrl(value: string) {
    this._userAuthorizationUrl = value;
  }
  public resetUserAuthorizationUrl() {
    this._userAuthorizationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorizationUrlInput() {
    return this._userAuthorizationUrl;
  }

  // user_id_attribute - computed: false, optional: true, required: false
  private _userIdAttribute?: string; 
  public get userIdAttribute() {
    return this.getStringAttribute('user_id_attribute');
  }
  public set userIdAttribute(value: string) {
    this._userIdAttribute = value;
  }
  public resetUserIdAttribute() {
    this._userIdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdAttributeInput() {
    return this._userIdAttribute;
  }

  // userinfo_endpoint - computed: true, optional: true, required: false
  private _userinfoEndpoint?: string; 
  public get userinfoEndpoint() {
    return this.getStringAttribute('userinfo_endpoint');
  }
  public set userinfoEndpoint(value: string) {
    this._userinfoEndpoint = value;
  }
  public resetUserinfoEndpoint() {
    this._userinfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoEndpointInput() {
    return this._userinfoEndpoint;
  }

  // waad_common_endpoint - computed: false, optional: true, required: false
  private _waadCommonEndpoint?: boolean | cdktf.IResolvable; 
  public get waadCommonEndpoint() {
    return this.getBooleanAttribute('waad_common_endpoint');
  }
  public set waadCommonEndpoint(value: boolean | cdktf.IResolvable) {
    this._waadCommonEndpoint = value;
  }
  public resetWaadCommonEndpoint() {
    this._waadCommonEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waadCommonEndpointInput() {
    return this._waadCommonEndpoint;
  }

  // waad_protocol - computed: false, optional: true, required: false
  private _waadProtocol?: string; 
  public get waadProtocol() {
    return this.getStringAttribute('waad_protocol');
  }
  public set waadProtocol(value: string) {
    this._waadProtocol = value;
  }
  public resetWaadProtocol() {
    this._waadProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waadProtocolInput() {
    return this._waadProtocol;
  }

  // attribute_map - computed: false, optional: true, required: false
  private _attributeMap = new ConnectionOptionsAttributeMapOutputReference(this, "attribute_map");
  public get attributeMap() {
    return this._attributeMap;
  }
  public putAttributeMap(value: ConnectionOptionsAttributeMap) {
    this._attributeMap.internalValue = value;
  }
  public resetAttributeMap() {
    this._attributeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMapInput() {
    return this._attributeMap.internalValue;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new ConnectionOptionsAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ConnectionOptionsAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // authentication_methods - computed: false, optional: true, required: false
  private _authenticationMethods = new ConnectionOptionsAuthenticationMethodsList(this, "authentication_methods", false);
  public get authenticationMethods() {
    return this._authenticationMethods;
  }
  public putAuthenticationMethods(value: ConnectionOptionsAuthenticationMethods[] | cdktf.IResolvable) {
    this._authenticationMethods.internalValue = value;
  }
  public resetAuthenticationMethods() {
    this._authenticationMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodsInput() {
    return this._authenticationMethods.internalValue;
  }

  // connection_settings - computed: false, optional: true, required: false
  private _connectionSettings = new ConnectionOptionsConnectionSettingsOutputReference(this, "connection_settings");
  public get connectionSettings() {
    return this._connectionSettings;
  }
  public putConnectionSettings(value: ConnectionOptionsConnectionSettings) {
    this._connectionSettings.internalValue = value;
  }
  public resetConnectionSettings() {
    this._connectionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSettingsInput() {
    return this._connectionSettings.internalValue;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders = new ConnectionOptionsCustomHeadersList(this, "custom_headers", true);
  public get customHeaders() {
    return this._customHeaders;
  }
  public putCustomHeaders(value: ConnectionOptionsCustomHeaders[] | cdktf.IResolvable) {
    this._customHeaders.internalValue = value;
  }
  public resetCustomHeaders() {
    this._customHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders.internalValue;
  }

  // decryption_key - computed: false, optional: true, required: false
  private _decryptionKey = new ConnectionOptionsDecryptionKeyOutputReference(this, "decryption_key");
  public get decryptionKey() {
    return this._decryptionKey;
  }
  public putDecryptionKey(value: ConnectionOptionsDecryptionKey) {
    this._decryptionKey.internalValue = value;
  }
  public resetDecryptionKey() {
    this._decryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionKeyInput() {
    return this._decryptionKey.internalValue;
  }

  // gateway_authentication - computed: false, optional: true, required: false
  private _gatewayAuthentication = new ConnectionOptionsGatewayAuthenticationOutputReference(this, "gateway_authentication");
  public get gatewayAuthentication() {
    return this._gatewayAuthentication;
  }
  public putGatewayAuthentication(value: ConnectionOptionsGatewayAuthentication) {
    this._gatewayAuthentication.internalValue = value;
  }
  public resetGatewayAuthentication() {
    this._gatewayAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAuthenticationInput() {
    return this._gatewayAuthentication.internalValue;
  }

  // idp_initiated - computed: false, optional: true, required: false
  private _idpInitiated = new ConnectionOptionsIdpInitiatedOutputReference(this, "idp_initiated");
  public get idpInitiated() {
    return this._idpInitiated;
  }
  public putIdpInitiated(value: ConnectionOptionsIdpInitiated) {
    this._idpInitiated.internalValue = value;
  }
  public resetIdpInitiated() {
    this._idpInitiated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInitiatedInput() {
    return this._idpInitiated.internalValue;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa = new ConnectionOptionsMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: ConnectionOptionsMfa) {
    this._mfa.internalValue = value;
  }
  public resetMfa() {
    this._mfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa.internalValue;
  }

  // passkey_options - computed: false, optional: true, required: false
  private _passkeyOptions = new ConnectionOptionsPasskeyOptionsOutputReference(this, "passkey_options");
  public get passkeyOptions() {
    return this._passkeyOptions;
  }
  public putPasskeyOptions(value: ConnectionOptionsPasskeyOptions) {
    this._passkeyOptions.internalValue = value;
  }
  public resetPasskeyOptions() {
    this._passkeyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passkeyOptionsInput() {
    return this._passkeyOptions.internalValue;
  }

  // password_complexity_options - computed: false, optional: true, required: false
  private _passwordComplexityOptions = new ConnectionOptionsPasswordComplexityOptionsOutputReference(this, "password_complexity_options");
  public get passwordComplexityOptions() {
    return this._passwordComplexityOptions;
  }
  public putPasswordComplexityOptions(value: ConnectionOptionsPasswordComplexityOptions) {
    this._passwordComplexityOptions.internalValue = value;
  }
  public resetPasswordComplexityOptions() {
    this._passwordComplexityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordComplexityOptionsInput() {
    return this._passwordComplexityOptions.internalValue;
  }

  // password_dictionary - computed: false, optional: true, required: false
  private _passwordDictionary = new ConnectionOptionsPasswordDictionaryOutputReference(this, "password_dictionary");
  public get passwordDictionary() {
    return this._passwordDictionary;
  }
  public putPasswordDictionary(value: ConnectionOptionsPasswordDictionary) {
    this._passwordDictionary.internalValue = value;
  }
  public resetPasswordDictionary() {
    this._passwordDictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordDictionaryInput() {
    return this._passwordDictionary.internalValue;
  }

  // password_history - computed: false, optional: true, required: false
  private _passwordHistory = new ConnectionOptionsPasswordHistoryList(this, "password_history", false);
  public get passwordHistory() {
    return this._passwordHistory;
  }
  public putPasswordHistory(value: ConnectionOptionsPasswordHistory[] | cdktf.IResolvable) {
    this._passwordHistory.internalValue = value;
  }
  public resetPasswordHistory() {
    this._passwordHistory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHistoryInput() {
    return this._passwordHistory.internalValue;
  }

  // password_no_personal_info - computed: false, optional: true, required: false
  private _passwordNoPersonalInfo = new ConnectionOptionsPasswordNoPersonalInfoOutputReference(this, "password_no_personal_info");
  public get passwordNoPersonalInfo() {
    return this._passwordNoPersonalInfo;
  }
  public putPasswordNoPersonalInfo(value: ConnectionOptionsPasswordNoPersonalInfo) {
    this._passwordNoPersonalInfo.internalValue = value;
  }
  public resetPasswordNoPersonalInfo() {
    this._passwordNoPersonalInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoPersonalInfoInput() {
    return this._passwordNoPersonalInfo.internalValue;
  }

  // signing_key - computed: false, optional: true, required: false
  private _signingKey = new ConnectionOptionsSigningKeyOutputReference(this, "signing_key");
  public get signingKey() {
    return this._signingKey;
  }
  public putSigningKey(value: ConnectionOptionsSigningKey) {
    this._signingKey.internalValue = value;
  }
  public resetSigningKey() {
    this._signingKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyInput() {
    return this._signingKey.internalValue;
  }

  // totp - computed: false, optional: true, required: false
  private _totp = new ConnectionOptionsTotpOutputReference(this, "totp");
  public get totp() {
    return this._totp;
  }
  public putTotp(value: ConnectionOptionsTotp) {
    this._totp.internalValue = value;
  }
  public resetTotp() {
    this._totp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpInput() {
    return this._totp.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new ConnectionOptionsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: ConnectionOptionsValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection auth0_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connection to import
  * @param importFromId The id of the existing Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection auth0_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_connection',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._isDomainConnection = config.isDomainConnection;
    this._metadata = config.metadata;
    this._name = config.name;
    this._realms = config.realms;
    this._showAsButton = config.showAsButton;
    this._strategy = config.strategy;
    this._authentication.internalValue = config.authentication;
    this._connectedAccounts.internalValue = config.connectedAccounts;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_domain_connection - computed: true, optional: true, required: false
  private _isDomainConnection?: boolean | cdktf.IResolvable; 
  public get isDomainConnection() {
    return this.getBooleanAttribute('is_domain_connection');
  }
  public set isDomainConnection(value: boolean | cdktf.IResolvable) {
    this._isDomainConnection = value;
  }
  public resetIsDomainConnection() {
    this._isDomainConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDomainConnectionInput() {
    return this._isDomainConnection;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // realms - computed: true, optional: true, required: false
  private _realms?: string[]; 
  public get realms() {
    return this.getListAttribute('realms');
  }
  public set realms(value: string[]) {
    this._realms = value;
  }
  public resetRealms() {
    this._realms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmsInput() {
    return this._realms;
  }

  // show_as_button - computed: false, optional: true, required: false
  private _showAsButton?: boolean | cdktf.IResolvable; 
  public get showAsButton() {
    return this.getBooleanAttribute('show_as_button');
  }
  public set showAsButton(value: boolean | cdktf.IResolvable) {
    this._showAsButton = value;
  }
  public resetShowAsButton() {
    this._showAsButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAsButtonInput() {
    return this._showAsButton;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ConnectionAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ConnectionAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // connected_accounts - computed: false, optional: true, required: false
  private _connectedAccounts = new ConnectionConnectedAccountsOutputReference(this, "connected_accounts");
  public get connectedAccounts() {
    return this._connectedAccounts;
  }
  public putConnectedAccounts(value: ConnectionConnectedAccounts) {
    this._connectedAccounts.internalValue = value;
  }
  public resetConnectedAccounts() {
    this._connectedAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedAccountsInput() {
    return this._connectedAccounts.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new ConnectionOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: ConnectionOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_domain_connection: cdktf.booleanToTerraform(this._isDomainConnection),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      realms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._realms),
      show_as_button: cdktf.booleanToTerraform(this._showAsButton),
      strategy: cdktf.stringToTerraform(this._strategy),
      authentication: connectionAuthenticationToTerraform(this._authentication.internalValue),
      connected_accounts: connectionConnectedAccountsToTerraform(this._connectedAccounts.internalValue),
      options: connectionOptionsToTerraform(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_domain_connection: {
        value: cdktf.booleanToHclTerraform(this._isDomainConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._realms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      show_as_button: {
        value: cdktf.booleanToHclTerraform(this._showAsButton),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strategy: {
        value: cdktf.stringToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: connectionAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionAuthenticationList",
      },
      connected_accounts: {
        value: connectionConnectedAccountsToHclTerraform(this._connectedAccounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionConnectedAccountsList",
      },
      options: {
        value: connectionOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
