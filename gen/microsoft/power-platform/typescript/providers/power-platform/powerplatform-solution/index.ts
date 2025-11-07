// https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerplatformSolutionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the environment where the solution is imported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution#environment_id PowerplatformSolution#environment_id}
  */
  readonly environmentId: string;
  /**
  * Path to the settings file. The settings file uses the same format as pac cli. See https://learn.microsoft.com/power-platform/alm/conn-ref-env-variables-build-tools#deployment-settings-file for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution#settings_file PowerplatformSolution#settings_file}
  */
  readonly settingsFile?: string;
  /**
  * Path to the solution file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution#solution_file PowerplatformSolution#solution_file}
  */
  readonly solutionFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution#timeouts PowerplatformSolution#timeouts}
  */
  readonly timeouts?: PowerplatformSolutionTimeouts;
}
export interface PowerplatformSolutionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution#create PowerplatformSolution#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution#delete PowerplatformSolution#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution#read PowerplatformSolution#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution#update PowerplatformSolution#update}
  */
  readonly update?: string;
}

export function powerplatformSolutionTimeoutsToTerraform(struct?: PowerplatformSolutionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function powerplatformSolutionTimeoutsToHclTerraform(struct?: PowerplatformSolutionTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class PowerplatformSolutionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformSolutionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformSolutionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution powerplatform_solution}
*/
export class PowerplatformSolution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_solution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerplatformSolution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerplatformSolution to import
  * @param importFromId The id of the existing PowerplatformSolution that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerplatformSolution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_solution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_solution powerplatform_solution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerplatformSolutionConfig
  */
  public constructor(scope: Construct, id: string, config: PowerplatformSolutionConfig) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_solution',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '3.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._settingsFile = config.settingsFile;
    this._solutionFile = config.solutionFile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_managed - computed: true, optional: false, required: false
  public get isManaged() {
    return this.getBooleanAttribute('is_managed');
  }

  // settings_file - computed: false, optional: true, required: false
  private _settingsFile?: string; 
  public get settingsFile() {
    return this.getStringAttribute('settings_file');
  }
  public set settingsFile(value: string) {
    this._settingsFile = value;
  }
  public resetSettingsFile() {
    this._settingsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsFileInput() {
    return this._settingsFile;
  }

  // settings_file_checksum - computed: true, optional: false, required: false
  public get settingsFileChecksum() {
    return this.getStringAttribute('settings_file_checksum');
  }

  // solution_file - computed: false, optional: false, required: true
  private _solutionFile?: string; 
  public get solutionFile() {
    return this.getStringAttribute('solution_file');
  }
  public set solutionFile(value: string) {
    this._solutionFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionFileInput() {
    return this._solutionFile;
  }

  // solution_file_checksum - computed: true, optional: false, required: false
  public get solutionFileChecksum() {
    return this.getStringAttribute('solution_file_checksum');
  }

  // solution_version - computed: true, optional: false, required: false
  public get solutionVersion() {
    return this.getStringAttribute('solution_version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PowerplatformSolutionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PowerplatformSolutionTimeouts) {
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
      environment_id: cdktf.stringToTerraform(this._environmentId),
      settings_file: cdktf.stringToTerraform(this._settingsFile),
      solution_file: cdktf.stringToTerraform(this._solutionFile),
      timeouts: powerplatformSolutionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings_file: {
        value: cdktf.stringToHclTerraform(this._settingsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      solution_file: {
        value: cdktf.stringToHclTerraform(this._solutionFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: powerplatformSolutionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PowerplatformSolutionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
