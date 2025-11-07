// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktapamDatabasePasswordSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, requires passwords to be rotated after a period of time has passed. You must also set the `periodic_rotation_duration_in_seconds` param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#enable_periodic_rotation DataOktapamDatabasePasswordSettings#enable_periodic_rotation}
  */
  readonly enablePeriodicRotation?: boolean | cdktf.IResolvable;
  /**
  * The maximum length allowed for the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#max_length DataOktapamDatabasePasswordSettings#max_length}
  */
  readonly maxLength?: number;
  /**
  * The minimum length allowed for the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#min_length DataOktapamDatabasePasswordSettings#min_length}
  */
  readonly minLength?: number;
  /**
  * If `periodic_rotation` is enabled, specifies how often passwords are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#periodic_rotation_duration_in_seconds DataOktapamDatabasePasswordSettings#periodic_rotation_duration_in_seconds}
  */
  readonly periodicRotationDurationInSeconds?: number;
  /**
  * The UUID of a Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#project DataOktapamDatabasePasswordSettings#project}
  */
  readonly project: string;
  /**
  * The UUID of a OktaPA Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#resource_group DataOktapamDatabasePasswordSettings#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * character_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#character_options DataOktapamDatabasePasswordSettings#character_options}
  */
  readonly characterOptions?: DataOktapamDatabasePasswordSettingsCharacterOptions;
}
export interface DataOktapamDatabasePasswordSettingsCharacterOptions {
  /**
  * If `true`, passwords can include one or more numeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#digits DataOktapamDatabasePasswordSettings#digits}
  */
  readonly digits?: boolean | cdktf.IResolvable;
  /**
  * If `true`, passwords can include one or more lowercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#lower_case DataOktapamDatabasePasswordSettings#lower_case}
  */
  readonly lowerCase?: boolean | cdktf.IResolvable;
  /**
  * If `true`, passwords can include one or more punctuation/symbol characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#punctuation DataOktapamDatabasePasswordSettings#punctuation}
  */
  readonly punctuation?: boolean | cdktf.IResolvable;
  /**
  * If `true`, passwords must include at least one character from the selected sets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#require_from_each_set DataOktapamDatabasePasswordSettings#require_from_each_set}
  */
  readonly requireFromEachSet?: boolean | cdktf.IResolvable;
  /**
  * If `true`, passwords can include one or more uppercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#upper_case DataOktapamDatabasePasswordSettings#upper_case}
  */
  readonly upperCase?: boolean | cdktf.IResolvable;
}

export function dataOktapamDatabasePasswordSettingsCharacterOptionsToTerraform(struct?: DataOktapamDatabasePasswordSettingsCharacterOptionsOutputReference | DataOktapamDatabasePasswordSettingsCharacterOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.booleanToTerraform(struct!.digits),
    lower_case: cdktf.booleanToTerraform(struct!.lowerCase),
    punctuation: cdktf.booleanToTerraform(struct!.punctuation),
    require_from_each_set: cdktf.booleanToTerraform(struct!.requireFromEachSet),
    upper_case: cdktf.booleanToTerraform(struct!.upperCase),
  }
}


export function dataOktapamDatabasePasswordSettingsCharacterOptionsToHclTerraform(struct?: DataOktapamDatabasePasswordSettingsCharacterOptionsOutputReference | DataOktapamDatabasePasswordSettingsCharacterOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digits: {
      value: cdktf.booleanToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lower_case: {
      value: cdktf.booleanToHclTerraform(struct!.lowerCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.punctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_from_each_set: {
      value: cdktf.booleanToHclTerraform(struct!.requireFromEachSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upper_case: {
      value: cdktf.booleanToHclTerraform(struct!.upperCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktapamDatabasePasswordSettingsCharacterOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOktapamDatabasePasswordSettingsCharacterOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._lowerCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerCase = this._lowerCase;
    }
    if (this._punctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.punctuation = this._punctuation;
    }
    if (this._requireFromEachSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireFromEachSet = this._requireFromEachSet;
    }
    if (this._upperCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperCase = this._upperCase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktapamDatabasePasswordSettingsCharacterOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digits = undefined;
      this._lowerCase = undefined;
      this._punctuation = undefined;
      this._requireFromEachSet = undefined;
      this._upperCase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digits = value.digits;
      this._lowerCase = value.lowerCase;
      this._punctuation = value.punctuation;
      this._requireFromEachSet = value.requireFromEachSet;
      this._upperCase = value.upperCase;
    }
  }

  // digits - computed: false, optional: true, required: false
  private _digits?: boolean | cdktf.IResolvable; 
  public get digits() {
    return this.getBooleanAttribute('digits');
  }
  public set digits(value: boolean | cdktf.IResolvable) {
    this._digits = value;
  }
  public resetDigits() {
    this._digits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // lower_case - computed: false, optional: true, required: false
  private _lowerCase?: boolean | cdktf.IResolvable; 
  public get lowerCase() {
    return this.getBooleanAttribute('lower_case');
  }
  public set lowerCase(value: boolean | cdktf.IResolvable) {
    this._lowerCase = value;
  }
  public resetLowerCase() {
    this._lowerCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerCaseInput() {
    return this._lowerCase;
  }

  // punctuation - computed: false, optional: true, required: false
  private _punctuation?: boolean | cdktf.IResolvable; 
  public get punctuation() {
    return this.getBooleanAttribute('punctuation');
  }
  public set punctuation(value: boolean | cdktf.IResolvable) {
    this._punctuation = value;
  }
  public resetPunctuation() {
    this._punctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get punctuationInput() {
    return this._punctuation;
  }

  // require_from_each_set - computed: false, optional: true, required: false
  private _requireFromEachSet?: boolean | cdktf.IResolvable; 
  public get requireFromEachSet() {
    return this.getBooleanAttribute('require_from_each_set');
  }
  public set requireFromEachSet(value: boolean | cdktf.IResolvable) {
    this._requireFromEachSet = value;
  }
  public resetRequireFromEachSet() {
    this._requireFromEachSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireFromEachSetInput() {
    return this._requireFromEachSet;
  }

  // upper_case - computed: false, optional: true, required: false
  private _upperCase?: boolean | cdktf.IResolvable; 
  public get upperCase() {
    return this.getBooleanAttribute('upper_case');
  }
  public set upperCase(value: boolean | cdktf.IResolvable) {
    this._upperCase = value;
  }
  public resetUpperCase() {
    this._upperCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperCaseInput() {
    return this._upperCase;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings oktapam_database_password_settings}
*/
export class DataOktapamDatabasePasswordSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_database_password_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktapamDatabasePasswordSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktapamDatabasePasswordSettings to import
  * @param importFromId The id of the existing DataOktapamDatabasePasswordSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktapamDatabasePasswordSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_database_password_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/database_password_settings oktapam_database_password_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktapamDatabasePasswordSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktapamDatabasePasswordSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_database_password_settings',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enablePeriodicRotation = config.enablePeriodicRotation;
    this._maxLength = config.maxLength;
    this._minLength = config.minLength;
    this._periodicRotationDurationInSeconds = config.periodicRotationDurationInSeconds;
    this._project = config.project;
    this._resourceGroup = config.resourceGroup;
    this._characterOptions.internalValue = config.characterOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_periodic_rotation - computed: false, optional: true, required: false
  private _enablePeriodicRotation?: boolean | cdktf.IResolvable; 
  public get enablePeriodicRotation() {
    return this.getBooleanAttribute('enable_periodic_rotation');
  }
  public set enablePeriodicRotation(value: boolean | cdktf.IResolvable) {
    this._enablePeriodicRotation = value;
  }
  public resetEnablePeriodicRotation() {
    this._enablePeriodicRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePeriodicRotationInput() {
    return this._enablePeriodicRotation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // periodic_rotation_duration_in_seconds - computed: false, optional: true, required: false
  private _periodicRotationDurationInSeconds?: number; 
  public get periodicRotationDurationInSeconds() {
    return this.getNumberAttribute('periodic_rotation_duration_in_seconds');
  }
  public set periodicRotationDurationInSeconds(value: number) {
    this._periodicRotationDurationInSeconds = value;
  }
  public resetPeriodicRotationDurationInSeconds() {
    this._periodicRotationDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicRotationDurationInSecondsInput() {
    return this._periodicRotationDurationInSeconds;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // character_options - computed: false, optional: true, required: false
  private _characterOptions = new DataOktapamDatabasePasswordSettingsCharacterOptionsOutputReference(this, "character_options");
  public get characterOptions() {
    return this._characterOptions;
  }
  public putCharacterOptions(value: DataOktapamDatabasePasswordSettingsCharacterOptions) {
    this._characterOptions.internalValue = value;
  }
  public resetCharacterOptions() {
    this._characterOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterOptionsInput() {
    return this._characterOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_periodic_rotation: cdktf.booleanToTerraform(this._enablePeriodicRotation),
      max_length: cdktf.numberToTerraform(this._maxLength),
      min_length: cdktf.numberToTerraform(this._minLength),
      periodic_rotation_duration_in_seconds: cdktf.numberToTerraform(this._periodicRotationDurationInSeconds),
      project: cdktf.stringToTerraform(this._project),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      character_options: dataOktapamDatabasePasswordSettingsCharacterOptionsToTerraform(this._characterOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_periodic_rotation: {
        value: cdktf.booleanToHclTerraform(this._enablePeriodicRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_length: {
        value: cdktf.numberToHclTerraform(this._maxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_length: {
        value: cdktf.numberToHclTerraform(this._minLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      periodic_rotation_duration_in_seconds: {
        value: cdktf.numberToHclTerraform(this._periodicRotationDurationInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      character_options: {
        value: dataOktapamDatabasePasswordSettingsCharacterOptionsToHclTerraform(this._characterOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOktapamDatabasePasswordSettingsCharacterOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
