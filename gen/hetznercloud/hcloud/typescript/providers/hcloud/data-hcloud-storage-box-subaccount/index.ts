// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudStorageBoxSubaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Storage Box Subaccount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccount#id DataHcloudStorageBoxSubaccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * ID of the Storage Box.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccount#storage_box_id DataHcloudStorageBoxSubaccount#storage_box_id}
  */
  readonly storageBoxId: number;
  /**
  * Username of the Storage Box Subaccount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccount#username DataHcloudStorageBoxSubaccount#username}
  */
  readonly username?: string;
  /**
  * Filter results using a [Label Selector](https://docs.hetzner.cloud/reference/hetzner#label-selector).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccount#with_selector DataHcloudStorageBoxSubaccount#with_selector}
  */
  readonly withSelector?: string;
}
export interface DataHcloudStorageBoxSubaccountAccessSettings {
}

export function dataHcloudStorageBoxSubaccountAccessSettingsToTerraform(struct?: DataHcloudStorageBoxSubaccountAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudStorageBoxSubaccountAccessSettingsToHclTerraform(struct?: DataHcloudStorageBoxSubaccountAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudStorageBoxSubaccountAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcloudStorageBoxSubaccountAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudStorageBoxSubaccountAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reachable_externally - computed: true, optional: false, required: false
  public get reachableExternally() {
    return this.getBooleanAttribute('reachable_externally');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // samba_enabled - computed: true, optional: false, required: false
  public get sambaEnabled() {
    return this.getBooleanAttribute('samba_enabled');
  }

  // ssh_enabled - computed: true, optional: false, required: false
  public get sshEnabled() {
    return this.getBooleanAttribute('ssh_enabled');
  }

  // webdav_enabled - computed: true, optional: false, required: false
  public get webdavEnabled() {
    return this.getBooleanAttribute('webdav_enabled');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccount hcloud_storage_box_subaccount}
*/
export class DataHcloudStorageBoxSubaccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_storage_box_subaccount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudStorageBoxSubaccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudStorageBoxSubaccount to import
  * @param importFromId The id of the existing DataHcloudStorageBoxSubaccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudStorageBoxSubaccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_storage_box_subaccount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccount hcloud_storage_box_subaccount} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudStorageBoxSubaccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcloudStorageBoxSubaccountConfig) {
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
    this._id = config.id;
    this._storageBoxId = config.storageBoxId;
    this._username = config.username;
    this._withSelector = config.withSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_settings - computed: true, optional: false, required: false
  private _accessSettings = new DataHcloudStorageBoxSubaccountAccessSettingsOutputReference(this, "access_settings");
  public get accessSettings() {
    return this._accessSettings;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // home_directory - computed: true, optional: false, required: false
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // with_selector - computed: false, optional: true, required: false
  private _withSelector?: string; 
  public get withSelector() {
    return this.getStringAttribute('with_selector');
  }
  public set withSelector(value: string) {
    this._withSelector = value;
  }
  public resetWithSelector() {
    this._withSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSelectorInput() {
    return this._withSelector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      storage_box_id: cdktf.numberToTerraform(this._storageBoxId),
      username: cdktf.stringToTerraform(this._username),
      with_selector: cdktf.stringToTerraform(this._withSelector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_box_id: {
        value: cdktf.numberToHclTerraform(this._storageBoxId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_selector: {
        value: cdktf.stringToHclTerraform(this._withSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
