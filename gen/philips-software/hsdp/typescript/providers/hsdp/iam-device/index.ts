// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application ID (GUID) this device should be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#application_id IamDevice#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#debug_until IamDevice#debug_until}
  */
  readonly debugUntil?: string;
  /**
  * When set to true this device is marked as a test device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#for_test IamDevice#for_test}
  */
  readonly forTest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#global_reference_id IamDevice#global_reference_id}
  */
  readonly globalReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#id IamDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Controls if this device is active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#is_active IamDevice#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * The login id of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#login_id IamDevice#login_id}
  */
  readonly loginId: string;
  /**
  * The organization ID (GUID) this device should be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#organization_id IamDevice#organization_id}
  */
  readonly organizationId: string;
  /**
  * The password of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#password IamDevice#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#type IamDevice#type}
  */
  readonly type: string;
  /**
  * external_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#external_identifier IamDevice#external_identifier}
  */
  readonly externalIdentifier?: IamDeviceExternalIdentifier;
}
export interface IamDeviceExternalIdentifierType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#code IamDevice#code}
  */
  readonly code: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#text IamDevice#text}
  */
  readonly text?: string;
}

export function iamDeviceExternalIdentifierTypeToTerraform(struct?: IamDeviceExternalIdentifierTypeOutputReference | IamDeviceExternalIdentifierType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function iamDeviceExternalIdentifierTypeToHclTerraform(struct?: IamDeviceExternalIdentifierTypeOutputReference | IamDeviceExternalIdentifierType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamDeviceExternalIdentifierTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamDeviceExternalIdentifierType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamDeviceExternalIdentifierType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._text = value.text;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface IamDeviceExternalIdentifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#system IamDevice#system}
  */
  readonly systemAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#value IamDevice#value}
  */
  readonly value: string;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#type IamDevice#type}
  */
  readonly type?: IamDeviceExternalIdentifierType;
}

export function iamDeviceExternalIdentifierToTerraform(struct?: IamDeviceExternalIdentifierOutputReference | IamDeviceExternalIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    value: cdktf.stringToTerraform(struct!.value),
    type: iamDeviceExternalIdentifierTypeToTerraform(struct!.type),
  }
}


export function iamDeviceExternalIdentifierToHclTerraform(struct?: IamDeviceExternalIdentifierOutputReference | IamDeviceExternalIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
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
    type: {
      value: iamDeviceExternalIdentifierTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "set",
      storageClassType: "IamDeviceExternalIdentifierTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamDeviceExternalIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamDeviceExternalIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamDeviceExternalIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._system = undefined;
      this._value = undefined;
      this._type.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._system = value.systemAttribute;
      this._value = value.value;
      this._type.internalValue = value.type;
    }
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
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

  // type - computed: false, optional: true, required: false
  private _type = new IamDeviceExternalIdentifierTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: IamDeviceExternalIdentifierType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device hsdp_iam_device}
*/
export class IamDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_iam_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamDevice to import
  * @param importFromId The id of the existing IamDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_iam_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_device hsdp_iam_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: IamDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_iam_device',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._debugUntil = config.debugUntil;
    this._forTest = config.forTest;
    this._globalReferenceId = config.globalReferenceId;
    this._id = config.id;
    this._isActive = config.isActive;
    this._loginId = config.loginId;
    this._organizationId = config.organizationId;
    this._password = config.password;
    this._type = config.type;
    this._externalIdentifier.internalValue = config.externalIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // debug_until - computed: true, optional: true, required: false
  private _debugUntil?: string; 
  public get debugUntil() {
    return this.getStringAttribute('debug_until');
  }
  public set debugUntil(value: string) {
    this._debugUntil = value;
  }
  public resetDebugUntil() {
    this._debugUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugUntilInput() {
    return this._debugUntil;
  }

  // for_test - computed: true, optional: true, required: false
  private _forTest?: boolean | cdktf.IResolvable; 
  public get forTest() {
    return this.getBooleanAttribute('for_test');
  }
  public set forTest(value: boolean | cdktf.IResolvable) {
    this._forTest = value;
  }
  public resetForTest() {
    this._forTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forTestInput() {
    return this._forTest;
  }

  // global_reference_id - computed: false, optional: true, required: false
  private _globalReferenceId?: string; 
  public get globalReferenceId() {
    return this.getStringAttribute('global_reference_id');
  }
  public set globalReferenceId(value: string) {
    this._globalReferenceId = value;
  }
  public resetGlobalReferenceId() {
    this._globalReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReferenceIdInput() {
    return this._globalReferenceId;
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

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // login_id - computed: false, optional: false, required: true
  private _loginId?: string; 
  public get loginId() {
    return this.getStringAttribute('login_id');
  }
  public set loginId(value: string) {
    this._loginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginIdInput() {
    return this._loginId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // registration_date - computed: true, optional: false, required: false
  public get registrationDate() {
    return this.getStringAttribute('registration_date');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // external_identifier - computed: false, optional: true, required: false
  private _externalIdentifier = new IamDeviceExternalIdentifierOutputReference(this, "external_identifier");
  public get externalIdentifier() {
    return this._externalIdentifier;
  }
  public putExternalIdentifier(value: IamDeviceExternalIdentifier) {
    this._externalIdentifier.internalValue = value;
  }
  public resetExternalIdentifier() {
    this._externalIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdentifierInput() {
    return this._externalIdentifier.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      debug_until: cdktf.stringToTerraform(this._debugUntil),
      for_test: cdktf.booleanToTerraform(this._forTest),
      global_reference_id: cdktf.stringToTerraform(this._globalReferenceId),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      login_id: cdktf.stringToTerraform(this._loginId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      password: cdktf.stringToTerraform(this._password),
      type: cdktf.stringToTerraform(this._type),
      external_identifier: iamDeviceExternalIdentifierToTerraform(this._externalIdentifier.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_until: {
        value: cdktf.stringToHclTerraform(this._debugUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      for_test: {
        value: cdktf.booleanToHclTerraform(this._forTest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_reference_id: {
        value: cdktf.stringToHclTerraform(this._globalReferenceId),
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
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_id: {
        value: cdktf.stringToHclTerraform(this._loginId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_identifier: {
        value: iamDeviceExternalIdentifierToHclTerraform(this._externalIdentifier.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IamDeviceExternalIdentifierList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
