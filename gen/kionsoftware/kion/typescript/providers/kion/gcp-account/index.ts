// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account alias is an optional short unique name that helps identify the account within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#account_alias GcpAccount#account_alias}
  */
  readonly accountAlias?: string;
  /**
  * An ID representing the account type within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#account_type_id GcpAccount#account_type_id}
  */
  readonly accountTypeId?: number;
  /**
  * One of "create" or "import".  If "create", Kion will attempt to create a new Google Cloud Project.  If "import", Kion will import the existing Google Cloud Project as specified by google_cloud_project_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#create_mode GcpAccount#create_mode}
  */
  readonly createMode: string;
  /**
  * The GCP resource identifier of the parent of this GCP Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#google_cloud_parent_name GcpAccount#google_cloud_parent_name}
  */
  readonly googleCloudParentName?: string;
  /**
  * The Google Cloud project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#google_cloud_project_id GcpAccount#google_cloud_project_id}
  */
  readonly googleCloudProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#id GcpAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map of labels to assign to the account. The labels must already exist in Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#labels GcpAccount#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#last_updated GcpAccount#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * The name of the Google Cloud account within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#name GcpAccount#name}
  */
  readonly name: string;
  /**
  * The ID of the billing source containing billing data for this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#payer_id GcpAccount#payer_id}
  */
  readonly payerId: number;
  /**
  * The ID of the Kion project to place this account within.  If empty, the account will be placed within the account cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#project_id GcpAccount#project_id}
  */
  readonly projectId?: number;
  /**
  * True to skip periodic access checking on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#skip_access_checking GcpAccount#skip_access_checking}
  */
  readonly skipAccessChecking?: boolean | cdktf.IResolvable;
  /**
  * Date when the Google Cloud account will starting submitting payments against a funding source (YYYY-MM).  Required if placing an account within a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#start_datecode GcpAccount#start_datecode}
  */
  readonly startDatecode?: string;
  /**
  * move_project_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#move_project_settings GcpAccount#move_project_settings}
  */
  readonly moveProjectSettings?: GcpAccountMoveProjectSettings;
}
export interface GcpAccountMoveProjectSettings {
  /**
  * One of "move" or "preserve".  If "move", financial history will be moved to the new project beginning on the date specified by the move_datecode parameter.  If "preserve", financial history will be preserved on the current project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#financials GcpAccount#financials}
  */
  readonly financials?: string;
  /**
  * The start date to use when moving financial data in YYYYMM format.  This only applies when financials is set to move.  If provided, only financial data from this date to the current month will be moved to the new project.  If omitted or 0, all financial data will be moved to the new project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#move_datecode GcpAccount#move_datecode}
  */
  readonly moveDatecode?: number;
}

export function gcpAccountMoveProjectSettingsToTerraform(struct?: GcpAccountMoveProjectSettingsOutputReference | GcpAccountMoveProjectSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    financials: cdktf.stringToTerraform(struct!.financials),
    move_datecode: cdktf.numberToTerraform(struct!.moveDatecode),
  }
}


export function gcpAccountMoveProjectSettingsToHclTerraform(struct?: GcpAccountMoveProjectSettingsOutputReference | GcpAccountMoveProjectSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    financials: {
      value: cdktf.stringToHclTerraform(struct!.financials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    move_datecode: {
      value: cdktf.numberToHclTerraform(struct!.moveDatecode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpAccountMoveProjectSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpAccountMoveProjectSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._financials !== undefined) {
      hasAnyValues = true;
      internalValueResult.financials = this._financials;
    }
    if (this._moveDatecode !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveDatecode = this._moveDatecode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpAccountMoveProjectSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._financials = undefined;
      this._moveDatecode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._financials = value.financials;
      this._moveDatecode = value.moveDatecode;
    }
  }

  // financials - computed: false, optional: true, required: false
  private _financials?: string; 
  public get financials() {
    return this.getStringAttribute('financials');
  }
  public set financials(value: string) {
    this._financials = value;
  }
  public resetFinancials() {
    this._financials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialsInput() {
    return this._financials;
  }

  // move_datecode - computed: false, optional: true, required: false
  private _moveDatecode?: number; 
  public get moveDatecode() {
    return this.getNumberAttribute('move_datecode');
  }
  public set moveDatecode(value: number) {
    this._moveDatecode = value;
  }
  public resetMoveDatecode() {
    this._moveDatecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveDatecodeInput() {
    return this._moveDatecode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account kion_gcp_account}
*/
export class GcpAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_gcp_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpAccount to import
  * @param importFromId The id of the existing GcpAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_gcp_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/gcp_account kion_gcp_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpAccountConfig
  */
  public constructor(scope: Construct, id: string, config: GcpAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_gcp_account',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountAlias = config.accountAlias;
    this._accountTypeId = config.accountTypeId;
    this._createMode = config.createMode;
    this._googleCloudParentName = config.googleCloudParentName;
    this._googleCloudProjectId = config.googleCloudProjectId;
    this._id = config.id;
    this._labels = config.labels;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._payerId = config.payerId;
    this._projectId = config.projectId;
    this._skipAccessChecking = config.skipAccessChecking;
    this._startDatecode = config.startDatecode;
    this._moveProjectSettings.internalValue = config.moveProjectSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_alias - computed: false, optional: true, required: false
  private _accountAlias?: string; 
  public get accountAlias() {
    return this.getStringAttribute('account_alias');
  }
  public set accountAlias(value: string) {
    this._accountAlias = value;
  }
  public resetAccountAlias() {
    this._accountAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAliasInput() {
    return this._accountAlias;
  }

  // account_type_id - computed: true, optional: true, required: false
  private _accountTypeId?: number; 
  public get accountTypeId() {
    return this.getNumberAttribute('account_type_id');
  }
  public set accountTypeId(value: number) {
    this._accountTypeId = value;
  }
  public resetAccountTypeId() {
    this._accountTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeIdInput() {
    return this._accountTypeId;
  }

  // create_mode - computed: false, optional: false, required: true
  private _createMode?: string; 
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string) {
    this._createMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // google_cloud_parent_name - computed: false, optional: true, required: false
  private _googleCloudParentName?: string; 
  public get googleCloudParentName() {
    return this.getStringAttribute('google_cloud_parent_name');
  }
  public set googleCloudParentName(value: string) {
    this._googleCloudParentName = value;
  }
  public resetGoogleCloudParentName() {
    this._googleCloudParentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudParentNameInput() {
    return this._googleCloudParentName;
  }

  // google_cloud_project_id - computed: true, optional: true, required: false
  private _googleCloudProjectId?: string; 
  public get googleCloudProjectId() {
    return this.getStringAttribute('google_cloud_project_id');
  }
  public set googleCloudProjectId(value: string) {
    this._googleCloudProjectId = value;
  }
  public resetGoogleCloudProjectId() {
    this._googleCloudProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudProjectIdInput() {
    return this._googleCloudProjectId;
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

  // labels - computed: false, optional: true, required: false
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // payer_id - computed: false, optional: false, required: true
  private _payerId?: number; 
  public get payerId() {
    return this.getNumberAttribute('payer_id');
  }
  public set payerId(value: number) {
    this._payerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payerIdInput() {
    return this._payerId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // skip_access_checking - computed: true, optional: true, required: false
  private _skipAccessChecking?: boolean | cdktf.IResolvable; 
  public get skipAccessChecking() {
    return this.getBooleanAttribute('skip_access_checking');
  }
  public set skipAccessChecking(value: boolean | cdktf.IResolvable) {
    this._skipAccessChecking = value;
  }
  public resetSkipAccessChecking() {
    this._skipAccessChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAccessCheckingInput() {
    return this._skipAccessChecking;
  }

  // start_datecode - computed: true, optional: true, required: false
  private _startDatecode?: string; 
  public get startDatecode() {
    return this.getStringAttribute('start_datecode');
  }
  public set startDatecode(value: string) {
    this._startDatecode = value;
  }
  public resetStartDatecode() {
    this._startDatecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDatecodeInput() {
    return this._startDatecode;
  }

  // move_project_settings - computed: false, optional: true, required: false
  private _moveProjectSettings = new GcpAccountMoveProjectSettingsOutputReference(this, "move_project_settings");
  public get moveProjectSettings() {
    return this._moveProjectSettings;
  }
  public putMoveProjectSettings(value: GcpAccountMoveProjectSettings) {
    this._moveProjectSettings.internalValue = value;
  }
  public resetMoveProjectSettings() {
    this._moveProjectSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveProjectSettingsInput() {
    return this._moveProjectSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_alias: cdktf.stringToTerraform(this._accountAlias),
      account_type_id: cdktf.numberToTerraform(this._accountTypeId),
      create_mode: cdktf.stringToTerraform(this._createMode),
      google_cloud_parent_name: cdktf.stringToTerraform(this._googleCloudParentName),
      google_cloud_project_id: cdktf.stringToTerraform(this._googleCloudProjectId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      payer_id: cdktf.numberToTerraform(this._payerId),
      project_id: cdktf.numberToTerraform(this._projectId),
      skip_access_checking: cdktf.booleanToTerraform(this._skipAccessChecking),
      start_datecode: cdktf.stringToTerraform(this._startDatecode),
      move_project_settings: gcpAccountMoveProjectSettingsToTerraform(this._moveProjectSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_alias: {
        value: cdktf.stringToHclTerraform(this._accountAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_type_id: {
        value: cdktf.numberToHclTerraform(this._accountTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_mode: {
        value: cdktf.stringToHclTerraform(this._createMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_cloud_parent_name: {
        value: cdktf.stringToHclTerraform(this._googleCloudParentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_cloud_project_id: {
        value: cdktf.stringToHclTerraform(this._googleCloudProjectId),
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
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
      payer_id: {
        value: cdktf.numberToHclTerraform(this._payerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_access_checking: {
        value: cdktf.booleanToHclTerraform(this._skipAccessChecking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_datecode: {
        value: cdktf.stringToHclTerraform(this._startDatecode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      move_project_settings: {
        value: gcpAccountMoveProjectSettingsToHclTerraform(this._moveProjectSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GcpAccountMoveProjectSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
