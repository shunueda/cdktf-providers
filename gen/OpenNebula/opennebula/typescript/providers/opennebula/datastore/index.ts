// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of hosts that have access to the storage to add new images to the datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#bridge_list Datastore#bridge_list}
  */
  readonly bridgeList?: string[];
  /**
  * If yes, the available capacity of the Datastore is checked before creating a new image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#check_available_capacity Datastore#check_available_capacity}
  */
  readonly checkAvailableCapacity?: boolean | cdktf.IResolvable;
  /**
  * List of cluster IDs hosting the datastore, if not set it uses the default cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#cluster_ids Datastore#cluster_ids}
  */
  readonly clusterIds?: number[];
  /**
  * For Image Datastores only. Set the System Datastores IDs that can be used with an Image Datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#compatible_system_datastore Datastore#compatible_system_datastore}
  */
  readonly compatibleSystemDatastore?: string[];
  /**
  * Specific image mapping driver enforcement. If present it overrides image DRIVER set in the image attributes and VM template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#driver Datastore#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#id Datastore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#name Datastore#name}
  */
  readonly name: string;
  /**
  * Do not try to untar or decompress the file to be registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#no_decompress Datastore#no_decompress}
  */
  readonly noDecompress?: boolean | cdktf.IResolvable;
  /**
  * Paths that cannot be used to register images. A space separated list of paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#restricted_directories Datastore#restricted_directories}
  */
  readonly restrictedDirectories?: string;
  /**
  * If you need to allow a directory listed under RESTRICTED_DIRS. A space separated list of paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#safe_directories Datastore#safe_directories}
  */
  readonly safeDirectories?: string;
  /**
  * Path in the storage bridge host to copy an Image before moving it to its final destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#staging_dir Datastore#staging_dir}
  */
  readonly stagingDir?: string;
  /**
  * The maximum capacity allowed for the Datastore in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#storage_usage_limit Datastore#storage_usage_limit}
  */
  readonly storageUsageLimit?: number;
  /**
  * Add custom tags to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#tags Datastore#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Specify the maximum transfer rate in bytes/second when downloading images from a http/https URL. Suffixes K, M or G can be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#transfer_bandwith_limit Datastore#transfer_bandwith_limit}
  */
  readonly transferBandwithLimit?: number;
  /**
  * Type of the datastore: image, system, files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#type Datastore#type}
  */
  readonly type: string;
  /**
  * ceph block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#ceph Datastore#ceph}
  */
  readonly ceph?: DatastoreCeph[] | cdktf.IResolvable;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#custom Datastore#custom}
  */
  readonly custom?: DatastoreCustom[] | cdktf.IResolvable;
}
export interface DatastoreCeph {
  /**
  * Non-default Ceph configuration file if needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#config Datastore#config}
  */
  readonly config?: string;
  /**
  * List of Ceph monitors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#host Datastore#host}
  */
  readonly host?: string[];
  /**
  * Key file for user. if not set default locations are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#key Datastore#key}
  */
  readonly key?: string;
  /**
  * Use local host storage, SSH mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#local_storage Datastore#local_storage}
  */
  readonly localStorage?: boolean | cdktf.IResolvable;
  /**
  * Ceph pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#pool_name Datastore#pool_name}
  */
  readonly poolName?: string;
  /**
  * By default RBD Format 2 will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#rbd_format Datastore#rbd_format}
  */
  readonly rbdFormat?: string;
  /**
  * The UUID of the libvirt secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#secret Datastore#secret}
  */
  readonly secret?: string;
  /**
  * Enables trash feature on given datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#trash Datastore#trash}
  */
  readonly trash?: boolean | cdktf.IResolvable;
  /**
  * Ceph user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#user Datastore#user}
  */
  readonly user?: string;
}

export function datastoreCephToTerraform(struct?: DatastoreCeph | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.host),
    key: cdktf.stringToTerraform(struct!.key),
    local_storage: cdktf.booleanToTerraform(struct!.localStorage),
    pool_name: cdktf.stringToTerraform(struct!.poolName),
    rbd_format: cdktf.stringToTerraform(struct!.rbdFormat),
    secret: cdktf.stringToTerraform(struct!.secret),
    trash: cdktf.booleanToTerraform(struct!.trash),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function datastoreCephToHclTerraform(struct?: DatastoreCeph | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.host),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_storage: {
      value: cdktf.booleanToHclTerraform(struct!.localStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rbd_format: {
      value: cdktf.stringToHclTerraform(struct!.rbdFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trash: {
      value: cdktf.booleanToHclTerraform(struct!.trash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreCephOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreCeph | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._localStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorage = this._localStorage;
    }
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._rbdFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbdFormat = this._rbdFormat;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._trash !== undefined) {
      hasAnyValues = true;
      internalValueResult.trash = this._trash;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreCeph | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._host = undefined;
      this._key = undefined;
      this._localStorage = undefined;
      this._poolName = undefined;
      this._rbdFormat = undefined;
      this._secret = undefined;
      this._trash = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._host = value.host;
      this._key = value.key;
      this._localStorage = value.localStorage;
      this._poolName = value.poolName;
      this._rbdFormat = value.rbdFormat;
      this._secret = value.secret;
      this._trash = value.trash;
      this._user = value.user;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string[]; 
  public get host() {
    return cdktf.Fn.tolist(this.getListAttribute('host'));
  }
  public set host(value: string[]) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // local_storage - computed: false, optional: true, required: false
  private _localStorage?: boolean | cdktf.IResolvable; 
  public get localStorage() {
    return this.getBooleanAttribute('local_storage');
  }
  public set localStorage(value: boolean | cdktf.IResolvable) {
    this._localStorage = value;
  }
  public resetLocalStorage() {
    this._localStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageInput() {
    return this._localStorage;
  }

  // pool_name - computed: false, optional: true, required: false
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // rbd_format - computed: false, optional: true, required: false
  private _rbdFormat?: string; 
  public get rbdFormat() {
    return this.getStringAttribute('rbd_format');
  }
  public set rbdFormat(value: string) {
    this._rbdFormat = value;
  }
  public resetRbdFormat() {
    this._rbdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdFormatInput() {
    return this._rbdFormat;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // trash - computed: false, optional: true, required: false
  private _trash?: boolean | cdktf.IResolvable; 
  public get trash() {
    return this.getBooleanAttribute('trash');
  }
  public set trash(value: boolean | cdktf.IResolvable) {
    this._trash = value;
  }
  public resetTrash() {
    this._trash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trashInput() {
    return this._trash;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class DatastoreCephList extends cdktf.ComplexList {
  public internalValue? : DatastoreCeph[] | cdktf.IResolvable

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
  public get(index: number): DatastoreCephOutputReference {
    return new DatastoreCephOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreCustom {
  /**
  * Datastore driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#datastore Datastore#datastore}
  */
  readonly datastore?: string;
  /**
  * Transfer driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#transfer Datastore#transfer}
  */
  readonly transfer: string;
}

export function datastoreCustomToTerraform(struct?: DatastoreCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore: cdktf.stringToTerraform(struct!.datastore),
    transfer: cdktf.stringToTerraform(struct!.transfer),
  }
}


export function datastoreCustomToHclTerraform(struct?: DatastoreCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer: {
      value: cdktf.stringToHclTerraform(struct!.transfer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._transfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.transfer = this._transfer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datastore = undefined;
      this._transfer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datastore = value.datastore;
      this._transfer = value.transfer;
    }
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // transfer - computed: false, optional: false, required: true
  private _transfer?: string; 
  public get transfer() {
    return this.getStringAttribute('transfer');
  }
  public set transfer(value: string) {
    this._transfer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transferInput() {
    return this._transfer;
  }
}

export class DatastoreCustomList extends cdktf.ComplexList {
  public internalValue? : DatastoreCustom[] | cdktf.IResolvable

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
  public get(index: number): DatastoreCustomOutputReference {
    return new DatastoreCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore opennebula_datastore}
*/
export class Datastore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Datastore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Datastore to import
  * @param importFromId The id of the existing Datastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Datastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/datastore opennebula_datastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: DatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_datastore',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
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
    this._bridgeList = config.bridgeList;
    this._checkAvailableCapacity = config.checkAvailableCapacity;
    this._clusterIds = config.clusterIds;
    this._compatibleSystemDatastore = config.compatibleSystemDatastore;
    this._driver = config.driver;
    this._id = config.id;
    this._name = config.name;
    this._noDecompress = config.noDecompress;
    this._restrictedDirectories = config.restrictedDirectories;
    this._safeDirectories = config.safeDirectories;
    this._stagingDir = config.stagingDir;
    this._storageUsageLimit = config.storageUsageLimit;
    this._tags = config.tags;
    this._transferBandwithLimit = config.transferBandwithLimit;
    this._type = config.type;
    this._ceph.internalValue = config.ceph;
    this._custom.internalValue = config.custom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge_list - computed: false, optional: true, required: false
  private _bridgeList?: string[]; 
  public get bridgeList() {
    return cdktf.Fn.tolist(this.getListAttribute('bridge_list'));
  }
  public set bridgeList(value: string[]) {
    this._bridgeList = value;
  }
  public resetBridgeList() {
    this._bridgeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeListInput() {
    return this._bridgeList;
  }

  // check_available_capacity - computed: false, optional: true, required: false
  private _checkAvailableCapacity?: boolean | cdktf.IResolvable; 
  public get checkAvailableCapacity() {
    return this.getBooleanAttribute('check_available_capacity');
  }
  public set checkAvailableCapacity(value: boolean | cdktf.IResolvable) {
    this._checkAvailableCapacity = value;
  }
  public resetCheckAvailableCapacity() {
    this._checkAvailableCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkAvailableCapacityInput() {
    return this._checkAvailableCapacity;
  }

  // cluster_ids - computed: false, optional: true, required: false
  private _clusterIds?: number[]; 
  public get clusterIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('cluster_ids')));
  }
  public set clusterIds(value: number[]) {
    this._clusterIds = value;
  }
  public resetClusterIds() {
    this._clusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdsInput() {
    return this._clusterIds;
  }

  // compatible_system_datastore - computed: false, optional: true, required: false
  private _compatibleSystemDatastore?: string[]; 
  public get compatibleSystemDatastore() {
    return cdktf.Fn.tolist(this.getListAttribute('compatible_system_datastore'));
  }
  public set compatibleSystemDatastore(value: string[]) {
    this._compatibleSystemDatastore = value;
  }
  public resetCompatibleSystemDatastore() {
    this._compatibleSystemDatastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleSystemDatastoreInput() {
    return this._compatibleSystemDatastore;
  }

  // default_tags - computed: true, optional: false, required: false
  private _defaultTags = new cdktf.StringMap(this, "default_tags");
  public get defaultTags() {
    return this._defaultTags;
  }

  // driver - computed: true, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
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

  // no_decompress - computed: false, optional: true, required: false
  private _noDecompress?: boolean | cdktf.IResolvable; 
  public get noDecompress() {
    return this.getBooleanAttribute('no_decompress');
  }
  public set noDecompress(value: boolean | cdktf.IResolvable) {
    this._noDecompress = value;
  }
  public resetNoDecompress() {
    this._noDecompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDecompressInput() {
    return this._noDecompress;
  }

  // restricted_directories - computed: true, optional: true, required: false
  private _restrictedDirectories?: string; 
  public get restrictedDirectories() {
    return this.getStringAttribute('restricted_directories');
  }
  public set restrictedDirectories(value: string) {
    this._restrictedDirectories = value;
  }
  public resetRestrictedDirectories() {
    this._restrictedDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedDirectoriesInput() {
    return this._restrictedDirectories;
  }

  // safe_directories - computed: true, optional: true, required: false
  private _safeDirectories?: string; 
  public get safeDirectories() {
    return this.getStringAttribute('safe_directories');
  }
  public set safeDirectories(value: string) {
    this._safeDirectories = value;
  }
  public resetSafeDirectories() {
    this._safeDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeDirectoriesInput() {
    return this._safeDirectories;
  }

  // staging_dir - computed: false, optional: true, required: false
  private _stagingDir?: string; 
  public get stagingDir() {
    return this.getStringAttribute('staging_dir');
  }
  public set stagingDir(value: string) {
    this._stagingDir = value;
  }
  public resetStagingDir() {
    this._stagingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingDirInput() {
    return this._stagingDir;
  }

  // storage_usage_limit - computed: false, optional: true, required: false
  private _storageUsageLimit?: number; 
  public get storageUsageLimit() {
    return this.getNumberAttribute('storage_usage_limit');
  }
  public set storageUsageLimit(value: number) {
    this._storageUsageLimit = value;
  }
  public resetStorageUsageLimit() {
    this._storageUsageLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUsageLimitInput() {
    return this._storageUsageLimit;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // transfer_bandwith_limit - computed: false, optional: true, required: false
  private _transferBandwithLimit?: number; 
  public get transferBandwithLimit() {
    return this.getNumberAttribute('transfer_bandwith_limit');
  }
  public set transferBandwithLimit(value: number) {
    this._transferBandwithLimit = value;
  }
  public resetTransferBandwithLimit() {
    this._transferBandwithLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferBandwithLimitInput() {
    return this._transferBandwithLimit;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // ceph - computed: false, optional: true, required: false
  private _ceph = new DatastoreCephList(this, "ceph", true);
  public get ceph() {
    return this._ceph;
  }
  public putCeph(value: DatastoreCeph[] | cdktf.IResolvable) {
    this._ceph.internalValue = value;
  }
  public resetCeph() {
    this._ceph.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephInput() {
    return this._ceph.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DatastoreCustomList(this, "custom", true);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DatastoreCustom[] | cdktf.IResolvable) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bridgeList),
      check_available_capacity: cdktf.booleanToTerraform(this._checkAvailableCapacity),
      cluster_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._clusterIds),
      compatible_system_datastore: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibleSystemDatastore),
      driver: cdktf.stringToTerraform(this._driver),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      no_decompress: cdktf.booleanToTerraform(this._noDecompress),
      restricted_directories: cdktf.stringToTerraform(this._restrictedDirectories),
      safe_directories: cdktf.stringToTerraform(this._safeDirectories),
      staging_dir: cdktf.stringToTerraform(this._stagingDir),
      storage_usage_limit: cdktf.numberToTerraform(this._storageUsageLimit),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transfer_bandwith_limit: cdktf.numberToTerraform(this._transferBandwithLimit),
      type: cdktf.stringToTerraform(this._type),
      ceph: cdktf.listMapper(datastoreCephToTerraform, true)(this._ceph.internalValue),
      custom: cdktf.listMapper(datastoreCustomToTerraform, true)(this._custom.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridge_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bridgeList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      check_available_capacity: {
        value: cdktf.booleanToHclTerraform(this._checkAvailableCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._clusterIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      compatible_system_datastore: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compatibleSystemDatastore),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      driver: {
        value: cdktf.stringToHclTerraform(this._driver),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_decompress: {
        value: cdktf.booleanToHclTerraform(this._noDecompress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restricted_directories: {
        value: cdktf.stringToHclTerraform(this._restrictedDirectories),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      safe_directories: {
        value: cdktf.stringToHclTerraform(this._safeDirectories),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staging_dir: {
        value: cdktf.stringToHclTerraform(this._stagingDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_usage_limit: {
        value: cdktf.numberToHclTerraform(this._storageUsageLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      transfer_bandwith_limit: {
        value: cdktf.numberToHclTerraform(this._transferBandwithLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ceph: {
        value: cdktf.listMapperHcl(datastoreCephToHclTerraform, true)(this._ceph.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastoreCephList",
      },
      custom: {
        value: cdktf.listMapperHcl(datastoreCustomToHclTerraform, true)(this._custom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastoreCustomList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
