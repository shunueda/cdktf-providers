// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixImageVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Image configuration for AWS EC2 image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version#aws_ec2_image_specs DataCitrixImageVersion#aws_ec2_image_specs}
  */
  readonly awsEc2ImageSpecs?: DataCitrixImageVersionAwsEc2ImageSpecs;
  /**
  * The id of the image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version#id DataCitrixImageVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id of the image definition to associate this image version with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version#image_definition DataCitrixImageVersion#image_definition}
  */
  readonly imageDefinition: string;
  /**
  * Timeout in minutes for the long-running jobs in image definition resource's create, delete operation(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version#timeout DataCitrixImageVersion#timeout}
  */
  readonly timeout?: DataCitrixImageVersionTimeout;
  /**
  * The version number of the image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version#version_number DataCitrixImageVersion#version_number}
  */
  readonly versionNumber?: number;
}
export interface DataCitrixImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile {
}

export function dataCitrixImageVersionAmazonWorkspacesCoreImageSpecsMachineProfileToTerraform(struct?: DataCitrixImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixImageVersionAmazonWorkspacesCoreImageSpecsMachineProfileToHclTerraform(struct?: DataCitrixImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixImageVersionAmazonWorkspacesCoreImageSpecsMachineProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_template_id - computed: true, optional: false, required: false
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }

  // launch_template_name - computed: true, optional: false, required: false
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }

  // launch_template_version - computed: true, optional: false, required: false
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }

  // vm_id - computed: true, optional: false, required: false
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }

  // vm_name - computed: true, optional: false, required: false
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }

  // vm_region_az - computed: true, optional: false, required: false
  public get vmRegionAz() {
    return this.getStringAttribute('vm_region_az');
  }
}
export interface DataCitrixImageVersionAmazonWorkspacesCoreImageSpecs {
}

export function dataCitrixImageVersionAmazonWorkspacesCoreImageSpecsToTerraform(struct?: DataCitrixImageVersionAmazonWorkspacesCoreImageSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixImageVersionAmazonWorkspacesCoreImageSpecsToHclTerraform(struct?: DataCitrixImageVersionAmazonWorkspacesCoreImageSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixImageVersionAmazonWorkspacesCoreImageSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixImageVersionAmazonWorkspacesCoreImageSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixImageVersionAmazonWorkspacesCoreImageSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_ami - computed: true, optional: false, required: false
  public get imageAmi() {
    return this.getStringAttribute('image_ami');
  }

  // machine_profile - computed: true, optional: false, required: false
  private _machineProfile = new DataCitrixImageVersionAmazonWorkspacesCoreImageSpecsMachineProfileOutputReference(this, "machine_profile");
  public get machineProfile() {
    return this._machineProfile;
  }

  // master_image - computed: true, optional: false, required: false
  public get masterImage() {
    return this.getStringAttribute('master_image');
  }

  // service_offering - computed: true, optional: false, required: false
  public get serviceOffering() {
    return this.getStringAttribute('service_offering');
  }
}
export interface DataCitrixImageVersionAwsEc2ImageSpecsMachineProfile {
}

export function dataCitrixImageVersionAwsEc2ImageSpecsMachineProfileToTerraform(struct?: DataCitrixImageVersionAwsEc2ImageSpecsMachineProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixImageVersionAwsEc2ImageSpecsMachineProfileToHclTerraform(struct?: DataCitrixImageVersionAwsEc2ImageSpecsMachineProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixImageVersionAwsEc2ImageSpecsMachineProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixImageVersionAwsEc2ImageSpecsMachineProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixImageVersionAwsEc2ImageSpecsMachineProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_template_id - computed: true, optional: false, required: false
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }

  // launch_template_name - computed: true, optional: false, required: false
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }

  // launch_template_version - computed: true, optional: false, required: false
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }

  // vm_id - computed: true, optional: false, required: false
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }

  // vm_name - computed: true, optional: false, required: false
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }

  // vm_region_az - computed: true, optional: false, required: false
  public get vmRegionAz() {
    return this.getStringAttribute('vm_region_az');
  }
}
export interface DataCitrixImageVersionAwsEc2ImageSpecs {
}

export function dataCitrixImageVersionAwsEc2ImageSpecsToTerraform(struct?: DataCitrixImageVersionAwsEc2ImageSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixImageVersionAwsEc2ImageSpecsToHclTerraform(struct?: DataCitrixImageVersionAwsEc2ImageSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixImageVersionAwsEc2ImageSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixImageVersionAwsEc2ImageSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixImageVersionAwsEc2ImageSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // image_ami - computed: true, optional: false, required: false
  public get imageAmi() {
    return this.getStringAttribute('image_ami');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // machine_profile - computed: true, optional: false, required: false
  private _machineProfile = new DataCitrixImageVersionAwsEc2ImageSpecsMachineProfileOutputReference(this, "machine_profile");
  public get machineProfile() {
    return this._machineProfile;
  }

  // service_offering - computed: true, optional: false, required: false
  public get serviceOffering() {
    return this.getStringAttribute('service_offering');
  }
}
export interface DataCitrixImageVersionAzureImageSpecsDiskEncryptionSet {
}

export function dataCitrixImageVersionAzureImageSpecsDiskEncryptionSetToTerraform(struct?: DataCitrixImageVersionAzureImageSpecsDiskEncryptionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixImageVersionAzureImageSpecsDiskEncryptionSetToHclTerraform(struct?: DataCitrixImageVersionAzureImageSpecsDiskEncryptionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixImageVersionAzureImageSpecsDiskEncryptionSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixImageVersionAzureImageSpecsDiskEncryptionSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixImageVersionAzureImageSpecsDiskEncryptionSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_encryption_set_name - computed: true, optional: false, required: false
  public get diskEncryptionSetName() {
    return this.getStringAttribute('disk_encryption_set_name');
  }

  // disk_encryption_set_resource_group - computed: true, optional: false, required: false
  public get diskEncryptionSetResourceGroup() {
    return this.getStringAttribute('disk_encryption_set_resource_group');
  }
}
export interface DataCitrixImageVersionAzureImageSpecsMachineProfile {
}

export function dataCitrixImageVersionAzureImageSpecsMachineProfileToTerraform(struct?: DataCitrixImageVersionAzureImageSpecsMachineProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixImageVersionAzureImageSpecsMachineProfileToHclTerraform(struct?: DataCitrixImageVersionAzureImageSpecsMachineProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixImageVersionAzureImageSpecsMachineProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixImageVersionAzureImageSpecsMachineProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixImageVersionAzureImageSpecsMachineProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // machine_profile_resource_group - computed: true, optional: false, required: false
  public get machineProfileResourceGroup() {
    return this.getStringAttribute('machine_profile_resource_group');
  }

  // machine_profile_template_spec_name - computed: true, optional: false, required: false
  public get machineProfileTemplateSpecName() {
    return this.getStringAttribute('machine_profile_template_spec_name');
  }

  // machine_profile_template_spec_version - computed: true, optional: false, required: false
  public get machineProfileTemplateSpecVersion() {
    return this.getStringAttribute('machine_profile_template_spec_version');
  }

  // machine_profile_vm_name - computed: true, optional: false, required: false
  public get machineProfileVmName() {
    return this.getStringAttribute('machine_profile_vm_name');
  }
}
export interface DataCitrixImageVersionAzureImageSpecs {
}

export function dataCitrixImageVersionAzureImageSpecsToTerraform(struct?: DataCitrixImageVersionAzureImageSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixImageVersionAzureImageSpecsToHclTerraform(struct?: DataCitrixImageVersionAzureImageSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixImageVersionAzureImageSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixImageVersionAzureImageSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixImageVersionAzureImageSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_encryption_set - computed: true, optional: false, required: false
  private _diskEncryptionSet = new DataCitrixImageVersionAzureImageSpecsDiskEncryptionSetOutputReference(this, "disk_encryption_set");
  public get diskEncryptionSet() {
    return this._diskEncryptionSet;
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // machine_profile - computed: true, optional: false, required: false
  private _machineProfile = new DataCitrixImageVersionAzureImageSpecsMachineProfileOutputReference(this, "machine_profile");
  public get machineProfile() {
    return this._machineProfile;
  }

  // service_offering - computed: true, optional: false, required: false
  public get serviceOffering() {
    return this.getStringAttribute('service_offering');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}
export interface DataCitrixImageVersionNetworkMapping {
  /**
  * The name of the virtual network that the device should be attached to. This must be a subnet within a Virtual Private Cloud item in the resource pool to which the Machine Catalog is associated.<br />For AWS, please specify the network mask of the network you want to use within the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version#network DataCitrixImageVersion#network}
  */
  readonly network: string;
  /**
  * Name or Id of the network device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version#network_device DataCitrixImageVersion#network_device}
  */
  readonly networkDevice: string;
}

export function dataCitrixImageVersionNetworkMappingToTerraform(struct?: DataCitrixImageVersionNetworkMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    network_device: cdktf.stringToTerraform(struct!.networkDevice),
  }
}


export function dataCitrixImageVersionNetworkMappingToHclTerraform(struct?: DataCitrixImageVersionNetworkMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_device: {
      value: cdktf.stringToHclTerraform(struct!.networkDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCitrixImageVersionNetworkMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCitrixImageVersionNetworkMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDevice = this._networkDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixImageVersionNetworkMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._networkDevice = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._networkDevice = value.networkDevice;
    }
  }

  // network - computed: true, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_device - computed: true, optional: false, required: true
  private _networkDevice?: string; 
  public get networkDevice() {
    return this.getStringAttribute('network_device');
  }
  public set networkDevice(value: string) {
    this._networkDevice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceInput() {
    return this._networkDevice;
  }
}

export class DataCitrixImageVersionNetworkMappingList extends cdktf.ComplexList {
  public internalValue? : DataCitrixImageVersionNetworkMapping[] | cdktf.IResolvable

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
  public get(index: number): DataCitrixImageVersionNetworkMappingOutputReference {
    return new DataCitrixImageVersionNetworkMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCitrixImageVersionTimeout {
  /**
  * Timeout in minutes for the long-running jobs in create operation. Defaults to 10. Minimum value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version#create DataCitrixImageVersion#create}
  */
  readonly create?: number;
  /**
  * Timeout in minutes for the long-running jobs in delete operation. Defaults to 10. Minimum value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version#delete DataCitrixImageVersion#delete}
  */
  readonly delete?: number;
}

export function dataCitrixImageVersionTimeoutToTerraform(struct?: DataCitrixImageVersionTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.numberToTerraform(struct!.create),
    delete: cdktf.numberToTerraform(struct!.delete),
  }
}


export function dataCitrixImageVersionTimeoutToHclTerraform(struct?: DataCitrixImageVersionTimeout | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCitrixImageVersionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixImageVersionTimeout | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixImageVersionTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
    }
  }

  // create - computed: true, optional: true, required: false
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

  // delete - computed: true, optional: true, required: false
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
}
export interface DataCitrixImageVersionVsphereImageSpecs {
}

export function dataCitrixImageVersionVsphereImageSpecsToTerraform(struct?: DataCitrixImageVersionVsphereImageSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixImageVersionVsphereImageSpecsToHclTerraform(struct?: DataCitrixImageVersionVsphereImageSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixImageVersionVsphereImageSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixImageVersionVsphereImageSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixImageVersionVsphereImageSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // image_snapshot - computed: true, optional: false, required: false
  public get imageSnapshot() {
    return this.getStringAttribute('image_snapshot');
  }

  // machine_profile - computed: true, optional: false, required: false
  public get machineProfile() {
    return this.getStringAttribute('machine_profile');
  }

  // master_image_vm - computed: true, optional: false, required: false
  public get masterImageVm() {
    return this.getStringAttribute('master_image_vm');
  }

  // memory_mb - computed: true, optional: false, required: false
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version citrix_image_version}
*/
export class DataCitrixImageVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_image_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixImageVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixImageVersion to import
  * @param importFromId The id of the existing DataCitrixImageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixImageVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_image_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/image_version citrix_image_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixImageVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataCitrixImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_image_version',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsEc2ImageSpecs.internalValue = config.awsEc2ImageSpecs;
    this._id = config.id;
    this._imageDefinition = config.imageDefinition;
    this._timeout.internalValue = config.timeout;
    this._versionNumber = config.versionNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon_workspaces_core_image_specs - computed: true, optional: false, required: false
  private _amazonWorkspacesCoreImageSpecs = new DataCitrixImageVersionAmazonWorkspacesCoreImageSpecsOutputReference(this, "amazon_workspaces_core_image_specs");
  public get amazonWorkspacesCoreImageSpecs() {
    return this._amazonWorkspacesCoreImageSpecs;
  }

  // aws_ec2_image_specs - computed: false, optional: true, required: false
  private _awsEc2ImageSpecs = new DataCitrixImageVersionAwsEc2ImageSpecsOutputReference(this, "aws_ec2_image_specs");
  public get awsEc2ImageSpecs() {
    return this._awsEc2ImageSpecs;
  }
  public putAwsEc2ImageSpecs(value: DataCitrixImageVersionAwsEc2ImageSpecs) {
    this._awsEc2ImageSpecs.internalValue = value;
  }
  public resetAwsEc2ImageSpecs() {
    this._awsEc2ImageSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2ImageSpecsInput() {
    return this._awsEc2ImageSpecs.internalValue;
  }

  // azure_image_specs - computed: true, optional: false, required: false
  private _azureImageSpecs = new DataCitrixImageVersionAzureImageSpecsOutputReference(this, "azure_image_specs");
  public get azureImageSpecs() {
    return this._azureImageSpecs;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }

  // hypervisor_resource_pool - computed: true, optional: false, required: false
  public get hypervisorResourcePool() {
    return this.getStringAttribute('hypervisor_resource_pool');
  }

  // id - computed: false, optional: true, required: false
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

  // image_definition - computed: false, optional: false, required: true
  private _imageDefinition?: string; 
  public get imageDefinition() {
    return this.getStringAttribute('image_definition');
  }
  public set imageDefinition(value: string) {
    this._imageDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDefinitionInput() {
    return this._imageDefinition;
  }

  // network_mapping - computed: true, optional: false, required: false
  private _networkMapping = new DataCitrixImageVersionNetworkMappingList(this, "network_mapping", false);
  public get networkMapping() {
    return this._networkMapping;
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // session_support - computed: true, optional: false, required: false
  public get sessionSupport() {
    return this.getStringAttribute('session_support');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new DataCitrixImageVersionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: DataCitrixImageVersionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // version_number - computed: false, optional: true, required: false
  private _versionNumber?: number; 
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
  public set versionNumber(value: number) {
    this._versionNumber = value;
  }
  public resetVersionNumber() {
    this._versionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNumberInput() {
    return this._versionNumber;
  }

  // vsphere_image_specs - computed: true, optional: false, required: false
  private _vsphereImageSpecs = new DataCitrixImageVersionVsphereImageSpecsOutputReference(this, "vsphere_image_specs");
  public get vsphereImageSpecs() {
    return this._vsphereImageSpecs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_ec2_image_specs: dataCitrixImageVersionAwsEc2ImageSpecsToTerraform(this._awsEc2ImageSpecs.internalValue),
      id: cdktf.stringToTerraform(this._id),
      image_definition: cdktf.stringToTerraform(this._imageDefinition),
      timeout: dataCitrixImageVersionTimeoutToTerraform(this._timeout.internalValue),
      version_number: cdktf.numberToTerraform(this._versionNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_ec2_image_specs: {
        value: dataCitrixImageVersionAwsEc2ImageSpecsToHclTerraform(this._awsEc2ImageSpecs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCitrixImageVersionAwsEc2ImageSpecs",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_definition: {
        value: cdktf.stringToHclTerraform(this._imageDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: dataCitrixImageVersionTimeoutToHclTerraform(this._timeout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCitrixImageVersionTimeout",
      },
      version_number: {
        value: cdktf.numberToHclTerraform(this._versionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
