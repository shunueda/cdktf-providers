// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, requires passwords to be rotated after a period of time has passed. You must also set the `periodic_rotation_duration_in_seconds` param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#enable_periodic_rotation PasswordSettings#enable_periodic_rotation}
  */
  readonly enablePeriodicRotation: boolean | cdktf.IResolvable;
  /**
  * An array of managed accounts for password rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#managed_privileged_accounts PasswordSettings#managed_privileged_accounts}
  */
  readonly managedPrivilegedAccounts: string[];
  /**
  * The maximum length allowed for the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#max_length PasswordSettings#max_length}
  */
  readonly maxLength: number;
  /**
  * The minimum length allowed for the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#min_length PasswordSettings#min_length}
  */
  readonly minLength: number;
  /**
  * If `periodic_rotation` is enabled, specifies how often passwords are rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#periodic_rotation_duration_in_seconds PasswordSettings#periodic_rotation_duration_in_seconds}
  */
  readonly periodicRotationDurationInSeconds?: number;
  /**
  * The UUID of a Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#project PasswordSettings#project}
  */
  readonly project: string;
  /**
  * The UUID of a OktaPA Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#resource_group PasswordSettings#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * character_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#character_options PasswordSettings#character_options}
  */
  readonly characterOptions: PasswordSettingsCharacterOptions;
}
export interface PasswordSettingsCharacterOptions {
  /**
  * If `true`, passwords can include one or more numeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#digits PasswordSettings#digits}
  */
  readonly digits: boolean | cdktf.IResolvable;
  /**
  * If `true`, passwords can include one or more lowercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#lower_case PasswordSettings#lower_case}
  */
  readonly lowerCase: boolean | cdktf.IResolvable;
  /**
  * If `true`, passwords can include one or more punctuation/symbol characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#punctuation PasswordSettings#punctuation}
  */
  readonly punctuation: boolean | cdktf.IResolvable;
  /**
  * If `true`, passwords can include one or more uppercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#upper_case PasswordSettings#upper_case}
  */
  readonly upperCase: boolean | cdktf.IResolvable;
}

export function passwordSettingsCharacterOptionsToTerraform(struct?: PasswordSettingsCharacterOptionsOutputReference | PasswordSettingsCharacterOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.booleanToTerraform(struct!.digits),
    lower_case: cdktf.booleanToTerraform(struct!.lowerCase),
    punctuation: cdktf.booleanToTerraform(struct!.punctuation),
    upper_case: cdktf.booleanToTerraform(struct!.upperCase),
  }
}


export function passwordSettingsCharacterOptionsToHclTerraform(struct?: PasswordSettingsCharacterOptionsOutputReference | PasswordSettingsCharacterOptions): any {
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

export class PasswordSettingsCharacterOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PasswordSettingsCharacterOptions | undefined {
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
    if (this._upperCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperCase = this._upperCase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PasswordSettingsCharacterOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digits = undefined;
      this._lowerCase = undefined;
      this._punctuation = undefined;
      this._upperCase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digits = value.digits;
      this._lowerCase = value.lowerCase;
      this._punctuation = value.punctuation;
      this._upperCase = value.upperCase;
    }
  }

  // digits - computed: false, optional: false, required: true
  private _digits?: boolean | cdktf.IResolvable; 
  public get digits() {
    return this.getBooleanAttribute('digits');
  }
  public set digits(value: boolean | cdktf.IResolvable) {
    this._digits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // lower_case - computed: false, optional: false, required: true
  private _lowerCase?: boolean | cdktf.IResolvable; 
  public get lowerCase() {
    return this.getBooleanAttribute('lower_case');
  }
  public set lowerCase(value: boolean | cdktf.IResolvable) {
    this._lowerCase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerCaseInput() {
    return this._lowerCase;
  }

  // punctuation - computed: false, optional: false, required: true
  private _punctuation?: boolean | cdktf.IResolvable; 
  public get punctuation() {
    return this.getBooleanAttribute('punctuation');
  }
  public set punctuation(value: boolean | cdktf.IResolvable) {
    this._punctuation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get punctuationInput() {
    return this._punctuation;
  }

  // upper_case - computed: false, optional: false, required: true
  private _upperCase?: boolean | cdktf.IResolvable; 
  public get upperCase() {
    return this.getBooleanAttribute('upper_case');
  }
  public set upperCase(value: boolean | cdktf.IResolvable) {
    this._upperCase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperCaseInput() {
    return this._upperCase;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings oktapam_password_settings}
*/
export class PasswordSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_password_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PasswordSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PasswordSettings to import
  * @param importFromId The id of the existing PasswordSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PasswordSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_password_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/password_settings oktapam_password_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: PasswordSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_password_settings',
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
    this._managedPrivilegedAccounts = config.managedPrivilegedAccounts;
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

  // enable_periodic_rotation - computed: false, optional: false, required: true
  private _enablePeriodicRotation?: boolean | cdktf.IResolvable; 
  public get enablePeriodicRotation() {
    return this.getBooleanAttribute('enable_periodic_rotation');
  }
  public set enablePeriodicRotation(value: boolean | cdktf.IResolvable) {
    this._enablePeriodicRotation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePeriodicRotationInput() {
    return this._enablePeriodicRotation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_privileged_accounts - computed: false, optional: false, required: true
  private _managedPrivilegedAccounts?: string[]; 
  public get managedPrivilegedAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_privileged_accounts'));
  }
  public set managedPrivilegedAccounts(value: string[]) {
    this._managedPrivilegedAccounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPrivilegedAccountsInput() {
    return this._managedPrivilegedAccounts;
  }

  // max_length - computed: false, optional: false, required: true
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: false, required: true
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
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

  // character_options - computed: false, optional: false, required: true
  private _characterOptions = new PasswordSettingsCharacterOptionsOutputReference(this, "character_options");
  public get characterOptions() {
    return this._characterOptions;
  }
  public putCharacterOptions(value: PasswordSettingsCharacterOptions) {
    this._characterOptions.internalValue = value;
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
      managed_privileged_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedPrivilegedAccounts),
      max_length: cdktf.numberToTerraform(this._maxLength),
      min_length: cdktf.numberToTerraform(this._minLength),
      periodic_rotation_duration_in_seconds: cdktf.numberToTerraform(this._periodicRotationDurationInSeconds),
      project: cdktf.stringToTerraform(this._project),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      character_options: passwordSettingsCharacterOptionsToTerraform(this._characterOptions.internalValue),
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
      managed_privileged_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedPrivilegedAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: passwordSettingsCharacterOptionsToHclTerraform(this._characterOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PasswordSettingsCharacterOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
