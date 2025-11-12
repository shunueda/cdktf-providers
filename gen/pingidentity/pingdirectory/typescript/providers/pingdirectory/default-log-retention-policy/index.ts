// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_retention_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultLogRetentionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for this Log Retention Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_retention_policy#description DefaultLogRetentionPolicy#description}
  */
  readonly description?: string;
  /**
  * Specifies the maximum total disk space used by the log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_retention_policy#disk_space_used DefaultLogRetentionPolicy#disk_space_used}
  */
  readonly diskSpaceUsed?: string;
  /**
  * Specifies the minimum amount of free disk space that should be available on the file system on which the archived log files are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_retention_policy#free_disk_space DefaultLogRetentionPolicy#free_disk_space}
  */
  readonly freeDiskSpace?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_retention_policy#name DefaultLogRetentionPolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the number of archived log files to retain before the oldest ones are cleaned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_retention_policy#number_of_files DefaultLogRetentionPolicy#number_of_files}
  */
  readonly numberOfFiles?: number;
  /**
  * Specifies the desired minimum length of time that each log file should be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_retention_policy#retain_duration DefaultLogRetentionPolicy#retain_duration}
  */
  readonly retainDuration?: string;
}
export interface DefaultLogRetentionPolicyRequiredActions {
}

export function defaultLogRetentionPolicyRequiredActionsToTerraform(struct?: DefaultLogRetentionPolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultLogRetentionPolicyRequiredActionsToHclTerraform(struct?: DefaultLogRetentionPolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultLogRetentionPolicyRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultLogRetentionPolicyRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLogRetentionPolicyRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultLogRetentionPolicyRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultLogRetentionPolicyRequiredActionsOutputReference {
    return new DefaultLogRetentionPolicyRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_retention_policy pingdirectory_default_log_retention_policy}
*/
export class DefaultLogRetentionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_log_retention_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultLogRetentionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultLogRetentionPolicy to import
  * @param importFromId The id of the existing DefaultLogRetentionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_retention_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultLogRetentionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_log_retention_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_retention_policy pingdirectory_default_log_retention_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultLogRetentionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultLogRetentionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_log_retention_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._diskSpaceUsed = config.diskSpaceUsed;
    this._freeDiskSpace = config.freeDiskSpace;
    this._name = config.name;
    this._numberOfFiles = config.numberOfFiles;
    this._retainDuration = config.retainDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disk_space_used - computed: true, optional: true, required: false
  private _diskSpaceUsed?: string; 
  public get diskSpaceUsed() {
    return this.getStringAttribute('disk_space_used');
  }
  public set diskSpaceUsed(value: string) {
    this._diskSpaceUsed = value;
  }
  public resetDiskSpaceUsed() {
    this._diskSpaceUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpaceUsedInput() {
    return this._diskSpaceUsed;
  }

  // free_disk_space - computed: true, optional: true, required: false
  private _freeDiskSpace?: string; 
  public get freeDiskSpace() {
    return this.getStringAttribute('free_disk_space');
  }
  public set freeDiskSpace(value: string) {
    this._freeDiskSpace = value;
  }
  public resetFreeDiskSpace() {
    this._freeDiskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeDiskSpaceInput() {
    return this._freeDiskSpace;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // number_of_files - computed: true, optional: true, required: false
  private _numberOfFiles?: number; 
  public get numberOfFiles() {
    return this.getNumberAttribute('number_of_files');
  }
  public set numberOfFiles(value: number) {
    this._numberOfFiles = value;
  }
  public resetNumberOfFiles() {
    this._numberOfFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfFilesInput() {
    return this._numberOfFiles;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultLogRetentionPolicyRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // retain_duration - computed: true, optional: true, required: false
  private _retainDuration?: string; 
  public get retainDuration() {
    return this.getStringAttribute('retain_duration');
  }
  public set retainDuration(value: string) {
    this._retainDuration = value;
  }
  public resetRetainDuration() {
    this._retainDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainDurationInput() {
    return this._retainDuration;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disk_space_used: cdktf.stringToTerraform(this._diskSpaceUsed),
      free_disk_space: cdktf.stringToTerraform(this._freeDiskSpace),
      name: cdktf.stringToTerraform(this._name),
      number_of_files: cdktf.numberToTerraform(this._numberOfFiles),
      retain_duration: cdktf.stringToTerraform(this._retainDuration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_space_used: {
        value: cdktf.stringToHclTerraform(this._diskSpaceUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      free_disk_space: {
        value: cdktf.stringToHclTerraform(this._freeDiskSpace),
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
      number_of_files: {
        value: cdktf.numberToHclTerraform(this._numberOfFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_duration: {
        value: cdktf.stringToHclTerraform(this._retainDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
