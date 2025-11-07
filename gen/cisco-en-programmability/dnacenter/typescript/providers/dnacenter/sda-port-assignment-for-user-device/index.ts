// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdaPortAssignmentForUserDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#id SdaPortAssignmentForUserDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#parameters SdaPortAssignmentForUserDevice#parameters}
  */
  readonly parameters?: SdaPortAssignmentForUserDeviceParameters[] | cdktf.IResolvable;
}
export interface SdaPortAssignmentForUserDeviceItem {
}

export function sdaPortAssignmentForUserDeviceItemToTerraform(struct?: SdaPortAssignmentForUserDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaPortAssignmentForUserDeviceItemToHclTerraform(struct?: SdaPortAssignmentForUserDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaPortAssignmentForUserDeviceItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaPortAssignmentForUserDeviceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaPortAssignmentForUserDeviceItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authenticate_template_name - computed: true, optional: false, required: false
  public get authenticateTemplateName() {
    return this.getStringAttribute('authenticate_template_name');
  }

  // data_ip_address_pool_name - computed: true, optional: false, required: false
  public get dataIpAddressPoolName() {
    return this.getStringAttribute('data_ip_address_pool_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_management_ip_address - computed: true, optional: false, required: false
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // scalable_group_name - computed: true, optional: false, required: false
  public get scalableGroupName() {
    return this.getStringAttribute('scalable_group_name');
  }

  // site_name_hierarchy - computed: true, optional: false, required: false
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // voice_ip_address_pool_name - computed: true, optional: false, required: false
  public get voiceIpAddressPoolName() {
    return this.getStringAttribute('voice_ip_address_pool_name');
  }
}

export class SdaPortAssignmentForUserDeviceItemList extends cdktf.ComplexList {

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
  public get(index: number): SdaPortAssignmentForUserDeviceItemOutputReference {
    return new SdaPortAssignmentForUserDeviceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaPortAssignmentForUserDeviceParameters {
  /**
  * Authenticate TemplateName associated with siteNameHierarchy
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#authenticate_template_name SdaPortAssignmentForUserDevice#authenticate_template_name}
  */
  readonly authenticateTemplateName?: string;
  /**
  * Ip Pool Name, that is assigned to virtual network with traffic type as DATA(can't be empty if voiceIpAddressPoolName is empty)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#data_ip_address_pool_name SdaPortAssignmentForUserDevice#data_ip_address_pool_name}
  */
  readonly dataIpAddressPoolName?: string;
  /**
  * Management Ip Address of the Edge Node Device.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#device_management_ip_address SdaPortAssignmentForUserDevice#device_management_ip_address}
  */
  readonly deviceManagementIpAddress?: string;
  /**
  * User defined text message for port assignment
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#interface_description SdaPortAssignmentForUserDevice#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Interface Name on the Edge Node Device.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#interface_name SdaPortAssignmentForUserDevice#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * List of Interface Names on the Edge Node Device. E.g.["GigabitEthernet1/0/3","GigabitEthernet1/0/4"] 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#interface_names SdaPortAssignmentForUserDevice#interface_names}
  */
  readonly interfaceNames?: string[];
  /**
  * Scalable Group name associated with VN
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#scalable_group_name SdaPortAssignmentForUserDevice#scalable_group_name}
  */
  readonly scalableGroupName?: string;
  /**
  * Complete Path of SD-Access Fabric Site.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#site_name_hierarchy SdaPortAssignmentForUserDevice#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
  /**
  * Ip Pool Name, that is assigned to virtual network with traffic type as VOICE(can't be empty if dataIpAddressPoolName is empty)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#voice_ip_address_pool_name SdaPortAssignmentForUserDevice#voice_ip_address_pool_name}
  */
  readonly voiceIpAddressPoolName?: string;
}

export function sdaPortAssignmentForUserDeviceParametersToTerraform(struct?: SdaPortAssignmentForUserDeviceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_template_name: cdktf.stringToTerraform(struct!.authenticateTemplateName),
    data_ip_address_pool_name: cdktf.stringToTerraform(struct!.dataIpAddressPoolName),
    device_management_ip_address: cdktf.stringToTerraform(struct!.deviceManagementIpAddress),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interfaceNames),
    scalable_group_name: cdktf.stringToTerraform(struct!.scalableGroupName),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
    voice_ip_address_pool_name: cdktf.stringToTerraform(struct!.voiceIpAddressPoolName),
  }
}


export function sdaPortAssignmentForUserDeviceParametersToHclTerraform(struct?: SdaPortAssignmentForUserDeviceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_template_name: {
      value: cdktf.stringToHclTerraform(struct!.authenticateTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_ip_address_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataIpAddressPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_management_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.deviceManagementIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_description: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interfaceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scalable_group_name: {
      value: cdktf.stringToHclTerraform(struct!.scalableGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.siteNameHierarchy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voice_ip_address_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.voiceIpAddressPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaPortAssignmentForUserDeviceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaPortAssignmentForUserDeviceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateTemplateName = this._authenticateTemplateName;
    }
    if (this._dataIpAddressPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataIpAddressPoolName = this._dataIpAddressPoolName;
    }
    if (this._deviceManagementIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceManagementIpAddress = this._deviceManagementIpAddress;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNames = this._interfaceNames;
    }
    if (this._scalableGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableGroupName = this._scalableGroupName;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    if (this._voiceIpAddressPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceIpAddressPoolName = this._voiceIpAddressPoolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaPortAssignmentForUserDeviceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateTemplateName = undefined;
      this._dataIpAddressPoolName = undefined;
      this._deviceManagementIpAddress = undefined;
      this._interfaceDescription = undefined;
      this._interfaceName = undefined;
      this._interfaceNames = undefined;
      this._scalableGroupName = undefined;
      this._siteNameHierarchy = undefined;
      this._voiceIpAddressPoolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateTemplateName = value.authenticateTemplateName;
      this._dataIpAddressPoolName = value.dataIpAddressPoolName;
      this._deviceManagementIpAddress = value.deviceManagementIpAddress;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceName = value.interfaceName;
      this._interfaceNames = value.interfaceNames;
      this._scalableGroupName = value.scalableGroupName;
      this._siteNameHierarchy = value.siteNameHierarchy;
      this._voiceIpAddressPoolName = value.voiceIpAddressPoolName;
    }
  }

  // authenticate_template_name - computed: true, optional: true, required: false
  private _authenticateTemplateName?: string; 
  public get authenticateTemplateName() {
    return this.getStringAttribute('authenticate_template_name');
  }
  public set authenticateTemplateName(value: string) {
    this._authenticateTemplateName = value;
  }
  public resetAuthenticateTemplateName() {
    this._authenticateTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateTemplateNameInput() {
    return this._authenticateTemplateName;
  }

  // data_ip_address_pool_name - computed: true, optional: true, required: false
  private _dataIpAddressPoolName?: string; 
  public get dataIpAddressPoolName() {
    return this.getStringAttribute('data_ip_address_pool_name');
  }
  public set dataIpAddressPoolName(value: string) {
    this._dataIpAddressPoolName = value;
  }
  public resetDataIpAddressPoolName() {
    this._dataIpAddressPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIpAddressPoolNameInput() {
    return this._dataIpAddressPoolName;
  }

  // device_management_ip_address - computed: false, optional: true, required: false
  private _deviceManagementIpAddress?: string; 
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }
  public set deviceManagementIpAddress(value: string) {
    this._deviceManagementIpAddress = value;
  }
  public resetDeviceManagementIpAddress() {
    this._deviceManagementIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceManagementIpAddressInput() {
    return this._deviceManagementIpAddress;
  }

  // interface_description - computed: true, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_names - computed: true, optional: true, required: false
  private _interfaceNames?: string[]; 
  public get interfaceNames() {
    return this.getListAttribute('interface_names');
  }
  public set interfaceNames(value: string[]) {
    this._interfaceNames = value;
  }
  public resetInterfaceNames() {
    this._interfaceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNamesInput() {
    return this._interfaceNames;
  }

  // scalable_group_name - computed: true, optional: true, required: false
  private _scalableGroupName?: string; 
  public get scalableGroupName() {
    return this.getStringAttribute('scalable_group_name');
  }
  public set scalableGroupName(value: string) {
    this._scalableGroupName = value;
  }
  public resetScalableGroupName() {
    this._scalableGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableGroupNameInput() {
    return this._scalableGroupName;
  }

  // site_name_hierarchy - computed: true, optional: true, required: false
  private _siteNameHierarchy?: string; 
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
  public set siteNameHierarchy(value: string) {
    this._siteNameHierarchy = value;
  }
  public resetSiteNameHierarchy() {
    this._siteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameHierarchyInput() {
    return this._siteNameHierarchy;
  }

  // voice_ip_address_pool_name - computed: true, optional: true, required: false
  private _voiceIpAddressPoolName?: string; 
  public get voiceIpAddressPoolName() {
    return this.getStringAttribute('voice_ip_address_pool_name');
  }
  public set voiceIpAddressPoolName(value: string) {
    this._voiceIpAddressPoolName = value;
  }
  public resetVoiceIpAddressPoolName() {
    this._voiceIpAddressPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceIpAddressPoolNameInput() {
    return this._voiceIpAddressPoolName;
  }
}

export class SdaPortAssignmentForUserDeviceParametersList extends cdktf.ComplexList {
  public internalValue? : SdaPortAssignmentForUserDeviceParameters[] | cdktf.IResolvable

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
  public get(index: number): SdaPortAssignmentForUserDeviceParametersOutputReference {
    return new SdaPortAssignmentForUserDeviceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device dnacenter_sda_port_assignment_for_user_device}
*/
export class SdaPortAssignmentForUserDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sda_port_assignment_for_user_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdaPortAssignmentForUserDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdaPortAssignmentForUserDevice to import
  * @param importFromId The id of the existing SdaPortAssignmentForUserDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdaPortAssignmentForUserDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sda_port_assignment_for_user_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_user_device dnacenter_sda_port_assignment_for_user_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdaPortAssignmentForUserDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SdaPortAssignmentForUserDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sda_port_assignment_for_user_device',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new SdaPortAssignmentForUserDeviceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SdaPortAssignmentForUserDeviceParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SdaPortAssignmentForUserDeviceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(sdaPortAssignmentForUserDeviceParametersToTerraform, true)(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(sdaPortAssignmentForUserDeviceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdaPortAssignmentForUserDeviceParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
