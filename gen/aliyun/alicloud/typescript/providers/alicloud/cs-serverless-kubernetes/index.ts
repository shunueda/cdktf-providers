// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsServerlessKubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#client_cert CsServerlessKubernetes#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#client_key CsServerlessKubernetes#client_key}
  */
  readonly clientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#cluster_ca_cert CsServerlessKubernetes#cluster_ca_cert}
  */
  readonly clusterCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#cluster_spec CsServerlessKubernetes#cluster_spec}
  */
  readonly clusterSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#create_v2_cluster CsServerlessKubernetes#create_v2_cluster}
  */
  readonly createV2Cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#custom_san CsServerlessKubernetes#custom_san}
  */
  readonly customSan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#deletion_protection CsServerlessKubernetes#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#enable_rrsa CsServerlessKubernetes#enable_rrsa}
  */
  readonly enableRrsa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#endpoint_public_access_enabled CsServerlessKubernetes#endpoint_public_access_enabled}
  */
  readonly endpointPublicAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#force_update CsServerlessKubernetes#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#id CsServerlessKubernetes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#kube_config CsServerlessKubernetes#kube_config}
  */
  readonly kubeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#load_balancer_spec CsServerlessKubernetes#load_balancer_spec}
  */
  readonly loadBalancerSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#logging_type CsServerlessKubernetes#logging_type}
  */
  readonly loggingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#name CsServerlessKubernetes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#name_prefix CsServerlessKubernetes#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#new_nat_gateway CsServerlessKubernetes#new_nat_gateway}
  */
  readonly newNatGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#private_zone CsServerlessKubernetes#private_zone}
  */
  readonly privateZone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#resource_group_id CsServerlessKubernetes#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#retain_resources CsServerlessKubernetes#retain_resources}
  */
  readonly retainResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#security_group_id CsServerlessKubernetes#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#service_cidr CsServerlessKubernetes#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#service_discovery_types CsServerlessKubernetes#service_discovery_types}
  */
  readonly serviceDiscoveryTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#sls_project_name CsServerlessKubernetes#sls_project_name}
  */
  readonly slsProjectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#tags CsServerlessKubernetes#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#time_zone CsServerlessKubernetes#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#version CsServerlessKubernetes#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#vpc_id CsServerlessKubernetes#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#vswitch_id CsServerlessKubernetes#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#vswitch_ids CsServerlessKubernetes#vswitch_ids}
  */
  readonly vswitchIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#zone_id CsServerlessKubernetes#zone_id}
  */
  readonly zoneId?: string;
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#addons CsServerlessKubernetes#addons}
  */
  readonly addons?: CsServerlessKubernetesAddons[] | cdktf.IResolvable;
  /**
  * delete_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#delete_options CsServerlessKubernetes#delete_options}
  */
  readonly deleteOptions?: CsServerlessKubernetesDeleteOptions[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#maintenance_window CsServerlessKubernetes#maintenance_window}
  */
  readonly maintenanceWindow?: CsServerlessKubernetesMaintenanceWindow;
  /**
  * operation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#operation_policy CsServerlessKubernetes#operation_policy}
  */
  readonly operationPolicy?: CsServerlessKubernetesOperationPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#timeouts CsServerlessKubernetes#timeouts}
  */
  readonly timeouts?: CsServerlessKubernetesTimeouts;
}
export interface CsServerlessKubernetesRrsaMetadata {
}

export function csServerlessKubernetesRrsaMetadataToTerraform(struct?: CsServerlessKubernetesRrsaMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function csServerlessKubernetesRrsaMetadataToHclTerraform(struct?: CsServerlessKubernetesRrsaMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CsServerlessKubernetesRrsaMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsServerlessKubernetesRrsaMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsServerlessKubernetesRrsaMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ram_oidc_provider_arn - computed: true, optional: false, required: false
  public get ramOidcProviderArn() {
    return this.getStringAttribute('ram_oidc_provider_arn');
  }

  // ram_oidc_provider_name - computed: true, optional: false, required: false
  public get ramOidcProviderName() {
    return this.getStringAttribute('ram_oidc_provider_name');
  }

  // rrsa_oidc_issuer_url - computed: true, optional: false, required: false
  public get rrsaOidcIssuerUrl() {
    return this.getStringAttribute('rrsa_oidc_issuer_url');
  }
}

export class CsServerlessKubernetesRrsaMetadataList extends cdktf.ComplexList {

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
  public get(index: number): CsServerlessKubernetesRrsaMetadataOutputReference {
    return new CsServerlessKubernetesRrsaMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsServerlessKubernetesAddons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#config CsServerlessKubernetes#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#disabled CsServerlessKubernetes#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#name CsServerlessKubernetes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#version CsServerlessKubernetes#version}
  */
  readonly version?: string;
}

export function csServerlessKubernetesAddonsToTerraform(struct?: CsServerlessKubernetesAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function csServerlessKubernetesAddonsToHclTerraform(struct?: CsServerlessKubernetesAddons | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
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

export class CsServerlessKubernetesAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsServerlessKubernetesAddons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsServerlessKubernetesAddons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._disabled = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._disabled = value.disabled;
      this._name = value.name;
      this._version = value.version;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // name - computed: false, optional: true, required: false
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

export class CsServerlessKubernetesAddonsList extends cdktf.ComplexList {
  public internalValue? : CsServerlessKubernetesAddons[] | cdktf.IResolvable

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
  public get(index: number): CsServerlessKubernetesAddonsOutputReference {
    return new CsServerlessKubernetesAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsServerlessKubernetesDeleteOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#delete_mode CsServerlessKubernetes#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#resource_type CsServerlessKubernetes#resource_type}
  */
  readonly resourceType?: string;
}

export function csServerlessKubernetesDeleteOptionsToTerraform(struct?: CsServerlessKubernetesDeleteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_mode: cdktf.stringToTerraform(struct!.deleteMode),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function csServerlessKubernetesDeleteOptionsToHclTerraform(struct?: CsServerlessKubernetesDeleteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_mode: {
      value: cdktf.stringToHclTerraform(struct!.deleteMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsServerlessKubernetesDeleteOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsServerlessKubernetesDeleteOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMode = this._deleteMode;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsServerlessKubernetesDeleteOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteMode = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteMode = value.deleteMode;
      this._resourceType = value.resourceType;
    }
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class CsServerlessKubernetesDeleteOptionsList extends cdktf.ComplexList {
  public internalValue? : CsServerlessKubernetesDeleteOptions[] | cdktf.IResolvable

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
  public get(index: number): CsServerlessKubernetesDeleteOptionsOutputReference {
    return new CsServerlessKubernetesDeleteOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsServerlessKubernetesMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#duration CsServerlessKubernetes#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#enable CsServerlessKubernetes#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#maintenance_time CsServerlessKubernetes#maintenance_time}
  */
  readonly maintenanceTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#weekly_period CsServerlessKubernetes#weekly_period}
  */
  readonly weeklyPeriod?: string;
}

export function csServerlessKubernetesMaintenanceWindowToTerraform(struct?: CsServerlessKubernetesMaintenanceWindowOutputReference | CsServerlessKubernetesMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maintenance_time: cdktf.stringToTerraform(struct!.maintenanceTime),
    weekly_period: cdktf.stringToTerraform(struct!.weeklyPeriod),
  }
}


export function csServerlessKubernetesMaintenanceWindowToHclTerraform(struct?: CsServerlessKubernetesMaintenanceWindowOutputReference | CsServerlessKubernetesMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maintenance_time: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly_period: {
      value: cdktf.stringToHclTerraform(struct!.weeklyPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsServerlessKubernetesMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsServerlessKubernetesMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maintenanceTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceTime = this._maintenanceTime;
    }
    if (this._weeklyPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyPeriod = this._weeklyPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsServerlessKubernetesMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enable = undefined;
      this._maintenanceTime = undefined;
      this._weeklyPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enable = value.enable;
      this._maintenanceTime = value.maintenanceTime;
      this._weeklyPeriod = value.weeklyPeriod;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // maintenance_time - computed: true, optional: true, required: false
  private _maintenanceTime?: string; 
  public get maintenanceTime() {
    return this.getStringAttribute('maintenance_time');
  }
  public set maintenanceTime(value: string) {
    this._maintenanceTime = value;
  }
  public resetMaintenanceTime() {
    this._maintenanceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimeInput() {
    return this._maintenanceTime;
  }

  // weekly_period - computed: true, optional: true, required: false
  private _weeklyPeriod?: string; 
  public get weeklyPeriod() {
    return this.getStringAttribute('weekly_period');
  }
  public set weeklyPeriod(value: string) {
    this._weeklyPeriod = value;
  }
  public resetWeeklyPeriod() {
    this._weeklyPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyPeriodInput() {
    return this._weeklyPeriod;
  }
}
export interface CsServerlessKubernetesOperationPolicyClusterAutoUpgrade {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#channel CsServerlessKubernetes#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#enabled CsServerlessKubernetes#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function csServerlessKubernetesOperationPolicyClusterAutoUpgradeToTerraform(struct?: CsServerlessKubernetesOperationPolicyClusterAutoUpgradeOutputReference | CsServerlessKubernetesOperationPolicyClusterAutoUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function csServerlessKubernetesOperationPolicyClusterAutoUpgradeToHclTerraform(struct?: CsServerlessKubernetesOperationPolicyClusterAutoUpgradeOutputReference | CsServerlessKubernetesOperationPolicyClusterAutoUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsServerlessKubernetesOperationPolicyClusterAutoUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsServerlessKubernetesOperationPolicyClusterAutoUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsServerlessKubernetesOperationPolicyClusterAutoUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
      this._enabled = value.enabled;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
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
}
export interface CsServerlessKubernetesOperationPolicy {
  /**
  * cluster_auto_upgrade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#cluster_auto_upgrade CsServerlessKubernetes#cluster_auto_upgrade}
  */
  readonly clusterAutoUpgrade?: CsServerlessKubernetesOperationPolicyClusterAutoUpgrade;
}

export function csServerlessKubernetesOperationPolicyToTerraform(struct?: CsServerlessKubernetesOperationPolicyOutputReference | CsServerlessKubernetesOperationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_auto_upgrade: csServerlessKubernetesOperationPolicyClusterAutoUpgradeToTerraform(struct!.clusterAutoUpgrade),
  }
}


export function csServerlessKubernetesOperationPolicyToHclTerraform(struct?: CsServerlessKubernetesOperationPolicyOutputReference | CsServerlessKubernetesOperationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_auto_upgrade: {
      value: csServerlessKubernetesOperationPolicyClusterAutoUpgradeToHclTerraform(struct!.clusterAutoUpgrade),
      isBlock: true,
      type: "list",
      storageClassType: "CsServerlessKubernetesOperationPolicyClusterAutoUpgradeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsServerlessKubernetesOperationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsServerlessKubernetesOperationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterAutoUpgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAutoUpgrade = this._clusterAutoUpgrade?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsServerlessKubernetesOperationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterAutoUpgrade.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterAutoUpgrade.internalValue = value.clusterAutoUpgrade;
    }
  }

  // cluster_auto_upgrade - computed: false, optional: true, required: false
  private _clusterAutoUpgrade = new CsServerlessKubernetesOperationPolicyClusterAutoUpgradeOutputReference(this, "cluster_auto_upgrade");
  public get clusterAutoUpgrade() {
    return this._clusterAutoUpgrade;
  }
  public putClusterAutoUpgrade(value: CsServerlessKubernetesOperationPolicyClusterAutoUpgrade) {
    this._clusterAutoUpgrade.internalValue = value;
  }
  public resetClusterAutoUpgrade() {
    this._clusterAutoUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAutoUpgradeInput() {
    return this._clusterAutoUpgrade.internalValue;
  }
}
export interface CsServerlessKubernetesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#create CsServerlessKubernetes#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#delete CsServerlessKubernetes#delete}
  */
  readonly delete?: string;
}

export function csServerlessKubernetesTimeoutsToTerraform(struct?: CsServerlessKubernetesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function csServerlessKubernetesTimeoutsToHclTerraform(struct?: CsServerlessKubernetesTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsServerlessKubernetesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsServerlessKubernetesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsServerlessKubernetesTimeouts | cdktf.IResolvable | undefined) {
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes alicloud_cs_serverless_kubernetes}
*/
export class CsServerlessKubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cs_serverless_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsServerlessKubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsServerlessKubernetes to import
  * @param importFromId The id of the existing CsServerlessKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsServerlessKubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cs_serverless_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cs_serverless_kubernetes alicloud_cs_serverless_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsServerlessKubernetesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CsServerlessKubernetesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cs_serverless_kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientCert = config.clientCert;
    this._clientKey = config.clientKey;
    this._clusterCaCert = config.clusterCaCert;
    this._clusterSpec = config.clusterSpec;
    this._createV2Cluster = config.createV2Cluster;
    this._customSan = config.customSan;
    this._deletionProtection = config.deletionProtection;
    this._enableRrsa = config.enableRrsa;
    this._endpointPublicAccessEnabled = config.endpointPublicAccessEnabled;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._kubeConfig = config.kubeConfig;
    this._loadBalancerSpec = config.loadBalancerSpec;
    this._loggingType = config.loggingType;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._newNatGateway = config.newNatGateway;
    this._privateZone = config.privateZone;
    this._resourceGroupId = config.resourceGroupId;
    this._retainResources = config.retainResources;
    this._securityGroupId = config.securityGroupId;
    this._serviceCidr = config.serviceCidr;
    this._serviceDiscoveryTypes = config.serviceDiscoveryTypes;
    this._slsProjectName = config.slsProjectName;
    this._tags = config.tags;
    this._timeZone = config.timeZone;
    this._version = config.version;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._vswitchIds = config.vswitchIds;
    this._zoneId = config.zoneId;
    this._addons.internalValue = config.addons;
    this._deleteOptions.internalValue = config.deleteOptions;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._operationPolicy.internalValue = config.operationPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // cluster_ca_cert - computed: false, optional: true, required: false
  private _clusterCaCert?: string; 
  public get clusterCaCert() {
    return this.getStringAttribute('cluster_ca_cert');
  }
  public set clusterCaCert(value: string) {
    this._clusterCaCert = value;
  }
  public resetClusterCaCert() {
    this._clusterCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaCertInput() {
    return this._clusterCaCert;
  }

  // cluster_spec - computed: true, optional: true, required: false
  private _clusterSpec?: string; 
  public get clusterSpec() {
    return this.getStringAttribute('cluster_spec');
  }
  public set clusterSpec(value: string) {
    this._clusterSpec = value;
  }
  public resetClusterSpec() {
    this._clusterSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSpecInput() {
    return this._clusterSpec;
  }

  // create_v2_cluster - computed: true, optional: true, required: false
  private _createV2Cluster?: boolean | cdktf.IResolvable; 
  public get createV2Cluster() {
    return this.getBooleanAttribute('create_v2_cluster');
  }
  public set createV2Cluster(value: boolean | cdktf.IResolvable) {
    this._createV2Cluster = value;
  }
  public resetCreateV2Cluster() {
    this._createV2Cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createV2ClusterInput() {
    return this._createV2Cluster;
  }

  // custom_san - computed: false, optional: true, required: false
  private _customSan?: string; 
  public get customSan() {
    return this.getStringAttribute('custom_san');
  }
  public set customSan(value: string) {
    this._customSan = value;
  }
  public resetCustomSan() {
    this._customSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSanInput() {
    return this._customSan;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // enable_rrsa - computed: false, optional: true, required: false
  private _enableRrsa?: boolean | cdktf.IResolvable; 
  public get enableRrsa() {
    return this.getBooleanAttribute('enable_rrsa');
  }
  public set enableRrsa(value: boolean | cdktf.IResolvable) {
    this._enableRrsa = value;
  }
  public resetEnableRrsa() {
    this._enableRrsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRrsaInput() {
    return this._enableRrsa;
  }

  // endpoint_public_access_enabled - computed: false, optional: true, required: false
  private _endpointPublicAccessEnabled?: boolean | cdktf.IResolvable; 
  public get endpointPublicAccessEnabled() {
    return this.getBooleanAttribute('endpoint_public_access_enabled');
  }
  public set endpointPublicAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._endpointPublicAccessEnabled = value;
  }
  public resetEndpointPublicAccessEnabled() {
    this._endpointPublicAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPublicAccessEnabledInput() {
    return this._endpointPublicAccessEnabled;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
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

  // kube_config - computed: false, optional: true, required: false
  private _kubeConfig?: string; 
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }
  public set kubeConfig(value: string) {
    this._kubeConfig = value;
  }
  public resetKubeConfig() {
    this._kubeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig;
  }

  // load_balancer_spec - computed: true, optional: true, required: false
  private _loadBalancerSpec?: string; 
  public get loadBalancerSpec() {
    return this.getStringAttribute('load_balancer_spec');
  }
  public set loadBalancerSpec(value: string) {
    this._loadBalancerSpec = value;
  }
  public resetLoadBalancerSpec() {
    this._loadBalancerSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSpecInput() {
    return this._loadBalancerSpec;
  }

  // logging_type - computed: false, optional: true, required: false
  private _loggingType?: string; 
  public get loggingType() {
    return this.getStringAttribute('logging_type');
  }
  public set loggingType(value: string) {
    this._loggingType = value;
  }
  public resetLoggingType() {
    this._loggingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTypeInput() {
    return this._loggingType;
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // new_nat_gateway - computed: false, optional: true, required: false
  private _newNatGateway?: boolean | cdktf.IResolvable; 
  public get newNatGateway() {
    return this.getBooleanAttribute('new_nat_gateway');
  }
  public set newNatGateway(value: boolean | cdktf.IResolvable) {
    this._newNatGateway = value;
  }
  public resetNewNatGateway() {
    this._newNatGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNatGatewayInput() {
    return this._newNatGateway;
  }

  // private_zone - computed: false, optional: true, required: false
  private _privateZone?: boolean | cdktf.IResolvable; 
  public get privateZone() {
    return this.getBooleanAttribute('private_zone');
  }
  public set privateZone(value: boolean | cdktf.IResolvable) {
    this._privateZone = value;
  }
  public resetPrivateZone() {
    this._privateZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateZoneInput() {
    return this._privateZone;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // retain_resources - computed: false, optional: true, required: false
  private _retainResources?: string[]; 
  public get retainResources() {
    return this.getListAttribute('retain_resources');
  }
  public set retainResources(value: string[]) {
    this._retainResources = value;
  }
  public resetRetainResources() {
    this._retainResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainResourcesInput() {
    return this._retainResources;
  }

  // rrsa_metadata - computed: true, optional: false, required: false
  private _rrsaMetadata = new CsServerlessKubernetesRrsaMetadataList(this, "rrsa_metadata", false);
  public get rrsaMetadata() {
    return this._rrsaMetadata;
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // service_cidr - computed: false, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // service_discovery_types - computed: false, optional: true, required: false
  private _serviceDiscoveryTypes?: string[]; 
  public get serviceDiscoveryTypes() {
    return this.getListAttribute('service_discovery_types');
  }
  public set serviceDiscoveryTypes(value: string[]) {
    this._serviceDiscoveryTypes = value;
  }
  public resetServiceDiscoveryTypes() {
    this._serviceDiscoveryTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryTypesInput() {
    return this._serviceDiscoveryTypes;
  }

  // sls_project_name - computed: true, optional: true, required: false
  private _slsProjectName?: string; 
  public get slsProjectName() {
    return this.getStringAttribute('sls_project_name');
  }
  public set slsProjectName(value: string) {
    this._slsProjectName = value;
  }
  public resetSlsProjectName() {
    this._slsProjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsProjectNameInput() {
    return this._slsProjectName;
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

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
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

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // vswitch_ids - computed: true, optional: true, required: false
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  public resetVswitchIds() {
    this._vswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // addons - computed: false, optional: true, required: false
  private _addons = new CsServerlessKubernetesAddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }
  public putAddons(value: CsServerlessKubernetesAddons[] | cdktf.IResolvable) {
    this._addons.internalValue = value;
  }
  public resetAddons() {
    this._addons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // delete_options - computed: false, optional: true, required: false
  private _deleteOptions = new CsServerlessKubernetesDeleteOptionsList(this, "delete_options", false);
  public get deleteOptions() {
    return this._deleteOptions;
  }
  public putDeleteOptions(value: CsServerlessKubernetesDeleteOptions[] | cdktf.IResolvable) {
    this._deleteOptions.internalValue = value;
  }
  public resetDeleteOptions() {
    this._deleteOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOptionsInput() {
    return this._deleteOptions.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new CsServerlessKubernetesMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: CsServerlessKubernetesMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // operation_policy - computed: false, optional: true, required: false
  private _operationPolicy = new CsServerlessKubernetesOperationPolicyOutputReference(this, "operation_policy");
  public get operationPolicy() {
    return this._operationPolicy;
  }
  public putOperationPolicy(value: CsServerlessKubernetesOperationPolicy) {
    this._operationPolicy.internalValue = value;
  }
  public resetOperationPolicy() {
    this._operationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationPolicyInput() {
    return this._operationPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsServerlessKubernetesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsServerlessKubernetesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_key: cdktf.stringToTerraform(this._clientKey),
      cluster_ca_cert: cdktf.stringToTerraform(this._clusterCaCert),
      cluster_spec: cdktf.stringToTerraform(this._clusterSpec),
      create_v2_cluster: cdktf.booleanToTerraform(this._createV2Cluster),
      custom_san: cdktf.stringToTerraform(this._customSan),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      enable_rrsa: cdktf.booleanToTerraform(this._enableRrsa),
      endpoint_public_access_enabled: cdktf.booleanToTerraform(this._endpointPublicAccessEnabled),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
      kube_config: cdktf.stringToTerraform(this._kubeConfig),
      load_balancer_spec: cdktf.stringToTerraform(this._loadBalancerSpec),
      logging_type: cdktf.stringToTerraform(this._loggingType),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      new_nat_gateway: cdktf.booleanToTerraform(this._newNatGateway),
      private_zone: cdktf.booleanToTerraform(this._privateZone),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      retain_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retainResources),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      service_cidr: cdktf.stringToTerraform(this._serviceCidr),
      service_discovery_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceDiscoveryTypes),
      sls_project_name: cdktf.stringToTerraform(this._slsProjectName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      version: cdktf.stringToTerraform(this._version),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vswitchIds),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      addons: cdktf.listMapper(csServerlessKubernetesAddonsToTerraform, true)(this._addons.internalValue),
      delete_options: cdktf.listMapper(csServerlessKubernetesDeleteOptionsToTerraform, true)(this._deleteOptions.internalValue),
      maintenance_window: csServerlessKubernetesMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      operation_policy: csServerlessKubernetesOperationPolicyToTerraform(this._operationPolicy.internalValue),
      timeouts: csServerlessKubernetesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key: {
        value: cdktf.stringToHclTerraform(this._clientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_ca_cert: {
        value: cdktf.stringToHclTerraform(this._clusterCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_spec: {
        value: cdktf.stringToHclTerraform(this._clusterSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_v2_cluster: {
        value: cdktf.booleanToHclTerraform(this._createV2Cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_san: {
        value: cdktf.stringToHclTerraform(this._customSan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rrsa: {
        value: cdktf.booleanToHclTerraform(this._enableRrsa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_public_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._endpointPublicAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
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
      kube_config: {
        value: cdktf.stringToHclTerraform(this._kubeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_spec: {
        value: cdktf.stringToHclTerraform(this._loadBalancerSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_type: {
        value: cdktf.stringToHclTerraform(this._loggingType),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_nat_gateway: {
        value: cdktf.booleanToHclTerraform(this._newNatGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_zone: {
        value: cdktf.booleanToHclTerraform(this._privateZone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retainResources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_cidr: {
        value: cdktf.stringToHclTerraform(this._serviceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_discovery_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceDiscoveryTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sls_project_name: {
        value: cdktf.stringToHclTerraform(this._slsProjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vswitchIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addons: {
        value: cdktf.listMapperHcl(csServerlessKubernetesAddonsToHclTerraform, true)(this._addons.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsServerlessKubernetesAddonsList",
      },
      delete_options: {
        value: cdktf.listMapperHcl(csServerlessKubernetesDeleteOptionsToHclTerraform, true)(this._deleteOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsServerlessKubernetesDeleteOptionsList",
      },
      maintenance_window: {
        value: csServerlessKubernetesMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsServerlessKubernetesMaintenanceWindowList",
      },
      operation_policy: {
        value: csServerlessKubernetesOperationPolicyToHclTerraform(this._operationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsServerlessKubernetesOperationPolicyList",
      },
      timeouts: {
        value: csServerlessKubernetesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsServerlessKubernetesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
