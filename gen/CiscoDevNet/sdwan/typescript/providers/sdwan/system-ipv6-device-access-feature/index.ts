// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpv6DeviceAccessFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default Action
  *   - Choices: `drop`, `accept`
  *   - Default value: `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#default_action SystemIpv6DeviceAccessFeature#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#description SystemIpv6DeviceAccessFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#feature_profile_id SystemIpv6DeviceAccessFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#name SystemIpv6DeviceAccessFeature#name}
  */
  readonly name: string;
  /**
  * Device Access Control List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#sequences SystemIpv6DeviceAccessFeature#sequences}
  */
  readonly sequences?: SystemIpv6DeviceAccessFeatureSequences[] | cdktf.IResolvable;
}
export interface SystemIpv6DeviceAccessFeatureSequences {
  /**
  * Base Action
  *   - Choices: `drop`, `accept`
  *   - Default value: `accept`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#base_action SystemIpv6DeviceAccessFeature#base_action}
  */
  readonly baseAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#destination_data_prefix_list_id SystemIpv6DeviceAccessFeature#destination_data_prefix_list_id}
  */
  readonly destinationDataPrefixListId?: string;
  /**
  * Destination Data IP Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#destination_ip_prefix_list SystemIpv6DeviceAccessFeature#destination_ip_prefix_list}
  */
  readonly destinationIpPrefixList?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#destination_ip_prefix_list_variable SystemIpv6DeviceAccessFeature#destination_ip_prefix_list_variable}
  */
  readonly destinationIpPrefixListVariable?: string;
  /**
  * device access protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#device_access_port SystemIpv6DeviceAccessFeature#device_access_port}
  */
  readonly deviceAccessPort?: number;
  /**
  * Sequence Id
  *   - Range: `1`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#id SystemIpv6DeviceAccessFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Sequence Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#name SystemIpv6DeviceAccessFeature#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#source_data_prefix_list_id SystemIpv6DeviceAccessFeature#source_data_prefix_list_id}
  */
  readonly sourceDataPrefixListId?: string;
  /**
  * Source Data IP Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#source_ip_prefix_list SystemIpv6DeviceAccessFeature#source_ip_prefix_list}
  */
  readonly sourceIpPrefixList?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#source_ip_prefix_list_variable SystemIpv6DeviceAccessFeature#source_ip_prefix_list_variable}
  */
  readonly sourceIpPrefixListVariable?: string;
  /**
  * Source Port List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#source_ports SystemIpv6DeviceAccessFeature#source_ports}
  */
  readonly sourcePorts?: number[];
}

export function systemIpv6DeviceAccessFeatureSequencesToTerraform(struct?: SystemIpv6DeviceAccessFeatureSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    destination_data_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataPrefixListId),
    destination_ip_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationIpPrefixList),
    destination_ip_prefix_list_variable: cdktf.stringToTerraform(struct!.destinationIpPrefixListVariable),
    device_access_port: cdktf.numberToTerraform(struct!.deviceAccessPort),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    source_data_prefix_list_id: cdktf.stringToTerraform(struct!.sourceDataPrefixListId),
    source_ip_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIpPrefixList),
    source_ip_prefix_list_variable: cdktf.stringToTerraform(struct!.sourceIpPrefixListVariable),
    source_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.sourcePorts),
  }
}


export function systemIpv6DeviceAccessFeatureSequencesToHclTerraform(struct?: SystemIpv6DeviceAccessFeatureSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_action: {
      value: cdktf.stringToHclTerraform(struct!.baseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ip_prefix_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationIpPrefixList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_ip_prefix_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.destinationIpPrefixListVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_access_port: {
      value: cdktf.numberToHclTerraform(struct!.deviceAccessPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_prefix_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIpPrefixList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_ip_prefix_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpPrefixListVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpv6DeviceAccessFeatureSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpv6DeviceAccessFeatureSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._destinationDataPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataPrefixListId = this._destinationDataPrefixListId;
    }
    if (this._destinationIpPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpPrefixList = this._destinationIpPrefixList;
    }
    if (this._destinationIpPrefixListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpPrefixListVariable = this._destinationIpPrefixListVariable;
    }
    if (this._deviceAccessPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceAccessPort = this._deviceAccessPort;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceDataPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataPrefixListId = this._sourceDataPrefixListId;
    }
    if (this._sourceIpPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpPrefixList = this._sourceIpPrefixList;
    }
    if (this._sourceIpPrefixListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpPrefixListVariable = this._sourceIpPrefixListVariable;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpv6DeviceAccessFeatureSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseAction = undefined;
      this._destinationDataPrefixListId = undefined;
      this._destinationIpPrefixList = undefined;
      this._destinationIpPrefixListVariable = undefined;
      this._deviceAccessPort = undefined;
      this._id = undefined;
      this._name = undefined;
      this._sourceDataPrefixListId = undefined;
      this._sourceIpPrefixList = undefined;
      this._sourceIpPrefixListVariable = undefined;
      this._sourcePorts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseAction = value.baseAction;
      this._destinationDataPrefixListId = value.destinationDataPrefixListId;
      this._destinationIpPrefixList = value.destinationIpPrefixList;
      this._destinationIpPrefixListVariable = value.destinationIpPrefixListVariable;
      this._deviceAccessPort = value.deviceAccessPort;
      this._id = value.id;
      this._name = value.name;
      this._sourceDataPrefixListId = value.sourceDataPrefixListId;
      this._sourceIpPrefixList = value.sourceIpPrefixList;
      this._sourceIpPrefixListVariable = value.sourceIpPrefixListVariable;
      this._sourcePorts = value.sourcePorts;
    }
  }

  // base_action - computed: false, optional: true, required: false
  private _baseAction?: string; 
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }
  public set baseAction(value: string) {
    this._baseAction = value;
  }
  public resetBaseAction() {
    this._baseAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseActionInput() {
    return this._baseAction;
  }

  // destination_data_prefix_list_id - computed: false, optional: true, required: false
  private _destinationDataPrefixListId?: string; 
  public get destinationDataPrefixListId() {
    return this.getStringAttribute('destination_data_prefix_list_id');
  }
  public set destinationDataPrefixListId(value: string) {
    this._destinationDataPrefixListId = value;
  }
  public resetDestinationDataPrefixListId() {
    this._destinationDataPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataPrefixListIdInput() {
    return this._destinationDataPrefixListId;
  }

  // destination_ip_prefix_list - computed: false, optional: true, required: false
  private _destinationIpPrefixList?: string[]; 
  public get destinationIpPrefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_ip_prefix_list'));
  }
  public set destinationIpPrefixList(value: string[]) {
    this._destinationIpPrefixList = value;
  }
  public resetDestinationIpPrefixList() {
    this._destinationIpPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpPrefixListInput() {
    return this._destinationIpPrefixList;
  }

  // destination_ip_prefix_list_variable - computed: false, optional: true, required: false
  private _destinationIpPrefixListVariable?: string; 
  public get destinationIpPrefixListVariable() {
    return this.getStringAttribute('destination_ip_prefix_list_variable');
  }
  public set destinationIpPrefixListVariable(value: string) {
    this._destinationIpPrefixListVariable = value;
  }
  public resetDestinationIpPrefixListVariable() {
    this._destinationIpPrefixListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpPrefixListVariableInput() {
    return this._destinationIpPrefixListVariable;
  }

  // device_access_port - computed: false, optional: true, required: false
  private _deviceAccessPort?: number; 
  public get deviceAccessPort() {
    return this.getNumberAttribute('device_access_port');
  }
  public set deviceAccessPort(value: number) {
    this._deviceAccessPort = value;
  }
  public resetDeviceAccessPort() {
    this._deviceAccessPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAccessPortInput() {
    return this._deviceAccessPort;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // source_data_prefix_list_id - computed: false, optional: true, required: false
  private _sourceDataPrefixListId?: string; 
  public get sourceDataPrefixListId() {
    return this.getStringAttribute('source_data_prefix_list_id');
  }
  public set sourceDataPrefixListId(value: string) {
    this._sourceDataPrefixListId = value;
  }
  public resetSourceDataPrefixListId() {
    this._sourceDataPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataPrefixListIdInput() {
    return this._sourceDataPrefixListId;
  }

  // source_ip_prefix_list - computed: false, optional: true, required: false
  private _sourceIpPrefixList?: string[]; 
  public get sourceIpPrefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_prefix_list'));
  }
  public set sourceIpPrefixList(value: string[]) {
    this._sourceIpPrefixList = value;
  }
  public resetSourceIpPrefixList() {
    this._sourceIpPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpPrefixListInput() {
    return this._sourceIpPrefixList;
  }

  // source_ip_prefix_list_variable - computed: false, optional: true, required: false
  private _sourceIpPrefixListVariable?: string; 
  public get sourceIpPrefixListVariable() {
    return this.getStringAttribute('source_ip_prefix_list_variable');
  }
  public set sourceIpPrefixListVariable(value: string) {
    this._sourceIpPrefixListVariable = value;
  }
  public resetSourceIpPrefixListVariable() {
    this._sourceIpPrefixListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpPrefixListVariableInput() {
    return this._sourceIpPrefixListVariable;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: number[]; 
  public get sourcePorts() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('source_ports')));
  }
  public set sourcePorts(value: number[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }
}

export class SystemIpv6DeviceAccessFeatureSequencesList extends cdktf.ComplexList {
  public internalValue? : SystemIpv6DeviceAccessFeatureSequences[] | cdktf.IResolvable

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
  public get(index: number): SystemIpv6DeviceAccessFeatureSequencesOutputReference {
    return new SystemIpv6DeviceAccessFeatureSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature sdwan_system_ipv6_device_access_feature}
*/
export class SystemIpv6DeviceAccessFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_ipv6_device_access_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIpv6DeviceAccessFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIpv6DeviceAccessFeature to import
  * @param importFromId The id of the existing SystemIpv6DeviceAccessFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIpv6DeviceAccessFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_ipv6_device_access_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ipv6_device_access_feature sdwan_system_ipv6_device_access_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpv6DeviceAccessFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemIpv6DeviceAccessFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_ipv6_device_access_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAction = config.defaultAction;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._sequences.internalValue = config.sequences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sequences - computed: false, optional: true, required: false
  private _sequences = new SystemIpv6DeviceAccessFeatureSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: SystemIpv6DeviceAccessFeatureSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  public resetSequences() {
    this._sequences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action: cdktf.stringToTerraform(this._defaultAction),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      sequences: cdktf.listMapper(systemIpv6DeviceAccessFeatureSequencesToTerraform, false)(this._sequences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      sequences: {
        value: cdktf.listMapperHcl(systemIpv6DeviceAccessFeatureSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpv6DeviceAccessFeatureSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
