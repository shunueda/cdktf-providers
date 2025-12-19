// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store#id BackupStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * creat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store#creat_cfg BackupStore#creat_cfg}
  */
  readonly creatCfg?: BackupStoreCreatCfg;
  /**
  * delete_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store#delete_cfg BackupStore#delete_cfg}
  */
  readonly deleteCfg?: BackupStoreDeleteCfg;
}
export interface BackupStoreCreatCfg {
  /**
  * Create store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store#create BackupStore#create}
  */
  readonly create?: number;
  /**
  * profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store#remote_file BackupStore#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * profile name to store remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store#store_name BackupStore#store_name}
  */
  readonly storeName?: string;
}

export function backupStoreCreatCfgToTerraform(struct?: BackupStoreCreatCfgOutputReference | BackupStoreCreatCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.numberToTerraform(struct!.create),
    remote_file: cdktf.stringToTerraform(struct!.remoteFile),
    store_name: cdktf.stringToTerraform(struct!.storeName),
  }
}


export function backupStoreCreatCfgToHclTerraform(struct?: BackupStoreCreatCfgOutputReference | BackupStoreCreatCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.numberToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_file: {
      value: cdktf.stringToHclTerraform(struct!.remoteFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_name: {
      value: cdktf.stringToHclTerraform(struct!.storeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupStoreCreatCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupStoreCreatCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._remoteFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFile = this._remoteFile;
    }
    if (this._storeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeName = this._storeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupStoreCreatCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._remoteFile = undefined;
      this._storeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._remoteFile = value.remoteFile;
      this._storeName = value.storeName;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: number; 
  public get create() {
    return this.getNumberAttribute('create');
  }
  public set create(value: number) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // store_name - computed: false, optional: true, required: false
  private _storeName?: string; 
  public get storeName() {
    return this.getStringAttribute('store_name');
  }
  public set storeName(value: string) {
    this._storeName = value;
  }
  public resetStoreName() {
    this._storeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeNameInput() {
    return this._storeName;
  }
}
export interface BackupStoreDeleteCfg {
  /**
  * Delete store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store#delete BackupStore#delete}
  */
  readonly delete?: number;
  /**
  * profile name for deleting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store#store_name_del BackupStore#store_name_del}
  */
  readonly storeNameDel?: string;
}

export function backupStoreDeleteCfgToTerraform(struct?: BackupStoreDeleteCfgOutputReference | BackupStoreDeleteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.numberToTerraform(struct!.delete),
    store_name_del: cdktf.stringToTerraform(struct!.storeNameDel),
  }
}


export function backupStoreDeleteCfgToHclTerraform(struct?: BackupStoreDeleteCfgOutputReference | BackupStoreDeleteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    store_name_del: {
      value: cdktf.stringToHclTerraform(struct!.storeNameDel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupStoreDeleteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupStoreDeleteCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._storeNameDel !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeNameDel = this._storeNameDel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupStoreDeleteCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._storeNameDel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._storeNameDel = value.storeNameDel;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // store_name_del - computed: false, optional: true, required: false
  private _storeNameDel?: string; 
  public get storeNameDel() {
    return this.getStringAttribute('store_name_del');
  }
  public set storeNameDel(value: string) {
    this._storeNameDel = value;
  }
  public resetStoreNameDel() {
    this._storeNameDel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeNameDelInput() {
    return this._storeNameDel;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store thunder_backup_store}
*/
export class BackupStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_backup_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupStore to import
  * @param importFromId The id of the existing BackupStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_backup_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_store thunder_backup_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupStoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BackupStoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_backup_store',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._id = config.id;
    this._creatCfg.internalValue = config.creatCfg;
    this._deleteCfg.internalValue = config.deleteCfg;
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

  // creat_cfg - computed: false, optional: true, required: false
  private _creatCfg = new BackupStoreCreatCfgOutputReference(this, "creat_cfg");
  public get creatCfg() {
    return this._creatCfg;
  }
  public putCreatCfg(value: BackupStoreCreatCfg) {
    this._creatCfg.internalValue = value;
  }
  public resetCreatCfg() {
    this._creatCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatCfgInput() {
    return this._creatCfg.internalValue;
  }

  // delete_cfg - computed: false, optional: true, required: false
  private _deleteCfg = new BackupStoreDeleteCfgOutputReference(this, "delete_cfg");
  public get deleteCfg() {
    return this._deleteCfg;
  }
  public putDeleteCfg(value: BackupStoreDeleteCfg) {
    this._deleteCfg.internalValue = value;
  }
  public resetDeleteCfg() {
    this._deleteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteCfgInput() {
    return this._deleteCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      creat_cfg: backupStoreCreatCfgToTerraform(this._creatCfg.internalValue),
      delete_cfg: backupStoreDeleteCfgToTerraform(this._deleteCfg.internalValue),
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
      creat_cfg: {
        value: backupStoreCreatCfgToHclTerraform(this._creatCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupStoreCreatCfgList",
      },
      delete_cfg: {
        value: backupStoreDeleteCfgToHclTerraform(this._deleteCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupStoreDeleteCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
