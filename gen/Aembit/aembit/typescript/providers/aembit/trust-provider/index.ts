// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Metadata type Trust Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#aws_metadata TrustProvider#aws_metadata}
  */
  readonly awsMetadata?: TrustProviderAwsMetadata;
  /**
  * AWS Role type Trust Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#aws_role TrustProvider#aws_role}
  */
  readonly awsRole?: TrustProviderAwsRole;
  /**
  * Azure Metadata type Trust Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#azure_metadata TrustProvider#azure_metadata}
  */
  readonly azureMetadata?: TrustProviderAzureMetadata;
  /**
  * Description for the Trust Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#description TrustProvider#description}
  */
  readonly description?: string;
  /**
  * GCP Identity type Trust Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#gcp_identity TrustProvider#gcp_identity}
  */
  readonly gcpIdentity?: TrustProviderGcpIdentity;
  /**
  * GitHub Action type Trust Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#github_action TrustProvider#github_action}
  */
  readonly githubAction?: TrustProviderGithubAction;
  /**
  * GitLab Job type Trust Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#gitlab_job TrustProvider#gitlab_job}
  */
  readonly gitlabJob?: TrustProviderGitlabJob;
  /**
  * Active status of the Trust Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#is_active TrustProvider#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Kerberos type Trust Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#kerberos TrustProvider#kerberos}
  */
  readonly kerberos?: TrustProviderKerberos;
  /**
  * Kubernetes Service Account type Trust Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#kubernetes_service_account TrustProvider#kubernetes_service_account}
  */
  readonly kubernetesServiceAccount?: TrustProviderKubernetesServiceAccount;
  /**
  * Name for the Trust Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#name TrustProvider#name}
  */
  readonly name: string;
  /**
  * OIDC ID Token type Trust Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#oidc_id_token TrustProvider#oidc_id_token}
  */
  readonly oidcIdToken?: TrustProviderOidcIdToken;
  /**
  * Tags are key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#tags TrustProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Terraform Workspace type Trust Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#terraform_workspace TrustProvider#terraform_workspace}
  */
  readonly terraformWorkspace?: TrustProviderTerraformWorkspace;
}
export interface TrustProviderAwsMetadata {
  /**
  * The ID of the AWS account that launched the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#account_id TrustProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * The set of accepted AWS account IDs which are hosting the Client Workloads. Used only for cases where multiple AWS account IDs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#account_ids TrustProvider#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * The architecture of the AMI used to launch the instance (i386 | x86_64 | arm64).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#architecture TrustProvider#architecture}
  */
  readonly architecture?: string;
  /**
  * The Availability Zone in which the instance is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#availability_zone TrustProvider#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The set of accepted AWS Availability Zones which are hosting the Client Workloads. Used only for cases where multiple AWS Availability Zones can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#availability_zones TrustProvider#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * The billing products of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#billing_products TrustProvider#billing_products}
  */
  readonly billingProducts?: string;
  /**
  * PEM Certificate to be used for Signature verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#certificate TrustProvider#certificate}
  */
  readonly certificate?: string;
  /**
  * The ID of the AMI used to launch the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#image_id TrustProvider#image_id}
  */
  readonly imageId?: string;
  /**
  * The ID of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#instance_id TrustProvider#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The set of accepted AWS Instance IDs which are hosting the Client Workloads. Used only for cases where multiple AWS Instance IDs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#instance_ids TrustProvider#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * The instance type of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#instance_type TrustProvider#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The set of accepted AWS Instance types which are hosting the Client Workloads. Used only for cases where multiple AWS Instance types can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#instance_types TrustProvider#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * The ID of the kernel associated with the instance, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#kernel_id TrustProvider#kernel_id}
  */
  readonly kernelId?: string;
  /**
  * The AWS Marketplace product code of the AMI used to launch the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#marketplace_product_codes TrustProvider#marketplace_product_codes}
  */
  readonly marketplaceProductCodes?: string;
  /**
  * The date and time that the instance was launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#pending_time TrustProvider#pending_time}
  */
  readonly pendingTime?: string;
  /**
  * The private IPv4 address of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#private_ip TrustProvider#private_ip}
  */
  readonly privateIp?: string;
  /**
  * The ID of the RAM disk associated with the instance, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#ramdisk_id TrustProvider#ramdisk_id}
  */
  readonly ramdiskId?: string;
  /**
  * The Region in which the instance is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#region TrustProvider#region}
  */
  readonly region?: string;
  /**
  * The set of accepted AWS Regions which are hosting the Client Workloads. Used only for cases where multiple AWS Regions can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#regions TrustProvider#regions}
  */
  readonly regions?: string[];
  /**
  * The version of the instance identity document format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#version TrustProvider#version}
  */
  readonly version?: string;
}

export function trustProviderAwsMetadataToTerraform(struct?: TrustProviderAwsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountIds),
    architecture: cdktf.stringToTerraform(struct!.architecture),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    billing_products: cdktf.stringToTerraform(struct!.billingProducts),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceIds),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypes),
    kernel_id: cdktf.stringToTerraform(struct!.kernelId),
    marketplace_product_codes: cdktf.stringToTerraform(struct!.marketplaceProductCodes),
    pending_time: cdktf.stringToTerraform(struct!.pendingTime),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    ramdisk_id: cdktf.stringToTerraform(struct!.ramdiskId),
    region: cdktf.stringToTerraform(struct!.region),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function trustProviderAwsMetadataToHclTerraform(struct?: TrustProviderAwsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    architecture: {
      value: cdktf.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    billing_products: {
      value: cdktf.stringToHclTerraform(struct!.billingProducts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kernel_id: {
      value: cdktf.stringToHclTerraform(struct!.kernelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketplace_product_codes: {
      value: cdktf.stringToHclTerraform(struct!.marketplaceProductCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pending_time: {
      value: cdktf.stringToHclTerraform(struct!.pendingTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ramdisk_id: {
      value: cdktf.stringToHclTerraform(struct!.ramdiskId),
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
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class TrustProviderAwsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrustProviderAwsMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._billingProducts !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingProducts = this._billingProducts;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIds = this._instanceIds;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    if (this._kernelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelId = this._kernelId;
    }
    if (this._marketplaceProductCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketplaceProductCodes = this._marketplaceProductCodes;
    }
    if (this._pendingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingTime = this._pendingTime;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._ramdiskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramdiskId = this._ramdiskId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustProviderAwsMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._accountIds = undefined;
      this._architecture = undefined;
      this._availabilityZone = undefined;
      this._availabilityZones = undefined;
      this._billingProducts = undefined;
      this._certificate = undefined;
      this._imageId = undefined;
      this._instanceId = undefined;
      this._instanceIds = undefined;
      this._instanceType = undefined;
      this._instanceTypes = undefined;
      this._kernelId = undefined;
      this._marketplaceProductCodes = undefined;
      this._pendingTime = undefined;
      this._privateIp = undefined;
      this._ramdiskId = undefined;
      this._region = undefined;
      this._regions = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._accountIds = value.accountIds;
      this._architecture = value.architecture;
      this._availabilityZone = value.availabilityZone;
      this._availabilityZones = value.availabilityZones;
      this._billingProducts = value.billingProducts;
      this._certificate = value.certificate;
      this._imageId = value.imageId;
      this._instanceId = value.instanceId;
      this._instanceIds = value.instanceIds;
      this._instanceType = value.instanceType;
      this._instanceTypes = value.instanceTypes;
      this._kernelId = value.kernelId;
      this._marketplaceProductCodes = value.marketplaceProductCodes;
      this._pendingTime = value.pendingTime;
      this._privateIp = value.privateIp;
      this._ramdiskId = value.ramdiskId;
      this._region = value.region;
      this._regions = value.regions;
      this._version = value.version;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('account_ids'));
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // billing_products - computed: false, optional: true, required: false
  private _billingProducts?: string; 
  public get billingProducts() {
    return this.getStringAttribute('billing_products');
  }
  public set billingProducts(value: string) {
    this._billingProducts = value;
  }
  public resetBillingProducts() {
    this._billingProducts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProductsInput() {
    return this._billingProducts;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_types'));
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // kernel_id - computed: false, optional: true, required: false
  private _kernelId?: string; 
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }
  public set kernelId(value: string) {
    this._kernelId = value;
  }
  public resetKernelId() {
    this._kernelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelIdInput() {
    return this._kernelId;
  }

  // marketplace_product_codes - computed: false, optional: true, required: false
  private _marketplaceProductCodes?: string; 
  public get marketplaceProductCodes() {
    return this.getStringAttribute('marketplace_product_codes');
  }
  public set marketplaceProductCodes(value: string) {
    this._marketplaceProductCodes = value;
  }
  public resetMarketplaceProductCodes() {
    this._marketplaceProductCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketplaceProductCodesInput() {
    return this._marketplaceProductCodes;
  }

  // pending_time - computed: false, optional: true, required: false
  private _pendingTime?: string; 
  public get pendingTime() {
    return this.getStringAttribute('pending_time');
  }
  public set pendingTime(value: string) {
    this._pendingTime = value;
  }
  public resetPendingTime() {
    this._pendingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingTimeInput() {
    return this._pendingTime;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // ramdisk_id - computed: false, optional: true, required: false
  private _ramdiskId?: string; 
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }
  public set ramdiskId(value: string) {
    this._ramdiskId = value;
  }
  public resetRamdiskId() {
    this._ramdiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramdiskIdInput() {
    return this._ramdiskId;
  }

  // region - computed: false, optional: true, required: false
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

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // version - computed: false, optional: true, required: false
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
export interface TrustProviderAwsRole {
  /**
  * The ID of the AWS account that is hosting the Client Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#account_id TrustProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * The set of accepted AWS Account IDs which are hosting the Client Workloads. Used only for cases where multiple AWS Account IDs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#account_ids TrustProvider#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * The Name of the AWS IAM Role which is running the Client Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#assumed_role TrustProvider#assumed_role}
  */
  readonly assumedRole?: string;
  /**
  * The set of accepted AWS Assumed Roles which are hosting the Client Workloads. Used only for cases where multiple AWS Assumed Roles can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#assumed_roles TrustProvider#assumed_roles}
  */
  readonly assumedRoles?: string[];
  /**
  * The ARN of the AWS IAM Role which is running the Client Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#role_arn TrustProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The set of accepted Role ARNs which are hosting the Client Workloads. Used only for cases where multiple Role ARNs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#role_arns TrustProvider#role_arns}
  */
  readonly roleArns?: string[];
  /**
  * The UserID of the AWS IAM Account which is running the Client Workload (not commonly used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#username TrustProvider#username}
  */
  readonly username?: string;
  /**
  * The set of accepted AWS UserIDs which are hosting the Client Workloads. Used only for cases where multiple AWS UserIDs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#usernames TrustProvider#usernames}
  */
  readonly usernames?: string[];
}

export function trustProviderAwsRoleToTerraform(struct?: TrustProviderAwsRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountIds),
    assumed_role: cdktf.stringToTerraform(struct!.assumedRole),
    assumed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assumedRoles),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roleArns),
    username: cdktf.stringToTerraform(struct!.username),
    usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usernames),
  }
}


export function trustProviderAwsRoleToHclTerraform(struct?: TrustProviderAwsRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    assumed_role: {
      value: cdktf.stringToHclTerraform(struct!.assumedRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assumed_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assumedRoles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roleArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usernames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usernames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrustProviderAwsRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrustProviderAwsRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._assumedRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumedRole = this._assumedRole;
    }
    if (this._assumedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumedRoles = this._assumedRoles;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._roleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArns = this._roleArns;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernames !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernames = this._usernames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustProviderAwsRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._accountIds = undefined;
      this._assumedRole = undefined;
      this._assumedRoles = undefined;
      this._roleArn = undefined;
      this._roleArns = undefined;
      this._username = undefined;
      this._usernames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._accountIds = value.accountIds;
      this._assumedRole = value.assumedRole;
      this._assumedRoles = value.assumedRoles;
      this._roleArn = value.roleArn;
      this._roleArns = value.roleArns;
      this._username = value.username;
      this._usernames = value.usernames;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('account_ids'));
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // assumed_role - computed: false, optional: true, required: false
  private _assumedRole?: string; 
  public get assumedRole() {
    return this.getStringAttribute('assumed_role');
  }
  public set assumedRole(value: string) {
    this._assumedRole = value;
  }
  public resetAssumedRole() {
    this._assumedRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumedRoleInput() {
    return this._assumedRole;
  }

  // assumed_roles - computed: false, optional: true, required: false
  private _assumedRoles?: string[]; 
  public get assumedRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('assumed_roles'));
  }
  public set assumedRoles(value: string[]) {
    this._assumedRoles = value;
  }
  public resetAssumedRoles() {
    this._assumedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumedRolesInput() {
    return this._assumedRoles;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_arns - computed: false, optional: true, required: false
  private _roleArns?: string[]; 
  public get roleArns() {
    return cdktf.Fn.tolist(this.getListAttribute('role_arns'));
  }
  public set roleArns(value: string[]) {
    this._roleArns = value;
  }
  public resetRoleArns() {
    this._roleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnsInput() {
    return this._roleArns;
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

  // usernames - computed: false, optional: true, required: false
  private _usernames?: string[]; 
  public get usernames() {
    return cdktf.Fn.tolist(this.getListAttribute('usernames'));
  }
  public set usernames(value: string[]) {
    this._usernames = value;
  }
  public resetUsernames() {
    this._usernames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamesInput() {
    return this._usernames;
  }
}
export interface TrustProviderAzureMetadata {
  /**
  * Specific SKU for the Virtual Machine image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#sku TrustProvider#sku}
  */
  readonly sku?: string;
  /**
  * The set of accepted Azure SKUs which are hosting the Client Workloads. Used only for cases where multiple Azure SKUs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#skus TrustProvider#skus}
  */
  readonly skus?: string[];
  /**
  * Azure subscription for the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#subscription_id TrustProvider#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The set of accepted Azure Subscription IDs which are hosting the Client Workloads. Used only for cases where multiple Azure Subscription IDs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#subscription_ids TrustProvider#subscription_ids}
  */
  readonly subscriptionIds?: string[];
  /**
  * Unique identifier for the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#vm_id TrustProvider#vm_id}
  */
  readonly vmId?: string;
  /**
  * The set of accepted Azure VM IDs which are hosting the Client Workloads. Used only for cases where multiple Azure VM IDs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#vm_ids TrustProvider#vm_ids}
  */
  readonly vmIds?: string[];
}

export function trustProviderAzureMetadataToTerraform(struct?: TrustProviderAzureMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sku: cdktf.stringToTerraform(struct!.sku),
    skus: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.skus),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subscriptionIds),
    vm_id: cdktf.stringToTerraform(struct!.vmId),
    vm_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vmIds),
  }
}


export function trustProviderAzureMetadataToHclTerraform(struct?: TrustProviderAzureMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skus: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.skus),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subscriptionIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vm_id: {
      value: cdktf.stringToHclTerraform(struct!.vmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vmIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrustProviderAzureMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrustProviderAzureMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._skus !== undefined) {
      hasAnyValues = true;
      internalValueResult.skus = this._skus;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._subscriptionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionIds = this._subscriptionIds;
    }
    if (this._vmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmId = this._vmId;
    }
    if (this._vmIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmIds = this._vmIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustProviderAzureMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sku = undefined;
      this._skus = undefined;
      this._subscriptionId = undefined;
      this._subscriptionIds = undefined;
      this._vmId = undefined;
      this._vmIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sku = value.sku;
      this._skus = value.skus;
      this._subscriptionId = value.subscriptionId;
      this._subscriptionIds = value.subscriptionIds;
      this._vmId = value.vmId;
      this._vmIds = value.vmIds;
    }
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // skus - computed: false, optional: true, required: false
  private _skus?: string[]; 
  public get skus() {
    return cdktf.Fn.tolist(this.getListAttribute('skus'));
  }
  public set skus(value: string[]) {
    this._skus = value;
  }
  public resetSkus() {
    this._skus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skusInput() {
    return this._skus;
  }

  // subscription_id - computed: false, optional: true, required: false
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

  // subscription_ids - computed: false, optional: true, required: false
  private _subscriptionIds?: string[]; 
  public get subscriptionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subscription_ids'));
  }
  public set subscriptionIds(value: string[]) {
    this._subscriptionIds = value;
  }
  public resetSubscriptionIds() {
    this._subscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdsInput() {
    return this._subscriptionIds;
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

  // vm_ids - computed: false, optional: true, required: false
  private _vmIds?: string[]; 
  public get vmIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_ids'));
  }
  public set vmIds(value: string[]) {
    this._vmIds = value;
  }
  public resetVmIds() {
    this._vmIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdsInput() {
    return this._vmIds;
  }
}
export interface TrustProviderGcpIdentity {
  /**
  * The GCP Service Account email address associated with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#email TrustProvider#email}
  */
  readonly email?: string;
  /**
  * A set of GCP Service Account email addresses that are associated with the resource(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#emails TrustProvider#emails}
  */
  readonly emails?: string[];
}

export function trustProviderGcpIdentityToTerraform(struct?: TrustProviderGcpIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
  }
}


export function trustProviderGcpIdentityToHclTerraform(struct?: TrustProviderGcpIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrustProviderGcpIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrustProviderGcpIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustProviderGcpIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._emails = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._emails = value.emails;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // emails - computed: false, optional: true, required: false
  private _emails?: string[]; 
  public get emails() {
    return cdktf.Fn.tolist(this.getListAttribute('emails'));
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }
}
export interface TrustProviderGithubAction {
  /**
  * The GitHub Actor which initiated the GitHub Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#actor TrustProvider#actor}
  */
  readonly actor?: string;
  /**
  * The set of accepted GitHub ID Token Actors which initiated the GitHub Action. Used only for cases where multiple GitHub ID Token Actors can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#actors TrustProvider#actors}
  */
  readonly actors?: string[];
  /**
  * The set of accepted GitHub ID Token Repositories which initiated the GitHub Action. Used only for cases where multiple GitHub ID Token Repositories can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#repositories TrustProvider#repositories}
  */
  readonly repositories?: string[];
  /**
  * The GitHub Repository associated with the GitHub Action ID Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#repository TrustProvider#repository}
  */
  readonly repository?: string;
  /**
  * The GitHub Workflow execution associated with the GitHub Action ID Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#workflow TrustProvider#workflow}
  */
  readonly workflow?: string;
  /**
  * The set of accepted GitHub ID Token Workflows which initiated the GitHub Action. Used only for cases where multiple GitHub ID Token Workflows can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#workflows TrustProvider#workflows}
  */
  readonly workflows?: string[];
}

export function trustProviderGithubActionToTerraform(struct?: TrustProviderGithubAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actor: cdktf.stringToTerraform(struct!.actor),
    actors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actors),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    repository: cdktf.stringToTerraform(struct!.repository),
    workflow: cdktf.stringToTerraform(struct!.workflow),
    workflows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workflows),
  }
}


export function trustProviderGithubActionToHclTerraform(struct?: TrustProviderGithubAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actor: {
      value: cdktf.stringToHclTerraform(struct!.actor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow: {
      value: cdktf.stringToHclTerraform(struct!.workflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflows: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.workflows),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrustProviderGithubActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrustProviderGithubAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actor !== undefined) {
      hasAnyValues = true;
      internalValueResult.actor = this._actor;
    }
    if (this._actors !== undefined) {
      hasAnyValues = true;
      internalValueResult.actors = this._actors;
    }
    if (this._repositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._workflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow;
    }
    if (this._workflows !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflows = this._workflows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustProviderGithubAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actor = undefined;
      this._actors = undefined;
      this._repositories = undefined;
      this._repository = undefined;
      this._workflow = undefined;
      this._workflows = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actor = value.actor;
      this._actors = value.actors;
      this._repositories = value.repositories;
      this._repository = value.repository;
      this._workflow = value.workflow;
      this._workflows = value.workflows;
    }
  }

  // actor - computed: false, optional: true, required: false
  private _actor?: string; 
  public get actor() {
    return this.getStringAttribute('actor');
  }
  public set actor(value: string) {
    this._actor = value;
  }
  public resetActor() {
    this._actor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorInput() {
    return this._actor;
  }

  // actors - computed: false, optional: true, required: false
  private _actors?: string[]; 
  public get actors() {
    return cdktf.Fn.tolist(this.getListAttribute('actors'));
  }
  public set actors(value: string[]) {
    this._actors = value;
  }
  public resetActors() {
    this._actors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorsInput() {
    return this._actors;
  }

  // oidc_audience - computed: true, optional: false, required: false
  public get oidcAudience() {
    return this.getStringAttribute('oidc_audience');
  }

  // oidc_client_id - computed: true, optional: false, required: false
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }

  // repositories - computed: false, optional: true, required: false
  private _repositories?: string[]; 
  public get repositories() {
    return cdktf.Fn.tolist(this.getListAttribute('repositories'));
  }
  public set repositories(value: string[]) {
    this._repositories = value;
  }
  public resetRepositories() {
    this._repositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  public resetWorkflow() {
    this._workflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // workflows - computed: false, optional: true, required: false
  private _workflows?: string[]; 
  public get workflows() {
    return cdktf.Fn.tolist(this.getListAttribute('workflows'));
  }
  public set workflows(value: string[]) {
    this._workflows = value;
  }
  public resetWorkflows() {
    this._workflows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowsInput() {
    return this._workflows;
  }
}
export interface TrustProviderGitlabJob {
  /**
  * The GitLab ID Token Namespace Path which initiated the GitLab Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#namespace_path TrustProvider#namespace_path}
  */
  readonly namespacePath?: string;
  /**
  * The set of accepted GitLab ID Token Namespace Paths which initiated the GitLab Job. Used only for cases where multiple GitLab ID Token Namespace Paths can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#namespace_paths TrustProvider#namespace_paths}
  */
  readonly namespacePaths?: string[];
  /**
  * The GitLab OIDC Endpoint used for validating GitLab Job generated ID Tokens. Default: `https://gitlab.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#oidc_endpoint TrustProvider#oidc_endpoint}
  */
  readonly oidcEndpoint?: string;
  /**
  * The GitLab ID Token Project Path which initiated the GitLab Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#project_path TrustProvider#project_path}
  */
  readonly projectPath?: string;
  /**
  * The set of accepted GitLab ID Token Project Paths which initiated the GitLab Job. Used only for cases where multiple GitLab ID Token Project Paths can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#project_paths TrustProvider#project_paths}
  */
  readonly projectPaths?: string[];
  /**
  * The GitLab ID Token Ref Path which initiated the GitLab Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#ref_path TrustProvider#ref_path}
  */
  readonly refPath?: string;
  /**
  * The set of accepted GitLab ID Token Ref Paths which initiated the GitLab Job. Used only for cases where multiple GitLab ID Token Ref Paths can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#ref_paths TrustProvider#ref_paths}
  */
  readonly refPaths?: string[];
  /**
  * The GitLab ID Token Subject which initiated the GitLab Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#subject TrustProvider#subject}
  */
  readonly subject?: string;
  /**
  * The set of accepted GitLab ID Token Subjects which initiated the GitLab Job. Used only for cases where multiple GitLab ID Token Subjects can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#subjects TrustProvider#subjects}
  */
  readonly subjects?: string[];
}

export function trustProviderGitlabJobToTerraform(struct?: TrustProviderGitlabJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_path: cdktf.stringToTerraform(struct!.namespacePath),
    namespace_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespacePaths),
    oidc_endpoint: cdktf.stringToTerraform(struct!.oidcEndpoint),
    project_path: cdktf.stringToTerraform(struct!.projectPath),
    project_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectPaths),
    ref_path: cdktf.stringToTerraform(struct!.refPath),
    ref_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.refPaths),
    subject: cdktf.stringToTerraform(struct!.subject),
    subjects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjects),
  }
}


export function trustProviderGitlabJobToHclTerraform(struct?: TrustProviderGitlabJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_path: {
      value: cdktf.stringToHclTerraform(struct!.namespacePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespacePaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oidc_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.oidcEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_path: {
      value: cdktf.stringToHclTerraform(struct!.projectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ref_path: {
      value: cdktf.stringToHclTerraform(struct!.refPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.refPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subjects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjects),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrustProviderGitlabJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrustProviderGitlabJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespacePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacePath = this._namespacePath;
    }
    if (this._namespacePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacePaths = this._namespacePaths;
    }
    if (this._oidcEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcEndpoint = this._oidcEndpoint;
    }
    if (this._projectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectPath = this._projectPath;
    }
    if (this._projectPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectPaths = this._projectPaths;
    }
    if (this._refPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.refPath = this._refPath;
    }
    if (this._refPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.refPaths = this._refPaths;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustProviderGitlabJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespacePath = undefined;
      this._namespacePaths = undefined;
      this._oidcEndpoint = undefined;
      this._projectPath = undefined;
      this._projectPaths = undefined;
      this._refPath = undefined;
      this._refPaths = undefined;
      this._subject = undefined;
      this._subjects = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespacePath = value.namespacePath;
      this._namespacePaths = value.namespacePaths;
      this._oidcEndpoint = value.oidcEndpoint;
      this._projectPath = value.projectPath;
      this._projectPaths = value.projectPaths;
      this._refPath = value.refPath;
      this._refPaths = value.refPaths;
      this._subject = value.subject;
      this._subjects = value.subjects;
    }
  }

  // namespace_path - computed: false, optional: true, required: false
  private _namespacePath?: string; 
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }
  public set namespacePath(value: string) {
    this._namespacePath = value;
  }
  public resetNamespacePath() {
    this._namespacePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacePathInput() {
    return this._namespacePath;
  }

  // namespace_paths - computed: false, optional: true, required: false
  private _namespacePaths?: string[]; 
  public get namespacePaths() {
    return cdktf.Fn.tolist(this.getListAttribute('namespace_paths'));
  }
  public set namespacePaths(value: string[]) {
    this._namespacePaths = value;
  }
  public resetNamespacePaths() {
    this._namespacePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacePathsInput() {
    return this._namespacePaths;
  }

  // oidc_audience - computed: true, optional: false, required: false
  public get oidcAudience() {
    return this.getStringAttribute('oidc_audience');
  }

  // oidc_client_id - computed: true, optional: false, required: false
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }

  // oidc_endpoint - computed: true, optional: true, required: false
  private _oidcEndpoint?: string; 
  public get oidcEndpoint() {
    return this.getStringAttribute('oidc_endpoint');
  }
  public set oidcEndpoint(value: string) {
    this._oidcEndpoint = value;
  }
  public resetOidcEndpoint() {
    this._oidcEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcEndpointInput() {
    return this._oidcEndpoint;
  }

  // project_path - computed: false, optional: true, required: false
  private _projectPath?: string; 
  public get projectPath() {
    return this.getStringAttribute('project_path');
  }
  public set projectPath(value: string) {
    this._projectPath = value;
  }
  public resetProjectPath() {
    this._projectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectPathInput() {
    return this._projectPath;
  }

  // project_paths - computed: false, optional: true, required: false
  private _projectPaths?: string[]; 
  public get projectPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('project_paths'));
  }
  public set projectPaths(value: string[]) {
    this._projectPaths = value;
  }
  public resetProjectPaths() {
    this._projectPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectPathsInput() {
    return this._projectPaths;
  }

  // ref_path - computed: false, optional: true, required: false
  private _refPath?: string; 
  public get refPath() {
    return this.getStringAttribute('ref_path');
  }
  public set refPath(value: string) {
    this._refPath = value;
  }
  public resetRefPath() {
    this._refPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refPathInput() {
    return this._refPath;
  }

  // ref_paths - computed: false, optional: true, required: false
  private _refPaths?: string[]; 
  public get refPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('ref_paths'));
  }
  public set refPaths(value: string[]) {
    this._refPaths = value;
  }
  public resetRefPaths() {
    this._refPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refPathsInput() {
    return this._refPaths;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subjects - computed: false, optional: true, required: false
  private _subjects?: string[]; 
  public get subjects() {
    return cdktf.Fn.tolist(this.getListAttribute('subjects'));
  }
  public set subjects(value: string[]) {
    this._subjects = value;
  }
  public resetSubjects() {
    this._subjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects;
  }
}
export interface TrustProviderKerberos {
  /**
  * Unique identifier for the Aembit Agent Controller to use for Signature verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#agent_controller_ids TrustProvider#agent_controller_ids}
  */
  readonly agentControllerIds: string[];
  /**
  * The Kerberos Principal of the authenticated Agent Proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#principal TrustProvider#principal}
  */
  readonly principal?: string;
  /**
  * The set of accepted Kerberos Principals which initiated the authenticated Agent Proxy. Used only for cases where multiple Kerberos Principals can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#principals TrustProvider#principals}
  */
  readonly principals?: string[];
  /**
  * The Kerberos Realm or ActiveDirectory Domain of the authenticated Agent Proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#realm_domain TrustProvider#realm_domain}
  */
  readonly realmDomain?: string;
  /**
  * The set of accepted Kerberos Realms or ActiveDirectory Domains which initiated the authenticated Agent Proxy. Used for cases where multiple Kerberos Realms or ActiveDirectory Domains can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#realms_domains TrustProvider#realms_domains}
  */
  readonly realmsDomains?: string[];
  /**
  * The Source IP Address of the authenticated Agent Proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#source_ip TrustProvider#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * The set of accepted Source IPs which initiated the authenticated Agent Proxy. Used only for cases where multiple Source IPs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#source_ips TrustProvider#source_ips}
  */
  readonly sourceIps?: string[];
}

export function trustProviderKerberosToTerraform(struct?: TrustProviderKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_controller_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.agentControllerIds),
    principal: cdktf.stringToTerraform(struct!.principal),
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
    realm_domain: cdktf.stringToTerraform(struct!.realmDomain),
    realms_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.realmsDomains),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIps),
  }
}


export function trustProviderKerberosToHclTerraform(struct?: TrustProviderKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_controller_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.agentControllerIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    realm_domain: {
      value: cdktf.stringToHclTerraform(struct!.realmDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realms_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.realmsDomains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrustProviderKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrustProviderKerberos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentControllerIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentControllerIds = this._agentControllerIds;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    if (this._realmDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmDomain = this._realmDomain;
    }
    if (this._realmsDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmsDomains = this._realmsDomains;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIps = this._sourceIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustProviderKerberos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentControllerIds = undefined;
      this._principal = undefined;
      this._principals = undefined;
      this._realmDomain = undefined;
      this._realmsDomains = undefined;
      this._sourceIp = undefined;
      this._sourceIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentControllerIds = value.agentControllerIds;
      this._principal = value.principal;
      this._principals = value.principals;
      this._realmDomain = value.realmDomain;
      this._realmsDomains = value.realmsDomains;
      this._sourceIp = value.sourceIp;
      this._sourceIps = value.sourceIps;
    }
  }

  // agent_controller_ids - computed: false, optional: false, required: true
  private _agentControllerIds?: string[]; 
  public get agentControllerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('agent_controller_ids'));
  }
  public set agentControllerIds(value: string[]) {
    this._agentControllerIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentControllerIdsInput() {
    return this._agentControllerIds;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // principals - computed: false, optional: true, required: false
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // realm_domain - computed: false, optional: true, required: false
  private _realmDomain?: string; 
  public get realmDomain() {
    return this.getStringAttribute('realm_domain');
  }
  public set realmDomain(value: string) {
    this._realmDomain = value;
  }
  public resetRealmDomain() {
    this._realmDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmDomainInput() {
    return this._realmDomain;
  }

  // realms_domains - computed: false, optional: true, required: false
  private _realmsDomains?: string[]; 
  public get realmsDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('realms_domains'));
  }
  public set realmsDomains(value: string[]) {
    this._realmsDomains = value;
  }
  public resetRealmsDomains() {
    this._realmsDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmsDomainsInput() {
    return this._realmsDomains;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ips - computed: false, optional: true, required: false
  private _sourceIps?: string[]; 
  public get sourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ips'));
  }
  public set sourceIps(value: string[]) {
    this._sourceIps = value;
  }
  public resetSourceIps() {
    this._sourceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpsInput() {
    return this._sourceIps;
  }
}
export interface TrustProviderKubernetesServiceAccount {
  /**
  * The Issuer (`iss` claim) of the Kubernetes Service Account Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#issuer TrustProvider#issuer}
  */
  readonly issuer?: string;
  /**
  * The set of accepted Issuer values of the associated Kubernetes Service Account Token. Used only for cases where multiple Issuers can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#issuers TrustProvider#issuers}
  */
  readonly issuers?: string[];
  /**
  * The JSON Web Key Set (JWKS) containing public keys used for signature verification.<br>**Note:** Only strictly valid JSON, with no trailing commas, will pass validation for this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#jwks TrustProvider#jwks}
  */
  readonly jwks?: string;
  /**
  * The Namespace of the Kubernetes Service Account Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#namespace TrustProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The set of accepted Namespace values of the associated Kubernetes Service Account Token. Used only for cases where multiple Namespaces can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#namespaces TrustProvider#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * The OIDC Endpoint from which Public Keys can be retrieved for verifying the signature of the Kubernetes Service Account Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#oidc_endpoint TrustProvider#oidc_endpoint}
  */
  readonly oidcEndpoint?: string;
  /**
  * The Pod Name of the Kubernetes Service Account Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#pod_name TrustProvider#pod_name}
  */
  readonly podName?: string;
  /**
  * The set of accepted Pod Name values of the associated Kubernetes Service Account Token. Used only for cases where multiple Pod Names can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#pod_names TrustProvider#pod_names}
  */
  readonly podNames?: string[];
  /**
  * The Public Key that can be used to verify the signature of the Kubernetes Service Account Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#public_key TrustProvider#public_key}
  */
  readonly publicKey?: string;
  /**
  * The Service Account Name of the Kubernetes Service Account Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#service_account_name TrustProvider#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * The set of accepted Service Account Name values of the associated Kubernetes Service Account Token. Used only for cases where multiple Service Account Names can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#service_account_names TrustProvider#service_account_names}
  */
  readonly serviceAccountNames?: string[];
  /**
  * The Subject (`sub` claim) of the Kubernetes Service Account Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#subject TrustProvider#subject}
  */
  readonly subject?: string;
  /**
  * The set of accepted Subject values of the associated Kubernetes Service Account Token. Used only for cases where multiple Subjects can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#subjects TrustProvider#subjects}
  */
  readonly subjects?: string[];
  /**
  * The Symmetric Key that can be used to verify the signature of the Kubernetes Service Account Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#symmetric_key TrustProvider#symmetric_key}
  */
  readonly symmetricKey?: string;
}

export function trustProviderKubernetesServiceAccountToTerraform(struct?: TrustProviderKubernetesServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.issuers),
    jwks: cdktf.stringToTerraform(struct!.jwks),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    oidc_endpoint: cdktf.stringToTerraform(struct!.oidcEndpoint),
    pod_name: cdktf.stringToTerraform(struct!.podName),
    pod_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podNames),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    service_account_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountNames),
    subject: cdktf.stringToTerraform(struct!.subject),
    subjects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjects),
    symmetric_key: cdktf.stringToTerraform(struct!.symmetricKey),
  }
}


export function trustProviderKubernetesServiceAccountToHclTerraform(struct?: TrustProviderKubernetesServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.issuers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oidc_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.oidcEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_name: {
      value: cdktf.stringToHclTerraform(struct!.podName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccountNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subjects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjects),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    symmetric_key: {
      value: cdktf.stringToHclTerraform(struct!.symmetricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrustProviderKubernetesServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrustProviderKubernetesServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuers !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuers = this._issuers;
    }
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._oidcEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcEndpoint = this._oidcEndpoint;
    }
    if (this._podName !== undefined) {
      hasAnyValues = true;
      internalValueResult.podName = this._podName;
    }
    if (this._podNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.podNames = this._podNames;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._serviceAccountNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountNames = this._serviceAccountNames;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects;
    }
    if (this._symmetricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmetricKey = this._symmetricKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustProviderKubernetesServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuer = undefined;
      this._issuers = undefined;
      this._jwks = undefined;
      this._namespace = undefined;
      this._namespaces = undefined;
      this._oidcEndpoint = undefined;
      this._podName = undefined;
      this._podNames = undefined;
      this._publicKey = undefined;
      this._serviceAccountName = undefined;
      this._serviceAccountNames = undefined;
      this._subject = undefined;
      this._subjects = undefined;
      this._symmetricKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuer = value.issuer;
      this._issuers = value.issuers;
      this._jwks = value.jwks;
      this._namespace = value.namespace;
      this._namespaces = value.namespaces;
      this._oidcEndpoint = value.oidcEndpoint;
      this._podName = value.podName;
      this._podNames = value.podNames;
      this._publicKey = value.publicKey;
      this._serviceAccountName = value.serviceAccountName;
      this._serviceAccountNames = value.serviceAccountNames;
      this._subject = value.subject;
      this._subjects = value.subjects;
      this._symmetricKey = value.symmetricKey;
    }
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuers - computed: false, optional: true, required: false
  private _issuers?: string[]; 
  public get issuers() {
    return cdktf.Fn.tolist(this.getListAttribute('issuers'));
  }
  public set issuers(value: string[]) {
    this._issuers = value;
  }
  public resetIssuers() {
    this._issuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuersInput() {
    return this._issuers;
  }

  // jwks - computed: true, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // oidc_endpoint - computed: false, optional: true, required: false
  private _oidcEndpoint?: string; 
  public get oidcEndpoint() {
    return this.getStringAttribute('oidc_endpoint');
  }
  public set oidcEndpoint(value: string) {
    this._oidcEndpoint = value;
  }
  public resetOidcEndpoint() {
    this._oidcEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcEndpointInput() {
    return this._oidcEndpoint;
  }

  // pod_name - computed: false, optional: true, required: false
  private _podName?: string; 
  public get podName() {
    return this.getStringAttribute('pod_name');
  }
  public set podName(value: string) {
    this._podName = value;
  }
  public resetPodName() {
    this._podName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podNameInput() {
    return this._podName;
  }

  // pod_names - computed: false, optional: true, required: false
  private _podNames?: string[]; 
  public get podNames() {
    return cdktf.Fn.tolist(this.getListAttribute('pod_names'));
  }
  public set podNames(value: string[]) {
    this._podNames = value;
  }
  public resetPodNames() {
    this._podNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podNamesInput() {
    return this._podNames;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // service_account_names - computed: false, optional: true, required: false
  private _serviceAccountNames?: string[]; 
  public get serviceAccountNames() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_names'));
  }
  public set serviceAccountNames(value: string[]) {
    this._serviceAccountNames = value;
  }
  public resetServiceAccountNames() {
    this._serviceAccountNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNamesInput() {
    return this._serviceAccountNames;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subjects - computed: false, optional: true, required: false
  private _subjects?: string[]; 
  public get subjects() {
    return cdktf.Fn.tolist(this.getListAttribute('subjects'));
  }
  public set subjects(value: string[]) {
    this._subjects = value;
  }
  public resetSubjects() {
    this._subjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects;
  }

  // symmetric_key - computed: false, optional: true, required: false
  private _symmetricKey?: string; 
  public get symmetricKey() {
    return this.getStringAttribute('symmetric_key');
  }
  public set symmetricKey(value: string) {
    this._symmetricKey = value;
  }
  public resetSymmetricKey() {
    this._symmetricKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricKeyInput() {
    return this._symmetricKey;
  }
}
export interface TrustProviderOidcIdToken {
  /**
  * The Audience (`aud` claim) of the OIDC ID Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#audience TrustProvider#audience}
  */
  readonly audience?: string;
  /**
  * The set of accepted Audience values of the associated OIDC ID Token. Used only for cases where multiple Audiences can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#audiences TrustProvider#audiences}
  */
  readonly audiences?: string[];
  /**
  * The Issuer (`iss` claim) of the OIDC ID Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#issuer TrustProvider#issuer}
  */
  readonly issuer?: string;
  /**
  * The set of accepted Issuer values of the associated OIDC ID Token. Used only for cases where multiple Issuers can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#issuers TrustProvider#issuers}
  */
  readonly issuers?: string[];
  /**
  * The JSON Web Key Set (JWKS) containing public keys used for signature verification.<br>**Note:** Only strictly valid JSON, with no trailing commas, will pass validation for this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#jwks TrustProvider#jwks}
  */
  readonly jwks?: string;
  /**
  * The OIDC Endpoint from which Public Keys can be retrieved for verifying the signature of the OIDC ID Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#oidc_endpoint TrustProvider#oidc_endpoint}
  */
  readonly oidcEndpoint?: string;
  /**
  * The Public Key that can be used to verify the signature of the OIDC ID Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#public_key TrustProvider#public_key}
  */
  readonly publicKey?: string;
  /**
  * The Subject (`sub` claim) of the OIDC ID Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#subject TrustProvider#subject}
  */
  readonly subject?: string;
  /**
  * The set of accepted Subject values of the associated OIDC ID Token. Used only for cases where multiple Subjects can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#subjects TrustProvider#subjects}
  */
  readonly subjects?: string[];
  /**
  * The Symmetric Key that can be used to verify the signature of the OIDC ID Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#symmetric_key TrustProvider#symmetric_key}
  */
  readonly symmetricKey?: string;
}

export function trustProviderOidcIdTokenToTerraform(struct?: TrustProviderOidcIdToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.issuers),
    jwks: cdktf.stringToTerraform(struct!.jwks),
    oidc_endpoint: cdktf.stringToTerraform(struct!.oidcEndpoint),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    subject: cdktf.stringToTerraform(struct!.subject),
    subjects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjects),
    symmetric_key: cdktf.stringToTerraform(struct!.symmetricKey),
  }
}


export function trustProviderOidcIdTokenToHclTerraform(struct?: TrustProviderOidcIdToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.issuers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.oidcEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subjects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjects),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    symmetric_key: {
      value: cdktf.stringToHclTerraform(struct!.symmetricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrustProviderOidcIdTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrustProviderOidcIdToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuers !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuers = this._issuers;
    }
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    if (this._oidcEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcEndpoint = this._oidcEndpoint;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects;
    }
    if (this._symmetricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmetricKey = this._symmetricKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustProviderOidcIdToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._audiences = undefined;
      this._issuer = undefined;
      this._issuers = undefined;
      this._jwks = undefined;
      this._oidcEndpoint = undefined;
      this._publicKey = undefined;
      this._subject = undefined;
      this._subjects = undefined;
      this._symmetricKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._audiences = value.audiences;
      this._issuer = value.issuer;
      this._issuers = value.issuers;
      this._jwks = value.jwks;
      this._oidcEndpoint = value.oidcEndpoint;
      this._publicKey = value.publicKey;
      this._subject = value.subject;
      this._subjects = value.subjects;
      this._symmetricKey = value.symmetricKey;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return cdktf.Fn.tolist(this.getListAttribute('audiences'));
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuers - computed: false, optional: true, required: false
  private _issuers?: string[]; 
  public get issuers() {
    return cdktf.Fn.tolist(this.getListAttribute('issuers'));
  }
  public set issuers(value: string[]) {
    this._issuers = value;
  }
  public resetIssuers() {
    this._issuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuersInput() {
    return this._issuers;
  }

  // jwks - computed: true, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // oidc_endpoint - computed: false, optional: true, required: false
  private _oidcEndpoint?: string; 
  public get oidcEndpoint() {
    return this.getStringAttribute('oidc_endpoint');
  }
  public set oidcEndpoint(value: string) {
    this._oidcEndpoint = value;
  }
  public resetOidcEndpoint() {
    this._oidcEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcEndpointInput() {
    return this._oidcEndpoint;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subjects - computed: false, optional: true, required: false
  private _subjects?: string[]; 
  public get subjects() {
    return cdktf.Fn.tolist(this.getListAttribute('subjects'));
  }
  public set subjects(value: string[]) {
    this._subjects = value;
  }
  public resetSubjects() {
    this._subjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects;
  }

  // symmetric_key - computed: false, optional: true, required: false
  private _symmetricKey?: string; 
  public get symmetricKey() {
    return this.getStringAttribute('symmetric_key');
  }
  public set symmetricKey(value: string) {
    this._symmetricKey = value;
  }
  public resetSymmetricKey() {
    this._symmetricKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricKeyInput() {
    return this._symmetricKey;
  }
}
export interface TrustProviderTerraformWorkspace {
  /**
  * The Organization ID of the calling Terraform Workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#organization_id TrustProvider#organization_id}
  */
  readonly organizationId?: string;
  /**
  * The set of accepted Organization ID values of the calling Terraform Workspace. Used only for cases where multiple Terraform ID Token Organization IDs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#organization_ids TrustProvider#organization_ids}
  */
  readonly organizationIds?: string[];
  /**
  * The Project ID of the calling Terraform Workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#project_id TrustProvider#project_id}
  */
  readonly projectId?: string;
  /**
  * The set of accepted Project ID values of the calling Terraform Workspace. Used only for cases where multiple Terraform ID Token Project IDs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#project_ids TrustProvider#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * The Workspace ID of the calling Terraform Workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#workspace_id TrustProvider#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * The set of accepted Workspace ID values of the calling Terraform Workspace. Used only for cases where multiple Terraform ID Token Workspace IDs can be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#workspace_ids TrustProvider#workspace_ids}
  */
  readonly workspaceIds?: string[];
}

export function trustProviderTerraformWorkspaceToTerraform(struct?: TrustProviderTerraformWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
    organization_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationIds),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
    workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workspaceIds),
  }
}


export function trustProviderTerraformWorkspaceToHclTerraform(struct?: TrustProviderTerraformWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizationIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.workspaceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrustProviderTerraformWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrustProviderTerraformWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._organizationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationIds = this._organizationIds;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    if (this._workspaceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceIds = this._workspaceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustProviderTerraformWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organizationId = undefined;
      this._organizationIds = undefined;
      this._projectId = undefined;
      this._projectIds = undefined;
      this._workspaceId = undefined;
      this._workspaceIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organizationId = value.organizationId;
      this._organizationIds = value.organizationIds;
      this._projectId = value.projectId;
      this._projectIds = value.projectIds;
      this._workspaceId = value.workspaceId;
      this._workspaceIds = value.workspaceIds;
    }
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // organization_ids - computed: false, optional: true, required: false
  private _organizationIds?: string[]; 
  public get organizationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('organization_ids'));
  }
  public set organizationIds(value: string[]) {
    this._organizationIds = value;
  }
  public resetOrganizationIds() {
    this._organizationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdsInput() {
    return this._organizationIds;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // workspace_ids - computed: false, optional: true, required: false
  private _workspaceIds?: string[]; 
  public get workspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('workspace_ids'));
  }
  public set workspaceIds(value: string[]) {
    this._workspaceIds = value;
  }
  public resetWorkspaceIds() {
    this._workspaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsInput() {
    return this._workspaceIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider aembit_trust_provider}
*/
export class TrustProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_trust_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrustProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrustProvider to import
  * @param importFromId The id of the existing TrustProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrustProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_trust_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/trust_provider aembit_trust_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustProviderConfig
  */
  public constructor(scope: Construct, id: string, config: TrustProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_trust_provider',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsMetadata.internalValue = config.awsMetadata;
    this._awsRole.internalValue = config.awsRole;
    this._azureMetadata.internalValue = config.azureMetadata;
    this._description = config.description;
    this._gcpIdentity.internalValue = config.gcpIdentity;
    this._githubAction.internalValue = config.githubAction;
    this._gitlabJob.internalValue = config.gitlabJob;
    this._isActive = config.isActive;
    this._kerberos.internalValue = config.kerberos;
    this._kubernetesServiceAccount.internalValue = config.kubernetesServiceAccount;
    this._name = config.name;
    this._oidcIdToken.internalValue = config.oidcIdToken;
    this._tags = config.tags;
    this._terraformWorkspace.internalValue = config.terraformWorkspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_metadata - computed: false, optional: true, required: false
  private _awsMetadata = new TrustProviderAwsMetadataOutputReference(this, "aws_metadata");
  public get awsMetadata() {
    return this._awsMetadata;
  }
  public putAwsMetadata(value: TrustProviderAwsMetadata) {
    this._awsMetadata.internalValue = value;
  }
  public resetAwsMetadata() {
    this._awsMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsMetadataInput() {
    return this._awsMetadata.internalValue;
  }

  // aws_role - computed: false, optional: true, required: false
  private _awsRole = new TrustProviderAwsRoleOutputReference(this, "aws_role");
  public get awsRole() {
    return this._awsRole;
  }
  public putAwsRole(value: TrustProviderAwsRole) {
    this._awsRole.internalValue = value;
  }
  public resetAwsRole() {
    this._awsRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleInput() {
    return this._awsRole.internalValue;
  }

  // azure_metadata - computed: false, optional: true, required: false
  private _azureMetadata = new TrustProviderAzureMetadataOutputReference(this, "azure_metadata");
  public get azureMetadata() {
    return this._azureMetadata;
  }
  public putAzureMetadata(value: TrustProviderAzureMetadata) {
    this._azureMetadata.internalValue = value;
  }
  public resetAzureMetadata() {
    this._azureMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMetadataInput() {
    return this._azureMetadata.internalValue;
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

  // gcp_identity - computed: false, optional: true, required: false
  private _gcpIdentity = new TrustProviderGcpIdentityOutputReference(this, "gcp_identity");
  public get gcpIdentity() {
    return this._gcpIdentity;
  }
  public putGcpIdentity(value: TrustProviderGcpIdentity) {
    this._gcpIdentity.internalValue = value;
  }
  public resetGcpIdentity() {
    this._gcpIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpIdentityInput() {
    return this._gcpIdentity.internalValue;
  }

  // github_action - computed: false, optional: true, required: false
  private _githubAction = new TrustProviderGithubActionOutputReference(this, "github_action");
  public get githubAction() {
    return this._githubAction;
  }
  public putGithubAction(value: TrustProviderGithubAction) {
    this._githubAction.internalValue = value;
  }
  public resetGithubAction() {
    this._githubAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubActionInput() {
    return this._githubAction.internalValue;
  }

  // gitlab_job - computed: false, optional: true, required: false
  private _gitlabJob = new TrustProviderGitlabJobOutputReference(this, "gitlab_job");
  public get gitlabJob() {
    return this._gitlabJob;
  }
  public putGitlabJob(value: TrustProviderGitlabJob) {
    this._gitlabJob.internalValue = value;
  }
  public resetGitlabJob() {
    this._gitlabJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabJobInput() {
    return this._gitlabJob.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // kerberos - computed: false, optional: true, required: false
  private _kerberos = new TrustProviderKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: TrustProviderKerberos) {
    this._kerberos.internalValue = value;
  }
  public resetKerberos() {
    this._kerberos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
  }

  // kubernetes_service_account - computed: false, optional: true, required: false
  private _kubernetesServiceAccount = new TrustProviderKubernetesServiceAccountOutputReference(this, "kubernetes_service_account");
  public get kubernetesServiceAccount() {
    return this._kubernetesServiceAccount;
  }
  public putKubernetesServiceAccount(value: TrustProviderKubernetesServiceAccount) {
    this._kubernetesServiceAccount.internalValue = value;
  }
  public resetKubernetesServiceAccount() {
    this._kubernetesServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesServiceAccountInput() {
    return this._kubernetesServiceAccount.internalValue;
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

  // oidc_id_token - computed: false, optional: true, required: false
  private _oidcIdToken = new TrustProviderOidcIdTokenOutputReference(this, "oidc_id_token");
  public get oidcIdToken() {
    return this._oidcIdToken;
  }
  public putOidcIdToken(value: TrustProviderOidcIdToken) {
    this._oidcIdToken.internalValue = value;
  }
  public resetOidcIdToken() {
    this._oidcIdToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcIdTokenInput() {
    return this._oidcIdToken.internalValue;
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

  // terraform_workspace - computed: false, optional: true, required: false
  private _terraformWorkspace = new TrustProviderTerraformWorkspaceOutputReference(this, "terraform_workspace");
  public get terraformWorkspace() {
    return this._terraformWorkspace;
  }
  public putTerraformWorkspace(value: TrustProviderTerraformWorkspace) {
    this._terraformWorkspace.internalValue = value;
  }
  public resetTerraformWorkspace() {
    this._terraformWorkspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformWorkspaceInput() {
    return this._terraformWorkspace.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_metadata: trustProviderAwsMetadataToTerraform(this._awsMetadata.internalValue),
      aws_role: trustProviderAwsRoleToTerraform(this._awsRole.internalValue),
      azure_metadata: trustProviderAzureMetadataToTerraform(this._azureMetadata.internalValue),
      description: cdktf.stringToTerraform(this._description),
      gcp_identity: trustProviderGcpIdentityToTerraform(this._gcpIdentity.internalValue),
      github_action: trustProviderGithubActionToTerraform(this._githubAction.internalValue),
      gitlab_job: trustProviderGitlabJobToTerraform(this._gitlabJob.internalValue),
      is_active: cdktf.booleanToTerraform(this._isActive),
      kerberos: trustProviderKerberosToTerraform(this._kerberos.internalValue),
      kubernetes_service_account: trustProviderKubernetesServiceAccountToTerraform(this._kubernetesServiceAccount.internalValue),
      name: cdktf.stringToTerraform(this._name),
      oidc_id_token: trustProviderOidcIdTokenToTerraform(this._oidcIdToken.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      terraform_workspace: trustProviderTerraformWorkspaceToTerraform(this._terraformWorkspace.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_metadata: {
        value: trustProviderAwsMetadataToHclTerraform(this._awsMetadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrustProviderAwsMetadata",
      },
      aws_role: {
        value: trustProviderAwsRoleToHclTerraform(this._awsRole.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrustProviderAwsRole",
      },
      azure_metadata: {
        value: trustProviderAzureMetadataToHclTerraform(this._azureMetadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrustProviderAzureMetadata",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_identity: {
        value: trustProviderGcpIdentityToHclTerraform(this._gcpIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrustProviderGcpIdentity",
      },
      github_action: {
        value: trustProviderGithubActionToHclTerraform(this._githubAction.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrustProviderGithubAction",
      },
      gitlab_job: {
        value: trustProviderGitlabJobToHclTerraform(this._gitlabJob.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrustProviderGitlabJob",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kerberos: {
        value: trustProviderKerberosToHclTerraform(this._kerberos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrustProviderKerberos",
      },
      kubernetes_service_account: {
        value: trustProviderKubernetesServiceAccountToHclTerraform(this._kubernetesServiceAccount.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrustProviderKubernetesServiceAccount",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_id_token: {
        value: trustProviderOidcIdTokenToHclTerraform(this._oidcIdToken.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrustProviderOidcIdToken",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      terraform_workspace: {
        value: trustProviderTerraformWorkspaceToHclTerraform(this._terraformWorkspace.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrustProviderTerraformWorkspace",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
