// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIonoscloudNfsShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Network File Storage Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#cluster_id DataIonoscloudNfsShare#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#gid DataIonoscloudNfsShare#gid}
  */
  readonly gid?: number;
  /**
  * The ID of the Network File Storage Share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#id DataIonoscloudNfsShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/fra/2, 'de/txl, 'fr-par, 'gb-lhr, 'es/vit, 'us/las, 'us/ewr, 'us/mci'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#location DataIonoscloudNfsShare#location}
  */
  readonly location?: string;
  /**
  * The name of the Network File Storage Share
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#name DataIonoscloudNfsShare#name}
  */
  readonly name?: string;
  /**
  * Whether partial matching is allowed or not when using the name filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#partial_match DataIonoscloudNfsShare#partial_match}
  */
  readonly partialMatch?: boolean | cdktf.IResolvable;
  /**
  * The quota in MiB for the export. The quota can restrict the amount of data that can be stored within the export. The quota can be disabled using `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#quota DataIonoscloudNfsShare#quota}
  */
  readonly quota?: number;
  /**
  * The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#uid DataIonoscloudNfsShare#uid}
  */
  readonly uid?: number;
  /**
  * client_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#client_groups DataIonoscloudNfsShare#client_groups}
  */
  readonly clientGroups?: DataIonoscloudNfsShareClientGroups[] | cdktf.IResolvable;
}
export interface DataIonoscloudNfsShareClientGroupsNfs {
  /**
  * The squash mode for the export. The squash mode can be: none - No squash mode. no mapping, root-anonymous - Map root user to anonymous uid, all-anonymous - Map all users to anonymous uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#squash DataIonoscloudNfsShare#squash}
  */
  readonly squash?: string;
}

export function dataIonoscloudNfsShareClientGroupsNfsToTerraform(struct?: DataIonoscloudNfsShareClientGroupsNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    squash: cdktf.stringToTerraform(struct!.squash),
  }
}


export function dataIonoscloudNfsShareClientGroupsNfsToHclTerraform(struct?: DataIonoscloudNfsShareClientGroupsNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    squash: {
      value: cdktf.stringToHclTerraform(struct!.squash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIonoscloudNfsShareClientGroupsNfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIonoscloudNfsShareClientGroupsNfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._squash !== undefined) {
      hasAnyValues = true;
      internalValueResult.squash = this._squash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudNfsShareClientGroupsNfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._squash = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._squash = value.squash;
    }
  }

  // squash - computed: true, optional: true, required: false
  private _squash?: string; 
  public get squash() {
    return this.getStringAttribute('squash');
  }
  public set squash(value: string) {
    this._squash = value;
  }
  public resetSquash() {
    this._squash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashInput() {
    return this._squash;
  }
}

export class DataIonoscloudNfsShareClientGroupsNfsList extends cdktf.ComplexList {
  public internalValue? : DataIonoscloudNfsShareClientGroupsNfs[] | cdktf.IResolvable

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
  public get(index: number): DataIonoscloudNfsShareClientGroupsNfsOutputReference {
    return new DataIonoscloudNfsShareClientGroupsNfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIonoscloudNfsShareClientGroups {
  /**
  * Optional description for the clients groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#description DataIonoscloudNfsShare#description}
  */
  readonly description?: string;
  /**
  * A singular host allowed to connect to the share. The host can be specified as IP address and can be either IPv4 or IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#hosts DataIonoscloudNfsShare#hosts}
  */
  readonly hosts?: string[];
  /**
  * The allowed host or network to which the export is being shared. The IP address can be either IPv4 or IPv6 and has to be given with CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#ip_networks DataIonoscloudNfsShare#ip_networks}
  */
  readonly ipNetworks?: string[];
  /**
  * nfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#nfs DataIonoscloudNfsShare#nfs}
  */
  readonly nfs?: DataIonoscloudNfsShareClientGroupsNfs[] | cdktf.IResolvable;
}

export function dataIonoscloudNfsShareClientGroupsToTerraform(struct?: DataIonoscloudNfsShareClientGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    ip_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipNetworks),
    nfs: cdktf.listMapper(dataIonoscloudNfsShareClientGroupsNfsToTerraform, true)(struct!.nfs),
  }
}


export function dataIonoscloudNfsShareClientGroupsToHclTerraform(struct?: DataIonoscloudNfsShareClientGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipNetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nfs: {
      value: cdktf.listMapperHcl(dataIonoscloudNfsShareClientGroupsNfsToHclTerraform, true)(struct!.nfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataIonoscloudNfsShareClientGroupsNfsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIonoscloudNfsShareClientGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIonoscloudNfsShareClientGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._ipNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNetworks = this._ipNetworks;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudNfsShareClientGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._hosts = undefined;
      this._ipNetworks = undefined;
      this._nfs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._hosts = value.hosts;
      this._ipNetworks = value.ipNetworks;
      this._nfs.internalValue = value.nfs;
    }
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

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // ip_networks - computed: true, optional: true, required: false
  private _ipNetworks?: string[]; 
  public get ipNetworks() {
    return this.getListAttribute('ip_networks');
  }
  public set ipNetworks(value: string[]) {
    this._ipNetworks = value;
  }
  public resetIpNetworks() {
    this._ipNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetworksInput() {
    return this._ipNetworks;
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataIonoscloudNfsShareClientGroupsNfsList(this, "nfs", false);
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataIonoscloudNfsShareClientGroupsNfs[] | cdktf.IResolvable) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }
}

export class DataIonoscloudNfsShareClientGroupsList extends cdktf.ComplexList {
  public internalValue? : DataIonoscloudNfsShareClientGroups[] | cdktf.IResolvable

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
  public get(index: number): DataIonoscloudNfsShareClientGroupsOutputReference {
    return new DataIonoscloudNfsShareClientGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share ionoscloud_nfs_share}
*/
export class DataIonoscloudNfsShare extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_nfs_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIonoscloudNfsShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIonoscloudNfsShare to import
  * @param importFromId The id of the existing DataIonoscloudNfsShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIonoscloudNfsShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_nfs_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/nfs_share ionoscloud_nfs_share} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIonoscloudNfsShareConfig
  */
  public constructor(scope: Construct, id: string, config: DataIonoscloudNfsShareConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_nfs_share',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._gid = config.gid;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._partialMatch = config.partialMatch;
    this._quota = config.quota;
    this._uid = config.uid;
    this._clientGroups.internalValue = config.clientGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // gid - computed: true, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nfs_path - computed: true, optional: false, required: false
  public get nfsPath() {
    return this.getStringAttribute('nfs_path');
  }

  // partial_match - computed: false, optional: true, required: false
  private _partialMatch?: boolean | cdktf.IResolvable; 
  public get partialMatch() {
    return this.getBooleanAttribute('partial_match');
  }
  public set partialMatch(value: boolean | cdktf.IResolvable) {
    this._partialMatch = value;
  }
  public resetPartialMatch() {
    this._partialMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMatchInput() {
    return this._partialMatch;
  }

  // quota - computed: true, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // client_groups - computed: false, optional: true, required: false
  private _clientGroups = new DataIonoscloudNfsShareClientGroupsList(this, "client_groups", false);
  public get clientGroups() {
    return this._clientGroups;
  }
  public putClientGroups(value: DataIonoscloudNfsShareClientGroups[] | cdktf.IResolvable) {
    this._clientGroups.internalValue = value;
  }
  public resetClientGroups() {
    this._clientGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientGroupsInput() {
    return this._clientGroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      gid: cdktf.numberToTerraform(this._gid),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      partial_match: cdktf.booleanToTerraform(this._partialMatch),
      quota: cdktf.numberToTerraform(this._quota),
      uid: cdktf.numberToTerraform(this._uid),
      client_groups: cdktf.listMapper(dataIonoscloudNfsShareClientGroupsToTerraform, true)(this._clientGroups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gid: {
        value: cdktf.numberToHclTerraform(this._gid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      partial_match: {
        value: cdktf.booleanToHclTerraform(this._partialMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      quota: {
        value: cdktf.numberToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uid: {
        value: cdktf.numberToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_groups: {
        value: cdktf.listMapperHcl(dataIonoscloudNfsShareClientGroupsToHclTerraform, true)(this._clientGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIonoscloudNfsShareClientGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
