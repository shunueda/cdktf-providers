// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PhoneProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the phone provider is enabled (false) or disabled (true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#disabled PhoneProvider#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#id PhoneProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the phone provider. Options include `twilio`, `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#name PhoneProvider#name}
  */
  readonly name: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#configuration PhoneProvider#configuration}
  */
  readonly configuration: PhoneProviderConfiguration;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#credentials PhoneProvider#credentials}
  */
  readonly credentials: PhoneProviderCredentials;
}
export interface PhoneProviderConfiguration {
  /**
  * Default sender subject as "from" when no other value is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#default_from PhoneProvider#default_from}
  */
  readonly defaultFrom?: string;
  /**
  * Media set supported by a given provider to deliver a notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#delivery_methods PhoneProvider#delivery_methods}
  */
  readonly deliveryMethods: string[];
  /**
  * Twilio Messaging Service SID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#mssid PhoneProvider#mssid}
  */
  readonly mssid?: string;
  /**
  * Twilio Account SID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#sid PhoneProvider#sid}
  */
  readonly sid?: string;
}

export function phoneProviderConfigurationToTerraform(struct?: PhoneProviderConfigurationOutputReference | PhoneProviderConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_from: cdktf.stringToTerraform(struct!.defaultFrom),
    delivery_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deliveryMethods),
    mssid: cdktf.stringToTerraform(struct!.mssid),
    sid: cdktf.stringToTerraform(struct!.sid),
  }
}


export function phoneProviderConfigurationToHclTerraform(struct?: PhoneProviderConfigurationOutputReference | PhoneProviderConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_from: {
      value: cdktf.stringToHclTerraform(struct!.defaultFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delivery_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deliveryMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mssid: {
      value: cdktf.stringToHclTerraform(struct!.mssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PhoneProviderConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PhoneProviderConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFrom = this._defaultFrom;
    }
    if (this._deliveryMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryMethods = this._deliveryMethods;
    }
    if (this._mssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssid = this._mssid;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneProviderConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultFrom = undefined;
      this._deliveryMethods = undefined;
      this._mssid = undefined;
      this._sid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultFrom = value.defaultFrom;
      this._deliveryMethods = value.deliveryMethods;
      this._mssid = value.mssid;
      this._sid = value.sid;
    }
  }

  // default_from - computed: false, optional: true, required: false
  private _defaultFrom?: string; 
  public get defaultFrom() {
    return this.getStringAttribute('default_from');
  }
  public set defaultFrom(value: string) {
    this._defaultFrom = value;
  }
  public resetDefaultFrom() {
    this._defaultFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFromInput() {
    return this._defaultFrom;
  }

  // delivery_methods - computed: false, optional: false, required: true
  private _deliveryMethods?: string[]; 
  public get deliveryMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_methods'));
  }
  public set deliveryMethods(value: string[]) {
    this._deliveryMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodsInput() {
    return this._deliveryMethods;
  }

  // mssid - computed: false, optional: true, required: false
  private _mssid?: string; 
  public get mssid() {
    return this.getStringAttribute('mssid');
  }
  public set mssid(value: string) {
    this._mssid = value;
  }
  public resetMssid() {
    this._mssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssidInput() {
    return this._mssid;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}
export interface PhoneProviderCredentials {
  /**
  * The Auth Token for the phone provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#auth_token PhoneProvider#auth_token}
  */
  readonly authToken?: string;
}

export function phoneProviderCredentialsToTerraform(struct?: PhoneProviderCredentialsOutputReference | PhoneProviderCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
  }
}


export function phoneProviderCredentialsToHclTerraform(struct?: PhoneProviderCredentialsOutputReference | PhoneProviderCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PhoneProviderCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PhoneProviderCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneProviderCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authToken = value.authToken;
    }
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider auth0_phone_provider}
*/
export class PhoneProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_phone_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PhoneProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PhoneProvider to import
  * @param importFromId The id of the existing PhoneProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PhoneProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_phone_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/phone_provider auth0_phone_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PhoneProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PhoneProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_phone_provider',
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
    this._disabled = config.disabled;
    this._id = config.id;
    this._name = config.name;
    this._configuration.internalValue = config.configuration;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new PhoneProviderConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: PhoneProviderConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PhoneProviderCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PhoneProviderCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      configuration: phoneProviderConfigurationToTerraform(this._configuration.internalValue),
      credentials: phoneProviderCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      configuration: {
        value: phoneProviderConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PhoneProviderConfigurationList",
      },
      credentials: {
        value: phoneProviderCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PhoneProviderCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
