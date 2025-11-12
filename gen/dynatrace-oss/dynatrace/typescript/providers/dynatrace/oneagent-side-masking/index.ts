// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_side_masking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OneagentSideMaskingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_side_masking#id OneagentSideMasking#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Exclude email addresses from URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_side_masking#is_email_masking_enabled OneagentSideMasking#is_email_masking_enabled}
  */
  readonly isEmailMaskingEnabled: boolean | cdktf.IResolvable;
  /**
  * Exclude IBANs and payment card numbers from URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_side_masking#is_financial_masking_enabled OneagentSideMasking#is_financial_masking_enabled}
  */
  readonly isFinancialMaskingEnabled: boolean | cdktf.IResolvable;
  /**
  * Exclude hexadecimal IDs and consecutive numbers above 5 digits from URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_side_masking#is_numbers_masking_enabled OneagentSideMasking#is_numbers_masking_enabled}
  */
  readonly isNumbersMaskingEnabled: boolean | cdktf.IResolvable;
  /**
  * Exclude query parameters from URLs and web requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_side_masking#is_query_masking_enabled OneagentSideMasking#is_query_masking_enabled}
  */
  readonly isQueryMaskingEnabled: boolean | cdktf.IResolvable;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_side_masking#process_group_id OneagentSideMasking#process_group_id}
  */
  readonly processGroupId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_side_masking dynatrace_oneagent_side_masking}
*/
export class OneagentSideMasking extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_oneagent_side_masking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OneagentSideMasking resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OneagentSideMasking to import
  * @param importFromId The id of the existing OneagentSideMasking that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_side_masking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OneagentSideMasking to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_oneagent_side_masking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_side_masking dynatrace_oneagent_side_masking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OneagentSideMaskingConfig
  */
  public constructor(scope: Construct, id: string, config: OneagentSideMaskingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_oneagent_side_masking',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._isEmailMaskingEnabled = config.isEmailMaskingEnabled;
    this._isFinancialMaskingEnabled = config.isFinancialMaskingEnabled;
    this._isNumbersMaskingEnabled = config.isNumbersMaskingEnabled;
    this._isQueryMaskingEnabled = config.isQueryMaskingEnabled;
    this._processGroupId = config.processGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_email_masking_enabled - computed: false, optional: false, required: true
  private _isEmailMaskingEnabled?: boolean | cdktf.IResolvable; 
  public get isEmailMaskingEnabled() {
    return this.getBooleanAttribute('is_email_masking_enabled');
  }
  public set isEmailMaskingEnabled(value: boolean | cdktf.IResolvable) {
    this._isEmailMaskingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEmailMaskingEnabledInput() {
    return this._isEmailMaskingEnabled;
  }

  // is_financial_masking_enabled - computed: false, optional: false, required: true
  private _isFinancialMaskingEnabled?: boolean | cdktf.IResolvable; 
  public get isFinancialMaskingEnabled() {
    return this.getBooleanAttribute('is_financial_masking_enabled');
  }
  public set isFinancialMaskingEnabled(value: boolean | cdktf.IResolvable) {
    this._isFinancialMaskingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isFinancialMaskingEnabledInput() {
    return this._isFinancialMaskingEnabled;
  }

  // is_numbers_masking_enabled - computed: false, optional: false, required: true
  private _isNumbersMaskingEnabled?: boolean | cdktf.IResolvable; 
  public get isNumbersMaskingEnabled() {
    return this.getBooleanAttribute('is_numbers_masking_enabled');
  }
  public set isNumbersMaskingEnabled(value: boolean | cdktf.IResolvable) {
    this._isNumbersMaskingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isNumbersMaskingEnabledInput() {
    return this._isNumbersMaskingEnabled;
  }

  // is_query_masking_enabled - computed: false, optional: false, required: true
  private _isQueryMaskingEnabled?: boolean | cdktf.IResolvable; 
  public get isQueryMaskingEnabled() {
    return this.getBooleanAttribute('is_query_masking_enabled');
  }
  public set isQueryMaskingEnabled(value: boolean | cdktf.IResolvable) {
    this._isQueryMaskingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isQueryMaskingEnabledInput() {
    return this._isQueryMaskingEnabled;
  }

  // process_group_id - computed: false, optional: true, required: false
  private _processGroupId?: string; 
  public get processGroupId() {
    return this.getStringAttribute('process_group_id');
  }
  public set processGroupId(value: string) {
    this._processGroupId = value;
  }
  public resetProcessGroupId() {
    this._processGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupIdInput() {
    return this._processGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_email_masking_enabled: cdktf.booleanToTerraform(this._isEmailMaskingEnabled),
      is_financial_masking_enabled: cdktf.booleanToTerraform(this._isFinancialMaskingEnabled),
      is_numbers_masking_enabled: cdktf.booleanToTerraform(this._isNumbersMaskingEnabled),
      is_query_masking_enabled: cdktf.booleanToTerraform(this._isQueryMaskingEnabled),
      process_group_id: cdktf.stringToTerraform(this._processGroupId),
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
      is_email_masking_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEmailMaskingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_financial_masking_enabled: {
        value: cdktf.booleanToHclTerraform(this._isFinancialMaskingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_numbers_masking_enabled: {
        value: cdktf.booleanToHclTerraform(this._isNumbersMaskingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_query_masking_enabled: {
        value: cdktf.booleanToHclTerraform(this._isQueryMaskingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      process_group_id: {
        value: cdktf.stringToHclTerraform(this._processGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
