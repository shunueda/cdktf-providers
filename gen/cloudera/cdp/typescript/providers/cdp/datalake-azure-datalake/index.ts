// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatalakeAzureDatalakeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of the azure database. FLEXIBLE_SERVER is the next generation managed PostgreSQL service in Azure that provides maximum flexibility over your database, built-in cost-optimizations. SINGLE_SERVER is a fully managed database service with minimal requirements for customizations of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#database_type DatalakeAzureDatalake#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#datalake_name DatalakeAzureDatalake#datalake_name}
  */
  readonly datalakeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#enable_ranger_raz DatalakeAzureDatalake#enable_ranger_raz}
  */
  readonly enableRangerRaz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#environment_name DatalakeAzureDatalake#environment_name}
  */
  readonly environmentName: string;
  /**
  * This  argument  allows  you  to specify the subnet ID for the subnet within which you want to configure your Azure Flexible Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#flexible_server_delegated_subnet_id DatalakeAzureDatalake#flexible_server_delegated_subnet_id}
  */
  readonly flexibleServerDelegatedSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#image DatalakeAzureDatalake#image}
  */
  readonly image?: DatalakeAzureDatalakeImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#java_version DatalakeAzureDatalake#java_version}
  */
  readonly javaVersion?: number;
  /**
  * Represents the Azure load balancer SKU type. The current default  is BASIC. To disable the load balancer, use type NONE. Possible values: BASIC, STANDARD, NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#load_balancer_sku DatalakeAzureDatalake#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#managed_identity DatalakeAzureDatalake#managed_identity}
  */
  readonly managedIdentity: string;
  /**
  * Creates CDP datalake distributed across multiple availability  zones in an Azure region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#multi_az DatalakeAzureDatalake#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#polling_options DatalakeAzureDatalake#polling_options}
  */
  readonly pollingOptions?: DatalakeAzureDatalakePollingOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#recipes DatalakeAzureDatalake#recipes}
  */
  readonly recipes?: DatalakeAzureDatalakeRecipes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#runtime DatalakeAzureDatalake#runtime}
  */
  readonly runtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#scale DatalakeAzureDatalake#scale}
  */
  readonly scale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#storage_location_base DatalakeAzureDatalake#storage_location_base}
  */
  readonly storageLocationBase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#tags DatalakeAzureDatalake#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DatalakeAzureDatalakeImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#catalog_name DatalakeAzureDatalake#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#id DatalakeAzureDatalake#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#os DatalakeAzureDatalake#os}
  */
  readonly os?: string;
}

export function datalakeAzureDatalakeImageToTerraform(struct?: DatalakeAzureDatalakeImage | cdktf.IResolvable): any {
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


export function datalakeAzureDatalakeImageToHclTerraform(struct?: DatalakeAzureDatalakeImage | cdktf.IResolvable): any {
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

export class DatalakeAzureDatalakeImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatalakeAzureDatalakeImage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatalakeAzureDatalakeImage | cdktf.IResolvable | undefined) {
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
export interface DatalakeAzureDatalakePollingOptions {
  /**
  * Boolean value that specifies if Terraform should wait for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#async DatalakeAzureDatalake#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#call_failure_threshold DatalakeAzureDatalake#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#polling_timeout DatalakeAzureDatalake#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function datalakeAzureDatalakePollingOptionsToTerraform(struct?: DatalakeAzureDatalakePollingOptions | cdktf.IResolvable): any {
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


export function datalakeAzureDatalakePollingOptionsToHclTerraform(struct?: DatalakeAzureDatalakePollingOptions | cdktf.IResolvable): any {
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

export class DatalakeAzureDatalakePollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatalakeAzureDatalakePollingOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatalakeAzureDatalakePollingOptions | cdktf.IResolvable | undefined) {
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
export interface DatalakeAzureDatalakeRecipes {
  /**
  * The name of the designated instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#instance_group_name DatalakeAzureDatalake#instance_group_name}
  */
  readonly instanceGroupName: string;
  /**
  * The set of recipe names that are going to be applied on the given instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#recipe_names DatalakeAzureDatalake#recipe_names}
  */
  readonly recipeNames: string[];
}

export function datalakeAzureDatalakeRecipesToTerraform(struct?: DatalakeAzureDatalakeRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_group_name: cdktf.stringToTerraform(struct!.instanceGroupName),
    recipe_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipeNames),
  }
}


export function datalakeAzureDatalakeRecipesToHclTerraform(struct?: DatalakeAzureDatalakeRecipes | cdktf.IResolvable): any {
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

export class DatalakeAzureDatalakeRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatalakeAzureDatalakeRecipes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatalakeAzureDatalakeRecipes | cdktf.IResolvable | undefined) {
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

export class DatalakeAzureDatalakeRecipesList extends cdktf.ComplexList {
  public internalValue? : DatalakeAzureDatalakeRecipes[] | cdktf.IResolvable

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
  public get(index: number): DatalakeAzureDatalakeRecipesOutputReference {
    return new DatalakeAzureDatalakeRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake cdp_datalake_azure_datalake}
*/
export class DatalakeAzureDatalake extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_datalake_azure_datalake";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatalakeAzureDatalake resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatalakeAzureDatalake to import
  * @param importFromId The id of the existing DatalakeAzureDatalake that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatalakeAzureDatalake to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_datalake_azure_datalake", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datalake_azure_datalake cdp_datalake_azure_datalake} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatalakeAzureDatalakeConfig
  */
  public constructor(scope: Construct, id: string, config: DatalakeAzureDatalakeConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_datalake_azure_datalake',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8',
        providerVersionConstraint: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseType = config.databaseType;
    this._datalakeName = config.datalakeName;
    this._enableRangerRaz = config.enableRangerRaz;
    this._environmentName = config.environmentName;
    this._flexibleServerDelegatedSubnetId = config.flexibleServerDelegatedSubnetId;
    this._image.internalValue = config.image;
    this._javaVersion = config.javaVersion;
    this._loadBalancerSku = config.loadBalancerSku;
    this._managedIdentity = config.managedIdentity;
    this._multiAz = config.multiAz;
    this._pollingOptions.internalValue = config.pollingOptions;
    this._recipes.internalValue = config.recipes;
    this._runtime = config.runtime;
    this._scale = config.scale;
    this._storageLocationBase = config.storageLocationBase;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_expiration_state - computed: true, optional: false, required: false
  public get certificateExpirationState() {
    return this.getStringAttribute('certificate_expiration_state');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
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

  // flexible_server_delegated_subnet_id - computed: false, optional: true, required: false
  private _flexibleServerDelegatedSubnetId?: string; 
  public get flexibleServerDelegatedSubnetId() {
    return this.getStringAttribute('flexible_server_delegated_subnet_id');
  }
  public set flexibleServerDelegatedSubnetId(value: string) {
    this._flexibleServerDelegatedSubnetId = value;
  }
  public resetFlexibleServerDelegatedSubnetId() {
    this._flexibleServerDelegatedSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexibleServerDelegatedSubnetIdInput() {
    return this._flexibleServerDelegatedSubnetId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: true, required: false
  private _image = new DatalakeAzureDatalakeImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DatalakeAzureDatalakeImage) {
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

  // load_balancer_sku - computed: false, optional: true, required: false
  private _loadBalancerSku?: string; 
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }
  public set loadBalancerSku(value: string) {
    this._loadBalancerSku = value;
  }
  public resetLoadBalancerSku() {
    this._loadBalancerSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSkuInput() {
    return this._loadBalancerSku;
  }

  // managed_identity - computed: false, optional: false, required: true
  private _managedIdentity?: string; 
  public get managedIdentity() {
    return this.getStringAttribute('managed_identity');
  }
  public set managedIdentity(value: string) {
    this._managedIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityInput() {
    return this._managedIdentity;
  }

  // multi_az - computed: false, optional: true, required: false
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
  private _pollingOptions = new DatalakeAzureDatalakePollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: DatalakeAzureDatalakePollingOptions) {
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
  private _recipes = new DatalakeAzureDatalakeRecipesList(this, "recipes", true);
  public get recipes() {
    return this._recipes;
  }
  public putRecipes(value: DatalakeAzureDatalakeRecipes[] | cdktf.IResolvable) {
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

  // scale - computed: false, optional: true, required: false
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

  // storage_location_base - computed: false, optional: false, required: true
  private _storageLocationBase?: string; 
  public get storageLocationBase() {
    return this.getStringAttribute('storage_location_base');
  }
  public set storageLocationBase(value: string) {
    this._storageLocationBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationBaseInput() {
    return this._storageLocationBase;
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
      database_type: cdktf.stringToTerraform(this._databaseType),
      datalake_name: cdktf.stringToTerraform(this._datalakeName),
      enable_ranger_raz: cdktf.booleanToTerraform(this._enableRangerRaz),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      flexible_server_delegated_subnet_id: cdktf.stringToTerraform(this._flexibleServerDelegatedSubnetId),
      image: datalakeAzureDatalakeImageToTerraform(this._image.internalValue),
      java_version: cdktf.numberToTerraform(this._javaVersion),
      load_balancer_sku: cdktf.stringToTerraform(this._loadBalancerSku),
      managed_identity: cdktf.stringToTerraform(this._managedIdentity),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      polling_options: datalakeAzureDatalakePollingOptionsToTerraform(this._pollingOptions.internalValue),
      recipes: cdktf.listMapper(datalakeAzureDatalakeRecipesToTerraform, false)(this._recipes.internalValue),
      runtime: cdktf.stringToTerraform(this._runtime),
      scale: cdktf.stringToTerraform(this._scale),
      storage_location_base: cdktf.stringToTerraform(this._storageLocationBase),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      flexible_server_delegated_subnet_id: {
        value: cdktf.stringToHclTerraform(this._flexibleServerDelegatedSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: datalakeAzureDatalakeImageToHclTerraform(this._image.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatalakeAzureDatalakeImage",
      },
      java_version: {
        value: cdktf.numberToHclTerraform(this._javaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balancer_sku: {
        value: cdktf.stringToHclTerraform(this._loadBalancerSku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_identity: {
        value: cdktf.stringToHclTerraform(this._managedIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_az: {
        value: cdktf.booleanToHclTerraform(this._multiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      polling_options: {
        value: datalakeAzureDatalakePollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatalakeAzureDatalakePollingOptions",
      },
      recipes: {
        value: cdktf.listMapperHcl(datalakeAzureDatalakeRecipesToHclTerraform, false)(this._recipes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatalakeAzureDatalakeRecipesList",
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
      storage_location_base: {
        value: cdktf.stringToHclTerraform(this._storageLocationBase),
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
