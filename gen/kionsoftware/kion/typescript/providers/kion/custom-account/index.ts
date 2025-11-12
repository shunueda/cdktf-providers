// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account alias is an optional short unique name that helps identify the account within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#account_alias CustomAccount#account_alias}
  */
  readonly accountAlias?: string;
  /**
  * The account number of the custom account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#account_number CustomAccount#account_number}
  */
  readonly accountNumber: string;
  /**
  * An ID representing the account type within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#account_type_id CustomAccount#account_type_id}
  */
  readonly accountTypeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#id CustomAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map of labels to assign to the account. The labels must already exist in Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#labels CustomAccount#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#last_updated CustomAccount#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * The name of the custom account within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#name CustomAccount#name}
  */
  readonly name: string;
  /**
  * The ID of the billing source containing billing data for this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#payer_id CustomAccount#payer_id}
  */
  readonly payerId: number;
  /**
  * The ID of the Kion project to place this account within. If empty, the account will be placed within the account cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#project_id CustomAccount#project_id}
  */
  readonly projectId?: number;
  /**
  * True to skip periodic access checking on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#skip_access_checking CustomAccount#skip_access_checking}
  */
  readonly skipAccessChecking?: boolean | cdktf.IResolvable;
  /**
  * Date when the custom account will starting submitting payments against a funding source (YYYY-MM). Required if placing an account within a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#start_datecode CustomAccount#start_datecode}
  */
  readonly startDatecode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account kion_custom_account}
*/
export class CustomAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_custom_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomAccount to import
  * @param importFromId The id of the existing CustomAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_custom_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_account kion_custom_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CustomAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_custom_account',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29',
        providerVersionConstraint: '0.3.29'
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
    this._accountNumber = config.accountNumber;
    this._accountTypeId = config.accountTypeId;
    this._id = config.id;
    this._labels = config.labels;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._payerId = config.payerId;
    this._projectId = config.projectId;
    this._skipAccessChecking = config.skipAccessChecking;
    this._startDatecode = config.startDatecode;
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

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_alias: cdktf.stringToTerraform(this._accountAlias),
      account_number: cdktf.stringToTerraform(this._accountNumber),
      account_type_id: cdktf.numberToTerraform(this._accountTypeId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      payer_id: cdktf.numberToTerraform(this._payerId),
      project_id: cdktf.numberToTerraform(this._projectId),
      skip_access_checking: cdktf.booleanToTerraform(this._skipAccessChecking),
      start_datecode: cdktf.stringToTerraform(this._startDatecode),
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
      account_number: {
        value: cdktf.stringToHclTerraform(this._accountNumber),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
