// https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster image to be used with the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#cluster_image_id Cluster#cluster_image_id}
  */
  readonly clusterImageId?: string;
  /**
  * The ID of a workload domain that the cluster belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#domain_id Cluster#domain_id}
  */
  readonly domainId?: string;
  /**
  * The name of a workload domain that the cluster belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#domain_name Cluster#domain_name}
  */
  readonly domainName?: string;
  /**
  * EVC mode for new cluster, if needed. One among: INTEL_MEROM, INTEL_PENRYN, INTEL_NEALEM, INTEL_WESTMERE, INTEL_SANDYBRIDGE, INTEL_IVYBRIDGE, INTEL_HASWELL, INTEL_BROADWELL, INTEL_SKYLAKE, INTEL_CASCADELAKE, AMD_REV_E, AMD_REV_F, AMD_GREYHOUND_NO3DNOW, AMD_GREYHOUND, AMD_BULLDOZER, AMD_PILEDRIVER, AMD_STREAMROLLER, AMD_ZEN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#evc_mode Cluster#evc_mode}
  */
  readonly evcMode?: string;
  /**
  * VLAN ID use for NSX Geneve in the workload domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#geneve_vlan_id Cluster#geneve_vlan_id}
  */
  readonly geneveVlanId?: number;
  /**
  * vSphere High Availability settings for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#high_availability_enabled Cluster#high_availability_enabled}
  */
  readonly highAvailabilityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the cluster to add to the workload domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#host Cluster#host}
  */
  readonly host: ClusterHost[] | cdktf.IResolvable;
  /**
  * ip_address_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#ip_address_pool Cluster#ip_address_pool}
  */
  readonly ipAddressPool?: ClusterIpAddressPool;
  /**
  * nfs_datastores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#nfs_datastores Cluster#nfs_datastores}
  */
  readonly nfsDatastores?: ClusterNfsDatastores[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#timeouts Cluster#timeouts}
  */
  readonly timeouts?: ClusterTimeouts;
  /**
  * vds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vds Cluster#vds}
  */
  readonly vds: ClusterVds[] | cdktf.IResolvable;
  /**
  * vmfs_datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vmfs_datastore Cluster#vmfs_datastore}
  */
  readonly vmfsDatastore?: ClusterVmfsDatastore;
  /**
  * vsan_datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vsan_datastore Cluster#vsan_datastore}
  */
  readonly vsanDatastore?: ClusterVsanDatastore;
  /**
  * vsan_remote_datastore_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vsan_remote_datastore_cluster Cluster#vsan_remote_datastore_cluster}
  */
  readonly vsanRemoteDatastoreCluster?: ClusterVsanRemoteDatastoreCluster;
  /**
  * vsan_stretch_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vsan_stretch_configuration Cluster#vsan_stretch_configuration}
  */
  readonly vsanStretchConfiguration?: ClusterVsanStretchConfiguration;
  /**
  * vvol_datastores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vvol_datastores Cluster#vvol_datastores}
  */
  readonly vvolDatastores?: ClusterVvolDatastores[] | cdktf.IResolvable;
}
export interface ClusterHostVmnic {
  /**
  * ESXI host vmnic ID to be associated with a VDS, once added to cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Uplink to be associated with vmnic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#uplink Cluster#uplink}
  */
  readonly uplink?: string;
  /**
  * Name of the VDS to associate with the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vds_name Cluster#vds_name}
  */
  readonly vdsName?: string;
}

export function clusterHostVmnicToTerraform(struct?: ClusterHostVmnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    uplink: cdktf.stringToTerraform(struct!.uplink),
    vds_name: cdktf.stringToTerraform(struct!.vdsName),
  }
}


export function clusterHostVmnicToHclTerraform(struct?: ClusterHostVmnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink: {
      value: cdktf.stringToHclTerraform(struct!.uplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vds_name: {
      value: cdktf.stringToHclTerraform(struct!.vdsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterHostVmnicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterHostVmnic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._uplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink;
    }
    if (this._vdsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdsName = this._vdsName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterHostVmnic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._uplink = undefined;
      this._vdsName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._uplink = value.uplink;
      this._vdsName = value.vdsName;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink?: string; 
  public get uplink() {
    return this.getStringAttribute('uplink');
  }
  public set uplink(value: string) {
    this._uplink = value;
  }
  public resetUplink() {
    this._uplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }

  // vds_name - computed: false, optional: true, required: false
  private _vdsName?: string; 
  public get vdsName() {
    return this.getStringAttribute('vds_name');
  }
  public set vdsName(value: string) {
    this._vdsName = value;
  }
  public resetVdsName() {
    this._vdsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdsNameInput() {
    return this._vdsName;
  }
}

export class ClusterHostVmnicList extends cdktf.ComplexList {
  public internalValue? : ClusterHostVmnic[] | cdktf.IResolvable

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
  public get(index: number): ClusterHostVmnicOutputReference {
    return new ClusterHostVmnicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterHost {
  /**
  * Availability Zone Name. This is required while performing a stretched cluster expand operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#availability_zone_name Cluster#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Host name of the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#host_name Cluster#host_name}
  */
  readonly hostName?: string;
  /**
  * ID of the ESXi host in the free pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IPv4 address of the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#ip_address Cluster#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * License key for an ESXi host in the free pool. This is required except in cases where the ESXi host has already been licensed outside of the VMware Cloud Foundation system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#license_key Cluster#license_key}
  */
  readonly licenseKey?: string;
  /**
  * Password to authenticate to the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#password Cluster#password}
  */
  readonly password?: string;
  /**
  * Serial number of the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#serial_number Cluster#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * SSH thumbprint of the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#ssh_thumbprint Cluster#ssh_thumbprint}
  */
  readonly sshThumbprint?: string;
  /**
  * Username to authenticate to the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#username Cluster#username}
  */
  readonly username?: string;
  /**
  * vmnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vmnic Cluster#vmnic}
  */
  readonly vmnic?: ClusterHostVmnic[] | cdktf.IResolvable;
}

export function clusterHostToTerraform(struct?: ClusterHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_name: cdktf.stringToTerraform(struct!.availabilityZoneName),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    id: cdktf.stringToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    license_key: cdktf.stringToTerraform(struct!.licenseKey),
    password: cdktf.stringToTerraform(struct!.password),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    ssh_thumbprint: cdktf.stringToTerraform(struct!.sshThumbprint),
    username: cdktf.stringToTerraform(struct!.username),
    vmnic: cdktf.listMapper(clusterHostVmnicToTerraform, true)(struct!.vmnic),
  }
}


export function clusterHostToHclTerraform(struct?: ClusterHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_key: {
      value: cdktf.stringToHclTerraform(struct!.licenseKey),
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
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.sshThumbprint),
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
    vmnic: {
      value: cdktf.listMapperHcl(clusterHostVmnicToHclTerraform, true)(struct!.vmnic),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterHostVmnicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneName = this._availabilityZoneName;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._licenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseKey = this._licenseKey;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._sshThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshThumbprint = this._sshThumbprint;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vmnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmnic = this._vmnic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneName = undefined;
      this._hostName = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
      this._licenseKey = undefined;
      this._password = undefined;
      this._serialNumber = undefined;
      this._sshThumbprint = undefined;
      this._username = undefined;
      this._vmnic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneName = value.availabilityZoneName;
      this._hostName = value.hostName;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
      this._licenseKey = value.licenseKey;
      this._password = value.password;
      this._serialNumber = value.serialNumber;
      this._sshThumbprint = value.sshThumbprint;
      this._username = value.username;
      this._vmnic.internalValue = value.vmnic;
    }
  }

  // availability_zone_name - computed: false, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // license_key - computed: false, optional: true, required: false
  private _licenseKey?: string; 
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }
  public set licenseKey(value: string) {
    this._licenseKey = value;
  }
  public resetLicenseKey() {
    this._licenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyInput() {
    return this._licenseKey;
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

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // ssh_thumbprint - computed: false, optional: true, required: false
  private _sshThumbprint?: string; 
  public get sshThumbprint() {
    return this.getStringAttribute('ssh_thumbprint');
  }
  public set sshThumbprint(value: string) {
    this._sshThumbprint = value;
  }
  public resetSshThumbprint() {
    this._sshThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshThumbprintInput() {
    return this._sshThumbprint;
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

  // vmnic - computed: false, optional: true, required: false
  private _vmnic = new ClusterHostVmnicList(this, "vmnic", false);
  public get vmnic() {
    return this._vmnic;
  }
  public putVmnic(value: ClusterHostVmnic[] | cdktf.IResolvable) {
    this._vmnic.internalValue = value;
  }
  public resetVmnic() {
    this._vmnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmnicInput() {
    return this._vmnic.internalValue;
  }
}

export class ClusterHostList extends cdktf.ComplexList {
  public internalValue? : ClusterHost[] | cdktf.IResolvable

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
  public get(index: number): ClusterHostOutputReference {
    return new ClusterHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterIpAddressPoolSubnetIpAddressPoolRange {
  /**
  * The last IP Address of the IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#end Cluster#end}
  */
  readonly end: string;
  /**
  * The first IP Address of the IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#start Cluster#start}
  */
  readonly start: string;
}

export function clusterIpAddressPoolSubnetIpAddressPoolRangeToTerraform(struct?: ClusterIpAddressPoolSubnetIpAddressPoolRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function clusterIpAddressPoolSubnetIpAddressPoolRangeToHclTerraform(struct?: ClusterIpAddressPoolSubnetIpAddressPoolRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterIpAddressPoolSubnetIpAddressPoolRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterIpAddressPoolSubnetIpAddressPoolRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterIpAddressPoolSubnetIpAddressPoolRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class ClusterIpAddressPoolSubnetIpAddressPoolRangeList extends cdktf.ComplexList {
  public internalValue? : ClusterIpAddressPoolSubnetIpAddressPoolRange[] | cdktf.IResolvable

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
  public get(index: number): ClusterIpAddressPoolSubnetIpAddressPoolRangeOutputReference {
    return new ClusterIpAddressPoolSubnetIpAddressPoolRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterIpAddressPoolSubnet {
  /**
  * The subnet representation, contains the network address and the prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#cidr Cluster#cidr}
  */
  readonly cidr: string;
  /**
  * The default gateway address of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#gateway Cluster#gateway}
  */
  readonly gateway: string;
  /**
  * ip_address_pool_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#ip_address_pool_range Cluster#ip_address_pool_range}
  */
  readonly ipAddressPoolRange?: ClusterIpAddressPoolSubnetIpAddressPoolRange[] | cdktf.IResolvable;
}

export function clusterIpAddressPoolSubnetToTerraform(struct?: ClusterIpAddressPoolSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_address_pool_range: cdktf.listMapper(clusterIpAddressPoolSubnetIpAddressPoolRangeToTerraform, true)(struct!.ipAddressPoolRange),
  }
}


export function clusterIpAddressPoolSubnetToHclTerraform(struct?: ClusterIpAddressPoolSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_pool_range: {
      value: cdktf.listMapperHcl(clusterIpAddressPoolSubnetIpAddressPoolRangeToHclTerraform, true)(struct!.ipAddressPoolRange),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterIpAddressPoolSubnetIpAddressPoolRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterIpAddressPoolSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterIpAddressPoolSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ipAddressPoolRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressPoolRange = this._ipAddressPoolRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterIpAddressPoolSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._gateway = undefined;
      this._ipAddressPoolRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._gateway = value.gateway;
      this._ipAddressPoolRange.internalValue = value.ipAddressPoolRange;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip_address_pool_range - computed: false, optional: true, required: false
  private _ipAddressPoolRange = new ClusterIpAddressPoolSubnetIpAddressPoolRangeList(this, "ip_address_pool_range", false);
  public get ipAddressPoolRange() {
    return this._ipAddressPoolRange;
  }
  public putIpAddressPoolRange(value: ClusterIpAddressPoolSubnetIpAddressPoolRange[] | cdktf.IResolvable) {
    this._ipAddressPoolRange.internalValue = value;
  }
  public resetIpAddressPoolRange() {
    this._ipAddressPoolRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPoolRangeInput() {
    return this._ipAddressPoolRange.internalValue;
  }
}

export class ClusterIpAddressPoolSubnetList extends cdktf.ComplexList {
  public internalValue? : ClusterIpAddressPoolSubnet[] | cdktf.IResolvable

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
  public get(index: number): ClusterIpAddressPoolSubnetOutputReference {
    return new ClusterIpAddressPoolSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterIpAddressPool {
  /**
  * Description of the IP address pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#description Cluster#description}
  */
  readonly description?: string;
  /**
  * Ignore unavailable NSX cluster(s) during IP pool spec validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#ignore_unavailable_nsx_cluster Cluster#ignore_unavailable_nsx_cluster}
  */
  readonly ignoreUnavailableNsxCluster?: boolean | cdktf.IResolvable;
  /**
  * Providing only name of existing IP Address Pool reuses it, while providing a new name with subnets creates a new one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#subnet Cluster#subnet}
  */
  readonly subnet?: ClusterIpAddressPoolSubnet[] | cdktf.IResolvable;
}

export function clusterIpAddressPoolToTerraform(struct?: ClusterIpAddressPoolOutputReference | ClusterIpAddressPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ignore_unavailable_nsx_cluster: cdktf.booleanToTerraform(struct!.ignoreUnavailableNsxCluster),
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.listMapper(clusterIpAddressPoolSubnetToTerraform, true)(struct!.subnet),
  }
}


export function clusterIpAddressPoolToHclTerraform(struct?: ClusterIpAddressPoolOutputReference | ClusterIpAddressPool): any {
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
    ignore_unavailable_nsx_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUnavailableNsxCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.listMapperHcl(clusterIpAddressPoolSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterIpAddressPoolSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterIpAddressPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterIpAddressPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ignoreUnavailableNsxCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnavailableNsxCluster = this._ignoreUnavailableNsxCluster;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterIpAddressPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._ignoreUnavailableNsxCluster = undefined;
      this._name = undefined;
      this._subnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._ignoreUnavailableNsxCluster = value.ignoreUnavailableNsxCluster;
      this._name = value.name;
      this._subnet.internalValue = value.subnet;
    }
  }

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

  // ignore_unavailable_nsx_cluster - computed: false, optional: true, required: false
  private _ignoreUnavailableNsxCluster?: boolean | cdktf.IResolvable; 
  public get ignoreUnavailableNsxCluster() {
    return this.getBooleanAttribute('ignore_unavailable_nsx_cluster');
  }
  public set ignoreUnavailableNsxCluster(value: boolean | cdktf.IResolvable) {
    this._ignoreUnavailableNsxCluster = value;
  }
  public resetIgnoreUnavailableNsxCluster() {
    this._ignoreUnavailableNsxCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnavailableNsxClusterInput() {
    return this._ignoreUnavailableNsxCluster;
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

  // subnet - computed: false, optional: true, required: false
  private _subnet = new ClusterIpAddressPoolSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: ClusterIpAddressPoolSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}
export interface ClusterNfsDatastores {
  /**
  * NFS datastore name used for cluster creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#datastore_name Cluster#datastore_name}
  */
  readonly datastoreName: string;
  /**
  * Shared directory path used for NFS based cluster creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#path Cluster#path}
  */
  readonly path: string;
  /**
  * Readonly is used to identify whether to mount the directory as readOnly or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#read_only Cluster#read_only}
  */
  readonly readOnly: boolean | cdktf.IResolvable;
  /**
  * Fully qualified domain name or IP address of the NFS endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#server_name Cluster#server_name}
  */
  readonly serverName: string;
  /**
  * User tag used to annotate NFS share
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#user_tag Cluster#user_tag}
  */
  readonly userTag?: string;
}

export function clusterNfsDatastoresToTerraform(struct?: ClusterNfsDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_name: cdktf.stringToTerraform(struct!.datastoreName),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
  }
}


export function clusterNfsDatastoresToHclTerraform(struct?: ClusterNfsDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_name: {
      value: cdktf.stringToHclTerraform(struct!.datastoreName),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNfsDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterNfsDatastores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreName = this._datastoreName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNfsDatastores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datastoreName = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._serverName = undefined;
      this._userTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datastoreName = value.datastoreName;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._serverName = value.serverName;
      this._userTag = value.userTag;
    }
  }

  // datastore_name - computed: false, optional: false, required: true
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName;
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

  // read_only - computed: false, optional: false, required: true
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }
}

export class ClusterNfsDatastoresList extends cdktf.ComplexList {
  public internalValue? : ClusterNfsDatastores[] | cdktf.IResolvable

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
  public get(index: number): ClusterNfsDatastoresOutputReference {
    return new ClusterNfsDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#create Cluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#delete Cluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#read Cluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#update Cluster#update}
  */
  readonly update?: string;
}

export function clusterTimeoutsToTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function clusterTimeoutsToHclTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ClusterVdsNiocBandwidthAllocations {
  /**
  * The maximum allowed usage for a traffic class belonging to this resource pool per host physical NIC. The utilization of a traffic class will not exceed the specified limit even if there are available network resources. If this value is unset or set to -1 in an update operation, then there is no limit on the network resource usage (only bounded by available resource and shares). Units are in Mbits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#limit Cluster#limit}
  */
  readonly limit?: number;
  /**
  * Amount of bandwidth resource that is guaranteed available to the host infrastructure traffic class. If the utilization is less than the reservation, the extra bandwidth is used for other host infrastructure traffic class types. Unit is Mbits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#reservation Cluster#reservation}
  */
  readonly reservation?: number;
  /**
  * The number of shares allocated. Used to determine resource allocation in case of resource contention. This value is only set if level is set to custom. If level is not set to custom, this value is ignored. Therefore, only shares with custom values can be compared. There is no unit for this value. It is a relative measure based on the settings for other resource pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#shares Cluster#shares}
  */
  readonly shares?: number;
  /**
  * The allocation level. The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. If the shares value does not map to a predefined size, then the level is set as custom. One among: low, normal, high, custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#shares_level Cluster#shares_level}
  */
  readonly sharesLevel?: string;
  /**
  * Host infrastructure traffic type. Example: management, faultTolerance, vmotion, virtualMachine, iSCSI, nfs, hbr, vsan, vdp etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#type Cluster#type}
  */
  readonly type: string;
}

export function clusterVdsNiocBandwidthAllocationsToTerraform(struct?: ClusterVdsNiocBandwidthAllocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    reservation: cdktf.numberToTerraform(struct!.reservation),
    shares: cdktf.numberToTerraform(struct!.shares),
    shares_level: cdktf.stringToTerraform(struct!.sharesLevel),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clusterVdsNiocBandwidthAllocationsToHclTerraform(struct?: ClusterVdsNiocBandwidthAllocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reservation: {
      value: cdktf.numberToHclTerraform(struct!.reservation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shares: {
      value: cdktf.numberToHclTerraform(struct!.shares),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shares_level: {
      value: cdktf.stringToHclTerraform(struct!.sharesLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVdsNiocBandwidthAllocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterVdsNiocBandwidthAllocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._reservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservation = this._reservation;
    }
    if (this._shares !== undefined) {
      hasAnyValues = true;
      internalValueResult.shares = this._shares;
    }
    if (this._sharesLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharesLevel = this._sharesLevel;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVdsNiocBandwidthAllocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._reservation = undefined;
      this._shares = undefined;
      this._sharesLevel = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._reservation = value.reservation;
      this._shares = value.shares;
      this._sharesLevel = value.sharesLevel;
      this._type = value.type;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // reservation - computed: false, optional: true, required: false
  private _reservation?: number; 
  public get reservation() {
    return this.getNumberAttribute('reservation');
  }
  public set reservation(value: number) {
    this._reservation = value;
  }
  public resetReservation() {
    this._reservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationInput() {
    return this._reservation;
  }

  // shares - computed: false, optional: true, required: false
  private _shares?: number; 
  public get shares() {
    return this.getNumberAttribute('shares');
  }
  public set shares(value: number) {
    this._shares = value;
  }
  public resetShares() {
    this._shares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharesInput() {
    return this._shares;
  }

  // shares_level - computed: false, optional: true, required: false
  private _sharesLevel?: string; 
  public get sharesLevel() {
    return this.getStringAttribute('shares_level');
  }
  public set sharesLevel(value: string) {
    this._sharesLevel = value;
  }
  public resetSharesLevel() {
    this._sharesLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharesLevelInput() {
    return this._sharesLevel;
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
}

export class ClusterVdsNiocBandwidthAllocationsList extends cdktf.ComplexList {
  public internalValue? : ClusterVdsNiocBandwidthAllocations[] | cdktf.IResolvable

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
  public get(index: number): ClusterVdsNiocBandwidthAllocationsOutputReference {
    return new ClusterVdsNiocBandwidthAllocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterVdsPortgroup {
  /**
  * List of active uplinks associated with portgroup. This is only supported for VxRail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#active_uplinks Cluster#active_uplinks}
  */
  readonly activeUplinks?: string[];
  /**
  * Port group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Port group transport type, One among: VSAN, VMOTION, MANAGEMENT, PUBLIC, NFS, VREALIZE, ISCSI, EDGE_INFRA_OVERLAY_UPLINK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#transport_type Cluster#transport_type}
  */
  readonly transportType: string;
}

export function clusterVdsPortgroupToTerraform(struct?: ClusterVdsPortgroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.activeUplinks),
    name: cdktf.stringToTerraform(struct!.name),
    transport_type: cdktf.stringToTerraform(struct!.transportType),
  }
}


export function clusterVdsPortgroupToHclTerraform(struct?: ClusterVdsPortgroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_uplinks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.activeUplinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_type: {
      value: cdktf.stringToHclTerraform(struct!.transportType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVdsPortgroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterVdsPortgroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeUplinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeUplinks = this._activeUplinks;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._transportType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportType = this._transportType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVdsPortgroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeUplinks = undefined;
      this._name = undefined;
      this._transportType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeUplinks = value.activeUplinks;
      this._name = value.name;
      this._transportType = value.transportType;
    }
  }

  // active_uplinks - computed: false, optional: true, required: false
  private _activeUplinks?: string[]; 
  public get activeUplinks() {
    return this.getListAttribute('active_uplinks');
  }
  public set activeUplinks(value: string[]) {
    this._activeUplinks = value;
  }
  public resetActiveUplinks() {
    this._activeUplinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeUplinksInput() {
    return this._activeUplinks;
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

  // transport_type - computed: false, optional: false, required: true
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }
}

export class ClusterVdsPortgroupList extends cdktf.ComplexList {
  public internalValue? : ClusterVdsPortgroup[] | cdktf.IResolvable

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
  public get(index: number): ClusterVdsPortgroupOutputReference {
    return new ClusterVdsPortgroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterVds {
  /**
  * Identifies if the vSphere distributed switch is used by NSX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#is_used_by_nsx Cluster#is_used_by_nsx}
  */
  readonly isUsedByNsx?: boolean | cdktf.IResolvable;
  /**
  * vSphere Distributed Switch name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * nioc_bandwidth_allocations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#nioc_bandwidth_allocations Cluster#nioc_bandwidth_allocations}
  */
  readonly niocBandwidthAllocations?: ClusterVdsNiocBandwidthAllocations[] | cdktf.IResolvable;
  /**
  * portgroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#portgroup Cluster#portgroup}
  */
  readonly portgroup?: ClusterVdsPortgroup[] | cdktf.IResolvable;
}

export function clusterVdsToTerraform(struct?: ClusterVds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_used_by_nsx: cdktf.booleanToTerraform(struct!.isUsedByNsx),
    name: cdktf.stringToTerraform(struct!.name),
    nioc_bandwidth_allocations: cdktf.listMapper(clusterVdsNiocBandwidthAllocationsToTerraform, true)(struct!.niocBandwidthAllocations),
    portgroup: cdktf.listMapper(clusterVdsPortgroupToTerraform, true)(struct!.portgroup),
  }
}


export function clusterVdsToHclTerraform(struct?: ClusterVds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_used_by_nsx: {
      value: cdktf.booleanToHclTerraform(struct!.isUsedByNsx),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nioc_bandwidth_allocations: {
      value: cdktf.listMapperHcl(clusterVdsNiocBandwidthAllocationsToHclTerraform, true)(struct!.niocBandwidthAllocations),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterVdsNiocBandwidthAllocationsList",
    },
    portgroup: {
      value: cdktf.listMapperHcl(clusterVdsPortgroupToHclTerraform, true)(struct!.portgroup),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterVdsPortgroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterVds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isUsedByNsx !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUsedByNsx = this._isUsedByNsx;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._niocBandwidthAllocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.niocBandwidthAllocations = this._niocBandwidthAllocations?.internalValue;
    }
    if (this._portgroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portgroup = this._portgroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isUsedByNsx = undefined;
      this._name = undefined;
      this._niocBandwidthAllocations.internalValue = undefined;
      this._portgroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isUsedByNsx = value.isUsedByNsx;
      this._name = value.name;
      this._niocBandwidthAllocations.internalValue = value.niocBandwidthAllocations;
      this._portgroup.internalValue = value.portgroup;
    }
  }

  // is_used_by_nsx - computed: false, optional: true, required: false
  private _isUsedByNsx?: boolean | cdktf.IResolvable; 
  public get isUsedByNsx() {
    return this.getBooleanAttribute('is_used_by_nsx');
  }
  public set isUsedByNsx(value: boolean | cdktf.IResolvable) {
    this._isUsedByNsx = value;
  }
  public resetIsUsedByNsx() {
    this._isUsedByNsx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUsedByNsxInput() {
    return this._isUsedByNsx;
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

  // nioc_bandwidth_allocations - computed: false, optional: true, required: false
  private _niocBandwidthAllocations = new ClusterVdsNiocBandwidthAllocationsList(this, "nioc_bandwidth_allocations", false);
  public get niocBandwidthAllocations() {
    return this._niocBandwidthAllocations;
  }
  public putNiocBandwidthAllocations(value: ClusterVdsNiocBandwidthAllocations[] | cdktf.IResolvable) {
    this._niocBandwidthAllocations.internalValue = value;
  }
  public resetNiocBandwidthAllocations() {
    this._niocBandwidthAllocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get niocBandwidthAllocationsInput() {
    return this._niocBandwidthAllocations.internalValue;
  }

  // portgroup - computed: false, optional: true, required: false
  private _portgroup = new ClusterVdsPortgroupList(this, "portgroup", false);
  public get portgroup() {
    return this._portgroup;
  }
  public putPortgroup(value: ClusterVdsPortgroup[] | cdktf.IResolvable) {
    this._portgroup.internalValue = value;
  }
  public resetPortgroup() {
    this._portgroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portgroupInput() {
    return this._portgroup.internalValue;
  }
}

export class ClusterVdsList extends cdktf.ComplexList {
  public internalValue? : ClusterVds[] | cdktf.IResolvable

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
  public get(index: number): ClusterVdsOutputReference {
    return new ClusterVdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterVmfsDatastore {
  /**
  * VMFS datastore names used for VMFS on FC for cluster creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#datastore_names Cluster#datastore_names}
  */
  readonly datastoreNames: string[];
}

export function clusterVmfsDatastoreToTerraform(struct?: ClusterVmfsDatastoreOutputReference | ClusterVmfsDatastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datastoreNames),
  }
}


export function clusterVmfsDatastoreToHclTerraform(struct?: ClusterVmfsDatastoreOutputReference | ClusterVmfsDatastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.datastoreNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVmfsDatastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterVmfsDatastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreNames = this._datastoreNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVmfsDatastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreNames = value.datastoreNames;
    }
  }

  // datastore_names - computed: false, optional: false, required: true
  private _datastoreNames?: string[]; 
  public get datastoreNames() {
    return this.getListAttribute('datastore_names');
  }
  public set datastoreNames(value: string[]) {
    this._datastoreNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNamesInput() {
    return this._datastoreNames;
  }
}
export interface ClusterVsanDatastore {
  /**
  * vSAN datastore name used for cluster creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#datastore_name Cluster#datastore_name}
  */
  readonly datastoreName: string;
  /**
  * Enable vSAN deduplication and compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#dedup_and_compression_enabled Cluster#dedup_and_compression_enabled}
  */
  readonly dedupAndCompressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable vSAN ESA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#esa_enabled Cluster#esa_enabled}
  */
  readonly esaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Number of ESXi host failures to tolerate in the vSAN cluster. One of 1 or 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#failures_to_tolerate Cluster#failures_to_tolerate}
  */
  readonly failuresToTolerate?: number;
  /**
  * vSAN license key to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#license_key Cluster#license_key}
  */
  readonly licenseKey?: string;
}

export function clusterVsanDatastoreToTerraform(struct?: ClusterVsanDatastoreOutputReference | ClusterVsanDatastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_name: cdktf.stringToTerraform(struct!.datastoreName),
    dedup_and_compression_enabled: cdktf.booleanToTerraform(struct!.dedupAndCompressionEnabled),
    esa_enabled: cdktf.booleanToTerraform(struct!.esaEnabled),
    failures_to_tolerate: cdktf.numberToTerraform(struct!.failuresToTolerate),
    license_key: cdktf.stringToTerraform(struct!.licenseKey),
  }
}


export function clusterVsanDatastoreToHclTerraform(struct?: ClusterVsanDatastoreOutputReference | ClusterVsanDatastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_name: {
      value: cdktf.stringToHclTerraform(struct!.datastoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dedup_and_compression_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dedupAndCompressionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    esa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.esaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failures_to_tolerate: {
      value: cdktf.numberToHclTerraform(struct!.failuresToTolerate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    license_key: {
      value: cdktf.stringToHclTerraform(struct!.licenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVsanDatastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterVsanDatastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreName = this._datastoreName;
    }
    if (this._dedupAndCompressionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupAndCompressionEnabled = this._dedupAndCompressionEnabled;
    }
    if (this._esaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.esaEnabled = this._esaEnabled;
    }
    if (this._failuresToTolerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.failuresToTolerate = this._failuresToTolerate;
    }
    if (this._licenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseKey = this._licenseKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVsanDatastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreName = undefined;
      this._dedupAndCompressionEnabled = undefined;
      this._esaEnabled = undefined;
      this._failuresToTolerate = undefined;
      this._licenseKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreName = value.datastoreName;
      this._dedupAndCompressionEnabled = value.dedupAndCompressionEnabled;
      this._esaEnabled = value.esaEnabled;
      this._failuresToTolerate = value.failuresToTolerate;
      this._licenseKey = value.licenseKey;
    }
  }

  // datastore_name - computed: false, optional: false, required: true
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName;
  }

  // dedup_and_compression_enabled - computed: false, optional: true, required: false
  private _dedupAndCompressionEnabled?: boolean | cdktf.IResolvable; 
  public get dedupAndCompressionEnabled() {
    return this.getBooleanAttribute('dedup_and_compression_enabled');
  }
  public set dedupAndCompressionEnabled(value: boolean | cdktf.IResolvable) {
    this._dedupAndCompressionEnabled = value;
  }
  public resetDedupAndCompressionEnabled() {
    this._dedupAndCompressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupAndCompressionEnabledInput() {
    return this._dedupAndCompressionEnabled;
  }

  // esa_enabled - computed: false, optional: true, required: false
  private _esaEnabled?: boolean | cdktf.IResolvable; 
  public get esaEnabled() {
    return this.getBooleanAttribute('esa_enabled');
  }
  public set esaEnabled(value: boolean | cdktf.IResolvable) {
    this._esaEnabled = value;
  }
  public resetEsaEnabled() {
    this._esaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esaEnabledInput() {
    return this._esaEnabled;
  }

  // failures_to_tolerate - computed: false, optional: true, required: false
  private _failuresToTolerate?: number; 
  public get failuresToTolerate() {
    return this.getNumberAttribute('failures_to_tolerate');
  }
  public set failuresToTolerate(value: number) {
    this._failuresToTolerate = value;
  }
  public resetFailuresToTolerate() {
    this._failuresToTolerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failuresToTolerateInput() {
    return this._failuresToTolerate;
  }

  // license_key - computed: false, optional: true, required: false
  private _licenseKey?: string; 
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }
  public set licenseKey(value: string) {
    this._licenseKey = value;
  }
  public resetLicenseKey() {
    this._licenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyInput() {
    return this._licenseKey;
  }
}
export interface ClusterVsanRemoteDatastoreCluster {
  /**
  * vSAN HCI Mesh remote datastore UUIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#datastore_uuids Cluster#datastore_uuids}
  */
  readonly datastoreUuids: string[];
}

export function clusterVsanRemoteDatastoreClusterToTerraform(struct?: ClusterVsanRemoteDatastoreClusterOutputReference | ClusterVsanRemoteDatastoreCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datastoreUuids),
  }
}


export function clusterVsanRemoteDatastoreClusterToHclTerraform(struct?: ClusterVsanRemoteDatastoreClusterOutputReference | ClusterVsanRemoteDatastoreCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.datastoreUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVsanRemoteDatastoreClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterVsanRemoteDatastoreCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreUuids = this._datastoreUuids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVsanRemoteDatastoreCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreUuids = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreUuids = value.datastoreUuids;
    }
  }

  // datastore_uuids - computed: false, optional: false, required: true
  private _datastoreUuids?: string[]; 
  public get datastoreUuids() {
    return this.getListAttribute('datastore_uuids');
  }
  public set datastoreUuids(value: string[]) {
    this._datastoreUuids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreUuidsInput() {
    return this._datastoreUuids;
  }
}
export interface ClusterVsanStretchConfigurationSecondaryFdHostVmnic {
  /**
  * ESXI host vmnic ID to be associated with a VDS, once added to cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Uplink to be associated with vmnic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#uplink Cluster#uplink}
  */
  readonly uplink?: string;
  /**
  * Name of the VDS to associate with the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vds_name Cluster#vds_name}
  */
  readonly vdsName?: string;
}

export function clusterVsanStretchConfigurationSecondaryFdHostVmnicToTerraform(struct?: ClusterVsanStretchConfigurationSecondaryFdHostVmnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    uplink: cdktf.stringToTerraform(struct!.uplink),
    vds_name: cdktf.stringToTerraform(struct!.vdsName),
  }
}


export function clusterVsanStretchConfigurationSecondaryFdHostVmnicToHclTerraform(struct?: ClusterVsanStretchConfigurationSecondaryFdHostVmnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink: {
      value: cdktf.stringToHclTerraform(struct!.uplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vds_name: {
      value: cdktf.stringToHclTerraform(struct!.vdsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVsanStretchConfigurationSecondaryFdHostVmnicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterVsanStretchConfigurationSecondaryFdHostVmnic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._uplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink;
    }
    if (this._vdsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdsName = this._vdsName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVsanStretchConfigurationSecondaryFdHostVmnic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._uplink = undefined;
      this._vdsName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._uplink = value.uplink;
      this._vdsName = value.vdsName;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink?: string; 
  public get uplink() {
    return this.getStringAttribute('uplink');
  }
  public set uplink(value: string) {
    this._uplink = value;
  }
  public resetUplink() {
    this._uplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }

  // vds_name - computed: false, optional: true, required: false
  private _vdsName?: string; 
  public get vdsName() {
    return this.getStringAttribute('vds_name');
  }
  public set vdsName(value: string) {
    this._vdsName = value;
  }
  public resetVdsName() {
    this._vdsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdsNameInput() {
    return this._vdsName;
  }
}

export class ClusterVsanStretchConfigurationSecondaryFdHostVmnicList extends cdktf.ComplexList {
  public internalValue? : ClusterVsanStretchConfigurationSecondaryFdHostVmnic[] | cdktf.IResolvable

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
  public get(index: number): ClusterVsanStretchConfigurationSecondaryFdHostVmnicOutputReference {
    return new ClusterVsanStretchConfigurationSecondaryFdHostVmnicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterVsanStretchConfigurationSecondaryFdHost {
  /**
  * Availability Zone Name. This is required while performing a stretched cluster expand operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#availability_zone_name Cluster#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Host name of the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#host_name Cluster#host_name}
  */
  readonly hostName?: string;
  /**
  * ID of the ESXi host in the free pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IPv4 address of the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#ip_address Cluster#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * License key for an ESXi host in the free pool. This is required except in cases where the ESXi host has already been licensed outside of the VMware Cloud Foundation system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#license_key Cluster#license_key}
  */
  readonly licenseKey?: string;
  /**
  * Password to authenticate to the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#password Cluster#password}
  */
  readonly password?: string;
  /**
  * Serial number of the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#serial_number Cluster#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * SSH thumbprint of the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#ssh_thumbprint Cluster#ssh_thumbprint}
  */
  readonly sshThumbprint?: string;
  /**
  * Username to authenticate to the ESXi host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#username Cluster#username}
  */
  readonly username?: string;
  /**
  * vmnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vmnic Cluster#vmnic}
  */
  readonly vmnic?: ClusterVsanStretchConfigurationSecondaryFdHostVmnic[] | cdktf.IResolvable;
}

export function clusterVsanStretchConfigurationSecondaryFdHostToTerraform(struct?: ClusterVsanStretchConfigurationSecondaryFdHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_name: cdktf.stringToTerraform(struct!.availabilityZoneName),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    id: cdktf.stringToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    license_key: cdktf.stringToTerraform(struct!.licenseKey),
    password: cdktf.stringToTerraform(struct!.password),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    ssh_thumbprint: cdktf.stringToTerraform(struct!.sshThumbprint),
    username: cdktf.stringToTerraform(struct!.username),
    vmnic: cdktf.listMapper(clusterVsanStretchConfigurationSecondaryFdHostVmnicToTerraform, true)(struct!.vmnic),
  }
}


export function clusterVsanStretchConfigurationSecondaryFdHostToHclTerraform(struct?: ClusterVsanStretchConfigurationSecondaryFdHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_key: {
      value: cdktf.stringToHclTerraform(struct!.licenseKey),
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
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.sshThumbprint),
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
    vmnic: {
      value: cdktf.listMapperHcl(clusterVsanStretchConfigurationSecondaryFdHostVmnicToHclTerraform, true)(struct!.vmnic),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterVsanStretchConfigurationSecondaryFdHostVmnicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVsanStretchConfigurationSecondaryFdHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterVsanStretchConfigurationSecondaryFdHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneName = this._availabilityZoneName;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._licenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseKey = this._licenseKey;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._sshThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshThumbprint = this._sshThumbprint;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vmnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmnic = this._vmnic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVsanStretchConfigurationSecondaryFdHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneName = undefined;
      this._hostName = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
      this._licenseKey = undefined;
      this._password = undefined;
      this._serialNumber = undefined;
      this._sshThumbprint = undefined;
      this._username = undefined;
      this._vmnic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneName = value.availabilityZoneName;
      this._hostName = value.hostName;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
      this._licenseKey = value.licenseKey;
      this._password = value.password;
      this._serialNumber = value.serialNumber;
      this._sshThumbprint = value.sshThumbprint;
      this._username = value.username;
      this._vmnic.internalValue = value.vmnic;
    }
  }

  // availability_zone_name - computed: false, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // license_key - computed: false, optional: true, required: false
  private _licenseKey?: string; 
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }
  public set licenseKey(value: string) {
    this._licenseKey = value;
  }
  public resetLicenseKey() {
    this._licenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyInput() {
    return this._licenseKey;
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

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // ssh_thumbprint - computed: false, optional: true, required: false
  private _sshThumbprint?: string; 
  public get sshThumbprint() {
    return this.getStringAttribute('ssh_thumbprint');
  }
  public set sshThumbprint(value: string) {
    this._sshThumbprint = value;
  }
  public resetSshThumbprint() {
    this._sshThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshThumbprintInput() {
    return this._sshThumbprint;
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

  // vmnic - computed: false, optional: true, required: false
  private _vmnic = new ClusterVsanStretchConfigurationSecondaryFdHostVmnicList(this, "vmnic", false);
  public get vmnic() {
    return this._vmnic;
  }
  public putVmnic(value: ClusterVsanStretchConfigurationSecondaryFdHostVmnic[] | cdktf.IResolvable) {
    this._vmnic.internalValue = value;
  }
  public resetVmnic() {
    this._vmnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmnicInput() {
    return this._vmnic.internalValue;
  }
}

export class ClusterVsanStretchConfigurationSecondaryFdHostList extends cdktf.ComplexList {
  public internalValue? : ClusterVsanStretchConfigurationSecondaryFdHost[] | cdktf.IResolvable

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
  public get(index: number): ClusterVsanStretchConfigurationSecondaryFdHostOutputReference {
    return new ClusterVsanStretchConfigurationSecondaryFdHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterVsanStretchConfigurationWitnessHost {
  /**
  * Fully qualified domain name of the witness host. It should be routable on the vSAN network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#fqdn Cluster#fqdn}
  */
  readonly fqdn: string;
  /**
  * CIDR address for the witness host on the vSAN network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vsan_cidr Cluster#vsan_cidr}
  */
  readonly vsanCidr: string;
  /**
  * IP address for the witness host on the vSAN network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vsan_ip Cluster#vsan_ip}
  */
  readonly vsanIp: string;
}

export function clusterVsanStretchConfigurationWitnessHostToTerraform(struct?: ClusterVsanStretchConfigurationWitnessHostOutputReference | ClusterVsanStretchConfigurationWitnessHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    vsan_cidr: cdktf.stringToTerraform(struct!.vsanCidr),
    vsan_ip: cdktf.stringToTerraform(struct!.vsanIp),
  }
}


export function clusterVsanStretchConfigurationWitnessHostToHclTerraform(struct?: ClusterVsanStretchConfigurationWitnessHostOutputReference | ClusterVsanStretchConfigurationWitnessHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsan_cidr: {
      value: cdktf.stringToHclTerraform(struct!.vsanCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsan_ip: {
      value: cdktf.stringToHclTerraform(struct!.vsanIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVsanStretchConfigurationWitnessHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterVsanStretchConfigurationWitnessHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._vsanCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsanCidr = this._vsanCidr;
    }
    if (this._vsanIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsanIp = this._vsanIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVsanStretchConfigurationWitnessHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fqdn = undefined;
      this._vsanCidr = undefined;
      this._vsanIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fqdn = value.fqdn;
      this._vsanCidr = value.vsanCidr;
      this._vsanIp = value.vsanIp;
    }
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // vsan_cidr - computed: false, optional: false, required: true
  private _vsanCidr?: string; 
  public get vsanCidr() {
    return this.getStringAttribute('vsan_cidr');
  }
  public set vsanCidr(value: string) {
    this._vsanCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanCidrInput() {
    return this._vsanCidr;
  }

  // vsan_ip - computed: false, optional: false, required: true
  private _vsanIp?: string; 
  public get vsanIp() {
    return this.getStringAttribute('vsan_ip');
  }
  public set vsanIp(value: string) {
    this._vsanIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanIpInput() {
    return this._vsanIp;
  }
}
export interface ClusterVsanStretchConfiguration {
  /**
  * secondary_fd_host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#secondary_fd_host Cluster#secondary_fd_host}
  */
  readonly secondaryFdHost?: ClusterVsanStretchConfigurationSecondaryFdHost[] | cdktf.IResolvable;
  /**
  * witness_host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#witness_host Cluster#witness_host}
  */
  readonly witnessHost?: ClusterVsanStretchConfigurationWitnessHost;
}

export function clusterVsanStretchConfigurationToTerraform(struct?: ClusterVsanStretchConfigurationOutputReference | ClusterVsanStretchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secondary_fd_host: cdktf.listMapper(clusterVsanStretchConfigurationSecondaryFdHostToTerraform, true)(struct!.secondaryFdHost),
    witness_host: clusterVsanStretchConfigurationWitnessHostToTerraform(struct!.witnessHost),
  }
}


export function clusterVsanStretchConfigurationToHclTerraform(struct?: ClusterVsanStretchConfigurationOutputReference | ClusterVsanStretchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secondary_fd_host: {
      value: cdktf.listMapperHcl(clusterVsanStretchConfigurationSecondaryFdHostToHclTerraform, true)(struct!.secondaryFdHost),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterVsanStretchConfigurationSecondaryFdHostList",
    },
    witness_host: {
      value: clusterVsanStretchConfigurationWitnessHostToHclTerraform(struct!.witnessHost),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterVsanStretchConfigurationWitnessHostList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVsanStretchConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterVsanStretchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secondaryFdHost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryFdHost = this._secondaryFdHost?.internalValue;
    }
    if (this._witnessHost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.witnessHost = this._witnessHost?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVsanStretchConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secondaryFdHost.internalValue = undefined;
      this._witnessHost.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secondaryFdHost.internalValue = value.secondaryFdHost;
      this._witnessHost.internalValue = value.witnessHost;
    }
  }

  // secondary_fd_host - computed: false, optional: true, required: false
  private _secondaryFdHost = new ClusterVsanStretchConfigurationSecondaryFdHostList(this, "secondary_fd_host", false);
  public get secondaryFdHost() {
    return this._secondaryFdHost;
  }
  public putSecondaryFdHost(value: ClusterVsanStretchConfigurationSecondaryFdHost[] | cdktf.IResolvable) {
    this._secondaryFdHost.internalValue = value;
  }
  public resetSecondaryFdHost() {
    this._secondaryFdHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryFdHostInput() {
    return this._secondaryFdHost.internalValue;
  }

  // witness_host - computed: false, optional: true, required: false
  private _witnessHost = new ClusterVsanStretchConfigurationWitnessHostOutputReference(this, "witness_host");
  public get witnessHost() {
    return this._witnessHost;
  }
  public putWitnessHost(value: ClusterVsanStretchConfigurationWitnessHost) {
    this._witnessHost.internalValue = value;
  }
  public resetWitnessHost() {
    this._witnessHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get witnessHostInput() {
    return this._witnessHost.internalValue;
  }
}
export interface ClusterVvolDatastores {
  /**
  * vVol datastore name used for cluster creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#datastore_name Cluster#datastore_name}
  */
  readonly datastoreName: string;
  /**
  * UUID of the VASA storage container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#storage_container_id Cluster#storage_container_id}
  */
  readonly storageContainerId: string;
  /**
  * Type of the VASA storage protocol. One among: ISCSI, NFS, FC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#storage_protocol_type Cluster#storage_protocol_type}
  */
  readonly storageProtocolType: string;
  /**
  * UUID of the VASA storage user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#user_id Cluster#user_id}
  */
  readonly userId: string;
  /**
  * UUID of the VASA storage provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#vasa_provider_id Cluster#vasa_provider_id}
  */
  readonly vasaProviderId: string;
}

export function clusterVvolDatastoresToTerraform(struct?: ClusterVvolDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_name: cdktf.stringToTerraform(struct!.datastoreName),
    storage_container_id: cdktf.stringToTerraform(struct!.storageContainerId),
    storage_protocol_type: cdktf.stringToTerraform(struct!.storageProtocolType),
    user_id: cdktf.stringToTerraform(struct!.userId),
    vasa_provider_id: cdktf.stringToTerraform(struct!.vasaProviderId),
  }
}


export function clusterVvolDatastoresToHclTerraform(struct?: ClusterVvolDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_name: {
      value: cdktf.stringToHclTerraform(struct!.datastoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_container_id: {
      value: cdktf.stringToHclTerraform(struct!.storageContainerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.storageProtocolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vasa_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.vasaProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterVvolDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterVvolDatastores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreName = this._datastoreName;
    }
    if (this._storageContainerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainerId = this._storageContainerId;
    }
    if (this._storageProtocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageProtocolType = this._storageProtocolType;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._vasaProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vasaProviderId = this._vasaProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVvolDatastores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datastoreName = undefined;
      this._storageContainerId = undefined;
      this._storageProtocolType = undefined;
      this._userId = undefined;
      this._vasaProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datastoreName = value.datastoreName;
      this._storageContainerId = value.storageContainerId;
      this._storageProtocolType = value.storageProtocolType;
      this._userId = value.userId;
      this._vasaProviderId = value.vasaProviderId;
    }
  }

  // datastore_name - computed: false, optional: false, required: true
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName;
  }

  // storage_container_id - computed: false, optional: false, required: true
  private _storageContainerId?: string; 
  public get storageContainerId() {
    return this.getStringAttribute('storage_container_id');
  }
  public set storageContainerId(value: string) {
    this._storageContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerIdInput() {
    return this._storageContainerId;
  }

  // storage_protocol_type - computed: false, optional: false, required: true
  private _storageProtocolType?: string; 
  public get storageProtocolType() {
    return this.getStringAttribute('storage_protocol_type');
  }
  public set storageProtocolType(value: string) {
    this._storageProtocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProtocolTypeInput() {
    return this._storageProtocolType;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // vasa_provider_id - computed: false, optional: false, required: true
  private _vasaProviderId?: string; 
  public get vasaProviderId() {
    return this.getStringAttribute('vasa_provider_id');
  }
  public set vasaProviderId(value: string) {
    this._vasaProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vasaProviderIdInput() {
    return this._vasaProviderId;
  }
}

export class ClusterVvolDatastoresList extends cdktf.ComplexList {
  public internalValue? : ClusterVvolDatastores[] | cdktf.IResolvable

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
  public get(index: number): ClusterVvolDatastoresOutputReference {
    return new ClusterVvolDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster vcf_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcf_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcf_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/cluster vcf_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'vcf_cluster',
      terraformGeneratorMetadata: {
        providerName: 'vcf',
        providerVersion: '0.16.2',
        providerVersionConstraint: '0.16.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterImageId = config.clusterImageId;
    this._domainId = config.domainId;
    this._domainName = config.domainName;
    this._evcMode = config.evcMode;
    this._geneveVlanId = config.geneveVlanId;
    this._highAvailabilityEnabled = config.highAvailabilityEnabled;
    this._name = config.name;
    this._host.internalValue = config.host;
    this._ipAddressPool.internalValue = config.ipAddressPool;
    this._nfsDatastores.internalValue = config.nfsDatastores;
    this._timeouts.internalValue = config.timeouts;
    this._vds.internalValue = config.vds;
    this._vmfsDatastore.internalValue = config.vmfsDatastore;
    this._vsanDatastore.internalValue = config.vsanDatastore;
    this._vsanRemoteDatastoreCluster.internalValue = config.vsanRemoteDatastoreCluster;
    this._vsanStretchConfiguration.internalValue = config.vsanStretchConfiguration;
    this._vvolDatastores.internalValue = config.vvolDatastores;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_image_id - computed: false, optional: true, required: false
  private _clusterImageId?: string; 
  public get clusterImageId() {
    return this.getStringAttribute('cluster_image_id');
  }
  public set clusterImageId(value: string) {
    this._clusterImageId = value;
  }
  public resetClusterImageId() {
    this._clusterImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterImageIdInput() {
    return this._clusterImageId;
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // evc_mode - computed: false, optional: true, required: false
  private _evcMode?: string; 
  public get evcMode() {
    return this.getStringAttribute('evc_mode');
  }
  public set evcMode(value: string) {
    this._evcMode = value;
  }
  public resetEvcMode() {
    this._evcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evcModeInput() {
    return this._evcMode;
  }

  // geneve_vlan_id - computed: false, optional: true, required: false
  private _geneveVlanId?: number; 
  public get geneveVlanId() {
    return this.getNumberAttribute('geneve_vlan_id');
  }
  public set geneveVlanId(value: number) {
    this._geneveVlanId = value;
  }
  public resetGeneveVlanId() {
    this._geneveVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geneveVlanIdInput() {
    return this._geneveVlanId;
  }

  // high_availability_enabled - computed: false, optional: true, required: false
  private _highAvailabilityEnabled?: boolean | cdktf.IResolvable; 
  public get highAvailabilityEnabled() {
    return this.getBooleanAttribute('high_availability_enabled');
  }
  public set highAvailabilityEnabled(value: boolean | cdktf.IResolvable) {
    this._highAvailabilityEnabled = value;
  }
  public resetHighAvailabilityEnabled() {
    this._highAvailabilityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityEnabledInput() {
    return this._highAvailabilityEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // is_stretched - computed: true, optional: false, required: false
  public get isStretched() {
    return this.getBooleanAttribute('is_stretched');
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

  // primary_datastore_name - computed: true, optional: false, required: false
  public get primaryDatastoreName() {
    return this.getStringAttribute('primary_datastore_name');
  }

  // primary_datastore_type - computed: true, optional: false, required: false
  public get primaryDatastoreType() {
    return this.getStringAttribute('primary_datastore_type');
  }

  // host - computed: false, optional: false, required: true
  private _host = new ClusterHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: ClusterHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // ip_address_pool - computed: false, optional: true, required: false
  private _ipAddressPool = new ClusterIpAddressPoolOutputReference(this, "ip_address_pool");
  public get ipAddressPool() {
    return this._ipAddressPool;
  }
  public putIpAddressPool(value: ClusterIpAddressPool) {
    this._ipAddressPool.internalValue = value;
  }
  public resetIpAddressPool() {
    this._ipAddressPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPoolInput() {
    return this._ipAddressPool.internalValue;
  }

  // nfs_datastores - computed: false, optional: true, required: false
  private _nfsDatastores = new ClusterNfsDatastoresList(this, "nfs_datastores", false);
  public get nfsDatastores() {
    return this._nfsDatastores;
  }
  public putNfsDatastores(value: ClusterNfsDatastores[] | cdktf.IResolvable) {
    this._nfsDatastores.internalValue = value;
  }
  public resetNfsDatastores() {
    this._nfsDatastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsDatastoresInput() {
    return this._nfsDatastores.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vds - computed: false, optional: false, required: true
  private _vds = new ClusterVdsList(this, "vds", false);
  public get vds() {
    return this._vds;
  }
  public putVds(value: ClusterVds[] | cdktf.IResolvable) {
    this._vds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vdsInput() {
    return this._vds.internalValue;
  }

  // vmfs_datastore - computed: false, optional: true, required: false
  private _vmfsDatastore = new ClusterVmfsDatastoreOutputReference(this, "vmfs_datastore");
  public get vmfsDatastore() {
    return this._vmfsDatastore;
  }
  public putVmfsDatastore(value: ClusterVmfsDatastore) {
    this._vmfsDatastore.internalValue = value;
  }
  public resetVmfsDatastore() {
    this._vmfsDatastore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmfsDatastoreInput() {
    return this._vmfsDatastore.internalValue;
  }

  // vsan_datastore - computed: false, optional: true, required: false
  private _vsanDatastore = new ClusterVsanDatastoreOutputReference(this, "vsan_datastore");
  public get vsanDatastore() {
    return this._vsanDatastore;
  }
  public putVsanDatastore(value: ClusterVsanDatastore) {
    this._vsanDatastore.internalValue = value;
  }
  public resetVsanDatastore() {
    this._vsanDatastore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanDatastoreInput() {
    return this._vsanDatastore.internalValue;
  }

  // vsan_remote_datastore_cluster - computed: false, optional: true, required: false
  private _vsanRemoteDatastoreCluster = new ClusterVsanRemoteDatastoreClusterOutputReference(this, "vsan_remote_datastore_cluster");
  public get vsanRemoteDatastoreCluster() {
    return this._vsanRemoteDatastoreCluster;
  }
  public putVsanRemoteDatastoreCluster(value: ClusterVsanRemoteDatastoreCluster) {
    this._vsanRemoteDatastoreCluster.internalValue = value;
  }
  public resetVsanRemoteDatastoreCluster() {
    this._vsanRemoteDatastoreCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanRemoteDatastoreClusterInput() {
    return this._vsanRemoteDatastoreCluster.internalValue;
  }

  // vsan_stretch_configuration - computed: false, optional: true, required: false
  private _vsanStretchConfiguration = new ClusterVsanStretchConfigurationOutputReference(this, "vsan_stretch_configuration");
  public get vsanStretchConfiguration() {
    return this._vsanStretchConfiguration;
  }
  public putVsanStretchConfiguration(value: ClusterVsanStretchConfiguration) {
    this._vsanStretchConfiguration.internalValue = value;
  }
  public resetVsanStretchConfiguration() {
    this._vsanStretchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanStretchConfigurationInput() {
    return this._vsanStretchConfiguration.internalValue;
  }

  // vvol_datastores - computed: false, optional: true, required: false
  private _vvolDatastores = new ClusterVvolDatastoresList(this, "vvol_datastores", false);
  public get vvolDatastores() {
    return this._vvolDatastores;
  }
  public putVvolDatastores(value: ClusterVvolDatastores[] | cdktf.IResolvable) {
    this._vvolDatastores.internalValue = value;
  }
  public resetVvolDatastores() {
    this._vvolDatastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vvolDatastoresInput() {
    return this._vvolDatastores.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_image_id: cdktf.stringToTerraform(this._clusterImageId),
      domain_id: cdktf.stringToTerraform(this._domainId),
      domain_name: cdktf.stringToTerraform(this._domainName),
      evc_mode: cdktf.stringToTerraform(this._evcMode),
      geneve_vlan_id: cdktf.numberToTerraform(this._geneveVlanId),
      high_availability_enabled: cdktf.booleanToTerraform(this._highAvailabilityEnabled),
      name: cdktf.stringToTerraform(this._name),
      host: cdktf.listMapper(clusterHostToTerraform, true)(this._host.internalValue),
      ip_address_pool: clusterIpAddressPoolToTerraform(this._ipAddressPool.internalValue),
      nfs_datastores: cdktf.listMapper(clusterNfsDatastoresToTerraform, true)(this._nfsDatastores.internalValue),
      timeouts: clusterTimeoutsToTerraform(this._timeouts.internalValue),
      vds: cdktf.listMapper(clusterVdsToTerraform, true)(this._vds.internalValue),
      vmfs_datastore: clusterVmfsDatastoreToTerraform(this._vmfsDatastore.internalValue),
      vsan_datastore: clusterVsanDatastoreToTerraform(this._vsanDatastore.internalValue),
      vsan_remote_datastore_cluster: clusterVsanRemoteDatastoreClusterToTerraform(this._vsanRemoteDatastoreCluster.internalValue),
      vsan_stretch_configuration: clusterVsanStretchConfigurationToTerraform(this._vsanStretchConfiguration.internalValue),
      vvol_datastores: cdktf.listMapper(clusterVvolDatastoresToTerraform, true)(this._vvolDatastores.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_image_id: {
        value: cdktf.stringToHclTerraform(this._clusterImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evc_mode: {
        value: cdktf.stringToHclTerraform(this._evcMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geneve_vlan_id: {
        value: cdktf.numberToHclTerraform(this._geneveVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      high_availability_enabled: {
        value: cdktf.booleanToHclTerraform(this._highAvailabilityEnabled),
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
      host: {
        value: cdktf.listMapperHcl(clusterHostToHclTerraform, true)(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterHostList",
      },
      ip_address_pool: {
        value: clusterIpAddressPoolToHclTerraform(this._ipAddressPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterIpAddressPoolList",
      },
      nfs_datastores: {
        value: cdktf.listMapperHcl(clusterNfsDatastoresToHclTerraform, true)(this._nfsDatastores.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterNfsDatastoresList",
      },
      timeouts: {
        value: clusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTimeouts",
      },
      vds: {
        value: cdktf.listMapperHcl(clusterVdsToHclTerraform, true)(this._vds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterVdsList",
      },
      vmfs_datastore: {
        value: clusterVmfsDatastoreToHclTerraform(this._vmfsDatastore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterVmfsDatastoreList",
      },
      vsan_datastore: {
        value: clusterVsanDatastoreToHclTerraform(this._vsanDatastore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterVsanDatastoreList",
      },
      vsan_remote_datastore_cluster: {
        value: clusterVsanRemoteDatastoreClusterToHclTerraform(this._vsanRemoteDatastoreCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterVsanRemoteDatastoreClusterList",
      },
      vsan_stretch_configuration: {
        value: clusterVsanStretchConfigurationToHclTerraform(this._vsanStretchConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterVsanStretchConfigurationList",
      },
      vvol_datastores: {
        value: cdktf.listMapperHcl(clusterVvolDatastoresToHclTerraform, true)(this._vvolDatastores.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterVvolDatastoresList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
