// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBoxSubaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access settings for the Subaccount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#access_settings StorageBoxSubaccount#access_settings}
  */
  readonly accessSettings?: StorageBoxSubaccountAccessSettings;
  /**
  * A description of the Storage Box Subaccount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#description StorageBoxSubaccount#description}
  */
  readonly description?: string;
  /**
  * Home directory of the Storage Box Subaccount. The directory will be created if it doesn't exist yet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#home_directory StorageBoxSubaccount#home_directory}
  */
  readonly homeDirectory: string;
  /**
  * User-defined [labels](https://docs.hetzner.cloud/reference/cloud#labels) (key-value pairs) for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#labels StorageBoxSubaccount#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Password of the Storage Box. For more details, see the [Storage Boxes password policy](https://docs.hetzner.cloud/reference/hetzner#storage-boxes-password-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#password StorageBoxSubaccount#password}
  */
  readonly password: string;
  /**
  * ID of the Storage Box.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#storage_box_id StorageBoxSubaccount#storage_box_id}
  */
  readonly storageBoxId: number;
}
export interface StorageBoxSubaccountAccessSettings {
  /**
  * Whether access from outside the Hetzner network is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#reachable_externally StorageBoxSubaccount#reachable_externally}
  */
  readonly reachableExternally?: boolean | cdktf.IResolvable;
  /**
  * Whether the Subaccount is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#readonly StorageBoxSubaccount#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Whether the Samba subsystem is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#samba_enabled StorageBoxSubaccount#samba_enabled}
  */
  readonly sambaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the SSH subsystem is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#ssh_enabled StorageBoxSubaccount#ssh_enabled}
  */
  readonly sshEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the WebDAV subsystem is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#webdav_enabled StorageBoxSubaccount#webdav_enabled}
  */
  readonly webdavEnabled?: boolean | cdktf.IResolvable;
}

export function storageBoxSubaccountAccessSettingsToTerraform(struct?: StorageBoxSubaccountAccessSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reachable_externally: cdktf.booleanToTerraform(struct!.reachableExternally),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    samba_enabled: cdktf.booleanToTerraform(struct!.sambaEnabled),
    ssh_enabled: cdktf.booleanToTerraform(struct!.sshEnabled),
    webdav_enabled: cdktf.booleanToTerraform(struct!.webdavEnabled),
  }
}


export function storageBoxSubaccountAccessSettingsToHclTerraform(struct?: StorageBoxSubaccountAccessSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reachable_externally: {
      value: cdktf.booleanToHclTerraform(struct!.reachableExternally),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samba_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sambaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sshEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    webdav_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.webdavEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageBoxSubaccountAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageBoxSubaccountAccessSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reachableExternally !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableExternally = this._reachableExternally;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._sambaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sambaEnabled = this._sambaEnabled;
    }
    if (this._sshEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshEnabled = this._sshEnabled;
    }
    if (this._webdavEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.webdavEnabled = this._webdavEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBoxSubaccountAccessSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reachableExternally = undefined;
      this._readonly = undefined;
      this._sambaEnabled = undefined;
      this._sshEnabled = undefined;
      this._webdavEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reachableExternally = value.reachableExternally;
      this._readonly = value.readonly;
      this._sambaEnabled = value.sambaEnabled;
      this._sshEnabled = value.sshEnabled;
      this._webdavEnabled = value.webdavEnabled;
    }
  }

  // reachable_externally - computed: true, optional: true, required: false
  private _reachableExternally?: boolean | cdktf.IResolvable; 
  public get reachableExternally() {
    return this.getBooleanAttribute('reachable_externally');
  }
  public set reachableExternally(value: boolean | cdktf.IResolvable) {
    this._reachableExternally = value;
  }
  public resetReachableExternally() {
    this._reachableExternally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableExternallyInput() {
    return this._reachableExternally;
  }

  // readonly - computed: true, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // samba_enabled - computed: true, optional: true, required: false
  private _sambaEnabled?: boolean | cdktf.IResolvable; 
  public get sambaEnabled() {
    return this.getBooleanAttribute('samba_enabled');
  }
  public set sambaEnabled(value: boolean | cdktf.IResolvable) {
    this._sambaEnabled = value;
  }
  public resetSambaEnabled() {
    this._sambaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sambaEnabledInput() {
    return this._sambaEnabled;
  }

  // ssh_enabled - computed: true, optional: true, required: false
  private _sshEnabled?: boolean | cdktf.IResolvable; 
  public get sshEnabled() {
    return this.getBooleanAttribute('ssh_enabled');
  }
  public set sshEnabled(value: boolean | cdktf.IResolvable) {
    this._sshEnabled = value;
  }
  public resetSshEnabled() {
    this._sshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshEnabledInput() {
    return this._sshEnabled;
  }

  // webdav_enabled - computed: true, optional: true, required: false
  private _webdavEnabled?: boolean | cdktf.IResolvable; 
  public get webdavEnabled() {
    return this.getBooleanAttribute('webdav_enabled');
  }
  public set webdavEnabled(value: boolean | cdktf.IResolvable) {
    this._webdavEnabled = value;
  }
  public resetWebdavEnabled() {
    this._webdavEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webdavEnabledInput() {
    return this._webdavEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount hcloud_storage_box_subaccount}
*/
export class StorageBoxSubaccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_storage_box_subaccount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageBoxSubaccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageBoxSubaccount to import
  * @param importFromId The id of the existing StorageBoxSubaccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageBoxSubaccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_storage_box_subaccount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box_subaccount hcloud_storage_box_subaccount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBoxSubaccountConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBoxSubaccountConfig) {
    super(scope, id, {
      terraformResourceType: 'hcloud_storage_box_subaccount',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.57.0',
        providerVersionConstraint: '1.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessSettings.internalValue = config.accessSettings;
    this._description = config.description;
    this._homeDirectory = config.homeDirectory;
    this._labels = config.labels;
    this._password = config.password;
    this._storageBoxId = config.storageBoxId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_settings - computed: true, optional: true, required: false
  private _accessSettings = new StorageBoxSubaccountAccessSettingsOutputReference(this, "access_settings");
  public get accessSettings() {
    return this._accessSettings;
  }
  public putAccessSettings(value: StorageBoxSubaccountAccessSettings) {
    this._accessSettings.internalValue = value;
  }
  public resetAccessSettings() {
    this._accessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSettingsInput() {
    return this._accessSettings.internalValue;
  }

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

  // home_directory - computed: false, optional: false, required: true
  private _homeDirectory?: string; 
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }
  public set homeDirectory(value: string) {
    this._homeDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryInput() {
    return this._homeDirectory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // storage_box_id - computed: false, optional: false, required: true
  private _storageBoxId?: number; 
  public get storageBoxId() {
    return this.getNumberAttribute('storage_box_id');
  }
  public set storageBoxId(value: number) {
    this._storageBoxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBoxIdInput() {
    return this._storageBoxId;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_settings: storageBoxSubaccountAccessSettingsToTerraform(this._accessSettings.internalValue),
      description: cdktf.stringToTerraform(this._description),
      home_directory: cdktf.stringToTerraform(this._homeDirectory),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      password: cdktf.stringToTerraform(this._password),
      storage_box_id: cdktf.numberToTerraform(this._storageBoxId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_settings: {
        value: storageBoxSubaccountAccessSettingsToHclTerraform(this._accessSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageBoxSubaccountAccessSettings",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_directory: {
        value: cdktf.stringToHclTerraform(this._homeDirectory),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_box_id: {
        value: cdktf.numberToHclTerraform(this._storageBoxId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
