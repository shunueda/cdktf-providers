// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilevantageRuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the filevantage rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#description FilevantageRuleGroup#description}
  */
  readonly description?: string;
  /**
  * Name of the filevantage rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#name FilevantageRuleGroup#name}
  */
  readonly name: string;
  /**
  * Rules to be associated with the rule group. Precedence is determined by the order of the rules in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#rules FilevantageRuleGroup#rules}
  */
  readonly rules?: FilevantageRuleGroupRules[] | cdktf.IResolvable;
  /**
  * The type of filevantage rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#type FilevantageRuleGroup#type}
  */
  readonly type?: string;
}
export interface FilevantageRuleGroupRules {
  /**
  * Depth below the base path to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#depth FilevantageRuleGroup#depth}
  */
  readonly depth?: string;
  /**
  * Description of the filevantage rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#description FilevantageRuleGroup#description}
  */
  readonly description: string;
  /**
  * Enable content capture for the rule. Requires watch_file_write_changes or watch_key_value_set_changes to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#enable_content_capture FilevantageRuleGroup#enable_content_capture}
  */
  readonly enableContentCapture?: boolean | cdktf.IResolvable;
  /**
  * Represents the files, directories, registry keys, or registry values that will be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#exclude FilevantageRuleGroup#exclude}
  */
  readonly exclude?: string;
  /**
  * Represents the changes performed by specific processes that will be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#exclude_processes FilevantageRuleGroup#exclude_processes}
  */
  readonly excludeProcesses?: string;
  /**
  * Represents the changes performed by specific users that will be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#exclude_users FilevantageRuleGroup#exclude_users}
  */
  readonly excludeUsers?: string;
  /**
  * List of file names whose content will be monitored. Listed files must match the file include pattern and not match the file exclude pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#file_names FilevantageRuleGroup#file_names}
  */
  readonly fileNames?: string[];
  /**
  * Represents the files, directories, registry keys, or registry values that will be monitored. Defaults to all (*)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#include FilevantageRuleGroup#include}
  */
  readonly include?: string;
  /**
  * Represents the changes performed by specific processes that will be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#include_processes FilevantageRuleGroup#include_processes}
  */
  readonly includeProcesses?: string;
  /**
  * Represents the changes performed by specific users that will be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#include_users FilevantageRuleGroup#include_users}
  */
  readonly includeUsers?: string;
  /**
  * Representing the file system or registry path to monitor. All paths must end with the path separator, e.g. c:\windows\ for windows and /usr/bin/ for linux/mac.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#path FilevantageRuleGroup#path}
  */
  readonly path: string;
  /**
  * List of registry values whose content will be monitored. Listed registry values must match the registry include pattern and not match the registry exclude pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#registry_values FilevantageRuleGroup#registry_values}
  */
  readonly registryValues?: string[];
  /**
  * Severity to categorize change events produced by this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#severity FilevantageRuleGroup#severity}
  */
  readonly severity: string;
  /**
  * Monitor directory attribute change events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_directory_attribute_changes FilevantageRuleGroup#watch_directory_attribute_changes}
  */
  readonly watchDirectoryAttributeChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor directory creation events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_directory_create_changes FilevantageRuleGroup#watch_directory_create_changes}
  */
  readonly watchDirectoryCreateChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor directory deletion events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_directory_delete_changes FilevantageRuleGroup#watch_directory_delete_changes}
  */
  readonly watchDirectoryDeleteChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor directory permission change events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_directory_permission_changes FilevantageRuleGroup#watch_directory_permission_changes}
  */
  readonly watchDirectoryPermissionChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor directory rename events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_directory_rename_changes FilevantageRuleGroup#watch_directory_rename_changes}
  */
  readonly watchDirectoryRenameChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor file attribute change events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_file_attribute_changes FilevantageRuleGroup#watch_file_attribute_changes}
  */
  readonly watchFileAttributeChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor file creation events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_file_create_changes FilevantageRuleGroup#watch_file_create_changes}
  */
  readonly watchFileCreateChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor file deletion events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_file_delete_changes FilevantageRuleGroup#watch_file_delete_changes}
  */
  readonly watchFileDeleteChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor file permission change events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_file_permission_changes FilevantageRuleGroup#watch_file_permission_changes}
  */
  readonly watchFilePermissionChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor file rename events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_file_rename_changes FilevantageRuleGroup#watch_file_rename_changes}
  */
  readonly watchFileRenameChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor file write events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_file_write_changes FilevantageRuleGroup#watch_file_write_changes}
  */
  readonly watchFileWriteChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor registry key creation events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_key_create_changes FilevantageRuleGroup#watch_key_create_changes}
  */
  readonly watchKeyCreateChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor registry key deletion events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_key_delete_changes FilevantageRuleGroup#watch_key_delete_changes}
  */
  readonly watchKeyDeleteChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor registry key permission change events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_key_permissions_changes FilevantageRuleGroup#watch_key_permissions_changes}
  */
  readonly watchKeyPermissionsChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor registry key rename events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_key_rename_changes FilevantageRuleGroup#watch_key_rename_changes}
  */
  readonly watchKeyRenameChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor registry value deletion events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_key_value_delete_changes FilevantageRuleGroup#watch_key_value_delete_changes}
  */
  readonly watchKeyValueDeleteChanges?: boolean | cdktf.IResolvable;
  /**
  * Monitor registry value set events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#watch_key_value_set_changes FilevantageRuleGroup#watch_key_value_set_changes}
  */
  readonly watchKeyValueSetChanges?: boolean | cdktf.IResolvable;
}

export function filevantageRuleGroupRulesToTerraform(struct?: FilevantageRuleGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depth: cdktf.stringToTerraform(struct!.depth),
    description: cdktf.stringToTerraform(struct!.description),
    enable_content_capture: cdktf.booleanToTerraform(struct!.enableContentCapture),
    exclude: cdktf.stringToTerraform(struct!.exclude),
    exclude_processes: cdktf.stringToTerraform(struct!.excludeProcesses),
    exclude_users: cdktf.stringToTerraform(struct!.excludeUsers),
    file_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileNames),
    include: cdktf.stringToTerraform(struct!.include),
    include_processes: cdktf.stringToTerraform(struct!.includeProcesses),
    include_users: cdktf.stringToTerraform(struct!.includeUsers),
    path: cdktf.stringToTerraform(struct!.path),
    registry_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.registryValues),
    severity: cdktf.stringToTerraform(struct!.severity),
    watch_directory_attribute_changes: cdktf.booleanToTerraform(struct!.watchDirectoryAttributeChanges),
    watch_directory_create_changes: cdktf.booleanToTerraform(struct!.watchDirectoryCreateChanges),
    watch_directory_delete_changes: cdktf.booleanToTerraform(struct!.watchDirectoryDeleteChanges),
    watch_directory_permission_changes: cdktf.booleanToTerraform(struct!.watchDirectoryPermissionChanges),
    watch_directory_rename_changes: cdktf.booleanToTerraform(struct!.watchDirectoryRenameChanges),
    watch_file_attribute_changes: cdktf.booleanToTerraform(struct!.watchFileAttributeChanges),
    watch_file_create_changes: cdktf.booleanToTerraform(struct!.watchFileCreateChanges),
    watch_file_delete_changes: cdktf.booleanToTerraform(struct!.watchFileDeleteChanges),
    watch_file_permission_changes: cdktf.booleanToTerraform(struct!.watchFilePermissionChanges),
    watch_file_rename_changes: cdktf.booleanToTerraform(struct!.watchFileRenameChanges),
    watch_file_write_changes: cdktf.booleanToTerraform(struct!.watchFileWriteChanges),
    watch_key_create_changes: cdktf.booleanToTerraform(struct!.watchKeyCreateChanges),
    watch_key_delete_changes: cdktf.booleanToTerraform(struct!.watchKeyDeleteChanges),
    watch_key_permissions_changes: cdktf.booleanToTerraform(struct!.watchKeyPermissionsChanges),
    watch_key_rename_changes: cdktf.booleanToTerraform(struct!.watchKeyRenameChanges),
    watch_key_value_delete_changes: cdktf.booleanToTerraform(struct!.watchKeyValueDeleteChanges),
    watch_key_value_set_changes: cdktf.booleanToTerraform(struct!.watchKeyValueSetChanges),
  }
}


export function filevantageRuleGroupRulesToHclTerraform(struct?: FilevantageRuleGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depth: {
      value: cdktf.stringToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_content_capture: {
      value: cdktf.booleanToHclTerraform(struct!.enableContentCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_processes: {
      value: cdktf.stringToHclTerraform(struct!.excludeProcesses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_users: {
      value: cdktf.stringToHclTerraform(struct!.excludeUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_processes: {
      value: cdktf.stringToHclTerraform(struct!.includeProcesses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_users: {
      value: cdktf.stringToHclTerraform(struct!.includeUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.registryValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watch_directory_attribute_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchDirectoryAttributeChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_directory_create_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchDirectoryCreateChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_directory_delete_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchDirectoryDeleteChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_directory_permission_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchDirectoryPermissionChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_directory_rename_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchDirectoryRenameChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_file_attribute_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchFileAttributeChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_file_create_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchFileCreateChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_file_delete_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchFileDeleteChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_file_permission_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchFilePermissionChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_file_rename_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchFileRenameChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_file_write_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchFileWriteChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_key_create_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchKeyCreateChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_key_delete_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchKeyDeleteChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_key_permissions_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchKeyPermissionsChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_key_rename_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchKeyRenameChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_key_value_delete_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchKeyValueDeleteChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    watch_key_value_set_changes: {
      value: cdktf.booleanToHclTerraform(struct!.watchKeyValueSetChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilevantageRuleGroupRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FilevantageRuleGroupRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableContentCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableContentCapture = this._enableContentCapture;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._excludeProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeProcesses = this._excludeProcesses;
    }
    if (this._excludeUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeUsers = this._excludeUsers;
    }
    if (this._fileNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNames = this._fileNames;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._includeProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeProcesses = this._includeProcesses;
    }
    if (this._includeUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUsers = this._includeUsers;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._registryValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryValues = this._registryValues;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._watchDirectoryAttributeChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchDirectoryAttributeChanges = this._watchDirectoryAttributeChanges;
    }
    if (this._watchDirectoryCreateChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchDirectoryCreateChanges = this._watchDirectoryCreateChanges;
    }
    if (this._watchDirectoryDeleteChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchDirectoryDeleteChanges = this._watchDirectoryDeleteChanges;
    }
    if (this._watchDirectoryPermissionChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchDirectoryPermissionChanges = this._watchDirectoryPermissionChanges;
    }
    if (this._watchDirectoryRenameChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchDirectoryRenameChanges = this._watchDirectoryRenameChanges;
    }
    if (this._watchFileAttributeChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchFileAttributeChanges = this._watchFileAttributeChanges;
    }
    if (this._watchFileCreateChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchFileCreateChanges = this._watchFileCreateChanges;
    }
    if (this._watchFileDeleteChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchFileDeleteChanges = this._watchFileDeleteChanges;
    }
    if (this._watchFilePermissionChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchFilePermissionChanges = this._watchFilePermissionChanges;
    }
    if (this._watchFileRenameChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchFileRenameChanges = this._watchFileRenameChanges;
    }
    if (this._watchFileWriteChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchFileWriteChanges = this._watchFileWriteChanges;
    }
    if (this._watchKeyCreateChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchKeyCreateChanges = this._watchKeyCreateChanges;
    }
    if (this._watchKeyDeleteChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchKeyDeleteChanges = this._watchKeyDeleteChanges;
    }
    if (this._watchKeyPermissionsChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchKeyPermissionsChanges = this._watchKeyPermissionsChanges;
    }
    if (this._watchKeyRenameChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchKeyRenameChanges = this._watchKeyRenameChanges;
    }
    if (this._watchKeyValueDeleteChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchKeyValueDeleteChanges = this._watchKeyValueDeleteChanges;
    }
    if (this._watchKeyValueSetChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchKeyValueSetChanges = this._watchKeyValueSetChanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilevantageRuleGroupRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._depth = undefined;
      this._description = undefined;
      this._enableContentCapture = undefined;
      this._exclude = undefined;
      this._excludeProcesses = undefined;
      this._excludeUsers = undefined;
      this._fileNames = undefined;
      this._include = undefined;
      this._includeProcesses = undefined;
      this._includeUsers = undefined;
      this._path = undefined;
      this._registryValues = undefined;
      this._severity = undefined;
      this._watchDirectoryAttributeChanges = undefined;
      this._watchDirectoryCreateChanges = undefined;
      this._watchDirectoryDeleteChanges = undefined;
      this._watchDirectoryPermissionChanges = undefined;
      this._watchDirectoryRenameChanges = undefined;
      this._watchFileAttributeChanges = undefined;
      this._watchFileCreateChanges = undefined;
      this._watchFileDeleteChanges = undefined;
      this._watchFilePermissionChanges = undefined;
      this._watchFileRenameChanges = undefined;
      this._watchFileWriteChanges = undefined;
      this._watchKeyCreateChanges = undefined;
      this._watchKeyDeleteChanges = undefined;
      this._watchKeyPermissionsChanges = undefined;
      this._watchKeyRenameChanges = undefined;
      this._watchKeyValueDeleteChanges = undefined;
      this._watchKeyValueSetChanges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._depth = value.depth;
      this._description = value.description;
      this._enableContentCapture = value.enableContentCapture;
      this._exclude = value.exclude;
      this._excludeProcesses = value.excludeProcesses;
      this._excludeUsers = value.excludeUsers;
      this._fileNames = value.fileNames;
      this._include = value.include;
      this._includeProcesses = value.includeProcesses;
      this._includeUsers = value.includeUsers;
      this._path = value.path;
      this._registryValues = value.registryValues;
      this._severity = value.severity;
      this._watchDirectoryAttributeChanges = value.watchDirectoryAttributeChanges;
      this._watchDirectoryCreateChanges = value.watchDirectoryCreateChanges;
      this._watchDirectoryDeleteChanges = value.watchDirectoryDeleteChanges;
      this._watchDirectoryPermissionChanges = value.watchDirectoryPermissionChanges;
      this._watchDirectoryRenameChanges = value.watchDirectoryRenameChanges;
      this._watchFileAttributeChanges = value.watchFileAttributeChanges;
      this._watchFileCreateChanges = value.watchFileCreateChanges;
      this._watchFileDeleteChanges = value.watchFileDeleteChanges;
      this._watchFilePermissionChanges = value.watchFilePermissionChanges;
      this._watchFileRenameChanges = value.watchFileRenameChanges;
      this._watchFileWriteChanges = value.watchFileWriteChanges;
      this._watchKeyCreateChanges = value.watchKeyCreateChanges;
      this._watchKeyDeleteChanges = value.watchKeyDeleteChanges;
      this._watchKeyPermissionsChanges = value.watchKeyPermissionsChanges;
      this._watchKeyRenameChanges = value.watchKeyRenameChanges;
      this._watchKeyValueDeleteChanges = value.watchKeyValueDeleteChanges;
      this._watchKeyValueSetChanges = value.watchKeyValueSetChanges;
    }
  }

  // depth - computed: true, optional: true, required: false
  private _depth?: string; 
  public get depth() {
    return this.getStringAttribute('depth');
  }
  public set depth(value: string) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_content_capture - computed: true, optional: true, required: false
  private _enableContentCapture?: boolean | cdktf.IResolvable; 
  public get enableContentCapture() {
    return this.getBooleanAttribute('enable_content_capture');
  }
  public set enableContentCapture(value: boolean | cdktf.IResolvable) {
    this._enableContentCapture = value;
  }
  public resetEnableContentCapture() {
    this._enableContentCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableContentCaptureInput() {
    return this._enableContentCapture;
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // exclude_processes - computed: true, optional: true, required: false
  private _excludeProcesses?: string; 
  public get excludeProcesses() {
    return this.getStringAttribute('exclude_processes');
  }
  public set excludeProcesses(value: string) {
    this._excludeProcesses = value;
  }
  public resetExcludeProcesses() {
    this._excludeProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeProcessesInput() {
    return this._excludeProcesses;
  }

  // exclude_users - computed: true, optional: true, required: false
  private _excludeUsers?: string; 
  public get excludeUsers() {
    return this.getStringAttribute('exclude_users');
  }
  public set excludeUsers(value: string) {
    this._excludeUsers = value;
  }
  public resetExcludeUsers() {
    this._excludeUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUsersInput() {
    return this._excludeUsers;
  }

  // file_names - computed: true, optional: true, required: false
  private _fileNames?: string[]; 
  public get fileNames() {
    return this.getListAttribute('file_names');
  }
  public set fileNames(value: string[]) {
    this._fileNames = value;
  }
  public resetFileNames() {
    this._fileNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNamesInput() {
    return this._fileNames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include - computed: true, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // include_processes - computed: true, optional: true, required: false
  private _includeProcesses?: string; 
  public get includeProcesses() {
    return this.getStringAttribute('include_processes');
  }
  public set includeProcesses(value: string) {
    this._includeProcesses = value;
  }
  public resetIncludeProcesses() {
    this._includeProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProcessesInput() {
    return this._includeProcesses;
  }

  // include_users - computed: true, optional: true, required: false
  private _includeUsers?: string; 
  public get includeUsers() {
    return this.getStringAttribute('include_users');
  }
  public set includeUsers(value: string) {
    this._includeUsers = value;
  }
  public resetIncludeUsers() {
    this._includeUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUsersInput() {
    return this._includeUsers;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // precedence - computed: true, optional: false, required: false
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }

  // registry_values - computed: true, optional: true, required: false
  private _registryValues?: string[]; 
  public get registryValues() {
    return this.getListAttribute('registry_values');
  }
  public set registryValues(value: string[]) {
    this._registryValues = value;
  }
  public resetRegistryValues() {
    this._registryValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryValuesInput() {
    return this._registryValues;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // watch_directory_attribute_changes - computed: true, optional: true, required: false
  private _watchDirectoryAttributeChanges?: boolean | cdktf.IResolvable; 
  public get watchDirectoryAttributeChanges() {
    return this.getBooleanAttribute('watch_directory_attribute_changes');
  }
  public set watchDirectoryAttributeChanges(value: boolean | cdktf.IResolvable) {
    this._watchDirectoryAttributeChanges = value;
  }
  public resetWatchDirectoryAttributeChanges() {
    this._watchDirectoryAttributeChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchDirectoryAttributeChangesInput() {
    return this._watchDirectoryAttributeChanges;
  }

  // watch_directory_create_changes - computed: true, optional: true, required: false
  private _watchDirectoryCreateChanges?: boolean | cdktf.IResolvable; 
  public get watchDirectoryCreateChanges() {
    return this.getBooleanAttribute('watch_directory_create_changes');
  }
  public set watchDirectoryCreateChanges(value: boolean | cdktf.IResolvable) {
    this._watchDirectoryCreateChanges = value;
  }
  public resetWatchDirectoryCreateChanges() {
    this._watchDirectoryCreateChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchDirectoryCreateChangesInput() {
    return this._watchDirectoryCreateChanges;
  }

  // watch_directory_delete_changes - computed: true, optional: true, required: false
  private _watchDirectoryDeleteChanges?: boolean | cdktf.IResolvable; 
  public get watchDirectoryDeleteChanges() {
    return this.getBooleanAttribute('watch_directory_delete_changes');
  }
  public set watchDirectoryDeleteChanges(value: boolean | cdktf.IResolvable) {
    this._watchDirectoryDeleteChanges = value;
  }
  public resetWatchDirectoryDeleteChanges() {
    this._watchDirectoryDeleteChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchDirectoryDeleteChangesInput() {
    return this._watchDirectoryDeleteChanges;
  }

  // watch_directory_permission_changes - computed: true, optional: true, required: false
  private _watchDirectoryPermissionChanges?: boolean | cdktf.IResolvable; 
  public get watchDirectoryPermissionChanges() {
    return this.getBooleanAttribute('watch_directory_permission_changes');
  }
  public set watchDirectoryPermissionChanges(value: boolean | cdktf.IResolvable) {
    this._watchDirectoryPermissionChanges = value;
  }
  public resetWatchDirectoryPermissionChanges() {
    this._watchDirectoryPermissionChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchDirectoryPermissionChangesInput() {
    return this._watchDirectoryPermissionChanges;
  }

  // watch_directory_rename_changes - computed: true, optional: true, required: false
  private _watchDirectoryRenameChanges?: boolean | cdktf.IResolvable; 
  public get watchDirectoryRenameChanges() {
    return this.getBooleanAttribute('watch_directory_rename_changes');
  }
  public set watchDirectoryRenameChanges(value: boolean | cdktf.IResolvable) {
    this._watchDirectoryRenameChanges = value;
  }
  public resetWatchDirectoryRenameChanges() {
    this._watchDirectoryRenameChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchDirectoryRenameChangesInput() {
    return this._watchDirectoryRenameChanges;
  }

  // watch_file_attribute_changes - computed: true, optional: true, required: false
  private _watchFileAttributeChanges?: boolean | cdktf.IResolvable; 
  public get watchFileAttributeChanges() {
    return this.getBooleanAttribute('watch_file_attribute_changes');
  }
  public set watchFileAttributeChanges(value: boolean | cdktf.IResolvable) {
    this._watchFileAttributeChanges = value;
  }
  public resetWatchFileAttributeChanges() {
    this._watchFileAttributeChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchFileAttributeChangesInput() {
    return this._watchFileAttributeChanges;
  }

  // watch_file_create_changes - computed: true, optional: true, required: false
  private _watchFileCreateChanges?: boolean | cdktf.IResolvable; 
  public get watchFileCreateChanges() {
    return this.getBooleanAttribute('watch_file_create_changes');
  }
  public set watchFileCreateChanges(value: boolean | cdktf.IResolvable) {
    this._watchFileCreateChanges = value;
  }
  public resetWatchFileCreateChanges() {
    this._watchFileCreateChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchFileCreateChangesInput() {
    return this._watchFileCreateChanges;
  }

  // watch_file_delete_changes - computed: true, optional: true, required: false
  private _watchFileDeleteChanges?: boolean | cdktf.IResolvable; 
  public get watchFileDeleteChanges() {
    return this.getBooleanAttribute('watch_file_delete_changes');
  }
  public set watchFileDeleteChanges(value: boolean | cdktf.IResolvable) {
    this._watchFileDeleteChanges = value;
  }
  public resetWatchFileDeleteChanges() {
    this._watchFileDeleteChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchFileDeleteChangesInput() {
    return this._watchFileDeleteChanges;
  }

  // watch_file_permission_changes - computed: true, optional: true, required: false
  private _watchFilePermissionChanges?: boolean | cdktf.IResolvable; 
  public get watchFilePermissionChanges() {
    return this.getBooleanAttribute('watch_file_permission_changes');
  }
  public set watchFilePermissionChanges(value: boolean | cdktf.IResolvable) {
    this._watchFilePermissionChanges = value;
  }
  public resetWatchFilePermissionChanges() {
    this._watchFilePermissionChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchFilePermissionChangesInput() {
    return this._watchFilePermissionChanges;
  }

  // watch_file_rename_changes - computed: true, optional: true, required: false
  private _watchFileRenameChanges?: boolean | cdktf.IResolvable; 
  public get watchFileRenameChanges() {
    return this.getBooleanAttribute('watch_file_rename_changes');
  }
  public set watchFileRenameChanges(value: boolean | cdktf.IResolvable) {
    this._watchFileRenameChanges = value;
  }
  public resetWatchFileRenameChanges() {
    this._watchFileRenameChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchFileRenameChangesInput() {
    return this._watchFileRenameChanges;
  }

  // watch_file_write_changes - computed: true, optional: true, required: false
  private _watchFileWriteChanges?: boolean | cdktf.IResolvable; 
  public get watchFileWriteChanges() {
    return this.getBooleanAttribute('watch_file_write_changes');
  }
  public set watchFileWriteChanges(value: boolean | cdktf.IResolvable) {
    this._watchFileWriteChanges = value;
  }
  public resetWatchFileWriteChanges() {
    this._watchFileWriteChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchFileWriteChangesInput() {
    return this._watchFileWriteChanges;
  }

  // watch_key_create_changes - computed: true, optional: true, required: false
  private _watchKeyCreateChanges?: boolean | cdktf.IResolvable; 
  public get watchKeyCreateChanges() {
    return this.getBooleanAttribute('watch_key_create_changes');
  }
  public set watchKeyCreateChanges(value: boolean | cdktf.IResolvable) {
    this._watchKeyCreateChanges = value;
  }
  public resetWatchKeyCreateChanges() {
    this._watchKeyCreateChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchKeyCreateChangesInput() {
    return this._watchKeyCreateChanges;
  }

  // watch_key_delete_changes - computed: true, optional: true, required: false
  private _watchKeyDeleteChanges?: boolean | cdktf.IResolvable; 
  public get watchKeyDeleteChanges() {
    return this.getBooleanAttribute('watch_key_delete_changes');
  }
  public set watchKeyDeleteChanges(value: boolean | cdktf.IResolvable) {
    this._watchKeyDeleteChanges = value;
  }
  public resetWatchKeyDeleteChanges() {
    this._watchKeyDeleteChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchKeyDeleteChangesInput() {
    return this._watchKeyDeleteChanges;
  }

  // watch_key_permissions_changes - computed: true, optional: true, required: false
  private _watchKeyPermissionsChanges?: boolean | cdktf.IResolvable; 
  public get watchKeyPermissionsChanges() {
    return this.getBooleanAttribute('watch_key_permissions_changes');
  }
  public set watchKeyPermissionsChanges(value: boolean | cdktf.IResolvable) {
    this._watchKeyPermissionsChanges = value;
  }
  public resetWatchKeyPermissionsChanges() {
    this._watchKeyPermissionsChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchKeyPermissionsChangesInput() {
    return this._watchKeyPermissionsChanges;
  }

  // watch_key_rename_changes - computed: true, optional: true, required: false
  private _watchKeyRenameChanges?: boolean | cdktf.IResolvable; 
  public get watchKeyRenameChanges() {
    return this.getBooleanAttribute('watch_key_rename_changes');
  }
  public set watchKeyRenameChanges(value: boolean | cdktf.IResolvable) {
    this._watchKeyRenameChanges = value;
  }
  public resetWatchKeyRenameChanges() {
    this._watchKeyRenameChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchKeyRenameChangesInput() {
    return this._watchKeyRenameChanges;
  }

  // watch_key_value_delete_changes - computed: true, optional: true, required: false
  private _watchKeyValueDeleteChanges?: boolean | cdktf.IResolvable; 
  public get watchKeyValueDeleteChanges() {
    return this.getBooleanAttribute('watch_key_value_delete_changes');
  }
  public set watchKeyValueDeleteChanges(value: boolean | cdktf.IResolvable) {
    this._watchKeyValueDeleteChanges = value;
  }
  public resetWatchKeyValueDeleteChanges() {
    this._watchKeyValueDeleteChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchKeyValueDeleteChangesInput() {
    return this._watchKeyValueDeleteChanges;
  }

  // watch_key_value_set_changes - computed: true, optional: true, required: false
  private _watchKeyValueSetChanges?: boolean | cdktf.IResolvable; 
  public get watchKeyValueSetChanges() {
    return this.getBooleanAttribute('watch_key_value_set_changes');
  }
  public set watchKeyValueSetChanges(value: boolean | cdktf.IResolvable) {
    this._watchKeyValueSetChanges = value;
  }
  public resetWatchKeyValueSetChanges() {
    this._watchKeyValueSetChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchKeyValueSetChangesInput() {
    return this._watchKeyValueSetChanges;
  }
}

export class FilevantageRuleGroupRulesList extends cdktf.ComplexList {
  public internalValue? : FilevantageRuleGroupRules[] | cdktf.IResolvable

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
  public get(index: number): FilevantageRuleGroupRulesOutputReference {
    return new FilevantageRuleGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group crowdstrike_filevantage_rule_group}
*/
export class FilevantageRuleGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_filevantage_rule_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FilevantageRuleGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FilevantageRuleGroup to import
  * @param importFromId The id of the existing FilevantageRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FilevantageRuleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_filevantage_rule_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/filevantage_rule_group crowdstrike_filevantage_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilevantageRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: FilevantageRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_filevantage_rule_group',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.48',
        providerVersionConstraint: '0.0.48'
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
    this._name = config.name;
    this._rules.internalValue = config.rules;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // rules - computed: false, optional: true, required: false
  private _rules = new FilevantageRuleGroupRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: FilevantageRuleGroupRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(filevantageRuleGroupRulesToTerraform, false)(this._rules.internalValue),
      type: cdktf.stringToTerraform(this._type),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(filevantageRuleGroupRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FilevantageRuleGroupRulesList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
