// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Region Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#aws_region_type CloudAccount#aws_region_type}
  */
  readonly awsRegionType?: string;
  /**
  * Credential ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#credential_id CloudAccount#credential_id}
  */
  readonly credentialId?: string;
  /**
  * Cloud Discovery Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#discover_all_function_versions CloudAccount#discover_all_function_versions}
  */
  readonly discoverAllFunctionVersions?: boolean | cdktf.IResolvable;
  /**
  * Enables cloud discovery, which will discover all workloads in the account and their scan status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#discovery_enabled CloudAccount#discovery_enabled}
  */
  readonly discoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#id CloudAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Serverless Radar Cap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#serverless_radar_cap CloudAccount#serverless_radar_cap}
  */
  readonly serverlessRadarCap?: number;
  /**
  * Enables the discovery of serverless functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#serverless_radar_enabled CloudAccount#serverless_radar_enabled}
  */
  readonly serverlessRadarEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables the discovery of tags on VMs in AWS accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#vm_tags_enabled CloudAccount#vm_tags_enabled}
  */
  readonly vmTagsEnabled?: boolean | cdktf.IResolvable;
  /**
  * agentless_scan_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#agentless_scan_spec CloudAccount#agentless_scan_spec}
  */
  readonly agentlessScanSpec?: CloudAccountAgentlessScanSpec;
  /**
  * credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#credential CloudAccount#credential}
  */
  readonly credential?: CloudAccountCredential;
  /**
  * serverless_scan_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#serverless_scan_spec CloudAccount#serverless_scan_spec}
  */
  readonly serverlessScanSpec?: CloudAccountServerlessScanSpec;
}
export interface CloudAccountAgentlessScanSpecCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#key CloudAccount#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#value CloudAccount#value}
  */
  readonly value?: string;
}

export function cloudAccountAgentlessScanSpecCustomTagsToTerraform(struct?: CloudAccountAgentlessScanSpecCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudAccountAgentlessScanSpecCustomTagsToHclTerraform(struct?: CloudAccountAgentlessScanSpecCustomTags | cdktf.IResolvable): any {
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

export class CloudAccountAgentlessScanSpecCustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAccountAgentlessScanSpecCustomTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudAccountAgentlessScanSpecCustomTags | cdktf.IResolvable | undefined) {
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

export class CloudAccountAgentlessScanSpecCustomTagsList extends cdktf.ComplexList {
  public internalValue? : CloudAccountAgentlessScanSpecCustomTags[] | cdktf.IResolvable

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
  public get(index: number): CloudAccountAgentlessScanSpecCustomTagsOutputReference {
    return new CloudAccountAgentlessScanSpecCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAccountAgentlessScanSpecIncludedTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#key CloudAccount#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#value CloudAccount#value}
  */
  readonly value?: string;
}

export function cloudAccountAgentlessScanSpecIncludedTagsToTerraform(struct?: CloudAccountAgentlessScanSpecIncludedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudAccountAgentlessScanSpecIncludedTagsToHclTerraform(struct?: CloudAccountAgentlessScanSpecIncludedTags | cdktf.IResolvable): any {
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

export class CloudAccountAgentlessScanSpecIncludedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAccountAgentlessScanSpecIncludedTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudAccountAgentlessScanSpecIncludedTags | cdktf.IResolvable | undefined) {
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

export class CloudAccountAgentlessScanSpecIncludedTagsList extends cdktf.ComplexList {
  public internalValue? : CloudAccountAgentlessScanSpecIncludedTags[] | cdktf.IResolvable

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
  public get(index: number): CloudAccountAgentlessScanSpecIncludedTagsOutputReference {
    return new CloudAccountAgentlessScanSpecIncludedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAccountAgentlessScanSpec {
  /**
  * When enabled, Prisma Cloud automatically spins up multiple scanners in the environment to parallel scan for faster results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#auto_scale CloudAccount#auto_scale}
  */
  readonly autoScale?: boolean | cdktf.IResolvable;
  /**
  * Console URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#console_addr CloudAccount#console_addr}
  */
  readonly consoleAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#enabled CloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Prisma Cloud scanner will be centralized in the hub account and scan the target accounts from there (enabled) or the actual scanning will occur within each account that is being scanned (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#hub_account CloudAccount#hub_account}
  */
  readonly hubAccount?: boolean | cdktf.IResolvable;
  /**
  * Example: http://proxyserver.company.com:8081
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#proxy_address CloudAccount#proxy_address}
  */
  readonly proxyAddress?: string;
  /**
  * Proxy CA certificate. Required when using TLS intercept proxies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#proxy_ca CloudAccount#proxy_ca}
  */
  readonly proxyCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#regions CloudAccount#regions}
  */
  readonly regions?: string[];
  /**
  * Scan non running hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#scan_non_running CloudAccount#scan_non_running}
  */
  readonly scanNonRunning?: boolean | cdktf.IResolvable;
  /**
  * Limit on the number of scanners that Prisma Cloud can spin up at any given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#scanners CloudAccount#scanners}
  */
  readonly scanners?: number;
  /**
  * Security group name. Should be identical and unique across all regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#security_group CloudAccount#security_group}
  */
  readonly securityGroup?: string;
  /**
  * When enabled, Prisma Cloud will scan this account even if there are missing permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#skip_permissions_check CloudAccount#skip_permissions_check}
  */
  readonly skipPermissionsCheck?: boolean | cdktf.IResolvable;
  /**
  * Subnet name. Should be identical and unique across all regions. Note: if the subnet allows auto-assignment of public IPs, a public IP will be attached to the scanner instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#subnet CloudAccount#subnet}
  */
  readonly subnet?: string;
  /**
  * custom_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#custom_tags CloudAccount#custom_tags}
  */
  readonly customTags?: CloudAccountAgentlessScanSpecCustomTags[] | cdktf.IResolvable;
  /**
  * included_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#included_tags CloudAccount#included_tags}
  */
  readonly includedTags?: CloudAccountAgentlessScanSpecIncludedTags[] | cdktf.IResolvable;
}

export function cloudAccountAgentlessScanSpecToTerraform(struct?: CloudAccountAgentlessScanSpecOutputReference | CloudAccountAgentlessScanSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scale: cdktf.booleanToTerraform(struct!.autoScale),
    console_addr: cdktf.stringToTerraform(struct!.consoleAddr),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hub_account: cdktf.booleanToTerraform(struct!.hubAccount),
    proxy_address: cdktf.stringToTerraform(struct!.proxyAddress),
    proxy_ca: cdktf.stringToTerraform(struct!.proxyCa),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    scan_non_running: cdktf.booleanToTerraform(struct!.scanNonRunning),
    scanners: cdktf.numberToTerraform(struct!.scanners),
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
    skip_permissions_check: cdktf.booleanToTerraform(struct!.skipPermissionsCheck),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    custom_tags: cdktf.listMapper(cloudAccountAgentlessScanSpecCustomTagsToTerraform, true)(struct!.customTags),
    included_tags: cdktf.listMapper(cloudAccountAgentlessScanSpecIncludedTagsToTerraform, true)(struct!.includedTags),
  }
}


export function cloudAccountAgentlessScanSpecToHclTerraform(struct?: CloudAccountAgentlessScanSpecOutputReference | CloudAccountAgentlessScanSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scale: {
      value: cdktf.booleanToHclTerraform(struct!.autoScale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    console_addr: {
      value: cdktf.stringToHclTerraform(struct!.consoleAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hub_account: {
      value: cdktf.booleanToHclTerraform(struct!.hubAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_address: {
      value: cdktf.stringToHclTerraform(struct!.proxyAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_ca: {
      value: cdktf.stringToHclTerraform(struct!.proxyCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scan_non_running: {
      value: cdktf.booleanToHclTerraform(struct!.scanNonRunning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scanners: {
      value: cdktf.numberToHclTerraform(struct!.scanners),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_group: {
      value: cdktf.stringToHclTerraform(struct!.securityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_permissions_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipPermissionsCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktf.listMapperHcl(cloudAccountAgentlessScanSpecCustomTagsToHclTerraform, true)(struct!.customTags),
      isBlock: true,
      type: "list",
      storageClassType: "CloudAccountAgentlessScanSpecCustomTagsList",
    },
    included_tags: {
      value: cdktf.listMapperHcl(cloudAccountAgentlessScanSpecIncludedTagsToHclTerraform, true)(struct!.includedTags),
      isBlock: true,
      type: "list",
      storageClassType: "CloudAccountAgentlessScanSpecIncludedTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccountAgentlessScanSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAccountAgentlessScanSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScale = this._autoScale;
    }
    if (this._consoleAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleAddr = this._consoleAddr;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hubAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubAccount = this._hubAccount;
    }
    if (this._proxyAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAddress = this._proxyAddress;
    }
    if (this._proxyCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyCa = this._proxyCa;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._scanNonRunning !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanNonRunning = this._scanNonRunning;
    }
    if (this._scanners !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanners = this._scanners;
    }
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    if (this._skipPermissionsCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipPermissionsCheck = this._skipPermissionsCheck;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._customTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags?.internalValue;
    }
    if (this._includedTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedTags = this._includedTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountAgentlessScanSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScale = undefined;
      this._consoleAddr = undefined;
      this._enabled = undefined;
      this._hubAccount = undefined;
      this._proxyAddress = undefined;
      this._proxyCa = undefined;
      this._regions = undefined;
      this._scanNonRunning = undefined;
      this._scanners = undefined;
      this._securityGroup = undefined;
      this._skipPermissionsCheck = undefined;
      this._subnet = undefined;
      this._customTags.internalValue = undefined;
      this._includedTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScale = value.autoScale;
      this._consoleAddr = value.consoleAddr;
      this._enabled = value.enabled;
      this._hubAccount = value.hubAccount;
      this._proxyAddress = value.proxyAddress;
      this._proxyCa = value.proxyCa;
      this._regions = value.regions;
      this._scanNonRunning = value.scanNonRunning;
      this._scanners = value.scanners;
      this._securityGroup = value.securityGroup;
      this._skipPermissionsCheck = value.skipPermissionsCheck;
      this._subnet = value.subnet;
      this._customTags.internalValue = value.customTags;
      this._includedTags.internalValue = value.includedTags;
    }
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale?: boolean | cdktf.IResolvable; 
  public get autoScale() {
    return this.getBooleanAttribute('auto_scale');
  }
  public set autoScale(value: boolean | cdktf.IResolvable) {
    this._autoScale = value;
  }
  public resetAutoScale() {
    this._autoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale;
  }

  // console_addr - computed: false, optional: true, required: false
  private _consoleAddr?: string; 
  public get consoleAddr() {
    return this.getStringAttribute('console_addr');
  }
  public set consoleAddr(value: string) {
    this._consoleAddr = value;
  }
  public resetConsoleAddr() {
    this._consoleAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleAddrInput() {
    return this._consoleAddr;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hub_account - computed: false, optional: true, required: false
  private _hubAccount?: boolean | cdktf.IResolvable; 
  public get hubAccount() {
    return this.getBooleanAttribute('hub_account');
  }
  public set hubAccount(value: boolean | cdktf.IResolvable) {
    this._hubAccount = value;
  }
  public resetHubAccount() {
    this._hubAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubAccountInput() {
    return this._hubAccount;
  }

  // proxy_address - computed: false, optional: true, required: false
  private _proxyAddress?: string; 
  public get proxyAddress() {
    return this.getStringAttribute('proxy_address');
  }
  public set proxyAddress(value: string) {
    this._proxyAddress = value;
  }
  public resetProxyAddress() {
    this._proxyAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAddressInput() {
    return this._proxyAddress;
  }

  // proxy_ca - computed: false, optional: true, required: false
  private _proxyCa?: string; 
  public get proxyCa() {
    return this.getStringAttribute('proxy_ca');
  }
  public set proxyCa(value: string) {
    this._proxyCa = value;
  }
  public resetProxyCa() {
    this._proxyCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCaInput() {
    return this._proxyCa;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
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

  // scan_non_running - computed: false, optional: true, required: false
  private _scanNonRunning?: boolean | cdktf.IResolvable; 
  public get scanNonRunning() {
    return this.getBooleanAttribute('scan_non_running');
  }
  public set scanNonRunning(value: boolean | cdktf.IResolvable) {
    this._scanNonRunning = value;
  }
  public resetScanNonRunning() {
    this._scanNonRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanNonRunningInput() {
    return this._scanNonRunning;
  }

  // scanners - computed: false, optional: true, required: false
  private _scanners?: number; 
  public get scanners() {
    return this.getNumberAttribute('scanners');
  }
  public set scanners(value: number) {
    this._scanners = value;
  }
  public resetScanners() {
    this._scanners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannersInput() {
    return this._scanners;
  }

  // security_group - computed: false, optional: true, required: false
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // skip_permissions_check - computed: false, optional: true, required: false
  private _skipPermissionsCheck?: boolean | cdktf.IResolvable; 
  public get skipPermissionsCheck() {
    return this.getBooleanAttribute('skip_permissions_check');
  }
  public set skipPermissionsCheck(value: boolean | cdktf.IResolvable) {
    this._skipPermissionsCheck = value;
  }
  public resetSkipPermissionsCheck() {
    this._skipPermissionsCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipPermissionsCheckInput() {
    return this._skipPermissionsCheck;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags = new CloudAccountAgentlessScanSpecCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: CloudAccountAgentlessScanSpecCustomTags[] | cdktf.IResolvable) {
    this._customTags.internalValue = value;
  }
  public resetCustomTags() {
    this._customTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags.internalValue;
  }

  // included_tags - computed: false, optional: true, required: false
  private _includedTags = new CloudAccountAgentlessScanSpecIncludedTagsList(this, "included_tags", false);
  public get includedTags() {
    return this._includedTags;
  }
  public putIncludedTags(value: CloudAccountAgentlessScanSpecIncludedTags[] | cdktf.IResolvable) {
    this._includedTags.internalValue = value;
  }
  public resetIncludedTags() {
    this._includedTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedTagsInput() {
    return this._includedTags.internalValue;
  }
}
export interface CloudAccountCredentialApiToken {
  /**
  * Plain text value for the secret. Note: marshalling to JSON will convert to an encrypted value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#plain CloudAccount#plain}
  */
  readonly plain?: string;
}

export function cloudAccountCredentialApiTokenToTerraform(struct?: CloudAccountCredentialApiTokenOutputReference | CloudAccountCredentialApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain: cdktf.stringToTerraform(struct!.plain),
  }
}


export function cloudAccountCredentialApiTokenToHclTerraform(struct?: CloudAccountCredentialApiTokenOutputReference | CloudAccountCredentialApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccountCredentialApiTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAccountCredentialApiToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountCredentialApiToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plain = value.plain;
    }
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
  }
}
export interface CloudAccountCredentialSecret {
  /**
  * Plain text value for the secret. Note: marshalling to JSON will convert to an encrypted value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#plain CloudAccount#plain}
  */
  readonly plain?: string;
}

export function cloudAccountCredentialSecretToTerraform(struct?: CloudAccountCredentialSecretOutputReference | CloudAccountCredentialSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain: cdktf.stringToTerraform(struct!.plain),
  }
}


export function cloudAccountCredentialSecretToHclTerraform(struct?: CloudAccountCredentialSecretOutputReference | CloudAccountCredentialSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccountCredentialSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAccountCredentialSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountCredentialSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plain = value.plain;
    }
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
  }
}
export interface CloudAccountCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#account_guid CloudAccount#account_guid}
  */
  readonly accountGuid?: string;
  /**
  * Account identifier (username, access key, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#account_id CloudAccount#account_id}
  */
  readonly accountId?: string;
  /**
  * CA certificate for certificate-based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#ca_cert CloudAccount#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Description of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#description CloudAccount#description}
  */
  readonly description?: string;
  /**
  * Indicates if the credential is external (true) or not (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#external CloudAccount#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * IBM Cloud account GUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#ibm_account_guid CloudAccount#ibm_account_guid}
  */
  readonly ibmAccountGuid?: string;
  /**
  * The ID of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#id CloudAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Unique name for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#name CloudAccount#name}
  */
  readonly name?: string;
  /**
  * Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#role_arn CloudAccount#role_arn}
  */
  readonly roleArn?: string;
  /**
  * SkipVerify if should skip certificate verification in tls communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#skip_cert_verification CloudAccount#skip_cert_verification}
  */
  readonly skipCertVerification?: boolean | cdktf.IResolvable;
  /**
  * Credential type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#type CloudAccount#type}
  */
  readonly type?: string;
  /**
  * URL is the server base url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#url CloudAccount#url}
  */
  readonly url?: string;
  /**
  * Indicates if authentication should be done with the instance's attached credentials (EC2 IAM Role).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#use_aws_role CloudAccount#use_aws_role}
  */
  readonly useAwsRole?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to use the regional STS endpoint for an STS session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#use_sts_regional_endpoint CloudAccount#use_sts_regional_endpoint}
  */
  readonly useStsRegionalEndpoint?: boolean | cdktf.IResolvable;
  /**
  * api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#api_token CloudAccount#api_token}
  */
  readonly apiToken?: CloudAccountCredentialApiToken;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#secret CloudAccount#secret}
  */
  readonly secret?: CloudAccountCredentialSecret;
}

export function cloudAccountCredentialToTerraform(struct?: CloudAccountCredentialOutputReference | CloudAccountCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_guid: cdktf.stringToTerraform(struct!.accountGuid),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    description: cdktf.stringToTerraform(struct!.description),
    external: cdktf.booleanToTerraform(struct!.external),
    ibm_account_guid: cdktf.stringToTerraform(struct!.ibmAccountGuid),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    skip_cert_verification: cdktf.booleanToTerraform(struct!.skipCertVerification),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    use_aws_role: cdktf.booleanToTerraform(struct!.useAwsRole),
    use_sts_regional_endpoint: cdktf.booleanToTerraform(struct!.useStsRegionalEndpoint),
    api_token: cloudAccountCredentialApiTokenToTerraform(struct!.apiToken),
    secret: cloudAccountCredentialSecretToTerraform(struct!.secret),
  }
}


export function cloudAccountCredentialToHclTerraform(struct?: CloudAccountCredentialOutputReference | CloudAccountCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_guid: {
      value: cdktf.stringToHclTerraform(struct!.accountGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external: {
      value: cdktf.booleanToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ibm_account_guid: {
      value: cdktf.stringToHclTerraform(struct!.ibmAccountGuid),
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
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_cert_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipCertVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_aws_role: {
      value: cdktf.booleanToHclTerraform(struct!.useAwsRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_sts_regional_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.useStsRegionalEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_token: {
      value: cloudAccountCredentialApiTokenToHclTerraform(struct!.apiToken),
      isBlock: true,
      type: "list",
      storageClassType: "CloudAccountCredentialApiTokenList",
    },
    secret: {
      value: cloudAccountCredentialSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "CloudAccountCredentialSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccountCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAccountCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountGuid = this._accountGuid;
    }
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._ibmAccountGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibmAccountGuid = this._ibmAccountGuid;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._skipCertVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCertVerification = this._skipCertVerification;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useAwsRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAwsRole = this._useAwsRole;
    }
    if (this._useStsRegionalEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStsRegionalEndpoint = this._useStsRegionalEndpoint;
    }
    if (this._apiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountGuid = undefined;
      this._accountId = undefined;
      this._caCert = undefined;
      this._description = undefined;
      this._external = undefined;
      this._ibmAccountGuid = undefined;
      this._id = undefined;
      this._name = undefined;
      this._roleArn = undefined;
      this._skipCertVerification = undefined;
      this._type = undefined;
      this._url = undefined;
      this._useAwsRole = undefined;
      this._useStsRegionalEndpoint = undefined;
      this._apiToken.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountGuid = value.accountGuid;
      this._accountId = value.accountId;
      this._caCert = value.caCert;
      this._description = value.description;
      this._external = value.external;
      this._ibmAccountGuid = value.ibmAccountGuid;
      this._id = value.id;
      this._name = value.name;
      this._roleArn = value.roleArn;
      this._skipCertVerification = value.skipCertVerification;
      this._type = value.type;
      this._url = value.url;
      this._useAwsRole = value.useAwsRole;
      this._useStsRegionalEndpoint = value.useStsRegionalEndpoint;
      this._apiToken.internalValue = value.apiToken;
      this._secret.internalValue = value.secret;
    }
  }

  // account_guid - computed: false, optional: true, required: false
  private _accountGuid?: string; 
  public get accountGuid() {
    return this.getStringAttribute('account_guid');
  }
  public set accountGuid(value: string) {
    this._accountGuid = value;
  }
  public resetAccountGuid() {
    this._accountGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGuidInput() {
    return this._accountGuid;
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

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
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

  // external - computed: false, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // ibm_account_guid - computed: false, optional: true, required: false
  private _ibmAccountGuid?: string; 
  public get ibmAccountGuid() {
    return this.getStringAttribute('ibm_account_guid');
  }
  public set ibmAccountGuid(value: string) {
    this._ibmAccountGuid = value;
  }
  public resetIbmAccountGuid() {
    this._ibmAccountGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmAccountGuidInput() {
    return this._ibmAccountGuid;
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

  // skip_cert_verification - computed: false, optional: true, required: false
  private _skipCertVerification?: boolean | cdktf.IResolvable; 
  public get skipCertVerification() {
    return this.getBooleanAttribute('skip_cert_verification');
  }
  public set skipCertVerification(value: boolean | cdktf.IResolvable) {
    this._skipCertVerification = value;
  }
  public resetSkipCertVerification() {
    this._skipCertVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCertVerificationInput() {
    return this._skipCertVerification;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_aws_role - computed: false, optional: true, required: false
  private _useAwsRole?: boolean | cdktf.IResolvable; 
  public get useAwsRole() {
    return this.getBooleanAttribute('use_aws_role');
  }
  public set useAwsRole(value: boolean | cdktf.IResolvable) {
    this._useAwsRole = value;
  }
  public resetUseAwsRole() {
    this._useAwsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAwsRoleInput() {
    return this._useAwsRole;
  }

  // use_sts_regional_endpoint - computed: false, optional: true, required: false
  private _useStsRegionalEndpoint?: boolean | cdktf.IResolvable; 
  public get useStsRegionalEndpoint() {
    return this.getBooleanAttribute('use_sts_regional_endpoint');
  }
  public set useStsRegionalEndpoint(value: boolean | cdktf.IResolvable) {
    this._useStsRegionalEndpoint = value;
  }
  public resetUseStsRegionalEndpoint() {
    this._useStsRegionalEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStsRegionalEndpointInput() {
    return this._useStsRegionalEndpoint;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken = new CloudAccountCredentialApiTokenOutputReference(this, "api_token");
  public get apiToken() {
    return this._apiToken;
  }
  public putApiToken(value: CloudAccountCredentialApiToken) {
    this._apiToken.internalValue = value;
  }
  public resetApiToken() {
    this._apiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new CloudAccountCredentialSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: CloudAccountCredentialSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface CloudAccountServerlessScanSpec {
  /**
  * The number of most recently modified functions to scan, on a per-scope basis. For example, if there are 100 functions in scope, and you set this value to 50, Prisma Cloud will only scan the fifty most recently modified functions. To scan all functions in scope, set this to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#cap CloudAccount#cap}
  */
  readonly cap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#enabled CloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether Prisma Cloud will scan all versions (enabled) or only the latest versions (false) of serverless functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#scan_all_versions CloudAccount#scan_all_versions}
  */
  readonly scanAllVersions?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not Prisma Cloud will scan Lambda layers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#scan_layers CloudAccount#scan_layers}
  */
  readonly scanLayers?: boolean | cdktf.IResolvable;
}

export function cloudAccountServerlessScanSpecToTerraform(struct?: CloudAccountServerlessScanSpecOutputReference | CloudAccountServerlessScanSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cap: cdktf.numberToTerraform(struct!.cap),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    scan_all_versions: cdktf.booleanToTerraform(struct!.scanAllVersions),
    scan_layers: cdktf.booleanToTerraform(struct!.scanLayers),
  }
}


export function cloudAccountServerlessScanSpecToHclTerraform(struct?: CloudAccountServerlessScanSpecOutputReference | CloudAccountServerlessScanSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cap: {
      value: cdktf.numberToHclTerraform(struct!.cap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scan_all_versions: {
      value: cdktf.booleanToHclTerraform(struct!.scanAllVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scan_layers: {
      value: cdktf.booleanToHclTerraform(struct!.scanLayers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccountServerlessScanSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAccountServerlessScanSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cap !== undefined) {
      hasAnyValues = true;
      internalValueResult.cap = this._cap;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._scanAllVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanAllVersions = this._scanAllVersions;
    }
    if (this._scanLayers !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanLayers = this._scanLayers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountServerlessScanSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cap = undefined;
      this._enabled = undefined;
      this._scanAllVersions = undefined;
      this._scanLayers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cap = value.cap;
      this._enabled = value.enabled;
      this._scanAllVersions = value.scanAllVersions;
      this._scanLayers = value.scanLayers;
    }
  }

  // cap - computed: false, optional: true, required: false
  private _cap?: number; 
  public get cap() {
    return this.getNumberAttribute('cap');
  }
  public set cap(value: number) {
    this._cap = value;
  }
  public resetCap() {
    this._cap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capInput() {
    return this._cap;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // scan_all_versions - computed: false, optional: true, required: false
  private _scanAllVersions?: boolean | cdktf.IResolvable; 
  public get scanAllVersions() {
    return this.getBooleanAttribute('scan_all_versions');
  }
  public set scanAllVersions(value: boolean | cdktf.IResolvable) {
    this._scanAllVersions = value;
  }
  public resetScanAllVersions() {
    this._scanAllVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAllVersionsInput() {
    return this._scanAllVersions;
  }

  // scan_layers - computed: false, optional: true, required: false
  private _scanLayers?: boolean | cdktf.IResolvable; 
  public get scanLayers() {
    return this.getBooleanAttribute('scan_layers');
  }
  public set scanLayers(value: boolean | cdktf.IResolvable) {
    this._scanLayers = value;
  }
  public resetScanLayers() {
    this._scanLayers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanLayersInput() {
    return this._scanLayers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account prismacloudcompute_cloud_account}
*/
export class CloudAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_cloud_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAccount to import
  * @param importFromId The id of the existing CloudAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_cloud_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/cloud_account prismacloudcompute_cloud_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_cloud_account',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsRegionType = config.awsRegionType;
    this._credentialId = config.credentialId;
    this._discoverAllFunctionVersions = config.discoverAllFunctionVersions;
    this._discoveryEnabled = config.discoveryEnabled;
    this._id = config.id;
    this._serverlessRadarCap = config.serverlessRadarCap;
    this._serverlessRadarEnabled = config.serverlessRadarEnabled;
    this._vmTagsEnabled = config.vmTagsEnabled;
    this._agentlessScanSpec.internalValue = config.agentlessScanSpec;
    this._credential.internalValue = config.credential;
    this._serverlessScanSpec.internalValue = config.serverlessScanSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_region_type - computed: false, optional: true, required: false
  private _awsRegionType?: string; 
  public get awsRegionType() {
    return this.getStringAttribute('aws_region_type');
  }
  public set awsRegionType(value: string) {
    this._awsRegionType = value;
  }
  public resetAwsRegionType() {
    this._awsRegionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionTypeInput() {
    return this._awsRegionType;
  }

  // credential_id - computed: false, optional: true, required: false
  private _credentialId?: string; 
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }
  public set credentialId(value: string) {
    this._credentialId = value;
  }
  public resetCredentialId() {
    this._credentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // discover_all_function_versions - computed: false, optional: true, required: false
  private _discoverAllFunctionVersions?: boolean | cdktf.IResolvable; 
  public get discoverAllFunctionVersions() {
    return this.getBooleanAttribute('discover_all_function_versions');
  }
  public set discoverAllFunctionVersions(value: boolean | cdktf.IResolvable) {
    this._discoverAllFunctionVersions = value;
  }
  public resetDiscoverAllFunctionVersions() {
    this._discoverAllFunctionVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverAllFunctionVersionsInput() {
    return this._discoverAllFunctionVersions;
  }

  // discovery_enabled - computed: false, optional: true, required: false
  private _discoveryEnabled?: boolean | cdktf.IResolvable; 
  public get discoveryEnabled() {
    return this.getBooleanAttribute('discovery_enabled');
  }
  public set discoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._discoveryEnabled = value;
  }
  public resetDiscoveryEnabled() {
    this._discoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryEnabledInput() {
    return this._discoveryEnabled;
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

  // serverless_radar_cap - computed: false, optional: true, required: false
  private _serverlessRadarCap?: number; 
  public get serverlessRadarCap() {
    return this.getNumberAttribute('serverless_radar_cap');
  }
  public set serverlessRadarCap(value: number) {
    this._serverlessRadarCap = value;
  }
  public resetServerlessRadarCap() {
    this._serverlessRadarCap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessRadarCapInput() {
    return this._serverlessRadarCap;
  }

  // serverless_radar_enabled - computed: false, optional: true, required: false
  private _serverlessRadarEnabled?: boolean | cdktf.IResolvable; 
  public get serverlessRadarEnabled() {
    return this.getBooleanAttribute('serverless_radar_enabled');
  }
  public set serverlessRadarEnabled(value: boolean | cdktf.IResolvable) {
    this._serverlessRadarEnabled = value;
  }
  public resetServerlessRadarEnabled() {
    this._serverlessRadarEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessRadarEnabledInput() {
    return this._serverlessRadarEnabled;
  }

  // vm_tags_enabled - computed: false, optional: true, required: false
  private _vmTagsEnabled?: boolean | cdktf.IResolvable; 
  public get vmTagsEnabled() {
    return this.getBooleanAttribute('vm_tags_enabled');
  }
  public set vmTagsEnabled(value: boolean | cdktf.IResolvable) {
    this._vmTagsEnabled = value;
  }
  public resetVmTagsEnabled() {
    this._vmTagsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTagsEnabledInput() {
    return this._vmTagsEnabled;
  }

  // agentless_scan_spec - computed: false, optional: true, required: false
  private _agentlessScanSpec = new CloudAccountAgentlessScanSpecOutputReference(this, "agentless_scan_spec");
  public get agentlessScanSpec() {
    return this._agentlessScanSpec;
  }
  public putAgentlessScanSpec(value: CloudAccountAgentlessScanSpec) {
    this._agentlessScanSpec.internalValue = value;
  }
  public resetAgentlessScanSpec() {
    this._agentlessScanSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentlessScanSpecInput() {
    return this._agentlessScanSpec.internalValue;
  }

  // credential - computed: false, optional: true, required: false
  private _credential = new CloudAccountCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: CloudAccountCredential) {
    this._credential.internalValue = value;
  }
  public resetCredential() {
    this._credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // serverless_scan_spec - computed: false, optional: true, required: false
  private _serverlessScanSpec = new CloudAccountServerlessScanSpecOutputReference(this, "serverless_scan_spec");
  public get serverlessScanSpec() {
    return this._serverlessScanSpec;
  }
  public putServerlessScanSpec(value: CloudAccountServerlessScanSpec) {
    this._serverlessScanSpec.internalValue = value;
  }
  public resetServerlessScanSpec() {
    this._serverlessScanSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessScanSpecInput() {
    return this._serverlessScanSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_region_type: cdktf.stringToTerraform(this._awsRegionType),
      credential_id: cdktf.stringToTerraform(this._credentialId),
      discover_all_function_versions: cdktf.booleanToTerraform(this._discoverAllFunctionVersions),
      discovery_enabled: cdktf.booleanToTerraform(this._discoveryEnabled),
      id: cdktf.stringToTerraform(this._id),
      serverless_radar_cap: cdktf.numberToTerraform(this._serverlessRadarCap),
      serverless_radar_enabled: cdktf.booleanToTerraform(this._serverlessRadarEnabled),
      vm_tags_enabled: cdktf.booleanToTerraform(this._vmTagsEnabled),
      agentless_scan_spec: cloudAccountAgentlessScanSpecToTerraform(this._agentlessScanSpec.internalValue),
      credential: cloudAccountCredentialToTerraform(this._credential.internalValue),
      serverless_scan_spec: cloudAccountServerlessScanSpecToTerraform(this._serverlessScanSpec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_region_type: {
        value: cdktf.stringToHclTerraform(this._awsRegionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_id: {
        value: cdktf.stringToHclTerraform(this._credentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discover_all_function_versions: {
        value: cdktf.booleanToHclTerraform(this._discoverAllFunctionVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      discovery_enabled: {
        value: cdktf.booleanToHclTerraform(this._discoveryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless_radar_cap: {
        value: cdktf.numberToHclTerraform(this._serverlessRadarCap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serverless_radar_enabled: {
        value: cdktf.booleanToHclTerraform(this._serverlessRadarEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vm_tags_enabled: {
        value: cdktf.booleanToHclTerraform(this._vmTagsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      agentless_scan_spec: {
        value: cloudAccountAgentlessScanSpecToHclTerraform(this._agentlessScanSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAccountAgentlessScanSpecList",
      },
      credential: {
        value: cloudAccountCredentialToHclTerraform(this._credential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAccountCredentialList",
      },
      serverless_scan_spec: {
        value: cloudAccountServerlessScanSpecToHclTerraform(this._serverlessScanSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAccountServerlessScanSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
