// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccounts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudStorageBoxSubaccountsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Storage Box.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccounts#storage_box_id DataHcloudStorageBoxSubaccounts#storage_box_id}
  */
  readonly storageBoxId: number;
  /**
  * Filter results using a [Label Selector](https://docs.hetzner.cloud/reference/cloud#label-selector)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccounts#with_selector DataHcloudStorageBoxSubaccounts#with_selector}
  */
  readonly withSelector?: string;
}
export interface DataHcloudStorageBoxSubaccountsSubaccountsAccessSettings {
}

export function dataHcloudStorageBoxSubaccountsSubaccountsAccessSettingsToTerraform(struct?: DataHcloudStorageBoxSubaccountsSubaccountsAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudStorageBoxSubaccountsSubaccountsAccessSettingsToHclTerraform(struct?: DataHcloudStorageBoxSubaccountsSubaccountsAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudStorageBoxSubaccountsSubaccountsAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcloudStorageBoxSubaccountsSubaccountsAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudStorageBoxSubaccountsSubaccountsAccessSettings | undefined) {
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
export interface DataHcloudStorageBoxSubaccountsSubaccounts {
}

export function dataHcloudStorageBoxSubaccountsSubaccountsToTerraform(struct?: DataHcloudStorageBoxSubaccountsSubaccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudStorageBoxSubaccountsSubaccountsToHclTerraform(struct?: DataHcloudStorageBoxSubaccountsSubaccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudStorageBoxSubaccountsSubaccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcloudStorageBoxSubaccountsSubaccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudStorageBoxSubaccountsSubaccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_settings - computed: true, optional: false, required: false
  private _accessSettings = new DataHcloudStorageBoxSubaccountsSubaccountsAccessSettingsOutputReference(this, "access_settings");
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // storage_box_id - computed: true, optional: false, required: false
  public get storageBoxId() {
    return this.getNumberAttribute('storage_box_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataHcloudStorageBoxSubaccountsSubaccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataHcloudStorageBoxSubaccountsSubaccountsOutputReference {
    return new DataHcloudStorageBoxSubaccountsSubaccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccounts hcloud_storage_box_subaccounts}
*/
export class DataHcloudStorageBoxSubaccounts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_storage_box_subaccounts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudStorageBoxSubaccounts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudStorageBoxSubaccounts to import
  * @param importFromId The id of the existing DataHcloudStorageBoxSubaccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccounts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudStorageBoxSubaccounts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_storage_box_subaccounts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_subaccounts hcloud_storage_box_subaccounts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudStorageBoxSubaccountsConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcloudStorageBoxSubaccountsConfig) {
    super(scope, id, {
      terraformResourceType: 'hcloud_storage_box_subaccounts',
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
    this._storageBoxId = config.storageBoxId;
    this._withSelector = config.withSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // subaccounts - computed: true, optional: false, required: false
  private _subaccounts = new DataHcloudStorageBoxSubaccountsSubaccountsList(this, "subaccounts", false);
  public get subaccounts() {
    return this._subaccounts;
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
      storage_box_id: cdktf.numberToTerraform(this._storageBoxId),
      with_selector: cdktf.stringToTerraform(this._withSelector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      storage_box_id: {
        value: cdktf.numberToHclTerraform(this._storageBoxId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
