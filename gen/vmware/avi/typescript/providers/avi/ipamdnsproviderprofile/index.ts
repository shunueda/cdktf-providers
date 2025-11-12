// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpamdnsproviderprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#allocate_ip_in_vrf Ipamdnsproviderprofile#allocate_ip_in_vrf}
  */
  readonly allocateIpInVrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#id Ipamdnsproviderprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#name Ipamdnsproviderprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#tenant_ref Ipamdnsproviderprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#type Ipamdnsproviderprofile#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#uuid Ipamdnsproviderprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * aws_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#aws_profile Ipamdnsproviderprofile#aws_profile}
  */
  readonly awsProfile?: IpamdnsproviderprofileAwsProfile[] | cdktf.IResolvable;
  /**
  * azure_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#azure_profile Ipamdnsproviderprofile#azure_profile}
  */
  readonly azureProfile?: IpamdnsproviderprofileAzureProfile[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#configpb_attributes Ipamdnsproviderprofile#configpb_attributes}
  */
  readonly configpbAttributes?: IpamdnsproviderprofileConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * custom_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#custom_profile Ipamdnsproviderprofile#custom_profile}
  */
  readonly customProfile?: IpamdnsproviderprofileCustomProfile[] | cdktf.IResolvable;
  /**
  * gcp_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#gcp_profile Ipamdnsproviderprofile#gcp_profile}
  */
  readonly gcpProfile?: IpamdnsproviderprofileGcpProfile[] | cdktf.IResolvable;
  /**
  * infoblox_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#infoblox_profile Ipamdnsproviderprofile#infoblox_profile}
  */
  readonly infobloxProfile?: IpamdnsproviderprofileInfobloxProfile[] | cdktf.IResolvable;
  /**
  * internal_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#internal_profile Ipamdnsproviderprofile#internal_profile}
  */
  readonly internalProfile?: IpamdnsproviderprofileInternalProfile[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#markers Ipamdnsproviderprofile#markers}
  */
  readonly markers?: IpamdnsproviderprofileMarkers[] | cdktf.IResolvable;
  /**
  * oci_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#oci_profile Ipamdnsproviderprofile#oci_profile}
  */
  readonly ociProfile?: IpamdnsproviderprofileOciProfile[] | cdktf.IResolvable;
  /**
  * openstack_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#openstack_profile Ipamdnsproviderprofile#openstack_profile}
  */
  readonly openstackProfile?: IpamdnsproviderprofileOpenstackProfile[] | cdktf.IResolvable;
  /**
  * proxy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#proxy_configuration Ipamdnsproviderprofile#proxy_configuration}
  */
  readonly proxyConfiguration?: IpamdnsproviderprofileProxyConfiguration[] | cdktf.IResolvable;
  /**
  * tencent_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#tencent_profile Ipamdnsproviderprofile#tencent_profile}
  */
  readonly tencentProfile?: IpamdnsproviderprofileTencentProfile[] | cdktf.IResolvable;
}
export interface IpamdnsproviderprofileAwsProfileZones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#availability_zone Ipamdnsproviderprofile#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_network_uuids Ipamdnsproviderprofile#usable_network_uuids}
  */
  readonly usableNetworkUuids?: string[];
}

export function ipamdnsproviderprofileAwsProfileZonesToTerraform(struct?: IpamdnsproviderprofileAwsProfileZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    usable_network_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usableNetworkUuids),
  }
}


export function ipamdnsproviderprofileAwsProfileZonesToHclTerraform(struct?: IpamdnsproviderprofileAwsProfileZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usable_network_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usableNetworkUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileAwsProfileZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileAwsProfileZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._usableNetworkUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableNetworkUuids = this._usableNetworkUuids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileAwsProfileZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._usableNetworkUuids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._usableNetworkUuids = value.usableNetworkUuids;
    }
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // usable_network_uuids - computed: false, optional: true, required: false
  private _usableNetworkUuids?: string[]; 
  public get usableNetworkUuids() {
    return this.getListAttribute('usable_network_uuids');
  }
  public set usableNetworkUuids(value: string[]) {
    this._usableNetworkUuids = value;
  }
  public resetUsableNetworkUuids() {
    this._usableNetworkUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableNetworkUuidsInput() {
    return this._usableNetworkUuids;
  }
}

export class IpamdnsproviderprofileAwsProfileZonesList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileAwsProfileZones[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileAwsProfileZonesOutputReference {
    return new IpamdnsproviderprofileAwsProfileZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileAwsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#access_key_id Ipamdnsproviderprofile#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#egress_service_subnets Ipamdnsproviderprofile#egress_service_subnets}
  */
  readonly egressServiceSubnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#iam_assume_role Ipamdnsproviderprofile#iam_assume_role}
  */
  readonly iamAssumeRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#publish_vip_to_public_zone Ipamdnsproviderprofile#publish_vip_to_public_zone}
  */
  readonly publishVipToPublicZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#region Ipamdnsproviderprofile#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#secret_access_key Ipamdnsproviderprofile#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#ttl Ipamdnsproviderprofile#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_domains Ipamdnsproviderprofile#usable_domains}
  */
  readonly usableDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_network_uuids Ipamdnsproviderprofile#usable_network_uuids}
  */
  readonly usableNetworkUuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#use_iam_roles Ipamdnsproviderprofile#use_iam_roles}
  */
  readonly useIamRoles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#vpc Ipamdnsproviderprofile#vpc}
  */
  readonly vpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#vpc_id Ipamdnsproviderprofile#vpc_id}
  */
  readonly vpcId: string;
  /**
  * zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#zones Ipamdnsproviderprofile#zones}
  */
  readonly zones?: IpamdnsproviderprofileAwsProfileZones[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileAwsProfileToTerraform(struct?: IpamdnsproviderprofileAwsProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    egress_service_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.egressServiceSubnets),
    iam_assume_role: cdktf.stringToTerraform(struct!.iamAssumeRole),
    publish_vip_to_public_zone: cdktf.stringToTerraform(struct!.publishVipToPublicZone),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    usable_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usableDomains),
    usable_network_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usableNetworkUuids),
    use_iam_roles: cdktf.stringToTerraform(struct!.useIamRoles),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    zones: cdktf.listMapper(ipamdnsproviderprofileAwsProfileZonesToTerraform, true)(struct!.zones),
  }
}


export function ipamdnsproviderprofileAwsProfileToHclTerraform(struct?: IpamdnsproviderprofileAwsProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_service_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.egressServiceSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    iam_assume_role: {
      value: cdktf.stringToHclTerraform(struct!.iamAssumeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_vip_to_public_zone: {
      value: cdktf.stringToHclTerraform(struct!.publishVipToPublicZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usable_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usableDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    usable_network_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usableNetworkUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_iam_roles: {
      value: cdktf.stringToHclTerraform(struct!.useIamRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileAwsProfileZonesToHclTerraform, true)(struct!.zones),
      isBlock: true,
      type: "list",
      storageClassType: "IpamdnsproviderprofileAwsProfileZonesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileAwsProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileAwsProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._egressServiceSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressServiceSubnets = this._egressServiceSubnets;
    }
    if (this._iamAssumeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamAssumeRole = this._iamAssumeRole;
    }
    if (this._publishVipToPublicZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishVipToPublicZone = this._publishVipToPublicZone;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._usableDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableDomains = this._usableDomains;
    }
    if (this._usableNetworkUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableNetworkUuids = this._usableNetworkUuids;
    }
    if (this._useIamRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIamRoles = this._useIamRoles;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._zones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileAwsProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._egressServiceSubnets = undefined;
      this._iamAssumeRole = undefined;
      this._publishVipToPublicZone = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._ttl = undefined;
      this._usableDomains = undefined;
      this._usableNetworkUuids = undefined;
      this._useIamRoles = undefined;
      this._vpc = undefined;
      this._vpcId = undefined;
      this._zones.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._egressServiceSubnets = value.egressServiceSubnets;
      this._iamAssumeRole = value.iamAssumeRole;
      this._publishVipToPublicZone = value.publishVipToPublicZone;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._ttl = value.ttl;
      this._usableDomains = value.usableDomains;
      this._usableNetworkUuids = value.usableNetworkUuids;
      this._useIamRoles = value.useIamRoles;
      this._vpc = value.vpc;
      this._vpcId = value.vpcId;
      this._zones.internalValue = value.zones;
    }
  }

  // access_key_id - computed: true, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // egress_service_subnets - computed: false, optional: true, required: false
  private _egressServiceSubnets?: string[]; 
  public get egressServiceSubnets() {
    return this.getListAttribute('egress_service_subnets');
  }
  public set egressServiceSubnets(value: string[]) {
    this._egressServiceSubnets = value;
  }
  public resetEgressServiceSubnets() {
    this._egressServiceSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressServiceSubnetsInput() {
    return this._egressServiceSubnets;
  }

  // iam_assume_role - computed: true, optional: true, required: false
  private _iamAssumeRole?: string; 
  public get iamAssumeRole() {
    return this.getStringAttribute('iam_assume_role');
  }
  public set iamAssumeRole(value: string) {
    this._iamAssumeRole = value;
  }
  public resetIamAssumeRole() {
    this._iamAssumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamAssumeRoleInput() {
    return this._iamAssumeRole;
  }

  // publish_vip_to_public_zone - computed: false, optional: true, required: false
  private _publishVipToPublicZone?: string; 
  public get publishVipToPublicZone() {
    return this.getStringAttribute('publish_vip_to_public_zone');
  }
  public set publishVipToPublicZone(value: string) {
    this._publishVipToPublicZone = value;
  }
  public resetPublishVipToPublicZone() {
    this._publishVipToPublicZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishVipToPublicZoneInput() {
    return this._publishVipToPublicZone;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: true, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // usable_domains - computed: false, optional: true, required: false
  private _usableDomains?: string[]; 
  public get usableDomains() {
    return this.getListAttribute('usable_domains');
  }
  public set usableDomains(value: string[]) {
    this._usableDomains = value;
  }
  public resetUsableDomains() {
    this._usableDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableDomainsInput() {
    return this._usableDomains;
  }

  // usable_network_uuids - computed: false, optional: true, required: false
  private _usableNetworkUuids?: string[]; 
  public get usableNetworkUuids() {
    return this.getListAttribute('usable_network_uuids');
  }
  public set usableNetworkUuids(value: string[]) {
    this._usableNetworkUuids = value;
  }
  public resetUsableNetworkUuids() {
    this._usableNetworkUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableNetworkUuidsInput() {
    return this._usableNetworkUuids;
  }

  // use_iam_roles - computed: false, optional: true, required: false
  private _useIamRoles?: string; 
  public get useIamRoles() {
    return this.getStringAttribute('use_iam_roles');
  }
  public set useIamRoles(value: string) {
    this._useIamRoles = value;
  }
  public resetUseIamRoles() {
    this._useIamRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIamRolesInput() {
    return this._useIamRoles;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // zones - computed: false, optional: true, required: false
  private _zones = new IpamdnsproviderprofileAwsProfileZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
  public putZones(value: IpamdnsproviderprofileAwsProfileZones[] | cdktf.IResolvable) {
    this._zones.internalValue = value;
  }
  public resetZones() {
    this._zones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones.internalValue;
  }
}

export class IpamdnsproviderprofileAwsProfileList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileAwsProfile[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileAwsProfileOutputReference {
    return new IpamdnsproviderprofileAwsProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileAzureProfileAzureServiceprincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#application_id Ipamdnsproviderprofile#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#authentication_token Ipamdnsproviderprofile#authentication_token}
  */
  readonly authenticationToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#tenant_id Ipamdnsproviderprofile#tenant_id}
  */
  readonly tenantId?: string;
}

export function ipamdnsproviderprofileAzureProfileAzureServiceprincipalToTerraform(struct?: IpamdnsproviderprofileAzureProfileAzureServiceprincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    authentication_token: cdktf.stringToTerraform(struct!.authenticationToken),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function ipamdnsproviderprofileAzureProfileAzureServiceprincipalToHclTerraform(struct?: IpamdnsproviderprofileAzureProfileAzureServiceprincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_token: {
      value: cdktf.stringToHclTerraform(struct!.authenticationToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileAzureProfileAzureServiceprincipalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileAzureProfileAzureServiceprincipal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._authenticationToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationToken = this._authenticationToken;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileAzureProfileAzureServiceprincipal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._authenticationToken = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._authenticationToken = value.authenticationToken;
      this._tenantId = value.tenantId;
    }
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // authentication_token - computed: true, optional: true, required: false
  private _authenticationToken?: string; 
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
  }
  public set authenticationToken(value: string) {
    this._authenticationToken = value;
  }
  public resetAuthenticationToken() {
    this._authenticationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenInput() {
    return this._authenticationToken;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class IpamdnsproviderprofileAzureProfileAzureServiceprincipalList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileAzureProfileAzureServiceprincipal[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileAzureProfileAzureServiceprincipalOutputReference {
    return new IpamdnsproviderprofileAzureProfileAzureServiceprincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileAzureProfileAzureUserpass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#password Ipamdnsproviderprofile#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#tenant_name Ipamdnsproviderprofile#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#username Ipamdnsproviderprofile#username}
  */
  readonly username?: string;
}

export function ipamdnsproviderprofileAzureProfileAzureUserpassToTerraform(struct?: IpamdnsproviderprofileAzureProfileAzureUserpass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function ipamdnsproviderprofileAzureProfileAzureUserpassToHclTerraform(struct?: IpamdnsproviderprofileAzureProfileAzureUserpass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
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

export class IpamdnsproviderprofileAzureProfileAzureUserpassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileAzureProfileAzureUserpass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileAzureProfileAzureUserpass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._tenantName = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._tenantName = value.tenantName;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
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

  // tenant_name - computed: true, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
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
}

export class IpamdnsproviderprofileAzureProfileAzureUserpassList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileAzureProfileAzureUserpass[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileAzureProfileAzureUserpassOutputReference {
    return new IpamdnsproviderprofileAzureProfileAzureUserpassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileAzureProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#egress_service_subnets Ipamdnsproviderprofile#egress_service_subnets}
  */
  readonly egressServiceSubnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#resource_group Ipamdnsproviderprofile#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#subscription_id Ipamdnsproviderprofile#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_domains Ipamdnsproviderprofile#usable_domains}
  */
  readonly usableDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_network_uuids Ipamdnsproviderprofile#usable_network_uuids}
  */
  readonly usableNetworkUuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#use_enhanced_ha Ipamdnsproviderprofile#use_enhanced_ha}
  */
  readonly useEnhancedHa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#use_standard_alb Ipamdnsproviderprofile#use_standard_alb}
  */
  readonly useStandardAlb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#virtual_network_ids Ipamdnsproviderprofile#virtual_network_ids}
  */
  readonly virtualNetworkIds?: string[];
  /**
  * azure_serviceprincipal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#azure_serviceprincipal Ipamdnsproviderprofile#azure_serviceprincipal}
  */
  readonly azureServiceprincipal?: IpamdnsproviderprofileAzureProfileAzureServiceprincipal[] | cdktf.IResolvable;
  /**
  * azure_userpass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#azure_userpass Ipamdnsproviderprofile#azure_userpass}
  */
  readonly azureUserpass?: IpamdnsproviderprofileAzureProfileAzureUserpass[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileAzureProfileToTerraform(struct?: IpamdnsproviderprofileAzureProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_service_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.egressServiceSubnets),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    usable_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usableDomains),
    usable_network_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usableNetworkUuids),
    use_enhanced_ha: cdktf.stringToTerraform(struct!.useEnhancedHa),
    use_standard_alb: cdktf.stringToTerraform(struct!.useStandardAlb),
    virtual_network_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virtualNetworkIds),
    azure_serviceprincipal: cdktf.listMapper(ipamdnsproviderprofileAzureProfileAzureServiceprincipalToTerraform, true)(struct!.azureServiceprincipal),
    azure_userpass: cdktf.listMapper(ipamdnsproviderprofileAzureProfileAzureUserpassToTerraform, true)(struct!.azureUserpass),
  }
}


export function ipamdnsproviderprofileAzureProfileToHclTerraform(struct?: IpamdnsproviderprofileAzureProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_service_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.egressServiceSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usable_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usableDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    usable_network_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usableNetworkUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_enhanced_ha: {
      value: cdktf.stringToHclTerraform(struct!.useEnhancedHa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_standard_alb: {
      value: cdktf.stringToHclTerraform(struct!.useStandardAlb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virtualNetworkIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    azure_serviceprincipal: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileAzureProfileAzureServiceprincipalToHclTerraform, true)(struct!.azureServiceprincipal),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileAzureProfileAzureServiceprincipalList",
    },
    azure_userpass: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileAzureProfileAzureUserpassToHclTerraform, true)(struct!.azureUserpass),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileAzureProfileAzureUserpassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileAzureProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileAzureProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressServiceSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressServiceSubnets = this._egressServiceSubnets;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._usableDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableDomains = this._usableDomains;
    }
    if (this._usableNetworkUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableNetworkUuids = this._usableNetworkUuids;
    }
    if (this._useEnhancedHa !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnhancedHa = this._useEnhancedHa;
    }
    if (this._useStandardAlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStandardAlb = this._useStandardAlb;
    }
    if (this._virtualNetworkIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkIds = this._virtualNetworkIds;
    }
    if (this._azureServiceprincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureServiceprincipal = this._azureServiceprincipal?.internalValue;
    }
    if (this._azureUserpass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureUserpass = this._azureUserpass?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileAzureProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressServiceSubnets = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
      this._usableDomains = undefined;
      this._usableNetworkUuids = undefined;
      this._useEnhancedHa = undefined;
      this._useStandardAlb = undefined;
      this._virtualNetworkIds = undefined;
      this._azureServiceprincipal.internalValue = undefined;
      this._azureUserpass.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressServiceSubnets = value.egressServiceSubnets;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
      this._usableDomains = value.usableDomains;
      this._usableNetworkUuids = value.usableNetworkUuids;
      this._useEnhancedHa = value.useEnhancedHa;
      this._useStandardAlb = value.useStandardAlb;
      this._virtualNetworkIds = value.virtualNetworkIds;
      this._azureServiceprincipal.internalValue = value.azureServiceprincipal;
      this._azureUserpass.internalValue = value.azureUserpass;
    }
  }

  // egress_service_subnets - computed: false, optional: true, required: false
  private _egressServiceSubnets?: string[]; 
  public get egressServiceSubnets() {
    return this.getListAttribute('egress_service_subnets');
  }
  public set egressServiceSubnets(value: string[]) {
    this._egressServiceSubnets = value;
  }
  public resetEgressServiceSubnets() {
    this._egressServiceSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressServiceSubnetsInput() {
    return this._egressServiceSubnets;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // usable_domains - computed: false, optional: true, required: false
  private _usableDomains?: string[]; 
  public get usableDomains() {
    return this.getListAttribute('usable_domains');
  }
  public set usableDomains(value: string[]) {
    this._usableDomains = value;
  }
  public resetUsableDomains() {
    this._usableDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableDomainsInput() {
    return this._usableDomains;
  }

  // usable_network_uuids - computed: false, optional: true, required: false
  private _usableNetworkUuids?: string[]; 
  public get usableNetworkUuids() {
    return this.getListAttribute('usable_network_uuids');
  }
  public set usableNetworkUuids(value: string[]) {
    this._usableNetworkUuids = value;
  }
  public resetUsableNetworkUuids() {
    this._usableNetworkUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableNetworkUuidsInput() {
    return this._usableNetworkUuids;
  }

  // use_enhanced_ha - computed: false, optional: true, required: false
  private _useEnhancedHa?: string; 
  public get useEnhancedHa() {
    return this.getStringAttribute('use_enhanced_ha');
  }
  public set useEnhancedHa(value: string) {
    this._useEnhancedHa = value;
  }
  public resetUseEnhancedHa() {
    this._useEnhancedHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnhancedHaInput() {
    return this._useEnhancedHa;
  }

  // use_standard_alb - computed: false, optional: true, required: false
  private _useStandardAlb?: string; 
  public get useStandardAlb() {
    return this.getStringAttribute('use_standard_alb');
  }
  public set useStandardAlb(value: string) {
    this._useStandardAlb = value;
  }
  public resetUseStandardAlb() {
    this._useStandardAlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStandardAlbInput() {
    return this._useStandardAlb;
  }

  // virtual_network_ids - computed: false, optional: true, required: false
  private _virtualNetworkIds?: string[]; 
  public get virtualNetworkIds() {
    return this.getListAttribute('virtual_network_ids');
  }
  public set virtualNetworkIds(value: string[]) {
    this._virtualNetworkIds = value;
  }
  public resetVirtualNetworkIds() {
    this._virtualNetworkIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdsInput() {
    return this._virtualNetworkIds;
  }

  // azure_serviceprincipal - computed: false, optional: true, required: false
  private _azureServiceprincipal = new IpamdnsproviderprofileAzureProfileAzureServiceprincipalList(this, "azure_serviceprincipal", true);
  public get azureServiceprincipal() {
    return this._azureServiceprincipal;
  }
  public putAzureServiceprincipal(value: IpamdnsproviderprofileAzureProfileAzureServiceprincipal[] | cdktf.IResolvable) {
    this._azureServiceprincipal.internalValue = value;
  }
  public resetAzureServiceprincipal() {
    this._azureServiceprincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureServiceprincipalInput() {
    return this._azureServiceprincipal.internalValue;
  }

  // azure_userpass - computed: false, optional: true, required: false
  private _azureUserpass = new IpamdnsproviderprofileAzureProfileAzureUserpassList(this, "azure_userpass", true);
  public get azureUserpass() {
    return this._azureUserpass;
  }
  public putAzureUserpass(value: IpamdnsproviderprofileAzureProfileAzureUserpass[] | cdktf.IResolvable) {
    this._azureUserpass.internalValue = value;
  }
  public resetAzureUserpass() {
    this._azureUserpass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUserpassInput() {
    return this._azureUserpass.internalValue;
  }
}

export class IpamdnsproviderprofileAzureProfileList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileAzureProfile[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileAzureProfileOutputReference {
    return new IpamdnsproviderprofileAzureProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#version Ipamdnsproviderprofile#version}
  */
  readonly version?: string;
}

export function ipamdnsproviderprofileConfigpbAttributesToTerraform(struct?: IpamdnsproviderprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ipamdnsproviderprofileConfigpbAttributesToHclTerraform(struct?: IpamdnsproviderprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class IpamdnsproviderprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileConfigpbAttributesOutputReference {
    return new IpamdnsproviderprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileCustomProfileDynamicParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#is_dynamic Ipamdnsproviderprofile#is_dynamic}
  */
  readonly isDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#is_sensitive Ipamdnsproviderprofile#is_sensitive}
  */
  readonly isSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#name Ipamdnsproviderprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#value Ipamdnsproviderprofile#value}
  */
  readonly value?: string;
}

export function ipamdnsproviderprofileCustomProfileDynamicParamsToTerraform(struct?: IpamdnsproviderprofileCustomProfileDynamicParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_dynamic: cdktf.stringToTerraform(struct!.isDynamic),
    is_sensitive: cdktf.stringToTerraform(struct!.isSensitive),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ipamdnsproviderprofileCustomProfileDynamicParamsToHclTerraform(struct?: IpamdnsproviderprofileCustomProfileDynamicParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_dynamic: {
      value: cdktf.stringToHclTerraform(struct!.isDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.isSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileCustomProfileDynamicParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileCustomProfileDynamicParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDynamic = this._isDynamic;
    }
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileCustomProfileDynamicParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDynamic = undefined;
      this._isSensitive = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDynamic = value.isDynamic;
      this._isSensitive = value.isSensitive;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // is_dynamic - computed: false, optional: true, required: false
  private _isDynamic?: string; 
  public get isDynamic() {
    return this.getStringAttribute('is_dynamic');
  }
  public set isDynamic(value: string) {
    this._isDynamic = value;
  }
  public resetIsDynamic() {
    this._isDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDynamicInput() {
    return this._isDynamic;
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: string; 
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }
  public set isSensitive(value: string) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IpamdnsproviderprofileCustomProfileDynamicParamsList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileCustomProfileDynamicParams[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileCustomProfileDynamicParamsOutputReference {
    return new IpamdnsproviderprofileCustomProfileDynamicParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#addr Ipamdnsproviderprofile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#type Ipamdnsproviderprofile#type}
  */
  readonly type: string;
}

export function ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddrToTerraform(struct?: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddrToHclTerraform(struct?: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddrOutputReference {
    return new IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#mask Ipamdnsproviderprofile#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#ip_addr Ipamdnsproviderprofile#ip_addr}
  */
  readonly ipAddr: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddr[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetToTerraform(struct?: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetToHclTerraform(struct?: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetOutputReference {
    return new IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#addr Ipamdnsproviderprofile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#type Ipamdnsproviderprofile#type}
  */
  readonly type: string;
}

export function ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddrToTerraform(struct?: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddrToHclTerraform(struct?: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddrList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddr[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddrOutputReference {
    return new IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#mask Ipamdnsproviderprofile#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#ip_addr Ipamdnsproviderprofile#ip_addr}
  */
  readonly ipAddr: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddr[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6ToTerraform(struct?: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6ToHclTerraform(struct?: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6IpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6List extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6OutputReference {
    return new IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileCustomProfileUsableAllocSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#network_id Ipamdnsproviderprofile#network_id}
  */
  readonly networkId: string;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#subnet Ipamdnsproviderprofile#subnet}
  */
  readonly subnet?: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet[] | cdktf.IResolvable;
  /**
  * subnet6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#subnet6 Ipamdnsproviderprofile#subnet6}
  */
  readonly subnet6?: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileCustomProfileUsableAllocSubnetsToTerraform(struct?: IpamdnsproviderprofileCustomProfileUsableAllocSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    subnet: cdktf.listMapper(ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetToTerraform, true)(struct!.subnet),
    subnet6: cdktf.listMapper(ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6ToTerraform, true)(struct!.subnet6),
  }
}


export function ipamdnsproviderprofileCustomProfileUsableAllocSubnetsToHclTerraform(struct?: IpamdnsproviderprofileCustomProfileUsableAllocSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetList",
    },
    subnet6: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6ToHclTerraform, true)(struct!.subnet6),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileCustomProfileUsableAllocSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileCustomProfileUsableAllocSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnet6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet6 = this._subnet6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileCustomProfileUsableAllocSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkId = undefined;
      this._subnet.internalValue = undefined;
      this._subnet6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkId = value.networkId;
      this._subnet.internalValue = value.subnet;
      this._subnet6.internalValue = value.subnet6;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnetList(this, "subnet", true);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6 = new IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6List(this, "subnet6", true);
  public get subnet6() {
    return this._subnet6;
  }
  public putSubnet6(value: IpamdnsproviderprofileCustomProfileUsableAllocSubnetsSubnet6[] | cdktf.IResolvable) {
    this._subnet6.internalValue = value;
  }
  public resetSubnet6() {
    this._subnet6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6.internalValue;
  }
}

export class IpamdnsproviderprofileCustomProfileUsableAllocSubnetsList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileCustomProfileUsableAllocSubnets[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileCustomProfileUsableAllocSubnetsOutputReference {
    return new IpamdnsproviderprofileCustomProfileUsableAllocSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileCustomProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#custom_ipam_dns_profile_ref Ipamdnsproviderprofile#custom_ipam_dns_profile_ref}
  */
  readonly customIpamDnsProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_domains Ipamdnsproviderprofile#usable_domains}
  */
  readonly usableDomains?: string[];
  /**
  * dynamic_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#dynamic_params Ipamdnsproviderprofile#dynamic_params}
  */
  readonly dynamicParams?: IpamdnsproviderprofileCustomProfileDynamicParams[] | cdktf.IResolvable;
  /**
  * usable_alloc_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_alloc_subnets Ipamdnsproviderprofile#usable_alloc_subnets}
  */
  readonly usableAllocSubnets?: IpamdnsproviderprofileCustomProfileUsableAllocSubnets[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileCustomProfileToTerraform(struct?: IpamdnsproviderprofileCustomProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ipam_dns_profile_ref: cdktf.stringToTerraform(struct!.customIpamDnsProfileRef),
    usable_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usableDomains),
    dynamic_params: cdktf.listMapper(ipamdnsproviderprofileCustomProfileDynamicParamsToTerraform, true)(struct!.dynamicParams),
    usable_alloc_subnets: cdktf.listMapper(ipamdnsproviderprofileCustomProfileUsableAllocSubnetsToTerraform, true)(struct!.usableAllocSubnets),
  }
}


export function ipamdnsproviderprofileCustomProfileToHclTerraform(struct?: IpamdnsproviderprofileCustomProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_ipam_dns_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.customIpamDnsProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usable_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usableDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dynamic_params: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileCustomProfileDynamicParamsToHclTerraform, true)(struct!.dynamicParams),
      isBlock: true,
      type: "list",
      storageClassType: "IpamdnsproviderprofileCustomProfileDynamicParamsList",
    },
    usable_alloc_subnets: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileCustomProfileUsableAllocSubnetsToHclTerraform, true)(struct!.usableAllocSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "IpamdnsproviderprofileCustomProfileUsableAllocSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileCustomProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileCustomProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customIpamDnsProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIpamDnsProfileRef = this._customIpamDnsProfileRef;
    }
    if (this._usableDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableDomains = this._usableDomains;
    }
    if (this._dynamicParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicParams = this._dynamicParams?.internalValue;
    }
    if (this._usableAllocSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableAllocSubnets = this._usableAllocSubnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileCustomProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customIpamDnsProfileRef = undefined;
      this._usableDomains = undefined;
      this._dynamicParams.internalValue = undefined;
      this._usableAllocSubnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customIpamDnsProfileRef = value.customIpamDnsProfileRef;
      this._usableDomains = value.usableDomains;
      this._dynamicParams.internalValue = value.dynamicParams;
      this._usableAllocSubnets.internalValue = value.usableAllocSubnets;
    }
  }

  // custom_ipam_dns_profile_ref - computed: true, optional: true, required: false
  private _customIpamDnsProfileRef?: string; 
  public get customIpamDnsProfileRef() {
    return this.getStringAttribute('custom_ipam_dns_profile_ref');
  }
  public set customIpamDnsProfileRef(value: string) {
    this._customIpamDnsProfileRef = value;
  }
  public resetCustomIpamDnsProfileRef() {
    this._customIpamDnsProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpamDnsProfileRefInput() {
    return this._customIpamDnsProfileRef;
  }

  // usable_domains - computed: false, optional: true, required: false
  private _usableDomains?: string[]; 
  public get usableDomains() {
    return this.getListAttribute('usable_domains');
  }
  public set usableDomains(value: string[]) {
    this._usableDomains = value;
  }
  public resetUsableDomains() {
    this._usableDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableDomainsInput() {
    return this._usableDomains;
  }

  // dynamic_params - computed: false, optional: true, required: false
  private _dynamicParams = new IpamdnsproviderprofileCustomProfileDynamicParamsList(this, "dynamic_params", false);
  public get dynamicParams() {
    return this._dynamicParams;
  }
  public putDynamicParams(value: IpamdnsproviderprofileCustomProfileDynamicParams[] | cdktf.IResolvable) {
    this._dynamicParams.internalValue = value;
  }
  public resetDynamicParams() {
    this._dynamicParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParamsInput() {
    return this._dynamicParams.internalValue;
  }

  // usable_alloc_subnets - computed: false, optional: true, required: false
  private _usableAllocSubnets = new IpamdnsproviderprofileCustomProfileUsableAllocSubnetsList(this, "usable_alloc_subnets", false);
  public get usableAllocSubnets() {
    return this._usableAllocSubnets;
  }
  public putUsableAllocSubnets(value: IpamdnsproviderprofileCustomProfileUsableAllocSubnets[] | cdktf.IResolvable) {
    this._usableAllocSubnets.internalValue = value;
  }
  public resetUsableAllocSubnets() {
    this._usableAllocSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableAllocSubnetsInput() {
    return this._usableAllocSubnets.internalValue;
  }
}

export class IpamdnsproviderprofileCustomProfileList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileCustomProfile[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileCustomProfileOutputReference {
    return new IpamdnsproviderprofileCustomProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileGcpProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#match_se_group_subnet Ipamdnsproviderprofile#match_se_group_subnet}
  */
  readonly matchSeGroupSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#network_host_project_id Ipamdnsproviderprofile#network_host_project_id}
  */
  readonly networkHostProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#region_name Ipamdnsproviderprofile#region_name}
  */
  readonly regionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#se_project_id Ipamdnsproviderprofile#se_project_id}
  */
  readonly seProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_network_refs Ipamdnsproviderprofile#usable_network_refs}
  */
  readonly usableNetworkRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#use_gcp_network Ipamdnsproviderprofile#use_gcp_network}
  */
  readonly useGcpNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#vpc_network_name Ipamdnsproviderprofile#vpc_network_name}
  */
  readonly vpcNetworkName?: string;
}

export function ipamdnsproviderprofileGcpProfileToTerraform(struct?: IpamdnsproviderprofileGcpProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_se_group_subnet: cdktf.stringToTerraform(struct!.matchSeGroupSubnet),
    network_host_project_id: cdktf.stringToTerraform(struct!.networkHostProjectId),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    se_project_id: cdktf.stringToTerraform(struct!.seProjectId),
    usable_network_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usableNetworkRefs),
    use_gcp_network: cdktf.stringToTerraform(struct!.useGcpNetwork),
    vpc_network_name: cdktf.stringToTerraform(struct!.vpcNetworkName),
  }
}


export function ipamdnsproviderprofileGcpProfileToHclTerraform(struct?: IpamdnsproviderprofileGcpProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_se_group_subnet: {
      value: cdktf.stringToHclTerraform(struct!.matchSeGroupSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_host_project_id: {
      value: cdktf.stringToHclTerraform(struct!.networkHostProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_project_id: {
      value: cdktf.stringToHclTerraform(struct!.seProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usable_network_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usableNetworkRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_gcp_network: {
      value: cdktf.stringToHclTerraform(struct!.useGcpNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_network_name: {
      value: cdktf.stringToHclTerraform(struct!.vpcNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileGcpProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileGcpProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchSeGroupSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSeGroupSubnet = this._matchSeGroupSubnet;
    }
    if (this._networkHostProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkHostProjectId = this._networkHostProjectId;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._seProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.seProjectId = this._seProjectId;
    }
    if (this._usableNetworkRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableNetworkRefs = this._usableNetworkRefs;
    }
    if (this._useGcpNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGcpNetwork = this._useGcpNetwork;
    }
    if (this._vpcNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcNetworkName = this._vpcNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileGcpProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchSeGroupSubnet = undefined;
      this._networkHostProjectId = undefined;
      this._regionName = undefined;
      this._seProjectId = undefined;
      this._usableNetworkRefs = undefined;
      this._useGcpNetwork = undefined;
      this._vpcNetworkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchSeGroupSubnet = value.matchSeGroupSubnet;
      this._networkHostProjectId = value.networkHostProjectId;
      this._regionName = value.regionName;
      this._seProjectId = value.seProjectId;
      this._usableNetworkRefs = value.usableNetworkRefs;
      this._useGcpNetwork = value.useGcpNetwork;
      this._vpcNetworkName = value.vpcNetworkName;
    }
  }

  // match_se_group_subnet - computed: false, optional: true, required: false
  private _matchSeGroupSubnet?: string; 
  public get matchSeGroupSubnet() {
    return this.getStringAttribute('match_se_group_subnet');
  }
  public set matchSeGroupSubnet(value: string) {
    this._matchSeGroupSubnet = value;
  }
  public resetMatchSeGroupSubnet() {
    this._matchSeGroupSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSeGroupSubnetInput() {
    return this._matchSeGroupSubnet;
  }

  // network_host_project_id - computed: true, optional: true, required: false
  private _networkHostProjectId?: string; 
  public get networkHostProjectId() {
    return this.getStringAttribute('network_host_project_id');
  }
  public set networkHostProjectId(value: string) {
    this._networkHostProjectId = value;
  }
  public resetNetworkHostProjectId() {
    this._networkHostProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkHostProjectIdInput() {
    return this._networkHostProjectId;
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // se_project_id - computed: true, optional: true, required: false
  private _seProjectId?: string; 
  public get seProjectId() {
    return this.getStringAttribute('se_project_id');
  }
  public set seProjectId(value: string) {
    this._seProjectId = value;
  }
  public resetSeProjectId() {
    this._seProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seProjectIdInput() {
    return this._seProjectId;
  }

  // usable_network_refs - computed: false, optional: true, required: false
  private _usableNetworkRefs?: string[]; 
  public get usableNetworkRefs() {
    return this.getListAttribute('usable_network_refs');
  }
  public set usableNetworkRefs(value: string[]) {
    this._usableNetworkRefs = value;
  }
  public resetUsableNetworkRefs() {
    this._usableNetworkRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableNetworkRefsInput() {
    return this._usableNetworkRefs;
  }

  // use_gcp_network - computed: false, optional: true, required: false
  private _useGcpNetwork?: string; 
  public get useGcpNetwork() {
    return this.getStringAttribute('use_gcp_network');
  }
  public set useGcpNetwork(value: string) {
    this._useGcpNetwork = value;
  }
  public resetUseGcpNetwork() {
    this._useGcpNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGcpNetworkInput() {
    return this._useGcpNetwork;
  }

  // vpc_network_name - computed: true, optional: true, required: false
  private _vpcNetworkName?: string; 
  public get vpcNetworkName() {
    return this.getStringAttribute('vpc_network_name');
  }
  public set vpcNetworkName(value: string) {
    this._vpcNetworkName = value;
  }
  public resetVpcNetworkName() {
    this._vpcNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkNameInput() {
    return this._vpcNetworkName;
  }
}

export class IpamdnsproviderprofileGcpProfileList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileGcpProfile[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileGcpProfileOutputReference {
    return new IpamdnsproviderprofileGcpProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInfobloxProfileExtensibleAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#is_dynamic Ipamdnsproviderprofile#is_dynamic}
  */
  readonly isDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#is_sensitive Ipamdnsproviderprofile#is_sensitive}
  */
  readonly isSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#name Ipamdnsproviderprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#value Ipamdnsproviderprofile#value}
  */
  readonly value?: string;
}

export function ipamdnsproviderprofileInfobloxProfileExtensibleAttributesToTerraform(struct?: IpamdnsproviderprofileInfobloxProfileExtensibleAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_dynamic: cdktf.stringToTerraform(struct!.isDynamic),
    is_sensitive: cdktf.stringToTerraform(struct!.isSensitive),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ipamdnsproviderprofileInfobloxProfileExtensibleAttributesToHclTerraform(struct?: IpamdnsproviderprofileInfobloxProfileExtensibleAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_dynamic: {
      value: cdktf.stringToHclTerraform(struct!.isDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.isSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileInfobloxProfileExtensibleAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInfobloxProfileExtensibleAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDynamic = this._isDynamic;
    }
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInfobloxProfileExtensibleAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDynamic = undefined;
      this._isSensitive = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDynamic = value.isDynamic;
      this._isSensitive = value.isSensitive;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // is_dynamic - computed: false, optional: true, required: false
  private _isDynamic?: string; 
  public get isDynamic() {
    return this.getStringAttribute('is_dynamic');
  }
  public set isDynamic(value: string) {
    this._isDynamic = value;
  }
  public resetIsDynamic() {
    this._isDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDynamicInput() {
    return this._isDynamic;
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: string; 
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }
  public set isSensitive(value: string) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IpamdnsproviderprofileInfobloxProfileExtensibleAttributesList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInfobloxProfileExtensibleAttributes[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInfobloxProfileExtensibleAttributesOutputReference {
    return new IpamdnsproviderprofileInfobloxProfileExtensibleAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInfobloxProfileIp6Address {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#addr Ipamdnsproviderprofile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#type Ipamdnsproviderprofile#type}
  */
  readonly type: string;
}

export function ipamdnsproviderprofileInfobloxProfileIp6AddressToTerraform(struct?: IpamdnsproviderprofileInfobloxProfileIp6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipamdnsproviderprofileInfobloxProfileIp6AddressToHclTerraform(struct?: IpamdnsproviderprofileInfobloxProfileIp6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class IpamdnsproviderprofileInfobloxProfileIp6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInfobloxProfileIp6Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInfobloxProfileIp6Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class IpamdnsproviderprofileInfobloxProfileIp6AddressList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInfobloxProfileIp6Address[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInfobloxProfileIp6AddressOutputReference {
    return new IpamdnsproviderprofileInfobloxProfileIp6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInfobloxProfileIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#addr Ipamdnsproviderprofile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#type Ipamdnsproviderprofile#type}
  */
  readonly type: string;
}

export function ipamdnsproviderprofileInfobloxProfileIpAddressToTerraform(struct?: IpamdnsproviderprofileInfobloxProfileIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipamdnsproviderprofileInfobloxProfileIpAddressToHclTerraform(struct?: IpamdnsproviderprofileInfobloxProfileIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class IpamdnsproviderprofileInfobloxProfileIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInfobloxProfileIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInfobloxProfileIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class IpamdnsproviderprofileInfobloxProfileIpAddressList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInfobloxProfileIpAddress[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInfobloxProfileIpAddressOutputReference {
    return new IpamdnsproviderprofileInfobloxProfileIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#addr Ipamdnsproviderprofile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#type Ipamdnsproviderprofile#type}
  */
  readonly type: string;
}

export function ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddrToTerraform(struct?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddrToHclTerraform(struct?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddrOutputReference {
    return new IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#mask Ipamdnsproviderprofile#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#ip_addr Ipamdnsproviderprofile#ip_addr}
  */
  readonly ipAddr: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddr[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetToTerraform(struct?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetToHclTerraform(struct?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetOutputReference {
    return new IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#addr Ipamdnsproviderprofile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#type Ipamdnsproviderprofile#type}
  */
  readonly type: string;
}

export function ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddrToTerraform(struct?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddrToHclTerraform(struct?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddrList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddr[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddrOutputReference {
    return new IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#mask Ipamdnsproviderprofile#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#ip_addr Ipamdnsproviderprofile#ip_addr}
  */
  readonly ipAddr: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddr[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6ToTerraform(struct?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6ToHclTerraform(struct?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6IpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6List extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6OutputReference {
    return new IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInfobloxProfileUsableAllocSubnets {
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#subnet Ipamdnsproviderprofile#subnet}
  */
  readonly subnet?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet[] | cdktf.IResolvable;
  /**
  * subnet6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#subnet6 Ipamdnsproviderprofile#subnet6}
  */
  readonly subnet6?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsToTerraform(struct?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: cdktf.listMapper(ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetToTerraform, true)(struct!.subnet),
    subnet6: cdktf.listMapper(ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6ToTerraform, true)(struct!.subnet6),
  }
}


export function ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsToHclTerraform(struct?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetList",
    },
    subnet6: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6ToHclTerraform, true)(struct!.subnet6),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInfobloxProfileUsableAllocSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnet6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet6 = this._subnet6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnet.internalValue = undefined;
      this._subnet6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnet.internalValue = value.subnet;
      this._subnet6.internalValue = value.subnet6;
    }
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnetList(this, "subnet", true);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6 = new IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6List(this, "subnet6", true);
  public get subnet6() {
    return this._subnet6;
  }
  public putSubnet6(value: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsSubnet6[] | cdktf.IResolvable) {
    this._subnet6.internalValue = value;
  }
  public resetSubnet6() {
    this._subnet6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6.internalValue;
  }
}

export class IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInfobloxProfileUsableAllocSubnets[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsOutputReference {
    return new IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInfobloxProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#dns_view Ipamdnsproviderprofile#dns_view}
  */
  readonly dnsView?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#network_view Ipamdnsproviderprofile#network_view}
  */
  readonly networkView?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#password Ipamdnsproviderprofile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#profile_url Ipamdnsproviderprofile#profile_url}
  */
  readonly profileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_domains Ipamdnsproviderprofile#usable_domains}
  */
  readonly usableDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#username Ipamdnsproviderprofile#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#wapi_version Ipamdnsproviderprofile#wapi_version}
  */
  readonly wapiVersion?: string;
  /**
  * extensible_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#extensible_attributes Ipamdnsproviderprofile#extensible_attributes}
  */
  readonly extensibleAttributes?: IpamdnsproviderprofileInfobloxProfileExtensibleAttributes[] | cdktf.IResolvable;
  /**
  * ip6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#ip6_address Ipamdnsproviderprofile#ip6_address}
  */
  readonly ip6Address?: IpamdnsproviderprofileInfobloxProfileIp6Address[] | cdktf.IResolvable;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#ip_address Ipamdnsproviderprofile#ip_address}
  */
  readonly ipAddress?: IpamdnsproviderprofileInfobloxProfileIpAddress[] | cdktf.IResolvable;
  /**
  * usable_alloc_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_alloc_subnets Ipamdnsproviderprofile#usable_alloc_subnets}
  */
  readonly usableAllocSubnets?: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnets[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileInfobloxProfileToTerraform(struct?: IpamdnsproviderprofileInfobloxProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_view: cdktf.stringToTerraform(struct!.dnsView),
    network_view: cdktf.stringToTerraform(struct!.networkView),
    password: cdktf.stringToTerraform(struct!.password),
    profile_url: cdktf.stringToTerraform(struct!.profileUrl),
    usable_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usableDomains),
    username: cdktf.stringToTerraform(struct!.username),
    wapi_version: cdktf.stringToTerraform(struct!.wapiVersion),
    extensible_attributes: cdktf.listMapper(ipamdnsproviderprofileInfobloxProfileExtensibleAttributesToTerraform, true)(struct!.extensibleAttributes),
    ip6_address: cdktf.listMapper(ipamdnsproviderprofileInfobloxProfileIp6AddressToTerraform, true)(struct!.ip6Address),
    ip_address: cdktf.listMapper(ipamdnsproviderprofileInfobloxProfileIpAddressToTerraform, true)(struct!.ipAddress),
    usable_alloc_subnets: cdktf.listMapper(ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsToTerraform, true)(struct!.usableAllocSubnets),
  }
}


export function ipamdnsproviderprofileInfobloxProfileToHclTerraform(struct?: IpamdnsproviderprofileInfobloxProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_view: {
      value: cdktf.stringToHclTerraform(struct!.dnsView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_view: {
      value: cdktf.stringToHclTerraform(struct!.networkView),
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
    profile_url: {
      value: cdktf.stringToHclTerraform(struct!.profileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usable_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usableDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wapi_version: {
      value: cdktf.stringToHclTerraform(struct!.wapiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extensible_attributes: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInfobloxProfileExtensibleAttributesToHclTerraform, true)(struct!.extensibleAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "IpamdnsproviderprofileInfobloxProfileExtensibleAttributesList",
    },
    ip6_address: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInfobloxProfileIp6AddressToHclTerraform, true)(struct!.ip6Address),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileInfobloxProfileIp6AddressList",
    },
    ip_address: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInfobloxProfileIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "set",
      storageClassType: "IpamdnsproviderprofileInfobloxProfileIpAddressList",
    },
    usable_alloc_subnets: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInfobloxProfileUsableAllocSubnetsToHclTerraform, true)(struct!.usableAllocSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileInfobloxProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInfobloxProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsView !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsView = this._dnsView;
    }
    if (this._networkView !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkView = this._networkView;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._profileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileUrl = this._profileUrl;
    }
    if (this._usableDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableDomains = this._usableDomains;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._wapiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.wapiVersion = this._wapiVersion;
    }
    if (this._extensibleAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensibleAttributes = this._extensibleAttributes?.internalValue;
    }
    if (this._ip6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address?.internalValue;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    if (this._usableAllocSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableAllocSubnets = this._usableAllocSubnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInfobloxProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsView = undefined;
      this._networkView = undefined;
      this._password = undefined;
      this._profileUrl = undefined;
      this._usableDomains = undefined;
      this._username = undefined;
      this._wapiVersion = undefined;
      this._extensibleAttributes.internalValue = undefined;
      this._ip6Address.internalValue = undefined;
      this._ipAddress.internalValue = undefined;
      this._usableAllocSubnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsView = value.dnsView;
      this._networkView = value.networkView;
      this._password = value.password;
      this._profileUrl = value.profileUrl;
      this._usableDomains = value.usableDomains;
      this._username = value.username;
      this._wapiVersion = value.wapiVersion;
      this._extensibleAttributes.internalValue = value.extensibleAttributes;
      this._ip6Address.internalValue = value.ip6Address;
      this._ipAddress.internalValue = value.ipAddress;
      this._usableAllocSubnets.internalValue = value.usableAllocSubnets;
    }
  }

  // dns_view - computed: true, optional: true, required: false
  private _dnsView?: string; 
  public get dnsView() {
    return this.getStringAttribute('dns_view');
  }
  public set dnsView(value: string) {
    this._dnsView = value;
  }
  public resetDnsView() {
    this._dnsView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsViewInput() {
    return this._dnsView;
  }

  // network_view - computed: true, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
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

  // profile_url - computed: true, optional: true, required: false
  private _profileUrl?: string; 
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }
  public set profileUrl(value: string) {
    this._profileUrl = value;
  }
  public resetProfileUrl() {
    this._profileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUrlInput() {
    return this._profileUrl;
  }

  // usable_domains - computed: false, optional: true, required: false
  private _usableDomains?: string[]; 
  public get usableDomains() {
    return this.getListAttribute('usable_domains');
  }
  public set usableDomains(value: string[]) {
    this._usableDomains = value;
  }
  public resetUsableDomains() {
    this._usableDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableDomainsInput() {
    return this._usableDomains;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // wapi_version - computed: false, optional: true, required: false
  private _wapiVersion?: string; 
  public get wapiVersion() {
    return this.getStringAttribute('wapi_version');
  }
  public set wapiVersion(value: string) {
    this._wapiVersion = value;
  }
  public resetWapiVersion() {
    this._wapiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wapiVersionInput() {
    return this._wapiVersion;
  }

  // extensible_attributes - computed: false, optional: true, required: false
  private _extensibleAttributes = new IpamdnsproviderprofileInfobloxProfileExtensibleAttributesList(this, "extensible_attributes", false);
  public get extensibleAttributes() {
    return this._extensibleAttributes;
  }
  public putExtensibleAttributes(value: IpamdnsproviderprofileInfobloxProfileExtensibleAttributes[] | cdktf.IResolvable) {
    this._extensibleAttributes.internalValue = value;
  }
  public resetExtensibleAttributes() {
    this._extensibleAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensibleAttributesInput() {
    return this._extensibleAttributes.internalValue;
  }

  // ip6_address - computed: false, optional: true, required: false
  private _ip6Address = new IpamdnsproviderprofileInfobloxProfileIp6AddressList(this, "ip6_address", true);
  public get ip6Address() {
    return this._ip6Address;
  }
  public putIp6Address(value: IpamdnsproviderprofileInfobloxProfileIp6Address[] | cdktf.IResolvable) {
    this._ip6Address.internalValue = value;
  }
  public resetIp6Address() {
    this._ip6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address.internalValue;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new IpamdnsproviderprofileInfobloxProfileIpAddressList(this, "ip_address", true);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: IpamdnsproviderprofileInfobloxProfileIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }

  // usable_alloc_subnets - computed: false, optional: true, required: false
  private _usableAllocSubnets = new IpamdnsproviderprofileInfobloxProfileUsableAllocSubnetsList(this, "usable_alloc_subnets", false);
  public get usableAllocSubnets() {
    return this._usableAllocSubnets;
  }
  public putUsableAllocSubnets(value: IpamdnsproviderprofileInfobloxProfileUsableAllocSubnets[] | cdktf.IResolvable) {
    this._usableAllocSubnets.internalValue = value;
  }
  public resetUsableAllocSubnets() {
    this._usableAllocSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableAllocSubnetsInput() {
    return this._usableAllocSubnets.internalValue;
  }
}

export class IpamdnsproviderprofileInfobloxProfileList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInfobloxProfile[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInfobloxProfileOutputReference {
    return new IpamdnsproviderprofileInfobloxProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInternalProfileDnsServiceDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#domain_name Ipamdnsproviderprofile#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#pass_through Ipamdnsproviderprofile#pass_through}
  */
  readonly passThrough?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#record_ttl Ipamdnsproviderprofile#record_ttl}
  */
  readonly recordTtl?: string;
}

export function ipamdnsproviderprofileInternalProfileDnsServiceDomainToTerraform(struct?: IpamdnsproviderprofileInternalProfileDnsServiceDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    pass_through: cdktf.stringToTerraform(struct!.passThrough),
    record_ttl: cdktf.stringToTerraform(struct!.recordTtl),
  }
}


export function ipamdnsproviderprofileInternalProfileDnsServiceDomainToHclTerraform(struct?: IpamdnsproviderprofileInternalProfileDnsServiceDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_through: {
      value: cdktf.stringToHclTerraform(struct!.passThrough),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_ttl: {
      value: cdktf.stringToHclTerraform(struct!.recordTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileInternalProfileDnsServiceDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInternalProfileDnsServiceDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._passThrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThrough = this._passThrough;
    }
    if (this._recordTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTtl = this._recordTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInternalProfileDnsServiceDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._passThrough = undefined;
      this._recordTtl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._passThrough = value.passThrough;
      this._recordTtl = value.recordTtl;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // pass_through - computed: false, optional: true, required: false
  private _passThrough?: string; 
  public get passThrough() {
    return this.getStringAttribute('pass_through');
  }
  public set passThrough(value: string) {
    this._passThrough = value;
  }
  public resetPassThrough() {
    this._passThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughInput() {
    return this._passThrough;
  }

  // record_ttl - computed: true, optional: true, required: false
  private _recordTtl?: string; 
  public get recordTtl() {
    return this.getStringAttribute('record_ttl');
  }
  public set recordTtl(value: string) {
    this._recordTtl = value;
  }
  public resetRecordTtl() {
    this._recordTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTtlInput() {
    return this._recordTtl;
  }
}

export class IpamdnsproviderprofileInternalProfileDnsServiceDomainList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInternalProfileDnsServiceDomain[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInternalProfileDnsServiceDomainOutputReference {
    return new IpamdnsproviderprofileInternalProfileDnsServiceDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInternalProfileUsableNetworksLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#key Ipamdnsproviderprofile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#value Ipamdnsproviderprofile#value}
  */
  readonly value?: string;
}

export function ipamdnsproviderprofileInternalProfileUsableNetworksLabelsToTerraform(struct?: IpamdnsproviderprofileInternalProfileUsableNetworksLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ipamdnsproviderprofileInternalProfileUsableNetworksLabelsToHclTerraform(struct?: IpamdnsproviderprofileInternalProfileUsableNetworksLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileInternalProfileUsableNetworksLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInternalProfileUsableNetworksLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInternalProfileUsableNetworksLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IpamdnsproviderprofileInternalProfileUsableNetworksLabelsList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInternalProfileUsableNetworksLabels[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInternalProfileUsableNetworksLabelsOutputReference {
    return new IpamdnsproviderprofileInternalProfileUsableNetworksLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInternalProfileUsableNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#nw_ref Ipamdnsproviderprofile#nw_ref}
  */
  readonly nwRef: string;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#labels Ipamdnsproviderprofile#labels}
  */
  readonly labels?: IpamdnsproviderprofileInternalProfileUsableNetworksLabels[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileInternalProfileUsableNetworksToTerraform(struct?: IpamdnsproviderprofileInternalProfileUsableNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nw_ref: cdktf.stringToTerraform(struct!.nwRef),
    labels: cdktf.listMapper(ipamdnsproviderprofileInternalProfileUsableNetworksLabelsToTerraform, true)(struct!.labels),
  }
}


export function ipamdnsproviderprofileInternalProfileUsableNetworksToHclTerraform(struct?: IpamdnsproviderprofileInternalProfileUsableNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nw_ref: {
      value: cdktf.stringToHclTerraform(struct!.nwRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInternalProfileUsableNetworksLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "IpamdnsproviderprofileInternalProfileUsableNetworksLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileInternalProfileUsableNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInternalProfileUsableNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nwRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.nwRef = this._nwRef;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInternalProfileUsableNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nwRef = undefined;
      this._labels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nwRef = value.nwRef;
      this._labels.internalValue = value.labels;
    }
  }

  // nw_ref - computed: false, optional: false, required: true
  private _nwRef?: string; 
  public get nwRef() {
    return this.getStringAttribute('nw_ref');
  }
  public set nwRef(value: string) {
    this._nwRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nwRefInput() {
    return this._nwRef;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new IpamdnsproviderprofileInternalProfileUsableNetworksLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: IpamdnsproviderprofileInternalProfileUsableNetworksLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }
}

export class IpamdnsproviderprofileInternalProfileUsableNetworksList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInternalProfileUsableNetworks[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInternalProfileUsableNetworksOutputReference {
    return new IpamdnsproviderprofileInternalProfileUsableNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileInternalProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#dns_virtualservice_ref Ipamdnsproviderprofile#dns_virtualservice_ref}
  */
  readonly dnsVirtualserviceRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#ttl Ipamdnsproviderprofile#ttl}
  */
  readonly ttl?: string;
  /**
  * dns_service_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#dns_service_domain Ipamdnsproviderprofile#dns_service_domain}
  */
  readonly dnsServiceDomain?: IpamdnsproviderprofileInternalProfileDnsServiceDomain[] | cdktf.IResolvable;
  /**
  * usable_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_networks Ipamdnsproviderprofile#usable_networks}
  */
  readonly usableNetworks?: IpamdnsproviderprofileInternalProfileUsableNetworks[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileInternalProfileToTerraform(struct?: IpamdnsproviderprofileInternalProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_virtualservice_ref: cdktf.stringToTerraform(struct!.dnsVirtualserviceRef),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    dns_service_domain: cdktf.listMapper(ipamdnsproviderprofileInternalProfileDnsServiceDomainToTerraform, true)(struct!.dnsServiceDomain),
    usable_networks: cdktf.listMapper(ipamdnsproviderprofileInternalProfileUsableNetworksToTerraform, true)(struct!.usableNetworks),
  }
}


export function ipamdnsproviderprofileInternalProfileToHclTerraform(struct?: IpamdnsproviderprofileInternalProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_virtualservice_ref: {
      value: cdktf.stringToHclTerraform(struct!.dnsVirtualserviceRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_service_domain: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInternalProfileDnsServiceDomainToHclTerraform, true)(struct!.dnsServiceDomain),
      isBlock: true,
      type: "list",
      storageClassType: "IpamdnsproviderprofileInternalProfileDnsServiceDomainList",
    },
    usable_networks: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileInternalProfileUsableNetworksToHclTerraform, true)(struct!.usableNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "IpamdnsproviderprofileInternalProfileUsableNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileInternalProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileInternalProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsVirtualserviceRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsVirtualserviceRef = this._dnsVirtualserviceRef;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._dnsServiceDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServiceDomain = this._dnsServiceDomain?.internalValue;
    }
    if (this._usableNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableNetworks = this._usableNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileInternalProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsVirtualserviceRef = undefined;
      this._ttl = undefined;
      this._dnsServiceDomain.internalValue = undefined;
      this._usableNetworks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsVirtualserviceRef = value.dnsVirtualserviceRef;
      this._ttl = value.ttl;
      this._dnsServiceDomain.internalValue = value.dnsServiceDomain;
      this._usableNetworks.internalValue = value.usableNetworks;
    }
  }

  // dns_virtualservice_ref - computed: true, optional: true, required: false
  private _dnsVirtualserviceRef?: string; 
  public get dnsVirtualserviceRef() {
    return this.getStringAttribute('dns_virtualservice_ref');
  }
  public set dnsVirtualserviceRef(value: string) {
    this._dnsVirtualserviceRef = value;
  }
  public resetDnsVirtualserviceRef() {
    this._dnsVirtualserviceRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVirtualserviceRefInput() {
    return this._dnsVirtualserviceRef;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // dns_service_domain - computed: false, optional: true, required: false
  private _dnsServiceDomain = new IpamdnsproviderprofileInternalProfileDnsServiceDomainList(this, "dns_service_domain", false);
  public get dnsServiceDomain() {
    return this._dnsServiceDomain;
  }
  public putDnsServiceDomain(value: IpamdnsproviderprofileInternalProfileDnsServiceDomain[] | cdktf.IResolvable) {
    this._dnsServiceDomain.internalValue = value;
  }
  public resetDnsServiceDomain() {
    this._dnsServiceDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceDomainInput() {
    return this._dnsServiceDomain.internalValue;
  }

  // usable_networks - computed: false, optional: true, required: false
  private _usableNetworks = new IpamdnsproviderprofileInternalProfileUsableNetworksList(this, "usable_networks", false);
  public get usableNetworks() {
    return this._usableNetworks;
  }
  public putUsableNetworks(value: IpamdnsproviderprofileInternalProfileUsableNetworks[] | cdktf.IResolvable) {
    this._usableNetworks.internalValue = value;
  }
  public resetUsableNetworks() {
    this._usableNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableNetworksInput() {
    return this._usableNetworks.internalValue;
  }
}

export class IpamdnsproviderprofileInternalProfileList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileInternalProfile[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileInternalProfileOutputReference {
    return new IpamdnsproviderprofileInternalProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#key Ipamdnsproviderprofile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#values Ipamdnsproviderprofile#values}
  */
  readonly values?: string[];
}

export function ipamdnsproviderprofileMarkersToTerraform(struct?: IpamdnsproviderprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ipamdnsproviderprofileMarkersToHclTerraform(struct?: IpamdnsproviderprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class IpamdnsproviderprofileMarkersList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileMarkers[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileMarkersOutputReference {
    return new IpamdnsproviderprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileOciProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#cloud_credentials_ref Ipamdnsproviderprofile#cloud_credentials_ref}
  */
  readonly cloudCredentialsRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#region Ipamdnsproviderprofile#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#tenancy Ipamdnsproviderprofile#tenancy}
  */
  readonly tenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#vcn_compartment_id Ipamdnsproviderprofile#vcn_compartment_id}
  */
  readonly vcnCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#vcn_id Ipamdnsproviderprofile#vcn_id}
  */
  readonly vcnId?: string;
}

export function ipamdnsproviderprofileOciProfileToTerraform(struct?: IpamdnsproviderprofileOciProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_credentials_ref: cdktf.stringToTerraform(struct!.cloudCredentialsRef),
    region: cdktf.stringToTerraform(struct!.region),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
    vcn_compartment_id: cdktf.stringToTerraform(struct!.vcnCompartmentId),
    vcn_id: cdktf.stringToTerraform(struct!.vcnId),
  }
}


export function ipamdnsproviderprofileOciProfileToHclTerraform(struct?: IpamdnsproviderprofileOciProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_credentials_ref: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentialsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy: {
      value: cdktf.stringToHclTerraform(struct!.tenancy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcn_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.vcnCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcn_id: {
      value: cdktf.stringToHclTerraform(struct!.vcnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileOciProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileOciProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCredentialsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentialsRef = this._cloudCredentialsRef;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tenancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancy = this._tenancy;
    }
    if (this._vcnCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcnCompartmentId = this._vcnCompartmentId;
    }
    if (this._vcnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcnId = this._vcnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileOciProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudCredentialsRef = undefined;
      this._region = undefined;
      this._tenancy = undefined;
      this._vcnCompartmentId = undefined;
      this._vcnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudCredentialsRef = value.cloudCredentialsRef;
      this._region = value.region;
      this._tenancy = value.tenancy;
      this._vcnCompartmentId = value.vcnCompartmentId;
      this._vcnId = value.vcnId;
    }
  }

  // cloud_credentials_ref - computed: true, optional: true, required: false
  private _cloudCredentialsRef?: string; 
  public get cloudCredentialsRef() {
    return this.getStringAttribute('cloud_credentials_ref');
  }
  public set cloudCredentialsRef(value: string) {
    this._cloudCredentialsRef = value;
  }
  public resetCloudCredentialsRef() {
    this._cloudCredentialsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsRefInput() {
    return this._cloudCredentialsRef;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tenancy - computed: true, optional: true, required: false
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }

  // vcn_compartment_id - computed: true, optional: true, required: false
  private _vcnCompartmentId?: string; 
  public get vcnCompartmentId() {
    return this.getStringAttribute('vcn_compartment_id');
  }
  public set vcnCompartmentId(value: string) {
    this._vcnCompartmentId = value;
  }
  public resetVcnCompartmentId() {
    this._vcnCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnCompartmentIdInput() {
    return this._vcnCompartmentId;
  }

  // vcn_id - computed: true, optional: true, required: false
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  public resetVcnId() {
    this._vcnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }
}

export class IpamdnsproviderprofileOciProfileList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileOciProfile[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileOciProfileOutputReference {
    return new IpamdnsproviderprofileOciProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileOpenstackProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#keystone_host Ipamdnsproviderprofile#keystone_host}
  */
  readonly keystoneHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#password Ipamdnsproviderprofile#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#region Ipamdnsproviderprofile#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#tenant Ipamdnsproviderprofile#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#username Ipamdnsproviderprofile#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#vip_network_name Ipamdnsproviderprofile#vip_network_name}
  */
  readonly vipNetworkName?: string;
}

export function ipamdnsproviderprofileOpenstackProfileToTerraform(struct?: IpamdnsproviderprofileOpenstackProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keystone_host: cdktf.stringToTerraform(struct!.keystoneHost),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    username: cdktf.stringToTerraform(struct!.username),
    vip_network_name: cdktf.stringToTerraform(struct!.vipNetworkName),
  }
}


export function ipamdnsproviderprofileOpenstackProfileToHclTerraform(struct?: IpamdnsproviderprofileOpenstackProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keystone_host: {
      value: cdktf.stringToHclTerraform(struct!.keystoneHost),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
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
    vip_network_name: {
      value: cdktf.stringToHclTerraform(struct!.vipNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileOpenstackProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileOpenstackProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keystoneHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneHost = this._keystoneHost;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vipNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipNetworkName = this._vipNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileOpenstackProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keystoneHost = undefined;
      this._password = undefined;
      this._region = undefined;
      this._tenant = undefined;
      this._username = undefined;
      this._vipNetworkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keystoneHost = value.keystoneHost;
      this._password = value.password;
      this._region = value.region;
      this._tenant = value.tenant;
      this._username = value.username;
      this._vipNetworkName = value.vipNetworkName;
    }
  }

  // keystone_host - computed: true, optional: true, required: false
  private _keystoneHost?: string; 
  public get keystoneHost() {
    return this.getStringAttribute('keystone_host');
  }
  public set keystoneHost(value: string) {
    this._keystoneHost = value;
  }
  public resetKeystoneHost() {
    this._keystoneHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneHostInput() {
    return this._keystoneHost;
  }

  // password - computed: true, optional: true, required: false
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tenant - computed: true, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
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

  // vip_network_name - computed: true, optional: true, required: false
  private _vipNetworkName?: string; 
  public get vipNetworkName() {
    return this.getStringAttribute('vip_network_name');
  }
  public set vipNetworkName(value: string) {
    this._vipNetworkName = value;
  }
  public resetVipNetworkName() {
    this._vipNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipNetworkNameInput() {
    return this._vipNetworkName;
  }
}

export class IpamdnsproviderprofileOpenstackProfileList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileOpenstackProfile[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileOpenstackProfileOutputReference {
    return new IpamdnsproviderprofileOpenstackProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#host Ipamdnsproviderprofile#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#password Ipamdnsproviderprofile#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#port Ipamdnsproviderprofile#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#username Ipamdnsproviderprofile#username}
  */
  readonly username?: string;
}

export function ipamdnsproviderprofileProxyConfigurationToTerraform(struct?: IpamdnsproviderprofileProxyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function ipamdnsproviderprofileProxyConfigurationToHclTerraform(struct?: IpamdnsproviderprofileProxyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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

export class IpamdnsproviderprofileProxyConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileProxyConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileProxyConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: true, optional: true, required: false
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
}

export class IpamdnsproviderprofileProxyConfigurationList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileProxyConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileProxyConfigurationOutputReference {
    return new IpamdnsproviderprofileProxyConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileTencentProfileZones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#availability_zone Ipamdnsproviderprofile#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_subnet_id Ipamdnsproviderprofile#usable_subnet_id}
  */
  readonly usableSubnetId: string;
}

export function ipamdnsproviderprofileTencentProfileZonesToTerraform(struct?: IpamdnsproviderprofileTencentProfileZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    usable_subnet_id: cdktf.stringToTerraform(struct!.usableSubnetId),
  }
}


export function ipamdnsproviderprofileTencentProfileZonesToHclTerraform(struct?: IpamdnsproviderprofileTencentProfileZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usable_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.usableSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileTencentProfileZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileTencentProfileZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._usableSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableSubnetId = this._usableSubnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileTencentProfileZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._usableSubnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._usableSubnetId = value.usableSubnetId;
    }
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // usable_subnet_id - computed: false, optional: false, required: true
  private _usableSubnetId?: string; 
  public get usableSubnetId() {
    return this.getStringAttribute('usable_subnet_id');
  }
  public set usableSubnetId(value: string) {
    this._usableSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usableSubnetIdInput() {
    return this._usableSubnetId;
  }
}

export class IpamdnsproviderprofileTencentProfileZonesList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileTencentProfileZones[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileTencentProfileZonesOutputReference {
    return new IpamdnsproviderprofileTencentProfileZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamdnsproviderprofileTencentProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#cloud_credentials_ref Ipamdnsproviderprofile#cloud_credentials_ref}
  */
  readonly cloudCredentialsRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#region Ipamdnsproviderprofile#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#usable_subnet_ids Ipamdnsproviderprofile#usable_subnet_ids}
  */
  readonly usableSubnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#vpc_id Ipamdnsproviderprofile#vpc_id}
  */
  readonly vpcId: string;
  /**
  * zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#zones Ipamdnsproviderprofile#zones}
  */
  readonly zones?: IpamdnsproviderprofileTencentProfileZones[] | cdktf.IResolvable;
}

export function ipamdnsproviderprofileTencentProfileToTerraform(struct?: IpamdnsproviderprofileTencentProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_credentials_ref: cdktf.stringToTerraform(struct!.cloudCredentialsRef),
    region: cdktf.stringToTerraform(struct!.region),
    usable_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usableSubnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    zones: cdktf.listMapper(ipamdnsproviderprofileTencentProfileZonesToTerraform, true)(struct!.zones),
  }
}


export function ipamdnsproviderprofileTencentProfileToHclTerraform(struct?: IpamdnsproviderprofileTencentProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_credentials_ref: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentialsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usable_subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usableSubnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(ipamdnsproviderprofileTencentProfileZonesToHclTerraform, true)(struct!.zones),
      isBlock: true,
      type: "list",
      storageClassType: "IpamdnsproviderprofileTencentProfileZonesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamdnsproviderprofileTencentProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamdnsproviderprofileTencentProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCredentialsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentialsRef = this._cloudCredentialsRef;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._usableSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableSubnetIds = this._usableSubnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._zones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamdnsproviderprofileTencentProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudCredentialsRef = undefined;
      this._region = undefined;
      this._usableSubnetIds = undefined;
      this._vpcId = undefined;
      this._zones.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudCredentialsRef = value.cloudCredentialsRef;
      this._region = value.region;
      this._usableSubnetIds = value.usableSubnetIds;
      this._vpcId = value.vpcId;
      this._zones.internalValue = value.zones;
    }
  }

  // cloud_credentials_ref - computed: true, optional: true, required: false
  private _cloudCredentialsRef?: string; 
  public get cloudCredentialsRef() {
    return this.getStringAttribute('cloud_credentials_ref');
  }
  public set cloudCredentialsRef(value: string) {
    this._cloudCredentialsRef = value;
  }
  public resetCloudCredentialsRef() {
    this._cloudCredentialsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsRefInput() {
    return this._cloudCredentialsRef;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // usable_subnet_ids - computed: false, optional: true, required: false
  private _usableSubnetIds?: string[]; 
  public get usableSubnetIds() {
    return this.getListAttribute('usable_subnet_ids');
  }
  public set usableSubnetIds(value: string[]) {
    this._usableSubnetIds = value;
  }
  public resetUsableSubnetIds() {
    this._usableSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableSubnetIdsInput() {
    return this._usableSubnetIds;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // zones - computed: false, optional: true, required: false
  private _zones = new IpamdnsproviderprofileTencentProfileZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
  public putZones(value: IpamdnsproviderprofileTencentProfileZones[] | cdktf.IResolvable) {
    this._zones.internalValue = value;
  }
  public resetZones() {
    this._zones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones.internalValue;
  }
}

export class IpamdnsproviderprofileTencentProfileList extends cdktf.ComplexList {
  public internalValue? : IpamdnsproviderprofileTencentProfile[] | cdktf.IResolvable

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
  public get(index: number): IpamdnsproviderprofileTencentProfileOutputReference {
    return new IpamdnsproviderprofileTencentProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile avi_ipamdnsproviderprofile}
*/
export class Ipamdnsproviderprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_ipamdnsproviderprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipamdnsproviderprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipamdnsproviderprofile to import
  * @param importFromId The id of the existing Ipamdnsproviderprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipamdnsproviderprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_ipamdnsproviderprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/ipamdnsproviderprofile avi_ipamdnsproviderprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpamdnsproviderprofileConfig
  */
  public constructor(scope: Construct, id: string, config: IpamdnsproviderprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_ipamdnsproviderprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocateIpInVrf = config.allocateIpInVrf;
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._type = config.type;
    this._uuid = config.uuid;
    this._awsProfile.internalValue = config.awsProfile;
    this._azureProfile.internalValue = config.azureProfile;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._customProfile.internalValue = config.customProfile;
    this._gcpProfile.internalValue = config.gcpProfile;
    this._infobloxProfile.internalValue = config.infobloxProfile;
    this._internalProfile.internalValue = config.internalProfile;
    this._markers.internalValue = config.markers;
    this._ociProfile.internalValue = config.ociProfile;
    this._openstackProfile.internalValue = config.openstackProfile;
    this._proxyConfiguration.internalValue = config.proxyConfiguration;
    this._tencentProfile.internalValue = config.tencentProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_ip_in_vrf - computed: false, optional: true, required: false
  private _allocateIpInVrf?: string; 
  public get allocateIpInVrf() {
    return this.getStringAttribute('allocate_ip_in_vrf');
  }
  public set allocateIpInVrf(value: string) {
    this._allocateIpInVrf = value;
  }
  public resetAllocateIpInVrf() {
    this._allocateIpInVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateIpInVrfInput() {
    return this._allocateIpInVrf;
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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // aws_profile - computed: false, optional: true, required: false
  private _awsProfile = new IpamdnsproviderprofileAwsProfileList(this, "aws_profile", true);
  public get awsProfile() {
    return this._awsProfile;
  }
  public putAwsProfile(value: IpamdnsproviderprofileAwsProfile[] | cdktf.IResolvable) {
    this._awsProfile.internalValue = value;
  }
  public resetAwsProfile() {
    this._awsProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsProfileInput() {
    return this._awsProfile.internalValue;
  }

  // azure_profile - computed: false, optional: true, required: false
  private _azureProfile = new IpamdnsproviderprofileAzureProfileList(this, "azure_profile", true);
  public get azureProfile() {
    return this._azureProfile;
  }
  public putAzureProfile(value: IpamdnsproviderprofileAzureProfile[] | cdktf.IResolvable) {
    this._azureProfile.internalValue = value;
  }
  public resetAzureProfile() {
    this._azureProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureProfileInput() {
    return this._azureProfile.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new IpamdnsproviderprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: IpamdnsproviderprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // custom_profile - computed: false, optional: true, required: false
  private _customProfile = new IpamdnsproviderprofileCustomProfileList(this, "custom_profile", true);
  public get customProfile() {
    return this._customProfile;
  }
  public putCustomProfile(value: IpamdnsproviderprofileCustomProfile[] | cdktf.IResolvable) {
    this._customProfile.internalValue = value;
  }
  public resetCustomProfile() {
    this._customProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProfileInput() {
    return this._customProfile.internalValue;
  }

  // gcp_profile - computed: false, optional: true, required: false
  private _gcpProfile = new IpamdnsproviderprofileGcpProfileList(this, "gcp_profile", true);
  public get gcpProfile() {
    return this._gcpProfile;
  }
  public putGcpProfile(value: IpamdnsproviderprofileGcpProfile[] | cdktf.IResolvable) {
    this._gcpProfile.internalValue = value;
  }
  public resetGcpProfile() {
    this._gcpProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProfileInput() {
    return this._gcpProfile.internalValue;
  }

  // infoblox_profile - computed: false, optional: true, required: false
  private _infobloxProfile = new IpamdnsproviderprofileInfobloxProfileList(this, "infoblox_profile", true);
  public get infobloxProfile() {
    return this._infobloxProfile;
  }
  public putInfobloxProfile(value: IpamdnsproviderprofileInfobloxProfile[] | cdktf.IResolvable) {
    this._infobloxProfile.internalValue = value;
  }
  public resetInfobloxProfile() {
    this._infobloxProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infobloxProfileInput() {
    return this._infobloxProfile.internalValue;
  }

  // internal_profile - computed: false, optional: true, required: false
  private _internalProfile = new IpamdnsproviderprofileInternalProfileList(this, "internal_profile", true);
  public get internalProfile() {
    return this._internalProfile;
  }
  public putInternalProfile(value: IpamdnsproviderprofileInternalProfile[] | cdktf.IResolvable) {
    this._internalProfile.internalValue = value;
  }
  public resetInternalProfile() {
    this._internalProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalProfileInput() {
    return this._internalProfile.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new IpamdnsproviderprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: IpamdnsproviderprofileMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // oci_profile - computed: false, optional: true, required: false
  private _ociProfile = new IpamdnsproviderprofileOciProfileList(this, "oci_profile", true);
  public get ociProfile() {
    return this._ociProfile;
  }
  public putOciProfile(value: IpamdnsproviderprofileOciProfile[] | cdktf.IResolvable) {
    this._ociProfile.internalValue = value;
  }
  public resetOciProfile() {
    this._ociProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociProfileInput() {
    return this._ociProfile.internalValue;
  }

  // openstack_profile - computed: false, optional: true, required: false
  private _openstackProfile = new IpamdnsproviderprofileOpenstackProfileList(this, "openstack_profile", true);
  public get openstackProfile() {
    return this._openstackProfile;
  }
  public putOpenstackProfile(value: IpamdnsproviderprofileOpenstackProfile[] | cdktf.IResolvable) {
    this._openstackProfile.internalValue = value;
  }
  public resetOpenstackProfile() {
    this._openstackProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackProfileInput() {
    return this._openstackProfile.internalValue;
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration = new IpamdnsproviderprofileProxyConfigurationList(this, "proxy_configuration", true);
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public putProxyConfiguration(value: IpamdnsproviderprofileProxyConfiguration[] | cdktf.IResolvable) {
    this._proxyConfiguration.internalValue = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration.internalValue;
  }

  // tencent_profile - computed: false, optional: true, required: false
  private _tencentProfile = new IpamdnsproviderprofileTencentProfileList(this, "tencent_profile", true);
  public get tencentProfile() {
    return this._tencentProfile;
  }
  public putTencentProfile(value: IpamdnsproviderprofileTencentProfile[] | cdktf.IResolvable) {
    this._tencentProfile.internalValue = value;
  }
  public resetTencentProfile() {
    this._tencentProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tencentProfileInput() {
    return this._tencentProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocate_ip_in_vrf: cdktf.stringToTerraform(this._allocateIpInVrf),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      aws_profile: cdktf.listMapper(ipamdnsproviderprofileAwsProfileToTerraform, true)(this._awsProfile.internalValue),
      azure_profile: cdktf.listMapper(ipamdnsproviderprofileAzureProfileToTerraform, true)(this._azureProfile.internalValue),
      configpb_attributes: cdktf.listMapper(ipamdnsproviderprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      custom_profile: cdktf.listMapper(ipamdnsproviderprofileCustomProfileToTerraform, true)(this._customProfile.internalValue),
      gcp_profile: cdktf.listMapper(ipamdnsproviderprofileGcpProfileToTerraform, true)(this._gcpProfile.internalValue),
      infoblox_profile: cdktf.listMapper(ipamdnsproviderprofileInfobloxProfileToTerraform, true)(this._infobloxProfile.internalValue),
      internal_profile: cdktf.listMapper(ipamdnsproviderprofileInternalProfileToTerraform, true)(this._internalProfile.internalValue),
      markers: cdktf.listMapper(ipamdnsproviderprofileMarkersToTerraform, true)(this._markers.internalValue),
      oci_profile: cdktf.listMapper(ipamdnsproviderprofileOciProfileToTerraform, true)(this._ociProfile.internalValue),
      openstack_profile: cdktf.listMapper(ipamdnsproviderprofileOpenstackProfileToTerraform, true)(this._openstackProfile.internalValue),
      proxy_configuration: cdktf.listMapper(ipamdnsproviderprofileProxyConfigurationToTerraform, true)(this._proxyConfiguration.internalValue),
      tencent_profile: cdktf.listMapper(ipamdnsproviderprofileTencentProfileToTerraform, true)(this._tencentProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_ip_in_vrf: {
        value: cdktf.stringToHclTerraform(this._allocateIpInVrf),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_profile: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileAwsProfileToHclTerraform, true)(this._awsProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileAwsProfileList",
      },
      azure_profile: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileAzureProfileToHclTerraform, true)(this._azureProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileAzureProfileList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileConfigpbAttributesList",
      },
      custom_profile: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileCustomProfileToHclTerraform, true)(this._customProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileCustomProfileList",
      },
      gcp_profile: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileGcpProfileToHclTerraform, true)(this._gcpProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileGcpProfileList",
      },
      infoblox_profile: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileInfobloxProfileToHclTerraform, true)(this._infobloxProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileInfobloxProfileList",
      },
      internal_profile: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileInternalProfileToHclTerraform, true)(this._internalProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileInternalProfileList",
      },
      markers: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamdnsproviderprofileMarkersList",
      },
      oci_profile: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileOciProfileToHclTerraform, true)(this._ociProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileOciProfileList",
      },
      openstack_profile: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileOpenstackProfileToHclTerraform, true)(this._openstackProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileOpenstackProfileList",
      },
      proxy_configuration: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileProxyConfigurationToHclTerraform, true)(this._proxyConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileProxyConfigurationList",
      },
      tencent_profile: {
        value: cdktf.listMapperHcl(ipamdnsproviderprofileTencentProfileToHclTerraform, true)(this._tencentProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamdnsproviderprofileTencentProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
