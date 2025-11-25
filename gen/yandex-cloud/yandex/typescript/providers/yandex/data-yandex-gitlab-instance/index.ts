// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexGitlabInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Approval rules configuration. One of: NONE, BASIC, STANDARD, ADVANCED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance#approval_rules_id DataYandexGitlabInstance#approval_rules_id}
  */
  readonly approvalRulesId?: string;
  /**
  * Approval rules token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance#approval_rules_token DataYandexGitlabInstance#approval_rules_token}
  */
  readonly approvalRulesToken?: string;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance#deletion_protection DataYandexGitlabInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance#description DataYandexGitlabInstance#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance#folder_id DataYandexGitlabInstance#folder_id}
  */
  readonly folderId?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance#id DataYandexGitlabInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance#labels DataYandexGitlabInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The `true` value means that untagged images will be deleted during maintenance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance#maintenance_delete_untagged DataYandexGitlabInstance#maintenance_delete_untagged}
  */
  readonly maintenanceDeleteUntagged?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance#timeouts DataYandexGitlabInstance#timeouts}
  */
  readonly timeouts?: DataYandexGitlabInstanceTimeouts;
}
export interface DataYandexGitlabInstanceTimeouts {
}

export function dataYandexGitlabInstanceTimeoutsToTerraform(struct?: DataYandexGitlabInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexGitlabInstanceTimeoutsToHclTerraform(struct?: DataYandexGitlabInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexGitlabInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexGitlabInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexGitlabInstanceTimeouts | cdktf.IResolvable | undefined) {
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance yandex_gitlab_instance}
*/
export class DataYandexGitlabInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_gitlab_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexGitlabInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexGitlabInstance to import
  * @param importFromId The id of the existing DataYandexGitlabInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexGitlabInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_gitlab_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/gitlab_instance yandex_gitlab_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexGitlabInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexGitlabInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_gitlab_instance',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvalRulesId = config.approvalRulesId;
    this._approvalRulesToken = config.approvalRulesToken;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._maintenanceDeleteUntagged = config.maintenanceDeleteUntagged;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_email - computed: true, optional: false, required: false
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }

  // admin_login - computed: true, optional: false, required: false
  public get adminLogin() {
    return this.getStringAttribute('admin_login');
  }

  // approval_rules_id - computed: true, optional: true, required: false
  private _approvalRulesId?: string; 
  public get approvalRulesId() {
    return this.getStringAttribute('approval_rules_id');
  }
  public set approvalRulesId(value: string) {
    this._approvalRulesId = value;
  }
  public resetApprovalRulesId() {
    this._approvalRulesId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRulesIdInput() {
    return this._approvalRulesId;
  }

  // approval_rules_token - computed: false, optional: true, required: false
  private _approvalRulesToken?: string; 
  public get approvalRulesToken() {
    return this.getStringAttribute('approval_rules_token');
  }
  public set approvalRulesToken(value: string) {
    this._approvalRulesToken = value;
  }
  public resetApprovalRulesToken() {
    this._approvalRulesToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRulesTokenInput() {
    return this._approvalRulesToken;
  }

  // backup_retain_period_days - computed: true, optional: false, required: false
  public get backupRetainPeriodDays() {
    return this.getNumberAttribute('backup_retain_period_days');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // gitlab_version - computed: true, optional: false, required: false
  public get gitlabVersion() {
    return this.getStringAttribute('gitlab_version');
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

  // maintenance_delete_untagged - computed: true, optional: true, required: false
  private _maintenanceDeleteUntagged?: boolean | cdktf.IResolvable; 
  public get maintenanceDeleteUntagged() {
    return this.getBooleanAttribute('maintenance_delete_untagged');
  }
  public set maintenanceDeleteUntagged(value: boolean | cdktf.IResolvable) {
    this._maintenanceDeleteUntagged = value;
  }
  public resetMaintenanceDeleteUntagged() {
    this._maintenanceDeleteUntagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDeleteUntaggedInput() {
    return this._maintenanceDeleteUntagged;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_preset_id - computed: true, optional: false, required: false
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // timeouts - computed: false, optional: true, required: true
  private _timeouts = new DataYandexGitlabInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataYandexGitlabInstanceTimeouts) {
    this._timeouts.internalValue = value;
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
      approval_rules_id: cdktf.stringToTerraform(this._approvalRulesId),
      approval_rules_token: cdktf.stringToTerraform(this._approvalRulesToken),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      maintenance_delete_untagged: cdktf.booleanToTerraform(this._maintenanceDeleteUntagged),
      timeouts: dataYandexGitlabInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_rules_id: {
        value: cdktf.stringToHclTerraform(this._approvalRulesId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_rules_token: {
        value: cdktf.stringToHclTerraform(this._approvalRulesToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maintenance_delete_untagged: {
        value: cdktf.booleanToHclTerraform(this._maintenanceDeleteUntagged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dataYandexGitlabInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexGitlabInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
