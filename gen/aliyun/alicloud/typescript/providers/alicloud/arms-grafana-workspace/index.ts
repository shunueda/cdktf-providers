// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArmsGrafanaWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#account_number ArmsGrafanaWorkspace#account_number}
  */
  readonly accountNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#aliyun_lang ArmsGrafanaWorkspace#aliyun_lang}
  */
  readonly aliyunLang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#auto_renew ArmsGrafanaWorkspace#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#custom_account_number ArmsGrafanaWorkspace#custom_account_number}
  */
  readonly customAccountNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#description ArmsGrafanaWorkspace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#duration ArmsGrafanaWorkspace#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#grafana_version ArmsGrafanaWorkspace#grafana_version}
  */
  readonly grafanaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#grafana_workspace_edition ArmsGrafanaWorkspace#grafana_workspace_edition}
  */
  readonly grafanaWorkspaceEdition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#grafana_workspace_name ArmsGrafanaWorkspace#grafana_workspace_name}
  */
  readonly grafanaWorkspaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#id ArmsGrafanaWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#password ArmsGrafanaWorkspace#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#pricing_cycle ArmsGrafanaWorkspace#pricing_cycle}
  */
  readonly pricingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#resource_group_id ArmsGrafanaWorkspace#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#tags ArmsGrafanaWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#timeouts ArmsGrafanaWorkspace#timeouts}
  */
  readonly timeouts?: ArmsGrafanaWorkspaceTimeouts;
}
export interface ArmsGrafanaWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#create ArmsGrafanaWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#delete ArmsGrafanaWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#update ArmsGrafanaWorkspace#update}
  */
  readonly update?: string;
}

export function armsGrafanaWorkspaceTimeoutsToTerraform(struct?: ArmsGrafanaWorkspaceTimeouts | cdktf.IResolvable): any {
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


export function armsGrafanaWorkspaceTimeoutsToHclTerraform(struct?: ArmsGrafanaWorkspaceTimeouts | cdktf.IResolvable): any {
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

export class ArmsGrafanaWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArmsGrafanaWorkspaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ArmsGrafanaWorkspaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace alicloud_arms_grafana_workspace}
*/
export class ArmsGrafanaWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_arms_grafana_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArmsGrafanaWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArmsGrafanaWorkspace to import
  * @param importFromId The id of the existing ArmsGrafanaWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArmsGrafanaWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_arms_grafana_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_grafana_workspace alicloud_arms_grafana_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArmsGrafanaWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: ArmsGrafanaWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_arms_grafana_workspace',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountNumber = config.accountNumber;
    this._aliyunLang = config.aliyunLang;
    this._autoRenew = config.autoRenew;
    this._customAccountNumber = config.customAccountNumber;
    this._description = config.description;
    this._duration = config.duration;
    this._grafanaVersion = config.grafanaVersion;
    this._grafanaWorkspaceEdition = config.grafanaWorkspaceEdition;
    this._grafanaWorkspaceName = config.grafanaWorkspaceName;
    this._id = config.id;
    this._password = config.password;
    this._pricingCycle = config.pricingCycle;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_number - computed: false, optional: true, required: false
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  public resetAccountNumber() {
    this._accountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // aliyun_lang - computed: false, optional: true, required: false
  private _aliyunLang?: string; 
  public get aliyunLang() {
    return this.getStringAttribute('aliyun_lang');
  }
  public set aliyunLang(value: string) {
    this._aliyunLang = value;
  }
  public resetAliyunLang() {
    this._aliyunLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliyunLangInput() {
    return this._aliyunLang;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_account_number - computed: false, optional: true, required: false
  private _customAccountNumber?: string; 
  public get customAccountNumber() {
    return this.getStringAttribute('custom_account_number');
  }
  public set customAccountNumber(value: string) {
    this._customAccountNumber = value;
  }
  public resetCustomAccountNumber() {
    this._customAccountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAccountNumberInput() {
    return this._customAccountNumber;
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

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // grafana_version - computed: false, optional: true, required: false
  private _grafanaVersion?: string; 
  public get grafanaVersion() {
    return this.getStringAttribute('grafana_version');
  }
  public set grafanaVersion(value: string) {
    this._grafanaVersion = value;
  }
  public resetGrafanaVersion() {
    this._grafanaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaVersionInput() {
    return this._grafanaVersion;
  }

  // grafana_workspace_edition - computed: false, optional: true, required: false
  private _grafanaWorkspaceEdition?: string; 
  public get grafanaWorkspaceEdition() {
    return this.getStringAttribute('grafana_workspace_edition');
  }
  public set grafanaWorkspaceEdition(value: string) {
    this._grafanaWorkspaceEdition = value;
  }
  public resetGrafanaWorkspaceEdition() {
    this._grafanaWorkspaceEdition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaWorkspaceEditionInput() {
    return this._grafanaWorkspaceEdition;
  }

  // grafana_workspace_name - computed: false, optional: false, required: true
  private _grafanaWorkspaceName?: string; 
  public get grafanaWorkspaceName() {
    return this.getStringAttribute('grafana_workspace_name');
  }
  public set grafanaWorkspaceName(value: string) {
    this._grafanaWorkspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaWorkspaceNameInput() {
    return this._grafanaWorkspaceName;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pricing_cycle - computed: false, optional: true, required: false
  private _pricingCycle?: string; 
  public get pricingCycle() {
    return this.getStringAttribute('pricing_cycle');
  }
  public set pricingCycle(value: string) {
    this._pricingCycle = value;
  }
  public resetPricingCycle() {
    this._pricingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingCycleInput() {
    return this._pricingCycle;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ArmsGrafanaWorkspaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArmsGrafanaWorkspaceTimeouts) {
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
      account_number: cdktf.stringToTerraform(this._accountNumber),
      aliyun_lang: cdktf.stringToTerraform(this._aliyunLang),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      custom_account_number: cdktf.stringToTerraform(this._customAccountNumber),
      description: cdktf.stringToTerraform(this._description),
      duration: cdktf.stringToTerraform(this._duration),
      grafana_version: cdktf.stringToTerraform(this._grafanaVersion),
      grafana_workspace_edition: cdktf.stringToTerraform(this._grafanaWorkspaceEdition),
      grafana_workspace_name: cdktf.stringToTerraform(this._grafanaWorkspaceName),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      pricing_cycle: cdktf.stringToTerraform(this._pricingCycle),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: armsGrafanaWorkspaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_number: {
        value: cdktf.stringToHclTerraform(this._accountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aliyun_lang: {
        value: cdktf.stringToHclTerraform(this._aliyunLang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_account_number: {
        value: cdktf.stringToHclTerraform(this._customAccountNumber),
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
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grafana_version: {
        value: cdktf.stringToHclTerraform(this._grafanaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grafana_workspace_edition: {
        value: cdktf.stringToHclTerraform(this._grafanaWorkspaceEdition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grafana_workspace_name: {
        value: cdktf.stringToHclTerraform(this._grafanaWorkspaceName),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_cycle: {
        value: cdktf.stringToHclTerraform(this._pricingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: armsGrafanaWorkspaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArmsGrafanaWorkspaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
