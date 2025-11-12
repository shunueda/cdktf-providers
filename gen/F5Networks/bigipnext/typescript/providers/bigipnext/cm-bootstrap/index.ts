// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmBootstrapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timeout for the bootstrap operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap#bootstrap_timeout CmBootstrap#bootstrap_timeout}
  */
  readonly bootstrapTimeout?: number;
  /**
  * External storage configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap#external_storage CmBootstrap#external_storage}
  */
  readonly externalStorage?: CmBootstrapExternalStorage;
  /**
  * Run setup on Central Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap#run_setup CmBootstrap#run_setup}
  */
  readonly runSetup: boolean | cdktf.IResolvable;
}
export interface CmBootstrapExternalStorage {
  /**
  * Folder name created on the external storage server to store Central Manager data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap#cm_storage_dir CmBootstrap#cm_storage_dir}
  */
  readonly cmStorageDir?: string;
  /**
  * Password to access the external storage, required if storage type is SAMBA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap#password CmBootstrap#password}
  */
  readonly password?: string;
  /**
  * IP Address of the external storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap#storage_address CmBootstrap#storage_address}
  */
  readonly storageAddress: string;
  /**
  * Directory path that is mounted on the external storage server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap#storage_path CmBootstrap#storage_path}
  */
  readonly storagePath: string;
  /**
  * Type of external storage. Supported values are NFS and SAMBA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap#storage_type CmBootstrap#storage_type}
  */
  readonly storageType: string;
  /**
  * Username to access the external storage, required if storage type is SAMBA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap#username CmBootstrap#username}
  */
  readonly username?: string;
}

export function cmBootstrapExternalStorageToTerraform(struct?: CmBootstrapExternalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cm_storage_dir: cdktf.stringToTerraform(struct!.cmStorageDir),
    password: cdktf.stringToTerraform(struct!.password),
    storage_address: cdktf.stringToTerraform(struct!.storageAddress),
    storage_path: cdktf.stringToTerraform(struct!.storagePath),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cmBootstrapExternalStorageToHclTerraform(struct?: CmBootstrapExternalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cm_storage_dir: {
      value: cdktf.stringToHclTerraform(struct!.cmStorageDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_address: {
      value: cdktf.stringToHclTerraform(struct!.storageAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_path: {
      value: cdktf.stringToHclTerraform(struct!.storagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmBootstrapExternalStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmBootstrapExternalStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmStorageDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmStorageDir = this._cmStorageDir;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._storageAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAddress = this._storageAddress;
    }
    if (this._storagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePath = this._storagePath;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmBootstrapExternalStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmStorageDir = undefined;
      this._password = undefined;
      this._storageAddress = undefined;
      this._storagePath = undefined;
      this._storageType = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmStorageDir = value.cmStorageDir;
      this._password = value.password;
      this._storageAddress = value.storageAddress;
      this._storagePath = value.storagePath;
      this._storageType = value.storageType;
      this._username = value.username;
    }
  }

  // cm_storage_dir - computed: false, optional: true, required: false
  private _cmStorageDir?: string; 
  public get cmStorageDir() {
    return this.getStringAttribute('cm_storage_dir');
  }
  public set cmStorageDir(value: string) {
    this._cmStorageDir = value;
  }
  public resetCmStorageDir() {
    this._cmStorageDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmStorageDirInput() {
    return this._cmStorageDir;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // storage_address - computed: false, optional: false, required: true
  private _storageAddress?: string; 
  public get storageAddress() {
    return this.getStringAttribute('storage_address');
  }
  public set storageAddress(value: string) {
    this._storageAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAddressInput() {
    return this._storageAddress;
  }

  // storage_path - computed: false, optional: false, required: true
  private _storagePath?: string; 
  public get storagePath() {
    return this.getStringAttribute('storage_path');
  }
  public set storagePath(value: string) {
    this._storagePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePathInput() {
    return this._storagePath;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // username - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap bigipnext_cm_bootstrap}
*/
export class CmBootstrap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_bootstrap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmBootstrap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmBootstrap to import
  * @param importFromId The id of the existing CmBootstrap that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmBootstrap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_bootstrap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_bootstrap bigipnext_cm_bootstrap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmBootstrapConfig
  */
  public constructor(scope: Construct, id: string, config: CmBootstrapConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_bootstrap',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootstrapTimeout = config.bootstrapTimeout;
    this._externalStorage.internalValue = config.externalStorage;
    this._runSetup = config.runSetup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bootstrap_status - computed: true, optional: false, required: false
  public get bootstrapStatus() {
    return this.getStringAttribute('bootstrap_status');
  }

  // bootstrap_timeout - computed: false, optional: true, required: false
  private _bootstrapTimeout?: number; 
  public get bootstrapTimeout() {
    return this.getNumberAttribute('bootstrap_timeout');
  }
  public set bootstrapTimeout(value: number) {
    this._bootstrapTimeout = value;
  }
  public resetBootstrapTimeout() {
    this._bootstrapTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapTimeoutInput() {
    return this._bootstrapTimeout;
  }

  // external_storage - computed: false, optional: true, required: false
  private _externalStorage = new CmBootstrapExternalStorageOutputReference(this, "external_storage");
  public get externalStorage() {
    return this._externalStorage;
  }
  public putExternalStorage(value: CmBootstrapExternalStorage) {
    this._externalStorage.internalValue = value;
  }
  public resetExternalStorage() {
    this._externalStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalStorageInput() {
    return this._externalStorage.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // run_setup - computed: false, optional: false, required: true
  private _runSetup?: boolean | cdktf.IResolvable; 
  public get runSetup() {
    return this.getBooleanAttribute('run_setup');
  }
  public set runSetup(value: boolean | cdktf.IResolvable) {
    this._runSetup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runSetupInput() {
    return this._runSetup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bootstrap_timeout: cdktf.numberToTerraform(this._bootstrapTimeout),
      external_storage: cmBootstrapExternalStorageToTerraform(this._externalStorage.internalValue),
      run_setup: cdktf.booleanToTerraform(this._runSetup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bootstrap_timeout: {
        value: cdktf.numberToHclTerraform(this._bootstrapTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_storage: {
        value: cmBootstrapExternalStorageToHclTerraform(this._externalStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmBootstrapExternalStorage",
      },
      run_setup: {
        value: cdktf.booleanToHclTerraform(this._runSetup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
