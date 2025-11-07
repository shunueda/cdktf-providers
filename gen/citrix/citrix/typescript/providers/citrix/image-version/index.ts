// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Image configuration for Amazon Workspaces Core image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#amazon_workspaces_core_image_specs ImageVersion#amazon_workspaces_core_image_specs}
  */
  readonly amazonWorkspacesCoreImageSpecs?: ImageVersionAmazonWorkspacesCoreImageSpecs;
  /**
  * Image configuration for AWS EC2 image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#aws_ec2_image_specs ImageVersion#aws_ec2_image_specs}
  */
  readonly awsEc2ImageSpecs?: ImageVersionAwsEc2ImageSpecs;
  /**
  * Image configuration for Azure image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#azure_image_specs ImageVersion#azure_image_specs}
  */
  readonly azureImageSpecs?: ImageVersionAzureImageSpecs;
  /**
  * Description of the image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#description ImageVersion#description}
  */
  readonly description?: string;
  /**
  * Id of the hypervisor to use for creating this image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#hypervisor ImageVersion#hypervisor}
  */
  readonly hypervisor: string;
  /**
  * Id of the hypervisor resource pool to use for creating this image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#hypervisor_resource_pool ImageVersion#hypervisor_resource_pool}
  */
  readonly hypervisorResourcePool: string;
  /**
  * Id of the image definition to associate this image version with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#image_definition ImageVersion#image_definition}
  */
  readonly imageDefinition: string;
  /**
  * Specifies how the attached NICs are mapped to networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#network_mapping ImageVersion#network_mapping}
  */
  readonly networkMapping?: ImageVersionNetworkMapping[] | cdktf.IResolvable;
  /**
  * Timeout in minutes for the long-running jobs in image version resource's create, delete operation(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#timeout ImageVersion#timeout}
  */
  readonly timeout?: ImageVersionTimeout;
  /**
  * Image configuration for vSphere image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#vsphere_image_specs ImageVersion#vsphere_image_specs}
  */
  readonly vsphereImageSpecs?: ImageVersionVsphereImageSpecs;
}
export interface ImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile {
  /**
  * The launch template ID of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#launch_template_id ImageVersion#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * The launch template name of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#launch_template_name ImageVersion#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * The launch template version of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#launch_template_version ImageVersion#launch_template_version}
  */
  readonly launchTemplateVersion?: string;
  /**
  * The instance ID of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#vm_id ImageVersion#vm_id}
  */
  readonly vmId?: string;
  /**
  * The name of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#vm_name ImageVersion#vm_name}
  */
  readonly vmName?: string;
  /**
  * The region and availability zone of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#vm_region_az ImageVersion#vm_region_az}
  */
  readonly vmRegionAz?: string;
}

export function imageVersionAmazonWorkspacesCoreImageSpecsMachineProfileToTerraform(struct?: ImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    launch_template_version: cdktf.stringToTerraform(struct!.launchTemplateVersion),
    vm_id: cdktf.stringToTerraform(struct!.vmId),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
    vm_region_az: cdktf.stringToTerraform(struct!.vmRegionAz),
  }
}


export function imageVersionAmazonWorkspacesCoreImageSpecsMachineProfileToHclTerraform(struct?: ImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    launch_template_id: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_version: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_id: {
      value: cdktf.stringToHclTerraform(struct!.vmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_region_az: {
      value: cdktf.stringToHclTerraform(struct!.vmRegionAz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageVersionAmazonWorkspacesCoreImageSpecsMachineProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._launchTemplateVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateVersion = this._launchTemplateVersion;
    }
    if (this._vmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmId = this._vmId;
    }
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    if (this._vmRegionAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmRegionAz = this._vmRegionAz;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._launchTemplateVersion = undefined;
      this._vmId = undefined;
      this._vmName = undefined;
      this._vmRegionAz = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._launchTemplateVersion = value.launchTemplateVersion;
      this._vmId = value.vmId;
      this._vmName = value.vmName;
      this._vmRegionAz = value.vmRegionAz;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // launch_template_version - computed: false, optional: true, required: false
  private _launchTemplateVersion?: string; 
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: string) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
  }

  // vm_id - computed: false, optional: true, required: false
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // vm_name - computed: false, optional: true, required: false
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  public resetVmName() {
    this._vmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // vm_region_az - computed: false, optional: true, required: false
  private _vmRegionAz?: string; 
  public get vmRegionAz() {
    return this.getStringAttribute('vm_region_az');
  }
  public set vmRegionAz(value: string) {
    this._vmRegionAz = value;
  }
  public resetVmRegionAz() {
    this._vmRegionAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmRegionAzInput() {
    return this._vmRegionAz;
  }
}
export interface ImageVersionAmazonWorkspacesCoreImageSpecs {
  /**
  * AMI of the AWS image to be used as the template image for the machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#image_ami ImageVersion#image_ami}
  */
  readonly imageAmi: string;
  /**
  * The name of the virtual machine that will be used to identify the default value for the tags, virtual machine size, boot diagnostics, host cache property of OS disk, accelerated networking and availability zone.<br />While providing machine profile, specify either `vm_name + vm_region_az + vm_id` or `launch_template_name + launch_template_version + launch_template_id`, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#machine_profile ImageVersion#machine_profile}
  */
  readonly machineProfile: ImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile;
  /**
  * The name of the virtual machine image that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#master_image ImageVersion#master_image}
  */
  readonly masterImage: string;
  /**
  * The AWS VM Sku to use when creating machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#service_offering ImageVersion#service_offering}
  */
  readonly serviceOffering: string;
}

export function imageVersionAmazonWorkspacesCoreImageSpecsToTerraform(struct?: ImageVersionAmazonWorkspacesCoreImageSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ami: cdktf.stringToTerraform(struct!.imageAmi),
    machine_profile: imageVersionAmazonWorkspacesCoreImageSpecsMachineProfileToTerraform(struct!.machineProfile),
    master_image: cdktf.stringToTerraform(struct!.masterImage),
    service_offering: cdktf.stringToTerraform(struct!.serviceOffering),
  }
}


export function imageVersionAmazonWorkspacesCoreImageSpecsToHclTerraform(struct?: ImageVersionAmazonWorkspacesCoreImageSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ami: {
      value: cdktf.stringToHclTerraform(struct!.imageAmi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile: {
      value: imageVersionAmazonWorkspacesCoreImageSpecsMachineProfileToHclTerraform(struct!.machineProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "ImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile",
    },
    master_image: {
      value: cdktf.stringToHclTerraform(struct!.masterImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_offering: {
      value: cdktf.stringToHclTerraform(struct!.serviceOffering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageVersionAmazonWorkspacesCoreImageSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageVersionAmazonWorkspacesCoreImageSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageAmi !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageAmi = this._imageAmi;
    }
    if (this._machineProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfile = this._machineProfile?.internalValue;
    }
    if (this._masterImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImage = this._masterImage;
    }
    if (this._serviceOffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOffering = this._serviceOffering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageVersionAmazonWorkspacesCoreImageSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageAmi = undefined;
      this._machineProfile.internalValue = undefined;
      this._masterImage = undefined;
      this._serviceOffering = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageAmi = value.imageAmi;
      this._machineProfile.internalValue = value.machineProfile;
      this._masterImage = value.masterImage;
      this._serviceOffering = value.serviceOffering;
    }
  }

  // image_ami - computed: false, optional: false, required: true
  private _imageAmi?: string; 
  public get imageAmi() {
    return this.getStringAttribute('image_ami');
  }
  public set imageAmi(value: string) {
    this._imageAmi = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageAmiInput() {
    return this._imageAmi;
  }

  // machine_profile - computed: false, optional: false, required: true
  private _machineProfile = new ImageVersionAmazonWorkspacesCoreImageSpecsMachineProfileOutputReference(this, "machine_profile");
  public get machineProfile() {
    return this._machineProfile;
  }
  public putMachineProfile(value: ImageVersionAmazonWorkspacesCoreImageSpecsMachineProfile) {
    this._machineProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileInput() {
    return this._machineProfile.internalValue;
  }

  // master_image - computed: false, optional: false, required: true
  private _masterImage?: string; 
  public get masterImage() {
    return this.getStringAttribute('master_image');
  }
  public set masterImage(value: string) {
    this._masterImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageInput() {
    return this._masterImage;
  }

  // service_offering - computed: false, optional: false, required: true
  private _serviceOffering?: string; 
  public get serviceOffering() {
    return this.getStringAttribute('service_offering');
  }
  public set serviceOffering(value: string) {
    this._serviceOffering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOfferingInput() {
    return this._serviceOffering;
  }
}
export interface ImageVersionAwsEc2ImageSpecsMachineProfile {
  /**
  * The launch template ID of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#launch_template_id ImageVersion#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * The launch template name of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#launch_template_name ImageVersion#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * The launch template version of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#launch_template_version ImageVersion#launch_template_version}
  */
  readonly launchTemplateVersion?: string;
  /**
  * The instance ID of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#vm_id ImageVersion#vm_id}
  */
  readonly vmId?: string;
  /**
  * The name of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#vm_name ImageVersion#vm_name}
  */
  readonly vmName?: string;
  /**
  * The region and availability zone of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#vm_region_az ImageVersion#vm_region_az}
  */
  readonly vmRegionAz?: string;
}

export function imageVersionAwsEc2ImageSpecsMachineProfileToTerraform(struct?: ImageVersionAwsEc2ImageSpecsMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    launch_template_version: cdktf.stringToTerraform(struct!.launchTemplateVersion),
    vm_id: cdktf.stringToTerraform(struct!.vmId),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
    vm_region_az: cdktf.stringToTerraform(struct!.vmRegionAz),
  }
}


export function imageVersionAwsEc2ImageSpecsMachineProfileToHclTerraform(struct?: ImageVersionAwsEc2ImageSpecsMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    launch_template_id: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_version: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_id: {
      value: cdktf.stringToHclTerraform(struct!.vmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_region_az: {
      value: cdktf.stringToHclTerraform(struct!.vmRegionAz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageVersionAwsEc2ImageSpecsMachineProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageVersionAwsEc2ImageSpecsMachineProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._launchTemplateVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateVersion = this._launchTemplateVersion;
    }
    if (this._vmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmId = this._vmId;
    }
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    if (this._vmRegionAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmRegionAz = this._vmRegionAz;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageVersionAwsEc2ImageSpecsMachineProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._launchTemplateVersion = undefined;
      this._vmId = undefined;
      this._vmName = undefined;
      this._vmRegionAz = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._launchTemplateVersion = value.launchTemplateVersion;
      this._vmId = value.vmId;
      this._vmName = value.vmName;
      this._vmRegionAz = value.vmRegionAz;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // launch_template_version - computed: false, optional: true, required: false
  private _launchTemplateVersion?: string; 
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: string) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
  }

  // vm_id - computed: false, optional: true, required: false
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // vm_name - computed: false, optional: true, required: false
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  public resetVmName() {
    this._vmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // vm_region_az - computed: false, optional: true, required: false
  private _vmRegionAz?: string; 
  public get vmRegionAz() {
    return this.getStringAttribute('vm_region_az');
  }
  public set vmRegionAz(value: string) {
    this._vmRegionAz = value;
  }
  public resetVmRegionAz() {
    this._vmRegionAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmRegionAzInput() {
    return this._vmRegionAz;
  }
}
export interface ImageVersionAwsEc2ImageSpecs {
  /**
  * ID of AWS EC2 image to be used as the template image for the machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#ami_id ImageVersion#ami_id}
  */
  readonly amiId: string;
  /**
  * The name of the AWS EC2 image that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#ami_name ImageVersion#ami_name}
  */
  readonly amiName: string;
  /**
  * The name of the virtual machine that will be used to identify the default value for the tags, virtual machine size, boot diagnostics, host cache property of OS disk, accelerated networking and availability zone.<br />While providing machine profile, specify either `vm_name + vm_region_az + vm_id` or `launch_template_name + launch_template_version + launch_template_id`, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#machine_profile ImageVersion#machine_profile}
  */
  readonly machineProfile: ImageVersionAwsEc2ImageSpecsMachineProfile;
  /**
  * The AWS VM Sku to use when creating machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#service_offering ImageVersion#service_offering}
  */
  readonly serviceOffering: string;
}

export function imageVersionAwsEc2ImageSpecsToTerraform(struct?: ImageVersionAwsEc2ImageSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_id: cdktf.stringToTerraform(struct!.amiId),
    ami_name: cdktf.stringToTerraform(struct!.amiName),
    machine_profile: imageVersionAwsEc2ImageSpecsMachineProfileToTerraform(struct!.machineProfile),
    service_offering: cdktf.stringToTerraform(struct!.serviceOffering),
  }
}


export function imageVersionAwsEc2ImageSpecsToHclTerraform(struct?: ImageVersionAwsEc2ImageSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ami_id: {
      value: cdktf.stringToHclTerraform(struct!.amiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ami_name: {
      value: cdktf.stringToHclTerraform(struct!.amiName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile: {
      value: imageVersionAwsEc2ImageSpecsMachineProfileToHclTerraform(struct!.machineProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "ImageVersionAwsEc2ImageSpecsMachineProfile",
    },
    service_offering: {
      value: cdktf.stringToHclTerraform(struct!.serviceOffering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageVersionAwsEc2ImageSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageVersionAwsEc2ImageSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiId = this._amiId;
    }
    if (this._amiName !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiName = this._amiName;
    }
    if (this._machineProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfile = this._machineProfile?.internalValue;
    }
    if (this._serviceOffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOffering = this._serviceOffering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageVersionAwsEc2ImageSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amiId = undefined;
      this._amiName = undefined;
      this._machineProfile.internalValue = undefined;
      this._serviceOffering = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amiId = value.amiId;
      this._amiName = value.amiName;
      this._machineProfile.internalValue = value.machineProfile;
      this._serviceOffering = value.serviceOffering;
    }
  }

  // ami_id - computed: false, optional: false, required: true
  private _amiId?: string; 
  public get amiId() {
    return this.getStringAttribute('ami_id');
  }
  public set amiId(value: string) {
    this._amiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amiIdInput() {
    return this._amiId;
  }

  // ami_name - computed: false, optional: false, required: true
  private _amiName?: string; 
  public get amiName() {
    return this.getStringAttribute('ami_name');
  }
  public set amiName(value: string) {
    this._amiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amiNameInput() {
    return this._amiName;
  }

  // machine_profile - computed: false, optional: false, required: true
  private _machineProfile = new ImageVersionAwsEc2ImageSpecsMachineProfileOutputReference(this, "machine_profile");
  public get machineProfile() {
    return this._machineProfile;
  }
  public putMachineProfile(value: ImageVersionAwsEc2ImageSpecsMachineProfile) {
    this._machineProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileInput() {
    return this._machineProfile.internalValue;
  }

  // service_offering - computed: false, optional: false, required: true
  private _serviceOffering?: string; 
  public get serviceOffering() {
    return this.getStringAttribute('service_offering');
  }
  public set serviceOffering(value: string) {
    this._serviceOffering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOfferingInput() {
    return this._serviceOffering;
  }
}
export interface ImageVersionAzureImageSpecsDiskEncryptionSet {
  /**
  * The name of the disk encryption set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#disk_encryption_set_name ImageVersion#disk_encryption_set_name}
  */
  readonly diskEncryptionSetName: string;
  /**
  * The name of the resource group in which the disk encryption set resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#disk_encryption_set_resource_group ImageVersion#disk_encryption_set_resource_group}
  */
  readonly diskEncryptionSetResourceGroup: string;
}

export function imageVersionAzureImageSpecsDiskEncryptionSetToTerraform(struct?: ImageVersionAzureImageSpecsDiskEncryptionSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_set_name: cdktf.stringToTerraform(struct!.diskEncryptionSetName),
    disk_encryption_set_resource_group: cdktf.stringToTerraform(struct!.diskEncryptionSetResourceGroup),
  }
}


export function imageVersionAzureImageSpecsDiskEncryptionSetToHclTerraform(struct?: ImageVersionAzureImageSpecsDiskEncryptionSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_set_name: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_encryption_set_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageVersionAzureImageSpecsDiskEncryptionSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageVersionAzureImageSpecsDiskEncryptionSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetName = this._diskEncryptionSetName;
    }
    if (this._diskEncryptionSetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetResourceGroup = this._diskEncryptionSetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageVersionAzureImageSpecsDiskEncryptionSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskEncryptionSetName = undefined;
      this._diskEncryptionSetResourceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskEncryptionSetName = value.diskEncryptionSetName;
      this._diskEncryptionSetResourceGroup = value.diskEncryptionSetResourceGroup;
    }
  }

  // disk_encryption_set_name - computed: false, optional: false, required: true
  private _diskEncryptionSetName?: string; 
  public get diskEncryptionSetName() {
    return this.getStringAttribute('disk_encryption_set_name');
  }
  public set diskEncryptionSetName(value: string) {
    this._diskEncryptionSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetNameInput() {
    return this._diskEncryptionSetName;
  }

  // disk_encryption_set_resource_group - computed: false, optional: false, required: true
  private _diskEncryptionSetResourceGroup?: string; 
  public get diskEncryptionSetResourceGroup() {
    return this.getStringAttribute('disk_encryption_set_resource_group');
  }
  public set diskEncryptionSetResourceGroup(value: string) {
    this._diskEncryptionSetResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetResourceGroupInput() {
    return this._diskEncryptionSetResourceGroup;
  }
}
export interface ImageVersionAzureImageSpecsGalleryImage {
  /**
  * The image definition for the image to be used in the Azure Image Gallery. Only applicable to Azure Image Gallery image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#definition ImageVersion#definition}
  */
  readonly definition: string;
  /**
  * The Azure Image Gallery where the image for creating machines is located. Only applicable to Azure Image Gallery image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#gallery ImageVersion#gallery}
  */
  readonly gallery: string;
  /**
  * The image version for the image to be used in the Azure Image Gallery. Only applicable to Azure Image Gallery image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#version ImageVersion#version}
  */
  readonly version: string;
}

export function imageVersionAzureImageSpecsGalleryImageToTerraform(struct?: ImageVersionAzureImageSpecsGalleryImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    gallery: cdktf.stringToTerraform(struct!.gallery),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function imageVersionAzureImageSpecsGalleryImageToHclTerraform(struct?: ImageVersionAzureImageSpecsGalleryImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gallery: {
      value: cdktf.stringToHclTerraform(struct!.gallery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ImageVersionAzureImageSpecsGalleryImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageVersionAzureImageSpecsGalleryImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._gallery !== undefined) {
      hasAnyValues = true;
      internalValueResult.gallery = this._gallery;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageVersionAzureImageSpecsGalleryImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._gallery = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._gallery = value.gallery;
      this._version = value.version;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // gallery - computed: false, optional: false, required: true
  private _gallery?: string; 
  public get gallery() {
    return this.getStringAttribute('gallery');
  }
  public set gallery(value: string) {
    this._gallery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryInput() {
    return this._gallery;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ImageVersionAzureImageSpecsMachineProfile {
  /**
  * The name of the resource group where the machine profile VM or template spec is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#machine_profile_resource_group ImageVersion#machine_profile_resource_group}
  */
  readonly machineProfileResourceGroup: string;
  /**
  * The name of the machine profile template spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#machine_profile_template_spec_name ImageVersion#machine_profile_template_spec_name}
  */
  readonly machineProfileTemplateSpecName?: string;
  /**
  * The version of the machine profile template spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#machine_profile_template_spec_version ImageVersion#machine_profile_template_spec_version}
  */
  readonly machineProfileTemplateSpecVersion?: string;
  /**
  * The name of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#machine_profile_vm_name ImageVersion#machine_profile_vm_name}
  */
  readonly machineProfileVmName?: string;
}

export function imageVersionAzureImageSpecsMachineProfileToTerraform(struct?: ImageVersionAzureImageSpecsMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_profile_resource_group: cdktf.stringToTerraform(struct!.machineProfileResourceGroup),
    machine_profile_template_spec_name: cdktf.stringToTerraform(struct!.machineProfileTemplateSpecName),
    machine_profile_template_spec_version: cdktf.stringToTerraform(struct!.machineProfileTemplateSpecVersion),
    machine_profile_vm_name: cdktf.stringToTerraform(struct!.machineProfileVmName),
  }
}


export function imageVersionAzureImageSpecsMachineProfileToHclTerraform(struct?: ImageVersionAzureImageSpecsMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_profile_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.machineProfileResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile_template_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.machineProfileTemplateSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile_template_spec_version: {
      value: cdktf.stringToHclTerraform(struct!.machineProfileTemplateSpecVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile_vm_name: {
      value: cdktf.stringToHclTerraform(struct!.machineProfileVmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageVersionAzureImageSpecsMachineProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageVersionAzureImageSpecsMachineProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineProfileResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfileResourceGroup = this._machineProfileResourceGroup;
    }
    if (this._machineProfileTemplateSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfileTemplateSpecName = this._machineProfileTemplateSpecName;
    }
    if (this._machineProfileTemplateSpecVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfileTemplateSpecVersion = this._machineProfileTemplateSpecVersion;
    }
    if (this._machineProfileVmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfileVmName = this._machineProfileVmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageVersionAzureImageSpecsMachineProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineProfileResourceGroup = undefined;
      this._machineProfileTemplateSpecName = undefined;
      this._machineProfileTemplateSpecVersion = undefined;
      this._machineProfileVmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineProfileResourceGroup = value.machineProfileResourceGroup;
      this._machineProfileTemplateSpecName = value.machineProfileTemplateSpecName;
      this._machineProfileTemplateSpecVersion = value.machineProfileTemplateSpecVersion;
      this._machineProfileVmName = value.machineProfileVmName;
    }
  }

  // machine_profile_resource_group - computed: false, optional: false, required: true
  private _machineProfileResourceGroup?: string; 
  public get machineProfileResourceGroup() {
    return this.getStringAttribute('machine_profile_resource_group');
  }
  public set machineProfileResourceGroup(value: string) {
    this._machineProfileResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileResourceGroupInput() {
    return this._machineProfileResourceGroup;
  }

  // machine_profile_template_spec_name - computed: false, optional: true, required: false
  private _machineProfileTemplateSpecName?: string; 
  public get machineProfileTemplateSpecName() {
    return this.getStringAttribute('machine_profile_template_spec_name');
  }
  public set machineProfileTemplateSpecName(value: string) {
    this._machineProfileTemplateSpecName = value;
  }
  public resetMachineProfileTemplateSpecName() {
    this._machineProfileTemplateSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileTemplateSpecNameInput() {
    return this._machineProfileTemplateSpecName;
  }

  // machine_profile_template_spec_version - computed: false, optional: true, required: false
  private _machineProfileTemplateSpecVersion?: string; 
  public get machineProfileTemplateSpecVersion() {
    return this.getStringAttribute('machine_profile_template_spec_version');
  }
  public set machineProfileTemplateSpecVersion(value: string) {
    this._machineProfileTemplateSpecVersion = value;
  }
  public resetMachineProfileTemplateSpecVersion() {
    this._machineProfileTemplateSpecVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileTemplateSpecVersionInput() {
    return this._machineProfileTemplateSpecVersion;
  }

  // machine_profile_vm_name - computed: false, optional: true, required: false
  private _machineProfileVmName?: string; 
  public get machineProfileVmName() {
    return this.getStringAttribute('machine_profile_vm_name');
  }
  public set machineProfileVmName(value: string) {
    this._machineProfileVmName = value;
  }
  public resetMachineProfileVmName() {
    this._machineProfileVmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileVmNameInput() {
    return this._machineProfileVmName;
  }
}
export interface ImageVersionAzureImageSpecs {
  /**
  * The configuration for Disk Encryption Set (DES). The DES must be in the same subscription and region as your resources. If your master image is encrypted with a DES, use the same DES when creating this machine catalog. When using a DES, if you later disable the key with which the corresponding DES is associated in Azure, you can no longer power on the machines in this catalog or add machines to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#disk_encryption_set ImageVersion#disk_encryption_set}
  */
  readonly diskEncryptionSet?: ImageVersionAzureImageSpecsDiskEncryptionSet;
  /**
  * Details of the Azure Image Gallery image to use for creating machines. Only Applicable to Azure Image Gallery image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#gallery_image ImageVersion#gallery_image}
  */
  readonly galleryImage?: ImageVersionAzureImageSpecsGalleryImage;
  /**
  * Windows license type used to provision virtual machines in Azure at the base compute rate. License types include: `Windows_Client` and `Windows_Server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#license_type ImageVersion#license_type}
  */
  readonly licenseType?: string;
  /**
  * The name of the virtual machine or template spec that will be used to identify the default value for the tags, virtual machine size, boot diagnostics, host cache property of OS disk, accelerated networking and availability zone.<br />Required when provisioning_type is set to PVSStreaming or when identity_type is set to `AzureAD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#machine_profile ImageVersion#machine_profile}
  */
  readonly machineProfile?: ImageVersionAzureImageSpecsMachineProfile;
  /**
  * The name of the virtual machine snapshot or VM template that will be used. This identifies the hard disk to be used and the default values for the memory and processors. Omit this field if you want to use gallery_image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#master_image ImageVersion#master_image}
  */
  readonly masterImage?: string;
  /**
  * The Azure Resource Group where the managed disk / snapshot for creating machines is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#resource_group ImageVersion#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * The Azure VM Sku to use when creating machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#service_offering ImageVersion#service_offering}
  */
  readonly serviceOffering: string;
  /**
  * The Azure Subscription ID where the managed disk / snapshot for creating machines is located. Only required if the image is not in the same subscription of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#shared_subscription ImageVersion#shared_subscription}
  */
  readonly sharedSubscription?: string;
  /**
  * Storage account type used for provisioned virtual machine disks on Azure. Storage types include: `Standard_LRS`, `StandardSSD_LRS` and `Premium_LRS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#storage_type ImageVersion#storage_type}
  */
  readonly storageType: string;
}

export function imageVersionAzureImageSpecsToTerraform(struct?: ImageVersionAzureImageSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_set: imageVersionAzureImageSpecsDiskEncryptionSetToTerraform(struct!.diskEncryptionSet),
    gallery_image: imageVersionAzureImageSpecsGalleryImageToTerraform(struct!.galleryImage),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    machine_profile: imageVersionAzureImageSpecsMachineProfileToTerraform(struct!.machineProfile),
    master_image: cdktf.stringToTerraform(struct!.masterImage),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    service_offering: cdktf.stringToTerraform(struct!.serviceOffering),
    shared_subscription: cdktf.stringToTerraform(struct!.sharedSubscription),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function imageVersionAzureImageSpecsToHclTerraform(struct?: ImageVersionAzureImageSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_set: {
      value: imageVersionAzureImageSpecsDiskEncryptionSetToHclTerraform(struct!.diskEncryptionSet),
      isBlock: true,
      type: "struct",
      storageClassType: "ImageVersionAzureImageSpecsDiskEncryptionSet",
    },
    gallery_image: {
      value: imageVersionAzureImageSpecsGalleryImageToHclTerraform(struct!.galleryImage),
      isBlock: true,
      type: "struct",
      storageClassType: "ImageVersionAzureImageSpecsGalleryImage",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile: {
      value: imageVersionAzureImageSpecsMachineProfileToHclTerraform(struct!.machineProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "ImageVersionAzureImageSpecsMachineProfile",
    },
    master_image: {
      value: cdktf.stringToHclTerraform(struct!.masterImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_offering: {
      value: cdktf.stringToHclTerraform(struct!.serviceOffering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_subscription: {
      value: cdktf.stringToHclTerraform(struct!.sharedSubscription),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageVersionAzureImageSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageVersionAzureImageSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSet = this._diskEncryptionSet?.internalValue;
    }
    if (this._galleryImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.galleryImage = this._galleryImage?.internalValue;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._machineProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfile = this._machineProfile?.internalValue;
    }
    if (this._masterImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImage = this._masterImage;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._serviceOffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOffering = this._serviceOffering;
    }
    if (this._sharedSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSubscription = this._sharedSubscription;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageVersionAzureImageSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskEncryptionSet.internalValue = undefined;
      this._galleryImage.internalValue = undefined;
      this._licenseType = undefined;
      this._machineProfile.internalValue = undefined;
      this._masterImage = undefined;
      this._resourceGroup = undefined;
      this._serviceOffering = undefined;
      this._sharedSubscription = undefined;
      this._storageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskEncryptionSet.internalValue = value.diskEncryptionSet;
      this._galleryImage.internalValue = value.galleryImage;
      this._licenseType = value.licenseType;
      this._machineProfile.internalValue = value.machineProfile;
      this._masterImage = value.masterImage;
      this._resourceGroup = value.resourceGroup;
      this._serviceOffering = value.serviceOffering;
      this._sharedSubscription = value.sharedSubscription;
      this._storageType = value.storageType;
    }
  }

  // disk_encryption_set - computed: false, optional: true, required: false
  private _diskEncryptionSet = new ImageVersionAzureImageSpecsDiskEncryptionSetOutputReference(this, "disk_encryption_set");
  public get diskEncryptionSet() {
    return this._diskEncryptionSet;
  }
  public putDiskEncryptionSet(value: ImageVersionAzureImageSpecsDiskEncryptionSet) {
    this._diskEncryptionSet.internalValue = value;
  }
  public resetDiskEncryptionSet() {
    this._diskEncryptionSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetInput() {
    return this._diskEncryptionSet.internalValue;
  }

  // gallery_image - computed: false, optional: true, required: false
  private _galleryImage = new ImageVersionAzureImageSpecsGalleryImageOutputReference(this, "gallery_image");
  public get galleryImage() {
    return this._galleryImage;
  }
  public putGalleryImage(value: ImageVersionAzureImageSpecsGalleryImage) {
    this._galleryImage.internalValue = value;
  }
  public resetGalleryImage() {
    this._galleryImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryImageInput() {
    return this._galleryImage.internalValue;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // machine_profile - computed: false, optional: true, required: false
  private _machineProfile = new ImageVersionAzureImageSpecsMachineProfileOutputReference(this, "machine_profile");
  public get machineProfile() {
    return this._machineProfile;
  }
  public putMachineProfile(value: ImageVersionAzureImageSpecsMachineProfile) {
    this._machineProfile.internalValue = value;
  }
  public resetMachineProfile() {
    this._machineProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileInput() {
    return this._machineProfile.internalValue;
  }

  // master_image - computed: false, optional: true, required: false
  private _masterImage?: string; 
  public get masterImage() {
    return this.getStringAttribute('master_image');
  }
  public set masterImage(value: string) {
    this._masterImage = value;
  }
  public resetMasterImage() {
    this._masterImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageInput() {
    return this._masterImage;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // service_offering - computed: false, optional: false, required: true
  private _serviceOffering?: string; 
  public get serviceOffering() {
    return this.getStringAttribute('service_offering');
  }
  public set serviceOffering(value: string) {
    this._serviceOffering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOfferingInput() {
    return this._serviceOffering;
  }

  // shared_subscription - computed: false, optional: true, required: false
  private _sharedSubscription?: string; 
  public get sharedSubscription() {
    return this.getStringAttribute('shared_subscription');
  }
  public set sharedSubscription(value: string) {
    this._sharedSubscription = value;
  }
  public resetSharedSubscription() {
    this._sharedSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSubscriptionInput() {
    return this._sharedSubscription;
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
}
export interface ImageVersionNetworkMapping {
  /**
  * The name of the virtual network that the device should be attached to. This must be a subnet within a Virtual Private Cloud item in the resource pool to which the Machine Catalog is associated.<br />For AWS, please specify the network mask of the network you want to use within the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#network ImageVersion#network}
  */
  readonly network: string;
  /**
  * Name or Id of the network device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#network_device ImageVersion#network_device}
  */
  readonly networkDevice: string;
}

export function imageVersionNetworkMappingToTerraform(struct?: ImageVersionNetworkMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    network_device: cdktf.stringToTerraform(struct!.networkDevice),
  }
}


export function imageVersionNetworkMappingToHclTerraform(struct?: ImageVersionNetworkMapping | cdktf.IResolvable): any {
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

export class ImageVersionNetworkMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageVersionNetworkMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ImageVersionNetworkMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._networkDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._networkDevice = value.networkDevice;
    }
  }

  // network - computed: false, optional: false, required: true
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

  // network_device - computed: false, optional: false, required: true
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

export class ImageVersionNetworkMappingList extends cdktf.ComplexList {
  public internalValue? : ImageVersionNetworkMapping[] | cdktf.IResolvable

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
  public get(index: number): ImageVersionNetworkMappingOutputReference {
    return new ImageVersionNetworkMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageVersionTimeout {
  /**
  * Timeout in minutes for the long-running jobs in create operation. Defaults to 30. Minimum value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#create ImageVersion#create}
  */
  readonly create?: number;
  /**
  * Timeout in minutes for the long-running jobs in delete operation. Defaults to 10. Minimum value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#delete ImageVersion#delete}
  */
  readonly delete?: number;
}

export function imageVersionTimeoutToTerraform(struct?: ImageVersionTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.numberToTerraform(struct!.create),
    delete: cdktf.numberToTerraform(struct!.delete),
  }
}


export function imageVersionTimeoutToHclTerraform(struct?: ImageVersionTimeout | cdktf.IResolvable): any {
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

export class ImageVersionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageVersionTimeout | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ImageVersionTimeout | cdktf.IResolvable | undefined) {
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
export interface ImageVersionVsphereImageSpecs {
  /**
  * The number of processors that virtual machines created from the provisioning scheme should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#cpu_count ImageVersion#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * The Snapshot of the virtual machine specified in `master_image_vm`. Specify the relative path of the snapshot. Eg: snaphost-1/snapshot-2/snapshot-3. This property is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#image_snapshot ImageVersion#image_snapshot}
  */
  readonly imageSnapshot: string;
  /**
  * The name of the virtual machine template that will be used to identify the default value for the tags, virtual machine size, boot diagnostics and host cache property of OS disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#machine_profile ImageVersion#machine_profile}
  */
  readonly machineProfile?: string;
  /**
  * The name of the virtual machine that will be used as master image. This property is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#master_image_vm ImageVersion#master_image_vm}
  */
  readonly masterImageVm: string;
  /**
  * The maximum amount of memory that virtual machines created from the provisioning scheme should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#memory_mb ImageVersion#memory_mb}
  */
  readonly memoryMb: number;
}

export function imageVersionVsphereImageSpecsToTerraform(struct?: ImageVersionVsphereImageSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    image_snapshot: cdktf.stringToTerraform(struct!.imageSnapshot),
    machine_profile: cdktf.stringToTerraform(struct!.machineProfile),
    master_image_vm: cdktf.stringToTerraform(struct!.masterImageVm),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
  }
}


export function imageVersionVsphereImageSpecsToHclTerraform(struct?: ImageVersionVsphereImageSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.imageSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile: {
      value: cdktf.stringToHclTerraform(struct!.machineProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image_vm: {
      value: cdktf.stringToHclTerraform(struct!.masterImageVm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageVersionVsphereImageSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageVersionVsphereImageSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._imageSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSnapshot = this._imageSnapshot;
    }
    if (this._machineProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfile = this._machineProfile;
    }
    if (this._masterImageVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageVm = this._masterImageVm;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageVersionVsphereImageSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCount = undefined;
      this._imageSnapshot = undefined;
      this._machineProfile = undefined;
      this._masterImageVm = undefined;
      this._memoryMb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCount = value.cpuCount;
      this._imageSnapshot = value.imageSnapshot;
      this._machineProfile = value.machineProfile;
      this._masterImageVm = value.masterImageVm;
      this._memoryMb = value.memoryMb;
    }
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // image_snapshot - computed: false, optional: false, required: true
  private _imageSnapshot?: string; 
  public get imageSnapshot() {
    return this.getStringAttribute('image_snapshot');
  }
  public set imageSnapshot(value: string) {
    this._imageSnapshot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSnapshotInput() {
    return this._imageSnapshot;
  }

  // machine_profile - computed: false, optional: true, required: false
  private _machineProfile?: string; 
  public get machineProfile() {
    return this.getStringAttribute('machine_profile');
  }
  public set machineProfile(value: string) {
    this._machineProfile = value;
  }
  public resetMachineProfile() {
    this._machineProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileInput() {
    return this._machineProfile;
  }

  // master_image_vm - computed: false, optional: false, required: true
  private _masterImageVm?: string; 
  public get masterImageVm() {
    return this.getStringAttribute('master_image_vm');
  }
  public set masterImageVm(value: string) {
    this._masterImageVm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageVmInput() {
    return this._masterImageVm;
  }

  // memory_mb - computed: false, optional: false, required: true
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version citrix_image_version}
*/
export class ImageVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_image_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageVersion to import
  * @param importFromId The id of the existing ImageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_image_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_version citrix_image_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageVersionConfig
  */
  public constructor(scope: Construct, id: string, config: ImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_image_version',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amazonWorkspacesCoreImageSpecs.internalValue = config.amazonWorkspacesCoreImageSpecs;
    this._awsEc2ImageSpecs.internalValue = config.awsEc2ImageSpecs;
    this._azureImageSpecs.internalValue = config.azureImageSpecs;
    this._description = config.description;
    this._hypervisor = config.hypervisor;
    this._hypervisorResourcePool = config.hypervisorResourcePool;
    this._imageDefinition = config.imageDefinition;
    this._networkMapping.internalValue = config.networkMapping;
    this._timeout.internalValue = config.timeout;
    this._vsphereImageSpecs.internalValue = config.vsphereImageSpecs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon_workspaces_core_image_specs - computed: false, optional: true, required: false
  private _amazonWorkspacesCoreImageSpecs = new ImageVersionAmazonWorkspacesCoreImageSpecsOutputReference(this, "amazon_workspaces_core_image_specs");
  public get amazonWorkspacesCoreImageSpecs() {
    return this._amazonWorkspacesCoreImageSpecs;
  }
  public putAmazonWorkspacesCoreImageSpecs(value: ImageVersionAmazonWorkspacesCoreImageSpecs) {
    this._amazonWorkspacesCoreImageSpecs.internalValue = value;
  }
  public resetAmazonWorkspacesCoreImageSpecs() {
    this._amazonWorkspacesCoreImageSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonWorkspacesCoreImageSpecsInput() {
    return this._amazonWorkspacesCoreImageSpecs.internalValue;
  }

  // aws_ec2_image_specs - computed: false, optional: true, required: false
  private _awsEc2ImageSpecs = new ImageVersionAwsEc2ImageSpecsOutputReference(this, "aws_ec2_image_specs");
  public get awsEc2ImageSpecs() {
    return this._awsEc2ImageSpecs;
  }
  public putAwsEc2ImageSpecs(value: ImageVersionAwsEc2ImageSpecs) {
    this._awsEc2ImageSpecs.internalValue = value;
  }
  public resetAwsEc2ImageSpecs() {
    this._awsEc2ImageSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2ImageSpecsInput() {
    return this._awsEc2ImageSpecs.internalValue;
  }

  // azure_image_specs - computed: false, optional: true, required: false
  private _azureImageSpecs = new ImageVersionAzureImageSpecsOutputReference(this, "azure_image_specs");
  public get azureImageSpecs() {
    return this._azureImageSpecs;
  }
  public putAzureImageSpecs(value: ImageVersionAzureImageSpecs) {
    this._azureImageSpecs.internalValue = value;
  }
  public resetAzureImageSpecs() {
    this._azureImageSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureImageSpecsInput() {
    return this._azureImageSpecs.internalValue;
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

  // hypervisor - computed: false, optional: false, required: true
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
  }

  // hypervisor_resource_pool - computed: false, optional: false, required: true
  private _hypervisorResourcePool?: string; 
  public get hypervisorResourcePool() {
    return this.getStringAttribute('hypervisor_resource_pool');
  }
  public set hypervisorResourcePool(value: string) {
    this._hypervisorResourcePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorResourcePoolInput() {
    return this._hypervisorResourcePool;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_mapping - computed: false, optional: true, required: false
  private _networkMapping = new ImageVersionNetworkMappingList(this, "network_mapping", false);
  public get networkMapping() {
    return this._networkMapping;
  }
  public putNetworkMapping(value: ImageVersionNetworkMapping[] | cdktf.IResolvable) {
    this._networkMapping.internalValue = value;
  }
  public resetNetworkMapping() {
    this._networkMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMappingInput() {
    return this._networkMapping.internalValue;
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
  private _timeout = new ImageVersionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: ImageVersionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }

  // vsphere_image_specs - computed: false, optional: true, required: false
  private _vsphereImageSpecs = new ImageVersionVsphereImageSpecsOutputReference(this, "vsphere_image_specs");
  public get vsphereImageSpecs() {
    return this._vsphereImageSpecs;
  }
  public putVsphereImageSpecs(value: ImageVersionVsphereImageSpecs) {
    this._vsphereImageSpecs.internalValue = value;
  }
  public resetVsphereImageSpecs() {
    this._vsphereImageSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereImageSpecsInput() {
    return this._vsphereImageSpecs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amazon_workspaces_core_image_specs: imageVersionAmazonWorkspacesCoreImageSpecsToTerraform(this._amazonWorkspacesCoreImageSpecs.internalValue),
      aws_ec2_image_specs: imageVersionAwsEc2ImageSpecsToTerraform(this._awsEc2ImageSpecs.internalValue),
      azure_image_specs: imageVersionAzureImageSpecsToTerraform(this._azureImageSpecs.internalValue),
      description: cdktf.stringToTerraform(this._description),
      hypervisor: cdktf.stringToTerraform(this._hypervisor),
      hypervisor_resource_pool: cdktf.stringToTerraform(this._hypervisorResourcePool),
      image_definition: cdktf.stringToTerraform(this._imageDefinition),
      network_mapping: cdktf.listMapper(imageVersionNetworkMappingToTerraform, false)(this._networkMapping.internalValue),
      timeout: imageVersionTimeoutToTerraform(this._timeout.internalValue),
      vsphere_image_specs: imageVersionVsphereImageSpecsToTerraform(this._vsphereImageSpecs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amazon_workspaces_core_image_specs: {
        value: imageVersionAmazonWorkspacesCoreImageSpecsToHclTerraform(this._amazonWorkspacesCoreImageSpecs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageVersionAmazonWorkspacesCoreImageSpecs",
      },
      aws_ec2_image_specs: {
        value: imageVersionAwsEc2ImageSpecsToHclTerraform(this._awsEc2ImageSpecs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageVersionAwsEc2ImageSpecs",
      },
      azure_image_specs: {
        value: imageVersionAzureImageSpecsToHclTerraform(this._azureImageSpecs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageVersionAzureImageSpecs",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor: {
        value: cdktf.stringToHclTerraform(this._hypervisor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_resource_pool: {
        value: cdktf.stringToHclTerraform(this._hypervisorResourcePool),
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
      network_mapping: {
        value: cdktf.listMapperHcl(imageVersionNetworkMappingToHclTerraform, false)(this._networkMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImageVersionNetworkMappingList",
      },
      timeout: {
        value: imageVersionTimeoutToHclTerraform(this._timeout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageVersionTimeout",
      },
      vsphere_image_specs: {
        value: imageVersionVsphereImageSpecsToHclTerraform(this._vsphereImageSpecs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageVersionVsphereImageSpecs",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
