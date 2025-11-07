// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatalakeGcpDatalakeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#cloud_provider_configuration DatalakeGcpDatalake#cloud_provider_configuration}
  */
  readonly cloudProviderConfiguration: DatalakeGcpDatalakeCloudProviderConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#datalake_name DatalakeGcpDatalake#datalake_name}
  */
  readonly datalakeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#enable_ranger_raz DatalakeGcpDatalake#enable_ranger_raz}
  */
  readonly enableRangerRaz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#environment_name DatalakeGcpDatalake#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#image DatalakeGcpDatalake#image}
  */
  readonly image?: DatalakeGcpDatalakeImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#java_version DatalakeGcpDatalake#java_version}
  */
  readonly javaVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#multi_az DatalakeGcpDatalake#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#polling_options DatalakeGcpDatalake#polling_options}
  */
  readonly pollingOptions?: DatalakeGcpDatalakePollingOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#recipes DatalakeGcpDatalake#recipes}
  */
  readonly recipes?: DatalakeGcpDatalakeRecipes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#runtime DatalakeGcpDatalake#runtime}
  */
  readonly runtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#scale DatalakeGcpDatalake#scale}
  */
  readonly scale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#tags DatalakeGcpDatalake#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DatalakeGcpDatalakeCloudProviderConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#service_account_email DatalakeGcpDatalake#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#storage_location DatalakeGcpDatalake#storage_location}
  */
  readonly storageLocation: string;
}

export function datalakeGcpDatalakeCloudProviderConfigurationToTerraform(struct?: DatalakeGcpDatalakeCloudProviderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    storage_location: cdktf.stringToTerraform(struct!.storageLocation),
  }
}


export function datalakeGcpDatalakeCloudProviderConfigurationToHclTerraform(struct?: DatalakeGcpDatalakeCloudProviderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_location: {
      value: cdktf.stringToHclTerraform(struct!.storageLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatalakeGcpDatalakeCloudProviderConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatalakeGcpDatalakeCloudProviderConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._storageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocation = this._storageLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatalakeGcpDatalakeCloudProviderConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountEmail = undefined;
      this._storageLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._storageLocation = value.storageLocation;
    }
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // storage_location - computed: false, optional: false, required: true
  private _storageLocation?: string; 
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }
  public set storageLocation(value: string) {
    this._storageLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation;
  }
}
export interface DatalakeGcpDatalakeImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#catalog_name DatalakeGcpDatalake#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#id DatalakeGcpDatalake#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#os DatalakeGcpDatalake#os}
  */
  readonly os?: string;
}

export function datalakeGcpDatalakeImageToTerraform(struct?: DatalakeGcpDatalakeImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
    id: cdktf.stringToTerraform(struct!.id),
    os: cdktf.stringToTerraform(struct!.os),
  }
}


export function datalakeGcpDatalakeImageToHclTerraform(struct?: DatalakeGcpDatalakeImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.catalogName),
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
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatalakeGcpDatalakeImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatalakeGcpDatalakeImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatalakeGcpDatalakeImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogName = undefined;
      this._id = undefined;
      this._os = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogName = value.catalogName;
      this._id = value.id;
      this._os = value.os;
    }
  }

  // catalog_name - computed: false, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
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

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }
}
export interface DatalakeGcpDatalakePollingOptions {
  /**
  * Boolean value that specifies if Terraform should wait for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#async DatalakeGcpDatalake#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#call_failure_threshold DatalakeGcpDatalake#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#polling_timeout DatalakeGcpDatalake#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function datalakeGcpDatalakePollingOptionsToTerraform(struct?: DatalakeGcpDatalakePollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async: cdktf.booleanToTerraform(struct!.async),
    call_failure_threshold: cdktf.numberToTerraform(struct!.callFailureThreshold),
    polling_timeout: cdktf.numberToTerraform(struct!.pollingTimeout),
  }
}


export function datalakeGcpDatalakePollingOptionsToHclTerraform(struct?: DatalakeGcpDatalakePollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async: {
      value: cdktf.booleanToHclTerraform(struct!.async),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    call_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.callFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatalakeGcpDatalakePollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatalakeGcpDatalakePollingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._async !== undefined) {
      hasAnyValues = true;
      internalValueResult.async = this._async;
    }
    if (this._callFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.callFailureThreshold = this._callFailureThreshold;
    }
    if (this._pollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingTimeout = this._pollingTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatalakeGcpDatalakePollingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._async = undefined;
      this._callFailureThreshold = undefined;
      this._pollingTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._async = value.async;
      this._callFailureThreshold = value.callFailureThreshold;
      this._pollingTimeout = value.pollingTimeout;
    }
  }

  // async - computed: true, optional: true, required: false
  private _async?: boolean | cdktf.IResolvable; 
  public get async() {
    return this.getBooleanAttribute('async');
  }
  public set async(value: boolean | cdktf.IResolvable) {
    this._async = value;
  }
  public resetAsync() {
    this._async = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInput() {
    return this._async;
  }

  // call_failure_threshold - computed: true, optional: true, required: false
  private _callFailureThreshold?: number; 
  public get callFailureThreshold() {
    return this.getNumberAttribute('call_failure_threshold');
  }
  public set callFailureThreshold(value: number) {
    this._callFailureThreshold = value;
  }
  public resetCallFailureThreshold() {
    this._callFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callFailureThresholdInput() {
    return this._callFailureThreshold;
  }

  // polling_timeout - computed: true, optional: true, required: false
  private _pollingTimeout?: number; 
  public get pollingTimeout() {
    return this.getNumberAttribute('polling_timeout');
  }
  public set pollingTimeout(value: number) {
    this._pollingTimeout = value;
  }
  public resetPollingTimeout() {
    this._pollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingTimeoutInput() {
    return this._pollingTimeout;
  }
}
export interface DatalakeGcpDatalakeRecipes {
  /**
  * The name of the designated instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#instance_group_name DatalakeGcpDatalake#instance_group_name}
  */
  readonly instanceGroupName: string;
  /**
  * The set of recipe names that are going to be applied on the given instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#recipe_names DatalakeGcpDatalake#recipe_names}
  */
  readonly recipeNames: string[];
}

export function datalakeGcpDatalakeRecipesToTerraform(struct?: DatalakeGcpDatalakeRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_group_name: cdktf.stringToTerraform(struct!.instanceGroupName),
    recipe_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipeNames),
  }
}


export function datalakeGcpDatalakeRecipesToHclTerraform(struct?: DatalakeGcpDatalakeRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_group_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipe_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipeNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatalakeGcpDatalakeRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatalakeGcpDatalakeRecipes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._recipeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipeNames = this._recipeNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatalakeGcpDatalakeRecipes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceGroupName = undefined;
      this._recipeNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceGroupName = value.instanceGroupName;
      this._recipeNames = value.recipeNames;
    }
  }

  // instance_group_name - computed: false, optional: false, required: true
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // recipe_names - computed: false, optional: false, required: true
  private _recipeNames?: string[]; 
  public get recipeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('recipe_names'));
  }
  public set recipeNames(value: string[]) {
    this._recipeNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeNamesInput() {
    return this._recipeNames;
  }
}

export class DatalakeGcpDatalakeRecipesList extends cdktf.ComplexList {
  public internalValue? : DatalakeGcpDatalakeRecipes[] | cdktf.IResolvable

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
  public get(index: number): DatalakeGcpDatalakeRecipesOutputReference {
    return new DatalakeGcpDatalakeRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake cdp_datalake_gcp_datalake}
*/
export class DatalakeGcpDatalake extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_datalake_gcp_datalake";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatalakeGcpDatalake resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatalakeGcpDatalake to import
  * @param importFromId The id of the existing DatalakeGcpDatalake that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatalakeGcpDatalake to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_datalake_gcp_datalake", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_gcp_datalake cdp_datalake_gcp_datalake} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatalakeGcpDatalakeConfig
  */
  public constructor(scope: Construct, id: string, config: DatalakeGcpDatalakeConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_datalake_gcp_datalake',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProviderConfiguration.internalValue = config.cloudProviderConfiguration;
    this._datalakeName = config.datalakeName;
    this._enableRangerRaz = config.enableRangerRaz;
    this._environmentName = config.environmentName;
    this._image.internalValue = config.image;
    this._javaVersion = config.javaVersion;
    this._multiAz = config.multiAz;
    this._pollingOptions.internalValue = config.pollingOptions;
    this._recipes.internalValue = config.recipes;
    this._runtime = config.runtime;
    this._scale = config.scale;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider_configuration - computed: false, optional: false, required: true
  private _cloudProviderConfiguration = new DatalakeGcpDatalakeCloudProviderConfigurationOutputReference(this, "cloud_provider_configuration");
  public get cloudProviderConfiguration() {
    return this._cloudProviderConfiguration;
  }
  public putCloudProviderConfiguration(value: DatalakeGcpDatalakeCloudProviderConfiguration) {
    this._cloudProviderConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderConfigurationInput() {
    return this._cloudProviderConfiguration.internalValue;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // datalake_name - computed: false, optional: false, required: true
  private _datalakeName?: string; 
  public get datalakeName() {
    return this.getStringAttribute('datalake_name');
  }
  public set datalakeName(value: string) {
    this._datalakeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datalakeNameInput() {
    return this._datalakeName;
  }

  // enable_ranger_raz - computed: true, optional: true, required: false
  private _enableRangerRaz?: boolean | cdktf.IResolvable; 
  public get enableRangerRaz() {
    return this.getBooleanAttribute('enable_ranger_raz');
  }
  public set enableRangerRaz(value: boolean | cdktf.IResolvable) {
    this._enableRangerRaz = value;
  }
  public resetEnableRangerRaz() {
    this._enableRangerRaz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRangerRazInput() {
    return this._enableRangerRaz;
  }

  // environment_crn - computed: true, optional: false, required: false
  public get environmentCrn() {
    return this.getStringAttribute('environment_crn');
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: true, required: false
  private _image = new DatalakeGcpDatalakeImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DatalakeGcpDatalakeImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // java_version - computed: false, optional: true, required: false
  private _javaVersion?: number; 
  public get javaVersion() {
    return this.getNumberAttribute('java_version');
  }
  public set javaVersion(value: number) {
    this._javaVersion = value;
  }
  public resetJavaVersion() {
    this._javaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaVersionInput() {
    return this._javaVersion;
  }

  // multi_az - computed: true, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
  }

  // polling_options - computed: false, optional: true, required: false
  private _pollingOptions = new DatalakeGcpDatalakePollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: DatalakeGcpDatalakePollingOptions) {
    this._pollingOptions.internalValue = value;
  }
  public resetPollingOptions() {
    this._pollingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingOptionsInput() {
    return this._pollingOptions.internalValue;
  }

  // recipes - computed: false, optional: true, required: false
  private _recipes = new DatalakeGcpDatalakeRecipesList(this, "recipes", true);
  public get recipes() {
    return this._recipes;
  }
  public putRecipes(value: DatalakeGcpDatalakeRecipes[] | cdktf.IResolvable) {
    this._recipes.internalValue = value;
  }
  public resetRecipes() {
    this._recipes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipesInput() {
    return this._recipes.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // scale - computed: true, optional: true, required: false
  private _scale?: string; 
  public get scale() {
    return this.getStringAttribute('scale');
  }
  public set scale(value: string) {
    this._scale = value;
  }
  public resetScale() {
    this._scale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider_configuration: datalakeGcpDatalakeCloudProviderConfigurationToTerraform(this._cloudProviderConfiguration.internalValue),
      datalake_name: cdktf.stringToTerraform(this._datalakeName),
      enable_ranger_raz: cdktf.booleanToTerraform(this._enableRangerRaz),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      image: datalakeGcpDatalakeImageToTerraform(this._image.internalValue),
      java_version: cdktf.numberToTerraform(this._javaVersion),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      polling_options: datalakeGcpDatalakePollingOptionsToTerraform(this._pollingOptions.internalValue),
      recipes: cdktf.listMapper(datalakeGcpDatalakeRecipesToTerraform, false)(this._recipes.internalValue),
      runtime: cdktf.stringToTerraform(this._runtime),
      scale: cdktf.stringToTerraform(this._scale),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider_configuration: {
        value: datalakeGcpDatalakeCloudProviderConfigurationToHclTerraform(this._cloudProviderConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatalakeGcpDatalakeCloudProviderConfiguration",
      },
      datalake_name: {
        value: cdktf.stringToHclTerraform(this._datalakeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ranger_raz: {
        value: cdktf.booleanToHclTerraform(this._enableRangerRaz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: datalakeGcpDatalakeImageToHclTerraform(this._image.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatalakeGcpDatalakeImage",
      },
      java_version: {
        value: cdktf.numberToHclTerraform(this._javaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_az: {
        value: cdktf.booleanToHclTerraform(this._multiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      polling_options: {
        value: datalakeGcpDatalakePollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatalakeGcpDatalakePollingOptions",
      },
      recipes: {
        value: cdktf.listMapperHcl(datalakeGcpDatalakeRecipesToHclTerraform, false)(this._recipes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatalakeGcpDatalakeRecipesList",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale: {
        value: cdktf.stringToHclTerraform(this._scale),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
