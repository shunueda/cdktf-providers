// https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsServerlessConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of AWS account IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#account_ids IntegrationAwsServerless#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Enable console sign-in trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#console_sign_in_trigger IntegrationAwsServerless#console_sign_in_trigger}
  */
  readonly consoleSignInTrigger?: boolean | cdktf.IResolvable;
  /**
  * Enable instance state change trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#instance_state_change_trigger IntegrationAwsServerless#instance_state_change_trigger}
  */
  readonly instanceStateChangeTrigger?: boolean | cdktf.IResolvable;
  /**
  * Is organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#is_organization IntegrationAwsServerless#is_organization}
  */
  readonly isOrganization?: boolean | cdktf.IResolvable;
  /**
  * Name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#name IntegrationAwsServerless#name}
  */
  readonly name: string;
  /**
  * AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#region IntegrationAwsServerless#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#scan_configuration IntegrationAwsServerless#scan_configuration}
  */
  readonly scanConfiguration: IntegrationAwsServerlessScanConfiguration;
  /**
  * Mondoo space identifier. If there is no ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#space_id IntegrationAwsServerless#space_id}
  */
  readonly spaceId?: string;
}
export interface IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptions {
  /**
  * Max ASG instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#max_asg_instances IntegrationAwsServerless#max_asg_instances}
  */
  readonly maxAsgInstances?: number;
  /**
  * Target instances per scanner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#target_instances_per_scanner IntegrationAwsServerless#target_instances_per_scanner}
  */
  readonly targetInstancesPerScanner?: number;
}

export function integrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptionsToTerraform(struct?: IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_asg_instances: cdktf.numberToTerraform(struct!.maxAsgInstances),
    target_instances_per_scanner: cdktf.numberToTerraform(struct!.targetInstancesPerScanner),
  }
}


export function integrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptionsToHclTerraform(struct?: IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_asg_instances: {
      value: cdktf.numberToHclTerraform(struct!.maxAsgInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_instances_per_scanner: {
      value: cdktf.numberToHclTerraform(struct!.targetInstancesPerScanner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAsgInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAsgInstances = this._maxAsgInstances;
    }
    if (this._targetInstancesPerScanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInstancesPerScanner = this._targetInstancesPerScanner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxAsgInstances = undefined;
      this._targetInstancesPerScanner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxAsgInstances = value.maxAsgInstances;
      this._targetInstancesPerScanner = value.targetInstancesPerScanner;
    }
  }

  // max_asg_instances - computed: false, optional: true, required: false
  private _maxAsgInstances?: number; 
  public get maxAsgInstances() {
    return this.getNumberAttribute('max_asg_instances');
  }
  public set maxAsgInstances(value: number) {
    this._maxAsgInstances = value;
  }
  public resetMaxAsgInstances() {
    this._maxAsgInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAsgInstancesInput() {
    return this._maxAsgInstances;
  }

  // target_instances_per_scanner - computed: false, optional: true, required: false
  private _targetInstancesPerScanner?: number; 
  public get targetInstancesPerScanner() {
    return this.getNumberAttribute('target_instances_per_scanner');
  }
  public set targetInstancesPerScanner(value: number) {
    this._targetInstancesPerScanner = value;
  }
  public resetTargetInstancesPerScanner() {
    this._targetInstancesPerScanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInstancesPerScannerInput() {
    return this._targetInstancesPerScanner;
  }
}
export interface IntegrationAwsServerlessScanConfigurationEc2ScanOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#ebs_scan_options IntegrationAwsServerless#ebs_scan_options}
  */
  readonly ebsScanOptions?: IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptions;
  /**
  * Enable EBS volume scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#ebs_volume_scan IntegrationAwsServerless#ebs_volume_scan}
  */
  readonly ebsVolumeScan?: boolean | cdktf.IResolvable;
  /**
  * List of instance IDs to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#exclude_instance_ids_filter IntegrationAwsServerless#exclude_instance_ids_filter}
  */
  readonly excludeInstanceIdsFilter?: string[];
  /**
  * List of regions to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#exclude_regions_filter IntegrationAwsServerless#exclude_regions_filter}
  */
  readonly excludeRegionsFilter?: string[];
  /**
  * Excluded tags filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#exclude_tags_filter IntegrationAwsServerless#exclude_tags_filter}
  */
  readonly excludeTagsFilter?: { [key: string]: string };
  /**
  * Enable instance connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#instance_connect IntegrationAwsServerless#instance_connect}
  */
  readonly instanceConnect?: boolean | cdktf.IResolvable;
  /**
  * List of instance IDs filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#instance_ids_filter IntegrationAwsServerless#instance_ids_filter}
  */
  readonly instanceIdsFilter?: string[];
  /**
  * List of regions filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#regions_filter IntegrationAwsServerless#regions_filter}
  */
  readonly regionsFilter?: string[];
  /**
  * Enable SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#ssm IntegrationAwsServerless#ssm}
  */
  readonly ssm?: boolean | cdktf.IResolvable;
  /**
  * Tags filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#tags_filter IntegrationAwsServerless#tags_filter}
  */
  readonly tagsFilter?: { [key: string]: string };
}

export function integrationAwsServerlessScanConfigurationEc2ScanOptionsToTerraform(struct?: IntegrationAwsServerlessScanConfigurationEc2ScanOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebs_scan_options: integrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptionsToTerraform(struct!.ebsScanOptions),
    ebs_volume_scan: cdktf.booleanToTerraform(struct!.ebsVolumeScan),
    exclude_instance_ids_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeInstanceIdsFilter),
    exclude_regions_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeRegionsFilter),
    exclude_tags_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.excludeTagsFilter),
    instance_connect: cdktf.booleanToTerraform(struct!.instanceConnect),
    instance_ids_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceIdsFilter),
    regions_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionsFilter),
    ssm: cdktf.booleanToTerraform(struct!.ssm),
    tags_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tagsFilter),
  }
}


export function integrationAwsServerlessScanConfigurationEc2ScanOptionsToHclTerraform(struct?: IntegrationAwsServerlessScanConfigurationEc2ScanOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebs_scan_options: {
      value: integrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptionsToHclTerraform(struct!.ebsScanOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptions",
    },
    ebs_volume_scan: {
      value: cdktf.booleanToHclTerraform(struct!.ebsVolumeScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_instance_ids_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeInstanceIdsFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_regions_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeRegionsFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_tags_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.excludeTagsFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    instance_connect: {
      value: cdktf.booleanToHclTerraform(struct!.instanceConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_ids_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceIdsFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regions_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regionsFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssm: {
      value: cdktf.booleanToHclTerraform(struct!.ssm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tagsFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsServerlessScanConfigurationEc2ScanOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsServerlessScanConfigurationEc2ScanOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsScanOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsScanOptions = this._ebsScanOptions?.internalValue;
    }
    if (this._ebsVolumeScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeScan = this._ebsVolumeScan;
    }
    if (this._excludeInstanceIdsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInstanceIdsFilter = this._excludeInstanceIdsFilter;
    }
    if (this._excludeRegionsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRegionsFilter = this._excludeRegionsFilter;
    }
    if (this._excludeTagsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTagsFilter = this._excludeTagsFilter;
    }
    if (this._instanceConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConnect = this._instanceConnect;
    }
    if (this._instanceIdsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIdsFilter = this._instanceIdsFilter;
    }
    if (this._regionsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionsFilter = this._regionsFilter;
    }
    if (this._ssm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssm = this._ssm;
    }
    if (this._tagsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsFilter = this._tagsFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsServerlessScanConfigurationEc2ScanOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebsScanOptions.internalValue = undefined;
      this._ebsVolumeScan = undefined;
      this._excludeInstanceIdsFilter = undefined;
      this._excludeRegionsFilter = undefined;
      this._excludeTagsFilter = undefined;
      this._instanceConnect = undefined;
      this._instanceIdsFilter = undefined;
      this._regionsFilter = undefined;
      this._ssm = undefined;
      this._tagsFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebsScanOptions.internalValue = value.ebsScanOptions;
      this._ebsVolumeScan = value.ebsVolumeScan;
      this._excludeInstanceIdsFilter = value.excludeInstanceIdsFilter;
      this._excludeRegionsFilter = value.excludeRegionsFilter;
      this._excludeTagsFilter = value.excludeTagsFilter;
      this._instanceConnect = value.instanceConnect;
      this._instanceIdsFilter = value.instanceIdsFilter;
      this._regionsFilter = value.regionsFilter;
      this._ssm = value.ssm;
      this._tagsFilter = value.tagsFilter;
    }
  }

  // ebs_scan_options - computed: false, optional: true, required: false
  private _ebsScanOptions = new IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptionsOutputReference(this, "ebs_scan_options");
  public get ebsScanOptions() {
    return this._ebsScanOptions;
  }
  public putEbsScanOptions(value: IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptions) {
    this._ebsScanOptions.internalValue = value;
  }
  public resetEbsScanOptions() {
    this._ebsScanOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsScanOptionsInput() {
    return this._ebsScanOptions.internalValue;
  }

  // ebs_volume_scan - computed: false, optional: true, required: false
  private _ebsVolumeScan?: boolean | cdktf.IResolvable; 
  public get ebsVolumeScan() {
    return this.getBooleanAttribute('ebs_volume_scan');
  }
  public set ebsVolumeScan(value: boolean | cdktf.IResolvable) {
    this._ebsVolumeScan = value;
  }
  public resetEbsVolumeScan() {
    this._ebsVolumeScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeScanInput() {
    return this._ebsVolumeScan;
  }

  // exclude_instance_ids_filter - computed: false, optional: true, required: false
  private _excludeInstanceIdsFilter?: string[]; 
  public get excludeInstanceIdsFilter() {
    return this.getListAttribute('exclude_instance_ids_filter');
  }
  public set excludeInstanceIdsFilter(value: string[]) {
    this._excludeInstanceIdsFilter = value;
  }
  public resetExcludeInstanceIdsFilter() {
    this._excludeInstanceIdsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInstanceIdsFilterInput() {
    return this._excludeInstanceIdsFilter;
  }

  // exclude_regions_filter - computed: false, optional: true, required: false
  private _excludeRegionsFilter?: string[]; 
  public get excludeRegionsFilter() {
    return this.getListAttribute('exclude_regions_filter');
  }
  public set excludeRegionsFilter(value: string[]) {
    this._excludeRegionsFilter = value;
  }
  public resetExcludeRegionsFilter() {
    this._excludeRegionsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRegionsFilterInput() {
    return this._excludeRegionsFilter;
  }

  // exclude_tags_filter - computed: false, optional: true, required: false
  private _excludeTagsFilter?: { [key: string]: string }; 
  public get excludeTagsFilter() {
    return this.getStringMapAttribute('exclude_tags_filter');
  }
  public set excludeTagsFilter(value: { [key: string]: string }) {
    this._excludeTagsFilter = value;
  }
  public resetExcludeTagsFilter() {
    this._excludeTagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsFilterInput() {
    return this._excludeTagsFilter;
  }

  // instance_connect - computed: false, optional: true, required: false
  private _instanceConnect?: boolean | cdktf.IResolvable; 
  public get instanceConnect() {
    return this.getBooleanAttribute('instance_connect');
  }
  public set instanceConnect(value: boolean | cdktf.IResolvable) {
    this._instanceConnect = value;
  }
  public resetInstanceConnect() {
    this._instanceConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConnectInput() {
    return this._instanceConnect;
  }

  // instance_ids_filter - computed: false, optional: true, required: false
  private _instanceIdsFilter?: string[]; 
  public get instanceIdsFilter() {
    return this.getListAttribute('instance_ids_filter');
  }
  public set instanceIdsFilter(value: string[]) {
    this._instanceIdsFilter = value;
  }
  public resetInstanceIdsFilter() {
    this._instanceIdsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsFilterInput() {
    return this._instanceIdsFilter;
  }

  // regions_filter - computed: false, optional: true, required: false
  private _regionsFilter?: string[]; 
  public get regionsFilter() {
    return this.getListAttribute('regions_filter');
  }
  public set regionsFilter(value: string[]) {
    this._regionsFilter = value;
  }
  public resetRegionsFilter() {
    this._regionsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsFilterInput() {
    return this._regionsFilter;
  }

  // ssm - computed: false, optional: true, required: false
  private _ssm?: boolean | cdktf.IResolvable; 
  public get ssm() {
    return this.getBooleanAttribute('ssm');
  }
  public set ssm(value: boolean | cdktf.IResolvable) {
    this._ssm = value;
  }
  public resetSsm() {
    this._ssm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmInput() {
    return this._ssm;
  }

  // tags_filter - computed: false, optional: true, required: false
  private _tagsFilter?: { [key: string]: string }; 
  public get tagsFilter() {
    return this.getStringMapAttribute('tags_filter');
  }
  public set tagsFilter(value: { [key: string]: string }) {
    this._tagsFilter = value;
  }
  public resetTagsFilter() {
    this._tagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsFilterInput() {
    return this._tagsFilter;
  }
}
export interface IntegrationAwsServerlessScanConfigurationEventScanTriggers {
  /**
  * Event detail type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#event_detail_type IntegrationAwsServerless#event_detail_type}
  */
  readonly eventDetailType?: string;
  /**
  * Event source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#event_source IntegrationAwsServerless#event_source}
  */
  readonly eventSource?: string;
  /**
  * Scan type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#scan_type IntegrationAwsServerless#scan_type}
  */
  readonly scanType?: string;
}

export function integrationAwsServerlessScanConfigurationEventScanTriggersToTerraform(struct?: IntegrationAwsServerlessScanConfigurationEventScanTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_detail_type: cdktf.stringToTerraform(struct!.eventDetailType),
    event_source: cdktf.stringToTerraform(struct!.eventSource),
    scan_type: cdktf.stringToTerraform(struct!.scanType),
  }
}


export function integrationAwsServerlessScanConfigurationEventScanTriggersToHclTerraform(struct?: IntegrationAwsServerlessScanConfigurationEventScanTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_detail_type: {
      value: cdktf.stringToHclTerraform(struct!.eventDetailType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_source: {
      value: cdktf.stringToHclTerraform(struct!.eventSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_type: {
      value: cdktf.stringToHclTerraform(struct!.scanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsServerlessScanConfigurationEventScanTriggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsServerlessScanConfigurationEventScanTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventDetailType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventDetailType = this._eventDetailType;
    }
    if (this._eventSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSource = this._eventSource;
    }
    if (this._scanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanType = this._scanType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsServerlessScanConfigurationEventScanTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventDetailType = undefined;
      this._eventSource = undefined;
      this._scanType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventDetailType = value.eventDetailType;
      this._eventSource = value.eventSource;
      this._scanType = value.scanType;
    }
  }

  // event_detail_type - computed: false, optional: true, required: false
  private _eventDetailType?: string; 
  public get eventDetailType() {
    return this.getStringAttribute('event_detail_type');
  }
  public set eventDetailType(value: string) {
    this._eventDetailType = value;
  }
  public resetEventDetailType() {
    this._eventDetailType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDetailTypeInput() {
    return this._eventDetailType;
  }

  // event_source - computed: false, optional: true, required: false
  private _eventSource?: string; 
  public get eventSource() {
    return this.getStringAttribute('event_source');
  }
  public set eventSource(value: string) {
    this._eventSource = value;
  }
  public resetEventSource() {
    this._eventSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource;
  }

  // scan_type - computed: false, optional: true, required: false
  private _scanType?: string; 
  public get scanType() {
    return this.getStringAttribute('scan_type');
  }
  public set scanType(value: string) {
    this._scanType = value;
  }
  public resetScanType() {
    this._scanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanTypeInput() {
    return this._scanType;
  }
}
export interface IntegrationAwsServerlessScanConfigurationVpcConfigurationVpcTag {
  /**
  * Key of the VPC tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#key IntegrationAwsServerless#key}
  */
  readonly key: string;
  /**
  * Value of the VPC tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#value IntegrationAwsServerless#value}
  */
  readonly value: string;
}

export function integrationAwsServerlessScanConfigurationVpcConfigurationVpcTagToTerraform(struct?: IntegrationAwsServerlessScanConfigurationVpcConfigurationVpcTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function integrationAwsServerlessScanConfigurationVpcConfigurationVpcTagToHclTerraform(struct?: IntegrationAwsServerlessScanConfigurationVpcConfigurationVpcTag | cdktf.IResolvable): any {
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

export class IntegrationAwsServerlessScanConfigurationVpcConfigurationVpcTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsServerlessScanConfigurationVpcConfigurationVpcTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IntegrationAwsServerlessScanConfigurationVpcConfigurationVpcTag | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IntegrationAwsServerlessScanConfigurationVpcConfiguration {
  /**
  * CIDR block for the Mondoo VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#cidr_block IntegrationAwsServerless#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Use Mondoo VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#use_mondoo_vpc IntegrationAwsServerless#use_mondoo_vpc}
  */
  readonly useMondooVpc?: boolean | cdktf.IResolvable;
  /**
  * VPC flavour, one of: DEFAULT_VPC, MONDOO_NATGW, MONDOO_IGW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#vpc_flavour IntegrationAwsServerless#vpc_flavour}
  */
  readonly vpcFlavour?: string;
  /**
  * VPC tag to use when vpc_flavour is set to CUSTOM_VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#vpc_tag IntegrationAwsServerless#vpc_tag}
  */
  readonly vpcTag?: IntegrationAwsServerlessScanConfigurationVpcConfigurationVpcTag;
}

export function integrationAwsServerlessScanConfigurationVpcConfigurationToTerraform(struct?: IntegrationAwsServerlessScanConfigurationVpcConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    use_mondoo_vpc: cdktf.booleanToTerraform(struct!.useMondooVpc),
    vpc_flavour: cdktf.stringToTerraform(struct!.vpcFlavour),
    vpc_tag: integrationAwsServerlessScanConfigurationVpcConfigurationVpcTagToTerraform(struct!.vpcTag),
  }
}


export function integrationAwsServerlessScanConfigurationVpcConfigurationToHclTerraform(struct?: IntegrationAwsServerlessScanConfigurationVpcConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mondoo_vpc: {
      value: cdktf.booleanToHclTerraform(struct!.useMondooVpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpc_flavour: {
      value: cdktf.stringToHclTerraform(struct!.vpcFlavour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_tag: {
      value: integrationAwsServerlessScanConfigurationVpcConfigurationVpcTagToHclTerraform(struct!.vpcTag),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsServerlessScanConfigurationVpcConfigurationVpcTag",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsServerlessScanConfigurationVpcConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsServerlessScanConfigurationVpcConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._useMondooVpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMondooVpc = this._useMondooVpc;
    }
    if (this._vpcFlavour !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcFlavour = this._vpcFlavour;
    }
    if (this._vpcTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcTag = this._vpcTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsServerlessScanConfigurationVpcConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._useMondooVpc = undefined;
      this._vpcFlavour = undefined;
      this._vpcTag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._useMondooVpc = value.useMondooVpc;
      this._vpcFlavour = value.vpcFlavour;
      this._vpcTag.internalValue = value.vpcTag;
    }
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // use_mondoo_vpc - computed: false, optional: true, required: false
  private _useMondooVpc?: boolean | cdktf.IResolvable; 
  public get useMondooVpc() {
    return this.getBooleanAttribute('use_mondoo_vpc');
  }
  public set useMondooVpc(value: boolean | cdktf.IResolvable) {
    this._useMondooVpc = value;
  }
  public resetUseMondooVpc() {
    this._useMondooVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMondooVpcInput() {
    return this._useMondooVpc;
  }

  // vpc_flavour - computed: false, optional: true, required: false
  private _vpcFlavour?: string; 
  public get vpcFlavour() {
    return this.getStringAttribute('vpc_flavour');
  }
  public set vpcFlavour(value: string) {
    this._vpcFlavour = value;
  }
  public resetVpcFlavour() {
    this._vpcFlavour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcFlavourInput() {
    return this._vpcFlavour;
  }

  // vpc_tag - computed: false, optional: true, required: false
  private _vpcTag = new IntegrationAwsServerlessScanConfigurationVpcConfigurationVpcTagOutputReference(this, "vpc_tag");
  public get vpcTag() {
    return this._vpcTag;
  }
  public putVpcTag(value: IntegrationAwsServerlessScanConfigurationVpcConfigurationVpcTag) {
    this._vpcTag.internalValue = value;
  }
  public resetVpcTag() {
    this._vpcTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcTagInput() {
    return this._vpcTag.internalValue;
  }
}
export interface IntegrationAwsServerlessScanConfiguration {
  /**
  * Cron scan in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#cron_scan_in_hours IntegrationAwsServerless#cron_scan_in_hours}
  */
  readonly cronScanInHours?: number;
  /**
  * Enable EC2 scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#ec2_scan IntegrationAwsServerless#ec2_scan}
  */
  readonly ec2Scan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#ec2_scan_options IntegrationAwsServerless#ec2_scan_options}
  */
  readonly ec2ScanOptions: IntegrationAwsServerlessScanConfigurationEc2ScanOptions;
  /**
  * Enable ECR scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#ecr_scan IntegrationAwsServerless#ecr_scan}
  */
  readonly ecrScan?: boolean | cdktf.IResolvable;
  /**
  * Enable ECS scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#ecs_scan IntegrationAwsServerless#ecs_scan}
  */
  readonly ecsScan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#event_scan_triggers IntegrationAwsServerless#event_scan_triggers}
  */
  readonly eventScanTriggers?: IntegrationAwsServerlessScanConfigurationEventScanTriggers;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#vpc_configuration IntegrationAwsServerless#vpc_configuration}
  */
  readonly vpcConfiguration?: IntegrationAwsServerlessScanConfigurationVpcConfiguration;
}

export function integrationAwsServerlessScanConfigurationToTerraform(struct?: IntegrationAwsServerlessScanConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_scan_in_hours: cdktf.numberToTerraform(struct!.cronScanInHours),
    ec2_scan: cdktf.booleanToTerraform(struct!.ec2Scan),
    ec2_scan_options: integrationAwsServerlessScanConfigurationEc2ScanOptionsToTerraform(struct!.ec2ScanOptions),
    ecr_scan: cdktf.booleanToTerraform(struct!.ecrScan),
    ecs_scan: cdktf.booleanToTerraform(struct!.ecsScan),
    event_scan_triggers: integrationAwsServerlessScanConfigurationEventScanTriggersToTerraform(struct!.eventScanTriggers),
    vpc_configuration: integrationAwsServerlessScanConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}


export function integrationAwsServerlessScanConfigurationToHclTerraform(struct?: IntegrationAwsServerlessScanConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_scan_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.cronScanInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ec2_scan: {
      value: cdktf.booleanToHclTerraform(struct!.ec2Scan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ec2_scan_options: {
      value: integrationAwsServerlessScanConfigurationEc2ScanOptionsToHclTerraform(struct!.ec2ScanOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsServerlessScanConfigurationEc2ScanOptions",
    },
    ecr_scan: {
      value: cdktf.booleanToHclTerraform(struct!.ecrScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ecs_scan: {
      value: cdktf.booleanToHclTerraform(struct!.ecsScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_scan_triggers: {
      value: integrationAwsServerlessScanConfigurationEventScanTriggersToHclTerraform(struct!.eventScanTriggers),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsServerlessScanConfigurationEventScanTriggers",
    },
    vpc_configuration: {
      value: integrationAwsServerlessScanConfigurationVpcConfigurationToHclTerraform(struct!.vpcConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsServerlessScanConfigurationVpcConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsServerlessScanConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsServerlessScanConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronScanInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronScanInHours = this._cronScanInHours;
    }
    if (this._ec2Scan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2Scan = this._ec2Scan;
    }
    if (this._ec2ScanOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2ScanOptions = this._ec2ScanOptions?.internalValue;
    }
    if (this._ecrScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrScan = this._ecrScan;
    }
    if (this._ecsScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsScan = this._ecsScan;
    }
    if (this._eventScanTriggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventScanTriggers = this._eventScanTriggers?.internalValue;
    }
    if (this._vpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsServerlessScanConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronScanInHours = undefined;
      this._ec2Scan = undefined;
      this._ec2ScanOptions.internalValue = undefined;
      this._ecrScan = undefined;
      this._ecsScan = undefined;
      this._eventScanTriggers.internalValue = undefined;
      this._vpcConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronScanInHours = value.cronScanInHours;
      this._ec2Scan = value.ec2Scan;
      this._ec2ScanOptions.internalValue = value.ec2ScanOptions;
      this._ecrScan = value.ecrScan;
      this._ecsScan = value.ecsScan;
      this._eventScanTriggers.internalValue = value.eventScanTriggers;
      this._vpcConfiguration.internalValue = value.vpcConfiguration;
    }
  }

  // cron_scan_in_hours - computed: false, optional: true, required: false
  private _cronScanInHours?: number; 
  public get cronScanInHours() {
    return this.getNumberAttribute('cron_scan_in_hours');
  }
  public set cronScanInHours(value: number) {
    this._cronScanInHours = value;
  }
  public resetCronScanInHours() {
    this._cronScanInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScanInHoursInput() {
    return this._cronScanInHours;
  }

  // ec2_scan - computed: false, optional: true, required: false
  private _ec2Scan?: boolean | cdktf.IResolvable; 
  public get ec2Scan() {
    return this.getBooleanAttribute('ec2_scan');
  }
  public set ec2Scan(value: boolean | cdktf.IResolvable) {
    this._ec2Scan = value;
  }
  public resetEc2Scan() {
    this._ec2Scan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ScanInput() {
    return this._ec2Scan;
  }

  // ec2_scan_options - computed: false, optional: false, required: true
  private _ec2ScanOptions = new IntegrationAwsServerlessScanConfigurationEc2ScanOptionsOutputReference(this, "ec2_scan_options");
  public get ec2ScanOptions() {
    return this._ec2ScanOptions;
  }
  public putEc2ScanOptions(value: IntegrationAwsServerlessScanConfigurationEc2ScanOptions) {
    this._ec2ScanOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ScanOptionsInput() {
    return this._ec2ScanOptions.internalValue;
  }

  // ecr_scan - computed: false, optional: true, required: false
  private _ecrScan?: boolean | cdktf.IResolvable; 
  public get ecrScan() {
    return this.getBooleanAttribute('ecr_scan');
  }
  public set ecrScan(value: boolean | cdktf.IResolvable) {
    this._ecrScan = value;
  }
  public resetEcrScan() {
    this._ecrScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrScanInput() {
    return this._ecrScan;
  }

  // ecs_scan - computed: false, optional: true, required: false
  private _ecsScan?: boolean | cdktf.IResolvable; 
  public get ecsScan() {
    return this.getBooleanAttribute('ecs_scan');
  }
  public set ecsScan(value: boolean | cdktf.IResolvable) {
    this._ecsScan = value;
  }
  public resetEcsScan() {
    this._ecsScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsScanInput() {
    return this._ecsScan;
  }

  // event_scan_triggers - computed: false, optional: true, required: false
  private _eventScanTriggers = new IntegrationAwsServerlessScanConfigurationEventScanTriggersOutputReference(this, "event_scan_triggers");
  public get eventScanTriggers() {
    return this._eventScanTriggers;
  }
  public putEventScanTriggers(value: IntegrationAwsServerlessScanConfigurationEventScanTriggers) {
    this._eventScanTriggers.internalValue = value;
  }
  public resetEventScanTriggers() {
    this._eventScanTriggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventScanTriggersInput() {
    return this._eventScanTriggers.internalValue;
  }

  // vpc_configuration - computed: false, optional: true, required: false
  private _vpcConfiguration = new IntegrationAwsServerlessScanConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: IntegrationAwsServerlessScanConfigurationVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless mondoo_integration_aws_serverless}
*/
export class IntegrationAwsServerless extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_integration_aws_serverless";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsServerless resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsServerless to import
  * @param importFromId The id of the existing IntegrationAwsServerless that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsServerless to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_integration_aws_serverless", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_aws_serverless mondoo_integration_aws_serverless} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsServerlessConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsServerlessConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_integration_aws_serverless',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.34.0',
        providerVersionConstraint: '0.34.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountIds = config.accountIds;
    this._consoleSignInTrigger = config.consoleSignInTrigger;
    this._instanceStateChangeTrigger = config.instanceStateChangeTrigger;
    this._isOrganization = config.isOrganization;
    this._name = config.name;
    this._region = config.region;
    this._scanConfiguration.internalValue = config.scanConfiguration;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
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

  // console_sign_in_trigger - computed: false, optional: true, required: false
  private _consoleSignInTrigger?: boolean | cdktf.IResolvable; 
  public get consoleSignInTrigger() {
    return this.getBooleanAttribute('console_sign_in_trigger');
  }
  public set consoleSignInTrigger(value: boolean | cdktf.IResolvable) {
    this._consoleSignInTrigger = value;
  }
  public resetConsoleSignInTrigger() {
    this._consoleSignInTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleSignInTriggerInput() {
    return this._consoleSignInTrigger;
  }

  // instance_state_change_trigger - computed: false, optional: true, required: false
  private _instanceStateChangeTrigger?: boolean | cdktf.IResolvable; 
  public get instanceStateChangeTrigger() {
    return this.getBooleanAttribute('instance_state_change_trigger');
  }
  public set instanceStateChangeTrigger(value: boolean | cdktf.IResolvable) {
    this._instanceStateChangeTrigger = value;
  }
  public resetInstanceStateChangeTrigger() {
    this._instanceStateChangeTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStateChangeTriggerInput() {
    return this._instanceStateChangeTrigger;
  }

  // is_organization - computed: false, optional: true, required: false
  private _isOrganization?: boolean | cdktf.IResolvable; 
  public get isOrganization() {
    return this.getBooleanAttribute('is_organization');
  }
  public set isOrganization(value: boolean | cdktf.IResolvable) {
    this._isOrganization = value;
  }
  public resetIsOrganization() {
    this._isOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrganizationInput() {
    return this._isOrganization;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
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

  // scan_configuration - computed: false, optional: false, required: true
  private _scanConfiguration = new IntegrationAwsServerlessScanConfigurationOutputReference(this, "scan_configuration");
  public get scanConfiguration() {
    return this._scanConfiguration;
  }
  public putScanConfiguration(value: IntegrationAwsServerlessScanConfiguration) {
    this._scanConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanConfigurationInput() {
    return this._scanConfiguration.internalValue;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountIds),
      console_sign_in_trigger: cdktf.booleanToTerraform(this._consoleSignInTrigger),
      instance_state_change_trigger: cdktf.booleanToTerraform(this._instanceStateChangeTrigger),
      is_organization: cdktf.booleanToTerraform(this._isOrganization),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      scan_configuration: integrationAwsServerlessScanConfigurationToTerraform(this._scanConfiguration.internalValue),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      console_sign_in_trigger: {
        value: cdktf.booleanToHclTerraform(this._consoleSignInTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_state_change_trigger: {
        value: cdktf.booleanToHclTerraform(this._instanceStateChangeTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_organization: {
        value: cdktf.booleanToHclTerraform(this._isOrganization),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_configuration: {
        value: integrationAwsServerlessScanConfigurationToHclTerraform(this._scanConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsServerlessScanConfiguration",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
