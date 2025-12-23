// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfApiGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * authentication type. secret: key authentication; none: no authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#auth_type TsfApiGroup#auth_type}
  */
  readonly authType?: string;
  /**
  * remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#description TsfApiGroup#description}
  */
  readonly description?: string;
  /**
  * gateway entity ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#gateway_instance_id TsfApiGroup#gateway_instance_id}
  */
  readonly gatewayInstanceId?: string;
  /**
  * grouping context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#group_context TsfApiGroup#group_context}
  */
  readonly groupContext: string;
  /**
  * group name, cannot contain Chinese.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#group_name TsfApiGroup#group_name}
  */
  readonly groupName: string;
  /**
  * grouping type, default ms. ms: microservice grouping; external: external Api grouping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#group_type TsfApiGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#id TsfApiGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * namespace parameter key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#namespace_name_key TsfApiGroup#namespace_name_key}
  */
  readonly namespaceNameKey?: string;
  /**
  * namespace parameter position, path, header or query, the default is path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#namespace_name_key_position TsfApiGroup#namespace_name_key_position}
  */
  readonly namespaceNameKeyPosition?: string;
  /**
  * microservice name parameter key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#service_name_key TsfApiGroup#service_name_key}
  */
  readonly serviceNameKey?: string;
  /**
  * microservice name parameter position, path, header or query, the default is path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#service_name_key_position TsfApiGroup#service_name_key_position}
  */
  readonly serviceNameKeyPosition?: string;
}
export interface TsfApiGroupBindedGatewayDeployGroups {
}

export function tsfApiGroupBindedGatewayDeployGroupsToTerraform(struct?: TsfApiGroupBindedGatewayDeployGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tsfApiGroupBindedGatewayDeployGroupsToHclTerraform(struct?: TsfApiGroupBindedGatewayDeployGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TsfApiGroupBindedGatewayDeployGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfApiGroupBindedGatewayDeployGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfApiGroupBindedGatewayDeployGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // deploy_group_id - computed: true, optional: false, required: false
  public get deployGroupId() {
    return this.getStringAttribute('deploy_group_id');
  }

  // deploy_group_name - computed: true, optional: false, required: false
  public get deployGroupName() {
    return this.getStringAttribute('deploy_group_name');
  }

  // group_status - computed: true, optional: false, required: false
  public get groupStatus() {
    return this.getStringAttribute('group_status');
  }
}

export class TsfApiGroupBindedGatewayDeployGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TsfApiGroupBindedGatewayDeployGroupsOutputReference {
    return new TsfApiGroupBindedGatewayDeployGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group tencentcloud_tsf_api_group}
*/
export class TsfApiGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_api_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfApiGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfApiGroup to import
  * @param importFromId The id of the existing TsfApiGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfApiGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_api_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_group tencentcloud_tsf_api_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfApiGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TsfApiGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_api_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._description = config.description;
    this._gatewayInstanceId = config.gatewayInstanceId;
    this._groupContext = config.groupContext;
    this._groupName = config.groupName;
    this._groupType = config.groupType;
    this._id = config.id;
    this._namespaceNameKey = config.namespaceNameKey;
    this._namespaceNameKeyPosition = config.namespaceNameKeyPosition;
    this._serviceNameKey = config.serviceNameKey;
    this._serviceNameKeyPosition = config.serviceNameKeyPosition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_mode - computed: true, optional: false, required: false
  public get aclMode() {
    return this.getStringAttribute('acl_mode');
  }

  // api_count - computed: true, optional: false, required: false
  public get apiCount() {
    return this.getNumberAttribute('api_count');
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // binded_gateway_deploy_groups - computed: true, optional: false, required: false
  private _bindedGatewayDeployGroups = new TsfApiGroupBindedGatewayDeployGroupsList(this, "binded_gateway_deploy_groups", false);
  public get bindedGatewayDeployGroups() {
    return this._bindedGatewayDeployGroups;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: true, required: false
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

  // gateway_instance_id - computed: true, optional: true, required: false
  private _gatewayInstanceId?: string; 
  public get gatewayInstanceId() {
    return this.getStringAttribute('gateway_instance_id');
  }
  public set gatewayInstanceId(value: string) {
    this._gatewayInstanceId = value;
  }
  public resetGatewayInstanceId() {
    this._gatewayInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInstanceIdInput() {
    return this._gatewayInstanceId;
  }

  // gateway_instance_type - computed: true, optional: false, required: false
  public get gatewayInstanceType() {
    return this.getStringAttribute('gateway_instance_type');
  }

  // group_context - computed: false, optional: false, required: true
  private _groupContext?: string; 
  public get groupContext() {
    return this.getStringAttribute('group_context');
  }
  public set groupContext(value: string) {
    this._groupContext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupContextInput() {
    return this._groupContext;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_type - computed: true, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
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

  // namespace_name_key - computed: true, optional: true, required: false
  private _namespaceNameKey?: string; 
  public get namespaceNameKey() {
    return this.getStringAttribute('namespace_name_key');
  }
  public set namespaceNameKey(value: string) {
    this._namespaceNameKey = value;
  }
  public resetNamespaceNameKey() {
    this._namespaceNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameKeyInput() {
    return this._namespaceNameKey;
  }

  // namespace_name_key_position - computed: true, optional: true, required: false
  private _namespaceNameKeyPosition?: string; 
  public get namespaceNameKeyPosition() {
    return this.getStringAttribute('namespace_name_key_position');
  }
  public set namespaceNameKeyPosition(value: string) {
    this._namespaceNameKeyPosition = value;
  }
  public resetNamespaceNameKeyPosition() {
    this._namespaceNameKeyPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameKeyPositionInput() {
    return this._namespaceNameKeyPosition;
  }

  // service_name_key - computed: true, optional: true, required: false
  private _serviceNameKey?: string; 
  public get serviceNameKey() {
    return this.getStringAttribute('service_name_key');
  }
  public set serviceNameKey(value: string) {
    this._serviceNameKey = value;
  }
  public resetServiceNameKey() {
    this._serviceNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameKeyInput() {
    return this._serviceNameKey;
  }

  // service_name_key_position - computed: true, optional: true, required: false
  private _serviceNameKeyPosition?: string; 
  public get serviceNameKeyPosition() {
    return this.getStringAttribute('service_name_key_position');
  }
  public set serviceNameKeyPosition(value: string) {
    this._serviceNameKeyPosition = value;
  }
  public resetServiceNameKeyPosition() {
    this._serviceNameKeyPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameKeyPositionInput() {
    return this._serviceNameKeyPosition;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      description: cdktf.stringToTerraform(this._description),
      gateway_instance_id: cdktf.stringToTerraform(this._gatewayInstanceId),
      group_context: cdktf.stringToTerraform(this._groupContext),
      group_name: cdktf.stringToTerraform(this._groupName),
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      namespace_name_key: cdktf.stringToTerraform(this._namespaceNameKey),
      namespace_name_key_position: cdktf.stringToTerraform(this._namespaceNameKeyPosition),
      service_name_key: cdktf.stringToTerraform(this._serviceNameKey),
      service_name_key_position: cdktf.stringToTerraform(this._serviceNameKeyPosition),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
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
      gateway_instance_id: {
        value: cdktf.stringToHclTerraform(this._gatewayInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_context: {
        value: cdktf.stringToHclTerraform(this._groupContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
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
      namespace_name_key: {
        value: cdktf.stringToHclTerraform(this._namespaceNameKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_name_key_position: {
        value: cdktf.stringToHclTerraform(this._namespaceNameKeyPosition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name_key: {
        value: cdktf.stringToHclTerraform(this._serviceNameKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name_key_position: {
        value: cdktf.stringToHclTerraform(this._serviceNameKeyPosition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
