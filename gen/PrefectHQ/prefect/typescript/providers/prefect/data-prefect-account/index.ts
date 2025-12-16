// https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/data-sources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrefectAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/data-sources/account#id DataPrefectAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Group of settings related to accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/data-sources/account#settings DataPrefectAccount#settings}
  */
  readonly settings?: DataPrefectAccountSettings;
}
export interface DataPrefectAccountSettings {
  /**
  * Whether to use AI to generate log summaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/data-sources/account#ai_log_summaries DataPrefectAccount#ai_log_summaries}
  */
  readonly aiLogSummaries?: boolean | cdktf.IResolvable;
  /**
  * Whether or not this account allows public workspaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/data-sources/account#allow_public_workspaces DataPrefectAccount#allow_public_workspaces}
  */
  readonly allowPublicWorkspaces?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the use of managed work pools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/data-sources/account#managed_execution DataPrefectAccount#managed_execution}
  */
  readonly managedExecution?: boolean | cdktf.IResolvable;
}

export function dataPrefectAccountSettingsToTerraform(struct?: DataPrefectAccountSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_log_summaries: cdktf.booleanToTerraform(struct!.aiLogSummaries),
    allow_public_workspaces: cdktf.booleanToTerraform(struct!.allowPublicWorkspaces),
    managed_execution: cdktf.booleanToTerraform(struct!.managedExecution),
  }
}


export function dataPrefectAccountSettingsToHclTerraform(struct?: DataPrefectAccountSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_log_summaries: {
      value: cdktf.booleanToHclTerraform(struct!.aiLogSummaries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_public_workspaces: {
      value: cdktf.booleanToHclTerraform(struct!.allowPublicWorkspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed_execution: {
      value: cdktf.booleanToHclTerraform(struct!.managedExecution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPrefectAccountSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAccountSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiLogSummaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiLogSummaries = this._aiLogSummaries;
    }
    if (this._allowPublicWorkspaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPublicWorkspaces = this._allowPublicWorkspaces;
    }
    if (this._managedExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedExecution = this._managedExecution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAccountSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiLogSummaries = undefined;
      this._allowPublicWorkspaces = undefined;
      this._managedExecution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiLogSummaries = value.aiLogSummaries;
      this._allowPublicWorkspaces = value.allowPublicWorkspaces;
      this._managedExecution = value.managedExecution;
    }
  }

  // ai_log_summaries - computed: true, optional: true, required: false
  private _aiLogSummaries?: boolean | cdktf.IResolvable; 
  public get aiLogSummaries() {
    return this.getBooleanAttribute('ai_log_summaries');
  }
  public set aiLogSummaries(value: boolean | cdktf.IResolvable) {
    this._aiLogSummaries = value;
  }
  public resetAiLogSummaries() {
    this._aiLogSummaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiLogSummariesInput() {
    return this._aiLogSummaries;
  }

  // allow_public_workspaces - computed: true, optional: true, required: false
  private _allowPublicWorkspaces?: boolean | cdktf.IResolvable; 
  public get allowPublicWorkspaces() {
    return this.getBooleanAttribute('allow_public_workspaces');
  }
  public set allowPublicWorkspaces(value: boolean | cdktf.IResolvable) {
    this._allowPublicWorkspaces = value;
  }
  public resetAllowPublicWorkspaces() {
    this._allowPublicWorkspaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPublicWorkspacesInput() {
    return this._allowPublicWorkspaces;
  }

  // managed_execution - computed: true, optional: true, required: false
  private _managedExecution?: boolean | cdktf.IResolvable; 
  public get managedExecution() {
    return this.getBooleanAttribute('managed_execution');
  }
  public set managedExecution(value: boolean | cdktf.IResolvable) {
    this._managedExecution = value;
  }
  public resetManagedExecution() {
    this._managedExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedExecutionInput() {
    return this._managedExecution;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/data-sources/account prefect_account}
*/
export class DataPrefectAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrefectAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrefectAccount to import
  * @param importFromId The id of the existing DataPrefectAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/data-sources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrefectAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/data-sources/account prefect_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrefectAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPrefectAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prefect_account',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.92.0',
        providerVersionConstraint: '2.92.0'
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
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_email - computed: true, optional: false, required: false
  public get billingEmail() {
    return this.getStringAttribute('billing_email');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }

  // handle - computed: true, optional: false, required: false
  public get handle() {
    return this.getStringAttribute('handle');
  }

  // id - computed: false, optional: true, required: false
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

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DataPrefectAccountSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataPrefectAccountSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      settings: dataPrefectAccountSettingsToTerraform(this._settings.internalValue),
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
      settings: {
        value: dataPrefectAccountSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPrefectAccountSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
