// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricPortAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric the device is assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#fabric_id FabricPortAssignments#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Network device ID of the port assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#network_device_id FabricPortAssignments#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * List of port assignments in SD-Access fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#port_assignments FabricPortAssignments#port_assignments}
  */
  readonly portAssignments: FabricPortAssignmentsPortAssignments[] | cdktf.IResolvable;
}
export interface FabricPortAssignmentsPortAssignments {
  /**
  * Authenticate template name of the port assignment
  *   - Choices: `No Authentication`, `Open Authentication`, `Closed Authentication`, `Low Impact`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#authenticate_template_name FabricPortAssignments#authenticate_template_name}
  */
  readonly authenticateTemplateName?: string;
  /**
  * Connected device type of the port assignment
  *   - Choices: `USER_DEVICE`, `ACCESS_POINT`, `TRUNKING_DEVICE`, `AUTHENTICATOR_SWITCH`, `SUPPLICANT_BASED_EXTENDED_NODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#connected_device_type FabricPortAssignments#connected_device_type}
  */
  readonly connectedDeviceType: string;
  /**
  * Data VLAN name of the port assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#data_vlan_name FabricPortAssignments#data_vlan_name}
  */
  readonly dataVlanName?: string;
  /**
  * ID of the fabric the device is assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#fabric_id FabricPortAssignments#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Interface description of the port assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#interface_description FabricPortAssignments#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Interface name of the port assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#interface_name FabricPortAssignments#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Network device ID of the port assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#network_device_id FabricPortAssignments#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * Security group name of the port assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#security_group_name FabricPortAssignments#security_group_name}
  */
  readonly securityGroupName?: string;
  /**
  * Voice VLAN name of the port assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#voice_vlan_name FabricPortAssignments#voice_vlan_name}
  */
  readonly voiceVlanName?: string;
}

export function fabricPortAssignmentsPortAssignmentsToTerraform(struct?: FabricPortAssignmentsPortAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_template_name: cdktf.stringToTerraform(struct!.authenticateTemplateName),
    connected_device_type: cdktf.stringToTerraform(struct!.connectedDeviceType),
    data_vlan_name: cdktf.stringToTerraform(struct!.dataVlanName),
    fabric_id: cdktf.stringToTerraform(struct!.fabricId),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    network_device_id: cdktf.stringToTerraform(struct!.networkDeviceId),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
    voice_vlan_name: cdktf.stringToTerraform(struct!.voiceVlanName),
  }
}


export function fabricPortAssignmentsPortAssignmentsToHclTerraform(struct?: FabricPortAssignmentsPortAssignments | cdktf.IResolvable): any {
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
    connected_device_type: {
      value: cdktf.stringToHclTerraform(struct!.connectedDeviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.dataVlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fabric_id: {
      value: cdktf.stringToHclTerraform(struct!.fabricId),
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
    network_device_id: {
      value: cdktf.stringToHclTerraform(struct!.networkDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voice_vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.voiceVlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortAssignmentsPortAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricPortAssignmentsPortAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateTemplateName = this._authenticateTemplateName;
    }
    if (this._connectedDeviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedDeviceType = this._connectedDeviceType;
    }
    if (this._dataVlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVlanName = this._dataVlanName;
    }
    if (this._fabricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricId = this._fabricId;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._networkDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDeviceId = this._networkDeviceId;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    if (this._voiceVlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceVlanName = this._voiceVlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortAssignmentsPortAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateTemplateName = undefined;
      this._connectedDeviceType = undefined;
      this._dataVlanName = undefined;
      this._fabricId = undefined;
      this._interfaceDescription = undefined;
      this._interfaceName = undefined;
      this._networkDeviceId = undefined;
      this._securityGroupName = undefined;
      this._voiceVlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateTemplateName = value.authenticateTemplateName;
      this._connectedDeviceType = value.connectedDeviceType;
      this._dataVlanName = value.dataVlanName;
      this._fabricId = value.fabricId;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceName = value.interfaceName;
      this._networkDeviceId = value.networkDeviceId;
      this._securityGroupName = value.securityGroupName;
      this._voiceVlanName = value.voiceVlanName;
    }
  }

  // authenticate_template_name - computed: false, optional: true, required: false
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

  // connected_device_type - computed: false, optional: false, required: true
  private _connectedDeviceType?: string; 
  public get connectedDeviceType() {
    return this.getStringAttribute('connected_device_type');
  }
  public set connectedDeviceType(value: string) {
    this._connectedDeviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedDeviceTypeInput() {
    return this._connectedDeviceType;
  }

  // data_vlan_name - computed: false, optional: true, required: false
  private _dataVlanName?: string; 
  public get dataVlanName() {
    return this.getStringAttribute('data_vlan_name');
  }
  public set dataVlanName(value: string) {
    this._dataVlanName = value;
  }
  public resetDataVlanName() {
    this._dataVlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVlanNameInput() {
    return this._dataVlanName;
  }

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_description - computed: false, optional: true, required: false
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

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // network_device_id - computed: false, optional: false, required: true
  private _networkDeviceId?: string; 
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }
  public set networkDeviceId(value: string) {
    this._networkDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdInput() {
    return this._networkDeviceId;
  }

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }

  // voice_vlan_name - computed: false, optional: true, required: false
  private _voiceVlanName?: string; 
  public get voiceVlanName() {
    return this.getStringAttribute('voice_vlan_name');
  }
  public set voiceVlanName(value: string) {
    this._voiceVlanName = value;
  }
  public resetVoiceVlanName() {
    this._voiceVlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceVlanNameInput() {
    return this._voiceVlanName;
  }
}

export class FabricPortAssignmentsPortAssignmentsList extends cdktf.ComplexList {
  public internalValue? : FabricPortAssignmentsPortAssignments[] | cdktf.IResolvable

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
  public get(index: number): FabricPortAssignmentsPortAssignmentsOutputReference {
    return new FabricPortAssignmentsPortAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments catalystcenter_fabric_port_assignments}
*/
export class FabricPortAssignments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_port_assignments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricPortAssignments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricPortAssignments to import
  * @param importFromId The id of the existing FabricPortAssignments that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricPortAssignments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_port_assignments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_port_assignments catalystcenter_fabric_port_assignments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricPortAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: FabricPortAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_port_assignments',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricId = config.fabricId;
    this._networkDeviceId = config.networkDeviceId;
    this._portAssignments.internalValue = config.portAssignments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_device_id - computed: false, optional: false, required: true
  private _networkDeviceId?: string; 
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }
  public set networkDeviceId(value: string) {
    this._networkDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdInput() {
    return this._networkDeviceId;
  }

  // port_assignments - computed: false, optional: false, required: true
  private _portAssignments = new FabricPortAssignmentsPortAssignmentsList(this, "port_assignments", true);
  public get portAssignments() {
    return this._portAssignments;
  }
  public putPortAssignments(value: FabricPortAssignmentsPortAssignments[] | cdktf.IResolvable) {
    this._portAssignments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portAssignmentsInput() {
    return this._portAssignments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      network_device_id: cdktf.stringToTerraform(this._networkDeviceId),
      port_assignments: cdktf.listMapper(fabricPortAssignmentsPortAssignmentsToTerraform, false)(this._portAssignments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_device_id: {
        value: cdktf.stringToHclTerraform(this._networkDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_assignments: {
        value: cdktf.listMapperHcl(fabricPortAssignmentsPortAssignmentsToHclTerraform, false)(this._portAssignments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricPortAssignmentsPortAssignmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
