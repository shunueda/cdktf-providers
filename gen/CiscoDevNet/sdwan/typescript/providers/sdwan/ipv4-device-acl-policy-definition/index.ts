// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4DeviceAclPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default action, either `accept` or `drop`
  *   - Choices: `accept`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#default_action Ipv4DeviceAclPolicyDefinition#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#description Ipv4DeviceAclPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#name Ipv4DeviceAclPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of ACL sequences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#sequences Ipv4DeviceAclPolicyDefinition#sequences}
  */
  readonly sequences: Ipv4DeviceAclPolicyDefinitionSequences[] | cdktf.IResolvable;
}
export interface Ipv4DeviceAclPolicyDefinitionSequencesActionEntries {
  /**
  * Counter name, Attribute conditional on `type` being equal to `count`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#counter_name Ipv4DeviceAclPolicyDefinition#counter_name}
  */
  readonly counterName?: string;
  /**
  * Type of action entry
  *   - Choices: `count`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#type Ipv4DeviceAclPolicyDefinition#type}
  */
  readonly type: string;
}

export function ipv4DeviceAclPolicyDefinitionSequencesActionEntriesToTerraform(struct?: Ipv4DeviceAclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_name: cdktf.stringToTerraform(struct!.counterName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipv4DeviceAclPolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: Ipv4DeviceAclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter_name: {
      value: cdktf.stringToHclTerraform(struct!.counterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv4DeviceAclPolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4DeviceAclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterName = this._counterName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv4DeviceAclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counterName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counterName = value.counterName;
      this._type = value.type;
    }
  }

  // counter_name - computed: false, optional: true, required: false
  private _counterName?: string; 
  public get counterName() {
    return this.getStringAttribute('counter_name');
  }
  public set counterName(value: string) {
    this._counterName = value;
  }
  public resetCounterName() {
    this._counterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterNameInput() {
    return this._counterName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Ipv4DeviceAclPolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {
  public internalValue? : Ipv4DeviceAclPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable

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
  public get(index: number): Ipv4DeviceAclPolicyDefinitionSequencesActionEntriesOutputReference {
    return new Ipv4DeviceAclPolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ipv4DeviceAclPolicyDefinitionSequencesMatchEntries {
  /**
  * Destination data IPv4 prefix list ID, Attribute conditional on `type` being equal to `destinationDataPrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#destination_data_ipv4_prefix_list_id Ipv4DeviceAclPolicyDefinition#destination_data_ipv4_prefix_list_id}
  */
  readonly destinationDataIpv4PrefixListId?: string;
  /**
  * Destination data IPv4 prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#destination_data_ipv4_prefix_list_version Ipv4DeviceAclPolicyDefinition#destination_data_ipv4_prefix_list_version}
  */
  readonly destinationDataIpv4PrefixListVersion?: number;
  /**
  * Destination IP prefix, Attribute conditional on `type` being equal to `destinationIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#destination_ip Ipv4DeviceAclPolicyDefinition#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Destination IP prefix variable, Attribute conditional on `type` being equal to `destinationIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#destination_ip_variable Ipv4DeviceAclPolicyDefinition#destination_ip_variable}
  */
  readonly destinationIpVariable?: string;
  /**
  * Destination port, only `22` and `161` supported, Attribute conditional on `type` being equal to `destinationPort`
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#destination_port Ipv4DeviceAclPolicyDefinition#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Source data IPv4 prefix list ID, Attribute conditional on `type` being equal to `sourceDataPrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#source_data_ipv4_prefix_list_id Ipv4DeviceAclPolicyDefinition#source_data_ipv4_prefix_list_id}
  */
  readonly sourceDataIpv4PrefixListId?: string;
  /**
  * Source data IPv4 prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#source_data_ipv4_prefix_list_version Ipv4DeviceAclPolicyDefinition#source_data_ipv4_prefix_list_version}
  */
  readonly sourceDataIpv4PrefixListVersion?: number;
  /**
  * Source IP prefix, Attribute conditional on `type` being equal to `sourceIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#source_ip Ipv4DeviceAclPolicyDefinition#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Source IP prefix variable, Attribute conditional on `type` being equal to `sourceIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#source_ip_variable Ipv4DeviceAclPolicyDefinition#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Source ports. Single value (0-65535) or ranges separated by spaces., Attribute conditional on `type` being equal to `sourcePort`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#source_ports Ipv4DeviceAclPolicyDefinition#source_ports}
  */
  readonly sourcePorts?: string;
  /**
  * Type of match entry
  *   - Choices: `sourceIp`, `destinationIp`, `sourcePort`, `destinationPort`, `sourceDataPrefixList`, `destinationDataPrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#type Ipv4DeviceAclPolicyDefinition#type}
  */
  readonly type: string;
}

export function ipv4DeviceAclPolicyDefinitionSequencesMatchEntriesToTerraform(struct?: Ipv4DeviceAclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_data_ipv4_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataIpv4PrefixListId),
    destination_data_ipv4_prefix_list_version: cdktf.numberToTerraform(struct!.destinationDataIpv4PrefixListVersion),
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_ip_variable: cdktf.stringToTerraform(struct!.destinationIpVariable),
    destination_port: cdktf.numberToTerraform(struct!.destinationPort),
    source_data_ipv4_prefix_list_id: cdktf.stringToTerraform(struct!.sourceDataIpv4PrefixListId),
    source_data_ipv4_prefix_list_version: cdktf.numberToTerraform(struct!.sourceDataIpv4PrefixListVersion),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_variable: cdktf.stringToTerraform(struct!.sourceIpVariable),
    source_ports: cdktf.stringToTerraform(struct!.sourcePorts),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipv4DeviceAclPolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: Ipv4DeviceAclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_data_ipv4_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataIpv4PrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_ipv4_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.destinationDataIpv4PrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.destinationIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.numberToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_data_ipv4_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataIpv4PrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_ipv4_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.sourceDataIpv4PrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ports: {
      value: cdktf.stringToHclTerraform(struct!.sourcePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv4DeviceAclPolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4DeviceAclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationDataIpv4PrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataIpv4PrefixListId = this._destinationDataIpv4PrefixListId;
    }
    if (this._destinationDataIpv4PrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataIpv4PrefixListVersion = this._destinationDataIpv4PrefixListVersion;
    }
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpVariable = this._destinationIpVariable;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._sourceDataIpv4PrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataIpv4PrefixListId = this._sourceDataIpv4PrefixListId;
    }
    if (this._sourceDataIpv4PrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataIpv4PrefixListVersion = this._sourceDataIpv4PrefixListVersion;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpVariable = this._sourceIpVariable;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv4DeviceAclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationDataIpv4PrefixListId = undefined;
      this._destinationDataIpv4PrefixListVersion = undefined;
      this._destinationIp = undefined;
      this._destinationIpVariable = undefined;
      this._destinationPort = undefined;
      this._sourceDataIpv4PrefixListId = undefined;
      this._sourceDataIpv4PrefixListVersion = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._sourcePorts = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationDataIpv4PrefixListId = value.destinationDataIpv4PrefixListId;
      this._destinationDataIpv4PrefixListVersion = value.destinationDataIpv4PrefixListVersion;
      this._destinationIp = value.destinationIp;
      this._destinationIpVariable = value.destinationIpVariable;
      this._destinationPort = value.destinationPort;
      this._sourceDataIpv4PrefixListId = value.sourceDataIpv4PrefixListId;
      this._sourceDataIpv4PrefixListVersion = value.sourceDataIpv4PrefixListVersion;
      this._sourceIp = value.sourceIp;
      this._sourceIpVariable = value.sourceIpVariable;
      this._sourcePorts = value.sourcePorts;
      this._type = value.type;
    }
  }

  // destination_data_ipv4_prefix_list_id - computed: false, optional: true, required: false
  private _destinationDataIpv4PrefixListId?: string; 
  public get destinationDataIpv4PrefixListId() {
    return this.getStringAttribute('destination_data_ipv4_prefix_list_id');
  }
  public set destinationDataIpv4PrefixListId(value: string) {
    this._destinationDataIpv4PrefixListId = value;
  }
  public resetDestinationDataIpv4PrefixListId() {
    this._destinationDataIpv4PrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataIpv4PrefixListIdInput() {
    return this._destinationDataIpv4PrefixListId;
  }

  // destination_data_ipv4_prefix_list_version - computed: false, optional: true, required: false
  private _destinationDataIpv4PrefixListVersion?: number; 
  public get destinationDataIpv4PrefixListVersion() {
    return this.getNumberAttribute('destination_data_ipv4_prefix_list_version');
  }
  public set destinationDataIpv4PrefixListVersion(value: number) {
    this._destinationDataIpv4PrefixListVersion = value;
  }
  public resetDestinationDataIpv4PrefixListVersion() {
    this._destinationDataIpv4PrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataIpv4PrefixListVersionInput() {
    return this._destinationDataIpv4PrefixListVersion;
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // destination_ip_variable - computed: false, optional: true, required: false
  private _destinationIpVariable?: string; 
  public get destinationIpVariable() {
    return this.getStringAttribute('destination_ip_variable');
  }
  public set destinationIpVariable(value: string) {
    this._destinationIpVariable = value;
  }
  public resetDestinationIpVariable() {
    this._destinationIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpVariableInput() {
    return this._destinationIpVariable;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // source_data_ipv4_prefix_list_id - computed: false, optional: true, required: false
  private _sourceDataIpv4PrefixListId?: string; 
  public get sourceDataIpv4PrefixListId() {
    return this.getStringAttribute('source_data_ipv4_prefix_list_id');
  }
  public set sourceDataIpv4PrefixListId(value: string) {
    this._sourceDataIpv4PrefixListId = value;
  }
  public resetSourceDataIpv4PrefixListId() {
    this._sourceDataIpv4PrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIpv4PrefixListIdInput() {
    return this._sourceDataIpv4PrefixListId;
  }

  // source_data_ipv4_prefix_list_version - computed: false, optional: true, required: false
  private _sourceDataIpv4PrefixListVersion?: number; 
  public get sourceDataIpv4PrefixListVersion() {
    return this.getNumberAttribute('source_data_ipv4_prefix_list_version');
  }
  public set sourceDataIpv4PrefixListVersion(value: number) {
    this._sourceDataIpv4PrefixListVersion = value;
  }
  public resetSourceDataIpv4PrefixListVersion() {
    this._sourceDataIpv4PrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIpv4PrefixListVersionInput() {
    return this._sourceDataIpv4PrefixListVersion;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip_variable - computed: false, optional: true, required: false
  private _sourceIpVariable?: string; 
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }
  public set sourceIpVariable(value: string) {
    this._sourceIpVariable = value;
  }
  public resetSourceIpVariable() {
    this._sourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpVariableInput() {
    return this._sourceIpVariable;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string; 
  public get sourcePorts() {
    return this.getStringAttribute('source_ports');
  }
  public set sourcePorts(value: string) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Ipv4DeviceAclPolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : Ipv4DeviceAclPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): Ipv4DeviceAclPolicyDefinitionSequencesMatchEntriesOutputReference {
    return new Ipv4DeviceAclPolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ipv4DeviceAclPolicyDefinitionSequences {
  /**
  * List of action entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#action_entries Ipv4DeviceAclPolicyDefinition#action_entries}
  */
  readonly actionEntries?: Ipv4DeviceAclPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable;
  /**
  * Base action, either `accept` or `drop`
  *   - Choices: `accept`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#base_action Ipv4DeviceAclPolicyDefinition#base_action}
  */
  readonly baseAction?: string;
  /**
  * Sequence ID
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#id Ipv4DeviceAclPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * List of match entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#match_entries Ipv4DeviceAclPolicyDefinition#match_entries}
  */
  readonly matchEntries?: Ipv4DeviceAclPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable;
  /**
  * Sequence name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#name Ipv4DeviceAclPolicyDefinition#name}
  */
  readonly name: string;
}

export function ipv4DeviceAclPolicyDefinitionSequencesToTerraform(struct?: Ipv4DeviceAclPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_entries: cdktf.listMapper(ipv4DeviceAclPolicyDefinitionSequencesActionEntriesToTerraform, false)(struct!.actionEntries),
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    id: cdktf.numberToTerraform(struct!.id),
    match_entries: cdktf.listMapper(ipv4DeviceAclPolicyDefinitionSequencesMatchEntriesToTerraform, false)(struct!.matchEntries),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipv4DeviceAclPolicyDefinitionSequencesToHclTerraform(struct?: Ipv4DeviceAclPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_entries: {
      value: cdktf.listMapperHcl(ipv4DeviceAclPolicyDefinitionSequencesActionEntriesToHclTerraform, false)(struct!.actionEntries),
      isBlock: true,
      type: "set",
      storageClassType: "Ipv4DeviceAclPolicyDefinitionSequencesActionEntriesList",
    },
    base_action: {
      value: cdktf.stringToHclTerraform(struct!.baseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_entries: {
      value: cdktf.listMapperHcl(ipv4DeviceAclPolicyDefinitionSequencesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "set",
      storageClassType: "Ipv4DeviceAclPolicyDefinitionSequencesMatchEntriesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv4DeviceAclPolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4DeviceAclPolicyDefinitionSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionEntries = this._actionEntries?.internalValue;
    }
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv4DeviceAclPolicyDefinitionSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = undefined;
      this._baseAction = undefined;
      this._id = undefined;
      this._matchEntries.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = value.actionEntries;
      this._baseAction = value.baseAction;
      this._id = value.id;
      this._matchEntries.internalValue = value.matchEntries;
      this._name = value.name;
    }
  }

  // action_entries - computed: false, optional: true, required: false
  private _actionEntries = new Ipv4DeviceAclPolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
  }
  public putActionEntries(value: Ipv4DeviceAclPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable) {
    this._actionEntries.internalValue = value;
  }
  public resetActionEntries() {
    this._actionEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEntriesInput() {
    return this._actionEntries.internalValue;
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

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new Ipv4DeviceAclPolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: Ipv4DeviceAclPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
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
}

export class Ipv4DeviceAclPolicyDefinitionSequencesList extends cdktf.ComplexList {
  public internalValue? : Ipv4DeviceAclPolicyDefinitionSequences[] | cdktf.IResolvable

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
  public get(index: number): Ipv4DeviceAclPolicyDefinitionSequencesOutputReference {
    return new Ipv4DeviceAclPolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition sdwan_ipv4_device_acl_policy_definition}
*/
export class Ipv4DeviceAclPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_ipv4_device_acl_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4DeviceAclPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4DeviceAclPolicyDefinition to import
  * @param importFromId The id of the existing Ipv4DeviceAclPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4DeviceAclPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_ipv4_device_acl_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_device_acl_policy_definition sdwan_ipv4_device_acl_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4DeviceAclPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv4DeviceAclPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_ipv4_device_acl_policy_definition',
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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // sequences - computed: false, optional: false, required: true
  private _sequences = new Ipv4DeviceAclPolicyDefinitionSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: Ipv4DeviceAclPolicyDefinitionSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      name: cdktf.stringToTerraform(this._name),
      sequences: cdktf.listMapper(ipv4DeviceAclPolicyDefinitionSequencesToTerraform, false)(this._sequences.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequences: {
        value: cdktf.listMapperHcl(ipv4DeviceAclPolicyDefinitionSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv4DeviceAclPolicyDefinitionSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
