// https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceendpointAzurermConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Azure managementGroup Id which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#azurerm_management_group_id ServiceendpointAzurerm#azurerm_management_group_id}
  */
  readonly azurermManagementGroupId?: string;
  /**
  * The Azure managementGroup name which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#azurerm_management_group_name ServiceendpointAzurerm#azurerm_management_group_name}
  */
  readonly azurermManagementGroupName?: string;
  /**
  * The service principal tenant id which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#azurerm_spn_tenantid ServiceendpointAzurerm#azurerm_spn_tenantid}
  */
  readonly azurermSpnTenantid: string;
  /**
  * The Azure subscription Id which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#azurerm_subscription_id ServiceendpointAzurerm#azurerm_subscription_id}
  */
  readonly azurermSubscriptionId?: string;
  /**
  * The Azure subscription name which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#azurerm_subscription_name ServiceendpointAzurerm#azurerm_subscription_name}
  */
  readonly azurermSubscriptionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#description ServiceendpointAzurerm#description}
  */
  readonly description?: string;
  /**
  * Environment (Azure Cloud type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#environment ServiceendpointAzurerm#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#id ServiceendpointAzurerm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#project_id ServiceendpointAzurerm#project_id}
  */
  readonly projectId: string;
  /**
  * Scope Resource Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#resource_group ServiceendpointAzurerm#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#server_url ServiceendpointAzurerm#server_url}
  */
  readonly serverUrl?: string;
  /**
  * The AzureRM Service Endpoint Authentication Scheme, this can be 'WorkloadIdentityFederation', 'ManagedServiceIdentity' or 'ServicePrincipal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#service_endpoint_authentication_scheme ServiceendpointAzurerm#service_endpoint_authentication_scheme}
  */
  readonly serviceEndpointAuthenticationScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#service_endpoint_name ServiceendpointAzurerm#service_endpoint_name}
  */
  readonly serviceEndpointName: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#credentials ServiceendpointAzurerm#credentials}
  */
  readonly credentials?: ServiceendpointAzurermCredentials;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#features ServiceendpointAzurerm#features}
  */
  readonly features?: ServiceendpointAzurermFeatures;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#timeouts ServiceendpointAzurerm#timeouts}
  */
  readonly timeouts?: ServiceendpointAzurermTimeouts;
}
export interface ServiceendpointAzurermCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#serviceprincipalcertificate ServiceendpointAzurerm#serviceprincipalcertificate}
  */
  readonly serviceprincipalcertificate?: string;
  /**
  * The service principal id which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#serviceprincipalid ServiceendpointAzurerm#serviceprincipalid}
  */
  readonly serviceprincipalid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#serviceprincipalkey ServiceendpointAzurerm#serviceprincipalkey}
  */
  readonly serviceprincipalkey?: string;
}

export function serviceendpointAzurermCredentialsToTerraform(struct?: ServiceendpointAzurermCredentialsOutputReference | ServiceendpointAzurermCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serviceprincipalcertificate: cdktf.stringToTerraform(struct!.serviceprincipalcertificate),
    serviceprincipalid: cdktf.stringToTerraform(struct!.serviceprincipalid),
    serviceprincipalkey: cdktf.stringToTerraform(struct!.serviceprincipalkey),
  }
}


export function serviceendpointAzurermCredentialsToHclTerraform(struct?: ServiceendpointAzurermCredentialsOutputReference | ServiceendpointAzurermCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serviceprincipalcertificate: {
      value: cdktf.stringToHclTerraform(struct!.serviceprincipalcertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serviceprincipalid: {
      value: cdktf.stringToHclTerraform(struct!.serviceprincipalid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serviceprincipalkey: {
      value: cdktf.stringToHclTerraform(struct!.serviceprincipalkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointAzurermCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointAzurermCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceprincipalcertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceprincipalcertificate = this._serviceprincipalcertificate;
    }
    if (this._serviceprincipalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceprincipalid = this._serviceprincipalid;
    }
    if (this._serviceprincipalkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceprincipalkey = this._serviceprincipalkey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointAzurermCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceprincipalcertificate = undefined;
      this._serviceprincipalid = undefined;
      this._serviceprincipalkey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceprincipalcertificate = value.serviceprincipalcertificate;
      this._serviceprincipalid = value.serviceprincipalid;
      this._serviceprincipalkey = value.serviceprincipalkey;
    }
  }

  // serviceprincipalcertificate - computed: false, optional: true, required: false
  private _serviceprincipalcertificate?: string; 
  public get serviceprincipalcertificate() {
    return this.getStringAttribute('serviceprincipalcertificate');
  }
  public set serviceprincipalcertificate(value: string) {
    this._serviceprincipalcertificate = value;
  }
  public resetServiceprincipalcertificate() {
    this._serviceprincipalcertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceprincipalcertificateInput() {
    return this._serviceprincipalcertificate;
  }

  // serviceprincipalid - computed: false, optional: false, required: true
  private _serviceprincipalid?: string; 
  public get serviceprincipalid() {
    return this.getStringAttribute('serviceprincipalid');
  }
  public set serviceprincipalid(value: string) {
    this._serviceprincipalid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceprincipalidInput() {
    return this._serviceprincipalid;
  }

  // serviceprincipalkey - computed: false, optional: true, required: false
  private _serviceprincipalkey?: string; 
  public get serviceprincipalkey() {
    return this.getStringAttribute('serviceprincipalkey');
  }
  public set serviceprincipalkey(value: string) {
    this._serviceprincipalkey = value;
  }
  public resetServiceprincipalkey() {
    this._serviceprincipalkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceprincipalkeyInput() {
    return this._serviceprincipalkey;
  }
}
export interface ServiceendpointAzurermFeatures {
  /**
  * Whether or not to validate connection with azure after create or update operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#validate ServiceendpointAzurerm#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
}

export function serviceendpointAzurermFeaturesToTerraform(struct?: ServiceendpointAzurermFeaturesOutputReference | ServiceendpointAzurermFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validate: cdktf.booleanToTerraform(struct!.validate),
  }
}


export function serviceendpointAzurermFeaturesToHclTerraform(struct?: ServiceendpointAzurermFeaturesOutputReference | ServiceendpointAzurermFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validate: {
      value: cdktf.booleanToHclTerraform(struct!.validate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointAzurermFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointAzurermFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointAzurermFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validate = value.validate;
    }
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }
}
export interface ServiceendpointAzurermTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#create ServiceendpointAzurerm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#delete ServiceendpointAzurerm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#read ServiceendpointAzurerm#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#update ServiceendpointAzurerm#update}
  */
  readonly update?: string;
}

export function serviceendpointAzurermTimeoutsToTerraform(struct?: ServiceendpointAzurermTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serviceendpointAzurermTimeoutsToHclTerraform(struct?: ServiceendpointAzurermTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class ServiceendpointAzurermTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceendpointAzurermTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointAzurermTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._delete = value.delete;
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm azuredevops_serviceendpoint_azurerm}
*/
export class ServiceendpointAzurerm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_azurerm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceendpointAzurerm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceendpointAzurerm to import
  * @param importFromId The id of the existing ServiceendpointAzurerm that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceendpointAzurerm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_azurerm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_azurerm azuredevops_serviceendpoint_azurerm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceendpointAzurermConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceendpointAzurermConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_azurerm',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azurermManagementGroupId = config.azurermManagementGroupId;
    this._azurermManagementGroupName = config.azurermManagementGroupName;
    this._azurermSpnTenantid = config.azurermSpnTenantid;
    this._azurermSubscriptionId = config.azurermSubscriptionId;
    this._azurermSubscriptionName = config.azurermSubscriptionName;
    this._description = config.description;
    this._environment = config.environment;
    this._id = config.id;
    this._projectId = config.projectId;
    this._resourceGroup = config.resourceGroup;
    this._serverUrl = config.serverUrl;
    this._serviceEndpointAuthenticationScheme = config.serviceEndpointAuthenticationScheme;
    this._serviceEndpointName = config.serviceEndpointName;
    this._credentials.internalValue = config.credentials;
    this._features.internalValue = config.features;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization - computed: true, optional: false, required: false
  private _authorization = new cdktf.StringMap(this, "authorization");
  public get authorization() {
    return this._authorization;
  }

  // azurerm_management_group_id - computed: false, optional: true, required: false
  private _azurermManagementGroupId?: string; 
  public get azurermManagementGroupId() {
    return this.getStringAttribute('azurerm_management_group_id');
  }
  public set azurermManagementGroupId(value: string) {
    this._azurermManagementGroupId = value;
  }
  public resetAzurermManagementGroupId() {
    this._azurermManagementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurermManagementGroupIdInput() {
    return this._azurermManagementGroupId;
  }

  // azurerm_management_group_name - computed: false, optional: true, required: false
  private _azurermManagementGroupName?: string; 
  public get azurermManagementGroupName() {
    return this.getStringAttribute('azurerm_management_group_name');
  }
  public set azurermManagementGroupName(value: string) {
    this._azurermManagementGroupName = value;
  }
  public resetAzurermManagementGroupName() {
    this._azurermManagementGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurermManagementGroupNameInput() {
    return this._azurermManagementGroupName;
  }

  // azurerm_spn_tenantid - computed: false, optional: false, required: true
  private _azurermSpnTenantid?: string; 
  public get azurermSpnTenantid() {
    return this.getStringAttribute('azurerm_spn_tenantid');
  }
  public set azurermSpnTenantid(value: string) {
    this._azurermSpnTenantid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azurermSpnTenantidInput() {
    return this._azurermSpnTenantid;
  }

  // azurerm_subscription_id - computed: false, optional: true, required: false
  private _azurermSubscriptionId?: string; 
  public get azurermSubscriptionId() {
    return this.getStringAttribute('azurerm_subscription_id');
  }
  public set azurermSubscriptionId(value: string) {
    this._azurermSubscriptionId = value;
  }
  public resetAzurermSubscriptionId() {
    this._azurermSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurermSubscriptionIdInput() {
    return this._azurermSubscriptionId;
  }

  // azurerm_subscription_name - computed: false, optional: true, required: false
  private _azurermSubscriptionName?: string; 
  public get azurermSubscriptionName() {
    return this.getStringAttribute('azurerm_subscription_name');
  }
  public set azurermSubscriptionName(value: string) {
    this._azurermSubscriptionName = value;
  }
  public resetAzurermSubscriptionName() {
    this._azurermSubscriptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurermSubscriptionNameInput() {
    return this._azurermSubscriptionName;
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

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // server_url - computed: true, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // service_endpoint_authentication_scheme - computed: false, optional: true, required: false
  private _serviceEndpointAuthenticationScheme?: string; 
  public get serviceEndpointAuthenticationScheme() {
    return this.getStringAttribute('service_endpoint_authentication_scheme');
  }
  public set serviceEndpointAuthenticationScheme(value: string) {
    this._serviceEndpointAuthenticationScheme = value;
  }
  public resetServiceEndpointAuthenticationScheme() {
    this._serviceEndpointAuthenticationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointAuthenticationSchemeInput() {
    return this._serviceEndpointAuthenticationScheme;
  }

  // service_endpoint_name - computed: false, optional: false, required: true
  private _serviceEndpointName?: string; 
  public get serviceEndpointName() {
    return this.getStringAttribute('service_endpoint_name');
  }
  public set serviceEndpointName(value: string) {
    this._serviceEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointNameInput() {
    return this._serviceEndpointName;
  }

  // service_principal_id - computed: true, optional: false, required: false
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }

  // workload_identity_federation_issuer - computed: true, optional: false, required: false
  public get workloadIdentityFederationIssuer() {
    return this.getStringAttribute('workload_identity_federation_issuer');
  }

  // workload_identity_federation_subject - computed: true, optional: false, required: false
  public get workloadIdentityFederationSubject() {
    return this.getStringAttribute('workload_identity_federation_subject');
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new ServiceendpointAzurermCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ServiceendpointAzurermCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new ServiceendpointAzurermFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: ServiceendpointAzurermFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceendpointAzurermTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceendpointAzurermTimeouts) {
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
      azurerm_management_group_id: cdktf.stringToTerraform(this._azurermManagementGroupId),
      azurerm_management_group_name: cdktf.stringToTerraform(this._azurermManagementGroupName),
      azurerm_spn_tenantid: cdktf.stringToTerraform(this._azurermSpnTenantid),
      azurerm_subscription_id: cdktf.stringToTerraform(this._azurermSubscriptionId),
      azurerm_subscription_name: cdktf.stringToTerraform(this._azurermSubscriptionName),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      service_endpoint_authentication_scheme: cdktf.stringToTerraform(this._serviceEndpointAuthenticationScheme),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      credentials: serviceendpointAzurermCredentialsToTerraform(this._credentials.internalValue),
      features: serviceendpointAzurermFeaturesToTerraform(this._features.internalValue),
      timeouts: serviceendpointAzurermTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azurerm_management_group_id: {
        value: cdktf.stringToHclTerraform(this._azurermManagementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurerm_management_group_name: {
        value: cdktf.stringToHclTerraform(this._azurermManagementGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurerm_spn_tenantid: {
        value: cdktf.stringToHclTerraform(this._azurermSpnTenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurerm_subscription_id: {
        value: cdktf.stringToHclTerraform(this._azurermSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azurerm_subscription_name: {
        value: cdktf.stringToHclTerraform(this._azurermSubscriptionName),
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
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_authentication_scheme: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointAuthenticationScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: serviceendpointAzurermCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointAzurermCredentialsList",
      },
      features: {
        value: serviceendpointAzurermFeaturesToHclTerraform(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointAzurermFeaturesList",
      },
      timeouts: {
        value: serviceendpointAzurermTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceendpointAzurermTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
