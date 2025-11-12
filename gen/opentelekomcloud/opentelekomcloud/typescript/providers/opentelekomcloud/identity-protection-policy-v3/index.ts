// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProtectionPolicyV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3#enable_operation_protection_policy IdentityProtectionPolicyV3#enable_operation_protection_policy}
  */
  readonly enableOperationProtectionPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3#id IdentityProtectionPolicyV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3#verification_email IdentityProtectionPolicyV3#verification_email}
  */
  readonly verificationEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3#verification_mobile IdentityProtectionPolicyV3#verification_mobile}
  */
  readonly verificationMobile?: string;
  /**
  * self_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3#self_management IdentityProtectionPolicyV3#self_management}
  */
  readonly selfManagement?: IdentityProtectionPolicyV3SelfManagement;
}
export interface IdentityProtectionPolicyV3SelfManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3#access_key IdentityProtectionPolicyV3#access_key}
  */
  readonly accessKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3#email IdentityProtectionPolicyV3#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3#mobile IdentityProtectionPolicyV3#mobile}
  */
  readonly mobile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3#password IdentityProtectionPolicyV3#password}
  */
  readonly password?: boolean | cdktf.IResolvable;
}

export function identityProtectionPolicyV3SelfManagementToTerraform(struct?: IdentityProtectionPolicyV3SelfManagementOutputReference | IdentityProtectionPolicyV3SelfManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.booleanToTerraform(struct!.accessKey),
    email: cdktf.booleanToTerraform(struct!.email),
    mobile: cdktf.booleanToTerraform(struct!.mobile),
    password: cdktf.booleanToTerraform(struct!.password),
  }
}


export function identityProtectionPolicyV3SelfManagementToHclTerraform(struct?: IdentityProtectionPolicyV3SelfManagementOutputReference | IdentityProtectionPolicyV3SelfManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.booleanToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email: {
      value: cdktf.booleanToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mobile: {
      value: cdktf.booleanToHclTerraform(struct!.mobile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.booleanToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProtectionPolicyV3SelfManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityProtectionPolicyV3SelfManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._mobile !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobile = this._mobile;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProtectionPolicyV3SelfManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._email = undefined;
      this._mobile = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._email = value.email;
      this._mobile = value.mobile;
      this._password = value.password;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: boolean | cdktf.IResolvable; 
  public get accessKey() {
    return this.getBooleanAttribute('access_key');
  }
  public set accessKey(value: boolean | cdktf.IResolvable) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

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

  // mobile - computed: false, optional: true, required: false
  private _mobile?: boolean | cdktf.IResolvable; 
  public get mobile() {
    return this.getBooleanAttribute('mobile');
  }
  public set mobile(value: boolean | cdktf.IResolvable) {
    this._mobile = value;
  }
  public resetMobile() {
    this._mobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile;
  }

  // password - computed: false, optional: true, required: false
  private _password?: boolean | cdktf.IResolvable; 
  public get password() {
    return this.getBooleanAttribute('password');
  }
  public set password(value: boolean | cdktf.IResolvable) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3 opentelekomcloud_identity_protection_policy_v3}
*/
export class IdentityProtectionPolicyV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_identity_protection_policy_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityProtectionPolicyV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityProtectionPolicyV3 to import
  * @param importFromId The id of the existing IdentityProtectionPolicyV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityProtectionPolicyV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_identity_protection_policy_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protection_policy_v3 opentelekomcloud_identity_protection_policy_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProtectionPolicyV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: IdentityProtectionPolicyV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_protection_policy_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52',
        providerVersionConstraint: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableOperationProtectionPolicy = config.enableOperationProtectionPolicy;
    this._id = config.id;
    this._verificationEmail = config.verificationEmail;
    this._verificationMobile = config.verificationMobile;
    this._selfManagement.internalValue = config.selfManagement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_operation_protection_policy - computed: false, optional: true, required: false
  private _enableOperationProtectionPolicy?: boolean | cdktf.IResolvable; 
  public get enableOperationProtectionPolicy() {
    return this.getBooleanAttribute('enable_operation_protection_policy');
  }
  public set enableOperationProtectionPolicy(value: boolean | cdktf.IResolvable) {
    this._enableOperationProtectionPolicy = value;
  }
  public resetEnableOperationProtectionPolicy() {
    this._enableOperationProtectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOperationProtectionPolicyInput() {
    return this._enableOperationProtectionPolicy;
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

  // self_verification - computed: true, optional: false, required: false
  public get selfVerification() {
    return this.getBooleanAttribute('self_verification');
  }

  // verification_email - computed: false, optional: true, required: false
  private _verificationEmail?: string; 
  public get verificationEmail() {
    return this.getStringAttribute('verification_email');
  }
  public set verificationEmail(value: string) {
    this._verificationEmail = value;
  }
  public resetVerificationEmail() {
    this._verificationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationEmailInput() {
    return this._verificationEmail;
  }

  // verification_mobile - computed: false, optional: true, required: false
  private _verificationMobile?: string; 
  public get verificationMobile() {
    return this.getStringAttribute('verification_mobile');
  }
  public set verificationMobile(value: string) {
    this._verificationMobile = value;
  }
  public resetVerificationMobile() {
    this._verificationMobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMobileInput() {
    return this._verificationMobile;
  }

  // self_management - computed: false, optional: true, required: false
  private _selfManagement = new IdentityProtectionPolicyV3SelfManagementOutputReference(this, "self_management");
  public get selfManagement() {
    return this._selfManagement;
  }
  public putSelfManagement(value: IdentityProtectionPolicyV3SelfManagement) {
    this._selfManagement.internalValue = value;
  }
  public resetSelfManagement() {
    this._selfManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagementInput() {
    return this._selfManagement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_operation_protection_policy: cdktf.booleanToTerraform(this._enableOperationProtectionPolicy),
      id: cdktf.stringToTerraform(this._id),
      verification_email: cdktf.stringToTerraform(this._verificationEmail),
      verification_mobile: cdktf.stringToTerraform(this._verificationMobile),
      self_management: identityProtectionPolicyV3SelfManagementToTerraform(this._selfManagement.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_operation_protection_policy: {
        value: cdktf.booleanToHclTerraform(this._enableOperationProtectionPolicy),
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
      verification_email: {
        value: cdktf.stringToHclTerraform(this._verificationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_mobile: {
        value: cdktf.stringToHclTerraform(this._verificationMobile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_management: {
        value: identityProtectionPolicyV3SelfManagementToHclTerraform(this._selfManagement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityProtectionPolicyV3SelfManagementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
