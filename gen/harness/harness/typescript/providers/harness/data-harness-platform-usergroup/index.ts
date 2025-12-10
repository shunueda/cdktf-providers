// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_usergroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformUsergroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_usergroup#id DataHarnessPlatformUsergroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_usergroup#identifier DataHarnessPlatformUsergroup#identifier}
  */
  readonly identifier?: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_usergroup#name DataHarnessPlatformUsergroup#name}
  */
  readonly name?: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_usergroup#org_id DataHarnessPlatformUsergroup#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_usergroup#project_id DataHarnessPlatformUsergroup#project_id}
  */
  readonly projectId?: string;
  /**
  * notification_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_usergroup#notification_configs DataHarnessPlatformUsergroup#notification_configs}
  */
  readonly notificationConfigs?: DataHarnessPlatformUsergroupNotificationConfigs[] | cdktf.IResolvable;
}
export interface DataHarnessPlatformUsergroupNotificationConfigs {
}

export function dataHarnessPlatformUsergroupNotificationConfigsToTerraform(struct?: DataHarnessPlatformUsergroupNotificationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformUsergroupNotificationConfigsToHclTerraform(struct?: DataHarnessPlatformUsergroupNotificationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformUsergroupNotificationConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformUsergroupNotificationConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformUsergroupNotificationConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // group_email - computed: true, optional: false, required: false
  public get groupEmail() {
    return this.getStringAttribute('group_email');
  }

  // microsoft_teams_webhook_url - computed: true, optional: false, required: false
  public get microsoftTeamsWebhookUrl() {
    return this.getStringAttribute('microsoft_teams_webhook_url');
  }

  // pager_duty_key - computed: true, optional: false, required: false
  public get pagerDutyKey() {
    return this.getStringAttribute('pager_duty_key');
  }

  // send_email_to_all_users - computed: true, optional: false, required: false
  public get sendEmailToAllUsers() {
    return this.getBooleanAttribute('send_email_to_all_users');
  }

  // slack_webhook_url - computed: true, optional: false, required: false
  public get slackWebhookUrl() {
    return this.getStringAttribute('slack_webhook_url');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataHarnessPlatformUsergroupNotificationConfigsList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformUsergroupNotificationConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformUsergroupNotificationConfigsOutputReference {
    return new DataHarnessPlatformUsergroupNotificationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_usergroup harness_platform_usergroup}
*/
export class DataHarnessPlatformUsergroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_usergroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformUsergroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformUsergroup to import
  * @param importFromId The id of the existing DataHarnessPlatformUsergroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_usergroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformUsergroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_usergroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_usergroup harness_platform_usergroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformUsergroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformUsergroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_usergroup',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._notificationConfigs.internalValue = config.notificationConfigs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // externally_managed - computed: true, optional: false, required: false
  public get externallyManaged() {
    return this.getBooleanAttribute('externally_managed');
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

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // linked_sso_display_name - computed: true, optional: false, required: false
  public get linkedSsoDisplayName() {
    return this.getStringAttribute('linked_sso_display_name');
  }

  // linked_sso_id - computed: true, optional: false, required: false
  public get linkedSsoId() {
    return this.getStringAttribute('linked_sso_id');
  }

  // linked_sso_type - computed: true, optional: false, required: false
  public get linkedSsoType() {
    return this.getStringAttribute('linked_sso_type');
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // sso_group_id - computed: true, optional: false, required: false
  public get ssoGroupId() {
    return this.getStringAttribute('sso_group_id');
  }

  // sso_group_name - computed: true, optional: false, required: false
  public get ssoGroupName() {
    return this.getStringAttribute('sso_group_name');
  }

  // sso_linked - computed: true, optional: false, required: false
  public get ssoLinked() {
    return this.getBooleanAttribute('sso_linked');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }

  // notification_configs - computed: false, optional: true, required: false
  private _notificationConfigs = new DataHarnessPlatformUsergroupNotificationConfigsList(this, "notification_configs", true);
  public get notificationConfigs() {
    return this._notificationConfigs;
  }
  public putNotificationConfigs(value: DataHarnessPlatformUsergroupNotificationConfigs[] | cdktf.IResolvable) {
    this._notificationConfigs.internalValue = value;
  }
  public resetNotificationConfigs() {
    this._notificationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigsInput() {
    return this._notificationConfigs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      notification_configs: cdktf.listMapper(dataHarnessPlatformUsergroupNotificationConfigsToTerraform, true)(this._notificationConfigs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_configs: {
        value: cdktf.listMapperHcl(dataHarnessPlatformUsergroupNotificationConfigsToHclTerraform, true)(this._notificationConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHarnessPlatformUsergroupNotificationConfigsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
