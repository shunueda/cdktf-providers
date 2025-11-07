// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UseraccountprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#account_lock_timeout Useraccountprofile#account_lock_timeout}
  */
  readonly accountLockTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#credentials_timeout_threshold Useraccountprofile#credentials_timeout_threshold}
  */
  readonly credentialsTimeoutThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#id Useraccountprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#login_failure_count_expiry_window Useraccountprofile#login_failure_count_expiry_window}
  */
  readonly loginFailureCountExpiryWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#max_concurrent_sessions Useraccountprofile#max_concurrent_sessions}
  */
  readonly maxConcurrentSessions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#max_login_failure_count Useraccountprofile#max_login_failure_count}
  */
  readonly maxLoginFailureCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#max_password_history_count Useraccountprofile#max_password_history_count}
  */
  readonly maxPasswordHistoryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#name Useraccountprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#uuid Useraccountprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#configpb_attributes Useraccountprofile#configpb_attributes}
  */
  readonly configpbAttributes?: UseraccountprofileConfigpbAttributes[] | cdktf.IResolvable;
}
export interface UseraccountprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#version Useraccountprofile#version}
  */
  readonly version?: string;
}

export function useraccountprofileConfigpbAttributesToTerraform(struct?: UseraccountprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function useraccountprofileConfigpbAttributesToHclTerraform(struct?: UseraccountprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UseraccountprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UseraccountprofileConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseraccountprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class UseraccountprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : UseraccountprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): UseraccountprofileConfigpbAttributesOutputReference {
    return new UseraccountprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile avi_useraccountprofile}
*/
export class Useraccountprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_useraccountprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Useraccountprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Useraccountprofile to import
  * @param importFromId The id of the existing Useraccountprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Useraccountprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_useraccountprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/useraccountprofile avi_useraccountprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UseraccountprofileConfig
  */
  public constructor(scope: Construct, id: string, config: UseraccountprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_useraccountprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountLockTimeout = config.accountLockTimeout;
    this._credentialsTimeoutThreshold = config.credentialsTimeoutThreshold;
    this._id = config.id;
    this._loginFailureCountExpiryWindow = config.loginFailureCountExpiryWindow;
    this._maxConcurrentSessions = config.maxConcurrentSessions;
    this._maxLoginFailureCount = config.maxLoginFailureCount;
    this._maxPasswordHistoryCount = config.maxPasswordHistoryCount;
    this._name = config.name;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_lock_timeout - computed: false, optional: true, required: false
  private _accountLockTimeout?: string; 
  public get accountLockTimeout() {
    return this.getStringAttribute('account_lock_timeout');
  }
  public set accountLockTimeout(value: string) {
    this._accountLockTimeout = value;
  }
  public resetAccountLockTimeout() {
    this._accountLockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLockTimeoutInput() {
    return this._accountLockTimeout;
  }

  // credentials_timeout_threshold - computed: false, optional: true, required: false
  private _credentialsTimeoutThreshold?: string; 
  public get credentialsTimeoutThreshold() {
    return this.getStringAttribute('credentials_timeout_threshold');
  }
  public set credentialsTimeoutThreshold(value: string) {
    this._credentialsTimeoutThreshold = value;
  }
  public resetCredentialsTimeoutThreshold() {
    this._credentialsTimeoutThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsTimeoutThresholdInput() {
    return this._credentialsTimeoutThreshold;
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

  // login_failure_count_expiry_window - computed: false, optional: true, required: false
  private _loginFailureCountExpiryWindow?: string; 
  public get loginFailureCountExpiryWindow() {
    return this.getStringAttribute('login_failure_count_expiry_window');
  }
  public set loginFailureCountExpiryWindow(value: string) {
    this._loginFailureCountExpiryWindow = value;
  }
  public resetLoginFailureCountExpiryWindow() {
    this._loginFailureCountExpiryWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginFailureCountExpiryWindowInput() {
    return this._loginFailureCountExpiryWindow;
  }

  // max_concurrent_sessions - computed: false, optional: true, required: false
  private _maxConcurrentSessions?: string; 
  public get maxConcurrentSessions() {
    return this.getStringAttribute('max_concurrent_sessions');
  }
  public set maxConcurrentSessions(value: string) {
    this._maxConcurrentSessions = value;
  }
  public resetMaxConcurrentSessions() {
    this._maxConcurrentSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentSessionsInput() {
    return this._maxConcurrentSessions;
  }

  // max_login_failure_count - computed: false, optional: true, required: false
  private _maxLoginFailureCount?: string; 
  public get maxLoginFailureCount() {
    return this.getStringAttribute('max_login_failure_count');
  }
  public set maxLoginFailureCount(value: string) {
    this._maxLoginFailureCount = value;
  }
  public resetMaxLoginFailureCount() {
    this._maxLoginFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLoginFailureCountInput() {
    return this._maxLoginFailureCount;
  }

  // max_password_history_count - computed: false, optional: true, required: false
  private _maxPasswordHistoryCount?: string; 
  public get maxPasswordHistoryCount() {
    return this.getStringAttribute('max_password_history_count');
  }
  public set maxPasswordHistoryCount(value: string) {
    this._maxPasswordHistoryCount = value;
  }
  public resetMaxPasswordHistoryCount() {
    this._maxPasswordHistoryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordHistoryCountInput() {
    return this._maxPasswordHistoryCount;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new UseraccountprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: UseraccountprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_lock_timeout: cdktf.stringToTerraform(this._accountLockTimeout),
      credentials_timeout_threshold: cdktf.stringToTerraform(this._credentialsTimeoutThreshold),
      id: cdktf.stringToTerraform(this._id),
      login_failure_count_expiry_window: cdktf.stringToTerraform(this._loginFailureCountExpiryWindow),
      max_concurrent_sessions: cdktf.stringToTerraform(this._maxConcurrentSessions),
      max_login_failure_count: cdktf.stringToTerraform(this._maxLoginFailureCount),
      max_password_history_count: cdktf.stringToTerraform(this._maxPasswordHistoryCount),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(useraccountprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_lock_timeout: {
        value: cdktf.stringToHclTerraform(this._accountLockTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_timeout_threshold: {
        value: cdktf.stringToHclTerraform(this._credentialsTimeoutThreshold),
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
      login_failure_count_expiry_window: {
        value: cdktf.stringToHclTerraform(this._loginFailureCountExpiryWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_sessions: {
        value: cdktf.stringToHclTerraform(this._maxConcurrentSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_login_failure_count: {
        value: cdktf.stringToHclTerraform(this._maxLoginFailureCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_password_history_count: {
        value: cdktf.stringToHclTerraform(this._maxPasswordHistoryCount),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(useraccountprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UseraccountprofileConfigpbAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
