// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementResourceCifsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blocks the ability to remotely manipulate a the window's registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#block_remote_registry_access ManagementResourceCifs#block_remote_registry_access}
  */
  readonly blockRemoteRegistryAccess?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#color ManagementResourceCifs#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#comments ManagementResourceCifs#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#id ManagementResourceCifs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#ignore_errors ManagementResourceCifs#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#ignore_warnings ManagementResourceCifs#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Logs any attempt to violate the restrictions imposed by the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#log_access_violation ManagementResourceCifs#log_access_violation}
  */
  readonly logAccessViolation?: boolean | cdktf.IResolvable;
  /**
  * Logs each share map attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#log_mapped_shares ManagementResourceCifs#log_mapped_shares}
  */
  readonly logMappedShares?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#name ManagementResourceCifs#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#tags ManagementResourceCifs#tags}
  */
  readonly tags?: string[];
  /**
  * allowed_disk_and_print_shares block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#allowed_disk_and_print_shares ManagementResourceCifs#allowed_disk_and_print_shares}
  */
  readonly allowedDiskAndPrintShares: ManagementResourceCifsAllowedDiskAndPrintShares[] | cdktf.IResolvable;
}
export interface ManagementResourceCifsAllowedDiskAndPrintShares {
  /**
  * Blocks the ability to remotely manipulate a the window's registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#server_name ManagementResourceCifs#server_name}
  */
  readonly serverName: string;
  /**
  * Disk shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#share_name ManagementResourceCifs#share_name}
  */
  readonly shareName: string;
}

export function managementResourceCifsAllowedDiskAndPrintSharesToTerraform(struct?: ManagementResourceCifsAllowedDiskAndPrintShares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_name: cdktf.stringToTerraform(struct!.serverName),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}


export function managementResourceCifsAllowedDiskAndPrintSharesToHclTerraform(struct?: ManagementResourceCifsAllowedDiskAndPrintShares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceCifsAllowedDiskAndPrintSharesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementResourceCifsAllowedDiskAndPrintShares | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceCifsAllowedDiskAndPrintShares | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverName = undefined;
      this._shareName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverName = value.serverName;
      this._shareName = value.shareName;
    }
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }
}

export class ManagementResourceCifsAllowedDiskAndPrintSharesList extends cdktf.ComplexList {
  public internalValue? : ManagementResourceCifsAllowedDiskAndPrintShares[] | cdktf.IResolvable

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
  public get(index: number): ManagementResourceCifsAllowedDiskAndPrintSharesOutputReference {
    return new ManagementResourceCifsAllowedDiskAndPrintSharesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs checkpoint_management_resource_cifs}
*/
export class ManagementResourceCifs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_resource_cifs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementResourceCifs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementResourceCifs to import
  * @param importFromId The id of the existing ManagementResourceCifs that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementResourceCifs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_resource_cifs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_resource_cifs checkpoint_management_resource_cifs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementResourceCifsConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementResourceCifsConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_resource_cifs',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockRemoteRegistryAccess = config.blockRemoteRegistryAccess;
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._logAccessViolation = config.logAccessViolation;
    this._logMappedShares = config.logMappedShares;
    this._name = config.name;
    this._tags = config.tags;
    this._allowedDiskAndPrintShares.internalValue = config.allowedDiskAndPrintShares;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_remote_registry_access - computed: false, optional: true, required: false
  private _blockRemoteRegistryAccess?: boolean | cdktf.IResolvable; 
  public get blockRemoteRegistryAccess() {
    return this.getBooleanAttribute('block_remote_registry_access');
  }
  public set blockRemoteRegistryAccess(value: boolean | cdktf.IResolvable) {
    this._blockRemoteRegistryAccess = value;
  }
  public resetBlockRemoteRegistryAccess() {
    this._blockRemoteRegistryAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockRemoteRegistryAccessInput() {
    return this._blockRemoteRegistryAccess;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // log_access_violation - computed: false, optional: true, required: false
  private _logAccessViolation?: boolean | cdktf.IResolvable; 
  public get logAccessViolation() {
    return this.getBooleanAttribute('log_access_violation');
  }
  public set logAccessViolation(value: boolean | cdktf.IResolvable) {
    this._logAccessViolation = value;
  }
  public resetLogAccessViolation() {
    this._logAccessViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAccessViolationInput() {
    return this._logAccessViolation;
  }

  // log_mapped_shares - computed: false, optional: true, required: false
  private _logMappedShares?: boolean | cdktf.IResolvable; 
  public get logMappedShares() {
    return this.getBooleanAttribute('log_mapped_shares');
  }
  public set logMappedShares(value: boolean | cdktf.IResolvable) {
    this._logMappedShares = value;
  }
  public resetLogMappedShares() {
    this._logMappedShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMappedSharesInput() {
    return this._logMappedShares;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // allowed_disk_and_print_shares - computed: false, optional: false, required: true
  private _allowedDiskAndPrintShares = new ManagementResourceCifsAllowedDiskAndPrintSharesList(this, "allowed_disk_and_print_shares", false);
  public get allowedDiskAndPrintShares() {
    return this._allowedDiskAndPrintShares;
  }
  public putAllowedDiskAndPrintShares(value: ManagementResourceCifsAllowedDiskAndPrintShares[] | cdktf.IResolvable) {
    this._allowedDiskAndPrintShares.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDiskAndPrintSharesInput() {
    return this._allowedDiskAndPrintShares.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_remote_registry_access: cdktf.booleanToTerraform(this._blockRemoteRegistryAccess),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      log_access_violation: cdktf.booleanToTerraform(this._logAccessViolation),
      log_mapped_shares: cdktf.booleanToTerraform(this._logMappedShares),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      allowed_disk_and_print_shares: cdktf.listMapper(managementResourceCifsAllowedDiskAndPrintSharesToTerraform, true)(this._allowedDiskAndPrintShares.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_remote_registry_access: {
        value: cdktf.booleanToHclTerraform(this._blockRemoteRegistryAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_access_violation: {
        value: cdktf.booleanToHclTerraform(this._logAccessViolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_mapped_shares: {
        value: cdktf.booleanToHclTerraform(this._logMappedShares),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_disk_and_print_shares: {
        value: cdktf.listMapperHcl(managementResourceCifsAllowedDiskAndPrintSharesToHclTerraform, true)(this._allowedDiskAndPrintShares.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceCifsAllowedDiskAndPrintSharesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
