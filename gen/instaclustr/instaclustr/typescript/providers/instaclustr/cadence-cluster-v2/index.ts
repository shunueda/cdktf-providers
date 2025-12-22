// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CadenceClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Version of Cadence to run on the cluster. Available versions: <ul> <li>`1.3.2`</li> <li>`1.2.2`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#cadence_version CadenceClusterV2#cadence_version}
  */
  readonly cadenceVersion: string;
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#current_cluster_operation_status CadenceClusterV2#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#description CadenceClusterV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#id CadenceClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#name CadenceClusterV2#name}
  */
  readonly name: string;
  /**
  * Creates a PCI compliant cluster, see [PCI Compliance](https://www.instaclustr.com/support/documentation/useful-information/pci-compliance/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#pci_compliance_mode CadenceClusterV2#pci_compliance_mode}
  */
  readonly pciComplianceMode: boolean | cdktf.IResolvable;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#private_network_cluster CadenceClusterV2#private_network_cluster}
  */
  readonly privateNetworkCluster: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#sla_tier CadenceClusterV2#sla_tier}
  */
  readonly slaTier: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#status CadenceClusterV2#status}
  */
  readonly status?: string;
  /**
  * Enable Authentication for Cadence Web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#use_cadence_web_auth CadenceClusterV2#use_cadence_web_auth}
  */
  readonly useCadenceWebAuth: boolean | cdktf.IResolvable;
  /**
  * Enable Cadence HTTP API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#use_http_api CadenceClusterV2#use_http_api}
  */
  readonly useHttpApi?: boolean | cdktf.IResolvable;
  /**
  * aws_archival block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#aws_archival CadenceClusterV2#aws_archival}
  */
  readonly awsArchival?: CadenceClusterV2AwsArchival[] | cdktf.IResolvable;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#data_centre CadenceClusterV2#data_centre}
  */
  readonly dataCentre: CadenceClusterV2DataCentre[] | cdktf.IResolvable;
  /**
  * resize_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#resize_settings CadenceClusterV2#resize_settings}
  */
  readonly resizeSettings?: CadenceClusterV2ResizeSettings[] | cdktf.IResolvable;
  /**
  * shared_provisioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#shared_provisioning CadenceClusterV2#shared_provisioning}
  */
  readonly sharedProvisioning?: CadenceClusterV2SharedProvisioning[] | cdktf.IResolvable;
  /**
  * standard_provisioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#standard_provisioning CadenceClusterV2#standard_provisioning}
  */
  readonly standardProvisioning?: CadenceClusterV2StandardProvisioning[] | cdktf.IResolvable;
  /**
  * target_primary_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#target_primary_cadence CadenceClusterV2#target_primary_cadence}
  */
  readonly targetPrimaryCadence?: CadenceClusterV2TargetPrimaryCadence[] | cdktf.IResolvable;
  /**
  * target_secondary_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#target_secondary_cadence CadenceClusterV2#target_secondary_cadence}
  */
  readonly targetSecondaryCadence?: CadenceClusterV2TargetSecondaryCadence[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#timeouts CadenceClusterV2#timeouts}
  */
  readonly timeouts?: CadenceClusterV2Timeouts;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#two_factor_delete CadenceClusterV2#two_factor_delete}
  */
  readonly twoFactorDelete?: CadenceClusterV2TwoFactorDelete[] | cdktf.IResolvable;
}
export interface CadenceClusterV2AwsArchival {
  /**
  * S3 resource region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#archival_s3_region CadenceClusterV2#archival_s3_region}
  */
  readonly archivalS3Region: string;
  /**
  * S3 resource URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#archival_s3_uri CadenceClusterV2#archival_s3_uri}
  */
  readonly archivalS3Uri: string;
  /**
  * AWS access Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#aws_access_key_id CadenceClusterV2#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * AWS secret access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#aws_secret_access_key CadenceClusterV2#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
}

export function cadenceClusterV2AwsArchivalToTerraform(struct?: CadenceClusterV2AwsArchival | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archival_s3_region: cdktf.stringToTerraform(struct!.archivalS3Region),
    archival_s3_uri: cdktf.stringToTerraform(struct!.archivalS3Uri),
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
  }
}


export function cadenceClusterV2AwsArchivalToHclTerraform(struct?: CadenceClusterV2AwsArchival | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archival_s3_region: {
      value: cdktf.stringToHclTerraform(struct!.archivalS3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archival_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.archivalS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2AwsArchivalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2AwsArchival | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archivalS3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.archivalS3Region = this._archivalS3Region;
    }
    if (this._archivalS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.archivalS3Uri = this._archivalS3Uri;
    }
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2AwsArchival | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archivalS3Region = undefined;
      this._archivalS3Uri = undefined;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archivalS3Region = value.archivalS3Region;
      this._archivalS3Uri = value.archivalS3Uri;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
    }
  }

  // archival_s3_region - computed: false, optional: false, required: true
  private _archivalS3Region?: string; 
  public get archivalS3Region() {
    return this.getStringAttribute('archival_s3_region');
  }
  public set archivalS3Region(value: string) {
    this._archivalS3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archivalS3RegionInput() {
    return this._archivalS3Region;
  }

  // archival_s3_uri - computed: false, optional: false, required: true
  private _archivalS3Uri?: string; 
  public get archivalS3Uri() {
    return this.getStringAttribute('archival_s3_uri');
  }
  public set archivalS3Uri(value: string) {
    this._archivalS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archivalS3UriInput() {
    return this._archivalS3Uri;
  }

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }
}

export class CadenceClusterV2AwsArchivalList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2AwsArchival[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2AwsArchivalOutputReference {
    return new CadenceClusterV2AwsArchivalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#custom_virtual_network_id CadenceClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#ebs_encryption_key CadenceClusterV2#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function cadenceClusterV2DataCentreAwsSettingsToTerraform(struct?: CadenceClusterV2DataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function cadenceClusterV2DataCentreAwsSettingsToHclTerraform(struct?: CadenceClusterV2DataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.ebsEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreAwsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    if (this._ebsEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsEncryptionKey = this._ebsEncryptionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreAwsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
      this._ebsEncryptionKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
      this._ebsEncryptionKey = value.ebsEncryptionKey;
    }
  }

  // custom_virtual_network_id - computed: true, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }

  // ebs_encryption_key - computed: false, optional: true, required: false
  private _ebsEncryptionKey?: string; 
  public get ebsEncryptionKey() {
    return this.getStringAttribute('ebs_encryption_key');
  }
  public set ebsEncryptionKey(value: string) {
    this._ebsEncryptionKey = value;
  }
  public resetEbsEncryptionKey() {
    this._ebsEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEncryptionKeyInput() {
    return this._ebsEncryptionKey;
  }
}

export class CadenceClusterV2DataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreAwsSettingsOutputReference {
    return new CadenceClusterV2DataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#custom_virtual_network_id CadenceClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#resource_group CadenceClusterV2#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#storage_network CadenceClusterV2#storage_network}
  */
  readonly storageNetwork?: string;
}

export function cadenceClusterV2DataCentreAzureSettingsToTerraform(struct?: CadenceClusterV2DataCentreAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    storage_network: cdktf.stringToTerraform(struct!.storageNetwork),
  }
}


export function cadenceClusterV2DataCentreAzureSettingsToHclTerraform(struct?: CadenceClusterV2DataCentreAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
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
    storage_network: {
      value: cdktf.stringToHclTerraform(struct!.storageNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreAzureSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._storageNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageNetwork = this._storageNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreAzureSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
      this._resourceGroup = undefined;
      this._storageNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
      this._resourceGroup = value.resourceGroup;
      this._storageNetwork = value.storageNetwork;
    }
  }

  // custom_virtual_network_id - computed: false, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }

  // resource_group - computed: false, optional: true, required: false
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

  // storage_network - computed: false, optional: true, required: false
  private _storageNetwork?: string; 
  public get storageNetwork() {
    return this.getStringAttribute('storage_network');
  }
  public set storageNetwork(value: string) {
    this._storageNetwork = value;
  }
  public resetStorageNetwork() {
    this._storageNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkInput() {
    return this._storageNetwork;
  }
}

export class CadenceClusterV2DataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreAzureSettingsOutputReference {
    return new CadenceClusterV2DataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations {
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#created CadenceClusterV2#created}
  */
  readonly created?: string;
  /**
  * Operation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#id CadenceClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of the last modification of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#modified CadenceClusterV2#modified}
  */
  readonly modified?: string;
  /**
  * ID of the node being replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#node_id CadenceClusterV2#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#status CadenceClusterV2#status}
  */
  readonly status?: string;
}

export function cadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToTerraform(struct?: CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    id: cdktf.stringToTerraform(struct!.id),
    modified: cdktf.stringToTerraform(struct!.modified),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function cadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToHclTerraform(struct?: CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
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
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._id = undefined;
      this._modified = undefined;
      this._nodeId = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._id = value.id;
      this._modified = value.modified;
      this._nodeId = value.nodeId;
      this._status = value.status;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference {
    return new CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreCurrentOperationsDeleteNodes {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#cdc_id CadenceClusterV2#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#created CadenceClusterV2#created}
  */
  readonly created?: string;
  /**
  * Operation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#id CadenceClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of the last modification of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#modified CadenceClusterV2#modified}
  */
  readonly modified?: string;
  /**
  * Number of nodes set to delete in the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#number_of_nodes_to_delete CadenceClusterV2#number_of_nodes_to_delete}
  */
  readonly numberOfNodesToDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#status CadenceClusterV2#status}
  */
  readonly status?: string;
  /**
  * delete_node_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#delete_node_operations CadenceClusterV2#delete_node_operations}
  */
  readonly deleteNodeOperations?: CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable;
}

export function cadenceClusterV2DataCentreCurrentOperationsDeleteNodesToTerraform(struct?: CadenceClusterV2DataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    created: cdktf.stringToTerraform(struct!.created),
    id: cdktf.stringToTerraform(struct!.id),
    modified: cdktf.stringToTerraform(struct!.modified),
    number_of_nodes_to_delete: cdktf.numberToTerraform(struct!.numberOfNodesToDelete),
    status: cdktf.stringToTerraform(struct!.status),
    delete_node_operations: cdktf.listMapper(cadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToTerraform, true)(struct!.deleteNodeOperations),
  }
}


export function cadenceClusterV2DataCentreCurrentOperationsDeleteNodesToHclTerraform(struct?: CadenceClusterV2DataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.cdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
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
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes_to_delete: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodesToDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_node_operations: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToHclTerraform, true)(struct!.deleteNodeOperations),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreCurrentOperationsDeleteNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._numberOfNodesToDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodesToDelete = this._numberOfNodesToDelete;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._deleteNodeOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteNodeOperations = this._deleteNodeOperations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdcId = undefined;
      this._created = undefined;
      this._id = undefined;
      this._modified = undefined;
      this._numberOfNodesToDelete = undefined;
      this._status = undefined;
      this._deleteNodeOperations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdcId = value.cdcId;
      this._created = value.created;
      this._id = value.id;
      this._modified = value.modified;
      this._numberOfNodesToDelete = value.numberOfNodesToDelete;
      this._status = value.status;
      this._deleteNodeOperations.internalValue = value.deleteNodeOperations;
    }
  }

  // cdc_id - computed: true, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // number_of_nodes_to_delete - computed: false, optional: true, required: false
  private _numberOfNodesToDelete?: number; 
  public get numberOfNodesToDelete() {
    return this.getNumberAttribute('number_of_nodes_to_delete');
  }
  public set numberOfNodesToDelete(value: number) {
    this._numberOfNodesToDelete = value;
  }
  public resetNumberOfNodesToDelete() {
    this._numberOfNodesToDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesToDeleteInput() {
    return this._numberOfNodesToDelete;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // delete_node_operations - computed: false, optional: true, required: false
  private _deleteNodeOperations = new CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList(this, "delete_node_operations", false);
  public get deleteNodeOperations() {
    return this._deleteNodeOperations;
  }
  public putDeleteNodeOperations(value: CadenceClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable) {
    this._deleteNodeOperations.internalValue = value;
  }
  public resetDeleteNodeOperations() {
    this._deleteNodeOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNodeOperationsInput() {
    return this._deleteNodeOperations.internalValue;
  }
}

export class CadenceClusterV2DataCentreCurrentOperationsDeleteNodesList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreCurrentOperationsDeleteNodesOutputReference {
    return new CadenceClusterV2DataCentreCurrentOperationsDeleteNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations {
  /**
  * Timestamp of the creation of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#created CadenceClusterV2#created}
  */
  readonly created?: string;
  /**
  * ID of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#id CadenceClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the new node in the replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#new_node_id CadenceClusterV2#new_node_id}
  */
  readonly newNodeId?: string;
  /**
  * ID of the node being replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#node_id CadenceClusterV2#node_id}
  */
  readonly nodeId?: string;
  /**
  * Status of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#status CadenceClusterV2#status}
  */
  readonly status?: string;
}

export function cadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsToTerraform(struct?: CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    id: cdktf.stringToTerraform(struct!.id),
    new_node_id: cdktf.stringToTerraform(struct!.newNodeId),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function cadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsToHclTerraform(struct?: CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
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
    new_node_id: {
      value: cdktf.stringToHclTerraform(struct!.newNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._newNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.newNodeId = this._newNodeId;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._id = undefined;
      this._newNodeId = undefined;
      this._nodeId = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._id = value.id;
      this._newNodeId = value.newNodeId;
      this._nodeId = value.nodeId;
      this._status = value.status;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // new_node_id - computed: true, optional: true, required: false
  private _newNodeId?: string; 
  public get newNodeId() {
    return this.getStringAttribute('new_node_id');
  }
  public set newNodeId(value: string) {
    this._newNodeId = value;
  }
  public resetNewNodeId() {
    this._newNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNodeIdInput() {
    return this._newNodeId;
  }

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference {
    return new CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreCurrentOperationsResizeOperations {
  /**
  * Timestamp of the completion of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#completed CadenceClusterV2#completed}
  */
  readonly completed?: string;
  /**
  * Number of nodes that can be concurrently resized at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#concurrent_resizes CadenceClusterV2#concurrent_resizes}
  */
  readonly concurrentResizes?: number;
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#created CadenceClusterV2#created}
  */
  readonly created?: string;
  /**
  * ID of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#id CadenceClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of when Instaclustr Support has been alerted to the resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#instaclustr_support_alerted CadenceClusterV2#instaclustr_support_alerted}
  */
  readonly instaclustrSupportAlerted?: string;
  /**
  * New size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#new_node_size CadenceClusterV2#new_node_size}
  */
  readonly newNodeSize?: string;
  /**
  * Purpose of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#node_purpose CadenceClusterV2#node_purpose}
  */
  readonly nodePurpose?: string;
  /**
  * Status of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#status CadenceClusterV2#status}
  */
  readonly status?: string;
  /**
  * replace_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#replace_operations CadenceClusterV2#replace_operations}
  */
  readonly replaceOperations?: CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable;
}

export function cadenceClusterV2DataCentreCurrentOperationsResizeOperationsToTerraform(struct?: CadenceClusterV2DataCentreCurrentOperationsResizeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completed: cdktf.stringToTerraform(struct!.completed),
    concurrent_resizes: cdktf.numberToTerraform(struct!.concurrentResizes),
    created: cdktf.stringToTerraform(struct!.created),
    id: cdktf.stringToTerraform(struct!.id),
    instaclustr_support_alerted: cdktf.stringToTerraform(struct!.instaclustrSupportAlerted),
    new_node_size: cdktf.stringToTerraform(struct!.newNodeSize),
    node_purpose: cdktf.stringToTerraform(struct!.nodePurpose),
    status: cdktf.stringToTerraform(struct!.status),
    replace_operations: cdktf.listMapper(cadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsToTerraform, true)(struct!.replaceOperations),
  }
}


export function cadenceClusterV2DataCentreCurrentOperationsResizeOperationsToHclTerraform(struct?: CadenceClusterV2DataCentreCurrentOperationsResizeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    completed: {
      value: cdktf.stringToHclTerraform(struct!.completed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrent_resizes: {
      value: cdktf.numberToHclTerraform(struct!.concurrentResizes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
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
    instaclustr_support_alerted: {
      value: cdktf.stringToHclTerraform(struct!.instaclustrSupportAlerted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_node_size: {
      value: cdktf.stringToHclTerraform(struct!.newNodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_purpose: {
      value: cdktf.stringToHclTerraform(struct!.nodePurpose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_operations: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsToHclTerraform, true)(struct!.replaceOperations),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreCurrentOperationsResizeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreCurrentOperationsResizeOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completed !== undefined) {
      hasAnyValues = true;
      internalValueResult.completed = this._completed;
    }
    if (this._concurrentResizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentResizes = this._concurrentResizes;
    }
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instaclustrSupportAlerted !== undefined) {
      hasAnyValues = true;
      internalValueResult.instaclustrSupportAlerted = this._instaclustrSupportAlerted;
    }
    if (this._newNodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.newNodeSize = this._newNodeSize;
    }
    if (this._nodePurpose !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePurpose = this._nodePurpose;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._replaceOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceOperations = this._replaceOperations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreCurrentOperationsResizeOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completed = undefined;
      this._concurrentResizes = undefined;
      this._created = undefined;
      this._id = undefined;
      this._instaclustrSupportAlerted = undefined;
      this._newNodeSize = undefined;
      this._nodePurpose = undefined;
      this._status = undefined;
      this._replaceOperations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completed = value.completed;
      this._concurrentResizes = value.concurrentResizes;
      this._created = value.created;
      this._id = value.id;
      this._instaclustrSupportAlerted = value.instaclustrSupportAlerted;
      this._newNodeSize = value.newNodeSize;
      this._nodePurpose = value.nodePurpose;
      this._status = value.status;
      this._replaceOperations.internalValue = value.replaceOperations;
    }
  }

  // completed - computed: true, optional: true, required: false
  private _completed?: string; 
  public get completed() {
    return this.getStringAttribute('completed');
  }
  public set completed(value: string) {
    this._completed = value;
  }
  public resetCompleted() {
    this._completed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completedInput() {
    return this._completed;
  }

  // concurrent_resizes - computed: true, optional: true, required: false
  private _concurrentResizes?: number; 
  public get concurrentResizes() {
    return this.getNumberAttribute('concurrent_resizes');
  }
  public set concurrentResizes(value: number) {
    this._concurrentResizes = value;
  }
  public resetConcurrentResizes() {
    this._concurrentResizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentResizesInput() {
    return this._concurrentResizes;
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // instaclustr_support_alerted - computed: true, optional: true, required: false
  private _instaclustrSupportAlerted?: string; 
  public get instaclustrSupportAlerted() {
    return this.getStringAttribute('instaclustr_support_alerted');
  }
  public set instaclustrSupportAlerted(value: string) {
    this._instaclustrSupportAlerted = value;
  }
  public resetInstaclustrSupportAlerted() {
    this._instaclustrSupportAlerted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instaclustrSupportAlertedInput() {
    return this._instaclustrSupportAlerted;
  }

  // new_node_size - computed: true, optional: true, required: false
  private _newNodeSize?: string; 
  public get newNodeSize() {
    return this.getStringAttribute('new_node_size');
  }
  public set newNodeSize(value: string) {
    this._newNodeSize = value;
  }
  public resetNewNodeSize() {
    this._newNodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNodeSizeInput() {
    return this._newNodeSize;
  }

  // node_purpose - computed: true, optional: true, required: false
  private _nodePurpose?: string; 
  public get nodePurpose() {
    return this.getStringAttribute('node_purpose');
  }
  public set nodePurpose(value: string) {
    this._nodePurpose = value;
  }
  public resetNodePurpose() {
    this._nodePurpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePurposeInput() {
    return this._nodePurpose;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // replace_operations - computed: false, optional: true, required: false
  private _replaceOperations = new CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsList(this, "replace_operations", false);
  public get replaceOperations() {
    return this._replaceOperations;
  }
  public putReplaceOperations(value: CadenceClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable) {
    this._replaceOperations.internalValue = value;
  }
  public resetReplaceOperations() {
    this._replaceOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceOperationsInput() {
    return this._replaceOperations.internalValue;
  }
}

export class CadenceClusterV2DataCentreCurrentOperationsResizeOperationsList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreCurrentOperationsResizeOperationsOutputReference {
    return new CadenceClusterV2DataCentreCurrentOperationsResizeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreCurrentOperationsResize {
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#operations CadenceClusterV2#operations}
  */
  readonly operations?: CadenceClusterV2DataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable;
}

export function cadenceClusterV2DataCentreCurrentOperationsResizeToTerraform(struct?: CadenceClusterV2DataCentreCurrentOperationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operations: cdktf.listMapper(cadenceClusterV2DataCentreCurrentOperationsResizeOperationsToTerraform, true)(struct!.operations),
  }
}


export function cadenceClusterV2DataCentreCurrentOperationsResizeToHclTerraform(struct?: CadenceClusterV2DataCentreCurrentOperationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operations: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreCurrentOperationsResizeOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreCurrentOperationsResizeOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreCurrentOperationsResizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreCurrentOperationsResize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreCurrentOperationsResize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operations.internalValue = value.operations;
    }
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new CadenceClusterV2DataCentreCurrentOperationsResizeOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: CadenceClusterV2DataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}

export class CadenceClusterV2DataCentreCurrentOperationsResizeList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreCurrentOperationsResize[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreCurrentOperationsResizeOutputReference {
    return new CadenceClusterV2DataCentreCurrentOperationsResizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreCurrentOperations {
  /**
  * delete_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#delete_nodes CadenceClusterV2#delete_nodes}
  */
  readonly deleteNodes?: CadenceClusterV2DataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable;
  /**
  * resize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#resize CadenceClusterV2#resize}
  */
  readonly resize?: CadenceClusterV2DataCentreCurrentOperationsResize[] | cdktf.IResolvable;
}

export function cadenceClusterV2DataCentreCurrentOperationsToTerraform(struct?: CadenceClusterV2DataCentreCurrentOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_nodes: cdktf.listMapper(cadenceClusterV2DataCentreCurrentOperationsDeleteNodesToTerraform, true)(struct!.deleteNodes),
    resize: cdktf.listMapper(cadenceClusterV2DataCentreCurrentOperationsResizeToTerraform, true)(struct!.resize),
  }
}


export function cadenceClusterV2DataCentreCurrentOperationsToHclTerraform(struct?: CadenceClusterV2DataCentreCurrentOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_nodes: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreCurrentOperationsDeleteNodesToHclTerraform, true)(struct!.deleteNodes),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreCurrentOperationsDeleteNodesList",
    },
    resize: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreCurrentOperationsResizeToHclTerraform, true)(struct!.resize),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreCurrentOperationsResizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreCurrentOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreCurrentOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteNodes = this._deleteNodes?.internalValue;
    }
    if (this._resize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resize = this._resize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreCurrentOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteNodes.internalValue = undefined;
      this._resize.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteNodes.internalValue = value.deleteNodes;
      this._resize.internalValue = value.resize;
    }
  }

  // delete_nodes - computed: false, optional: true, required: false
  private _deleteNodes = new CadenceClusterV2DataCentreCurrentOperationsDeleteNodesList(this, "delete_nodes", false);
  public get deleteNodes() {
    return this._deleteNodes;
  }
  public putDeleteNodes(value: CadenceClusterV2DataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable) {
    this._deleteNodes.internalValue = value;
  }
  public resetDeleteNodes() {
    this._deleteNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNodesInput() {
    return this._deleteNodes.internalValue;
  }

  // resize - computed: false, optional: true, required: false
  private _resize = new CadenceClusterV2DataCentreCurrentOperationsResizeList(this, "resize", false);
  public get resize() {
    return this._resize;
  }
  public putResize(value: CadenceClusterV2DataCentreCurrentOperationsResize[] | cdktf.IResolvable) {
    this._resize.internalValue = value;
  }
  public resetResize() {
    this._resize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeInput() {
    return this._resize.internalValue;
  }
}

export class CadenceClusterV2DataCentreCurrentOperationsList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreCurrentOperations[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreCurrentOperationsOutputReference {
    return new CadenceClusterV2DataCentreCurrentOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#deletion_time CadenceClusterV2#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#id CadenceClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#node_roles CadenceClusterV2#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#node_size CadenceClusterV2#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#private_address CadenceClusterV2#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#public_address CadenceClusterV2#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#rack CadenceClusterV2#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#start_time CadenceClusterV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#status CadenceClusterV2#status}
  */
  readonly status?: string;
}

export function cadenceClusterV2DataCentreDeletedNodesToTerraform(struct?: CadenceClusterV2DataCentreDeletedNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_time: cdktf.stringToTerraform(struct!.deletionTime),
    id: cdktf.stringToTerraform(struct!.id),
    node_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeRoles),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    public_address: cdktf.stringToTerraform(struct!.publicAddress),
    rack: cdktf.stringToTerraform(struct!.rack),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function cadenceClusterV2DataCentreDeletedNodesToHclTerraform(struct?: CadenceClusterV2DataCentreDeletedNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.deletionTime),
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
    node_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address: {
      value: cdktf.stringToHclTerraform(struct!.publicAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreDeletedNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionTime = this._deletionTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoles = this._nodeRoles;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._publicAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddress = this._publicAddress;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreDeletedNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionTime = undefined;
      this._id = undefined;
      this._nodeRoles = undefined;
      this._nodeSize = undefined;
      this._privateAddress = undefined;
      this._publicAddress = undefined;
      this._rack = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionTime = value.deletionTime;
      this._id = value.id;
      this._nodeRoles = value.nodeRoles;
      this._nodeSize = value.nodeSize;
      this._privateAddress = value.privateAddress;
      this._publicAddress = value.publicAddress;
      this._rack = value.rack;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // deletion_time - computed: true, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
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

  // node_roles - computed: true, optional: true, required: false
  private _nodeRoles?: string[]; 
  public get nodeRoles() {
    return this.getListAttribute('node_roles');
  }
  public set nodeRoles(value: string[]) {
    this._nodeRoles = value;
  }
  public resetNodeRoles() {
    this._nodeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRolesInput() {
    return this._nodeRoles;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // private_address - computed: true, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // public_address - computed: true, optional: true, required: false
  private _publicAddress?: string; 
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }
  public set publicAddress(value: string) {
    this._publicAddress = value;
  }
  public resetPublicAddress() {
    this._publicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressInput() {
    return this._publicAddress;
  }

  // rack - computed: true, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class CadenceClusterV2DataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreDeletedNodesOutputReference {
    return new CadenceClusterV2DataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreGcpSettings {
  /**
  * Network name or a relative Network or Subnetwork URI.
  * The Data Centre's network allocation must match the IPv4 CIDR block of the specified subnet.
  * 
  * Examples:
  * - Network URI: <code>projects/{riyoa-gcp-project-name}/global/networks/{network-name}</code>.
  * - Network name: <code>{network-name}</code>, equivalent to <code>projects/{riyoa-gcp-project-name}/global/networks/{network-name}</code>.
  * - Same-project subnetwork URI: <code>projects/{riyoa-gcp-project-name}/regions/{region-id}/subnetworks/{subnetwork-name}</code>.
  * - Shared VPC subnetwork URI: <code>projects/{riyoa-gcp-host-project-name}/regions/{region-id}/subnetworks/{subnetwork-name}</code>.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#custom_virtual_network_id CadenceClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function cadenceClusterV2DataCentreGcpSettingsToTerraform(struct?: CadenceClusterV2DataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function cadenceClusterV2DataCentreGcpSettingsToHclTerraform(struct?: CadenceClusterV2DataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreGcpSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreGcpSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
    }
  }

  // custom_virtual_network_id - computed: false, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }
}

export class CadenceClusterV2DataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreGcpSettingsOutputReference {
    return new CadenceClusterV2DataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#deletion_time CadenceClusterV2#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#id CadenceClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#node_roles CadenceClusterV2#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#node_size CadenceClusterV2#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#private_address CadenceClusterV2#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#public_address CadenceClusterV2#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#rack CadenceClusterV2#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#start_time CadenceClusterV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#status CadenceClusterV2#status}
  */
  readonly status?: string;
}

export function cadenceClusterV2DataCentreNodesToTerraform(struct?: CadenceClusterV2DataCentreNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_time: cdktf.stringToTerraform(struct!.deletionTime),
    id: cdktf.stringToTerraform(struct!.id),
    node_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeRoles),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    public_address: cdktf.stringToTerraform(struct!.publicAddress),
    rack: cdktf.stringToTerraform(struct!.rack),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function cadenceClusterV2DataCentreNodesToHclTerraform(struct?: CadenceClusterV2DataCentreNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.deletionTime),
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
    node_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address: {
      value: cdktf.stringToHclTerraform(struct!.publicAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionTime = this._deletionTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoles = this._nodeRoles;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._publicAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddress = this._publicAddress;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentreNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionTime = undefined;
      this._id = undefined;
      this._nodeRoles = undefined;
      this._nodeSize = undefined;
      this._privateAddress = undefined;
      this._publicAddress = undefined;
      this._rack = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionTime = value.deletionTime;
      this._id = value.id;
      this._nodeRoles = value.nodeRoles;
      this._nodeSize = value.nodeSize;
      this._privateAddress = value.privateAddress;
      this._publicAddress = value.publicAddress;
      this._rack = value.rack;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // deletion_time - computed: true, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
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

  // node_roles - computed: true, optional: true, required: false
  private _nodeRoles?: string[]; 
  public get nodeRoles() {
    return this.getListAttribute('node_roles');
  }
  public set nodeRoles(value: string[]) {
    this._nodeRoles = value;
  }
  public resetNodeRoles() {
    this._nodeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRolesInput() {
    return this._nodeRoles;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // private_address - computed: true, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // public_address - computed: true, optional: true, required: false
  private _publicAddress?: string; 
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }
  public set publicAddress(value: string) {
    this._publicAddress = value;
  }
  public resetPublicAddress() {
    this._publicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressInput() {
    return this._publicAddress;
  }

  // rack - computed: true, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class CadenceClusterV2DataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreNodesOutputReference {
    return new CadenceClusterV2DataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentrePrivateLink {
  /**
  * The hostname to be used to connect to the PrivateLink cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#advertised_hostname CadenceClusterV2#advertised_hostname}
  */
  readonly advertisedHostname: string;
  /**
  * The Instaclustr ID of the AWS endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#end_point_service_id CadenceClusterV2#end_point_service_id}
  */
  readonly endPointServiceId?: string;
  /**
  * Name of the created endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#end_point_service_name CadenceClusterV2#end_point_service_name}
  */
  readonly endPointServiceName?: string;
}

export function cadenceClusterV2DataCentrePrivateLinkToTerraform(struct?: CadenceClusterV2DataCentrePrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_hostname: cdktf.stringToTerraform(struct!.advertisedHostname),
    end_point_service_id: cdktf.stringToTerraform(struct!.endPointServiceId),
    end_point_service_name: cdktf.stringToTerraform(struct!.endPointServiceName),
  }
}


export function cadenceClusterV2DataCentrePrivateLinkToHclTerraform(struct?: CadenceClusterV2DataCentrePrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_hostname: {
      value: cdktf.stringToHclTerraform(struct!.advertisedHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_id: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_name: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentrePrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentrePrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedHostname = this._advertisedHostname;
    }
    if (this._endPointServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceId = this._endPointServiceId;
    }
    if (this._endPointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceName = this._endPointServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentrePrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedHostname = undefined;
      this._endPointServiceId = undefined;
      this._endPointServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedHostname = value.advertisedHostname;
      this._endPointServiceId = value.endPointServiceId;
      this._endPointServiceName = value.endPointServiceName;
    }
  }

  // advertised_hostname - computed: false, optional: false, required: true
  private _advertisedHostname?: string; 
  public get advertisedHostname() {
    return this.getStringAttribute('advertised_hostname');
  }
  public set advertisedHostname(value: string) {
    this._advertisedHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedHostnameInput() {
    return this._advertisedHostname;
  }

  // end_point_service_id - computed: true, optional: true, required: false
  private _endPointServiceId?: string; 
  public get endPointServiceId() {
    return this.getStringAttribute('end_point_service_id');
  }
  public set endPointServiceId(value: string) {
    this._endPointServiceId = value;
  }
  public resetEndPointServiceId() {
    this._endPointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceIdInput() {
    return this._endPointServiceId;
  }

  // end_point_service_name - computed: true, optional: true, required: false
  private _endPointServiceName?: string; 
  public get endPointServiceName() {
    return this.getStringAttribute('end_point_service_name');
  }
  public set endPointServiceName(value: string) {
    this._endPointServiceName = value;
  }
  public resetEndPointServiceName() {
    this._endPointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceNameInput() {
    return this._endPointServiceName;
  }
}

export class CadenceClusterV2DataCentrePrivateLinkList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentrePrivateLink[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentrePrivateLinkOutputReference {
    return new CadenceClusterV2DataCentrePrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentreTag {
  /**
  * Key of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#key CadenceClusterV2#key}
  */
  readonly key: string;
  /**
  * Value of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#value CadenceClusterV2#value}
  */
  readonly value?: string;
}

export function cadenceClusterV2DataCentreTagToTerraform(struct?: CadenceClusterV2DataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cadenceClusterV2DataCentreTagToHclTerraform(struct?: CadenceClusterV2DataCentreTag | cdktf.IResolvable): any {
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

export class CadenceClusterV2DataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentreTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CadenceClusterV2DataCentreTag | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
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

export class CadenceClusterV2DataCentreTagList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreTagOutputReference {
    return new CadenceClusterV2DataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2DataCentre {
  /**
  * Enables Client ⇄ Node Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#client_to_cluster_encryption CadenceClusterV2#client_to_cluster_encryption}
  */
  readonly clientToClusterEncryption: boolean | cdktf.IResolvable;
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#cloud_provider CadenceClusterV2#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#id CadenceClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#name CadenceClusterV2#name}
  */
  readonly name: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#network CadenceClusterV2#network}
  */
  readonly network: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.2xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.4xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-m7g.xlarge-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-r7g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.medium-10 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-m7g.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CAD-SI-PRD-t4g.medium-10 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Microsoft Azure* [__AZURE_AZ__]</summary> <br> <details> <summary>*Australia East (NSW)* [__AUSTRALIA_EAST__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada Central (Toronto)* [__CANADA_CENTRAL__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US (Virginia)* [__EAST_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US 2 (Virginia)* [__EAST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*North Europe (Ireland)* [__NORTH_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South Central US (Texas)* [__SOUTH_CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeast Asia (Singapore)* [__SOUTHEAST_ASIA__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Switzerland North (Zurich)* [__SWITZERLAND_NORTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*UK South (London)* [__UK_SOUTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West Europe (Netherlands)* [__WEST_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West US 2 (Washington)* [__WEST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-standard_ds2_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds2_v2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-standard_ds3_v2-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Google Cloud Platform* [__GCP__]</summary> <br> <details> <summary>*Central Europe (Warsaw)* [__europe-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__us-central1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern Asia-Pacific (Taiwan)* [__asia-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern South America (Brazil)* [__southamerica-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (North Virginia)* [__us-east4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (South Carolina)* [__us-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern Asia-pacific (Japan)* [__asia-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern North America (Canada)* [__northamerica-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northern Europe (Finland)* [__europe-north1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Jakarta)* [__asia-southeast2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Singapore)* [__asia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Australia (Sydney)* [__australia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southern Asia (India)* [__asia-south1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Belgium)* [__europe-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (England)* [__europe-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Germany)* [__europe-west3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Netherlands)* [__europe-west4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Zurich)* [__europe-west6__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (California)* [__us-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (Oregon)* [__us-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAD-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-2-150 </td> <td>General Availability</td> </tr> <tr> <td>CAD-PRD-n1-standard-4-150 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#node_size CadenceClusterV2#node_size}
  */
  readonly nodeSize: string;
  /**
  * Total number of nodes in the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#number_of_nodes CadenceClusterV2#number_of_nodes}
  */
  readonly numberOfNodes: number;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#provider_account_name CadenceClusterV2#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#region CadenceClusterV2#region}
  */
  readonly region: string;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#status CadenceClusterV2#status}
  */
  readonly status?: string;
  /**
  * (Optional) Enable tag management for the data centre, allowing you to create, update and delete custom tags on the data centre via Instaclustr Terraform Provider v2, Cluster Management API or Management Console. Tag management is only available for RIYOA clusters and cannot be disabled once enabled. If not specified, the current value will remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#tag_management_enabled CadenceClusterV2#tag_management_enabled}
  */
  readonly tagManagementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#zero_inbound_access CadenceClusterV2#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#aws_settings CadenceClusterV2#aws_settings}
  */
  readonly awsSettings?: CadenceClusterV2DataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#azure_settings CadenceClusterV2#azure_settings}
  */
  readonly azureSettings?: CadenceClusterV2DataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * current_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#current_operations CadenceClusterV2#current_operations}
  */
  readonly currentOperations?: CadenceClusterV2DataCentreCurrentOperations[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#deleted_nodes CadenceClusterV2#deleted_nodes}
  */
  readonly deletedNodes?: CadenceClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#gcp_settings CadenceClusterV2#gcp_settings}
  */
  readonly gcpSettings?: CadenceClusterV2DataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#nodes CadenceClusterV2#nodes}
  */
  readonly nodes?: CadenceClusterV2DataCentreNodes[] | cdktf.IResolvable;
  /**
  * private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#private_link CadenceClusterV2#private_link}
  */
  readonly privateLink?: CadenceClusterV2DataCentrePrivateLink[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#tag CadenceClusterV2#tag}
  */
  readonly tag?: CadenceClusterV2DataCentreTag[] | cdktf.IResolvable;
}

export function cadenceClusterV2DataCentreToTerraform(struct?: CadenceClusterV2DataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_to_cluster_encryption: cdktf.booleanToTerraform(struct!.clientToClusterEncryption),
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    region: cdktf.stringToTerraform(struct!.region),
    status: cdktf.stringToTerraform(struct!.status),
    tag_management_enabled: cdktf.booleanToTerraform(struct!.tagManagementEnabled),
    zero_inbound_access: cdktf.booleanToTerraform(struct!.zeroInboundAccess),
    aws_settings: cdktf.listMapper(cadenceClusterV2DataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(cadenceClusterV2DataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    current_operations: cdktf.listMapper(cadenceClusterV2DataCentreCurrentOperationsToTerraform, true)(struct!.currentOperations),
    deleted_nodes: cdktf.listMapper(cadenceClusterV2DataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(cadenceClusterV2DataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(cadenceClusterV2DataCentreNodesToTerraform, true)(struct!.nodes),
    private_link: cdktf.listMapper(cadenceClusterV2DataCentrePrivateLinkToTerraform, true)(struct!.privateLink),
    tag: cdktf.listMapper(cadenceClusterV2DataCentreTagToTerraform, true)(struct!.tag),
  }
}


export function cadenceClusterV2DataCentreToHclTerraform(struct?: CadenceClusterV2DataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_to_cluster_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.clientToClusterEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_account_name: {
      value: cdktf.stringToHclTerraform(struct!.providerAccountName),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_management_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tagManagementEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zero_inbound_access: {
      value: cdktf.booleanToHclTerraform(struct!.zeroInboundAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_settings: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreAzureSettingsList",
    },
    current_operations: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreCurrentOperationsToHclTerraform, true)(struct!.currentOperations),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreCurrentOperationsList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreNodesList",
    },
    private_link: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentrePrivateLinkToHclTerraform, true)(struct!.privateLink),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentrePrivateLinkList",
    },
    tag: {
      value: cdktf.listMapperHcl(cadenceClusterV2DataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2DataCentreTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2DataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2DataCentre | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientToClusterEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientToClusterEncryption = this._clientToClusterEncryption;
    }
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    if (this._providerAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountName = this._providerAccountName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tagManagementEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagManagementEnabled = this._tagManagementEnabled;
    }
    if (this._zeroInboundAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroInboundAccess = this._zeroInboundAccess;
    }
    if (this._awsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSettings = this._awsSettings?.internalValue;
    }
    if (this._azureSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSettings = this._azureSettings?.internalValue;
    }
    if (this._currentOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentOperations = this._currentOperations?.internalValue;
    }
    if (this._deletedNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedNodes = this._deletedNodes?.internalValue;
    }
    if (this._gcpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSettings = this._gcpSettings?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._privateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLink = this._privateLink?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2DataCentre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientToClusterEncryption = undefined;
      this._cloudProvider = undefined;
      this._id = undefined;
      this._name = undefined;
      this._network = undefined;
      this._nodeSize = undefined;
      this._numberOfNodes = undefined;
      this._providerAccountName = undefined;
      this._region = undefined;
      this._status = undefined;
      this._tagManagementEnabled = undefined;
      this._zeroInboundAccess = undefined;
      this._awsSettings.internalValue = undefined;
      this._azureSettings.internalValue = undefined;
      this._currentOperations.internalValue = undefined;
      this._deletedNodes.internalValue = undefined;
      this._gcpSettings.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._privateLink.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientToClusterEncryption = value.clientToClusterEncryption;
      this._cloudProvider = value.cloudProvider;
      this._id = value.id;
      this._name = value.name;
      this._network = value.network;
      this._nodeSize = value.nodeSize;
      this._numberOfNodes = value.numberOfNodes;
      this._providerAccountName = value.providerAccountName;
      this._region = value.region;
      this._status = value.status;
      this._tagManagementEnabled = value.tagManagementEnabled;
      this._zeroInboundAccess = value.zeroInboundAccess;
      this._awsSettings.internalValue = value.awsSettings;
      this._azureSettings.internalValue = value.azureSettings;
      this._currentOperations.internalValue = value.currentOperations;
      this._deletedNodes.internalValue = value.deletedNodes;
      this._gcpSettings.internalValue = value.gcpSettings;
      this._nodes.internalValue = value.nodes;
      this._privateLink.internalValue = value.privateLink;
      this._tag.internalValue = value.tag;
    }
  }

  // client_to_cluster_encryption - computed: false, optional: false, required: true
  private _clientToClusterEncryption?: boolean | cdktf.IResolvable; 
  public get clientToClusterEncryption() {
    return this.getBooleanAttribute('client_to_cluster_encryption');
  }
  public set clientToClusterEncryption(value: boolean | cdktf.IResolvable) {
    this._clientToClusterEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToClusterEncryptionInput() {
    return this._clientToClusterEncryption;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
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

  // node_size - computed: false, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // number_of_nodes - computed: false, optional: false, required: true
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // provider_account_name - computed: true, optional: true, required: false
  private _providerAccountName?: string; 
  public get providerAccountName() {
    return this.getStringAttribute('provider_account_name');
  }
  public set providerAccountName(value: string) {
    this._providerAccountName = value;
  }
  public resetProviderAccountName() {
    this._providerAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountNameInput() {
    return this._providerAccountName;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag_management_enabled - computed: true, optional: true, required: false
  private _tagManagementEnabled?: boolean | cdktf.IResolvable; 
  public get tagManagementEnabled() {
    return this.getBooleanAttribute('tag_management_enabled');
  }
  public set tagManagementEnabled(value: boolean | cdktf.IResolvable) {
    this._tagManagementEnabled = value;
  }
  public resetTagManagementEnabled() {
    this._tagManagementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagManagementEnabledInput() {
    return this._tagManagementEnabled;
  }

  // zero_inbound_access - computed: false, optional: true, required: false
  private _zeroInboundAccess?: boolean | cdktf.IResolvable; 
  public get zeroInboundAccess() {
    return this.getBooleanAttribute('zero_inbound_access');
  }
  public set zeroInboundAccess(value: boolean | cdktf.IResolvable) {
    this._zeroInboundAccess = value;
  }
  public resetZeroInboundAccess() {
    this._zeroInboundAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroInboundAccessInput() {
    return this._zeroInboundAccess;
  }

  // aws_settings - computed: false, optional: true, required: false
  private _awsSettings = new CadenceClusterV2DataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: CadenceClusterV2DataCentreAwsSettings[] | cdktf.IResolvable) {
    this._awsSettings.internalValue = value;
  }
  public resetAwsSettings() {
    this._awsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSettingsInput() {
    return this._awsSettings.internalValue;
  }

  // azure_settings - computed: false, optional: true, required: false
  private _azureSettings = new CadenceClusterV2DataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: CadenceClusterV2DataCentreAzureSettings[] | cdktf.IResolvable) {
    this._azureSettings.internalValue = value;
  }
  public resetAzureSettings() {
    this._azureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSettingsInput() {
    return this._azureSettings.internalValue;
  }

  // current_operations - computed: false, optional: true, required: false
  private _currentOperations = new CadenceClusterV2DataCentreCurrentOperationsList(this, "current_operations", false);
  public get currentOperations() {
    return this._currentOperations;
  }
  public putCurrentOperations(value: CadenceClusterV2DataCentreCurrentOperations[] | cdktf.IResolvable) {
    this._currentOperations.internalValue = value;
  }
  public resetCurrentOperations() {
    this._currentOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentOperationsInput() {
    return this._currentOperations.internalValue;
  }

  // deleted_nodes - computed: false, optional: true, required: false
  private _deletedNodes = new CadenceClusterV2DataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: CadenceClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable) {
    this._deletedNodes.internalValue = value;
  }
  public resetDeletedNodes() {
    this._deletedNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedNodesInput() {
    return this._deletedNodes.internalValue;
  }

  // gcp_settings - computed: false, optional: true, required: false
  private _gcpSettings = new CadenceClusterV2DataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: CadenceClusterV2DataCentreGcpSettings[] | cdktf.IResolvable) {
    this._gcpSettings.internalValue = value;
  }
  public resetGcpSettings() {
    this._gcpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSettingsInput() {
    return this._gcpSettings.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new CadenceClusterV2DataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: CadenceClusterV2DataCentreNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // private_link - computed: false, optional: true, required: false
  private _privateLink = new CadenceClusterV2DataCentrePrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }
  public putPrivateLink(value: CadenceClusterV2DataCentrePrivateLink[] | cdktf.IResolvable) {
    this._privateLink.internalValue = value;
  }
  public resetPrivateLink() {
    this._privateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInput() {
    return this._privateLink.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new CadenceClusterV2DataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: CadenceClusterV2DataCentreTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class CadenceClusterV2DataCentreList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2DataCentre[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2DataCentreOutputReference {
    return new CadenceClusterV2DataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2ResizeSettings {
  /**
  * Number of concurrent nodes to resize during a resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#concurrency CadenceClusterV2#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Setting this property to `true` will notify the Instaclustr Account's designated support contacts on resize completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#notify_support_contacts CadenceClusterV2#notify_support_contacts}
  */
  readonly notifySupportContacts?: boolean | cdktf.IResolvable;
}

export function cadenceClusterV2ResizeSettingsToTerraform(struct?: CadenceClusterV2ResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    notify_support_contacts: cdktf.booleanToTerraform(struct!.notifySupportContacts),
  }
}


export function cadenceClusterV2ResizeSettingsToHclTerraform(struct?: CadenceClusterV2ResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_support_contacts: {
      value: cdktf.booleanToHclTerraform(struct!.notifySupportContacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2ResizeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2ResizeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._notifySupportContacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifySupportContacts = this._notifySupportContacts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2ResizeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._notifySupportContacts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._notifySupportContacts = value.notifySupportContacts;
    }
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // notify_support_contacts - computed: false, optional: true, required: false
  private _notifySupportContacts?: boolean | cdktf.IResolvable; 
  public get notifySupportContacts() {
    return this.getBooleanAttribute('notify_support_contacts');
  }
  public set notifySupportContacts(value: boolean | cdktf.IResolvable) {
    this._notifySupportContacts = value;
  }
  public resetNotifySupportContacts() {
    this._notifySupportContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySupportContactsInput() {
    return this._notifySupportContacts;
  }
}

export class CadenceClusterV2ResizeSettingsList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2ResizeSettings[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2ResizeSettingsOutputReference {
    return new CadenceClusterV2ResizeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2SharedProvisioning {
  /**
  * Use Advanced Visibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#use_advanced_visibility CadenceClusterV2#use_advanced_visibility}
  */
  readonly useAdvancedVisibility: boolean | cdktf.IResolvable;
}

export function cadenceClusterV2SharedProvisioningToTerraform(struct?: CadenceClusterV2SharedProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_advanced_visibility: cdktf.booleanToTerraform(struct!.useAdvancedVisibility),
  }
}


export function cadenceClusterV2SharedProvisioningToHclTerraform(struct?: CadenceClusterV2SharedProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_advanced_visibility: {
      value: cdktf.booleanToHclTerraform(struct!.useAdvancedVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2SharedProvisioningOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2SharedProvisioning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useAdvancedVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAdvancedVisibility = this._useAdvancedVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2SharedProvisioning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useAdvancedVisibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useAdvancedVisibility = value.useAdvancedVisibility;
    }
  }

  // use_advanced_visibility - computed: false, optional: false, required: true
  private _useAdvancedVisibility?: boolean | cdktf.IResolvable; 
  public get useAdvancedVisibility() {
    return this.getBooleanAttribute('use_advanced_visibility');
  }
  public set useAdvancedVisibility(value: boolean | cdktf.IResolvable) {
    this._useAdvancedVisibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useAdvancedVisibilityInput() {
    return this._useAdvancedVisibility;
  }
}

export class CadenceClusterV2SharedProvisioningList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2SharedProvisioning[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2SharedProvisioningOutputReference {
    return new CadenceClusterV2SharedProvisioningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafka {
  /**
  * ID of the supporting Cluster's Cluster Data Centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#dependency_cdc_id CadenceClusterV2#dependency_cdc_id}
  */
  readonly dependencyCdcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#dependency_vpc_type CadenceClusterV2#dependency_vpc_type}
  */
  readonly dependencyVpcType: string;
}

export function cadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafkaToTerraform(struct?: CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafkaOutputReference | CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency_cdc_id: cdktf.stringToTerraform(struct!.dependencyCdcId),
    dependency_vpc_type: cdktf.stringToTerraform(struct!.dependencyVpcType),
  }
}


export function cadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafkaToHclTerraform(struct?: CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafkaOutputReference | CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency_cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.dependencyCdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependency_vpc_type: {
      value: cdktf.stringToHclTerraform(struct!.dependencyVpcType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyCdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyCdcId = this._dependencyCdcId;
    }
    if (this._dependencyVpcType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyVpcType = this._dependencyVpcType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependencyCdcId = undefined;
      this._dependencyVpcType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependencyCdcId = value.dependencyCdcId;
      this._dependencyVpcType = value.dependencyVpcType;
    }
  }

  // dependency_cdc_id - computed: false, optional: false, required: true
  private _dependencyCdcId?: string; 
  public get dependencyCdcId() {
    return this.getStringAttribute('dependency_cdc_id');
  }
  public set dependencyCdcId(value: string) {
    this._dependencyCdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyCdcIdInput() {
    return this._dependencyCdcId;
  }

  // dependency_vpc_type - computed: false, optional: false, required: true
  private _dependencyVpcType?: string; 
  public get dependencyVpcType() {
    return this.getStringAttribute('dependency_vpc_type');
  }
  public set dependencyVpcType(value: string) {
    this._dependencyVpcType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyVpcTypeInput() {
    return this._dependencyVpcType;
  }
}
export interface CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearch {
  /**
  * ID of the supporting Cluster's Cluster Data Centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#dependency_cdc_id CadenceClusterV2#dependency_cdc_id}
  */
  readonly dependencyCdcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#dependency_vpc_type CadenceClusterV2#dependency_vpc_type}
  */
  readonly dependencyVpcType: string;
}

export function cadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearchToTerraform(struct?: CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearchOutputReference | CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency_cdc_id: cdktf.stringToTerraform(struct!.dependencyCdcId),
    dependency_vpc_type: cdktf.stringToTerraform(struct!.dependencyVpcType),
  }
}


export function cadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearchToHclTerraform(struct?: CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearchOutputReference | CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency_cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.dependencyCdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependency_vpc_type: {
      value: cdktf.stringToHclTerraform(struct!.dependencyVpcType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyCdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyCdcId = this._dependencyCdcId;
    }
    if (this._dependencyVpcType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyVpcType = this._dependencyVpcType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependencyCdcId = undefined;
      this._dependencyVpcType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependencyCdcId = value.dependencyCdcId;
      this._dependencyVpcType = value.dependencyVpcType;
    }
  }

  // dependency_cdc_id - computed: false, optional: false, required: true
  private _dependencyCdcId?: string; 
  public get dependencyCdcId() {
    return this.getStringAttribute('dependency_cdc_id');
  }
  public set dependencyCdcId(value: string) {
    this._dependencyCdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyCdcIdInput() {
    return this._dependencyCdcId;
  }

  // dependency_vpc_type - computed: false, optional: false, required: true
  private _dependencyVpcType?: string; 
  public get dependencyVpcType() {
    return this.getStringAttribute('dependency_vpc_type');
  }
  public set dependencyVpcType(value: string) {
    this._dependencyVpcType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyVpcTypeInput() {
    return this._dependencyVpcType;
  }
}
export interface CadenceClusterV2StandardProvisioningAdvancedVisibility {
  /**
  * target_kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#target_kafka CadenceClusterV2#target_kafka}
  */
  readonly targetKafka: CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafka;
  /**
  * target_open_search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#target_open_search CadenceClusterV2#target_open_search}
  */
  readonly targetOpenSearch: CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearch;
}

export function cadenceClusterV2StandardProvisioningAdvancedVisibilityToTerraform(struct?: CadenceClusterV2StandardProvisioningAdvancedVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_kafka: cadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafkaToTerraform(struct!.targetKafka),
    target_open_search: cadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearchToTerraform(struct!.targetOpenSearch),
  }
}


export function cadenceClusterV2StandardProvisioningAdvancedVisibilityToHclTerraform(struct?: CadenceClusterV2StandardProvisioningAdvancedVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_kafka: {
      value: cadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafkaToHclTerraform(struct!.targetKafka),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafkaList",
    },
    target_open_search: {
      value: cadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearchToHclTerraform(struct!.targetOpenSearch),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2StandardProvisioningAdvancedVisibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2StandardProvisioningAdvancedVisibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetKafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKafka = this._targetKafka?.internalValue;
    }
    if (this._targetOpenSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOpenSearch = this._targetOpenSearch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2StandardProvisioningAdvancedVisibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetKafka.internalValue = undefined;
      this._targetOpenSearch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetKafka.internalValue = value.targetKafka;
      this._targetOpenSearch.internalValue = value.targetOpenSearch;
    }
  }

  // target_kafka - computed: false, optional: false, required: true
  private _targetKafka = new CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafkaOutputReference(this, "target_kafka");
  public get targetKafka() {
    return this._targetKafka;
  }
  public putTargetKafka(value: CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetKafka) {
    this._targetKafka.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKafkaInput() {
    return this._targetKafka.internalValue;
  }

  // target_open_search - computed: false, optional: false, required: true
  private _targetOpenSearch = new CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearchOutputReference(this, "target_open_search");
  public get targetOpenSearch() {
    return this._targetOpenSearch;
  }
  public putTargetOpenSearch(value: CadenceClusterV2StandardProvisioningAdvancedVisibilityTargetOpenSearch) {
    this._targetOpenSearch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOpenSearchInput() {
    return this._targetOpenSearch.internalValue;
  }
}

export class CadenceClusterV2StandardProvisioningAdvancedVisibilityList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2StandardProvisioningAdvancedVisibility[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2StandardProvisioningAdvancedVisibilityOutputReference {
    return new CadenceClusterV2StandardProvisioningAdvancedVisibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2StandardProvisioningTargetCassandra {
  /**
  * ID of the supporting Cluster's Cluster Data Centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#dependency_cdc_id CadenceClusterV2#dependency_cdc_id}
  */
  readonly dependencyCdcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#dependency_vpc_type CadenceClusterV2#dependency_vpc_type}
  */
  readonly dependencyVpcType: string;
}

export function cadenceClusterV2StandardProvisioningTargetCassandraToTerraform(struct?: CadenceClusterV2StandardProvisioningTargetCassandraOutputReference | CadenceClusterV2StandardProvisioningTargetCassandra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency_cdc_id: cdktf.stringToTerraform(struct!.dependencyCdcId),
    dependency_vpc_type: cdktf.stringToTerraform(struct!.dependencyVpcType),
  }
}


export function cadenceClusterV2StandardProvisioningTargetCassandraToHclTerraform(struct?: CadenceClusterV2StandardProvisioningTargetCassandraOutputReference | CadenceClusterV2StandardProvisioningTargetCassandra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency_cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.dependencyCdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependency_vpc_type: {
      value: cdktf.stringToHclTerraform(struct!.dependencyVpcType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2StandardProvisioningTargetCassandraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CadenceClusterV2StandardProvisioningTargetCassandra | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyCdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyCdcId = this._dependencyCdcId;
    }
    if (this._dependencyVpcType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyVpcType = this._dependencyVpcType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2StandardProvisioningTargetCassandra | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependencyCdcId = undefined;
      this._dependencyVpcType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependencyCdcId = value.dependencyCdcId;
      this._dependencyVpcType = value.dependencyVpcType;
    }
  }

  // dependency_cdc_id - computed: false, optional: false, required: true
  private _dependencyCdcId?: string; 
  public get dependencyCdcId() {
    return this.getStringAttribute('dependency_cdc_id');
  }
  public set dependencyCdcId(value: string) {
    this._dependencyCdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyCdcIdInput() {
    return this._dependencyCdcId;
  }

  // dependency_vpc_type - computed: false, optional: false, required: true
  private _dependencyVpcType?: string; 
  public get dependencyVpcType() {
    return this.getStringAttribute('dependency_vpc_type');
  }
  public set dependencyVpcType(value: string) {
    this._dependencyVpcType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyVpcTypeInput() {
    return this._dependencyVpcType;
  }
}
export interface CadenceClusterV2StandardProvisioning {
  /**
  * advanced_visibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#advanced_visibility CadenceClusterV2#advanced_visibility}
  */
  readonly advancedVisibility?: CadenceClusterV2StandardProvisioningAdvancedVisibility[] | cdktf.IResolvable;
  /**
  * target_cassandra block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#target_cassandra CadenceClusterV2#target_cassandra}
  */
  readonly targetCassandra: CadenceClusterV2StandardProvisioningTargetCassandra;
}

export function cadenceClusterV2StandardProvisioningToTerraform(struct?: CadenceClusterV2StandardProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_visibility: cdktf.listMapper(cadenceClusterV2StandardProvisioningAdvancedVisibilityToTerraform, true)(struct!.advancedVisibility),
    target_cassandra: cadenceClusterV2StandardProvisioningTargetCassandraToTerraform(struct!.targetCassandra),
  }
}


export function cadenceClusterV2StandardProvisioningToHclTerraform(struct?: CadenceClusterV2StandardProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_visibility: {
      value: cdktf.listMapperHcl(cadenceClusterV2StandardProvisioningAdvancedVisibilityToHclTerraform, true)(struct!.advancedVisibility),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2StandardProvisioningAdvancedVisibilityList",
    },
    target_cassandra: {
      value: cadenceClusterV2StandardProvisioningTargetCassandraToHclTerraform(struct!.targetCassandra),
      isBlock: true,
      type: "list",
      storageClassType: "CadenceClusterV2StandardProvisioningTargetCassandraList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2StandardProvisioningOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2StandardProvisioning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedVisibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedVisibility = this._advancedVisibility?.internalValue;
    }
    if (this._targetCassandra?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCassandra = this._targetCassandra?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2StandardProvisioning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedVisibility.internalValue = undefined;
      this._targetCassandra.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedVisibility.internalValue = value.advancedVisibility;
      this._targetCassandra.internalValue = value.targetCassandra;
    }
  }

  // advanced_visibility - computed: false, optional: true, required: false
  private _advancedVisibility = new CadenceClusterV2StandardProvisioningAdvancedVisibilityList(this, "advanced_visibility", false);
  public get advancedVisibility() {
    return this._advancedVisibility;
  }
  public putAdvancedVisibility(value: CadenceClusterV2StandardProvisioningAdvancedVisibility[] | cdktf.IResolvable) {
    this._advancedVisibility.internalValue = value;
  }
  public resetAdvancedVisibility() {
    this._advancedVisibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedVisibilityInput() {
    return this._advancedVisibility.internalValue;
  }

  // target_cassandra - computed: false, optional: false, required: true
  private _targetCassandra = new CadenceClusterV2StandardProvisioningTargetCassandraOutputReference(this, "target_cassandra");
  public get targetCassandra() {
    return this._targetCassandra;
  }
  public putTargetCassandra(value: CadenceClusterV2StandardProvisioningTargetCassandra) {
    this._targetCassandra.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCassandraInput() {
    return this._targetCassandra.internalValue;
  }
}

export class CadenceClusterV2StandardProvisioningList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2StandardProvisioning[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2StandardProvisioningOutputReference {
    return new CadenceClusterV2StandardProvisioningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2TargetPrimaryCadence {
  /**
  * ID of the supporting Cluster's Cluster Data Centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#dependency_cdc_id CadenceClusterV2#dependency_cdc_id}
  */
  readonly dependencyCdcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#dependency_vpc_type CadenceClusterV2#dependency_vpc_type}
  */
  readonly dependencyVpcType: string;
}

export function cadenceClusterV2TargetPrimaryCadenceToTerraform(struct?: CadenceClusterV2TargetPrimaryCadence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency_cdc_id: cdktf.stringToTerraform(struct!.dependencyCdcId),
    dependency_vpc_type: cdktf.stringToTerraform(struct!.dependencyVpcType),
  }
}


export function cadenceClusterV2TargetPrimaryCadenceToHclTerraform(struct?: CadenceClusterV2TargetPrimaryCadence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency_cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.dependencyCdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependency_vpc_type: {
      value: cdktf.stringToHclTerraform(struct!.dependencyVpcType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2TargetPrimaryCadenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2TargetPrimaryCadence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyCdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyCdcId = this._dependencyCdcId;
    }
    if (this._dependencyVpcType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyVpcType = this._dependencyVpcType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2TargetPrimaryCadence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencyCdcId = undefined;
      this._dependencyVpcType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencyCdcId = value.dependencyCdcId;
      this._dependencyVpcType = value.dependencyVpcType;
    }
  }

  // dependency_cdc_id - computed: false, optional: false, required: true
  private _dependencyCdcId?: string; 
  public get dependencyCdcId() {
    return this.getStringAttribute('dependency_cdc_id');
  }
  public set dependencyCdcId(value: string) {
    this._dependencyCdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyCdcIdInput() {
    return this._dependencyCdcId;
  }

  // dependency_vpc_type - computed: false, optional: false, required: true
  private _dependencyVpcType?: string; 
  public get dependencyVpcType() {
    return this.getStringAttribute('dependency_vpc_type');
  }
  public set dependencyVpcType(value: string) {
    this._dependencyVpcType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyVpcTypeInput() {
    return this._dependencyVpcType;
  }
}

export class CadenceClusterV2TargetPrimaryCadenceList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2TargetPrimaryCadence[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2TargetPrimaryCadenceOutputReference {
    return new CadenceClusterV2TargetPrimaryCadenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2TargetSecondaryCadence {
  /**
  * ID of the supporting Cluster's Cluster Data Centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#dependency_cdc_id CadenceClusterV2#dependency_cdc_id}
  */
  readonly dependencyCdcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#dependency_vpc_type CadenceClusterV2#dependency_vpc_type}
  */
  readonly dependencyVpcType: string;
}

export function cadenceClusterV2TargetSecondaryCadenceToTerraform(struct?: CadenceClusterV2TargetSecondaryCadence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency_cdc_id: cdktf.stringToTerraform(struct!.dependencyCdcId),
    dependency_vpc_type: cdktf.stringToTerraform(struct!.dependencyVpcType),
  }
}


export function cadenceClusterV2TargetSecondaryCadenceToHclTerraform(struct?: CadenceClusterV2TargetSecondaryCadence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency_cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.dependencyCdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependency_vpc_type: {
      value: cdktf.stringToHclTerraform(struct!.dependencyVpcType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2TargetSecondaryCadenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2TargetSecondaryCadence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyCdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyCdcId = this._dependencyCdcId;
    }
    if (this._dependencyVpcType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyVpcType = this._dependencyVpcType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2TargetSecondaryCadence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencyCdcId = undefined;
      this._dependencyVpcType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencyCdcId = value.dependencyCdcId;
      this._dependencyVpcType = value.dependencyVpcType;
    }
  }

  // dependency_cdc_id - computed: false, optional: false, required: true
  private _dependencyCdcId?: string; 
  public get dependencyCdcId() {
    return this.getStringAttribute('dependency_cdc_id');
  }
  public set dependencyCdcId(value: string) {
    this._dependencyCdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyCdcIdInput() {
    return this._dependencyCdcId;
  }

  // dependency_vpc_type - computed: false, optional: false, required: true
  private _dependencyVpcType?: string; 
  public get dependencyVpcType() {
    return this.getStringAttribute('dependency_vpc_type');
  }
  public set dependencyVpcType(value: string) {
    this._dependencyVpcType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyVpcTypeInput() {
    return this._dependencyVpcType;
  }
}

export class CadenceClusterV2TargetSecondaryCadenceList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2TargetSecondaryCadence[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2TargetSecondaryCadenceOutputReference {
    return new CadenceClusterV2TargetSecondaryCadenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CadenceClusterV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#create CadenceClusterV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#default CadenceClusterV2#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#update CadenceClusterV2#update}
  */
  readonly update?: string;
}

export function cadenceClusterV2TimeoutsToTerraform(struct?: CadenceClusterV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cadenceClusterV2TimeoutsToHclTerraform(struct?: CadenceClusterV2Timeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class CadenceClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CadenceClusterV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
export interface CadenceClusterV2TwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#confirmation_email CadenceClusterV2#confirmation_email}
  */
  readonly confirmationEmail: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#confirmation_phone_number CadenceClusterV2#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function cadenceClusterV2TwoFactorDeleteToTerraform(struct?: CadenceClusterV2TwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function cadenceClusterV2TwoFactorDeleteToHclTerraform(struct?: CadenceClusterV2TwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confirmation_email: {
      value: cdktf.stringToHclTerraform(struct!.confirmationEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirmation_phone_number: {
      value: cdktf.stringToHclTerraform(struct!.confirmationPhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CadenceClusterV2TwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CadenceClusterV2TwoFactorDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationEmail = this._confirmationEmail;
    }
    if (this._confirmationPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationPhoneNumber = this._confirmationPhoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CadenceClusterV2TwoFactorDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confirmationEmail = undefined;
      this._confirmationPhoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confirmationEmail = value.confirmationEmail;
      this._confirmationPhoneNumber = value.confirmationPhoneNumber;
    }
  }

  // confirmation_email - computed: false, optional: false, required: true
  private _confirmationEmail?: string; 
  public get confirmationEmail() {
    return this.getStringAttribute('confirmation_email');
  }
  public set confirmationEmail(value: string) {
    this._confirmationEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationEmailInput() {
    return this._confirmationEmail;
  }

  // confirmation_phone_number - computed: true, optional: true, required: false
  private _confirmationPhoneNumber?: string; 
  public get confirmationPhoneNumber() {
    return this.getStringAttribute('confirmation_phone_number');
  }
  public set confirmationPhoneNumber(value: string) {
    this._confirmationPhoneNumber = value;
  }
  public resetConfirmationPhoneNumber() {
    this._confirmationPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationPhoneNumberInput() {
    return this._confirmationPhoneNumber;
  }
}

export class CadenceClusterV2TwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : CadenceClusterV2TwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): CadenceClusterV2TwoFactorDeleteOutputReference {
    return new CadenceClusterV2TwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2 instaclustr_cadence_cluster_v2}
*/
export class CadenceClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_cadence_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CadenceClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CadenceClusterV2 to import
  * @param importFromId The id of the existing CadenceClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CadenceClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_cadence_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cadence_cluster_v2 instaclustr_cadence_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CadenceClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: CadenceClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_cadence_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.39',
        providerVersionConstraint: '2.1.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cadenceVersion = config.cadenceVersion;
    this._currentClusterOperationStatus = config.currentClusterOperationStatus;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._pciComplianceMode = config.pciComplianceMode;
    this._privateNetworkCluster = config.privateNetworkCluster;
    this._slaTier = config.slaTier;
    this._status = config.status;
    this._useCadenceWebAuth = config.useCadenceWebAuth;
    this._useHttpApi = config.useHttpApi;
    this._awsArchival.internalValue = config.awsArchival;
    this._dataCentre.internalValue = config.dataCentre;
    this._resizeSettings.internalValue = config.resizeSettings;
    this._sharedProvisioning.internalValue = config.sharedProvisioning;
    this._standardProvisioning.internalValue = config.standardProvisioning;
    this._targetPrimaryCadence.internalValue = config.targetPrimaryCadence;
    this._targetSecondaryCadence.internalValue = config.targetSecondaryCadence;
    this._timeouts.internalValue = config.timeouts;
    this._twoFactorDelete.internalValue = config.twoFactorDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cadence_version - computed: false, optional: false, required: true
  private _cadenceVersion?: string; 
  public get cadenceVersion() {
    return this.getStringAttribute('cadence_version');
  }
  public set cadenceVersion(value: string) {
    this._cadenceVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cadenceVersionInput() {
    return this._cadenceVersion;
  }

  // current_cluster_operation_status - computed: true, optional: true, required: false
  private _currentClusterOperationStatus?: string; 
  public get currentClusterOperationStatus() {
    return this.getStringAttribute('current_cluster_operation_status');
  }
  public set currentClusterOperationStatus(value: string) {
    this._currentClusterOperationStatus = value;
  }
  public resetCurrentClusterOperationStatus() {
    this._currentClusterOperationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentClusterOperationStatusInput() {
    return this._currentClusterOperationStatus;
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

  // pci_compliance_mode - computed: false, optional: false, required: true
  private _pciComplianceMode?: boolean | cdktf.IResolvable; 
  public get pciComplianceMode() {
    return this.getBooleanAttribute('pci_compliance_mode');
  }
  public set pciComplianceMode(value: boolean | cdktf.IResolvable) {
    this._pciComplianceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pciComplianceModeInput() {
    return this._pciComplianceMode;
  }

  // private_network_cluster - computed: false, optional: false, required: true
  private _privateNetworkCluster?: boolean | cdktf.IResolvable; 
  public get privateNetworkCluster() {
    return this.getBooleanAttribute('private_network_cluster');
  }
  public set privateNetworkCluster(value: boolean | cdktf.IResolvable) {
    this._privateNetworkCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkClusterInput() {
    return this._privateNetworkCluster;
  }

  // sla_tier - computed: false, optional: false, required: true
  private _slaTier?: string; 
  public get slaTier() {
    return this.getStringAttribute('sla_tier');
  }
  public set slaTier(value: string) {
    this._slaTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slaTierInput() {
    return this._slaTier;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // use_cadence_web_auth - computed: false, optional: false, required: true
  private _useCadenceWebAuth?: boolean | cdktf.IResolvable; 
  public get useCadenceWebAuth() {
    return this.getBooleanAttribute('use_cadence_web_auth');
  }
  public set useCadenceWebAuth(value: boolean | cdktf.IResolvable) {
    this._useCadenceWebAuth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useCadenceWebAuthInput() {
    return this._useCadenceWebAuth;
  }

  // use_http_api - computed: true, optional: true, required: false
  private _useHttpApi?: boolean | cdktf.IResolvable; 
  public get useHttpApi() {
    return this.getBooleanAttribute('use_http_api');
  }
  public set useHttpApi(value: boolean | cdktf.IResolvable) {
    this._useHttpApi = value;
  }
  public resetUseHttpApi() {
    this._useHttpApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpApiInput() {
    return this._useHttpApi;
  }

  // aws_archival - computed: false, optional: true, required: false
  private _awsArchival = new CadenceClusterV2AwsArchivalList(this, "aws_archival", false);
  public get awsArchival() {
    return this._awsArchival;
  }
  public putAwsArchival(value: CadenceClusterV2AwsArchival[] | cdktf.IResolvable) {
    this._awsArchival.internalValue = value;
  }
  public resetAwsArchival() {
    this._awsArchival.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsArchivalInput() {
    return this._awsArchival.internalValue;
  }

  // data_centre - computed: false, optional: false, required: true
  private _dataCentre = new CadenceClusterV2DataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: CadenceClusterV2DataCentre[] | cdktf.IResolvable) {
    this._dataCentre.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreInput() {
    return this._dataCentre.internalValue;
  }

  // resize_settings - computed: false, optional: true, required: false
  private _resizeSettings = new CadenceClusterV2ResizeSettingsList(this, "resize_settings", false);
  public get resizeSettings() {
    return this._resizeSettings;
  }
  public putResizeSettings(value: CadenceClusterV2ResizeSettings[] | cdktf.IResolvable) {
    this._resizeSettings.internalValue = value;
  }
  public resetResizeSettings() {
    this._resizeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeSettingsInput() {
    return this._resizeSettings.internalValue;
  }

  // shared_provisioning - computed: false, optional: true, required: false
  private _sharedProvisioning = new CadenceClusterV2SharedProvisioningList(this, "shared_provisioning", false);
  public get sharedProvisioning() {
    return this._sharedProvisioning;
  }
  public putSharedProvisioning(value: CadenceClusterV2SharedProvisioning[] | cdktf.IResolvable) {
    this._sharedProvisioning.internalValue = value;
  }
  public resetSharedProvisioning() {
    this._sharedProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedProvisioningInput() {
    return this._sharedProvisioning.internalValue;
  }

  // standard_provisioning - computed: false, optional: true, required: false
  private _standardProvisioning = new CadenceClusterV2StandardProvisioningList(this, "standard_provisioning", false);
  public get standardProvisioning() {
    return this._standardProvisioning;
  }
  public putStandardProvisioning(value: CadenceClusterV2StandardProvisioning[] | cdktf.IResolvable) {
    this._standardProvisioning.internalValue = value;
  }
  public resetStandardProvisioning() {
    this._standardProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardProvisioningInput() {
    return this._standardProvisioning.internalValue;
  }

  // target_primary_cadence - computed: false, optional: true, required: false
  private _targetPrimaryCadence = new CadenceClusterV2TargetPrimaryCadenceList(this, "target_primary_cadence", false);
  public get targetPrimaryCadence() {
    return this._targetPrimaryCadence;
  }
  public putTargetPrimaryCadence(value: CadenceClusterV2TargetPrimaryCadence[] | cdktf.IResolvable) {
    this._targetPrimaryCadence.internalValue = value;
  }
  public resetTargetPrimaryCadence() {
    this._targetPrimaryCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPrimaryCadenceInput() {
    return this._targetPrimaryCadence.internalValue;
  }

  // target_secondary_cadence - computed: false, optional: true, required: false
  private _targetSecondaryCadence = new CadenceClusterV2TargetSecondaryCadenceList(this, "target_secondary_cadence", false);
  public get targetSecondaryCadence() {
    return this._targetSecondaryCadence;
  }
  public putTargetSecondaryCadence(value: CadenceClusterV2TargetSecondaryCadence[] | cdktf.IResolvable) {
    this._targetSecondaryCadence.internalValue = value;
  }
  public resetTargetSecondaryCadence() {
    this._targetSecondaryCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSecondaryCadenceInput() {
    return this._targetSecondaryCadence.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CadenceClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CadenceClusterV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // two_factor_delete - computed: false, optional: true, required: false
  private _twoFactorDelete = new CadenceClusterV2TwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: CadenceClusterV2TwoFactorDelete[] | cdktf.IResolvable) {
    this._twoFactorDelete.internalValue = value;
  }
  public resetTwoFactorDelete() {
    this._twoFactorDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDeleteInput() {
    return this._twoFactorDelete.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cadence_version: cdktf.stringToTerraform(this._cadenceVersion),
      current_cluster_operation_status: cdktf.stringToTerraform(this._currentClusterOperationStatus),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pci_compliance_mode: cdktf.booleanToTerraform(this._pciComplianceMode),
      private_network_cluster: cdktf.booleanToTerraform(this._privateNetworkCluster),
      sla_tier: cdktf.stringToTerraform(this._slaTier),
      status: cdktf.stringToTerraform(this._status),
      use_cadence_web_auth: cdktf.booleanToTerraform(this._useCadenceWebAuth),
      use_http_api: cdktf.booleanToTerraform(this._useHttpApi),
      aws_archival: cdktf.listMapper(cadenceClusterV2AwsArchivalToTerraform, true)(this._awsArchival.internalValue),
      data_centre: cdktf.listMapper(cadenceClusterV2DataCentreToTerraform, true)(this._dataCentre.internalValue),
      resize_settings: cdktf.listMapper(cadenceClusterV2ResizeSettingsToTerraform, true)(this._resizeSettings.internalValue),
      shared_provisioning: cdktf.listMapper(cadenceClusterV2SharedProvisioningToTerraform, true)(this._sharedProvisioning.internalValue),
      standard_provisioning: cdktf.listMapper(cadenceClusterV2StandardProvisioningToTerraform, true)(this._standardProvisioning.internalValue),
      target_primary_cadence: cdktf.listMapper(cadenceClusterV2TargetPrimaryCadenceToTerraform, true)(this._targetPrimaryCadence.internalValue),
      target_secondary_cadence: cdktf.listMapper(cadenceClusterV2TargetSecondaryCadenceToTerraform, true)(this._targetSecondaryCadence.internalValue),
      timeouts: cadenceClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
      two_factor_delete: cdktf.listMapper(cadenceClusterV2TwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cadence_version: {
        value: cdktf.stringToHclTerraform(this._cadenceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      current_cluster_operation_status: {
        value: cdktf.stringToHclTerraform(this._currentClusterOperationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      pci_compliance_mode: {
        value: cdktf.booleanToHclTerraform(this._pciComplianceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_network_cluster: {
        value: cdktf.booleanToHclTerraform(this._privateNetworkCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sla_tier: {
        value: cdktf.stringToHclTerraform(this._slaTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_cadence_web_auth: {
        value: cdktf.booleanToHclTerraform(this._useCadenceWebAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_http_api: {
        value: cdktf.booleanToHclTerraform(this._useHttpApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_archival: {
        value: cdktf.listMapperHcl(cadenceClusterV2AwsArchivalToHclTerraform, true)(this._awsArchival.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CadenceClusterV2AwsArchivalList",
      },
      data_centre: {
        value: cdktf.listMapperHcl(cadenceClusterV2DataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CadenceClusterV2DataCentreList",
      },
      resize_settings: {
        value: cdktf.listMapperHcl(cadenceClusterV2ResizeSettingsToHclTerraform, true)(this._resizeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CadenceClusterV2ResizeSettingsList",
      },
      shared_provisioning: {
        value: cdktf.listMapperHcl(cadenceClusterV2SharedProvisioningToHclTerraform, true)(this._sharedProvisioning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CadenceClusterV2SharedProvisioningList",
      },
      standard_provisioning: {
        value: cdktf.listMapperHcl(cadenceClusterV2StandardProvisioningToHclTerraform, true)(this._standardProvisioning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CadenceClusterV2StandardProvisioningList",
      },
      target_primary_cadence: {
        value: cdktf.listMapperHcl(cadenceClusterV2TargetPrimaryCadenceToHclTerraform, true)(this._targetPrimaryCadence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CadenceClusterV2TargetPrimaryCadenceList",
      },
      target_secondary_cadence: {
        value: cdktf.listMapperHcl(cadenceClusterV2TargetSecondaryCadenceToHclTerraform, true)(this._targetSecondaryCadence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CadenceClusterV2TargetSecondaryCadenceList",
      },
      timeouts: {
        value: cadenceClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CadenceClusterV2Timeouts",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(cadenceClusterV2TwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CadenceClusterV2TwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
