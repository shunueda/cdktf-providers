// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudSsoAccessConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#access_configuration_name CloudSsoAccessConfiguration#access_configuration_name}
  */
  readonly accessConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#description CloudSsoAccessConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#directory_id CloudSsoAccessConfiguration#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#force_remove_permission_policies CloudSsoAccessConfiguration#force_remove_permission_policies}
  */
  readonly forceRemovePermissionPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#id CloudSsoAccessConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#relay_state CloudSsoAccessConfiguration#relay_state}
  */
  readonly relayState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#session_duration CloudSsoAccessConfiguration#session_duration}
  */
  readonly sessionDuration?: number;
  /**
  * permission_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#permission_policies CloudSsoAccessConfiguration#permission_policies}
  */
  readonly permissionPolicies?: CloudSsoAccessConfigurationPermissionPolicies[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#timeouts CloudSsoAccessConfiguration#timeouts}
  */
  readonly timeouts?: CloudSsoAccessConfigurationTimeouts;
}
export interface CloudSsoAccessConfigurationPermissionPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#permission_policy_document CloudSsoAccessConfiguration#permission_policy_document}
  */
  readonly permissionPolicyDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#permission_policy_name CloudSsoAccessConfiguration#permission_policy_name}
  */
  readonly permissionPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#permission_policy_type CloudSsoAccessConfiguration#permission_policy_type}
  */
  readonly permissionPolicyType: string;
}

export function cloudSsoAccessConfigurationPermissionPoliciesToTerraform(struct?: CloudSsoAccessConfigurationPermissionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_policy_document: cdktf.stringToTerraform(struct!.permissionPolicyDocument),
    permission_policy_name: cdktf.stringToTerraform(struct!.permissionPolicyName),
    permission_policy_type: cdktf.stringToTerraform(struct!.permissionPolicyType),
  }
}


export function cloudSsoAccessConfigurationPermissionPoliciesToHclTerraform(struct?: CloudSsoAccessConfigurationPermissionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_policy_document: {
      value: cdktf.stringToHclTerraform(struct!.permissionPolicyDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.permissionPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.permissionPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSsoAccessConfigurationPermissionPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudSsoAccessConfigurationPermissionPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionPolicyDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionPolicyDocument = this._permissionPolicyDocument;
    }
    if (this._permissionPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionPolicyName = this._permissionPolicyName;
    }
    if (this._permissionPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionPolicyType = this._permissionPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSsoAccessConfigurationPermissionPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissionPolicyDocument = undefined;
      this._permissionPolicyName = undefined;
      this._permissionPolicyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissionPolicyDocument = value.permissionPolicyDocument;
      this._permissionPolicyName = value.permissionPolicyName;
      this._permissionPolicyType = value.permissionPolicyType;
    }
  }

  // permission_policy_document - computed: false, optional: true, required: false
  private _permissionPolicyDocument?: string; 
  public get permissionPolicyDocument() {
    return this.getStringAttribute('permission_policy_document');
  }
  public set permissionPolicyDocument(value: string) {
    this._permissionPolicyDocument = value;
  }
  public resetPermissionPolicyDocument() {
    this._permissionPolicyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPolicyDocumentInput() {
    return this._permissionPolicyDocument;
  }

  // permission_policy_name - computed: false, optional: false, required: true
  private _permissionPolicyName?: string; 
  public get permissionPolicyName() {
    return this.getStringAttribute('permission_policy_name');
  }
  public set permissionPolicyName(value: string) {
    this._permissionPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPolicyNameInput() {
    return this._permissionPolicyName;
  }

  // permission_policy_type - computed: false, optional: false, required: true
  private _permissionPolicyType?: string; 
  public get permissionPolicyType() {
    return this.getStringAttribute('permission_policy_type');
  }
  public set permissionPolicyType(value: string) {
    this._permissionPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPolicyTypeInput() {
    return this._permissionPolicyType;
  }
}

export class CloudSsoAccessConfigurationPermissionPoliciesList extends cdktf.ComplexList {
  public internalValue? : CloudSsoAccessConfigurationPermissionPolicies[] | cdktf.IResolvable

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
  public get(index: number): CloudSsoAccessConfigurationPermissionPoliciesOutputReference {
    return new CloudSsoAccessConfigurationPermissionPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudSsoAccessConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#create CloudSsoAccessConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#delete CloudSsoAccessConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#update CloudSsoAccessConfiguration#update}
  */
  readonly update?: string;
}

export function cloudSsoAccessConfigurationTimeoutsToTerraform(struct?: CloudSsoAccessConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudSsoAccessConfigurationTimeoutsToHclTerraform(struct?: CloudSsoAccessConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSsoAccessConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudSsoAccessConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSsoAccessConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration alicloud_cloud_sso_access_configuration}
*/
export class CloudSsoAccessConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_sso_access_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudSsoAccessConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudSsoAccessConfiguration to import
  * @param importFromId The id of the existing CloudSsoAccessConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudSsoAccessConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_sso_access_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_sso_access_configuration alicloud_cloud_sso_access_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudSsoAccessConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudSsoAccessConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_sso_access_configuration',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessConfigurationName = config.accessConfigurationName;
    this._description = config.description;
    this._directoryId = config.directoryId;
    this._forceRemovePermissionPolicies = config.forceRemovePermissionPolicies;
    this._id = config.id;
    this._relayState = config.relayState;
    this._sessionDuration = config.sessionDuration;
    this._permissionPolicies.internalValue = config.permissionPolicies;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_configuration_id - computed: true, optional: false, required: false
  public get accessConfigurationId() {
    return this.getStringAttribute('access_configuration_id');
  }

  // access_configuration_name - computed: false, optional: false, required: true
  private _accessConfigurationName?: string; 
  public get accessConfigurationName() {
    return this.getStringAttribute('access_configuration_name');
  }
  public set accessConfigurationName(value: string) {
    this._accessConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigurationNameInput() {
    return this._accessConfigurationName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // force_remove_permission_policies - computed: false, optional: true, required: false
  private _forceRemovePermissionPolicies?: boolean | cdktf.IResolvable; 
  public get forceRemovePermissionPolicies() {
    return this.getBooleanAttribute('force_remove_permission_policies');
  }
  public set forceRemovePermissionPolicies(value: boolean | cdktf.IResolvable) {
    this._forceRemovePermissionPolicies = value;
  }
  public resetForceRemovePermissionPolicies() {
    this._forceRemovePermissionPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRemovePermissionPoliciesInput() {
    return this._forceRemovePermissionPolicies;
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

  // relay_state - computed: false, optional: true, required: false
  private _relayState?: string; 
  public get relayState() {
    return this.getStringAttribute('relay_state');
  }
  public set relayState(value: string) {
    this._relayState = value;
  }
  public resetRelayState() {
    this._relayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayStateInput() {
    return this._relayState;
  }

  // session_duration - computed: true, optional: true, required: false
  private _sessionDuration?: number; 
  public get sessionDuration() {
    return this.getNumberAttribute('session_duration');
  }
  public set sessionDuration(value: number) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // permission_policies - computed: false, optional: true, required: false
  private _permissionPolicies = new CloudSsoAccessConfigurationPermissionPoliciesList(this, "permission_policies", true);
  public get permissionPolicies() {
    return this._permissionPolicies;
  }
  public putPermissionPolicies(value: CloudSsoAccessConfigurationPermissionPolicies[] | cdktf.IResolvable) {
    this._permissionPolicies.internalValue = value;
  }
  public resetPermissionPolicies() {
    this._permissionPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPoliciesInput() {
    return this._permissionPolicies.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudSsoAccessConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudSsoAccessConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_configuration_name: cdktf.stringToTerraform(this._accessConfigurationName),
      description: cdktf.stringToTerraform(this._description),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      force_remove_permission_policies: cdktf.booleanToTerraform(this._forceRemovePermissionPolicies),
      id: cdktf.stringToTerraform(this._id),
      relay_state: cdktf.stringToTerraform(this._relayState),
      session_duration: cdktf.numberToTerraform(this._sessionDuration),
      permission_policies: cdktf.listMapper(cloudSsoAccessConfigurationPermissionPoliciesToTerraform, true)(this._permissionPolicies.internalValue),
      timeouts: cloudSsoAccessConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_configuration_name: {
        value: cdktf.stringToHclTerraform(this._accessConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_id: {
        value: cdktf.stringToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_remove_permission_policies: {
        value: cdktf.booleanToHclTerraform(this._forceRemovePermissionPolicies),
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
      relay_state: {
        value: cdktf.stringToHclTerraform(this._relayState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_duration: {
        value: cdktf.numberToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permission_policies: {
        value: cdktf.listMapperHcl(cloudSsoAccessConfigurationPermissionPoliciesToHclTerraform, true)(this._permissionPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudSsoAccessConfigurationPermissionPoliciesList",
      },
      timeouts: {
        value: cloudSsoAccessConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudSsoAccessConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
