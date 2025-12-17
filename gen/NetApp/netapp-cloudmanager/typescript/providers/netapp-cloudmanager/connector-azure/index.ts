// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#account_id ConnectorAzure#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#admin_password ConnectorAzure#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#admin_username ConnectorAzure#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#associate_public_ip_address ConnectorAzure#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#company ConnectorAzure#company}
  */
  readonly company: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#id ConnectorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#location ConnectorAzure#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#name ConnectorAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#network_security_group_name ConnectorAzure#network_security_group_name}
  */
  readonly networkSecurityGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#network_security_resource_group ConnectorAzure#network_security_resource_group}
  */
  readonly networkSecurityResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#principal_id ConnectorAzure#principal_id}
  */
  readonly principalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#proxy_certificates ConnectorAzure#proxy_certificates}
  */
  readonly proxyCertificates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#proxy_password ConnectorAzure#proxy_password}
  */
  readonly proxyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#proxy_url ConnectorAzure#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#proxy_user_name ConnectorAzure#proxy_user_name}
  */
  readonly proxyUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#resource_group ConnectorAzure#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#storage_account ConnectorAzure#storage_account}
  */
  readonly storageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#subnet_id ConnectorAzure#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#subscription_id ConnectorAzure#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#virtual_machine_size ConnectorAzure#virtual_machine_size}
  */
  readonly virtualMachineSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#vnet_id ConnectorAzure#vnet_id}
  */
  readonly vnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#vnet_resource_group ConnectorAzure#vnet_resource_group}
  */
  readonly vnetResourceGroup?: string;
  /**
  * azure_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#azure_tag ConnectorAzure#azure_tag}
  */
  readonly azureTag?: ConnectorAzureAzureTag[] | cdktf.IResolvable;
}
export interface ConnectorAzureAzureTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#tag_key ConnectorAzure#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#tag_value ConnectorAzure#tag_value}
  */
  readonly tagValue: string;
}

export function connectorAzureAzureTagToTerraform(struct?: ConnectorAzureAzureTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function connectorAzureAzureTagToHclTerraform(struct?: ConnectorAzureAzureTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAzureAzureTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAzureAzureTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAzureAzureTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class ConnectorAzureAzureTagList extends cdktf.ComplexList {
  public internalValue? : ConnectorAzureAzureTag[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAzureAzureTagOutputReference {
    return new ConnectorAzureAzureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure netapp-cloudmanager_connector_azure}
*/
export class ConnectorAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_connector_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorAzure to import
  * @param importFromId The id of the existing ConnectorAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_connector_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_azure netapp-cloudmanager_connector_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorAzureConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_connector_azure',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '27.0.0',
        providerVersionConstraint: '27.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._associatePublicIpAddress = config.associatePublicIpAddress;
    this._company = config.company;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._networkSecurityGroupName = config.networkSecurityGroupName;
    this._networkSecurityResourceGroup = config.networkSecurityResourceGroup;
    this._principalId = config.principalId;
    this._proxyCertificates = config.proxyCertificates;
    this._proxyPassword = config.proxyPassword;
    this._proxyUrl = config.proxyUrl;
    this._proxyUserName = config.proxyUserName;
    this._resourceGroup = config.resourceGroup;
    this._storageAccount = config.storageAccount;
    this._subnetId = config.subnetId;
    this._subscriptionId = config.subscriptionId;
    this._virtualMachineSize = config.virtualMachineSize;
    this._vnetId = config.vnetId;
    this._vnetResourceGroup = config.vnetResourceGroup;
    this._azureTag.internalValue = config.azureTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
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

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean | cdktf.IResolvable; 
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | cdktf.IResolvable) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // company - computed: false, optional: false, required: true
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // network_security_group_name - computed: false, optional: false, required: true
  private _networkSecurityGroupName?: string; 
  public get networkSecurityGroupName() {
    return this.getStringAttribute('network_security_group_name');
  }
  public set networkSecurityGroupName(value: string) {
    this._networkSecurityGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupNameInput() {
    return this._networkSecurityGroupName;
  }

  // network_security_resource_group - computed: false, optional: true, required: false
  private _networkSecurityResourceGroup?: string; 
  public get networkSecurityResourceGroup() {
    return this.getStringAttribute('network_security_resource_group');
  }
  public set networkSecurityResourceGroup(value: string) {
    this._networkSecurityResourceGroup = value;
  }
  public resetNetworkSecurityResourceGroup() {
    this._networkSecurityResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityResourceGroupInput() {
    return this._networkSecurityResourceGroup;
  }

  // principal_id - computed: true, optional: true, required: false
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // proxy_certificates - computed: false, optional: true, required: false
  private _proxyCertificates?: string[]; 
  public get proxyCertificates() {
    return this.getListAttribute('proxy_certificates');
  }
  public set proxyCertificates(value: string[]) {
    this._proxyCertificates = value;
  }
  public resetProxyCertificates() {
    this._proxyCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCertificatesInput() {
    return this._proxyCertificates;
  }

  // proxy_password - computed: false, optional: true, required: false
  private _proxyPassword?: string; 
  public get proxyPassword() {
    return this.getStringAttribute('proxy_password');
  }
  public set proxyPassword(value: string) {
    this._proxyPassword = value;
  }
  public resetProxyPassword() {
    this._proxyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPasswordInput() {
    return this._proxyPassword;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // proxy_user_name - computed: false, optional: true, required: false
  private _proxyUserName?: string; 
  public get proxyUserName() {
    return this.getStringAttribute('proxy_user_name');
  }
  public set proxyUserName(value: string) {
    this._proxyUserName = value;
  }
  public resetProxyUserName() {
    this._proxyUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUserNameInput() {
    return this._proxyUserName;
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

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  public resetStorageAccount() {
    this._storageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // virtual_machine_size - computed: false, optional: true, required: false
  private _virtualMachineSize?: string; 
  public get virtualMachineSize() {
    return this.getStringAttribute('virtual_machine_size');
  }
  public set virtualMachineSize(value: string) {
    this._virtualMachineSize = value;
  }
  public resetVirtualMachineSize() {
    this._virtualMachineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineSizeInput() {
    return this._virtualMachineSize;
  }

  // vnet_id - computed: false, optional: false, required: true
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: string; 
  public get vnetResourceGroup() {
    return this.getStringAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: string) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }

  // azure_tag - computed: false, optional: true, required: false
  private _azureTag = new ConnectorAzureAzureTagList(this, "azure_tag", true);
  public get azureTag() {
    return this._azureTag;
  }
  public putAzureTag(value: ConnectorAzureAzureTag[] | cdktf.IResolvable) {
    this._azureTag.internalValue = value;
  }
  public resetAzureTag() {
    this._azureTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTagInput() {
    return this._azureTag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
      company: cdktf.stringToTerraform(this._company),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_security_group_name: cdktf.stringToTerraform(this._networkSecurityGroupName),
      network_security_resource_group: cdktf.stringToTerraform(this._networkSecurityResourceGroup),
      principal_id: cdktf.stringToTerraform(this._principalId),
      proxy_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proxyCertificates),
      proxy_password: cdktf.stringToTerraform(this._proxyPassword),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      proxy_user_name: cdktf.stringToTerraform(this._proxyUserName),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      storage_account: cdktf.stringToTerraform(this._storageAccount),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      virtual_machine_size: cdktf.stringToTerraform(this._virtualMachineSize),
      vnet_id: cdktf.stringToTerraform(this._vnetId),
      vnet_resource_group: cdktf.stringToTerraform(this._vnetResourceGroup),
      azure_tag: cdktf.listMapper(connectorAzureAzureTagToTerraform, true)(this._azureTag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_username: {
        value: cdktf.stringToHclTerraform(this._adminUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associate_public_ip_address: {
        value: cdktf.booleanToHclTerraform(this._associatePublicIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      network_security_group_name: {
        value: cdktf.stringToHclTerraform(this._networkSecurityGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_security_resource_group: {
        value: cdktf.stringToHclTerraform(this._networkSecurityResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_id: {
        value: cdktf.stringToHclTerraform(this._principalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proxyCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      proxy_password: {
        value: cdktf.stringToHclTerraform(this._proxyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_user_name: {
        value: cdktf.stringToHclTerraform(this._proxyUserName),
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
      storage_account: {
        value: cdktf.stringToHclTerraform(this._storageAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_machine_size: {
        value: cdktf.stringToHclTerraform(this._virtualMachineSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_id: {
        value: cdktf.stringToHclTerraform(this._vnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_resource_group: {
        value: cdktf.stringToHclTerraform(this._vnetResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tag: {
        value: cdktf.listMapperHcl(connectorAzureAzureTagToHclTerraform, true)(this._azureTag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorAzureAzureTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
