// https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuardianConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#email Guardian#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#id Guardian#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#policy Guardian#policy}
  */
  readonly policy: string;
  /**
  * phone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#phone Guardian#phone}
  */
  readonly phone?: GuardianPhone;
}
export interface GuardianPhoneOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#auth_token Guardian#auth_token}
  */
  readonly authToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#enrollment_message Guardian#enrollment_message}
  */
  readonly enrollmentMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#from Guardian#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#messaging_service_sid Guardian#messaging_service_sid}
  */
  readonly messagingServiceSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#sid Guardian#sid}
  */
  readonly sid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#verification_message Guardian#verification_message}
  */
  readonly verificationMessage?: string;
}

export function guardianPhoneOptionsToTerraform(struct?: GuardianPhoneOptionsOutputReference | GuardianPhoneOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    enrollment_message: cdktf.stringToTerraform(struct!.enrollmentMessage),
    from: cdktf.stringToTerraform(struct!.from),
    messaging_service_sid: cdktf.stringToTerraform(struct!.messagingServiceSid),
    sid: cdktf.stringToTerraform(struct!.sid),
    verification_message: cdktf.stringToTerraform(struct!.verificationMessage),
  }
}


export function guardianPhoneOptionsToHclTerraform(struct?: GuardianPhoneOptionsOutputReference | GuardianPhoneOptions): any {
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
    enrollment_message: {
      value: cdktf.stringToHclTerraform(struct!.enrollmentMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
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
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification_message: {
      value: cdktf.stringToHclTerraform(struct!.verificationMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianPhoneOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianPhoneOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._enrollmentMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentMessage = this._enrollmentMessage;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._messagingServiceSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagingServiceSid = this._messagingServiceSid;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    if (this._verificationMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationMessage = this._verificationMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianPhoneOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authToken = undefined;
      this._enrollmentMessage = undefined;
      this._from = undefined;
      this._messagingServiceSid = undefined;
      this._sid = undefined;
      this._verificationMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authToken = value.authToken;
      this._enrollmentMessage = value.enrollmentMessage;
      this._from = value.from;
      this._messagingServiceSid = value.messagingServiceSid;
      this._sid = value.sid;
      this._verificationMessage = value.verificationMessage;
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

  // enrollment_message - computed: false, optional: true, required: false
  private _enrollmentMessage?: string; 
  public get enrollmentMessage() {
    return this.getStringAttribute('enrollment_message');
  }
  public set enrollmentMessage(value: string) {
    this._enrollmentMessage = value;
  }
  public resetEnrollmentMessage() {
    this._enrollmentMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentMessageInput() {
    return this._enrollmentMessage;
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

  // verification_message - computed: false, optional: true, required: false
  private _verificationMessage?: string; 
  public get verificationMessage() {
    return this.getStringAttribute('verification_message');
  }
  public set verificationMessage(value: string) {
    this._verificationMessage = value;
  }
  public resetVerificationMessage() {
    this._verificationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMessageInput() {
    return this._verificationMessage;
  }
}
export interface GuardianPhone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#message_types Guardian#message_types}
  */
  readonly messageTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#provider Guardian#provider}
  */
  readonly provider: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#options Guardian#options}
  */
  readonly options?: GuardianPhoneOptions;
}

export function guardianPhoneToTerraform(struct?: GuardianPhoneOutputReference | GuardianPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.messageTypes),
    provider: cdktf.stringToTerraform(struct!.provider),
    options: guardianPhoneOptionsToTerraform(struct!.options),
  }
}


export function guardianPhoneToHclTerraform(struct?: GuardianPhoneOutputReference | GuardianPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.messageTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: guardianPhoneOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "GuardianPhoneOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardianPhoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianPhone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTypes = this._messageTypes;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianPhone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageTypes = undefined;
      this._provider = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageTypes = value.messageTypes;
      this._provider = value.provider;
      this._options.internalValue = value.options;
    }
  }

  // message_types - computed: false, optional: false, required: true
  private _messageTypes?: string[]; 
  public get messageTypes() {
    return this.getListAttribute('message_types');
  }
  public set messageTypes(value: string[]) {
    this._messageTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypesInput() {
    return this._messageTypes;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // options - computed: false, optional: true, required: false
  private _options = new GuardianPhoneOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GuardianPhoneOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian auth0_guardian}
*/
export class Guardian extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_guardian";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Guardian resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Guardian to import
  * @param importFromId The id of the existing Guardian that should be imported. Refer to the {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Guardian to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_guardian", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/guardian auth0_guardian} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuardianConfig
  */
  public constructor(scope: Construct, id: string, config: GuardianConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_guardian',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '0.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._id = config.id;
    this._policy = config.policy;
    this._phone.internalValue = config.phone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: true, required: false
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // phone - computed: false, optional: true, required: false
  private _phone = new GuardianPhoneOutputReference(this, "phone");
  public get phone() {
    return this._phone;
  }
  public putPhone(value: GuardianPhone) {
    this._phone.internalValue = value;
  }
  public resetPhone() {
    this._phone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.booleanToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
      phone: guardianPhoneToTerraform(this._phone.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.booleanToHclTerraform(this._email),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone: {
        value: guardianPhoneToHclTerraform(this._phone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuardianPhoneList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
