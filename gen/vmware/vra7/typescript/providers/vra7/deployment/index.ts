// https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#businessgroup_id Deployment#businessgroup_id}
  */
  readonly businessgroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#businessgroup_name Deployment#businessgroup_name}
  */
  readonly businessgroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#catalog_item_id Deployment#catalog_item_id}
  */
  readonly catalogItemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#catalog_item_name Deployment#catalog_item_name}
  */
  readonly catalogItemName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#deployment_configuration Deployment#deployment_configuration}
  */
  readonly deploymentConfiguration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#deployment_destroy Deployment#deployment_destroy}
  */
  readonly deploymentDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#deployment_destroy_action Deployment#deployment_destroy_action}
  */
  readonly deploymentDestroyAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#description Deployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#expiry_date Deployment#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#id Deployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#lease_days Deployment#lease_days}
  */
  readonly leaseDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#reasons Deployment#reasons}
  */
  readonly reasons?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#wait_timeout Deployment#wait_timeout}
  */
  readonly waitTimeout?: number;
  /**
  * resource_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#resource_configuration Deployment#resource_configuration}
  */
  readonly resourceConfiguration?: DeploymentResourceConfiguration[] | cdktf.IResolvable;
}
export interface DeploymentOwners {
}

export function deploymentOwnersToTerraform(struct?: DeploymentOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentOwnersToHclTerraform(struct?: DeploymentOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentOwnersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentOwners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentOwners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DeploymentOwnersList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentOwnersOutputReference {
    return new DeploymentOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentResourceConfigurationInstances {
}

export function deploymentResourceConfigurationInstancesToTerraform(struct?: DeploymentResourceConfigurationInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentResourceConfigurationInstancesToHclTerraform(struct?: DeploymentResourceConfigurationInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentResourceConfigurationInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentResourceConfigurationInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentResourceConfigurationInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DeploymentResourceConfigurationInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentResourceConfigurationInstancesOutputReference {
    return new DeploymentResourceConfigurationInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentResourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#cluster Deployment#cluster}
  */
  readonly cluster?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#component_name Deployment#component_name}
  */
  readonly componentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#configuration Deployment#configuration}
  */
  readonly configuration?: { [key: string]: string };
}

export function deploymentResourceConfigurationToTerraform(struct?: DeploymentResourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.numberToTerraform(struct!.cluster),
    component_name: cdktf.stringToTerraform(struct!.componentName),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
  }
}


export function deploymentResourceConfigurationToHclTerraform(struct?: DeploymentResourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.numberToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    component_name: {
      value: cdktf.stringToHclTerraform(struct!.componentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentResourceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentResourceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._componentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentName = this._componentName;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentResourceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._componentName = undefined;
      this._configuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._componentName = value.componentName;
      this._configuration = value.configuration;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: number; 
  public get cluster() {
    return this.getNumberAttribute('cluster');
  }
  public set cluster(value: number) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // component_name - computed: false, optional: false, required: true
  private _componentName?: string; 
  public get componentName() {
    return this.getStringAttribute('component_name');
  }
  public set componentName(value: string) {
    this._componentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentNameInput() {
    return this._componentName;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DeploymentResourceConfigurationInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // parent_resource_id - computed: true, optional: false, required: false
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
}

export class DeploymentResourceConfigurationList extends cdktf.ComplexList {
  public internalValue? : DeploymentResourceConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DeploymentResourceConfigurationOutputReference {
    return new DeploymentResourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment vra7_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra7_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deployment to import
  * @param importFromId The id of the existing Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra7_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs/resources/deployment vra7_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vra7_deployment',
      terraformGeneratorMetadata: {
        providerName: 'vra7',
        providerVersion: '3.0.15',
        providerVersionConstraint: '3.0.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._businessgroupId = config.businessgroupId;
    this._businessgroupName = config.businessgroupName;
    this._catalogItemId = config.catalogItemId;
    this._catalogItemName = config.catalogItemName;
    this._deploymentConfiguration = config.deploymentConfiguration;
    this._deploymentDestroy = config.deploymentDestroy;
    this._deploymentDestroyAction = config.deploymentDestroyAction;
    this._description = config.description;
    this._expiryDate = config.expiryDate;
    this._id = config.id;
    this._leaseDays = config.leaseDays;
    this._reasons = config.reasons;
    this._waitTimeout = config.waitTimeout;
    this._resourceConfiguration.internalValue = config.resourceConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // businessgroup_id - computed: true, optional: true, required: false
  private _businessgroupId?: string; 
  public get businessgroupId() {
    return this.getStringAttribute('businessgroup_id');
  }
  public set businessgroupId(value: string) {
    this._businessgroupId = value;
  }
  public resetBusinessgroupId() {
    this._businessgroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessgroupIdInput() {
    return this._businessgroupId;
  }

  // businessgroup_name - computed: true, optional: true, required: false
  private _businessgroupName?: string; 
  public get businessgroupName() {
    return this.getStringAttribute('businessgroup_name');
  }
  public set businessgroupName(value: string) {
    this._businessgroupName = value;
  }
  public resetBusinessgroupName() {
    this._businessgroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessgroupNameInput() {
    return this._businessgroupName;
  }

  // catalog_item_id - computed: true, optional: true, required: false
  private _catalogItemId?: string; 
  public get catalogItemId() {
    return this.getStringAttribute('catalog_item_id');
  }
  public set catalogItemId(value: string) {
    this._catalogItemId = value;
  }
  public resetCatalogItemId() {
    this._catalogItemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogItemIdInput() {
    return this._catalogItemId;
  }

  // catalog_item_name - computed: false, optional: true, required: false
  private _catalogItemName?: string; 
  public get catalogItemName() {
    return this.getStringAttribute('catalog_item_name');
  }
  public set catalogItemName(value: string) {
    this._catalogItemName = value;
  }
  public resetCatalogItemName() {
    this._catalogItemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogItemNameInput() {
    return this._catalogItemName;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // deployment_configuration - computed: false, optional: true, required: false
  private _deploymentConfiguration?: { [key: string]: string }; 
  public get deploymentConfiguration() {
    return this.getStringMapAttribute('deployment_configuration');
  }
  public set deploymentConfiguration(value: { [key: string]: string }) {
    this._deploymentConfiguration = value;
  }
  public resetDeploymentConfiguration() {
    this._deploymentConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigurationInput() {
    return this._deploymentConfiguration;
  }

  // deployment_destroy - computed: false, optional: true, required: false
  private _deploymentDestroy?: boolean | cdktf.IResolvable; 
  public get deploymentDestroy() {
    return this.getBooleanAttribute('deployment_destroy');
  }
  public set deploymentDestroy(value: boolean | cdktf.IResolvable) {
    this._deploymentDestroy = value;
  }
  public resetDeploymentDestroy() {
    this._deploymentDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentDestroyInput() {
    return this._deploymentDestroy;
  }

  // deployment_destroy_action - computed: false, optional: true, required: false
  private _deploymentDestroyAction?: string; 
  public get deploymentDestroyAction() {
    return this.getStringAttribute('deployment_destroy_action');
  }
  public set deploymentDestroyAction(value: string) {
    this._deploymentDestroyAction = value;
  }
  public resetDeploymentDestroyAction() {
    this._deploymentDestroyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentDestroyActionInput() {
    return this._deploymentDestroyAction;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
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

  // expiry_date - computed: true, optional: true, required: false
  private _expiryDate?: string; 
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }
  public set expiryDate(value: string) {
    this._expiryDate = value;
  }
  public resetExpiryDate() {
    this._expiryDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryDateInput() {
    return this._expiryDate;
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

  // lease_days - computed: true, optional: true, required: false
  private _leaseDays?: number; 
  public get leaseDays() {
    return this.getNumberAttribute('lease_days');
  }
  public set leaseDays(value: number) {
    this._leaseDays = value;
  }
  public resetLeaseDays() {
    this._leaseDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseDaysInput() {
    return this._leaseDays;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owners - computed: true, optional: false, required: false
  private _owners = new DeploymentOwnersList(this, "owners", false);
  public get owners() {
    return this._owners;
  }

  // reasons - computed: false, optional: true, required: false
  private _reasons?: string; 
  public get reasons() {
    return this.getStringAttribute('reasons');
  }
  public set reasons(value: string) {
    this._reasons = value;
  }
  public resetReasons() {
    this._reasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonsInput() {
    return this._reasons;
  }

  // request_status - computed: true, optional: false, required: false
  public get requestStatus() {
    return this.getStringAttribute('request_status');
  }

  // wait_timeout - computed: false, optional: true, required: false
  private _waitTimeout?: number; 
  public get waitTimeout() {
    return this.getNumberAttribute('wait_timeout');
  }
  public set waitTimeout(value: number) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }

  // resource_configuration - computed: false, optional: true, required: false
  private _resourceConfiguration = new DeploymentResourceConfigurationList(this, "resource_configuration", true);
  public get resourceConfiguration() {
    return this._resourceConfiguration;
  }
  public putResourceConfiguration(value: DeploymentResourceConfiguration[] | cdktf.IResolvable) {
    this._resourceConfiguration.internalValue = value;
  }
  public resetResourceConfiguration() {
    this._resourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationInput() {
    return this._resourceConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      businessgroup_id: cdktf.stringToTerraform(this._businessgroupId),
      businessgroup_name: cdktf.stringToTerraform(this._businessgroupName),
      catalog_item_id: cdktf.stringToTerraform(this._catalogItemId),
      catalog_item_name: cdktf.stringToTerraform(this._catalogItemName),
      deployment_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._deploymentConfiguration),
      deployment_destroy: cdktf.booleanToTerraform(this._deploymentDestroy),
      deployment_destroy_action: cdktf.stringToTerraform(this._deploymentDestroyAction),
      description: cdktf.stringToTerraform(this._description),
      expiry_date: cdktf.stringToTerraform(this._expiryDate),
      id: cdktf.stringToTerraform(this._id),
      lease_days: cdktf.numberToTerraform(this._leaseDays),
      reasons: cdktf.stringToTerraform(this._reasons),
      wait_timeout: cdktf.numberToTerraform(this._waitTimeout),
      resource_configuration: cdktf.listMapper(deploymentResourceConfigurationToTerraform, true)(this._resourceConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      businessgroup_id: {
        value: cdktf.stringToHclTerraform(this._businessgroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      businessgroup_name: {
        value: cdktf.stringToHclTerraform(this._businessgroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_item_id: {
        value: cdktf.stringToHclTerraform(this._catalogItemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_item_name: {
        value: cdktf.stringToHclTerraform(this._catalogItemName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._deploymentConfiguration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deployment_destroy: {
        value: cdktf.booleanToHclTerraform(this._deploymentDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_destroy_action: {
        value: cdktf.stringToHclTerraform(this._deploymentDestroyAction),
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
      expiry_date: {
        value: cdktf.stringToHclTerraform(this._expiryDate),
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
      lease_days: {
        value: cdktf.numberToHclTerraform(this._leaseDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reasons: {
        value: cdktf.stringToHclTerraform(this._reasons),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_timeout: {
        value: cdktf.numberToHclTerraform(this._waitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_configuration: {
        value: cdktf.listMapperHcl(deploymentResourceConfigurationToHclTerraform, true)(this._resourceConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeploymentResourceConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
